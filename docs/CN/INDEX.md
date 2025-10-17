# 📚 AI命名规范 - 文档索引

> **最新版本**: v6.0.0 (2025.10.18)  
> **稳定版本**: v5.0.2 (2025.10.14)  
> **语言**: 简体中文 | [한국어](../KR/INDEX.md) | [English](../EN/INDEX.md) | [日本語](../JP/INDEX.md)

---

## 🎯 快速开始 - 选择适合您的文档

### 👤 按用户类型推荐的路径

| 类型 | 推荐文档 | 所需时间 | 说明 |
|------|----------|----------|------|
| 🚀 **着急！** | [`QUICK_START.md`](QUICK_START.md) | 5分钟 | 只看核心要点 |
| 📖 **完整理解** | [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) | 30分钟 | v5.0.2完整指南 |
| 🆕 **最新版本** | [`v6.0.0/README.md`](v6.0.0/README.md) | 10分钟 | 多AI协作 |
| 💼 **非开发者** | [`02-human-guides/HUMAN_GUIDE_FINAL.md`](02-human-guides/HUMAN_GUIDE_FINAL.md) | 15分钟 | 如何与AI合作 |
| 💻 **开发者** | [`03-machine-rules/MACHINE_RULES_FINAL.md`](03-machine-rules/MACHINE_RULES_FINAL.md) | 20分钟 | 技术规范详解 |

---

## 📁 文档结构

### 📄 根目录 (v5.0.2 当前版本)

```
CN/
├── 📖 AI_NAMING_CONVENTION_FINAL.md    ⭐ 完整集成文档 (Part 0-13)
├── 🚀 QUICK_START.md                   ⭐ 5分钟快速开始
├── 📋 INDEX.md                         ← 您在这里！
├── 📝 CHANGELOG_v5.md                  版本变更历史
├── 🛠️ SCRIPT_EXECUTION_GUIDE.md        脚本执行指南
├── 🔧 SCRIPT_init_structure.bat        初始化脚本 (Windows)
├── 🔧 SCRIPT_init_structure.js         初始化脚本 (Node.js)
└── 🔧 SCRIPT_init_structure.py         初始化脚本 (Python)
```

### 📂 按主题分类的详细指南

#### [`01-quick-start/`](01-quick-start/) - 快速开始模板
```
📁 01-quick-start/
├── README.md                          文件夹说明
└── QUICK_START_FINAL.md               详细模板 + 代码示例
```
- **用途**: 可直接复制粘贴的模板
- **对象**: 想立即开始项目的人
- **特点**: 包含Python/JavaScript/Bash脚本

#### [`02-human-guides/`](02-human-guides/) - 人类使用指南
```
📁 02-human-guides/
├── README.md                          文件夹说明
└── HUMAN_GUIDE_FINAL.md               如何与AI协作
```
- **用途**: 如何向AI提出请求
- **对象**: 非开发者、PM、设计师
- **特点**: 以自然语言示例为中心

#### [`03-machine-rules/`](03-machine-rules/) - AI规则
```
📁 03-machine-rules/
├── README.md                          文件夹说明
└── MACHINE_RULES_FINAL.md             技术规范详解
```
- **用途**: AI必须遵循的精确规则
- **对象**: 开发者、AI系统
- **特点**: 格式化模式 + 验证规则

#### [`04-shared-specs/`](04-shared-specs/) - 共享规范
```
📁 04-shared-specs/
├── README.md                          文件夹说明
└── SHARED_SPECS_FINAL.md              代码表 + 参考资料
```
- **用途**: 层代码、操作代码等参考表
- **对象**: 所有用户
- **特点**: 快速搜索备忘单

---

### 📦 版本存档

#### [`v5.0.2/`](v5.0.2/) - 当前稳定版本备份
```
📁 v5.0.2/
├── AI_NAMING_CONVENTION_FINAL.md      v5.0.2备份
├── CHANGELOG_v5.md
├── INDEX.md
├── QUICK_START.md
├── QUICK_START_FINAL.md
└── SCRIPT_EXECUTION_GUIDE.md
```
- **用途**: 保存v5.0.2快照
- **状态**: ✅ 稳定版本 (生产就绪)

