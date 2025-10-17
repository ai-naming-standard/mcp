# 📁 04-shared-specs - 共通仕様

> **フォルダの目的**: クイックリファレンス用のコード表とチートシート

---

## 📄 含まれるファイル

### `SHARED_SPECS_FINAL.md`
- **用途**: すべてのユーザー向け参考資料
- **含まれる内容**:
  - Layerコード表 (FE, BE, DB...)
  - Actionコード表 (C, R, U, D...)
  - Environmentコード (DEV, STG, PROD...)
  - Detailコード表 (Page, Service, API...)
  - クイック検索チートシート

---

## 🎯 このフォルダを使用すべき場合

✅ **以下の場合はこのフォルダを選択:**
- コード表をすぐに確認したい
- "BEって何？"といった疑問がある
- ファイル名作成時に参照が必要
- チートシートが必要

❌ **以下の場合は他のフォルダを選択:**
- 初めて開始 → [`01-quick-start/`](../01-quick-start/)
- AI連携方法 → [`02-human-guides/`](../02-human-guides/)
- 技術詳細 → [`03-machine-rules/`](../03-machine-rules/)

---

## 📋 主要参照コード表

### Layerコード (階層)
| コード | 意味 | 例 |
|------|------|------|
| FE | Frontend | React, Vue |
| BE | Backend | Node.js, Python |
| DB | Database | MySQL, MongoDB |
| API | API Gateway | REST, GraphQL |

### Actionコード (操作)
| コード | 意味 | 使用例 |
|------|------|--------|
| C | Create | 作成、追加 |
| R | Read | 照会、検索 |
| U | Update | 修正、変更 |
| D | Delete | 削除、除去 |

### Environmentコード (環境)
| コード | 意味 |
|------|------|
| DEV | 開発環境 |
| STG | ステージング |
| PROD | 本番環境 |
| COMMON | 共通 |

---

## 🔍 クイック検索のコツ

### ファイル名を作成する時
```
1. Layerを探す (FE? BE? DB?)
2. Domainを決める (User-Login)
3. Actionを選択 (C, R, U, D?)
4. Detailを確認 (Page, Service?)
5. Envを確認 (通常はPROD)
```

### 例
```
"ユーザーログインページ"
→ FE (フロント) + User-Login + C (作成) + Page + PROD
→ 001_FE_User-Login_C_Page_PROD.jsx
```

---

## 📚 関連ドキュメント

- **完全説明**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **人間向けガイド**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **技術仕様**: [`../03-machine-rules/MACHINE_RULES_FINAL.md`](../03-machine-rules/MACHINE_RULES_FINAL.md)
- **メインインデックス**: [`../INDEX.md`](../INDEX.md)

---

**更新**: 2025.10.18
