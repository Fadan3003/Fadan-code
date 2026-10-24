const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs   = require('fs');

let mainWindow   = null;
let activeWatcher = null;

// ─────────────────────────────────────────────────────────────────────────────
//  Window
// ─────────────────────────────────────────────────────────────────────────────
function createWindow() {
  mainWindow = new BrowserWindow({
    width:  1400,
    height: 900,
    minWidth:  800,
    minHeight: 560,
    backgroundColor: '#0d0d0d',
    title: 'Fadan Code',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
  mainWindow.setMenuBarVisibility(false);
  // mainWindow.webContents.openDevTools(); // ← uncomment to debug
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (!BrowserWindow.getAllWindows().length) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

// ─────────────────────────────────────────────────────────────────────────────
//  Dialog
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('dialog:openDir', async () => {
  const r = await dialog.showOpenDialog(mainWindow, {
    title:      'Open Project Folder — Fadan Code',
    properties: ['openDirectory', 'createDirectory'],
    buttonLabel: 'Open Folder'
  });
  return r.canceled ? null : r.filePaths[0];
});

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────────────────
const SKIP_DIRS  = new Set(['node_modules', '__pycache__', '.git', 'dist', 'build', '.gradle', 'target', '.svn', 'Thumbs.db', '.DS_Store']);
const SKIP_FILES = new Set(['.DS_Store', 'Thumbs.db']);

function buildTree(dir, base) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch (e) { return []; }

  const result = [];
  for (const e of entries) {
    if (e.name.startsWith('.') && ![ '.env', '.gitignore', '.editorconfig' ].includes(e.name)) continue;
    if (SKIP_FILES.has(e.name)) continue;
    const full = path.join(dir, e.name);
    const rel  = path.relative(base, full).replace(/\\/g, '/');
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      result.push({ name: e.name, path: rel + '/', type: 'dir', children: buildTree(full, base) });
    } else {
      result.push({ name: e.name, path: rel, type: 'file' });
    }
  }
  return result.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  Filesystem IPC
// ─────────────────────────────────────────────────────────────────────────────
ipcMain.handle('fs:tree', (_, dir) => {
  try   { return { tree: buildTree(dir, dir) }; }
  catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:read', (_, p) => {
  // Only read text files; return error for binary
  try {
    const buf = fs.readFileSync(p);
    // heuristic: if first 8000 bytes contain null byte → binary
    const slice = buf.slice(0, 8000);
    if (slice.includes(0)) return { error: 'binary', content: '' };
    return { content: buf.toString('utf8') };
  } catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:write', (_, p, content) => {
  try {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, content, 'utf8');
    return {};
  } catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:touch', (_, p) => {
  try {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    if (!fs.existsSync(p)) fs.writeFileSync(p, '', 'utf8');
    return {};
  } catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:mkdir', (_, p) => {
  try { fs.mkdirSync(p, { recursive: true }); return {}; }
  catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:rename', (_, oldP, newP) => {
  try {
    fs.mkdirSync(path.dirname(newP), { recursive: true });
    fs.renameSync(oldP, newP);
    return {};
  } catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:delete', (_, p) => {
  try { fs.rmSync(p, { recursive: true, force: true }); return {}; }
  catch (e) { return { error: e.message }; }
});

ipcMain.handle('fs:exists', (_, p) => fs.existsSync(p));

// ─────────────────────────────────────────────────────────────────────────────
//  Recursive directory watcher (Linux-compatible)
// ─────────────────────────────────────────────────────────────────────────────
function watchRecursive(rootDir, onChange) {
  const watchers = new Map();
  let rescanning = false;

  function watchOne(dir) {
    if (watchers.has(dir)) return;
    try {
      const w = fs.watch(dir, { persistent: false }, (event, filename) => {
        if (filename) onChange(event, path.join(dir, filename).replace(/\\/g, '/'));
        if (!rescanning) { rescanning = true; setTimeout(() => { rescan(); rescanning = false; }, 300); }
      });
      w.on('error', () => { watchers.delete(dir); });
      watchers.set(dir, w);
    } catch (_) {}
  }

  function rescan() {
    function walk(d) {
      watchOne(d);
      let ents;
      try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch (_) { return; }
      for (const e of ents) {
        if (e.isDirectory() && !SKIP_DIRS.has(e.name)) walk(path.join(d, e.name));
      }
    }
    walk(rootDir);
  }

  rescan();
  return { close: () => watchers.forEach(w => { try { w.close(); } catch (_) {} }) };
}

ipcMain.handle('fs:watch', (_, dir) => {
  if (activeWatcher) { activeWatcher.close(); activeWatcher = null; }
  activeWatcher = watchRecursive(dir, (event, filePath) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('fs:changed', { event, path: filePath });
    }
  });
  return {};
});
