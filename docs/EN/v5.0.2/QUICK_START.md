# 🚀 AI Naming Convention - Quick Start Guide v5.0.2

> **Updated**: October 14, 2025 | **Time Required**: 5 minutes | **Difficulty**: ⭐

---

## 1️⃣ Create Folders (30 seconds)
```bash
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS
```

## 2️⃣ Understand 7 Folders (1 minute)

| Folder | Purpose | AI Permission | ⚠️ Notes |
|--------|---------|---------------|-----------|
| 00_DOCS | Documentation | Read-only | `⚠️ AI NO-MODIFY` header |
| 01_CONFIG | Configuration | **No modification** 🔴 | `⚠️ AI NO-MODIFY - CRITICAL` |
| 02_STATIC | Resources | Read/Add | **Prefix required**: ASSET_*, TEMPLATE_*, CONFIG_* |
| **03_ACTIVE** | **Actual code** | **Full access** ✅ | 💥 **All code goes here!** |
| 04_TEST | Tests | Create/Modify | **001_TEST_* index required** |
| 05_BUILD | Build | Auto-generated | dist/, compilation results |
| 06_LOGS | Logs | Auto-recorded | Execution/error logs |

## 3️⃣ Master File Name Pattern (2 minutes)

### 📝 Basic Formula
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### 🔢 Actual Example
```
001_FE_User-Login_C_Page_PROD.js
```
- **001**: Execution order
- **FE**: Frontend layer
- **User-Login**: User login function
- **C**: Create action
- **Page**: Page type
- **PROD**: Production environment

### 🆕 Dependency Expression (v5.0.1)
```
001-1, 001-2    # Sequential execution (1 then 2)
001a, 001b      # Parallel execution (simultaneous)
001s1, 001s2    # Subordinate relationship (parent-child)
[Deps: 001,002] # Explicit dependency notation
```

## 4️⃣ Core Code Table (Quick Reference)

### 📊 Layer Codes
| Code | Meaning | Examples |
|------|---------|----------|
| **FE** | Frontend | React, Vue |
| **BE** | Backend | Node.js, Python |
| **DB** | Database | MySQL, MongoDB |
| **API** | API Gateway | REST, GraphQL |
| **ML** | Machine Learning | AI models |

### ⚡ Action Codes
| Code | Meaning | Use Case |
|------|---------|----------|
| **C** | Create | Generate, add |
| **R** | Read | View, search |
| **U** | Update | Modify, change |
| **D** | Delete | Remove |
| **V** | Validate | Verify |
| **X** | Execute | Run |

### 🌍 Environment Codes
| Code | Meaning |
|------|---------|
| **DEV** | Development environment |
| **STG** | Staging |
| **PROD** | Production environment |
| **COMMON** | All environments |

## 5️⃣ Practical Example - Shopping Mall (2 minutes)

### 📁 03_ACTIVE Folder Structure
```
03_ACTIVE/
├── 001_FE_Product-List_R_Page_PROD.jsx       # Product list view
├── 002_FE_Product-Detail_R_Modal_PROD.jsx    # Product detail modal
├── 003_BE_Product-API_R_Service_PROD.py      # Product API service
├── 004_BE_Cart-Add_C_Handler_PROD.py         # Add to cart
├── 005_DB_Product-Schema_C_Table_COMMON.sql  # Product table
└── 006_TEST_Product-List_V_Unit_DEV.test.js  # Product list test
```

### 📁 02_STATIC Folder Structure (v5.0.1)
```
02_STATIC/
├── ASSET_logo_main.png                       # Logo image
├── TEMPLATE_email_order.html                 # Order email template
├── CONFIG_api_endpoints.json                 # API endpoint config
└── EXTERNAL_JS_TossPayments_v1.2.0.min.js   # Toss payment SDK (v5.0.2)
```

### 📁 04_TEST Folder Structure (v5.0.1)
```
04_TEST/
├── 001_TEST_User-Login_Unit_DEV.test.js      # Login unit test
├── 002_TEST_Product-API_Integration_STG.test.py  # API integration test
└── 003_TEST_Payment-Flow_E2E_PROD.test.js    # Payment E2E test
```

## 6️⃣ Talking to AI

### ✅ Correct Requests
```
"Hey AI, create 001_FE_User-Login_C_Page_PROD.jsx in 03_ACTIVE folder"
"Add ASSET_logo.png to 02_STATIC"
"Create 001_TEST_Login_Unit_DEV.test.js in 04_TEST"
```

### ❌ Wrong Requests
```
"Create a file" (no folder specified)
"src/components/..." (wrong folder structure)
"logo.png in 02_STATIC" (no prefix)
```

## 7️⃣ v5.0.2 External File Management

### 📦 External Library Naming
```
EXTERNAL_[Type]_[Vendor]_v[Version].[ext]

Examples:
EXTERNAL_JS_jQuery_v3.6.0.min.js
EXTERNAL_SDK_Firebase_v10.0.0.zip
EXTERNAL_CSS_Bootstrap_v5.3.0.min.css
```

### 🔄 During Version Update
```
# Add _DEPRECATED to old version
EXTERNAL_JS_React_v17.0.2_DEPRECATED.js
EXTERNAL_JS_React_v18.2.0.js  # Current version
```

## ⚠️ Top 5 Common Mistakes

| Mistake | Correct Method |
|---------|----------------|
| ❌ Creating many folders | ✅ Use only 7 folders |
| ❌ "src/components/..." | ✅ "03_ACTIVE/001_FE_..." |
| ❌ "logo.png" in 02_STATIC | ✅ "ASSET_logo.png" |
| ❌ Random test files | ✅ "001_TEST_*" format |
| ❌ Random filenames | ✅ Follow pattern precisely |

## 🎯 Remember Only 3 Core Things!

### 1️⃣ **03_ACTIVE is Main**
All actual code goes here!

### 2️⃣ **Filename is Documentation**
```
001_FE_User-Login_C_Page_PROD.js
= "First frontend user-login create page for production"
```

### 3️⃣ **Specify Folder When Requesting AI**
```
Start with "in 03_ACTIVE folder..."
```

---

## 📚 Learn More

- **Complete Guide**: [AI_NAMING_CONVENTION_FINAL.md](AI_NAMING_CONVENTION_FINAL.md)
- **Changes**: [CHANGELOG_v5.md](CHANGELOG_v5.md)
- **Project Initialization**: `python SCRIPT_init_structure.py`

---

**✨ v5.0.2 Applied!** Start now 🚀

---
*Last Updated: October 14, 2025 | Includes ChatGPT 5 Improvements + External File Management*
