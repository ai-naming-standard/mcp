# 🤖 AI Naming Standard MCP Server

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/ai-naming-standard-mcp.svg)](https://nodejs.org)

> Official MCP (Model Context Protocol) server for AI-driven file naming conventions. Automatically generate and validate standardized file names across your entire project.

## 🌐 Multi-Language Support

- 🇺🇸 **English** (Default)
- 🇰🇷 **한국어** (Korean)
- 🇯🇵 **日本語** (Japanese)

## ⚡ Quick Start

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

## 📖 Features

### Available Tools

- **generateFileName** - Generate standardized file names
- **validateFileName** - Validate existing file names  
- **explainFileName** - Explain file name components
- **getLayerCodes** - Get architecture layer codes
- **getActionCodes** - Get action codes reference
- **getProjectTemplate** - Generate project templates
- **batchGenerateFileNames** - Batch generate multiple files
- **suggestCorrection** - Get correction suggestions

### Naming Convention

```
[microservice]_[sequence]_[layer]_[domain-sub]_[action]_[feature]_[env].[ext]
```

**Example:**
```
auth_001_controller_user-login_validate_validation_prod.ts
```

### Components

| Component | Description | Examples |
|-----------|-------------|----------|
| **Microservice** | Service identifier | auth, user, payment, order |
| **Sequence** | File ordering | 001-999, v1-v99, main/alt |
| **Layer** | Architecture layer | controller, service, repository |
| **Domain** | Business domain | user-login, payment-card |
| **Action** | CRUD operation | create, read, update, delete |
| **Feature** | Additional feature | validation, encryption, caching |
| **Environment** | Deployment env | dev, test, staging, prod |
| **Extension** | File type | js, ts, py, java, go |

## 💻 Usage Examples

### In Claude Desktop

```
Generate a controller file name for user authentication
```

```
Validate: auth_001_controller_user-login_validate_validation_prod.ts
```

```
Create project template for e-commerce MVP
```

## 🚀 Project Types Supported

- E-commerce/Marketplace
- Social Media Platform
- Fintech/Banking
- Healthcare/Medical
- Education/E-learning
- Streaming/Media
- Food Delivery
- Travel/Accommodation
- IoT/Smart Home
- Gaming/E-sports

## 🌍 Language Settings

### Change Language

Set the `MCP_LANG` environment variable:

```bash
# Windows
set MCP_LANG=ko  # Korean
set MCP_LANG=ja  # Japanese
set MCP_LANG=en  # English (default)

# Mac/Linux
export MCP_LANG=ko  # Korean
export MCP_LANG=ja  # Japanese
export MCP_LANG=en  # English (default)
```

## 🛠️ Development

### Clone Repository

```bash
git clone https://github.com/ai-naming-standard/mcp.git
cd mcp
npm install
```

### Run Tests

```bash
npm test
```

### Local Development

```bash
npm start
```

## 📦 NPM Package

Published as: `ai-naming-standard-mcp`

```bash
npm install -g ai-naming-standard-mcp
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for Claude Desktop and Cursor IDE
- Follows AI-driven development best practices
- Inspired by microservices architecture patterns

## 📞 Support

- **Organization:** [AI Naming Standard](https://github.com/ai-naming-standard)
- **Repository:** [github.com/ai-naming-standard/mcp](https://github.com/ai-naming-standard/mcp)
- **Issues:** [GitHub Issues](https://github.com/ai-naming-standard/mcp/issues)
- **NPM Package:** [npmjs.com/package/ai-naming-standard-mcp](https://www.npmjs.com/package/ai-naming-standard-mcp)

---

Made with ❤️ by the AI Development Community
