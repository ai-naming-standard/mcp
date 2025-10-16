# 🚀 Script Execution Guide - AI Naming Convention Auto-Initialization

> **Version**: v5.0.2 FINAL  
> **Updated**: October 14, 2025  
> **Purpose**: Automatic project structure generation and AI development environment setup

---

## 📌 Overview

Automatically create a project with AI Naming Convention applied with **just one command**.

### ✨ Auto-Generated Items
- ✅ 7 standard folders (00_DOCS ~ 06_LOGS)
- ✅ AI permission files (.ai_permission)
- ✅ Basic documents (README.md, EXTERNAL_DEPENDENCIES.md)
- ✅ First code file by project type
- ✅ .gitignore configuration

---

## 🎯 Script Selection Guide

| Script | Environment | Recommended For | Features |
|--------|-------------|-----------------|----------|
| **SCRIPT_init_structure.py** | Python 3.x+ | Python developers, General use | 🔥 Most stable |
| **SCRIPT_init_structure.js** | Node.js | JavaScript/TypeScript developers | ⚡ Fast execution |
| **SCRIPT_init_structure.bat** | Windows | Windows users | 🪟 No installation needed |

---

## 📦 1. Python Version (.py)

### Requirements
```bash
# Check Python version
python --version  # Python 3.6 or higher required
```

### Basic Usage
```bash
# Web project (default)
python SCRIPT_init_structure.py my-project

# API project
python SCRIPT_init_structure.py my-api api

# ML project
python SCRIPT_init_structure.py ml-model ml
```

### Execution Output
```
🚀 Initializing AI-Standard Project: my-project
📦 Project Type: web
🔧 Version: v5.0.2 with External Dependency Management
--------------------------------------------------

📁 Creating folder structure...
✅ Created: 00_DOCS - Documentation (AI Read-Only)
✅ Created: 01_CONFIG - Configuration (AI No Access - CRITICAL)
✅ Created: 02_STATIC - Static Resources (Prefix required)
✅ Created: 03_ACTIVE - Active Development (AI Primary Workspace)
✅ Created: 04_TEST - Tests (Indexed naming required)
✅ Created: 05_BUILD - Build Output
✅ Created: 06_LOGS - Logs

📝 Creating initial files...
✅ Created: 00_DOCS/README.md
✅ Created: 00_DOCS/EXTERNAL_DEPENDENCIES.md

==================================================
✨ Project 'my-project' initialized successfully!
==================================================
```

---

## ⚡ 2. Node.js Version (.js)

### Requirements
```bash
# Check Node.js version
node --version  # Node.js 12.x or higher recommended
```

### Basic Usage
```bash
# Web project (default)
node SCRIPT_init_structure.js my-project

# API project
node SCRIPT_init_structure.js my-api api

# ML project
node SCRIPT_init_structure.js ml-model ml
```

### Features
- ⚡ Fast execution speed
- 🔧 External package download support
- 🔐 SHA256 integrity verification

---

## 🪟 3. Windows Batch Version (.bat)

### Requirements
```
None - Windows native support
```

### Basic Usage
```cmd
REM Web project (default)
SCRIPT_init_structure.bat my-project

REM API project
SCRIPT_init_structure.bat my-api api

REM ML project
SCRIPT_init_structure.bat ml-model ml
```

### Features
- 🪟 Windows native
- 📦 No additional installation
- 🚀 Ready to use immediately

---

## 📊 Generated Project Structure

### Before Execution
```
current-directory/
└── (empty)
```

### After Execution
```
my-project/
├── 00_DOCS/
│   ├── .ai_permission              # AI Permission: READ_ONLY
│   ├── README.md                   # Project documentation
│   └── EXTERNAL_DEPENDENCIES.md    # External libraries list
│
├── 01_CONFIG/
│   └── .ai_permission              # AI Permission: NO_ACCESS ⚠️
│
├── 02_STATIC/
│   ├── .ai_permission              # AI Permission: READ_ADD
│   └── EXTERNAL_README.md          # External files guide
│
├── 03_ACTIVE/
│   ├── .ai_permission              # AI Permission: FULL_ACCESS ✅
│   └── 001_FE_App-Main_C_Component_DEV.jsx  # First code file
│
├── 04_TEST/
│   └── .ai_permission              # AI Permission: CREATE_MODIFY
│
├── 05_BUILD/
│   └── .ai_permission              # AI Permission: CREATE_ONLY
│
├── 06_LOGS/
│   └── .ai_permission              # AI Permission: WRITE_ONLY
│
└── .gitignore                      # Git configuration
```

---

## 🤖 AI Auto-Recognition Workflow

### 1️⃣ Execute Script
```bash
python SCRIPT_init_structure.py my-shop web
```

### 2️⃣ Project Structure Generated
- 7 folders auto-created
- `.ai_permission` file placed in each folder

