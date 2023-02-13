# graphql-apolloclient のサンプル
Apollor Clientを使用したクライアントサイドのサンプルアプリです。

## アプリの詳細
本の有料貸出と貸出したユーザーを管理するアプリ

- ユーザー一覧ページ
- ユーザー詳細ページ
- 新規ユーザー登録ページ
- 貸出書一覧ページ
- 貸出書詳細ページ(準備中)(本を貸出したユーザーが確認できるようにしたい)
- 貸出本新規作成ページ(準備中)

![スクリーンショット 2023-02-13 22 28 35](https://user-images.githubusercontent.com/60390181/218470309-f5bdae37-cbf6-4415-a1af-f9af9dcb00ed.png)

## 使用技術

- React
- Next.js
- Chakra UI
- GraphQL
- Apollo Client
- GraphQL Code Generator

## 環境構築
前提条件 GraphQLサーバーとの疎通には[GraphQL api sample](https://github.com/Yota-K/graphql-api-sample)の環境構築が必要です。

### node_modulesのインストール
```
yarn install or npm install
```

### サーバー起動
```
yarn dev or npm run dev
```
GraphQL APIを3000で起動するため3000以外のポートで立ち上げてください。

### 
