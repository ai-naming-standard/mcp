# 📁 03-machine-rules - Rules for AI

> **Folder Purpose**: Define precise technical specifications for AI to follow

---

## 📄 Included Files

### `MACHINE_RULES_FINAL.md`
- **Purpose**: Structured rules for AI systems
- **Contents**:
  - Filename generation algorithm
  - Pattern validation rules
  - Error handling methods
  - Auto-correction logic
  - Regular expression patterns

---

## 🎯 When to Use This Folder

✅ **Choose this folder if:**
- Developer (Programmer)
- Implementing AI systems
- Need precise technical specifications
- Creating validation logic
- Developing automation tools

❌ **Choose another folder if:**
- Non-developer → [`02-human-guides/`](../02-human-guides/)
- Quick start → [`01-quick-start/`](../01-quick-start/)
- Need reference tables only → [`04-shared-specs/`](../04-shared-specs/)

---

## 🔧 Technical Content

### 1. Filename Generation Algorithm
```javascript
function generateFileName(params) {
  const pattern = `${params.index}_${params.layer}_${params.domain}...`;
  return validate(pattern);
}
```

### 2. Pattern Validation
```regex
^[0-9]{3}(_[A-Z]{2,6})(_[A-Za-z\-]+)(_[CRUDVXSTG])(_[A-Z][a-z]+)(_[A-Z]+)\.[a-z]+$
```

### 3. Auto-correction Rules
```
Input: "userLogin.js"
Analysis: Rule violation detected
Output: "001_FE_User-Login_C_Page_PROD.js"
Suggestion: 3 alternatives provided
```

---

## 📚 Related Documents

- **Human Guide**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **Code Tables**: [`../04-shared-specs/SHARED_SPECS_FINAL.md`](../04-shared-specs/SHARED_SPECS_FINAL.md)
- **Complete Guide**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **Main Index**: [`../INDEX.md`](../INDEX.md)

---

**Updated**: 2025.10.18
