# 🚀 AI 文件命名助手

> **教会AI如何命名文件！**  
> 然后AI就能更好地理解你的项目并提供有效帮助。

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**🌐 语言**: [English](./README.md) | [한국어](./README_KO.md) | [日本語](./README_JA.md) | [中文](./README_CN.md)

---

## 💡 适合谁使用？

✅ 使用Claude、ChatGPT、Cursor等AI工具的人  
✅ 文件太多难以管理的人  
✅ 希望团队统一文件命名规则的人  
✅ 希望AI更好理解项目的人

---

## 🎯 我们解决什么问题？

### ❌ 之前：混乱的文件名

```
login.js
user_page_final_v2.jsx
payment_fixed.py
test123.sql
```

**结果：** AI会混淆并犯错 😵

### ✅ 之后：清晰的文件名

```
001_FE_User-Login_C_Page_PROD.jsx
002_BE_Payment-Process_X_API_PROD.py
003_DB_User-Schema_C_Migration_PROD.sql
004_TEST_Login_Unit_DEV.test.js
```

**结果：** AI完全理解并提供更好的帮助！ ✨

---

## 🎁 您能获得什么？

### 1. 🤖 AI理解您的意图

**只需用普通语言说：**
- "创建登录页面" → AI自动生成：`001_FE_User-Login_C_Page_PROD.jsx`
- "添加退款API" → AI自动生成：`021_BE_Payment-Refund_C_API_PROD.py`
- "创建产品表" → AI自动生成：`005_DB_Product-Schema_C_Migration_PROD.sql`

### 2. 📁 8个简单文件夹

项目自动整理：

```
my-project/
├── 00_DOCS/      📚 文档
├── 01_CONFIG/    ⚙️ 配置文件
├── 02_STATIC/    📦 图片、字体
├── 03_ACTIVE/    🔥 主要代码
├── 04_TEST/      🧪 测试
├── 05_BUILD/     🏗️ 构建文件
├── 06_LOGS/      📊 日志
└── 07_META/      🎯 AI协作文件
```

### 3. 🤝 多个AI协同工作

- **Claude** 编写代码
- **Cursor** 审查
- **ChatGPT** 设计结构
- **所有AI都理解相同规则！**

### 4. 📝 自动记录管理

一切自动记录：
- 谁做了什么
- 什么时候做的
- 哪些文件相互关联

---

## ⚡ 快速开始（3分钟）

### 步骤1：安装

```bash
npm install -g ai-naming-standard-mcp
```

### 步骤2：告诉您的AI

只需复制到Claude或Cursor设置中：

```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}
```

### 步骤3：开始使用！

用普通语言告诉AI：
- "创建用户仪表板页面"
- "添加邮箱验证API"
- "创建产品数据库表"

**就这样！** 🎉

---

## 📖 实际使用示例

### 示例1：构建购物网站

**您说：** "需要购物车页面"

**AI创建：**
```
015_FE_Cart-Shopping_R_Page_PROD.jsx
```

**一眼就能看懂：**
- `015` - 文件编号（便于查找）
- `FE` - 前端（网页）
- `Cart-Shopping` - 购物车功能
- `R` - Read/显示（显示信息）
- `Page` - 页面
- `PROD` - 生产环境（实际网站）

### 示例2：团队协作

**之前：**
- 小明：`login_page.jsx`
- 小红：`LoginPage.jsx`
- 小刚：`user-login-component.jsx`
- 😵 大家都混乱！

**之后：**
- 所有人：`001_FE_User-Login_C_Page_PROD.jsx`
- ✨ 完美一致！

---

## 🌍 支持4种语言

所有功能都支持您的语言：

| 语言 | 状态 | 文档 |
|----------|--------|---------------|
| English | ✅ 完全支持 | [Docs](https://github.com/ai-naming-standard/mcp/tree/main/docs/EN) |
| 한국어 (Korean) | ✅ 完全支持 | [문서](https://github.com/ai-naming-standard/mcp/tree/main/docs/KR) |
| 日本語 (Japanese) | ✅ 完全支持 | [ドキュメント](https://github.com/ai-naming-standard/mcp/tree/main/docs/JP) |
| 中文 (Chinese) | ✅ 完全支持 | [文档](https://github.com/ai-naming-standard/mcp/tree/main/docs/CN) |

---

## 🎓 文件名是如何生成的？

别担心 - 您不需要记住这些！  
**只需告诉AI您想要什么，AI会创建正确的名称。**

但如果您好奇，它是这样工作的：

```
[编号]_[位置]_[什么]-[详情]_[动作]_[类型]_[环境]
```

**示例：**

| 文件名 | 含义 |
|-----------|---------|
| `001_FE_User-Login_C_Page_PROD.jsx` | 前端登录页面（创建） |
| `002_BE_Payment-Process_X_Service_PROD.py` | 后端支付服务（执行） |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | 数据库订单表（创建） |

**位置（Layer）：**
- `FE` = 前端（用户看到的）
- `BE` = 后端（服务器逻辑）
- `DB` = 数据库（数据存储）
- `API` = API（连接）

**动作：**
- `C` = Create（创建新的）
- `R` = Read（显示）
- `U` = Update（更新）
- `D` = Delete（删除）
- `X` = Execute（执行处理）

---

## 💬 需要帮助？

📧 **电子邮件**: [omskykhal@gmail.com](mailto:omskykhal@gmail.com)

---

## 🤝 想要贡献？

我们欢迎：
- 错误报告
- 功能建议
- 翻译
- 文档改进

**如何贡献：**

1. 访问GitHub：[https://github.com/ai-naming-standard/mcp](https://github.com/ai-naming-standard/mcp)
2. 提交Issue或Pull Request
3. 我们会快速审查和回复！

---

## 📜 许可证

MIT许可证 - 所有人免费使用！

```
Copyright (c) 2025 AI Naming Standard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🎯 核心优势

✨ **节省时间**：不再需要思考文件名  
✨ **减少混乱**：每个人使用相同的系统  
✨ **更好的AI帮助**：AI理解您的项目结构  
✨ **轻松协作**：对每个人都有清晰的规则  
✨ **专业性**：您的项目看起来有组织且整洁

---

## 📦 技术细节（开发者专用）

<details>
<summary>点击查看技术信息</summary>

### MCP协议

- 兼容MCP v0.6.0
- 24个内置文件管理工具
- 支持多AI协同
- 自动依赖跟踪

### 系统要求

- Node.js >= 16.0.0
- npm或yarn
- 兼容Claude Desktop、Cursor、VS Code

### 高级功能

- 自定义命名规则
- 从v4/v5迁移
- 依赖图生成
- AI角色矩阵管理
- 对话历史跟踪

详细技术文档：[技术文档](./AI-NAMING-STANDARD/CN/v6.0.0/)

</details>

---

<div align="center">

**版本**: 6.0.13  
**状态**: 生产就绪 ✅

为AI社区精心制作 💙

[NPM包](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/mcp) • 
[文档](./AI-NAMING-STANDARD/CN/v6.0.0/)

</div>
