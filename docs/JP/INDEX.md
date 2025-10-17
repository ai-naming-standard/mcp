# 📚 AI命名規則 - ドキュメントインデックス

> **最新バージョン**: v6.0.0 (2025.10.18)  
> **安定バージョン**: v5.0.2 (2025.10.14)  
> **言語**: 日本語 | [한국어](../KR/INDEX.md) | [English](../EN/INDEX.md) | [简体中文](../CN/INDEX.md)

---

## 🎯 クイックスタート - あなたに合ったドキュメントを選択

### 👤 ユーザータイプ別推奨パス

| タイプ | 推奨ドキュメント | 所要時間 | 説明 |
|------|-----------------|----------|------|
| 🚀 **急いでいます！** | [`QUICK_START.md`](QUICK_START.md) | 5分 | 核心のみ素早く |
| 📖 **完全理解** | [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) | 30分 | v5.0.2完全ガイド |
| 🆕 **最新バージョン** | [`v6.0.0/README.md`](v6.0.0/README.md) | 10分 | マルチAI連携 |
| 💼 **非開発者** | [`02-human-guides/HUMAN_GUIDE_FINAL.md`](02-human-guides/HUMAN_GUIDE_FINAL.md) | 15分 | AIとの作業方法 |
| 💻 **開発者** | [`03-machine-rules/MACHINE_RULES_FINAL.md`](03-machine-rules/MACHINE_RULES_FINAL.md) | 20分 | 技術仕様 |

---

## 📁 ドキュメント構造

### 📄 ルートレベル (v5.0.2 現行バージョン)

```
JP/
├── 📖 AI_NAMING_CONVENTION_FINAL.md    ⭐ 完全統合ドキュメント (Part 0-13)
├── 🚀 QUICK_START.md                   ⭐ 5分クイックスタート
├── 📋 INDEX.md                         ← ここにいます！
├── 📝 CHANGELOG_v5.md                  バージョン変更履歴
├── 🛠️ SCRIPT_EXECUTION_GUIDE.md        スクリプト実行ガイド
├── 🔧 SCRIPT_init_structure.bat        初期化スクリプト (Windows)
├── 🔧 SCRIPT_init_structure.js         初期化スクリプト (Node.js)
└── 🔧 SCRIPT_init_structure.py         初期化スクリプト (Python)
```

### 📂 トピック別詳細ガイド

#### [`01-quick-start/`](01-quick-start/) - クイックスタートテンプレート
```
📁 01-quick-start/
├── README.md                          フォルダ説明
└── QUICK_START_FINAL.md               詳細テンプレート + コード例
```
- **用途**: コピー&ペースト可能なテンプレート
- **対象**: すぐにプロジェクトを始めたい方
- **特徴**: Python/JavaScript/Bashスクリプト含む

#### [`02-human-guides/`](02-human-guides/) - 人間向けガイド
```
📁 02-human-guides/
├── README.md                          フォルダ説明
└── HUMAN_GUIDE_FINAL.md               AIとの協働方法
```
- **用途**: AIへのリクエスト方法
- **対象**: 非開発者、PM、デザイナー
- **特徴**: 自然言語例中心

#### [`03-machine-rules/`](03-machine-rules/) - AIルール
```
📁 03-machine-rules/
├── README.md                          フォルダ説明
└── MACHINE_RULES_FINAL.md             技術仕様詳細
```
- **用途**: AIが従うべき正確なルール
- **対象**: 開発者、AIシステム
- **特徴**: 構造化パターン + 検証ルール

#### [`04-shared-specs/`](04-shared-specs/) - 共通仕様
```
📁 04-shared-specs/
├── README.md                          フォルダ説明
└── SHARED_SPECS_FINAL.md              コード表 + 参考資料
```
- **用途**: レイヤーコード、アクションコード等参照表
- **対象**: すべてのユーザー
- **特徴**: クイックリファレンスチートシート

---

### 📦 バージョンアーカイブ

#### [`v5.0.2/`](v5.0.2/) - 現行安定バージョンバックアップ
```
📁 v5.0.2/
├── AI_NAMING_CONVENTION_FINAL.md      v5.0.2バックアップ
├── CHANGELOG_v5.md
├── INDEX.md
├── QUICK_START.md
├── QUICK_START_FINAL.md
└── SCRIPT_EXECUTION_GUIDE.md
```
- **用途**: v5.0.2スナップショット保存
- **状態**: ✅ 安定版 (本番環境対応)

