# 🚀 AI 命名标准 MCP v6.0.0

> **AI 治理时代**: 支持自然语言的革命性多AI协同编排系统

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-v0.6.0-blue.svg?style=flat-square)](https://modelcontextprotocol.io)
[![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org)

**AI 命名标准 MCP** 是一个专为多AI协作设计的革命性文件命名和项目结构标准。它使 Cursor、Claude、ChatGPT、Windsurf 等AI工具能够无缝协作,支持自然语言输入、自动依赖跟踪和完整治理。

**🌐 文档**: [English](https://github.com/ai-naming-standard/mcp/tree/main/docs/EN) | [한국어](https://github.com/ai-naming-standard/mcp/tree/main/docs/KR) | [日本語](https://github.com/ai-naming-standard/mcp/tree/main/docs/JP) | [中文](https://github.com/ai-naming-standard/mcp/tree/main/docs/CN)

---

## 🌟 v6.0.0 核心特性

### 🤖 多AI协同编排
多个AI以定义的角色协作:
- **Cursor** (代码编写者) - 代码实现
- **Claude** (审查者) - 代码审查和文档编写
- **ChatGPT** (架构师) - 结构设计和规则管理
- **Windsurf** (助手) - 重构和优化
- **人类** (监督者) - 最终审批和质量控制

### 🧠 命名向导 (自然语言支持)
自动将自然语言转换为标准文件名:

```javascript
输入:  "创建登录页面"
输出: 001_FE_User-Login_C_Page_PROD.jsx

输入:  "添加支付退款API"
输出: 021_BE_Payment-Refund_C_API_PROD.py

输入:  "创建产品表"
输出: 005_DB_Product-Schema_C_Migration_PROD.sql
```

### 🔗 依赖图谱 (@deps 跟踪)
自动跟踪和管理文件依赖关系:

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

### 📊 完整治理层
全面记录所有AI活动和人工干预:
- **AI_ROLE_MATRIX.yaml** - AI角色和权限
- **DEP_GRAPH.yaml** - 项目级依赖图
- **CONVERSATION_HISTORY.json** - AI对话日志
- **HUMAN_OVERRIDES.md** - 人工干预审计跟踪

### 🏗️ 07_META 文件夹系统
AI协作的元数据管理:

```
07_META/
├── AI_ROLE_MATRIX.yaml           # AI角色矩阵
├── DEP_GRAPH.yaml                # 依赖图
├── CONVERSATION_HISTORY.json     # 对话历史
├── HUMAN_OVERRIDES.md            # 人工覆盖日志
├── NAMING_WIZARD_RULES.yaml      # 命名规则
└── PROJECT_METADATA.json         # 项目元数据
```

---

## 📦 安装

### 全局安装 (推荐)
```bash
npm install -g ai-naming-standard-mcp
```

### 本地安装
```bash
npm install ai-naming-standard-mcp
```

### 从源码安装
```bash
git clone https://github.com/ai-naming-standard/v6.git
cd v6
npm install
npm link
```

---

## 🔧 配置

### Claude Desktop
编辑 `claude_desktop_config.json`:

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

**配置文件位置:**
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

### Cursor
在项目根目录创建 `.cursorrules` 文件:

```
# AI 命名标准 v6.0.0
所有文件使用 AI 命名约定 v6.0.0
检查 07_META/AI_ROLE_MATRIX.yaml 了解您的角色和权限
始终在文件头添加 @deps 标签
遵循标准文件夹结构: 00_DOCS 到 07_META
```

### VS Code (MCP 扩展)
添加到 `.vscode/settings.json`:

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

## 🛠️ MCP 工具 (共24个)

### 🎯 核心命名工具 (8个)
| 工具 | 描述 |
|------|-------------|
| `generateFileName` | 生成标准文件名 |
| `validateFileName` | 验证文件名格式 |
| `explainFileName` | 解释文件名组成 |
| `getLayerCodes` | 获取层代码表 |
| `getActionCodes` | 获取操作代码表 |
| `getProjectTemplate` | 获取项目模板 |
| `batchGenerateFileNames` | 批量生成文件名 |
| `suggestCorrection` | 建议无效名称的修正 |

### 🏗️ 项目结构工具 (6个)
| 工具 | 描述 |
|------|-------------|
| `createProjectStructure` | 创建 v6 8文件夹结构 |
| `checkFolderPermission` | 检查文件夹权限 |
| `migrateFromV4` | 从 v4/v5 迁移到 v6 |
| `suggestFolder` | 建议合适的文件夹 |
| `handleExternalFile` | 处理外部文件 |
| `generateDependencyManifest` | 生成依赖清单 |

### 🆕 多AI编排工具 (2个)
| 工具 | 描述 |
|------|-------------|
| `createAIRoleMatrix` | 创建 AI 角色矩阵 |
| `getAIRole` | 获取 AI 角色和权限 |

### 🆕 命名向导工具 (2个)
| 工具 | 描述 |
|------|-------------|
| `naturalLanguageToFileName` | 将自然语言转换为文件名 |
| `addNamingWizardRule` | 添加自定义命名规则 |

### 🆕 依赖图工具 (3个)
| 工具 | 描述 |
|------|-------------|
| `generateDepGraph` | 生成依赖图 |
| `validateDeps` | 验证 @deps 标签 |
| `checkCircularDeps` | 检查循环依赖 |

### 🆕 治理和审计工具 (3个)
| 工具 | 描述 |
|------|-------------|
| `logHumanOverride` | 记录人工干预 |
| `scanProject` | 扫描项目结构 |
| `exportConfig` | 为AI工具导出配置 |

---

## 💡 使用示例

### 1. 自然语言转文件名

```javascript
// 在 Claude/Cursor 中执行
{
  "tool": "naturalLanguageToFileName",
  "args": {
    "naturalLanguage": "更新用户资料API",
    "language": "zh"
  }
}

// 结果
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

### 2. 检查 AI 角色和权限

```javascript
{
  "tool": "getAIRole",
  "args": { "aiName": "cursor" }
}

// 结果
{
  "aiName": "cursor",
  "type": "code_writer",
  "permissions": ["write: 03_ACTIVE", "test: 04_TEST"],
  "canModify": ["03_ACTIVE", "04_TEST"],
  "cannotModify": ["01_CONFIG", "07_META"],
  "responsibilities": ["代码编写", "测试生成", "错误修复"]
}
```

### 3. 创建项目结构

```javascript
{
  "tool": "createProjectStructure",
  "args": {
    "projectName": "my-ecommerce-app",
    "version": "v6"
  }
}

// 创建文件夹:
// 00_DOCS/     - 文档
// 01_CONFIG/   - 配置 (AI 禁止修改)
// 02_STATIC/   - 静态资源
// 03_ACTIVE/   - 活动代码 (主工作区)
// 04_TEST/     - 测试
// 05_BUILD/    - 构建输出
// 06_LOGS/     - 日志
// 07_META/     - AI 协作元数据
```

### 4. 生成依赖图

```javascript
{
  "tool": "generateDepGraph",
  "args": {
    "sourcePath": ".",
    "outputPath": "07_META/DEP_GRAPH.yaml"
  }
}

// 扫描 03_ACTIVE 文件夹中的所有文件,
// 提取 @deps 标签, 并生成 DEP_GRAPH.yaml
```

### 5. 验证文件名

```javascript
{
  "tool": "validateFileName",
  "args": {
    "fileName": "001_BE_User-Login_C_Service_PROD.py"
  }
}

// 结果
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

## 📂 v6 文件夹结构

```
my-project/
├── 00_DOCS/                    # 📚 文档
│   ├── README.md
│   ├── API_SPEC.md
│   └── ARCHITECTURE.md
│
├── 01_CONFIG/                  # ⚙️ 配置 (AI 禁止修改)
│   ├── .env
│   ├── config.yaml
│   └── secrets.json
│
├── 02_STATIC/                  # 📦 静态资源
│   ├── ASSET_logo.png
│   ├── TEMPLATE_email.html
│   └── EXTERNAL_bootstrap.css
│
├── 03_ACTIVE/                  # 🔥 活动代码 (主工作区)
│   ├── 001_BE_User-Login_C_Service_PROD.py
│   ├── 002_FE_Dashboard_R_Page_PROD.jsx
│   └── 003_DB_User-Schema_C_Migration_PROD.sql
│
├── 04_TEST/                    # 🧪 测试代码
│   ├── 001_TEST_User-Login_Unit_DEV.test.py
│   └── 002_TEST_Dashboard_E2E_DEV.test.js
│
├── 05_BUILD/                   # 🏗️ 构建输出
│   ├── dist/
│   └── bundle.js
│
├── 06_LOGS/                    # 📊 日志文件
│   ├── app.log
│   └── error.log
│
└── 07_META/                    # 🆕 AI 协作元数据
    ├── AI_ROLE_MATRIX.yaml
    ├── DEP_GRAPH.yaml
    ├── CONVERSATION_HISTORY.json
    ├── HUMAN_OVERRIDES.md
    ├── NAMING_WIZARD_RULES.yaml
    └── PROJECT_METADATA.json
```

---

## 🎯 文件命名模式

### 基本模式
```
[索引]_[层]_[域]-[功能]_[操作]_[细节]_[环境].[扩展名]
```

### 实际示例

| 文件名 | 描述 |
|-----------|-------------|
| `001_FE_User-Login_C_Page_PROD.jsx` | 用户登录页面 |
| `002_BE_Payment-Process_X_Service_PROD.py` | 支付处理服务 |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | 订单表迁移 |
| `004_API_Auth-Token_V_Middleware_PROD.js` | 令牌验证中间件 |
| `005_ML_Recommend-Product_G_Model_PROD.py` | 产品推荐模型 |

### 层代码

| 代码 | 描述 | 用例 |
|------|-------------|----------|
| `FE` | 前端 | React, Vue, Angular |
| `BE` | 后端 | Node.js, Python, Java |
| `DB` | 数据库 | MySQL, PostgreSQL, MongoDB |
| `API` | API 网关 | REST, GraphQL, gRPC |
| `ML` | 机器学习 | TensorFlow, PyTorch |
| `INFRA` | 基础设施 | Docker, Kubernetes |
| `SH` | 共享/通用 | 工具, 辅助函数 |

### 操作代码

| 代码 | 含义 | 描述 |
|------|---------|-------------|
| `C` | 创建 | 创建新资源 |
| `R` | 读取 | 获取/读取数据 |
| `U` | 更新 | 修改/更新数据 |
| `D` | 删除 | 删除资源 |
| `V` | 验证 | 验证数据 |
| `X` | 执行 | 执行/处理 |
| `S` | 发送 | 发送/传输 |
| `T` | 转换 | 转换/转化 |
| `G` | 生成 | 生成/产生 |

### 环境标签

| 标签 | 环境 | 用途 |
|-----|-------------|---------|
| `DEV` | 开发环境 | 本地开发 |
| `STG` | 预发布环境 | 预发布环境 |
| `PROD` | 生产环境 | 生产环境 |
| `COMMON` | 通用 | 所有环境 |

---

## 📈 性能对比

| 指标 | v5.0.2 | v6.0.0 | 改进 |
|--------|--------|--------|-------------|
| **MCP 工具** | 12 | 24 | +100% ⬆️ |
| **文件夹** | 7 | 8 | +14% ⬆️ |
| **AI 支持** | 单一 | 多AI | +400% ⬆️ |
| **自然语言** | ❌ | ✅ 命名向导 | +100% 🆕 |
| **依赖跟踪** | 手动 | 自动 (@deps) | +100% ⬆️ |
| **治理** | 部分 | 完整 | +80% ⬆️ |
| **审计跟踪** | ❌ | ✅ 完整 | +100% 🆕 |
| **可访问性** | 95% | 100% | +5% ⬆️ |

---

## 🔄 迁移指南

### v5 → v6 自动迁移

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

### 手动迁移步骤

1. **创建 07_META 文件夹**
   ```bash
   mkdir 07_META
   ```

2. **创建 AI_ROLE_MATRIX.yaml**
   ```javascript
   {
     "tool": "createAIRoleMatrix",
     "args": {
       "projectName": "my-project",
       "aiTools": ["cursor", "claude", "chatgpt"]
     }
   }
   ```

3. **添加 @deps 标签到文件**
   ```javascript
   /* 
    * @file: filename.ext
    * @deps:
    *   - dependency1.ext
    *   - dependency2.ext
    * @ai: cursor
    */
   ```

4. **生成依赖图**
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

## 🌐 国际化

**所有语言完全支持!** 🌍

| 语言 | 状态 | 命名向导 | 文档 |
|----------|--------|---------------|---------------|
| English | ✅ 完整 | ✅ 支持 | ✅ 完成 |
| 한국어 (韩语) | ✅ 完整 | ✅ 支持 | ✅ 完成 |
| 日本語 (日语) | ✅ 完整 | ✅ 支持 | ✅ 完成 |
| 中文 (中文) | ✅ 完整 | ✅ 支持 | ✅ 完成 |

**文档链接:**
- 📖 [English Documentation](https://github.com/ai-naming-standard/mcp/tree/main/docs/EN)
- 📖 [한국어 문서](https://github.com/ai-naming-standard/mcp/tree/main/docs/KR)
- 📖 [日本語ドキュメント](https://github.com/ai-naming-standard/mcp/tree/main/docs/JP)
- 📖 [中文文档](https://github.com/ai-naming-standard/mcp/tree/main/docs/CN)

---

## 📚 文档

### 核心文档
- [📖 完整文档](./AI-NAMING-STANDARD/EN/v6.0.0/AI_NAMING_CONVENTION_v6.md) - 完整文档 (第0-6部分)
- [📖 续篇](./AI-NAMING-STANDARD/EN/v6.0.0/AI_NAMING_CONVENTION_v6_CONTINUATION.md) - 续篇 (第7-13部分)
- [📋 更新日志](./AI-NAMING-STANDARD/EN/v6.0.0/CHANGELOG_v6.md) - 版本历史
- [🚀 快速开始](./AI-NAMING-STANDARD/EN/v6.0.0/README.md) - 入门指南
- [📑 索引](./AI-NAMING-STANDARD/EN/v6.0.0/INDEX.md) - 文档索引

### 元模板
- [AI_ROLE_MATRIX.yaml](./AI-NAMING-STANDARD/EN/v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml)
- [NAMING_WIZARD_RULES.yaml](./AI-NAMING-STANDARD/EN/v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml)
- [DEP_GRAPH.yaml](./AI-NAMING-STANDARD/EN/v6.0.0/05-meta-templates/DEP_GRAPH.yaml)

---

## 🤝 贡献

欢迎错误报告、功能请求和拉取请求!

### 如何贡献
1. Fork 仓库
2. 创建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开拉取请求

### 开发设置
```bash
git clone https://github.com/ai-naming-standard/v6.git
cd v6
npm install
npm run dev
```

---

## 🐛 错误报告

发现错误? 请在 [GitHub Issues](https://github.com/ai-naming-standard/v6/issues) 上报告!

**请包括:**
- 错误描述
- 重现步骤
- 预期行为
- 实际行为
- 截图 (如果适用)
- 环境信息 (操作系统、Node版本等)

---

## 💬 社区和支持

### 需要帮助?
- 💬 [Discord 社区](https://discord.gg/ai-naming-standard)
- 📧 [电子邮件支持](mailto:support@ai-naming-standard.org)
- 🐛 [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)
- 💼 [LinkedIn](https://linkedin.com/company/ai-naming-standard)

### 关注我们
- 🐦 [Twitter](https://twitter.com/ai_naming_std)
- 📘 [Facebook](https://facebook.com/ai-naming-standard)
- 📺 [YouTube](https://youtube.com/@ai-naming-standard)

---

## 📜 许可证

MIT 许可证 - 免费使用!

```
MIT License

Copyright (c) 2025 AI Naming Standard Organization

特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人
不受限制地处理本软件的权利，包括但不限于使用、复制、修改、
合并、发布、分发、再许可和/或销售本软件副本的权利，
并允许向其提供本软件的人这样做，但须符合以下条件：

上述版权声明和本许可声明应包含在本软件的所有副本或重要部分中。
```

---

## 🙏 致谢

v6.0.0 的实现得益于:

### 核心贡献者
- **Hyun Seok Yang** - v5.0.2 FINAL 基础, 架构设计
- **AI 社区贡献者** - 多AI协作理念
- **Beta 测试者** - v6 早期验证和反馈

### 特别感谢
- Model Context Protocol 团队
- Claude AI 团队
- Cursor 团队
- 开源社区

---

## 🔜 路线图

### v6.1 (2025 Q4)
- [ ] 🤖 AI 自动代码审查系统
- [ ] 📊 实时协作仪表板
- [ ] 🌍 多语言命名向导 (英、日、中)
- [ ] 🔌 VS Code 扩展
- [ ] 🎨 配置 Web UI

### v6.2 (2026 Q1)
- [ ] 🧪 自动测试生成
- [ ] 🪝 Git Hooks 集成
- [ ] ☁️ 云同步
- [ ] 📱 移动应用
- [ ] 🔐 高级安全功能

### v7.0 (2026 Q2)
- [ ] 🤖 AI 代理自动化
- [ ] 🧠 基于ML的预测
- [ ] 🌐 分布式系统支持
- [ ] 🚀 企业功能

---

## 📊 统计数据

| 指标 | 值 |
|--------|-------|
| **MCP 工具** | 24 |
| **文件夹** | 8 (包括 07_META) |
| **支持的 AI** | 4 (Cursor, Claude, ChatGPT, Windsurf) |
| **语言** | 4 (英语, 韩语, 日语, 中文) |
| **下载量** | [![npm](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg)](https://www.npmjs.com/package/ai-naming-standard-mcp) |
| **星标** | [![GitHub stars](https://img.shields.io/github/stars/ai-naming-standard/v6.svg)](https://github.com/ai-naming-standard/v6) |
| **贡献者** | [![Contributors](https://img.shields.io/github/contributors/ai-naming-standard/v6.svg)](https://github.com/ai-naming-standard/v6/graphs/contributors) |

---

## 🎯 核心价值观

> **"最少的文件夹，最强的命名，自然的协作，完美的治理"**

### 我们的愿景
AI和人类完美协作的未来，从标准开始。

### 我们的使命
通过为每个项目提供一致性、可追溯性和可扩展性，革新AI时代的软件开发。

---

## ⭐ 支持这个项目

这个项目对您有帮助吗?

- ⭐ [在 GitHub 上加星](https://github.com/ai-naming-standard/v6)
- 🐦 [在 Twitter 上分享](https://twitter.com/intent/tweet?text=Check%20out%20AI%20Naming%20Standard%20MCP%20v6.0.0!&url=https://github.com/ai-naming-standard/v6)
- 💝 [成为赞助商](https://github.com/sponsors/ai-naming-standard)

---

<div align="center">

**版本**: 6.0.0 STABLE  
**发布日期**: 2025.10.17  
**状态**: 生产就绪 ✅  
**MCP 协议**: v0.6.0  
**Node**: >=16.0.0

---

由 [AI Naming Standard Organization](https://github.com/ai-naming-standard) 用 ❤️ 制作

[网站](https://ai-naming-standard.org) • 
[文档](./AI-NAMING-STANDARD/EN/v6.0.0/) • 
[NPM](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/v6)

</div>
