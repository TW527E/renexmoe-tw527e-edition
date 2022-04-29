# renexmoe-tw527e-edition

[**English Version is Here!!!**](README-English.md)

![GitHub Release](https://img.shields.io/github/release/TW527E/renexmoe-tw527e-edition/all.svg?style=flat)
<a href="https://t.me/Cheng_Group">
  <img src="https://img.shields.io/badge/-%E5%9C%A8%20Telegram%20%E4%B8%8A%E8%81%8A%E5%A4%A9-blue" alt="在 Telegram 上聊天">
</a><br>
Made by 誠誠 <img src="https://img.shields.io/badge/-Taiwan-ff1f4b" alt="Taiwan">

此主題為 [qkqpttgf/OneManager-php](https://github.com/qkqpttgf/OneManager-php) 專案的主題，此主題源專案為 [186526/onemanager-theme-renexmoe](https://github.com/186526/onemanager-theme-renexmoe)，則我的版本修改自 [jssycszyj/renexmoe-cdn](https://github.com/jssycszyj/renexmoe-cdn)。

展示網頁: [MineDrive](https://d.tw527e.eu.org)

## 修改內容如下: (比較對象 [186526/onemanager-theme-renexmoe](https://github.com/186526/onemanager-theme-renexmoe))

1. 將 **`語言`** 更改為 **`繁體中文`**
2. 將 **`backgroundm`** 選項內容調用至 **`網頁 Icon`**
3. 修改 **`主題整體配色`** `(奶茶色)`
4. 修復 **`PDF 預覽`**
5. 修復 **`OFFICE 預覽排版`**
6. 將 **`Javascript、CSS`** 透過 [jsDelivr](https://www.jsdelivr.com) 代理
7. 將 **`影片播放器`** 更改為 [DPlayer](https://dplayer.js.org)
8. 在 **`影片播放頁面`** 增加 **`呼叫本地播放器`**
9. 新增 **`深色背景模式`**，並且將 **`深色模式`** 更改為 **`深色背景模式`**
10. 將 **`字體`** 更改為 [Noto Sans Traditional Chinese](https://fonts.google.com/noto/specimen/Noto+Sans+TC)
11. 新增 頁腳
12. 修復 **`路徑未顯示盤名`**

## 使用方式如下:

### 方法1: 下載至目錄

1. 下載 **`renexmoe-tw527e-edition`**
2. 將 **`renexmoe-tw527e-edition`** 複製至 **`/OneManager 根目錄/theme`**

### 方法2: 透過 customTheme 選項 (說實在，我不確定他能不能直接用連結使用，但我猜可以吧w)

1. 登入您的 OneManager 後台，並進入設定
2. 選擇 **`平台變數`** 頁面
3. 在 **`customTheme`** 選項內，輸入 **`https://raw.githubusercontent.com/TW527E/renexmoe-tw527e-edition/main/renexmoe-tw527e-edition.html`** `(jsDelivr: https://cdn.jsdelivr.net/gh/TW527E/renexmoe-tw527e-edition@main/renexmoe-tw527e-edition.html)`
4. 套用設定
5. 等待緩存刷新，完成

## 頁腳使用方式如下:

1. 登入您的 OneManager 後台，並進入設定
2. 選擇 **`平台變數`** 頁面
3. 在 **`customScript`** 選項內，輸入 **`<script>document.getElementById("footer").innerHTML='頁腳內容';</script>`**
4. 套用設定
5. 等待緩存刷新，完成