#!/usr/bin/env node
// 由 src/renexmoe-tw527e-edition.html 產生各 CDN 版本與本地版（local）主題。
// 用法：node scripts/build.mjs
// 本地版需要的第三方套件第一次會從 npm CDN 下載並暫存在 .cache/，之後不需要網路。
import { existsSync } from 'node:fs';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEMPLATE = 'src/renexmoe-tw527e-edition.html';

// css/ 與 js/ 內的主題檔案自 1.2.4 後沒有變動，CDN 版直接引用已發布到 npm 的 1.2.4。
// 若之後修改了 css/ 或 js/，發布新版到 npm 後再更新這裡的版本號。
const THEME = 'renexmoe-tw527e-edition@1.2.4/';
const THEME_CSS = [
  'css/app1@uw34ru4ehdn4pywddmebm79dnnb2jyei.css',
  'css/app2@eqge353pwpgivauvcvzejwrki4mdissj.css',
];
const THEME_JS = [
  'js/extra.js',
  'js/app@qm97ssij9cnii7x8fnbkpq4hcgq35dyr.js',
  'js/app@59467336fgwnpx8qbfvtmpyeefv35e5i.js',
  'js/app@a7r8jgn2qe3eyfrkahwdnqcjf7uba95k.js',
  'js/app@keaxctnyw29nuzpsh66g7ki4h5wzy8zn.js',
  'js/app@pe2nahunr9aihucdgc2ssjbgnaccr5rz.js',
  'js/app@tsjmiafbhksy5pyb5tchy765wshmwwnd.js',
  'js/webpack-runtime@cx4vgpbaggjuhg8rh6m3yarhkkxy4dm3.js',
];

// 第三方套件一律鎖定版本：未指定版本時 unpkg 每次都要先轉址，而且瀏覽器幾乎無法快取
const LIB = {
  mduiCss: 'mdui@1.0.1/dist/css/mdui.min.css',
  mduiIcons: 'mdui@1.0.1/dist/icons/material-icons/MaterialIcons-Regular.woff2',
  hljsCss: '@highlightjs/cdn-assets@11.12.0/styles/github.min.css',
  sha1: 'sha-1@1.0.0/dist/sha1.umd.js',
  aplayerCss: 'aplayer@1.10.1/dist/APlayer.min.css',
  aplayer: 'aplayer@1.10.1/dist/APlayer.min.js',
  jsmediatags: 'jsmediatags@3.9.7/dist/jsmediatags.min.js',
  artplayer: 'artplayer@5.4.0/dist/artplayer.js',
  artplayerZhTw: 'artplayer@5.4.0/dist/i18n/zh-tw.js',
  pdf: 'pdfjs-dist@2.5.207/build/pdf.min.js',
  pdfWorker: 'pdfjs-dist@2.5.207/build/pdf.worker.min.js',
  pdfCMaps: 'pdfjs-dist@2.5.207/cmaps/',
};
// 字型 CSS 只有 @font-face，以非阻塞方式載入
const FONTS = [
  '@fontsource/noto-sans-tc@5.3.1/500.css',
  '@fontsource/noto-sans-sc@5.3.1/500.css',
  '@fontsource/noto-sans-hk@5.3.1/500.css',
  '@fontsource/fira-code@4.2.2/400.css',
];
// OneManager 內建的 js/spark-md5.min.js，訪客上傳時計算 MD5 用
const SPARK_MD5 = '<!--base_path-->?jsFile=spark-md5.min.js';

const CDN_VARIANTS = {
  'renexmoe-tw527e-edition.html': 'https://unpkg.com/',
  'renexmoe-tw527e-edition-elemecdn.html': 'https://npm.elemecdn.com/',
  'renexmoe-tw527e-edition-jsdelivr-cdn.html': 'https://cdn.jsdelivr.net/npm/',
  'renexmoe-tw527e-edition-jsdelivr-fastly.html': 'https://fastly.jsdelivr.net/npm/',
  'renexmoe-tw527e-edition-jsdelivr-gcore.html': 'https://gcore.jsdelivr.net/npm/',
  'renexmoe-tw527e-edition-jsdelivr-originfastly.html': 'https://originfastly.jsdelivr.net/npm/',
  'renexmoe-tw527e-edition-statically.html': 'https://cdn.statically.io/npm/',
};

// 本地版：JS 透過 OneManager 的 ?jsFile= 從 OneManager 的 js/ 資料夾讀取（只能讀 .js，且不能有子資料夾），
// CSS 打包進 renexmoe-style.js。字型與 pdf.js 的 cMaps 不是 .js，仍然從這個 CDN 載入。
const LOCAL_HTML = 'renexmoe-tw527e-edition-local.html';
const LOCAL_DIR = 'local';
const LOCAL_CDN = 'https://unpkg.com/';
const LOCAL_PREFIX = 'renexmoe-';
const jsFile = (name) => `<!--base_path-->?jsFile=${LOCAL_PREFIX}${name}`;

const origin = (url) => new URL(url).origin;
const indent = (lines) => lines.map((line) => `  ${line}`).join('\n');
const stylesheet = (href) => `<link rel="stylesheet" href="${href}" />`;
const script = (src) => `<script src="${src}"></script>`;
const fontLinks = (cdn) => FONTS.map((f) => `<link rel="stylesheet" href="${cdn}${f}" media="print" onload="this.media='all'" />`);
const preconnect = (cdn) => [
  `<link rel="preconnect" href="${origin(cdn)}" />`,
  `<link rel="preconnect" href="${origin(cdn)}" crossorigin />`,
];

