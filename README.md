# graphql-apolloclient のサンプル
Apollor Clientを使用したクライアントサイドのサンプルアプリです。

## アプリの詳細
本の有料貸出と貸出したユーザーを管理するアプリ

- ユーザー一覧ページ
- ユーザー詳細ページ
- 新規ユーザー登録ページ
- 貸出書一覧ページ
- 貸出書詳細ページ(準備中)(誰が本をかりているか確認したい)
- 貸出本新規作成ページ(準備中)

![スクリーンショット 2023-02-13 22 28 35](https://user-images.githubusercontent.com/60390181/218470309-f5bdae37-cbf6-4415-a1af-f9af9dcb00ed.png)

## 使用技術

- React
- Next.js
- Chakra UI
- GraphQL
- Apollo Client
- GraphQL Code Generator
- GraphQL Code Generator/react-hooks
- [Apollo Client Devtools](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm)

## 環境構築
前提条件 
- Node.jsのインストールが必須です。
- GraphQLサーバーとの疎通には[GraphQL api sample](https://github.com/Yota-K/graphql-api-sample)の環境構築が必要です。

### node_modulesのインストール
```
yarn install or npm install
```

### サーバー起動
```
yarn dev or npm run dev
```
GraphQL APIを3000で起動するため3000以外のポートで立ち上げてください。


## GraphQL Code Generatorの使用方法
以下、順に実行していく

### スキーマを作成する
src/graphql/schemasにAPIから呼び出したいスキーマを定義する

### generateコマンドの実行
```
yarn generate
```

### 作成されたGraphQL types/hooksの確認
src/graphql/generatedにGraphQLの型定義とAPI Hooksが作成されている。

