# 🚀 AI Naming Standard MCP v6.0.0

> **AI Governance Era**: Revolutionary Multi-AI Orchestration with Natural Language Support

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-v0.6.0-blue.svg?style=flat-square)](https://modelcontextprotocol.io)
[![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org)

**AI Naming Standard MCP** is a revolutionary file naming and project structure standard designed for multi-AI collaboration. It enables Cursor, Claude, ChatGPT, Windsurf, and other AI tools to work together seamlessly, with natural language support, automatic dependency tracking, and complete governance.

**🌐 Language**: **English** | [한국어](./README_KO.md) | [日本語](./README_JA.md) | [中文](./README_CN.md)

---

## 🌟 v6.0.0 Key Features

### 🤖 Multi-AI Orchestration
Multiple AIs collaborate with defined roles:
- **Cursor** (Code Writer) - Code implementation
- **Claude** (Reviewer) - Code review and documentation
- **ChatGPT** (Architect) - Structure design and rule management
- **Windsurf** (Assistant) - Refactoring and optimization
- **Human** (Supervisor) - Final approval and quality control

### 🧠 Naming Wizard (Natural Language Support)
Automatically converts natural language to standard file names:

```javascript
Input:  "Create login page"
Output: 001_FE_User-Login_C_Page_PROD.jsx

Input:  "Add payment refund API"
Output: 021_BE_Payment-Refund_C_API_PROD.py

Input:  "Create product table"
Output: 005_DB_Product-Schema_C_Migration_PROD.sql
```

### 🔗 Dependency Graph (@deps Tracking)
Automatically tracks and manages file dependencies:

```javascript
/* 
 * @file: 003_BE_Order-Process_X_Service_PROD.py
 * @deps:
 *   - 002_BE_Order-Validate_V_Helper_PROD.py
 *   - 005_DB_Order-Schema_C_Migration_PROD.sql
 * @ai: cursor
 * @reviewed: claude
 * @created: 2025-10-17
 */
```

### 📊 Complete Governance Layer
Fully records all AI activities and human interventions:
- **AI_ROLE_MATRIX.yaml** - AI roles and permissions
- **DEP_GRAPH.yaml** - Project-wide dependency graph
- **CONVERSATION_HISTORY.json** - AI conversation logs
- **HUMAN_OVERRIDES.md** - Human intervention audit trail

### 🏗️ 07_META Folder System
Metadata management for AI collaboration:

```
07_META/
├── AI_ROLE_MATRIX.yaml           # AI role matrix
├── DEP_GRAPH.yaml                # Dependency graph
├── CONVERSATION_HISTORY.json     # Conversation history
├── HUMAN_OVERRIDES.md            # Human override logs
├── NAMING_WIZARD_RULES.yaml      # Naming rules
└── PROJECT_METADATA.json         # Project metadata
```

---

## 📦 Installation

### Global Installation (Recommended)
```bash
npm install -g ai-naming-standard-mcp
```

### Local Installation
```bash
npm install ai-naming-standard-mcp
```

### From Source
```bash
git clone https://github.com/ai-naming-standard/v6.git
cd v6
npm install
npm link
```

---

## 🔧 Configuration

### Claude Desktop
Edit `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["/path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}
```

**Config file locations:**
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

### Cursor
Create `.cursorrules` file in project root:

```
# AI Naming Standard v6.0.0
Use AI Naming Convention v6.0.0 for all files
Check 07_META/AI_ROLE_MATRIX.yaml for your role and permissions
Always add @deps tags in file headers
Follow the standard folder structure: 00_DOCS through 07_META
```

### VS Code (MCP Extension)
Add to `.vscode/settings.json`:

```json
{
  "mcp.servers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["/path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}
```

---

## 🛠️ MCP Tools (24 Total)

### 🎯 Core Naming Tools (8)
| Tool | Description |
|------|-------------|
| `generateFileName` | Generate standard file name |
| `validateFileName` | Validate file name format |
| `explainFileName` | Explain file name components |
| `getLayerCodes` | Get layer code table |
| `getActionCodes` | Get action code table |
| `getProjectTemplate` | Get project template |
| `batchGenerateFileNames` | Batch generate file names |
| `suggestCorrection` | Suggest corrections for invalid names |

### 🏗️ Project Structure Tools (6)
| Tool | Description |
|------|-------------|
| `createProjectStructure` | Create v6 8-folder structure |
| `checkFolderPermission` | Check folder permissions |
| `migrateFromV4` | Migrate from v4/v5 to v6 |
| `suggestFolder` | Suggest appropriate folder |
| `handleExternalFile` | Handle external files |
| `generateDependencyManifest` | Generate dependency manifest |

### 🆕 Multi-AI Orchestration Tools (2)
| Tool | Description |
|------|-------------|
| `createAIRoleMatrix` | Create AI role matrix |
| `getAIRole` | Get AI role and permissions |

### 🆕 Naming Wizard Tools (2)
| Tool | Description |
|------|-------------|
| `naturalLanguageToFileName` | Convert natural language to file name |
| `addNamingWizardRule` | Add custom naming rule |

### 🆕 Dependency Graph Tools (3)
| Tool | Description |
|------|-------------|
| `generateDepGraph` | Generate dependency graph |
| `validateDeps` | Validate @deps tags |
| `checkCircularDeps` | Check circular dependencies |

### 🆕 Governance & Audit Tools (3)
| Tool | Description |
|------|-------------|
| `logHumanOverride` | Log human intervention |
| `scanProject` | Scan project structure |
| `exportConfig` | Export config for AI tools |

---

## 💡 Usage Examples

### 1. Natural Language to File Name

```javascript
// Execute in Claude/Cursor
{
  "tool": "naturalLanguageToFileName",
  "args": {
    "naturalLanguage": "Update user profile API",
    "language": "en"
  }
}

// Result
{
  "fileName": "015_BE_User-Profile_U_API_PROD.py",
  "analysis": {
    "domain": "User-Profile",
    "action": "U",
    "layer": "BE",
    "detail": "API",
    "env": "PROD"
  },
  "confidence": "high"
}
```

### 2. Check AI Role and Permissions

```javascript
{
  "tool": "getAIRole",
  "args": { "aiName": "cursor" }
}

// Result
{
  "aiName": "cursor",
  "type": "code_writer",
  "permissions": ["write: 03_ACTIVE", "test: 04_TEST"],
  "canModify": ["03_ACTIVE", "04_TEST"],
  "cannotModify": ["01_CONFIG", "07_META"],
  "responsibilities": ["Code writing", "Test generation", "Bug fixing"]
}
```

### 3. Create Project Structure

```javascript
{
  "tool": "createProjectStructure",
  "args": {
    "projectName": "my-ecommerce-app",
    "version": "v6"
  }
}

// Creates folders:
// 00_DOCS/     - Documentation
// 01_CONFIG/   - Configuration (AI NO-MODIFY)
// 02_STATIC/   - Static assets
// 03_ACTIVE/   - Active code (main workspace)
// 04_TEST/     - Tests
// 05_BUILD/    - Build output
// 06_LOGS/     - Logs
// 07_META/     - AI collaboration metadata
```

### 4. Generate Dependency Graph

```javascript
{
  "tool": "generateDepGraph",
  "args": {
    "sourcePath": ".",
    "outputPath": "07_META/DEP_GRAPH.yaml"
  }
}

// Scans all files in 03_ACTIVE folder,
// extracts @deps tags, and generates DEP_GRAPH.yaml
```

### 5. Validate File Name

```javascript
{
  "tool": "validateFileName",
  "args": {
    "fileName": "001_BE_User-Login_C_Service_PROD.py"
  }
}

// Result
{
  "valid": true,
  "components": {
    "index": "001",
    "layer": "BE",
    "domain": "User-Login",
    "action": "C",
    "detail": "Service",
    "env": "PROD",
    "ext": "py"
  }
}
```

---

## 📂 v6 Folder Structure

```
my-project/
├── 00_DOCS/                    # 📚 Documentation
│   ├── README.md
│   ├── API_SPEC.md
│   └── ARCHITECTURE.md
│
├── 01_CONFIG/                  # ⚙️ Configuration (AI NO-MODIFY)
│   ├── .env
│   ├── config.yaml
│   └── secrets.json
│
├── 02_STATIC/                  # 📦 Static Assets
│   ├── ASSET_logo.png
│   ├── TEMPLATE_email.html
│   └── EXTERNAL_bootstrap.css
│
├── 03_ACTIVE/                  # 🔥 Active Code (Main Workspace)
│   ├── 001_BE_User-Login_C_Service_PROD.py
│   ├── 002_FE_Dashboard_R_Page_PROD.jsx
│   └── 003_DB_User-Schema_C_Migration_PROD.sql
│
├── 04_TEST/                    # 🧪 Test Code
│   ├── 001_TEST_User-Login_Unit_DEV.test.py
│   └── 002_TEST_Dashboard_E2E_DEV.test.js
│
├── 05_BUILD/                   # 🏗️ Build Output
│   ├── dist/
│   └── bundle.js
│
├── 06_LOGS/                    # 📊 Log Files
│   ├── app.log
│   └── error.log
│
└── 07_META/                    # 🆕 AI Collaboration Metadata
    ├── AI_ROLE_MATRIX.yaml
    ├── DEP_GRAPH.yaml
    ├── CONVERSATION_HISTORY.json
    ├── HUMAN_OVERRIDES.md
    ├── NAMING_WIZARD_RULES.yaml
    └── PROJECT_METADATA.json
```

---

## 🎯 File Naming Pattern

### Basic Pattern
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### Real Examples

| File Name | Description |
|-----------|-------------|
| `001_FE_User-Login_C_Page_PROD.jsx` | User login page |
| `002_BE_Payment-Process_X_Service_PROD.py` | Payment processing service |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | Order table migration |
| `004_API_Auth-Token_V_Middleware_PROD.js` | Token validation middleware |
| `005_ML_Recommend-Product_G_Model_PROD.py` | Product recommendation model |

### Layer Codes

| Code | Description | Use Case |
|------|-------------|----------|
| `FE` | Frontend | React, Vue, Angular |
| `BE` | Backend | Node.js, Python, Java |
| `DB` | Database | MySQL, PostgreSQL, MongoDB |
| `API` | API Gateway | REST, GraphQL, gRPC |
| `ML` | Machine Learning | TensorFlow, PyTorch |
| `INFRA` | Infrastructure | Docker, Kubernetes |
| `SH` | Shared/Common | Utils, Helpers |

### Action Codes

| Code | Meaning | Description |
|------|---------|-------------|
| `C` | Create | Create new resource |
| `R` | Read | Fetch/read data |
| `U` | Update | Modify/update data |
| `D` | Delete | Delete resource |
| `V` | Validate | Validate data |
| `X` | Execute | Execute/process |
| `S` | Send | Send/transmit |
| `T` | Transform | Transform/convert |
| `G` | Generate | Generate/produce |

### Environment Tags

| Tag | Environment | Purpose |
|-----|-------------|---------|
| `DEV` | Development | Local development |
| `STG` | Staging | Staging environment |
| `PROD` | Production | Production environment |
| `COMMON` | Common | All environments |

---

## 📈 Performance Comparison

| Metric | v5.0.2 | v6.0.0 | Improvement |
|--------|--------|--------|-------------|
| **MCP Tools** | 12 | 24 | +100% ⬆️ |
| **Folders** | 7 | 8 | +14% ⬆️ |
| **AI Support** | Single | Multi-AI | +400% ⬆️ |
| **Natural Language** | ❌ | ✅ Naming Wizard | +100% 🆕 |
| **Dependency Tracking** | Manual | Auto (@deps) | +100% ⬆️ |
| **Governance** | Partial | Complete | +80% ⬆️ |
| **Audit Trail** | ❌ | ✅ Full | +100% 🆕 |
| **Accessibility** | 95% | 100% | +5% ⬆️ |

---

## 🔄 Migration Guide

### v5 → v6 Automatic Migration

```javascript
{
  "tool": "migrateFromV4",
  "args": {
    "sourcePath": ".",
    "sourceVersion": "v5",
    "dryRun": false
  }
}
```

### Manual Migration Steps

1. **Create 07_META folder**
   ```bash
   mkdir 07_META
   ```

2. **Create AI_ROLE_MATRIX.yaml**
   ```javascript
   {
     "tool": "createAIRoleMatrix",
     "args": {
       "projectName": "my-project",
       "aiTools": ["cursor", "claude", "chatgpt"]
     }
   }
   ```

3. **Add @deps tags to files**
   ```javascript
   /* 
    * @file: filename.ext
    * @deps:
    *   - dependency1.ext
    *   - dependency2.ext
    * @ai: cursor
    */
   ```

4. **Generate dependency graph**
   ```javascript
   {
     "tool": "generateDepGraph",
     "args": {
       "sourcePath": ".",
       "outputPath": "07_META/DEP_GRAPH.yaml"
     }
   }
   ```

---

## 🌐 Internationalization

| Language | Status | Naming Wizard | Documentation |
|----------|--------|---------------|---------------|
| English | ✅ Full | 🚧 In Progress | ✅ Complete |
| 한국어 (Korean) | ✅ Full | ✅ Supported | ✅ Complete |
| 日本語 (Japanese) | ✅ Full | 🚧 In Progress | 🚧 Partial |
| 中文 (Chinese) | 🚧 Planned | 🚧 Planned | 🚧 Planned |

---

## 📚 Documentation

### Core Documentation
- [📖 Complete Documentation](./AI-NAMING-STANDARD/EN/v6.0.0/AI_NAMING_CONVENTION_v6.md) - Full docs (Part 0-6)
- [📖 Continuation](./AI-NAMING-STANDARD/EN/v6.0.0/AI_NAMING_CONVENTION_v6_CONTINUATION.md) - Continuation (Part 7-13)
- [📋 Changelog](./AI-NAMING-STANDARD/EN/v6.0.0/CHANGELOG_v6.md) - Version history
- [🚀 Quick Start](./AI-NAMING-STANDARD/EN/v6.0.0/README.md) - Getting started guide
- [📑 Index](./AI-NAMING-STANDARD/EN/v6.0.0/INDEX.md) - Documentation index

### Meta Templates
- [AI_ROLE_MATRIX.yaml](./AI-NAMING-STANDARD/EN/v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml)
- [NAMING_WIZARD_RULES.yaml](./AI-NAMING-STANDARD/EN/v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml)
- [DEP_GRAPH.yaml](./AI-NAMING-STANDARD/EN/v6.0.0/05-meta-templates/DEP_GRAPH.yaml)

---

## 🤝 Contributing

Bug reports, feature requests, and Pull Requests are welcome!

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup
```bash
git clone https://github.com/ai-naming-standard/v6.git
cd v6
npm install
npm run dev
```

---

## 🐛 Bug Reports

Found a bug? Please report it on [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)!

**Please include:**
- Bug description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment info (OS, Node version, etc.)

---

## 💬 Community & Support

### Need Help?
- 💬 [Discord Community](https://discord.gg/ai-naming-standard)
- 📧 [Email Support](mailto:support@ai-naming-standard.org)
- 🐛 [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)
- 💼 [LinkedIn](https://linkedin.com/company/ai-naming-standard)

### Follow Us
- 🐦 [Twitter](https://twitter.com/ai_naming_std)
- 📘 [Facebook](https://facebook.com/ai-naming-standard)
- 📺 [YouTube](https://youtube.com/@ai-naming-standard)

---

## 📜 License

MIT License - Free to use!

```
MIT License

Copyright (c) 2025 AI Naming Standard Organization

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

v6.0.0 was made possible by:

### Core Contributors
- **Hyun Seok Yang** - v5.0.2 FINAL foundation, architecture design
- **AI Community Contributors** - Multi-AI collaboration ideas
- **Beta Testers** - v6 early validation and feedback

### Special Thanks
- Model Context Protocol Team
- Claude AI Team
- Cursor Team
- Open Source Community

---

## 🔜 Roadmap

### v6.1 (2025 Q4)
- [ ] 🤖 AI automatic code review system
- [ ] 📊 Real-time collaboration dashboard
- [ ] 🌍 Multilingual Naming Wizard (EN, JA, ZH)
- [ ] 🔌 VS Code Extension
- [ ] 🎨 Web UI for Configuration

### v6.2 (2026 Q1)
- [ ] 🧪 Automatic test generation
- [ ] 🪝 Git Hooks integration
- [ ] ☁️ Cloud synchronization
- [ ] 📱 Mobile App
- [ ] 🔐 Advanced security features

### v7.0 (2026 Q2)
- [ ] 🤖 AI agent automation
- [ ] 🧠 ML-based predictions
- [ ] 🌐 Distributed system support
- [ ] 🚀 Enterprise features

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| **MCP Tools** | 24 |
| **Folders** | 8 (including 07_META) |
| **Supported AIs** | 4 (Cursor, Claude, ChatGPT, Windsurf) |
| **Languages** | 3 (EN, KO, JA) |
| **Downloads** | [![npm](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg)](https://www.npmjs.com/package/ai-naming-standard-mcp) |
| **Stars** | [![GitHub stars](https://img.shields.io/github/stars/ai-naming-standard/v6.svg)](https://github.com/ai-naming-standard/v6) |
| **Contributors** | [![Contributors](https://img.shields.io/github/contributors/ai-naming-standard/v6.svg)](https://github.com/ai-naming-standard/v6/graphs/contributors) |

---

## 🎯 Core Values

> **"Minimal folders, maximal naming, natural collaboration, perfect governance"**

### Our Vision
A future where AI and humans collaborate perfectly, starting with standards.

### Our Mission
To revolutionize software development in the AI era by providing consistency, traceability, and scalability to every project.

---

## ⭐ Support This Project

Did this project help you?

- ⭐ [Star on GitHub](https://github.com/ai-naming-standard/v6)
- 🐦 [Share on Twitter](https://twitter.com/intent/tweet?text=Check%20out%20AI%20Naming%20Standard%20MCP%20v6.0.0!&url=https://github.com/ai-naming-standard/v6)
- 💝 [Become a Sponsor](https://github.com/sponsors/ai-naming-standard)

---

<div align="center">

**Version**: 6.0.0 STABLE  
**Release Date**: 2025.10.17  
**Status**: Production Ready ✅  
**MCP Protocol**: v0.6.0  
**Node**: >=16.0.0

---

Made with ❤️ by [AI Naming Standard Organization](https://github.com/ai-naming-standard)

[Website](https://ai-naming-standard.org) • 
[Documentation](./AI-NAMING-STANDARD/EN/v6.0.0/) • 
[NPM](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/v6)

</div>
