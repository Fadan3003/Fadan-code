const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('fadanFS', {
  openDir:  ()          => ipcRenderer.invoke('dialog:openDir'),
  tree:     (dir)       => ipcRenderer.invoke('fs:tree',   dir),
  read:     (p)         => ipcRenderer.invoke('fs:read',   p),
  write:    (p, c)      => ipcRenderer.invoke('fs:write',  p, c),
  touch:    (p)         => ipcRenderer.invoke('fs:touch',  p),
  mkdir:    (p)         => ipcRenderer.invoke('fs:mkdir',  p),
  rename:   (o, n)      => ipcRenderer.invoke('fs:rename', o, n),
  delete:   (p)         => ipcRenderer.invoke('fs:delete', p),
  exists:   (p)         => ipcRenderer.invoke('fs:exists', p),
  watch:    (dir)       => ipcRenderer.invoke('fs:watch',  dir),
  onChanged:(cb)        => ipcRenderer.on('fs:changed', (_, data) => cb(data)),
});
