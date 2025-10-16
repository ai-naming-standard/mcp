# 📋 Shared Specifications - v4+v5 Integration

## 📌 Purpose of This Document
Define core specifications and rules shared between AI and humans

---

## Part 1: Core Naming Convention

### 🎯 Universal Pattern
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### 📊 Component Specifications

#### 1. Index (Sequence) - 3 digits + relations
```yaml
Base:
  format: "000-999"
  padding: 3 digits with zero
  examples: ["001", "002", "010", "100"]

Relations:
  decimal: "001.1, 001.2"     # Minor versions
  dependency: "001-1, 001-2"   # Sequential execution
  parallel: "001a, 001b"       # Concurrent execution  
  subordinate: "001s1, 001s2" # Parent-child relation
  
Rules:
  - Start from 001, not 000
  - Use 10-unit intervals for major sections
  - Reserve 00X for initialization
  - Reserve 99X for cleanup/finalization
```

#### 2. Layer (Tier) - 2-5 capital letters
```yaml
Standard Layers:
  FE:
    name: "Frontend"
    scope: "UI, User Interface, Client-side"
    tech: ["React", "Vue", "Angular", "HTML/CSS"]
    
  BE:
    name: "Backend"
    scope: "Server, Business Logic, API"
    tech: ["Node.js", "Python", "Java", "Go"]
    
  DB:
    name: "Database"
    scope: "Data Storage, Schema, Queries"
    tech: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    
  API:
    name: "API Gateway"
    scope: "External Interface, REST, GraphQL"
    tech: ["Express", "FastAPI", "Spring Boot"]
    
  ML:
    name: "Machine Learning"
    scope: "AI Models, Training, Inference"
    tech: ["TensorFlow", "PyTorch", "Scikit-learn"]
```

#### 3. Domain-Feature
```yaml
Format: "Domain-Feature"
Case: PascalCase for each part
Separator: Hyphen (-)

Domains:
  User: ["Login", "Register", "Profile", "Settings"]
  Product: ["List", "Detail", "Search", "Filter"]
  Order: ["Create", "View", "Cancel", "Track"]
  Payment: ["Process", "Refund", "Verify", "History"]

Rules:
  - Use singular form (User not Users)
  - Be specific (Login not Auth)
  - Maximum 2 words per part
  - Avoid abbreviations
```

#### 4. Action - CRUD+Extended
```yaml
CRUD_Basic:
  C:
    name: "Create"
    http: "POST"
    sql: "INSERT"
    description: "Generate new resource"
    
  R:
    name: "Read"
    http: "GET"
    sql: "SELECT"
    description: "Retrieve existing resource"
    
  U:
    name: "Update"
    http: "PUT/PATCH"
    sql: "UPDATE"
    description: "Modify existing resource"
    
  D:
    name: "Delete"
    http: "DELETE"
    sql: "DELETE"
    description: "Remove resource"

Extended:
  V:
    name: "Validate"
    description: "Check validity, verify rules"
    
  X:
    name: "Execute"
    description: "Run process, perform action"
    
  S:
    name: "Send"
    description: "Transmit data, dispatch message"
```

---

## Part 1.5: ChatGPT Enhancement Specifications (v5.0.1)

### 🆕 [Deps] Dependency Markers
```yaml
Dependency_Types:
  Sequential: 
    pattern: "001-1, 001-2, 001-3"
    meaning: "Must execute in order"
    use_case: "Multi-step processes"
    
  Parallel:
    pattern: "001a, 001b, 001c"
    meaning: "Can execute concurrently"
    use_case: "Independent operations"
    
  Subordinate:
    pattern: "001s1, 001s2"
    meaning: "Child of parent file"
    use_case: "Helper functions, sub-components"

Usage_in_comments:
  format: "// [Deps]: {relationship}"
  placement: "Second line of file after description"
```

