# 🚀 AI File Naming Assistant

> **Teach AI how to name your files!**  
> Then AI will understand your project better and help you more effectively.

<a href="https://glama.ai/mcp/servers/@ai-naming-standard/mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@ai-naming-standard/mcp/badge" alt="AI Naming Standard Server MCP server" />
</a>

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**🌐 Language**: [English](./README.md) | [한국어](./README_KO.md) | [日本語](./README_JA.md) | [中文](./README_CN.md)

---

## 💡 Who is this for?

✅ Anyone using AI tools like Claude, ChatGPT, Cursor  
✅ People struggling with too many files  
✅ Teams wanting consistent file naming rules  
✅ Anyone wanting AI to understand their project better

---

## 🎯 The Problem We Solve

### ❌ Before: Confusing File Names

```
login.js
user_page_final_v2.jsx
payment_fixed.py
test123.sql
```

**Result:** AI gets confused and makes mistakes 😵

### ✅ After: Clear File Names

```
001_FE_User-Login_C_Page_PROD.jsx
002_BE_Payment-Process_X_API_PROD.py
003_DB_User-Schema_C_Migration_PROD.sql
004_TEST_Login_Unit_DEV.test.js
```

**Result:** AI understands perfectly and helps better! ✨

---

## 🎁 What You Get

### 1. 🤖 AI Understands Your Intent

**Just say in plain language:**
- "Create a login page" → AI makes: `001_FE_User-Login_C_Page_PROD.jsx`
- "Add payment refund API" → AI makes: `021_BE_Payment-Refund_C_API_PROD.py`
- "Create product table" → AI makes: `005_DB_Product-Schema_C_Migration_PROD.sql`

### 2. 📁 8 Simple Folders

Your project stays organized automatically:

```
my-project/
├── 00_DOCS/      📚 Documentation
├── 01_CONFIG/    ⚙️ Settings
├── 02_STATIC/    📦 Images, fonts
├── 03_ACTIVE/    🔥 Your main code
├── 04_TEST/      🧪 Tests
├── 05_BUILD/     🏗️ Build files
├── 06_LOGS/      📊 Logs
└── 07_META/      🎯 AI collaboration files
```

### 3. 🤝 Multiple AIs Work Together

- **Claude** writes code
- **Cursor** reviews it
- **ChatGPT** designs structure
- **All understand the same rules!**

### 4. 📝 Automatic Record Keeping

Everything is tracked automatically:
- Who did what
- When it was done
- Which files depend on each other

---

## ⚡ Quick Start (3 Minutes)

### Step 1: Install

```bash
npm install -g ai-naming-standard-mcp
```

### Step 2: Tell Your AI

Just copy this into your Claude or Cursor settings:

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

### Step 3: Start Using!

Tell your AI in plain language:
- "Create a user dashboard page"
- "Add email verification API"
- "Make a product database table"

**That's it!** 🎉

---

## 📖 Real Examples

### Example 1: Building a Shopping Site

**You say:** "I need a shopping cart page"

**AI creates:**
```
015_FE_Cart-Shopping_R_Page_PROD.jsx
```

**You can tell it means:**
- `015` - File number (easy to find)
- `FE` - Frontend (it's a webpage)
- `Cart-Shopping` - Shopping cart feature
- `R` - Read/Display (shows information)
- `Page` - It's a page
- `PROD` - For production (real site)

### Example 2: Team Collaboration

**Before:**
- John makes: `login_page.jsx`
- Sarah makes: `LoginPage.jsx`
- Mike makes: `user-login-component.jsx`
- 😵 Everyone confused!

**After:**
- Everyone makes: `001_FE_User-Login_C_Page_PROD.jsx`
- ✨ Perfect consistency!

---

## 🌍 Supports 4 Languages

All features work in your language:

| Language | Status | Documentation |
|----------|--------|---------------|
| English | ✅ Full | [Docs](https://github.com/ai-naming-standard/mcp/tree/main/docs/EN) |
| 한국어 (Korean) | ✅ Full | [문서](https://github.com/ai-naming-standard/mcp/tree/main/docs/KR) |
| 日本語 (Japanese) | ✅ Full | [ドキュメント](https://github.com/ai-naming-standard/mcp/tree/main/docs/JP) |
| 中文 (Chinese) | ✅ Full | [文档](https://github.com/ai-naming-standard/mcp/tree/main/docs/CN) |

---

## 🎓 How File Names Work

Don't worry - you don't need to memorize this!  
**Just tell AI what you want, and it creates the correct name.**

But if you're curious, here's how it works:

```
[Number]_[Where]_[What]-[Detail]_[Action]_[Type]_[Environment]
```

**Examples:**

| File Name | Meaning |
|-----------|---------|
| `001_FE_User-Login_C_Page_PROD.jsx` | Frontend login page (creating) |
| `002_BE_Payment-Process_X_Service_PROD.py` | Backend payment service (executing) |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | Database order table (creating) |

**Where (Layer):**
- `FE` = Frontend (what users see)
- `BE` = Backend (server logic)
- `DB` = Database (data storage)
- `API` = API (connects things)

**Action:**
- `C` = Create (making new)
- `R` = Read (showing)
- `U` = Update (changing)
- `D` = Delete (removing)
- `X` = Execute (processing)

---

## 💬 Need Help?

📧 **Email**: [omskykhal@gmail.com](mailto:omskykhal@gmail.com)

---

## 🤝 Want to Contribute?

We welcome:
- Bug reports
- Feature suggestions
- Translations
- Documentation improvements

**How to contribute:**

1. Visit our GitHub: [https://github.com/ai-naming-standard/mcp](https://github.com/ai-naming-standard/mcp)
2. Open an Issue or Pull Request
3. We'll review and respond quickly!

---

## 📜 License

MIT License - Free to use for everyone!

```
Copyright (c) 2025 AI Naming Standard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🎯 Key Benefits

✨ **Save Time**: No more thinking about file names  
✨ **Less Confusion**: Everyone uses the same system  
✨ **Better AI Help**: AI understands your project structure  
✨ **Easy Teamwork**: Clear rules for everyone  
✨ **Professional**: Your project looks organized and clean

---

## 📦 Technical Details (For Developers)

<details>
<summary>Click to see technical information</summary>

### MCP Protocol

- Compatible with MCP v0.6.0
- 24 built-in tools for file management
- Supports multi-AI orchestration
- Automatic dependency tracking

### System Requirements

- Node.js >= 16.0.0
- npm or yarn
- Compatible with Claude Desktop, Cursor, VS Code

### Advanced Features

- Custom naming rules
- Migration from v4/v5
- Dependency graph generation
- AI role matrix management
- Conversation history tracking

For detailed technical documentation, visit: [Technical Docs](./AI-NAMING-STANDARD/EN/v6.0.0/)

</details>

---

<div align="center">

**Version**: 6.0.13  
**Status**: Production Ready ✅

Made with care for the AI community 💙

[NPM Package](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/mcp) • 
[Documentation](./AI-NAMING-STANDARD/EN/v6.0.0/)

</div>