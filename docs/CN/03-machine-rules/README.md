# 📁 03-machine-rules - AI规则

> **文件夹目的**: 定义AI必须遵循的精确技术规范

---

## 📄 包含的文件

### `MACHINE_RULES_FINAL.md`
- **用途**: AI系统的格式化规则
- **包含内容**:
  - 文件名生成算法
  - 模式验证规则
  - 错误处理方法
  - 自动修正逻辑
  - 正则表达式模式

---

## 🎯 何时使用此文件夹

✅ **以下情况请选择此文件夹:**
- 开发者 (程序员)
- 实现AI系统
- 需要精确技术规范
- 创建验证逻辑
- 开发自动化工具

❌ **以下情况请选择其他文件夹:**
- 非开发者 → [`02-human-guides/`](../02-human-guides/)
- 快速开始 → [`01-quick-start/`](../01-quick-start/)
- 只需参考表 → [`04-shared-specs/`](../04-shared-specs/)

---

## 🔧 技术内容

### 1. 文件名生成算法
```javascript
function generateFileName(params) {
  const pattern = `${params.index}_${params.layer}_${params.domain}...`;
  return validate(pattern);
}
```

### 2. 模式验证
```regex
^[0-9]{3}(_[A-Z]{2,6})(_[A-Za-z\-]+)(_[CRUDVXSTG])(_[A-Z][a-z]+)(_[A-Z]+)\.[a-z]+$
```

### 3. 自动修正规则
```
输入: "userLogin.js"
分析: 检测到规则违反
输出: "001_FE_User-Login_C_Page_PROD.js"
建议: 提供3个替代方案
```

---

## 📚 相关文档

- **人类指南**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **代码表**: [`../04-shared-specs/SHARED_SPECS_FINAL.md`](../04-shared-specs/SHARED_SPECS_FINAL.md)
- **完整文档**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **主索引**: [`../INDEX.md`](../INDEX.md)

---

**更新**: 2025.10.18
