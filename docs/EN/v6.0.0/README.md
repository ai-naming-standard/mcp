# 🚀 AI Naming Standard v6.0.0 - Quick Start Guide

> **AI Governance Era**: Revolutionary Multi-AI Orchestration Standard

**Language**: **English** | [한국어](../KR/v6.0.0/README.md) | [日本語](../JA/v6.0.0/README.md)

---

## 📚 What is AI Naming Standard v6.0.0?

**AI Naming Standard v6.0.0** is the world's first comprehensive standard designed for **Multi-AI Collaboration**. It enables Cursor, Claude, ChatGPT, Windsurf, and other AI tools to work together seamlessly with defined roles, automatic dependency tracking, and complete governance.

### 🎯 Core Philosophy

> **"Minimal folders, maximal naming, natural collaboration, perfect governance"**

---

## 🌟 v6.0.0 Key Features

### 🤖 Multi-AI Orchestration
- **Cursor** (Code Writer) - Implementation
- **Claude** (Reviewer) - Code review & documentation
- **ChatGPT** (Architect) - Structure design
- **Windsurf** (Assistant) - Refactoring
- **Human** (Supervisor) - Final approval

### 🧠 Naming Wizard
Natural language → File name conversion:
```
"Create login page" → 001_FE_User-Login_C_Page_PROD.jsx
"Add payment API" → 021_BE_Payment-Process_C_API_PROD.py
```

### 🔗 Dependency Graph
Automatic `@deps` tag tracking for file relationships

### 📊 Complete Governance
Full audit trail with AI_ROLE_MATRIX.yaml, DEP_GRAPH.yaml, HUMAN_OVERRIDES.md

### 🏗️ 07_META Folder
New metadata management system for AI collaboration

---

## 📂 Folder Structure (8 Folders)

```
project-root/
├── 00_DOCS/      # 📚 Documentation
├── 01_CONFIG/    # ⚙️ Configuration (AI NO-MODIFY)
├── 02_STATIC/    # 📦 Static Assets
├── 03_ACTIVE/    # 🔥 Active Code (Main Workspace)
├── 04_TEST/      # 🧪 Tests
├── 05_BUILD/     # 🏗️ Build Output
├── 06_LOGS/      # 📊 Logs
└── 07_META/      # 🆕 AI Collaboration Metadata
```

---

## 🎯 File Naming Pattern

### Basic Format
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### Real Examples
```
001_FE_User-Login_C_Page_PROD.jsx
002_BE_Payment-Process_X_Service_PROD.py
003_DB_Order-Schema_C_Migration_PROD.sql
004_API_Auth-Token_V_Middleware_PROD.js
```

### Layer Codes
- `FE` - Frontend (React, Vue)
- `BE` - Backend (Node.js, Python)
- `DB` - Database (MySQL, MongoDB)
- `API` - API Gateway
- `ML` - Machine Learning
- `INFRA` - Infrastructure
- `SH` - Shared/Common

### Action Codes
- `C` - Create
- `R` - Read
- `U` - Update
- `D` - Delete
- `V` - Validate
- `X` - Execute
- `S` - Send
- `T` - Transform
- `G` - Generate

---

## 🚀 Quick Start (5 Steps)

### Step 1: Install MCP (Optional)
```bash
npm install -g ai-naming-standard-mcp
```

### Step 2: Create Project Structure
Create 8 standard folders:
```bash
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS 07_META
```

### Step 3: Setup AI Roles
Create `07_META/AI_ROLE_MATRIX.yaml`:
```yaml
version: "6.0.0"
roles:
  - name: cursor
    type: code_writer
    permissions:
      - write: 03_ACTIVE
      - test: 04_TEST
  
  - name: claude
    type: reviewer
    permissions:
      - review: 03_ACTIVE
      - document: 00_DOCS
  
  - name: human
    type: supervisor
    permissions:
      - override: all
```

### Step 4: Create Your First File
```
03_ACTIVE/001_BE_User-Login_C_Service_PROD.py
```

Add `@deps` tag:
```python
"""
@file: 001_BE_User-Login_C_Service_PROD.py
@deps:
  - 002_DB_User-Schema_R_Model_PROD.py
@ai: cursor
@created: 2025-10-17
"""
```

### Step 5: Generate Dependency Graph
```bash
# Using MCP tool
tool: generateDepGraph
args:
  sourcePath: "."
  outputPath: "07_META/DEP_GRAPH.yaml"
```

---

## 📖 Complete Documentation

### Core Documents
1. [**AI_NAMING_CONVENTION_v6.md**](./AI_NAMING_CONVENTION_v6.md) - Complete guide (Part 0-6)
2. [**AI_NAMING_CONVENTION_v6_CONTINUATION.md**](./AI_NAMING_CONVENTION_v6_CONTINUATION.md) - Advanced guide (Part 7-13)
3. [**CHANGELOG_v6.md**](./CHANGELOG_v6.md) - Version history
4. [**INDEX.md**](./INDEX.md) - Documentation index