#### [`v6.0.0/`](v6.0.0/) - 下一代多AI版本 🆕
```
📁 v6.0.0/
├── 📖 README.md                        v6概述
├── 📖 AI_NAMING_CONVENTION_v6.md       Part 0-6
├── 📖 AI_NAMING_CONVENTION_v6_CONTINUATION.md  Part 7-13
├── 📝 CHANGELOG_v6.md                  v6变更内容
├── 📋 INDEX.md                         v6专用索引
├── 🎉 UPGRADE_COMPLETE.md              升级指南
└── 📁 05-meta-templates/               ⭐ v6核心功能
    ├── AI_ROLE_MATRIX.yaml             AI角色定义
    ├── DEP_GRAPH.yaml                  依赖关系图
    └── NAMING_WIZARD_RULES.yaml        自然语言转换规则
```
- **用途**: 多AI协作系统
- **状态**: 🆕 最新版本 (稳定)
- **主要功能**:
  - 🤖 多个AI同时协作
  - 🪄 自然语言 → 文件名自动转换
  - 🔗 自动依赖跟踪
  - 📊 完整治理

---

## 🎓 推荐学习路径

### 🚀 初学者 (首次使用)
```
第1步: QUICK_START.md (5分钟)
   ↓
第2步: 01-quick-start/QUICK_START_FINAL.md (10分钟)
   ↓
第3步: 应用到实际项目 (30分钟)
```

### 📚 中级 (需要完整理解)
```
第1步: AI_NAMING_CONVENTION_FINAL.md (Part 0-5) (20分钟)
   ↓
第2步: 02-human-guides/ 或 03-machine-rules/ (20分钟)
   ↓
第3步: 参考04-shared-specs/练习 (30分钟)
```

### 🚀 高级 (v6迁移)
```
第1步: v6.0.0/README.md (10分钟)
   ↓
第2步: v6.0.0/CHANGELOG_v6.md (5分钟)
   ↓
第3步: v6.0.0/AI_NAMING_CONVENTION_v6.md (30分钟)
   ↓
第4步: v6.0.0/UPGRADE_COMPLETE.md (10分钟)
```

---

## 🔍 按主题查找

### 理解文件夹结构
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 1
- [`v6.0.0/AI_NAMING_CONVENTION_v6.md`](v6.0.0/AI_NAMING_CONVENTION_v6.md) - Part 1

### 文件命名规则
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 2-4
- [`03-machine-rules/MACHINE_RULES_FINAL.md`](03-machine-rules/MACHINE_RULES_FINAL.md)
- [`04-shared-specs/SHARED_SPECS_FINAL.md`](04-shared-specs/SHARED_SPECS_FINAL.md)

### 与AI协作
- [`02-human-guides/HUMAN_GUIDE_FINAL.md`](02-human-guides/HUMAN_GUIDE_FINAL.md)
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 5

### 项目初始化
- [`QUICK_START.md`](QUICK_START.md)
- [`01-quick-start/QUICK_START_FINAL.md`](01-quick-start/QUICK_START_FINAL.md)
- [`SCRIPT_EXECUTION_GUIDE.md`](SCRIPT_EXECUTION_GUIDE.md)

### 多AI协作 (v6)
- [`v6.0.0/README.md`](v6.0.0/README.md)
- [`v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml`](v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml)

### 自然语言文件名转换 (v6)
- [`v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml`](v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml)

### 依赖管理 (v6)
- [`v6.0.0/05-meta-templates/DEP_GRAPH.yaml`](v6.0.0/05-meta-templates/DEP_GRAPH.yaml)

---

## 📖 阅读技巧

### 💡 高效阅读方法

1. **无需阅读全部**
   - 只查找并阅读您需要的部分
   - 使用索引

2. **边练习边学习**
   - 从复制模板开始
   - 直接执行示例

3. **版本选择**
   - 新项目 → 推荐v6.0.0
   - 现有项目 → 保持v5.0.2

4. **需要帮助？**
   - 从QUICK_START.md开始
   - 参考02-human-guides/

---

## 🔄 版本对比

| 项目 | v5.0.2 | v6.0.0 |
|------|--------|--------|
| **文件夹结构** | 7个 | 8个 (+ 07_META) |
| **AI协作** | 单个AI | 多AI |
| **文件名生成** | 手动学习规则 | 自然语言自动转换 |
| **依赖跟踪** | 手动管理 | 自动跟踪 |
| **状态** | ✅ 稳定 | 🆕 最新 |
| **推荐对象** | 现有项目 | 新项目 |

---

## 📞 其他信息

### 🌐 其他语言
- [한국어 버전](../KR/INDEX.md)
- [English Version](../EN/INDEX.md)
- [日本語版](../JP/INDEX.md)

### 📦 GitHub
- 仓库: https://github.com/ai-naming-standard/mcp

### 💬 联系方式
- 文档问题或改进建议请提交到GitHub Issues

---

**最后更新**: 2025.10.18  
**文档版本**: v6.0.0