function render(template, parts) {
  const html = template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (!(key in parts)) throw new Error(`模板中有未定義的 ${match}`);
    return parts[key];
  });
  return html;
}

function cdnParts(cdn) {
  return {
    PRECONNECT: indent(preconnect(cdn)),
    STYLES: indent([
      ...THEME_CSS.map((f) => stylesheet(cdn + THEME + f)),
      stylesheet(cdn + LIB.mduiCss),
      stylesheet(cdn + LIB.hljsCss),
    ]),
    FONTS: indent(fontLinks(cdn)),
    LIBS: JSON.stringify({
      aplayer: [cdn + LIB.aplayerCss, cdn + LIB.aplayer],
      jsmediatags: cdn + LIB.jsmediatags,
      artplayer: [cdn + LIB.artplayer, cdn + LIB.artplayerZhTw],
      pdf: cdn + LIB.pdf,
      pdfWorker: cdn + LIB.pdfWorker,
      pdfCMaps: cdn + LIB.pdfCMaps,
      sparkMd5: SPARK_MD5,
    }),
    SCRIPTS: [script(cdn + LIB.sha1), ...THEME_JS.map((f) => script(cdn + THEME + f))].join('\n'),
  };
}

// 本地版要放進 OneManager js/ 資料夾的檔案：{ 輸出檔名: 內容 }
async function localFiles() {
  const files = {
    'sha1.js': await fetchLib(LIB.sha1),
    'aplayer.js': await fetchLib(LIB.aplayer),
    'jsmediatags.js': await fetchLib(LIB.jsmediatags),
    'artplayer.js': await fetchLib(LIB.artplayer),
    'artplayer-zh-tw.js': await fetchLib(LIB.artplayerZhTw),
    'pdf.js': await fetchLib(LIB.pdf),
    'pdf.worker.js': await fetchLib(LIB.pdfWorker),
  };
  for (const f of THEME_JS) files[f.slice('js/'.length)] = await readFile(join(root, f));

  // 順序與 CDN 版的 <link> 相同，避免改變樣式的覆蓋關係；APlayer 的樣式在 CDN 版是按需載入並插在主題樣式之前
  const icons = (await fetchLib(LIB.mduiIcons)).toString('base64');
  const mduiBase = LOCAL_CDN + LIB.mduiCss.replace(/css\/[^/]+$/, '');
  const mduiCss = (await fetchLib(LIB.mduiCss)).toString()
    .replace('url(../icons/material-icons/MaterialIcons-Regular.woff2)', `url(data:font/woff2;base64,${icons})`)
    .replaceAll('url(../', `url(${mduiBase}`);
  const css = [
    ...(await Promise.all(THEME_CSS.map((f) => readFile(join(root, f), 'utf8')))),
    mduiCss,
    (await fetchLib(LIB.hljsCss)).toString(),
    (await fetchLib(LIB.aplayerCss)).toString(),
  ].join('\n');
  files['style.js'] = '/* renexmoe-tw527e-edition 本地版樣式，由 scripts/build.mjs 產生 */\n' +
    `(function(){var s=document.createElement('style');s.textContent=${JSON.stringify(css)};document.head.appendChild(s);})();\n`;
  return files;
}

function localParts(files) {
  const lib = (name) => {
    if (!(name in files)) throw new Error(`本地版缺少 ${name}`);
    return jsFile(name);
  };
  return {
    PRECONNECT: indent([`<link rel="preconnect" href="${origin(LOCAL_CDN)}" crossorigin />`]),
    STYLES: indent([script(lib('style.js'))]),
    FONTS: indent(fontLinks(LOCAL_CDN)),
    LIBS: JSON.stringify({
      aplayer: [lib('aplayer.js')],
      jsmediatags: lib('jsmediatags.js'),
      artplayer: [lib('artplayer.js'), lib('artplayer-zh-tw.js')],
      pdf: lib('pdf.js'),
      pdfWorker: lib('pdf.worker.js'),
      pdfCMaps: LOCAL_CDN + LIB.pdfCMaps,
      sparkMd5: SPARK_MD5,
    }),
    SCRIPTS: [script(lib('sha1.js')), ...THEME_JS.map((f) => script(lib(f.slice('js/'.length))))].join('\n'),
  };
}

async function fetchLib(path) {
  const file = join(root, '.cache', 'npm', path);
  if (!existsSync(file)) {
    const res = await fetch(LOCAL_CDN + path);
    if (!res.ok) throw new Error(`下載失敗 ${res.status}：${LOCAL_CDN}${path}`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
  }
  return readFile(file);
}

const template = await readFile(join(root, TEMPLATE), 'utf8');

for (const [name, cdn] of Object.entries(CDN_VARIANTS)) {
  await writeFile(join(root, name), render(template, cdnParts(cdn)));
  console.log(`已產生 ${name}`);
}

const files = await localFiles();
await rm(join(root, LOCAL_DIR), { recursive: true, force: true });
await mkdir(join(root, LOCAL_DIR));
for (const [name, content] of Object.entries(files)) {
  await writeFile(join(root, LOCAL_DIR, LOCAL_PREFIX + name), content);
}
await writeFile(join(root, LOCAL_HTML), render(template, localParts(files)));
console.log(`已產生 ${LOCAL_HTML} 與 ${LOCAL_DIR}/（${Object.keys(files).length} 個檔案）`);
