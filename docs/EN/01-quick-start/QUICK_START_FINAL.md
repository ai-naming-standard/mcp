# 🚀 Quick Start Guide - v5.0.2 (ChatGPT Enhanced)

## 📌 Purpose of This Document
Templates and commands for quickly applying AI Naming Convention

---

## 1️⃣ Instant Start Template (Copy and Use)

### 🏗️ Create Folder Structure 

#### Method 1: Manual Creation (Basic)
```bash
# Common for Windows/Mac/Linux
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# Create first file
echo "// AI Naming Convention v5.0.2" > 03_ACTIVE/001_FE_Main_C_App_DEV.js
```

#### Method 2: Automation Script (🆕 v5.0.1)
```bash
# Run initialization script
python SCRIPT_init_structure.py my-project

# Generate static files (🆕 v5.0.1 ASSET_ prefix required)
echo "<!-- Static Asset -->" > 02_STATIC/ASSET_logo.png
echo "<!-- Template -->" > 02_STATIC/TEMPLATE_email.html
echo "{\"theme\": \"default\"}" > 02_STATIC/CONFIG_theme.json

# Create test files (🆕 v5.0.1 index required)
echo "// Test" > 04_TEST/001_TEST_Main_Unit_COMMON.test.js

# AI permission display (🆕 v5.0.1)
echo "# ⚠️ AI PERMISSION: NO-MODIFY" > 01_CONFIG/.ai_permission
```

---

## 2️⃣ AI Project Command Templates

### 🛒 E-commerce Project
```
"Hey AI, create e-commerce project structure in 03_ACTIVE folder:

User related:
- 001_FE_User-Register_C_Page_PROD.jsx (Registration page)
- 002_FE_User-Login_C_Page_PROD.jsx (Login page)
- 003_BE_User-Auth_C_Service_PROD.py (Auth service)

Product related:
- 010_FE_Product-List_R_Page_PROD.jsx (Product list)
- 011_FE_Product-Detail_R_Component_PROD.jsx (Product detail)
- 012_BE_Product-Search_R_API_PROD.py (Product search API)

Order related:
- 020_FE_Cart-View_R_Page_PROD.jsx (Shopping cart)
- 021_BE_Order-Create_C_Service_PROD.py (Create order)
- 022_DB_Order-Schema_C_Table_PROD.sql (Order table)"
```

---

## 3️⃣ ChatGPT Improvements (v5.0.1 ~ v5.0.2)

### 🔥 v5.0.1 5 Core Improvements

### 🆕 02_STATIC Naming Rules
```bash
# Asset files: ASSET_ prefix
02_STATIC/ASSET_logo.png
02_STATIC/ASSET_favicon.ico

# Template files: TEMPLATE_ prefix  
02_STATIC/TEMPLATE_email.html

# Config files: CONFIG_ prefix
02_STATIC/CONFIG_theme.json
```

### 🆕 04_TEST Indexing Rules
```bash
# Pattern: [Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]
04_TEST/001_TEST_User-Login_Unit_COMMON.test.js
04_TEST/002_TEST_Payment-Process_Integration_STG.test.py
```

### 🔅 v5.0.2 External File Management

#### 📦 Using EXTERNAL_ Prefix
```bash
# Pattern: EXTERNAL_[Type]_[Vendor]_[Version].[ext]
02_STATIC/EXTERNAL_JS_TossPayments_v1.2.0.min.js
02_STATIC/EXTERNAL_SDK_Firebase_v12.1.0.zip

# Add _DEPRECATED during version update
02_STATIC/EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js  # Existing
02_STATIC/EXTERNAL_JS_jQuery_v3.6.0.min.js            # New
```

---

**Version**: v5.0.2 (ChatGPT Enhanced + External Dependencies)  
**Updated**: October 14, 2025  
**Additional Features**: Automation scripts, external file management, enhanced AI permissions