### 3️⃣ AI Reads Permission Files
```
00_DOCS/.ai_permission
┌─────────────────────────────────┐
│ Permission: READ_ONLY           │
│ Note: ⚠️ AI PERMISSION: NO-MODIFY│
│ Description: AI cannot modify   │
└─────────────────────────────────┘
```

### 4️⃣ AI Applies Rules
```
User: "Create a login page"

AI Processing:
1. Check 03_ACTIVE folder → FULL_ACCESS ✅
2. Apply naming rules → 001_FE_User-Login_C_Page_PROD.jsx
3. Create file and write code
4. Auto-create test file → 04_TEST/001_TEST_User-Login_Unit_COMMON.test.js
```

---

## 💡 Project Type Details

### 🌐 web (Web Application)
```bash
python SCRIPT_init_structure.py my-shop web
```

**Auto-generated file:**
- `03_ACTIVE/001_FE_App-Main_C_Component_DEV.jsx`

**Suitable for:**
- React / Vue / Angular projects
- SPA (Single Page Application)
- PWA (Progressive Web App)

### 🔌 api (Backend API)
```bash
python SCRIPT_init_structure.py my-api api
```

**Auto-generated file:**
- `03_ACTIVE/001_BE_Server-Init_X_Bootstrap_DEV.py`

**Suitable for:**
- REST API
- GraphQL API
- Microservices

### 🤖 ml (Machine Learning)
```bash
python SCRIPT_init_structure.py ml-model ml
```

**Auto-generated file:**
- `03_ACTIVE/001_ML_Model-Init_C_Pipeline_DEV.py`

**Suitable for:**
- TensorFlow / PyTorch projects
- Data analysis
- AI model development

---

## 🔄 Before/After Comparison

### ❌ Manual Work Without Script
```bash
# 1. Create 7 folders one by one
mkdir 00_DOCS
mkdir 01_CONFIG
mkdir 02_STATIC
mkdir 03_ACTIVE
mkdir 04_TEST
mkdir 05_BUILD
mkdir 06_LOGS

# 2. Create 7 permission files one by one
echo "Permission: READ_ONLY" > 00_DOCS/.ai_permission
# ... (repeat 7 times)

# 3. Write document files
# ... (manual input)

# Time required: About 15-20 minutes ⏱️
```

### ✅ Automated With Script
```bash
# Just one line!
python SCRIPT_init_structure.py my-project

# Time required: About 3 seconds ⚡
```

---

## 🎯 Next Steps

### 1. Start Conversation with AI
```
"Hey AI, add User-Login functionality to 03_ACTIVE folder"
```

### 2. AI Automatically:
- ✅ Check folder permissions (03_ACTIVE = FULL_ACCESS)
- ✅ Apply filename rules
- ✅ Generate code
- ✅ Create test file

### 3. Check Results
```
03_ACTIVE/
└── 001_FE_User-Login_C_Page_PROD.jsx  ✅ Created

04_TEST/
└── 001_TEST_User-Login_Unit_COMMON.test.js  ✅ Auto-created
```

---

## ❓ Frequently Asked Questions

### Q1: Can I use this with existing projects?
**A:** We recommend executing in a new folder and then migrating existing files.

### Q2: Script doesn't execute
**A:** 
```bash
# Check Python version
python --version

# Grant execution permission (Linux/Mac)
chmod +x SCRIPT_init_structure.py

# Windows: Run as administrator
```

### Q3: I chose the wrong project type
**A:** Execute again in a new folder, or manually change only the first file.

### Q4: Can I delete .ai_permission files?
**A:** ❌ Don't delete them. AI won't recognize permissions.

---

## 🔧 Advanced Usage

### Execute with Custom Settings
```python
# Edit Python script
# Open SCRIPT_init_structure.py

# Customize first file
templates = {
    'web': "001_FE_Custom-Start_C_Component_DEV.jsx",  # Changed
    'api': "001_BE_Custom-API_X_Bootstrap_DEV.py",     # Changed
}
```

### Multiple Project Creation
```bash
# Create batch script (Windows)
@echo off
python SCRIPT_init_structure.py project-frontend web
python SCRIPT_init_structure.py project-backend api
python SCRIPT_init_structure.py project-ml ml
```

---

## 📞 Support & Contact

**When Issues Occur:**
1. Check script version (v5.0.2)
2. Recheck environment requirements
3. Submit GitHub Issue

**Related Documents:**
- [AI_NAMING_CONVENTION_FINAL.md](AI_NAMING_CONVENTION_FINAL.md) - Complete guide
- [QUICK_START.md](QUICK_START.md) - Quick start
- [CHANGELOG_v5.md](CHANGELOG_v5.md) - Changes

---

**Version**: v5.0.2  
**Updated**: October 14, 2025  
**Status**: Production Ready ✅
