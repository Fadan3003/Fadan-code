# 🖥️ Fadan Code

A real-filesystem code editor with AI generation, syntax highlighting for 15+ languages, live preview, and auto-save — built by [fadan3003](https://github.com/fadan3003).

<br>

<div align="center">

[![Download](https://img.shields.io/badge/⬇%20Download%20Fadan%20Code-A70000?style=for-the-badge&logoColor=white)](https://fadan3003.github.io/Fadan-code/code/download.html)

</div>

<br>

## ✨ Features

- 📂 **Real Filesystem** — Open any folder, all edits save directly to disk
- 🎨 **Syntax Highlighting** — HTML, CSS, JS, TS, Python, C/C++, Java, Rust, Go, PHP, Ruby, Shell, JSON, XML, Markdown and more
- ⚡ **Auto-save** — Every keystroke is saved after 350ms
- 🤖 **AI Generation** — Generate code with Claude AI, adapts to the active file type
- 🌐 **Live HTML Preview** — See your HTML/CSS rendered in real-time
- ✏️ **Smart Autocomplete** — HTML tags & attributes, CSS properties, JS/Python/C++ snippets
- 👁 **File Watcher** — External changes are detected and the tree refreshes automatically
- 🗂 **File Manager** — Create, rename, delete files and folders from the sidebar

<br>

## 📥 Download

| Platform | File | Link |
|----------|------|------|
| 🐧 Linux | `fadan-code_1.0.0_amd64.deb` | [Download](https://github.com/Fadan3003/Fadan-code/releases/download/v1.0.0/fadan-code_1.0.0_amd64.deb) |
| 🪟 Windows | `Fadan.Code.Setup.1.0.0.exe` | [Download](https://github.com/Fadan3003/Fadan-code/releases/download/v1.0.0/Fadan.Code.Setup.1.0.0.exe) |
| 🍎 macOS | `Fadan.Code-1.0.0-arm64.dmg` | [Download](https://github.com/Fadan3003/Fadan-code/releases/download/v1.0.0/Fadan.Code-1.0.0-arm64.dmg) |

<br>

## 🚀 Installation

### Linux
```bash
sudo dpkg -i fadan-code_1.0.0_amd64.deb
```

### Windows
Run `Fadan.Code.Setup.1.0.0.exe` and follow the setup wizard.
If SmartScreen blocks it → **More info → Run anyway**.

### macOS
Open the `.dmg`, drag **Fadan Code** into Applications.
If macOS blocks it → **System Settings → Privacy & Security → Open Anyway**.

<br>

## 🤖 AI Generation

1. Click **⚙ API Key** and paste your [Anthropic API key](https://console.anthropic.com)
2. Open or create a file
3. Type a prompt and press **Generate**

The AI generates code appropriate for the active file type — `.py` → Python, `.cpp` → C++, `.html` → HTML, etc.

<br>

## 🛠 Build from Source

```bash
git clone https://github.com/Fadan3003/Fadan-code.git
cd Fadan-code
npm install
npm start
```

Build packages:
```bash
npm run build:deb    # Linux .deb
npm run build:win    # Windows .exe
npm run build:mac    # macOS .dmg
```

<br>

## 📄 License

MIT © [fadan3003](https://github.com/fadan3003)
