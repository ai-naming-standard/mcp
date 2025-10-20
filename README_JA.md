# 🚀 AIファイル命名アシスタント

> **AIにファイル名の付け方を教えましょう！**  
> そうすれば、AIはあなたのプロジェクトをよりよく理解し、効果的にサポートしてくれます。

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**🌐 言語**: [English](./README.md) | [한국어](./README_KO.md) | [日本語](./README_JA.md) | [中文](./README_CN.md)

---

## 💡 こんな方におすすめ

✅ Claude、ChatGPT、CursorなどのAIツールを使っている方  
✅ ファイルが多すぎて管理が難しい方  
✅ チームでファイル名のルールを統一したい方  
✅ AIに自分のプロジェクトをもっと理解してほしい方

---

## 🎯 どんな問題を解決しますか？

### ❌ 以前：わかりにくいファイル名

```
login.js
user_page_final_v2.jsx
payment_fixed.py
test123.sql
```

**結果：** AIが混乱してミスをします 😵

### ✅ 導入後：明確なファイル名

```
001_FE_User-Login_C_Page_PROD.jsx
002_BE_Payment-Process_X_API_PROD.py
003_DB_User-Schema_C_Migration_PROD.sql
004_TEST_Login_Unit_DEV.test.js
```

**結果：** AIが正確に理解して、より良いサポートを提供！ ✨

---

## 🎁 何が得られますか？

### 1. 🤖 AIがあなたの意図を理解

**普通の言葉で話すだけ：**
- "ログインページを作って" → AIが自動生成：`001_FE_User-Login_C_Page_PROD.jsx`
- "返金APIを追加して" → AIが自動生成：`021_BE_Payment-Refund_C_API_PROD.py`
- "商品テーブルを作って" → AIが自動生成：`005_DB_Product-Schema_C_Migration_PROD.sql`

### 2. 📁 8つのシンプルなフォルダ

プロジェクトが自動的に整理されます：

```
my-project/
├── 00_DOCS/      📚 ドキュメント
├── 01_CONFIG/    ⚙️ 設定ファイル
├── 02_STATIC/    📦 画像、フォント
├── 03_ACTIVE/    🔥 メインコード
├── 04_TEST/      🧪 テスト
├── 05_BUILD/     🏗️ ビルドファイル
├── 06_LOGS/      📊 ログ
└── 07_META/      🎯 AI協働ファイル
```

### 3. 🤝 複数のAIが協力して作業

- **Claude**がコードを書く
- **Cursor**がレビュー
- **ChatGPT**が構造を設計
- **全員が同じルールを理解！**

### 4. 📝 自動記録管理

すべてが自動的に記録されます：
- 誰が何をしたか
- いつ作業したか
- どのファイルが互いに関連しているか

---

## ⚡ クイックスタート（3分）

### ステップ1：インストール

```bash
npm install -g ai-naming-standard-mcp
```

### ステップ2：AIに教える

ClaudeやCursorの設定にこれをコピーするだけ：

```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}
```

### ステップ3：すぐに使える！

AIに普通の言葉で話してください：
- "ユーザーダッシュボードページを作って"
- "メール認証APIを追加して"
- "商品データベーステーブルを作って"

**以上です！** 🎉

---

## 📖 実際の使用例

### 例1：ショッピングサイトを作る

**あなた：** "カートページが必要"

**AIが作成：**
```
015_FE_Cart-Shopping_R_Page_PROD.jsx
```

**名前を見ればわかります：**
- `015` - ファイル番号（見つけやすい）
- `FE` - フロントエンド（Webページ）
- `Cart-Shopping` - ショッピングカート機能
- `R` - Read/表示（情報を表示）
- `Page` - ページ
- `PROD` - 本番環境（実際のサイト）

### 例2：チーム協働

**以前：**
- 太郎：`login_page.jsx`
- 花子：`LoginPage.jsx`
- 次郎：`user-login-component.jsx`
- 😵 みんな混乱！

