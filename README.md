# 環境構築手順

## 前提条件

node ver20以上であること  
(v20.9.0 で開発している)

バージョンが低い場合は任意の方法でアップデートする  
インストーラも用意されているので、特にこだわりがなければこれが簡単  
https://nodejs.org/en

他には、

- nodebrew
- n

などのバージョン管理ツールもあるのでお任せ

## 手順①：packageをインストール

下記コマンドでpackage-lock.jsonからパッケージ群をインストール。  
node_modulesディレクトリにインストールされる  
（状況によっては `npm i` でも良い）

```
npm ci
```

npmのバージョンが古くエラーになる可能性がある  
その際は、ログで `npm install -g npm@xxx` とかの指示があるので従う

## 手順②：Nextを起動

下記コマンドでNext.jsを起動する

```
npm run dev
```

http://localhost:3000
が起動すれば成功。  
あとはこのURLをブラウザで見る

# 開発者向け

## 開発するための環境整備

vscodeのExtensionsで、

- ESLint  
  (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Prettier  
  (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

をインストールすること。  
パッケージのインストールと設定ファイルは用意済み

## ディレクトリ構成について

下記構成になっている

```
.
└── src/
    ├── api/                       #API関連
    │   ├── ApiBase.ts
    │   └── ApiParams.ts
    ├── app/                      #APP Router
    │   ├── pokemon/              #pokemonページ関連
    │   │   ├── page.tsx
    │   │   ├── pokemon.css.ts    #xxx.css.tsは全てvanilla-extractファイル
    │   │   └── usePokemon.ts     #ページ用hooks
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── index.css.ts
    │   ├── layout.tsx
    │   └── page.tsx
    ├── common/                   #共通要素
    │   ├── AppConst.ts
    │   ├── AppRoutes.ts
    │   └── AppSessionStorage.ts
    ├── contexts/                 #ビルドインのcontext
    │   └── GlobalContext.tsx
    ├── features/                 #追加機能コンポーネント（その追加機能が必要なくなれば消すだけでOK）
    │   └── ...略
    ├── hooks/                    #カスタムhooks
    │   └── ...略
    ├── types/                    #型定義
    │   ├── enum/                 #enum(Union or オブジェクトリテラル)
    │   │   └── ...略
    │   └── ...略
    └── util/                     #util系
        └── ...略
```