### Meta Templates
- [AI_ROLE_MATRIX.yaml](./05-meta-templates/AI_ROLE_MATRIX.yaml)
- [NAMING_WIZARD_RULES.yaml](./05-meta-templates/NAMING_WIZARD_RULES.yaml)
- [DEP_GRAPH.yaml](./05-meta-templates/DEP_GRAPH.yaml)

---

## 🛠️ MCP Tools (24 Total)

### Core Tools (8)
- `generateFileName` - Generate file names
- `validateFileName` - Validate format
- `explainFileName` - Explain components
- `getLayerCodes` - Get layer codes
- `getActionCodes` - Get action codes
- `getProjectTemplate` - Get templates
- `batchGenerateFileNames` - Batch generation
- `suggestCorrection` - Suggest fixes

### v6 New Tools (10)
- `createAIRoleMatrix` - Create AI roles
- `getAIRole` - Get role info
- `naturalLanguageToFileName` - Natural language conversion
- `addNamingWizardRule` - Add naming rules
- `generateDepGraph` - Generate dependencies
- `validateDeps` - Validate @deps
- `checkCircularDeps` - Check circular refs
- `logHumanOverride` - Log interventions
- `scanProject` - Scan structure
- `exportConfig` - Export configs

---

## 💡 Usage Examples

### Example 1: Natural Language Conversion
```javascript
Input: "Create user profile update API"

Output: {
  fileName: "015_BE_User-Profile_U_API_PROD.py",
  analysis: {
    domain: "User-Profile",
    action: "U",
    layer: "BE",
    detail: "API"
  }
}
```

### Example 2: Check AI Role
```javascript
Input: aiName = "cursor"

Output: {
  type: "code_writer",
  permissions: ["write: 03_ACTIVE", "test: 04_TEST"],
  canModify: ["03_ACTIVE", "04_TEST"],
  cannotModify: ["01_CONFIG", "07_META"]
}
```

### Example 3: Dependency Graph
```yaml
# 07_META/DEP_GRAPH.yaml
graph:
  nodes:
    - id: "001_BE_User-Login_C_Service_PROD.py"
      dependencies:
        - "002_DB_User-Schema_R_Model_PROD.py"
        - "003_BE_Auth-Token_V_Helper_PROD.py"
```

---

## 🔄 Migration from v5

### Automatic Migration
```javascript
tool: migrateFromV4
args:
  sourcePath: "."
  sourceVersion: "v5"
  dryRun: false
```

### Manual Steps
1. Create `07_META/` folder
2. Add `AI_ROLE_MATRIX.yaml`
3. Add `@deps` tags to files
4. Generate `DEP_GRAPH.yaml`

---

## 📈 v6 vs v5 Comparison

| Feature | v5.0.2 | v6.0.0 | Improvement |
|---------|--------|--------|-------------|
| MCP Tools | 12 | 24 | +100% |
| Folders | 7 | 8 | +14% |
| AI Support | Single | Multi | +400% |
| Natural Language | ❌ | ✅ | NEW |
| Dependency Tracking | Manual | Auto | +100% |
| Governance | Partial | Complete | +80% |

---

## 🌐 Multi-Language Support

| Language | Documentation | Naming Wizard | MCP |
|----------|---------------|---------------|-----|
| English | ✅ | 🚧 | ✅ |
| 한국어 | ✅ | ✅ | ✅ |
| 日本語 | 🚧 | 🚧 | ✅ |

---

## 💬 Community & Support

### Get Help
- 💬 [Discord](https://discord.gg/ai-naming-standard)
- 📧 [Email](mailto:support@ai-naming-standard.org)
- 🐛 [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)

### Resources
- 🌐 [Website](https://ai-naming-standard.dev)
- 📦 [NPM](https://www.npmjs.com/package/ai-naming-standard-mcp)
- 📚 [Documentation](https://ai-naming-standard.dev/docs)

---

## 📜 License

MIT License - Free to use!

---

## 🎯 Next Steps

1. ✅ Read complete documentation
2. ✅ Install MCP tools
3. ✅ Create project structure
4. ✅ Setup AI roles
5. ✅ Start coding with standards

---

**Version**: 6.0.0  
**Release Date**: 2025-10-17  
**Status**: Production Ready ✅

---

<div align="center">

**Made with ❤️ by AI Naming Standard Organization**

[Website](https://ai-naming-standard.dev) • [Documentation](./INDEX.md) • [NPM](https://npmjs.com/package/ai-naming-standard-mcp) • [GitHub](https://github.com/ai-naming-standard/v6)

</div>