#### [`v6.0.0/`](v6.0.0/) - 次世代マルチAIバージョン 🆕
```
📁 v6.0.0/
├── 📖 README.md                        v6概要
├── 📖 AI_NAMING_CONVENTION_v6.md       Part 0-6
├── 📖 AI_NAMING_CONVENTION_v6_CONTINUATION.md  Part 7-13
├── 📝 CHANGELOG_v6.md                  v6変更内容
├── 📋 INDEX.md                         v6専用インデックス
├── 🎉 UPGRADE_COMPLETE.md              アップグレードガイド
└── 📁 05-meta-templates/               ⭐ v6コア機能
    ├── AI_ROLE_MATRIX.yaml             AI役割定義
    ├── DEP_GRAPH.yaml                  依存関係グラフ
    └── NAMING_WIZARD_RULES.yaml        自然言語変換ルール
```
- **用途**: マルチAI連携システム
- **状態**: 🆕 最新 (安定版)
- **主要機能**:
  - 🤖 複数AIの同時作業
  - 🪄 自然言語 → ファイル名自動変換
  - 🔗 自動依存関係追跡
  - 📊 完全なガバナンス

---

## 🎓 推奨学習パス

### 🚀 初心者 (初めて使用)
```
ステップ1: QUICK_START.md (5分)
   ↓
ステップ2: 01-quick-start/QUICK_START_FINAL.md (10分)
   ↓
ステップ3: 実際のプロジェクトに適用 (30分)
```

### 📚 中級者 (完全理解必要)
```
ステップ1: AI_NAMING_CONVENTION_FINAL.md (Part 0-5) (20分)
   ↓
ステップ2: 02-human-guides/ または 03-machine-rules/ (20分)
   ↓
ステップ3: 04-shared-specs/ 参照しながら実習 (30分)
```

### 🚀 上級者 (v6移行)
```
ステップ1: v6.0.0/README.md (10分)
   ↓
ステップ2: v6.0.0/CHANGELOG_v6.md (5分)
   ↓
ステップ3: v6.0.0/AI_NAMING_CONVENTION_v6.md (30分)
   ↓
ステップ4: v6.0.0/UPGRADE_COMPLETE.md (10分)
```

---

## 🔍 トピック別検索

### フォルダ構造の理解
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 1
- [`v6.0.0/AI_NAMING_CONVENTION_v6.md`](v6.0.0/AI_NAMING_CONVENTION_v6.md) - Part 1

### ファイル命名規則
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 2-4
- [`03-machine-rules/MACHINE_RULES_FINAL.md`](03-machine-rules/MACHINE_RULES_FINAL.md)
- [`04-shared-specs/SHARED_SPECS_FINAL.md`](04-shared-specs/SHARED_SPECS_FINAL.md)

### AIとの作業
- [`02-human-guides/HUMAN_GUIDE_FINAL.md`](02-human-guides/HUMAN_GUIDE_FINAL.md)
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 5

### プロジェクト初期化
- [`QUICK_START.md`](QUICK_START.md)
- [`01-quick-start/QUICK_START_FINAL.md`](01-quick-start/QUICK_START_FINAL.md)
- [`SCRIPT_EXECUTION_GUIDE.md`](SCRIPT_EXECUTION_GUIDE.md)

### マルチAI連携 (v6)
- [`v6.0.0/README.md`](v6.0.0/README.md)
- [`v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml`](v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml)

### 自然言語ファイル名変換 (v6)
- [`v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml`](v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml)

### 依存関係管理 (v6)
- [`v6.0.0/05-meta-templates/DEP_GRAPH.yaml`](v6.0.0/05-meta-templates/DEP_GRAPH.yaml)

---

## 📖 読み方のコツ

### 💡 効率的な読み方

1. **全部読む必要はありません**
   - 必要な部分だけ探して読む
   - インデックスを活用

2. **実践しながら学ぶ**
   - テンプレートをコピーして開始
   - 例を直接実行

3. **バージョン選択**
   - 新規プロジェクト → v6.0.0推奨
   - 既存プロジェクト → v5.0.2維持

4. **ヘルプが必要？**
   - QUICK_START.mdから開始
   - 02-human-guides/ 参照

---

## 🔄 バージョン比較

| 項目 | v5.0.2 | v6.0.0 |
|------|--------|--------|
| **フォルダ構造** | 7個 | 8個 (+ 07_META) |
| **AI連携** | 単一AI | マルチAI |
| **ファイル名生成** | 手動ルール学習 | 自然言語自動変換 |
| **依存関係追跡** | 手動管理 | 自動追跡 |
| **状態** | ✅ 安定版 | 🆕 最新 |
| **推奨対象** | 既存プロジェクト | 新規プロジェクト |

---

## 📞 追加情報

### 🌐 他の言語
- [한국어 버전](../KR/INDEX.md)
- [English Version](../EN/INDEX.md)
- [简体中文版](../CN/INDEX.md)

### 📦 GitHub
- リポジトリ: https://github.com/ai-naming-standard/mcp

### 💬 お問い合わせ
- ドキュメントの問題や改善提案はGitHub Issuesに投稿してください

---

**最終更新**: 2025.10.18  
**ドキュメントバージョン**: v6.0.0
