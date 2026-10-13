<br />
<p align="center">
  <a href="https://replit-d.tw527e.eu.org" target="blank">
    <img src="Readme/Icon.png" alt="Logo" width="156" height="156">
  </a>
  <h2 align="center" style="font-weight: 600">renexmoe-tw527e-edition</h2>

  <p align="center">
    高顏值 OneManager 主題
    <br /><br />
    <a href="README_ZH-CN.md"><img src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-README.md-blue?style=for-the-badge&logo=Radar" alt="简体中文 README.MD"></a>&nbsp;&nbsp;<a href="https://om.tw527e.eu.org"><img src="https://img.shields.io/badge/%E9%A0%90%E8%A6%BD-DEMO-blue?style=for-the-badge&logo=Cockpit" alt="預覽 DEMO"></a>&nbsp;&nbsp;<a href="https://github.com/TW527E/renexmoe-tw527e-edition/releases/latest"><img src="https://img.shields.io/github/v/release/TW527E/renexmoe-tw527e-edition.svg?include_prereleases&logo=GitHub&style=for-the-badge" alt="GitHub Release"></a>&nbsp;&nbsp;<a href="https://www.npmjs.com/package/renexmoe-tw527e-edition"><img src="https://img.shields.io/npm/v/renexmoe-tw527e-edition?logo=npm&style=for-the-badge" alt="npm"></a>&nbsp;&nbsp;
    <a href="https://t.me/Cheng_Group"><img src="https://img.shields.io/badge/Telegram-Group-blue?style=for-the-badge&logo=Telegram" alt="Telegran Gruop"></a>
    <br />
    <br />
  </p>
</p>

![PC-Home](Readme/PC-Home.png)

## ✨ 特性

