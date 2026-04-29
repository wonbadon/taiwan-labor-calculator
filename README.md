# 台灣勞工權益計算器

這是一個以 React + Vite 製作的台灣勞工權益試算網站，包含：

- 加班與假日出勤工資
- 特休資格與法定天數
- 資遣費新舊制拆算
- 勞退提撥與累積試算

## 開發指令

```bash
npm install
npm run dev
```

## 發佈到 GitHub Pages

這個專案已經設定好 GitHub Actions。

- 每次推送到 `master`，GitHub Pages workflow 會自動建置並部署網站。
- React Router 已改成 `HashRouter`，適合 GitHub Pages 靜態部署。

## 本機一鍵同步網站

如果你在本機修改了內容，要同步到 GitHub 與網站，直接執行：

```bash
npm run sync:site -- "你的提交訊息"
```

這個指令會自動做 4 件事：

1. 先跑 `npm run build`
2. 把目前所有變更加入 git
3. 建立 commit
4. 推送到 GitHub

推送完成後，GitHub Pages 會自動開始部署。

如果你沒有輸入提交訊息，腳本會自動用目前時間建立一個預設訊息。