**導入後：**
- 全員：`001_FE_User-Login_C_Page_PROD.jsx`
- ✨ 完璧な一貫性！

---

## 🌍 4つの言語をサポート

すべての機能があなたの言語で動作します：

| 言語 | 状態 | ドキュメント |
|----------|--------|---------------|
| English | ✅ 完全サポート | [Docs](https://github.com/ai-naming-standard/mcp/tree/main/docs/EN) |
| 한국어 (Korean) | ✅ 完全サポート | [문서](https://github.com/ai-naming-standard/mcp/tree/main/docs/KR) |
| 日本語 (Japanese) | ✅ 完全サポート | [ドキュメント](https://github.com/ai-naming-standard/mcp/tree/main/docs/JP) |
| 中文 (Chinese) | ✅ 完全サポート | [文档](https://github.com/ai-naming-standard/mcp/tree/main/docs/CN) |

---

## 🎓 ファイル名はどのように生成されますか？

心配しないでください - 覚える必要はありません！  
**AIに欲しいものを伝えるだけで、AIが正しい名前を作成します。**

でも、気になる方のために、こんな仕組みです：

```
[番号]_[場所]_[何]-[詳細]_[動作]_[タイプ]_[環境]
```

**例：**

| ファイル名 | 意味 |
|-----------|---------|
| `001_FE_User-Login_C_Page_PROD.jsx` | フロントエンドログインページ（作成） |
| `002_BE_Payment-Process_X_Service_PROD.py` | バックエンド決済サービス（実行） |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | データベース注文テーブル（作成） |

**場所（Layer）：**
- `FE` = フロントエンド（ユーザーが見る画面）
- `BE` = バックエンド（サーバーロジック）
- `DB` = データベース（データ保存）
- `API` = API（接続）

**動作：**
- `C` = Create（新規作成）
- `R` = Read（表示）
- `U` = Update（更新）
- `D` = Delete（削除）
- `X` = Execute（実行処理）

---

## 💬 サポートが必要ですか？

📧 **メール**: [omskykhal@gmail.com](mailto:omskykhal@gmail.com)

---

## 🤝 一緒に作りましょう

歓迎します：
- バグ報告
- 機能提案
- 翻訳
- ドキュメント改善

**貢献方法：**

1. GitHubを訪問：[https://github.com/ai-naming-standard/mcp](https://github.com/ai-naming-standard/mcp)
2. IssueまたはPull Requestを開く
3. 迅速にレビューして返信します！

---

## 📜 ライセンス

MITライセンス - 誰でも無料で使用可能！

```
Copyright (c) 2025 AI Naming Standard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🎯 主なメリット

✨ **時間節約**：ファイル名を考える必要なし  
✨ **混乱なし**：全員が同じシステムを使用  
✨ **より良いAIサポート**：AIがプロジェクト構造を理解  
✨ **簡単な協働**：全員に明確なルール  
✨ **プロフェッショナル**：プロジェクトが整理されて見やすい

---

## 📦 技術詳細（開発者向け）

<details>
<summary>技術情報を表示</summary>

### MCPプロトコル

- MCP v0.6.0互換
- 24個の組み込みファイル管理ツール
- マルチAIオーケストレーションサポート
- 自動依存関係追跡

### システム要件

- Node.js >= 16.0.0
- npmまたはyarn
- Claude Desktop、Cursor、VS Code互換

### 高度な機能

- カスタム命名規則
- v4/v5からの移行
- 依存関係グラフ生成
- AIロールマトリックス管理
- 会話履歴追跡

詳細な技術ドキュメント：[技術文書](./AI-NAMING-STANDARD/JP/v6.0.0/)

</details>

---

<div align="center">

**バージョン**: 6.0.13  
**ステータス**: 本番環境対応 ✅

AIコミュニティのために心を込めて作りました 💙

[NPMパッケージ](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/mcp) • 
[ドキュメント](./AI-NAMING-STANDARD/JP/v6.0.0/)

</div>
