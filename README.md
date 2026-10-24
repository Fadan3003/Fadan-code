# Fadan Code — Desktop (.deb)

A real-filesystem code editor with AI generation, built with Electron.

## Requirements
- Node.js 18+
- npm

## Quick start (run without installing)
```bash
npm install
npm start
```

## Build the .deb package
```bash
npm install
npm run build:deb
# Output: dist/fadan-code_1.0.0_amd64.deb
```

Install the .deb:
```bash
sudo dpkg -i dist/fadan-code_1.0.0_amd64.deb
```

## Features
- 📂 Opens any real directory — all changes write directly to disk
- 📁 File tree with create / rename / delete for files and folders
- ⚡ Auto-save on every keystroke (350ms debounce)
- 👁 Watches the directory for external changes and refreshes the tree
- 🎨 Syntax highlighting for: HTML, CSS, JS, TS, Python, C/C++, Java, Rust, Go, PHP, Ruby, Shell, JSON, XML, Markdown, YAML
- ✏️ Autocomplete for HTML tags/attributes, CSS properties, JS/TS snippets, Python snippets, C++ snippets
- 🤖 AI code generation via Anthropic API (set key in ⚙ API Key)
- 🌐 Live HTML/CSS preview with open-in-tab button

## Supported file types
.html .htm .css .js .mjs .ts .tsx .jsx .py .cpp .cc .cxx .c .h .hpp .java .rs .go .php .rb .sh .bash .zsh .json .yaml .yml .xml .svg .md .txt .env .gitignore .sql .csv and any other text file

## AI generation
1. Click **⚙ API Key** and paste your Anthropic API key (console.anthropic.com)
2. Open or create a file in the editor
3. Type a prompt and press Generate
The AI generates code appropriate for the active file type (.py → Python, .cpp → C++, etc.)

## Project save/load
Not needed — Fadan Code works directly on your real files. Open a folder, edit, done.
To back up: copy the folder. To share: zip the folder.

## Architecture
- `main.js` — Electron main process: window, filesystem IPC, directory watcher
- `preload.js` — Context bridge (exposes `window.fadanFS` to renderer)
- `renderer/index.html` — Full editor UI (HTML + CSS + JS, no framework)
- `build/icon.png` — 512×512 app icon
