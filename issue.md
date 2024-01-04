## プロジェクト覚え書き

## 起動

- npm run dev, localhost:3000
- nextversion 確認 package.json:"next":13.5.6

## ファイル

- .next:nextjs 開発者用、編集 NG、初回起動時にで自動生成される
- node_modules:.gitignore に追加し共有スルー対象へ
- src/app ディレクトリ:ルーティング設定が可能なディレクトリ、サーバーサイドでのレンダリングがデフォルト
  - サーバーサイドでの取得は表示速度が UP する（サーバーコンポーネント）
  - デフォルトのサーバーレンダリングを解除して
    クライアント側でレンダリングしたい時は**ファイルの先頭に解除処理を記述する必要**がある
    - クライアント側でのレンダリング
    - ボタンクリックで JS 操作をしたい
    - useEffect を使用したい
    - ファイル先頭に **"use client";** を記述しないとクライアントレンダリングにならない
      　（付けないとデフォルトのサーバー側レンダリングになる）
    - https://nextjs.org/docs/app/building-your-application/rendering/server-components
- v12 での index.tsx は、v13 で page.tsx に変更
- src/app/layout.tsx:v12 での\_document,\_app を無くし一括で管理、共通レイアウト
  - 全ページでの metadata, header, footer の管理が可能
  - Layout や Header,Footer コンポーネントをページ毎で import せずともこの layout.tsx で管理が可能
- page.tsx:そのディレクトリで表示される html ページとなる
  - ルート直下の page.tsx:アクセスされたら表示される html
  - src/app/articles/page.tsx:articles ディレクトリで表示される html

## 画像 Unsplash を source API で実装する

- https://unsplash.com/developers
- next.config.js で source.unsplash.com を許可する
- ArticleList.tsx の Image タグ実装事例あり
