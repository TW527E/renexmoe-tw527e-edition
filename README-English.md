# renexmoe-tw527e-edition

[**中文版的給我回來!!!**](README.md)

![GitHub Release](https://img.shields.io/github/release/TW527E/renexmoe-tw527e-edition/all.svg?style=flat)
<a href="https://t.me/Cheng_Group">
  <img src="https://img.shields.io/badge/-Chat%20on%20Telegram-blue" alt="Chat on Telegram">
</a><br>
Made by 誠誠 <img src="https://img.shields.io/badge/-Taiwan-ff1f4b" alt="Taiwan">

This theme is the theme of the [qkqpttgf/OneManager-php](https://github.com/qkqpttgf/OneManager-php) project, and the source project of this theme is [186526/onemanager-theme-renexmoe](https://github.com/186526/onemanager-theme-renexmoe), my version is modified from [jssycszyj/renexmoe-cdn](https://github.com/jssycszyj/renexmoe-cdn).

Display page: [MineDrive](https://d.tw527e.eu.org)

## Modifications are as follows: (Comparison object [186526/onemanager-theme-renexmoe](https://github.com/186526/onemanager-theme-renexmoe))

1. Change **`language`** to **`Chinese Traditional`**
2. Call the **`backgroundm`** option to **`Web Icon`**
3. Modify **`theme overall color`** `(milk tea color)`
4. Fix **`PDF preview`**
5. Fix **`OFFICE preview layout`**
6. Proxy **`Javascript, CSS`** through [jsDelivr](https://www.jsdelivr.com)
7. Change **`movie player`** to [DPlayer](https://dplayer.js.org)
8. Add **`Call local player`** in **`Video playback page`**
9. Added **`Dark background mode`**, and changed **`Dark mode`** to **`Dark background mode`**
10. Change **`font`** to [Noto Sans Traditional Chinese](https://fonts.google.com/noto/specimen/Noto+Sans+TC)
11. Add footer

## The usage is as follows:

### Method 1: Download to directory

1. Download **`renexmoe-tw527e-edition`**
2. Copy **`renexmoe-tw527e-edition`** to **`/OneManager root directory/theme`**

### Method 2: Via customTheme option (To be honest, I'm not sure if he can use the link directly, but I guess it can w)

1. Log in to your OneManager backend and enter the settings
2. Select the **`Platform Variables`** page
3. In the **`customTheme`** option, enter **`https://raw.githubusercontent.com/TW527E/renexmoe-tw527e-edition/main/renexmoe-tw527e-edition.html`** `(jsDelivr: https://cdn.jsdelivr.net/gh/TW527E/renexmoe-tw527e-edition@main/renexmoe-tw527e-edition.html)`
4. Apply settings
5. Wait for the cache to refresh, complete

## The footer is used as follows:

1. Log in to your OneManager backend and enter the settings
2. Select the **`Platform Variables`** page
3. In the **`customScript`** option, enter **`<script>document.getElementById("footer").innerHTML='footer content';</script>`**
4. Apply settings
5. Wait for the cache to refresh, complete