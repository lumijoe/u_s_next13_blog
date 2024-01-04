## プロジェクト覚え書き

## 起動
- npm run dev, localhost:3000
- nextversion確認 package.json:"next":13.5.6

## ファイル
- .next:nextjs開発者用、編集NG、初回起動時にで自動生成される
- node_modules:.gitignoreに追加し共有スルー対象へ
- src/appディレクトリ:ルーティング設定が可能なディレクトリ、サーバーサイドでのレンダリングがデフォルト
    - サーバーサイドでの取得は表示速度がUPする（サーバーコンポーネント）
    - デフォルトのサーバーレンダリングを解除して
        クライアント側でレンダリングしたい時は**ファイルの先頭に解除処理を記述する必要**がある
        - クライアント側でのレンダリング
        - ボタンクリックでJS操作をしたい
        - useEffectを使用したい
        - ファイル先頭に **"use client";** を記述しないとクライアントレンダリングにならない
        　（付けないとデフォルトのサーバー側レンダリングになる）
        - https://nextjs.org/docs/app/building-your-application/rendering/server-components
    
- v12でのindex.tsxは、v13でpage.tsxに変更
- src/app/layout.tsx:v12での_document,_appを無くし一括で管理、共通レイアウト
    - 全ページでのmetadata, header, footer の管理が可能
    - LayoutやHeader,Footerコンポーネントをページ毎でimportせずともこのlayout.tsxで管理が可能
- page.tsx:そのディレクトリで表示されるhtmlページとなる
    - ルート直下のpage.tsx:アクセスされたら表示されるhtml
    - src/app/articles/page.tsx:articlesディレクトリで表示されるhtml