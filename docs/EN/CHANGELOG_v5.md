# 📋 Changelog - v5.0.1 & v5.0.2

## 🆕 v5.0.1 - ChatGPT 5 Key Improvements 
**Updated**: October 14, 2025

### 1. 📌 [Deps] Marker - Specify Dependencies
- **Sequential execution**: 001-1, 001-2
- **Parallel execution**: 001a, 001b  
- **Subordinate relationship**: 001s1, 001s2
- AI automatically identifies relationships between files

### 2. 📦 02_STATIC Naming Enhancement
- **ASSET_** - Required for all asset files
- **TEMPLATE_** - Required for template files
- **CONFIG_** - Required for config files
- Automatically reject files without prefixes

### 3. 🧪 04_TEST Mandatory Indexing
- Pattern: `001_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]`
- 1:1 matching with source files
- Improved test traceability

### 4. ⚠️ AI Permission Header Display
- 00_DOCS: `/* ⚠️ AI PERMISSION: NO-MODIFY */`
- 01_CONFIG: `/* ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL */`
- `.ai_permission` file for each folder

### 5. 🛠️ Automation Scripts
- **init_v5_project.py** - Project initialization
- **migrate_to_v5.sh** - Existing project migration
- MCP tool integration

---

## 🆕 v5.0.2 - External File Management System
**Updated**: October 14, 2025

### 1. 📦 EXTERNAL_ Prefix System
```
EXTERNAL_[Type]_[Vendor]_[Version].[ext]
```
- Type: JS, SDK, JAR, BIN, ZIP, LIB, MODULE
- Systematic management of external libraries

### 2. 🔄 Version Management Strategy
- Existing: Add `_DEPRECATED` suffix
- New: Create new version file
- Preserve old versions (rollback possible)

### 3. 🔒 SHA256 Integrity Verification
- Record hash for all external files
- Auto-update `00_DOCS/EXTERNAL_DEPENDENCIES.md`
- Security vulnerability check

### 4. 📝 Dependency Manifest
```markdown
| File | Version | Vendor | URL | SHA256 | Date | License |
```

---

## 📊 Implementation Status

| Document | v5.0.1 | v5.0.2 |
|----------|--------|--------|
| AI_NAMING_CONVENTION_FINAL.md | ✅ | ✅ |
| MACHINE_RULES_FINAL.md | ✅ | ✅ |
| INDEX.md | ✅ | ✅ |
| QUICK_START_FINAL.md | ✅ | ✅ |
| HUMAN_GUIDE_FINAL.md | ✅ | In progress |
| SHARED_SPECS_FINAL.md | ✅ | In progress |

---

## 🎯 Core Message

> "ChatGPT suggestions lead to safer and more systematic AI Naming Convention"

- **Safety**: Prevent mistakes by specifying AI permissions
- **Systematization**: Clear execution order through dependency expression
- **Scalability**: Support large-scale projects with external file management
- **Automation**: Simplified project initialization with scripts

---

**Created**: October 14, 2025  
**Final Version**: v5.0.2
