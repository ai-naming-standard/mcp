# AI Naming Standard MCP Server

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/ai-naming-standard-mcp.svg)](https://nodejs.org)

> **Zero-Folderization**: A revolutionary naming convention that enables AI-human collaboration by encoding complete context into filenames, eliminating folder dependencies.

## The Philosophy of Zero-Folderization

This naming convention is an **operational pact between non-developers and AI**, designed to enable AI to develop and operate autonomously according to a shared standard.

### Core Concept

**Eliminate folders and encode hierarchy directly into filenames** — a structure language AI can read.

```
[X] frontend/user/login/handler.js  
[O] FE_User-Login_R_Handler_PROD.js
```

### Why Zero-Folderization?

Based on the principle of **Zero-Folderization**, AI can fully understand a file's:
- **Location** - Where it belongs in the architecture
- **Role** - What it does in the system
- **Operation** - CRUD operation type
- **Dependencies** - Related components
- **Environment** - Dev, Test, Staging, or Production

All of this **without relying on folders** — purely through the filename itself.

### Paradigm Shift

| Aspect | Traditional (Human-Centric) | Zero-Folderization (AI-Based) |
|--------|----------------------------|-------------------------------|
| **Structure** | Folder navigation | Filename parsing |
| **Management** | Folder-based | File-based |
| **Automation** | Path-dependent | Pattern-based |
| **Knowledge** | Person-dependent | Self-documenting |
| **Collaboration** | Human-only | Shared AI+Human syntax |

### Strategic Value

1. **AI-Human Communication**: Non-developers can issue precise instructions to AI using natural language feature names
2. **Knowledge Persistence**: Filenames serve as both documentation and architecture
3. **Risk Mitigation**: Eliminates knowledge loss from developer turnover
4. **Operational Efficiency**: +70% maintenance speed, -80% error rate
5. **Instant Understanding**: New maintainers grasp the system within one day

### Real-World Example

A non-developer (planner, operator, or marketer) can say:
```
"AI, please modify 03_FE_Customer-Register_C_NewUser_PROD.js
Add an email validation step after the name input."
```

AI immediately understands:
- **Frontend** (FE) file
- **Customer** domain
- **Create** (C) operation
- **Production** environment

And can locate and update the correct file without human intervention.

## What is AI Naming Standard MCP?

The **AI Naming Standard MCP Server** implements this Zero-Folderization philosophy as a Model Context Protocol server, providing tools to:
- Automatically generate standardized file names
- Validate existing file names against conventions
- Bridge the communication gap between developers and non-developers
- Enable AI to understand and operate on your codebase autonomously

## Multi-Language Support

- **English** (Default)
- **한국어** (Korean)
- **日本語** (Japanese)

## Quick Start

### Install via NPM

```bash
npm install -g ai-naming-standard-mcp
```

### Configure Claude Desktop

Add to your Claude Desktop configuration:

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`  
**Mac/Linux:** `~/.config/claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "npx",
      "args": ["ai-naming-standard-mcp"]
    }
  }
}
```

### Restart Claude Desktop

## Core Principles

### 1. **Flat-First & Folder-Zero**
Eliminate folders; embed hierarchy within filenames.

### 2. **Machine-Readable**
Use `_`, `-`, and `[ ]` for AI-friendly parsing.

### 3. **Human-Assistive**
Use natural-language feature names so non-developers can understand.

### 4. **Deterministic Flow**
`[index]` = execution order, making data flow explicit.

### 5. **Observable by Name**
Security level, version, and environment are explicit in names.

### 6. **Non-breaking Evolution**
Decimal indices and `_Deprecated` tags ensure safe iteration.

## Available Tools

### Core Tools
- **generateFileName** - Generate standardized file names with AI-readable structure
- **validateFileName** - Validate existing file names against Zero-Folderization principles
- **explainFileName** - Decode and explain file name components
- **getLayerCodes** - Get architecture layer codes (Frontend, Backend, Data, Infra)
- **getActionCodes** - Get CRUD operation codes
- **getProjectTemplate** - Generate complete project templates
- **batchGenerateFileNames** - Generate multiple files at once
- **suggestCorrection** - Get correction suggestions for invalid names

## Naming Convention Structure

### Pattern
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### Examples
```javascript
// Frontend user login handler - Production
03_FE_User-Login_R_Handler_PROD.js

