# 📁 04-shared-specs - Common Specifications

> **Folder Purpose**: Code tables and cheat sheets for quick reference

---

## 📄 Included Files

### `SHARED_SPECS_FINAL.md`
- **Purpose**: Reference materials for all users
- **Contents**:
  - Layer code table (FE, BE, DB...)
  - Action code table (C, R, U, D...)
  - Environment codes (DEV, STG, PROD...)
  - Detail code table (Page, Service, API...)
  - Quick search cheat sheet

---

## 🎯 When to Use This Folder

✅ **Choose this folder if:**
- Need to quickly check code tables
- Have questions like "What is BE?"
- Need reference when creating filenames
- Need a cheat sheet

❌ **Choose another folder if:**
- First time starting → [`01-quick-start/`](../01-quick-start/)
- AI collaboration methods → [`02-human-guides/`](../02-human-guides/)
- Technical details → [`03-machine-rules/`](../03-machine-rules/)

---

## 📋 Key Reference Code Tables

### Layer Codes (Architecture)
| Code | Meaning | Example |
|------|---------|---------|
| FE | Frontend | React, Vue |
| BE | Backend | Node.js, Python |
| DB | Database | MySQL, MongoDB |
| API | API Gateway | REST, GraphQL |

### Action Codes (Operations)
| Code | Meaning | Use Case |
|------|---------|----------|
| C | Create | Add, Generate |
| R | Read | Retrieve, Search |
| U | Update | Modify, Change |
| D | Delete | Remove, Delete |

### Environment Codes
| Code | Meaning |
|------|---------|
| DEV | Development |
| STG | Staging |
| PROD | Production |
| COMMON | Common |

---

## 🔍 Quick Search Tips

### When Creating Filenames
```
1. Find Layer (FE? BE? DB?)
2. Define Domain (User-Login)
3. Select Action (C, R, U, D?)
4. Check Detail (Page, Service?)
5. Check Env (usually PROD)
```

### Example
```
"User login page"
→ FE (frontend) + User-Login + C (create) + Page + PROD
→ 001_FE_User-Login_C_Page_PROD.jsx
```

---

## 📚 Related Documents

- **Full Explanation**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **Human Guide**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **Technical Specs**: [`../03-machine-rules/MACHINE_RULES_FINAL.md`](../03-machine-rules/MACHINE_RULES_FINAL.md)
- **Main Index**: [`../INDEX.md`](../INDEX.md)

---

**Updated**: 2025.10.18
