const BASE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.m-0{margin:0}.m-1{margin:.25rem}.m-2{margin:.5rem}.m-3{margin:.75rem}.m-4{margin:1rem}.m-5{margin:1.25rem}.m-6{margin:1.5rem}
.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}
.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}
.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}
.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-5{margin-right:1.25rem}.mr-6{margin-right:1.5rem}
.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}
.pt-1{padding-top:.25rem}.pt-2{padding-top:.5rem}.pt-3{padding-top:.75rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.pt-6{padding-top:1.5rem}
.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pb-5{padding-bottom:1.25rem}.pb-6{padding-bottom:1.5rem}
.pl-1{padding-left:.25rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pl-5{padding-left:1.25rem}.pl-6{padding-left:1.5rem}
.pr-1{padding-right:.25rem}.pr-2{padding-right:.5rem}.pr-3{padding-right:.75rem}.pr-4{padding-right:1rem}.pr-5{padding-right:1.25rem}.pr-6{padding-right:1.5rem}
.invis{display:none}
.dark-mode{background-color:#121212;color:#f0f0f0}
.light-mode{background-color:#fff;color:#000}
button{padding:.5rem 1rem;border:none;border-radius:5px;cursor:pointer;background-color:rgb(167,0,0);color:#fff;font-size:1rem;transition:background-color .3s,transform .2s}
button:hover{background-color:rgb(120,0,0);transform:scale(1.05)}
button:active{transform:scale(.98)}
.login{width:100%;max-width:400px;margin:5vh auto;padding:2rem;background-color:#fff;border-radius:10px;box-shadow:0 4px 15px rgba(0,0,0,.2);display:flex;flex-direction:column;gap:1rem}
.login input{width:93%;padding:.75rem;font-size:1rem;border:1px solid #ccc;border-radius:5px;margin-bottom:1rem}
.login button{padding:.75rem;border-radius:5px;border:none;background-color:rgb(167,0,0);color:#fff;font-size:1rem;cursor:pointer;transition:background-color .2s}
.login button:hover{background-color:rgb(120,0,0)}
.login h1{font-size:2rem;text-align:center;margin-bottom:1.5rem;color:inherit}
input{width:200px;padding:.75rem;border:1px solid #ccc;border-radius:6px;font-size:1rem;font-family:inherit;outline:none;transition:all .3s ease}
input:focus{border-color:rgb(167,0,0);box-shadow:0 0 8px rgba(167,0,0,.3)}
input[type='text'],input[type='password']{background-color:#fff;color:#333}
.dark-mode input{background-color:#1e1e1e;color:#f0f0f0;border:1px solid #555}
.dark-mode input:focus{border-color:rgb(210,70,70);box-shadow:0 0 8px rgba(210,70,70,.3)}
.center{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background:#2b2b2b}
a{color:rgb(167,0,0);text-decoration:none}
a:hover{text-decoration:underline;cursor:pointer}
iframe{width:100%;max-width:600px;height:400px;border:none;border-radius:8px;box-shadow:0 4px 10px rgba(0,0,0,.2);margin:1rem auto;display:block}
table{border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;background:#fff;width:auto;display:inline-table}
th,td{border:1px solid #ccc;padding:8px 12px;text-align:left;white-space:nowrap}
th{background-color:#f2f2f2;font-weight:bold}
tr:nth-child(even){background-color:#f9f9f9}
tr:hover{background-color:#ffe6e6}
body{font-family:'Open Sans',Arial,Helvetica,sans-serif}
.btn{display:inline-block;padding:12px 24px;background:linear-gradient(135deg,rgb(167,0,0),rgb(210,40,40));color:#fff;font-size:16px;font-weight:600;text-decoration:none;border:none;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}
.btn:hover{transform:translateY(-3px);box-shadow:0 6px 14px rgba(0,0,0,.3);background:linear-gradient(135deg,rgb(190,20,20),rgb(220,60,60))}
.btn:active{transform:translateY(0);box-shadow:0 3px 8px rgba(0,0,0,.2)}
@keyframes popIn{from{transform:translate(-50%,-60%) scale(.9);opacity:0}to{transform:translate(-50%,-50%) scale(1);opacity:1}}
.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.35);display:none;z-index:999}
.popup{display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:12px;width:300px;z-index:1000;animation:popIn .3s ease;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px}
.popup h2{margin:0;font-size:1.1rem;color:#222;font-weight:600}
.popup button{background-color:rgb(167,0,0);color:#fff;border:none;padding:8px 22px;border-radius:6px;cursor:pointer;font-size:1rem}
.popup button:hover{background-color:rgb(120,0,0)}
`;

const BASE_JS = `
function warn(text){
  if(!document.getElementById('overlay')){
    document.body.insertAdjacentHTML('beforeend', '<div class="overlay" id="overlay"></div><div class="popup" id="popup"><h2 id="popupText"></h2><button onclick="closePopup()">ok</button></div>');
  }
  document.getElementById('popupText').textContent = text;
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('overlay').style.display = 'block';
}
function closePopup(){
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}
`;

const codeEl = document.getElementById('code');
const highlightInner = document.getElementById('codeHighlightInner');
const highlightPre = document.getElementById('codeHighlight');
const previewEl = document.getElementById('preview');
const input = document.getElementById('promptInput');
const btn = document.getElementById('genBtn');
const status = document.getElementById('status');

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const TOKEN_RE = /(&lt;!--[\s\S]*?--&gt;|\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(&lt;\/?[a-zA-Z][\s\S]*?&gt;)|(\b(?:function|return|const|let|var|if|else|for|while|new|class|extends|this|typeof|await|async|import|export|from|default|true|false|null|undefined|break|continue|switch|case|try|catch|finally|throw|of|in|do)\b)|(\b\d+(?:\.\d+)?\b)/g;

function highlightMarkup(code){
  const esc = escapeHtml(code);
  return esc.replace(TOKEN_RE, (m, comment, str, tag, keyword, number) => {
    if(comment) return '<span class="tok-comment">' + comment + '</span>';
    if(str) return '<span class="tok-string">' + str + '</span>';
    if(tag) return '<span class="tok-tag">' + tag + '</span>';
    if(keyword) return '<span class="tok-keyword">' + keyword + '</span>';
    if(number) return '<span class="tok-number">' + number + '</span>';
    return m;
  });
}

const CSS_TOKEN_RE = /(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(#[0-9a-fA-F]{3,8}\b)|([^{}\n;]+)(?=\{)|([a-zA-Z-]+)(?=\s*:)|(\b\d+(?:\.\d+)?(?:px|rem|em|vh|vw|%|s|ms|deg)?\b)/g;

function highlightCss(code){
  const esc = escapeHtml(code);
  return esc.replace(CSS_TOKEN_RE, (m, comment, str, hex, selector, prop, num) => {
    if(comment) return '<span class="tok-comment">' + comment + '</span>';
    if(str) return '<span class="tok-string">' + str + '</span>';
    if(hex) return '<span class="tok-color">' + hex + '</span>';
    if(selector) return '<span class="tok-selector">' + selector + '</span>';
    if(prop) return '<span class="tok-prop">' + prop + '</span>';
    if(num) return '<span class="tok-number">' + num + '</span>';
    return m;
  });
}

const SECTION_RE = /<style([^>]*)>([\s\S]*?)<\/style>/gi;

function highlight(code){
  let out = '';
  let lastIndex = 0;
  let m;
  SECTION_RE.lastIndex = 0;
  while((m = SECTION_RE.exec(code))){
    out += highlightMarkup(code.slice(lastIndex, m.index));
    out += highlightMarkup('<style' + m[1] + '>');
    out += highlightCss(m[2]);
    out += highlightMarkup('</style>');
    lastIndex = SECTION_RE.lastIndex;
  }
  out += highlightMarkup(code.slice(lastIndex));
  return out;
}

function refreshHighlight(){
  highlightInner.innerHTML = highlight(codeEl.value) + '\n';
}

function setCode(text){
  codeEl.value = text;
  refreshHighlight();
}

codeEl.addEventListener('scroll', () => {
  highlightPre.scrollTop = codeEl.scrollTop;
  highlightPre.scrollLeft = codeEl.scrollLeft;
});

const placeholderDoc = '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
  '<style>html,body{height:100%;margin:0;display:flex;align-items:center;justify-content:center;' +
  'background:#2b2b2b;color:rgba(255,255,255,.5);font-family:system-ui,sans-serif;font-size:.9rem;}</style>' +
  '</head><body>Preview will appear here</body></html>';

function updatePreview(code){
  previewEl.srcdoc = code && code.trim() ? code : placeholderDoc;
}

updatePreview('');

function cleanCode(text){
  let t = (text || '').trim();
  t = t.replace(/^```[a-zA-Z]*\n?/,'').replace(/```$/,'');
  return t.trim();
}

function ensureBaseCss(code){
  if(!code) return code;
  const styleTag = '<style>\n' + BASE_CSS + '\n</style>';
  if(/<head[^>]*>/i.test(code)){
    return code.replace(/<head[^>]*>/i, (m) => m + '\n' + styleTag);
  }
  if(/<html[^>]*>/i.test(code)){
    return code.replace(/<html[^>]*>/i, (m) => m + '\n<head>' + styleTag + '</head>');
  }
  return styleTag + '\n' + code;
}

function ensureBaseJs(code){
  if(!code) return code;
  const scriptTag = '<script>\n' + BASE_JS + '\n<' + '/script>';
  if(/<\/body>/i.test(code)){
    return code.replace(/<\/body>/i, scriptTag + '\n</body>');
  }
  if(/<\/html>/i.test(code)){
    return code.replace(/<\/html>/i, scriptTag + '\n</html>');
  }
  return code + '\n' + scriptTag;
}

function injectBaseAssets(code){
  return ensureBaseJs(ensureBaseCss(code));
}

const API_KEY_STORAGE = 'fadanCodeApiKey';

function getApiKey(){
  return localStorage.getItem(API_KEY_STORAGE) || '';
}

function setApiKey(key){
  localStorage.setItem(API_KEY_STORAGE, key);
}

const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const apiKeyInput = document.getElementById('apiKeyInput');
const saveKeyBtn = document.getElementById('saveKeyBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');

function openSettings(){
  apiKeyInput.value = getApiKey();
  settingsPanel.style.display = 'flex';
}
function closeSettings(){
  settingsPanel.style.display = 'none';
}
settingsBtn.addEventListener('click', () => {
  settingsPanel.style.display === 'flex' ? closeSettings() : openSettings();
});
saveKeyBtn.addEventListener('click', () => {
  setApiKey(apiKeyInput.value.trim());
  closeSettings();
  status.textContent = 'API key saved.';
});
closeSettingsBtn.addEventListener('click', closeSettings);

async function callClaude(systemInstruction, userText){
  const apiKey = getApiKey();
  if(!apiKey){
    const err = new Error('missing_key');
    err.code = 'missing_key';
    throw err;
  }
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: systemInstruction,
      messages: [{ role: 'user', content: userText }]
    })
  });
  if(!response.ok){
    let msg = 'HTTP ' + response.status;
    try {
      const errBody = await response.json();
      if(errBody && errBody.error && errBody.error.message) msg = errBody.error.message;
    } catch(e){}
    const err = new Error(msg);
    err.code = msg;
    throw err;
  }
  const data = await response.json();
  return (data.content || []).map((b) => b.text || '').join('');
}

async function generate(){
  const prompt = input.value.trim();
  if(!prompt) return;
  btn.disabled = true;
  status.textContent = 'Generating...';
  try {
    const systemInstruction = 'You are a code generator. Respond ONLY with raw code: a single self-contained HTML file including CSS (in <style>) and JS (in <script>). No explanations, no prose, no markdown code fences, no comments outside the code, no questions back. If the user does not specify their own color scheme, use rgb(167, 0, 0) as the main accent color in the design. A base stylesheet is already injected automatically and provides these utility classes you can freely use without redefining them: spacing helpers m-0..m-6, mt/mb/ml/mr-1..6, p-0..p-6, pt/pb/pl/pr-1..6 (rem-based), .invis (display:none), .dark-mode / .light-mode, a default button style, .login (login card layout with input, button, h1), styled input/input:focus, .center (fullscreen centered flex), styled a/table/th/td/tr, and .btn (gradient pill button). All accent colors in that base stylesheet are already rgb(167, 0, 0) red. Do not redefine these classes unless the task explicitly requires different behavior for them. Never use the native alert(), confirm() or prompt() functions. Instead, whenever you would show a message to the user, call warn("your message here") — this function and its popup markup/styling are already injected automatically, so never redefine warn(), closePopup(), #overlay or #popup yourself.';
    const text = await callClaude(systemInstruction, 'Task: ' + prompt);
    const finalCode = cleanCode(text);
    setCode(finalCode);
    updatePreview(injectBaseAssets(finalCode));
    status.textContent = 'Done.';
  } catch (err) {
    if(err.code === 'missing_key'){
      status.textContent = 'Please add your Anthropic API key first.';
      openSettings();
    } else {
      status.textContent = 'Error: ' + (err.message || 'unknown');
    }
  } finally {
    btn.disabled = false;
  }
}

btn.addEventListener('click', generate);
input.addEventListener('keydown', (e) => { if(e.key === 'Enter') generate(); });
codeEl.addEventListener('input', () => {
  refreshHighlight();
  updatePreview(injectBaseAssets(codeEl.value));
  updateSuggestState();
});

const AUTOFILL_PAIRS = { '(':')', '[':']', '{':'}', '"':'"', "'":"'", '`':'`' };
const AUTOFILL_CLOSERS = new Set(Object.values(AUTOFILL_PAIRS));

function insertAtCursor(text){
  if(typeof document.execCommand === 'function' && document.execCommand('insertText', false, text)){
    return;
  }
  const { selectionStart: s, selectionEnd: en, value } = codeEl;
  codeEl.value = value.slice(0, s) + text + value.slice(en);
  codeEl.selectionStart = codeEl.selectionEnd = s + text.length;
  refreshHighlight();
  updatePreview(injectBaseAssets(codeEl.value));
}

const VOID_ELEMENTS = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const HTML_TAGS = ['a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav','noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress','q','section','select','small','source','span','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr'];

const tagSuggestEl = document.getElementById('tagSuggest');
let suggestItems = [];
let suggestIndex = 0;
let suggestRange = null;
let charMetrics = null;

function getCharMetrics(){
  if(charMetrics) return charMetrics;
  const style = getComputedStyle(codeEl);
  const span = document.createElement('span');
  span.style.fontFamily = style.fontFamily;
  span.style.fontSize = style.fontSize;
  span.style.position = 'absolute'; span.style.visibility = 'hidden'; span.style.whiteSpace = 'pre';
  span.textContent = 'MMMMMMMMMM';
  document.body.appendChild(span);
  const charWidth = span.getBoundingClientRect().width / 10;
  document.body.removeChild(span);
  const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.5;
  charMetrics = { charWidth, lineHeight };
  return charMetrics;
}

function positionSuggestBox(caretPos){
  const { charWidth, lineHeight } = getCharMetrics();
  const before = codeEl.value.slice(0, caretPos);
  const lines = before.split('\n');
  const col = lines[lines.length - 1].length;
  const top = 14 + (lines.length - 1) * lineHeight - codeEl.scrollTop + lineHeight;
  const left = 14 + col * charWidth - codeEl.scrollLeft;
  tagSuggestEl.style.top = top + 'px';
  tagSuggestEl.style.left = left + 'px';
}

function renderSuggestActive(){
  Array.from(tagSuggestEl.children).forEach((el, i) => el.classList.toggle('active', i === suggestIndex));
}

function hideSuggest(){
  tagSuggestEl.style.display = 'none';
  suggestItems = [];
  suggestRange = null;
}

function showSuggest(items, start, end, caretPos){
  suggestItems = items;
  suggestIndex = 0;
  suggestRange = { start, end };
  tagSuggestEl.innerHTML = items.map((t, i) => '<div class="tagSuggestItem" data-i="' + i + '">' + t + '</div>').join('');
  tagSuggestEl.style.display = 'block';
  renderSuggestActive();
  positionSuggestBox(caretPos);
}

function updateSuggestState(){
  const pos = codeEl.selectionStart;
  if(pos !== codeEl.selectionEnd){ hideSuggest(); return; }
  const before = codeEl.value.slice(0, pos);
  const m = before.match(/<([a-zA-Z]*)$/);
  if(!m || m[1].length === 0){ hideSuggest(); return; }
  const partial = m[1].toLowerCase();
  const matches = [...new Set(HTML_TAGS.filter(t => t.startsWith(partial)))].slice(0, 8);
  if(matches.length === 0){ hideSuggest(); return; }
  showSuggest(matches, pos - m[1].length, pos, pos);
}

function applySuggestion(index){
  if(!suggestRange || !suggestItems[index]) return;
  const tag = suggestItems[index];
  const { start, end } = suggestRange;
  codeEl.setSelectionRange(start, end);
  const insertion = VOID_ELEMENTS.has(tag) ? tag + '>' : tag + '></' + tag + '>';
  insertAtCursor(insertion);
  codeEl.selectionStart = codeEl.selectionEnd = start + tag.length + 1;
  hideSuggest();
}

tagSuggestEl.addEventListener('mousedown', (e) => {
  const item = e.target.closest('.tagSuggestItem');
  if(item){ e.preventDefault(); applySuggestion(Number(item.dataset.i)); }
});

codeEl.addEventListener('blur', () => { setTimeout(hideSuggest, 150); });

codeEl.addEventListener('keydown', (e) => {
  const { selectionStart: start, selectionEnd: end, value } = codeEl;
  const key = e.key;

  if(suggestItems.length){
    if(key === 'Tab' || key === 'Enter'){
      e.preventDefault();
      applySuggestion(suggestIndex);
      return;
    }
    if(key === 'ArrowDown'){
      e.preventDefault();
      suggestIndex = (suggestIndex + 1) % suggestItems.length;
      renderSuggestActive();
      return;
    }
    if(key === 'ArrowUp'){
      e.preventDefault();
      suggestIndex = (suggestIndex - 1 + suggestItems.length) % suggestItems.length;
      renderSuggestActive();
      return;
    }
    if(key === 'Escape'){
      hideSuggest();
      return;
    }
  }

  if(key === '>' && start === end){
    const before = value.slice(0, start);
    const match = before.match(/<([a-zA-Z][a-zA-Z0-9-]*)((?:\s[^<>]*)?)$/);
    if(match && !match[2].trim().endsWith('/') && !VOID_ELEMENTS.has(match[1].toLowerCase())){
      e.preventDefault();
      insertAtCursor('>' + '</' + match[1] + '>');
      codeEl.selectionStart = codeEl.selectionEnd = start + 1;
      return;
    }
  }

  if(AUTOFILL_CLOSERS.has(key) && start === end && value[start] === key){
    e.preventDefault();
    codeEl.selectionStart = codeEl.selectionEnd = start + 1;
    return;
  }

  if(AUTOFILL_PAIRS[key]){
    e.preventDefault();
    const selected = value.slice(start, end);
    insertAtCursor(key + selected + AUTOFILL_PAIRS[key]);
    const pos = codeEl.selectionStart;
    codeEl.selectionStart = codeEl.selectionEnd = pos - AUTOFILL_PAIRS[key].length;
    return;
  }

  if(key === 'Backspace' && start === end && start > 0 && AUTOFILL_PAIRS[value[start - 1]] === value[start]){
    e.preventDefault();
    codeEl.value = value.slice(0, start - 1) + value.slice(start + 1);
    codeEl.selectionStart = codeEl.selectionEnd = start - 1;
    refreshHighlight();
    updatePreview(injectBaseAssets(codeEl.value));
    return;
  }

  if(key === 'Tab'){
    e.preventDefault();
    if(!e.shiftKey) insertAtCursor('  ');
    return;
  }

  if(key === 'Enter'){
    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    const indent = (value.slice(lineStart, start).match(/^[ \t]*/) || [''])[0];
    const before = value[start - 1];
    const after = value[start];
    const opens = '{[('.includes(before);
    const closes = AUTOFILL_PAIRS[before] === after;
    e.preventDefault();
    if(opens && closes){
      insertAtCursor('\n' + indent + '  ' + '\n' + indent);
      codeEl.selectionStart = codeEl.selectionEnd = start + ('\n' + indent + '  ').length;
    } else if(opens){
      insertAtCursor('\n' + indent + '  ');
    } else {
      insertAtCursor('\n' + indent);
    }
  }
});

const openTabBtn = document.getElementById('openTabBtn');
let lastBlobUrl = null;
openTabBtn.addEventListener('click', () => {
  const raw = codeEl.value && codeEl.value.trim() ? codeEl.value : placeholderDoc;
  const code = codeEl.value && codeEl.value.trim() ? injectBaseAssets(raw) : raw;
  if(lastBlobUrl) URL.revokeObjectURL(lastBlobUrl);
  const blob = new Blob([code], { type: 'text/html' });
  lastBlobUrl = URL.createObjectURL(blob);
  window.open(lastBlobUrl, '_blank');
});
