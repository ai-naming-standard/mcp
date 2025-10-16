# 📖 Human Guide - v4+v5 Integration

## 📌 Purpose of This Document
Comprehensive guide for humans (developers, non-developers, managers)

---

## Part 1: Quick Reference Guide

### 📊 Naming Structure at a Glance
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
001_FE_User-Login_C_Page_PROD.js
```

### 🔤 Detailed Component Description

#### Index (Sequence)
| Format | Meaning | Example |
|--------|---------|---------|
| `001` | Basic sequence | First file |
| `001.1` | Decimal | Detailed step |
| `001-1` | Dependency | Sequential execution |
| `001a` | Parallel | Concurrent execution |
| `001s1` | Subordinate | Parent-child |

#### Layer (Tier)
| Code | Full Name | Responsibility | Example Tech |
|------|-----------|----------------|--------------|
| `FE` | Frontend | Screen/UI | React, Vue, Angular |
| `BE` | Backend | Server/Logic | Node.js, Python, Java |
| `DB` | Database | Data | MySQL, MongoDB |
| `API` | API Gateway | Communication | REST, GraphQL |
| `ML` | Machine Learning | AI/Training | TensorFlow, PyTorch |
| `INFRA` | Infrastructure | Infrastructure | Docker, K8s |
| `SH` | Shared | Common | Utilities |

#### Action (Operation)
| Code | Meaning | SQL | REST | Description |
|------|---------|-----|------|-------------|
| `C` | Create | INSERT | POST | Generate/Add |
| `R` | Read | SELECT | GET | View/Search |
| `U` | Update | UPDATE | PUT/PATCH | Modify/Change |
| `D` | Delete | DELETE | DELETE | Remove |
| `V` | Validate | - | - | Verify/Check |
| `X` | Execute | CALL | - | Run/Process |
| `S` | Send | - | - | Transmit/Dispatch |
| `T` | Transform | - | - | Convert/Change |
| `G` | Generate | - | - | Create/Output |

---

## Part 2: Project Examples

### 🛒 Complete E-commerce
```
ecommerce/
├── 00_DOCS/                        # [⚠️ AI PERMISSION: NO-MODIFY]
│   ├── README.md                  # ⚠️ NO-MODIFY header required
│   ├── API_Documentation.md       # ⚠️ NO-MODIFY header required
│   └── Business_Requirements.md   # ⚠️ NO-MODIFY header required
│
├── 01_CONFIG/                      # [⚠️ AI PERMISSION: NO-MODIFY]
│   ├── config.dev.yml             # ⚠️ NO-MODIFY header required
│   ├── config.prod.yml            # ⚠️ NO-MODIFY header required
│   └── secrets.env                # ⚠️ NO-MODIFY + .gitignore
│
├── 02_STATIC/                     # [ChatGPT Enhancement: ASSET_ prefix required]
│   ├── ASSET_logo.png
│   ├── ASSET_favicon.ico
│   ├── TEMPLATE_email_order.html
│   └── CONFIG_theme.json
│
├── 03_ACTIVE/
│   # === Phase 1: User System ===
│   ├── 001_FE_User-Register_C_Page_PROD.jsx
│   ├── 001-1_FE_User-Register_V_FormValidator_PROD.js
│   ├── 002_FE_User-Login_C_Page_PROD.jsx
│   ├── 003_BE_User-Register_C_API_PROD.py
│   │
│   # === Phase 2: Product System ===
│   ├── 010_FE_Product-List_R_Page_PROD.jsx
│   ├── 011_FE_Product-Detail_R_Component_PROD.jsx
│   │
│   # === Phase 3: Cart & Order ===
│   ├── 020_FE_Cart-View_R_Page_PROD.jsx
│   ├── 021_BE_Order-Create_C_Service_PROD.py
│   │
│   # === Phase 4: Notification (Parallel) ===
│   ├── 030a_BE_Email-Order_S_Service_PROD.py
│   ├── 030b_BE_SMS-Order_S_Service_PROD.py
│   ├── 030c_BE_Push-Order_S_Service_PROD.py
│
├── 04_TEST/                        # [ChatGPT Enhancement: Indexed naming required]
│   ├── 001_TEST_User-Service_Unit_COMMON.test.py
│   ├── 010_TEST_Checkout-Flow_Integration_STG.test.py
│   └── 020_TEST_Full-Purchase_E2E_PROD.test.js
│
├── 05_BUILD/
│   └── dist/                    # Auto-generated
│
└── 06_LOGS/
    ├── app.log                  # Auto-generated
    └── error.log                # Auto-generated
```

---

## Part 3: Migration Guide

### 🔄 Existing Project Conversion Strategy

#### Phase 1: Analysis (Day 1)
```bash
# 1. Understand current structure
find . -type f -name "*.js" -o -name "*.py" | head -20

# 2. Count files
find . -type f | wc -l

# 3. Evaluate complexity
- Files < 50: Simple
- Files 50-200: Medium
- Files > 200: Complex
```

#### Phase 2: Preparation (Day 2)
```bash
# 1. Backup
cp -r project project_backup

# 2. Create folders
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 3. Write mapping table
echo "old_name,new_name,status" > migration_map.csv
```

---

## Part 4: Team Collaboration Guide

### 👥 Guide by Role

#### 👨‍💼 PM/Planner
```
"Hey AI, look at the 03_ACTIVE folder and organize the list of currently implemented features"
"Hey AI, check if all User-Login related files are complete"
```

#### 👩‍💻 Frontend Developer
```
"Hey AI, show me only files starting with FE_ in 03_ACTIVE"
"Hey AI, add pagination to the Product-List component"
```

#### 👨‍💻 Backend Developer
```
"Hey AI, create a list of APIs starting with BE_ in 03_ACTIVE"
"Hey AI, add transaction handling to Order-Create service"
```

---

## Part 5: Troubleshooting Guide

### ❓ Frequently Asked Questions

#### Q1: Too many files
**A:** Create domain subfolders
```
03_ACTIVE/
  ├── FE_User/       # User-related frontend
  ├── BE_Payment/    # Payment-related backend
  └── DB_Common/     # Common DB
```

#### Q2: Overlapping indices
**A:** Use relationship expressions
```
001_Main.js
001-1_Main_Helper.js    # Dependency
001a_Main_Parallel.js   # Parallel
001s1_Main_Child.js     # Subordinate
```

---

**Version**: FINAL  
**Updated**: October 14, 2025
