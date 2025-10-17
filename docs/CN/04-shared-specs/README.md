# 📁 04-shared-specs - 共享规范

> **文件夹目的**: 快速参考的代码表和备忘单

---

## 📄 包含的文件

### `SHARED_SPECS_FINAL.md`
- **用途**: 所有用户的参考资料
- **包含内容**:
  - Layer代码表 (FE, BE, DB...)
  - Action代码表 (C, R, U, D...)
  - Environment代码 (DEV, STG, PROD...)
  - Detail代码表 (Page, Service, API...)
  - 快速搜索备忘单

---

## 🎯 何时使用此文件夹

✅ **以下情况请选择此文件夹:**
- 需要快速查看代码表
- 有疑问如"BE是什么？"
- 创建文件名时需要参考
- 需要备忘单

❌ **以下情况请选择其他文件夹:**
- 首次开始 → [`01-quick-start/`](../01-quick-start/)
- AI协作方法 → [`02-human-guides/`](../02-human-guides/)
- 技术详情 → [`03-machine-rules/`](../03-machine-rules/)

---

## 📋 主要参考代码表

### Layer代码 (层)
| 代码 | 含义 | 示例 |
|------|------|------|
| FE | Frontend | React, Vue |
| BE | Backend | Node.js, Python |
| DB | Database | MySQL, MongoDB |
| API | API Gateway | REST, GraphQL |

### Action代码 (操作)
| 代码 | 含义 | 使用示例 |
|------|------|-----------|
| C | Create | 创建、添加 |
| R | Read | 查询、搜索 |
| U | Update | 修改、变更 |
| D | Delete | 删除、移除 |

### Environment代码 (环境)
| 代码 | 含义 |
|------|------|
| DEV | 开发环境 |
| STG | 预发布 |
| PROD | 生产环境 |
| COMMON | 通用 |

---

## 🔍 快速搜索技巧

### 创建文件名时
```
1. 查找Layer (FE? BE? DB?)
2. 确定Domain (User-Login)
3. 选择Action (C, R, U, D?)
4. 确认Detail (Page, Service?)
5. 确认Env (通常是PROD)
```

### 示例
```
"用户登录页面"
→ FE (前端) + User-Login + C (创建) + Page + PROD
→ 001_FE_User-Login_C_Page_PROD.jsx
```

---

## 📚 相关文档

- **完整说明**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **人类指南**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **技术规范**: [`../03-machine-rules/MACHINE_RULES_FINAL.md`](../03-machine-rules/MACHINE_RULES_FINAL.md)
- **主索引**: [`../INDEX.md`](../INDEX.md)

---

**更新**: 2025.10.18
