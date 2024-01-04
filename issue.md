## プロジェクト覚え書き

## 起動
- npm run dev, localhost:3000
- nextversion確認 package.json:"next":13.5.6

## ファイル
- .next:nextjs開発者用、編集NG、初回起動時にで自動生成される
- node_modules:.gitignoreに追加し共有スルー対象へ
- src/app/layout.tsx:v12での_document,_appを無くし一括で管理、共通レイアウト
    - 全ページでのmetadata, header, footer の管理が可能
    - LayoutやHeader,Footerコンポーネントをページ毎でimportせずともこのlayout.tsxで管理が可能