- 🪵 增加 **`側邊欄`**
- 📟 增加 **`呼叫本地播放器`**
- ⏏️ 新增 **`頁腳`**
- 📍 **`backgroundm`** 選項調用至 **`網頁 Icon`**
- 🔲 增加 **`背景毛玻璃`**
- 🎨 **`主題顏色`** 調整為 **`奶茶色`**
- 📦 提供 **`多種`**  [**`CDN`**](releases) 選擇，以及不經過 CDN 載入 JS / CSS 的 **`本地版`**
- 📺 **`影片播放器`** 更改為 [**`ArtPlayer`**](https://artplayer.org)
- 🎵 **`音訊播放器`** 更改為 [**`APlayer`**](https://aplayer.js.org)
- 🕓 增加 **`自動恢復上次播放時間`**
- ⬆️ 增加 **`上傳檔案 / 資料夾`** (OneDrive / SharePoint)
- 📶 **`路徑`** 顯示於畫面最上方


<Details>
<Summary>🛠️ 修改項目</Summary>
<Pre>

🔴 比較對象 [186526/onemanager-theme-renexmoe](https://github.com/186526/onemanager-theme-renexmoe)

- 🌏 將 **`語言`** 更改為 **`繁體中文`**
- 📍 將 **`backgroundm`** 選項內容調用至 **`網頁 Icon`**
- 🔲 增加 **`背景毛玻璃`**
- 🎨 **`主題顏色`** 調整為 **`奶茶色`**
- 📜 修復 **`PDF 預覽`**
- 📑 修復 **`OFFICE 預覽排版`**
- 📦 提供 **`多種`**  [**`CDN`**](releases) 選擇
- 📺 **`影片播放器`** 更改為 [ArtPlayer](https://artplayer.org)
- 🎵 **`音訊播放器`** 更改為 [APlayer](https://aplayer.js.org)
- 🕓 增加 **`自動恢復上次播放時間`**
- 📟 增加 **`呼叫本地播放器`**
- ⬆️ 增加 **`上傳檔案 / 資料夾`**
- 🏠 增加不經過 CDN 載入 JS / CSS 的 **`本地版`**
- 🔗 修復 **`jsDelivr / Statically 版本資源 404`**
- 🔠 將 **`字體`** 更改為 [Noto Sans TC SC HK](https://fonts.google.com/noto/fonts)
- ⏏️ 新增 **`頁腳`**
- 📶 修復 **`路徑未顯示盤名`**
- 📲 修復 **`登入按鈕`**

</Pre>
</Details>


## 📚 使用方法

此版本由 [@TW527E](https://github.com/TW527E) 維護，作用於 [OneManager-php](https://github.com/qkqpttgf/OneManager-php)

訪問此項目的 [Releases](releases) 頁面取得主題檔案下載連結

### 🍄 1: 透過 customTheme 選項 (推薦: 因為 🍄 終於修復好了!w 好耶!)

1. 登入您的 OneManager 後台，並進入設定
2. 選擇 **`平台變數`** 頁面
3. 在 **`customTheme`** 選項內，輸入 **`以下幾個 CDN 的其中一個`**
- (UNPKG: **`https://unpkg.com/renexmoe-tw527e-edition@latest/renexmoe-tw527e-edition.html`**)
- (饿了么 CDN: **`https://npm.elemecdn.com/renexmoe-tw527e-edition@latest/renexmoe-tw527e-edition-elemecdn.html`**)
- (Statically: **`https://raw.githubusercontent.com/TW527E/renexmoe-tw527e-edition/master/renexmoe-tw527e-edition-statically.html`**)
- (JsDelivr CDN: **`https://cdn.jsdelivr.net/gh/TW527E/renexmoe-tw527e-edition@latest/renexmoe-tw527e-edition-jsdelivr-cdn.html`**)
- (JsDelivr Fastly: **`https://fastly.jsdelivr.net/gh/TW527E/renexmoe-tw527e-edition@latest/renexmoe-tw527e-edition-jsdelivr-fastly.html`**)
- (JsDelivr Gcore: **`https://gcore.jsdelivr.net/gh/TW527E/renexmoe-tw527e-edition@latest/renexmoe-tw527e-edition-jsdelivr-gcore.html`**)
- (JsDelivr OriginFastly: **`https://originfastly.jsdelivr.net/gh/TW527E/renexmoe-tw527e-edition@latest/renexmoe-tw527e-edition-jsdelivr-originfastly.html`**)
4. 套用設定
5. 等待緩存刷新，完成

### 📁 2: 下載至目錄

1. 下載 [**`renexmoe-tw527e-edition`**](https://github.com/TW527E/renexmoe-tw527e-edition/releases)
2. 將 **`renexmoe-tw527e-edition.html`** 複製至 **`/OneManager 根目錄/theme`**

### 🏠 3: 本地版 (JS / CSS 不經過 CDN)

OneManager 會把所有網址都交給 `index.php` 處理，主題沒辦法直接讀取同目錄的檔案，只能透過 OneManager 內建的 `?jsFile=` 讀取 **`OneManager 根目錄/js`** 裡的 `.js` 檔，所以本地版把 CSS 也打包成了 JS。

1. 下載本專案的 **`local`** 資料夾與 **`renexmoe-tw527e-edition-local.html`**
2. 將 **`local`** 資料夾內的所有 `.js` 檔複製至 **`/OneManager 根目錄/js`** (與 `sha1.min.js` 等檔案放在一起，不要建立子資料夾)
3. 將 **`renexmoe-tw527e-edition-local.html`** 複製至 **`/OneManager 根目錄/theme`**，並在設定中選擇此主題
- 字型與 PDF 的 cMap 不是 `.js` 檔，仍會從 unpkg 載入；連不上時會改用系統字型，不影響使用
- Vercel 等透過 Git 部署的平台，需要把這些檔案一起加進部署的程式碼中

### 🔧 4: 使用我的 OneManager-php (不推薦)

1. 登入您的 OneManager 後台，並進入設定
2. 選擇 **`首頁`** 頁面
3. 在 **`Update from`** 選擇 `GitHub` `TW527E` `OneManager-php` `master`
4. 點擊 **`一鍵更新`**
5. 等待更新，完成


## 🔧 主題設定

<Details>
<Summary>🔲 背景毛玻璃</Summary>
<Pre>

1. 登入您的 OneManager 後台，並進入設定
2. 選擇 **`平台變數`** 頁面
3. 在 **`customScript`** 選項內，輸入 **`<script>document.querySelector('.blur').style = "backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px)"</script>`**
- (可自行調整數字 "2" 的大小，越大背景越模糊，越小背景越清楚)
4. 套用設定
5. 等待緩存刷新，完成 **`(請等待至少30分鐘，使customScript選項生效)`**
</Pre>
</Details>

<Details>
<Summary>⬆️ 上傳檔案</Summary>
<Pre>

- 管理員登入後，資料夾頁面上方會出現上傳區塊，可上傳檔案或整個資料夾
- 在 OneManager 設定 **`guestup_path`** 後，訪客可以在該目錄上傳 (檔名會由 OneManager 改為檔案的 MD5)
- 目前只支援 **`OneDrive / SharePoint`** (含世紀互聯)，其他網盤會顯示不支援
- 大於 10MB 的檔案中斷後，重新選擇同一個檔案上傳即可從上次的位置繼續
</Pre>
</Details>

<Details>
<Summary>⏏️ 頁腳</Summary>
<Pre>

1. 登入您的 OneManager 後台，並進入設定
2. 選擇 **`平台變數`** 頁面
3. 在 **`customScript`** 選項內，輸入 **`<script>document.getElementById("footer").innerHTML='頁腳內容';</script>`**
4. 套用設定
5. 等待緩存刷新，完成 **`(請等待至少30分鐘，使customScript選項生效)`**
</Pre>
</Details>


## 🧿 已知問題

<Details>
<Summary><strong><code>音樂播放器</code></strong> 在部分種類雲端會觸發防盜鏈，已將備用方案設為恢復原本播放器</Summary>
<Pre>
已知：

- [x] 🟧 **`阿里雲盤`**
</Pre>
</Details>

<Details>
<Summary><strong><code>iOS</code></strong> 在部分內容支援不佳或處理速度異常</Summary>
<Pre>
已知：

- 🎵 **`音樂播放器`**: 在不特定的情況下，因連結跳轉導致 iOS 拒絕存取
- 📺 **`影片播放器`**: 在尚未快取完成時，就開始播放，導致看起來好像已經開始播放，卻無畫面，直到快取完成時，才重新播放
- 🔳 **`背景圖片`**: 在眾多檔案的頁面中，背景會被拉長 [Safari Bug 219324](https://webkit.org/b/219324)
</Pre>
</Details>


## 🧑‍💻 開發

所有主題 HTML 都由 **`src/renexmoe-tw527e-edition.html`** 產生，請修改這個檔案後執行 (需要 Node.js 18 以上)：

```
npm run build
```

會重新產生各 CDN 版本、本地版 HTML 與 **`local`** 資料夾。第一次執行會下載本地版需要的第三方套件，之後使用 **`.cache`** 內的快取。


## 📜 開源許可

依據源專案之開源許可，本專案採用 [GPL-3.0 License](https://spdx.org/licenses/GPL-3.0-only.html)


## 🔴 靈感來源

源代碼來自 [186526/onemanager-theme-renexmoe](https://github.com/186526/onemanager-theme-renexmoe)

此版本修改來自 [jssycszyj/renexmoe-cdn](https://github.com/jssycszyj/renexmoe-cdn)

Readme 寫法及圖片做法來自 [qier222/YesPlayMusic](https://github.com/qier222/YesPlayMusic)

- [qkqpttgf/OneManager-php](https://github.com/qkqpttgf/OneManager-php)

- [zdhxiong/mdui](https://github.com/zdhxiong/mdui)

- [zhw2590582/ArtPlayer](https://github.com/zhw2590582/ArtPlayer)

- [DIYgod/APlayer](https://github.com/DIYgod/APlayer)

- [aadsm/jsmediatags](https://github.com/aadsm/jsmediatags)

- [Xhofe/alist](https://github.com/Xhofe/alist)

- [mjackson/unpkg](https://github.com/mjackson/unpkg)

- [fontsource/fontsource](https://github.com/fontsource/fontsource)

- [highlightjs/cdn-release](https://github.com/highlightjs/cdn-release)

- [mozilla/pdf.js](https://github.com/mozilla/pdf.js)

- [linkgod/SHA-1](https://github.com/linkgod/SHA-1)


## 🎗️ 支持我

目前可以以下列方式支持我

- ⭐ Star 這個專案
- 🔌 Fork 這個專案
- 👥 <a href="https://t.me/Cheng_Group">加入 Telegram 群組</a>
- 🔴 目前還無法透過贊助的方式支持我 `(未成年又沒有銀行帳戶w)`


## 🖼️ 截圖 `(v1.0.22)`

<Details>
<Summary>💻 電腦</Summary>
<Pre>

![PC-Home](Readme/PC-Home.png)
![PC-HEAD.md](Readme/PC-HEAD.md.png)
![PC-README.md](Readme/PC-README.md.png)
![PC-Picture](Readme/PC-Picture.png)
![PC-Video](Readme/PC-Video.png)
![PC-Music](Readme/PC-Music.png)
![PC-About](Readme/PC-About.png)

</Pre>
</Details>

<Details>
<Summary>📱 手機</Summary>
<Pre>

![Mobile-Home](Readme/Mobile-Home.png)
![Mobile-HEAD.md](Readme/Mobile-HEAD.md.png)
![Mobile-README.md](Readme/Mobile-README.md.png)
![Mobile-Picture](Readme/Mobile-Picture.png)
![Mobile-Video](Readme/Mobile-Video.png)
![Mobile-Music](Readme/Mobile-Music.png)
![Mobile-About](Readme/Mobile-About.png)
![Mobile-About](Readme/Mobile-SideBar.png)

</Pre>
</Details>