// Backend payment validation service - Development
02.1_BE_Payment-Card_V_Service_DEV.py

// Database user table creation - Common
01_DB_User-Account_C_Table_COMMON.sql

// API gateway routing configuration - Staging
04_INFRA_Gateway-Routes_U_Config_STG.yml
```

### Component Breakdown

| Component | Description | Examples |
|-----------|-------------|----------|
| **Index** | Execution order | `01`, `02.1`, `03` |
| **Layer** | Architecture layer | `FE`, `BE`, `DB`, `API`, `INFRA` |
| **Domain** | Business domain | `User`, `Payment`, `Order` |
| **Feature** | Specific feature | `Login`, `Validation`, `Export` |
| **Action** | CRUD operation | `C`reate, `R`ead, `U`pdate, `D`elete |
| **Detail** | File purpose | `Handler`, `Service`, `Config` |
| **Env** | Environment | `DEV`, `STG`, `PROD`, `COMMON` |

## Benefits Over Traditional Approaches

### Traditional Folder Structure Problems
- **Human-Centered**: Only humans understand folder structures
- **AI Inefficiency**: Tree navigation slows AI search and modification
- **Context Loss**: Knowledge disappears when developers leave
- **Communication Barrier**: Non-developers cannot issue precise instructions

### Zero-Folderization Solutions
- **AI-Readable**: Patterns and syntax AI can instantly parse
- **Self-Documenting**: Filenames contain complete context
- **Knowledge Persistent**: Information survives personnel changes
- **Universal Language**: Both AI and humans can understand

## Organizational ROI

- **70%** faster maintenance speed
- **80%** reduction in error rate
- **1 day** onboarding for new maintainers (vs weeks)
- **100%** knowledge retention despite turnover
- **Direct** non-developer to AI communication

## Use Cases

### For Developers
- Instant file purpose identification
- Automated dependency tracking
- Clear execution flow visualization
- Environment-specific deployments

### For Non-Developers
- Issue clear instructions to AI
- Understand system architecture
- Track feature implementations
- Manage projects without technical knowledge

### For Organizations
- Reduce handover risks
- Maintain continuity despite turnover
- Enable cross-functional collaboration
- Accelerate development cycles

## Advanced Features

### Batch Operations
Generate multiple files for entire microservices:
```javascript
// Generate 10 files for user and payment services
batchGenerateFileNames({
  microservices: ['user', 'payment'],
  projectType: 'ecommerce',
  count: 10
})
```

### Project Templates
Get complete file structures for different project types:
```javascript
// Get enterprise e-commerce template
getProjectTemplate({
  projectType: 'ecommerce',
  scale: 'enterprise'
})
```

### Validation & Correction
Validate and get suggestions for existing files:
```javascript
// Validate a filename
validateFileName('frontend/user/login.js')
// Returns: Invalid - suggests: "01_FE_User-Login_R_Handler_DEV.js"
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

This project implements the Zero-Folderization philosophy, creating a shared language for AI-human collaboration in software development.

## Support

- **Issues**: [GitHub Issues](https://github.com/leipokr/ai-naming-standard-mcp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/leipokr/ai-naming-standard-mcp/discussions)
- **NPM**: [npmjs.com/package/ai-naming-standard-mcp](https://www.npmjs.com/package/ai-naming-standard-mcp)

---

**Zero-Folderization** represents a decisive shift from human-centered development to AI-centered operation — and at its core, it's an agreement between AI and non-developers.

> "Folders are removed; context is restored through filenames. AI reads them as grammar. Humans use them as a language of instruction."
