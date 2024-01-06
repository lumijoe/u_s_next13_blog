## プロジェクト覚え書き

## 起動

**クライアント**

- npm run dev, localhost:3000
- nextversion 確認 package.json:"next":13.5.6

**JSON サーバー**

- npm run json-server, http://localhost:3001/posts

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

## src/app ディレクトリ

- src/app ディレクトリ直下の page.tsx:　 index.html のような最初のページ
- src/app ディレクトリ直下の layout.tsx: 全ページ共通の設定が可能（ヘッダーフッター）

## 画像 Unsplash を source API で実装する

- https://unsplash.com/developers
- next.config.js で source.unsplash.com を許可する
- ArticleList.tsx の Image タグ実装事例あり

## モックデータでテスト：最適な JSON サーバーの使用

- JSON 形式で管理できる
- https://www.npmjs.com/package/json-server#getting-started
- npm i json-server
- src/data/posts.json ファイルを作成し、ダミーデータを記述して準備
- ファイルを起動させる
  - json-server --watch db.json をターミナルで開くよりも
  - package.json で起動を楽にするため
  - script に"json-server": "json-server --watch src/data/posts.json --port 3001"を追加する
  - npm run json-server 実行
  - ターミナル Resourced にエンドポイントが表示されるのでコピー http://localhost:3001/posts
  - ブラウザで確認　 http://localhost:3001/posts
  - Json 形式でブラウザに表示されたら起動テストは完了
  - これを取得してフロント側で描画するための API 構築実装に取り掛かる

## API の作成：(Json データの型式を設定し、API で取得したデータをシリアライズし、page.tsx で取得して描画させる)

- **src/blogAPI.ts** データ処理コード：非同期通信とするための async を活用した定義
- **src/types.ts** 記事内要素のタイプを定義する
- blogAPI.ts ファイルで types.ts で定義した内容を呼び出す
- async, await fetch, json データをテキスト形式、文字列形式に変換して軽量化できるシリアライズ定義など
- **src/app/page.tsx** 定義したものを読み込む処理
