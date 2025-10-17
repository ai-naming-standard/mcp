# 📁 03-machine-rules - AIルール

> **フォルダの目的**: AIが従うべき正確な技術仕様を定義

---

## 📄 含まれるファイル

### `MACHINE_RULES_FINAL.md`
- **用途**: AIシステム向けの構造化ルール
- **含まれる内容**:
  - ファイル名生成アルゴリズム
  - パターン検証ルール
  - エラー処理方法
  - 自動修正ロジック
  - 正規表現パターン

---

## 🎯 このフォルダを使用すべき場合

✅ **以下の場合はこのフォルダを選択:**
- 開発者 (プログラマー)
- AIシステムの実装
- 正確な技術仕様が必要
- 検証ロジックの作成
- 自動化ツールの開発

❌ **以下の場合は他のフォルダを選択:**
- 非開発者 → [`02-human-guides/`](../02-human-guides/)
- クイックスタート → [`01-quick-start/`](../01-quick-start/)
- 参照表のみ必要 → [`04-shared-specs/`](../04-shared-specs/)

---

## 🔧 技術的内容

### 1. ファイル名生成アルゴリズム
```javascript
function generateFileName(params) {
  const pattern = `${params.index}_${params.layer}_${params.domain}...`;
  return validate(pattern);
}
```

### 2. パターン検証
```regex
^[0-9]{3}(_[A-Z]{2,6})(_[A-Za-z\-]+)(_[CRUDVXSTG])(_[A-Z][a-z]+)(_[A-Z]+)\.[a-z]+$
```

### 3. 自動修正ルール
```
入力: "userLogin.js"
分析: ルール違反を検出
出力: "001_FE_User-Login_C_Page_PROD.js"
提案: 3つの代替案を提示
```

---

## 📚 関連ドキュメント

- **人間向けガイド**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **コード表**: [`../04-shared-specs/SHARED_SPECS_FINAL.md`](../04-shared-specs/SHARED_SPECS_FINAL.md)
- **完全ガイド**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **メインインデックス**: [`../INDEX.md`](../INDEX.md)

---

**更新**: 2025.10.18