### 🆕 02_STATIC Naming Convention
```yaml
Mandatory_Prefixes:
  ASSET_:
    description: "All media and image files"
    examples:
      - "ASSET_logo.png"
      - "ASSET_favicon.ico"
    rule: "Required for all binary assets"

  TEMPLATE_:
    description: "All template files"
    examples:
      - "TEMPLATE_email_welcome.html"
      - "TEMPLATE_invoice.html"
    rule: "Required for all template files"

  CONFIG_:
    description: "All configuration files"
    examples:
      - "CONFIG_theme_dark.json"
      - "CONFIG_styles_main.css"
    rule: "Required for all config files"
```

### 🆕 04_TEST Indexed Naming
```yaml
Test_Pattern:
  format: "[Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]"
  mandatory: true
  
Index_Correlation:
  rule: "Test index should match source file index"
  example: |
    Source: 001_FE_User-Login_C_Page_PROD.jsx
    Test:   001_TEST_User-Login_Unit_COMMON.test.js

Test_Types:
  Unit: 
    description: "Individual component/function tests"
    index_range: "001-099"
    
  Integration: 
    description: "Multi-component interaction tests"
    index_range: "100-199"
    
  E2E: 
    description: "End-to-end user flow tests"
    index_range: "200-299"
```

---

## Part 2: Folder Structure Specification

### 📂 7-Category System
```yaml
Structure:
  00_DOCS:
    purpose: "Documentation"
    ai_permission: "READ_ONLY"
    
  01_CONFIG:
    purpose: "Configuration"
    ai_permission: "NO_ACCESS"
    critical: true
    
  02_STATIC:
    purpose: "Static Resources"
    ai_permission: "READ_ADD"
    naming_rule: "MANDATORY prefixes (ASSET_, TEMPLATE_, CONFIG_)"
    
  03_ACTIVE:
    purpose: "Active Code"
    ai_permission: "FULL_ACCESS"
    naming_rule: "MANDATORY"
    
  04_TEST:
    purpose: "Test Code"
    ai_permission: "CREATE_MODIFY"
    naming_rule: "MANDATORY (001_TEST_* pattern)"
```

---

## Part 3: Common Patterns

### 🎨 Project Templates

#### Web Application
```
03_ACTIVE/
├── 001_FE_App-Init_C_Component_PROD.jsx
├── 002_FE_Router-Main_C_Config_PROD.js
├── 010_FE_Home-Page_R_Page_PROD.jsx
├── 020_BE_Server-Init_X_Bootstrap_PROD.js
└── 030_DB_Schema-Init_C_Migration_PROD.sql
```

#### REST API
```
03_ACTIVE/
├── 001_BE_Server-Init_X_Bootstrap_PROD.py
├── 010_API_User-CRUD_X_Endpoints_PROD.py
├── 011_API_Auth-JWT_V_Middleware_PROD.py
└── 020_DB_User-Model_C_Schema_PROD.py
```

---

## Part 4: Best Practices

### ✅ DO's
1. **Consistent Naming**: Always follow the pattern
2. **Clear Domains**: Use business-meaningful names
3. **Logical Ordering**: Sequence files by dependency
4. **Environment Separation**: Clearly mark DEV/STG/PROD
5. **Atomic Files**: One responsibility per file

### ❌ DON'Ts
1. **Skip Components**: Every part of pattern is required
2. **Mix Environments**: Don't mix DEV and PROD in same file
3. **Vague Names**: Avoid generic terms like "Main", "Utils"
4. **Deep Nesting**: Max 1 level subfolder in 03_ACTIVE
5. **Manual Numbering**: Use tools to manage indices

---

## 📚 References

- Complete Guide: [AI_NAMING_CONVENTION_FINAL.md](../AI_NAMING_CONVENTION_FINAL.md)
- Quick Start: [QUICK_START_FINAL.md](../01-quick-start/QUICK_START_FINAL.md)
- Human Guide: [HUMAN_GUIDE_FINAL.md](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- Machine Rules: [MACHINE_RULES_FINAL.md](../03-machine-rules/MACHINE_RULES_FINAL.md)

---

**Version**: FINAL  
**Updated**: October 14, 2025  
**Status**: Production Ready ✅
