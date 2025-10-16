# 📋 Shared Specifications - v4+v5 통합 명세서

## 📌 이 문서의 목적
AI와 인간이 공유하는 핵심 명세와 규칙 정의

---

## Part 1: Core Naming Convention

### 🎯 Universal Pattern
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### 📊 Component Specifications

#### 1. Index (순번) - 3자리 + 관계
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

#### 2. Layer (계층) - 2-5자 대문자
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
    
  INFRA:
    name: "Infrastructure"
    scope: "DevOps, Deployment, Configuration"
    tech: ["Docker", "Kubernetes", "Terraform"]
    
  SH:
    name: "Shared"
    scope: "Common Utilities, Helpers"
    tech: ["Any"]
```

#### 3. Domain-Feature (도메인-기능)
```yaml
Format: "Domain-Feature"
Case: PascalCase for each part
Separator: Hyphen (-)

Domains:
  User: ["Login", "Register", "Profile", "Settings"]
  Product: ["List", "Detail", "Search", "Filter"]
  Order: ["Create", "View", "Cancel", "Track"]
  Payment: ["Process", "Refund", "Verify", "History"]
  Cart: ["Add", "Remove", "Update", "Checkout"]
  Admin: ["Dashboard", "Users", "Reports", "Settings"]

Rules:
  - Use singular form (User not Users)
  - Be specific (Login not Auth)
  - Maximum 2 words per part
  - Avoid abbreviations
```

#### 4. Action (동작) - CRUD+Extended
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
    
  T:
    name: "Transform"
    description: "Convert format, change structure"
    
  G:
    name: "Generate"
    description: "Create output, produce result"
```

#### 5. Detail (상세) - Component Type
```yaml
Frontend:
  Page: "Full page component"
  Component: "Reusable UI element"
  Modal: "Popup/Dialog"
  Form: "Input form"
  List: "Data list display"
  Card: "Card component"
  
Backend:
  Service: "Business logic"
  Controller: "Route handler"
  Middleware: "Request processor"
  Helper: "Utility function"
  Validator: "Data validation"
  Repository: "Data access"
  
Database:
  Table: "Database table"
  Schema: "Structure definition"
  Migration: "Schema change"
  Seed: "Initial data"
  Query: "Data query"
  Procedure: "Stored procedure"
```

#### 6. Environment (환경)
```yaml
Environments:
  DEV:
    name: "Development"
    purpose: "Local development"
    data: "Test data"
    debug: true
    
  STG:
    name: "Staging"
    purpose: "Pre-production testing"
    data: "Production-like"
    debug: false
    
  PROD:
    name: "Production"
    purpose: "Live environment"
    data: "Real data"
    debug: false
    
  COMMON:
    name: "Common"
    purpose: "All environments"
    data: "Shared"
    debug: varies
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
    example: |
      # 001_BE_User-Auth_C_Service_PROD.py
      # [Deps]: None - Entry point
      
      # 001-1_BE_User-Validate_V_Helper_PROD.py
      # [Deps]: 001 - Must run after auth service
      
      # 001-2_BE_User-Token_G_JWT_PROD.py
      # [Deps]: 001-1 - Must run after validation
    
  Parallel:
    pattern: "001a, 001b, 001c"
    meaning: "Can execute concurrently"
    use_case: "Independent operations"
    example: |
      # 030a_BE_Email-Order_S_Service_PROD.py
      # 030b_BE_SMS-Order_S_Service_PROD.py
      # 030c_BE_Push-Order_S_Service_PROD.py
      # All can run simultaneously
    
  Subordinate:
    pattern: "001s1, 001s2"
    meaning: "Child of parent file"
    use_case: "Helper functions, sub-components"
    example: |
      # 003_FE_User_C_Page_PROD.jsx
      # 003s1_FE_User_C_Modal_PROD.jsx
      # 003s2_FE_User_V_FormValidator_PROD.js
    
  Variant:
    pattern: "001.1, 001.2"
    meaning: "Alternative implementations"
    use_case: "Different approaches, versions"
    example: |
      # 010.1_BE_Search_R_ElasticSearch_PROD.py
      # 010.2_BE_Search_R_PostgreSQL_PROD.py

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
      - "ASSET_banner_home.jpg"
      - "ASSET_icon_user.svg"
    rule: "Required for all binary assets"

  TEMPLATE_:
    description: "All template files"
    examples:
      - "TEMPLATE_email_welcome.html"
      - "TEMPLATE_report_monthly.docx"
      - "TEMPLATE_invoice.html"
      - "TEMPLATE_error_404.html"
    rule: "Required for all template files"

  CONFIG_:
    description: "All configuration files"
    examples:
      - "CONFIG_theme_dark.json"
      - "CONFIG_styles_main.css"
      - "CONFIG_settings_app.yml"
      - "CONFIG_variables.scss"
    rule: "Required for all config files"

AI_Processing:
  benefit: "AI can automatically categorize and process files by prefix"
  example: |
    if (filename.startsWith('ASSET_')) {
      // Process as binary asset
    } else if (filename.startsWith('TEMPLATE_')) {
      // Process as template
    } else if (filename.startsWith('CONFIG_')) {
      // Process as configuration
    }
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
    
    Source: 010_BE_Order-Create_C_Service_PROD.py
    Test:   010_TEST_Order-Create_Unit_COMMON.test.py
  
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
    
  Performance: 
    description: "Speed and resource usage tests"
    index_range: "300-399"
    
  Security: 
    description: "Vulnerability and access tests"
    index_range: "400-499"

Examples:
  - "001_TEST_User-Login_Unit_COMMON.test.js"
  - "002_TEST_User-Register_Unit_COMMON.test.js"
  - "101_TEST_Auth-Flow_Integration_STG.test.py"
  - "201_TEST_Purchase-Complete_E2E_PROD.test.js"
  - "301_TEST_API-Load_Performance_PROD.test.js"
  - "401_TEST_SQL-Injection_Security_PROD.test.py"
  
Benefits:
  - "Direct 1:1 correlation with source files"
  - "Automated test discovery and mapping"
  - "Clear execution order and priority"
  - "Easy coverage tracking"
```

### 🆕 AI Permission Headers
```yaml
Protected_Folders:
  00_DOCS:
    header: "<!-- ⚠️ AI PERMISSION: NO-MODIFY -->"
    placement: "First line of every file"
    file_types: [".md", ".txt", ".rst"]
    example: |
      <!-- ⚠️ AI PERMISSION: NO-MODIFY -->
      # Project Documentation
      This file cannot be modified by AI.
    
  01_CONFIG:
    header: "# ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL"
    placement: "First line of every file"
    file_types: [".yml", ".yaml", ".env", ".ini", ".toml"]
    example: |
      # ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL
      # Production Configuration
      # Manual changes only - contains sensitive data
      
Header_Formats:
  markdown: "<!-- ⚠️ AI PERMISSION: NO-MODIFY -->"
  yaml: "# ⚠️ AI PERMISSION: NO-MODIFY"
  json: "Note: Create adjacent .ai_permission file"
  javascript: "/* ⚠️ AI PERMISSION: NO-MODIFY */"
  python: "# ⚠️ AI PERMISSION: NO-MODIFY"
  sql: "-- ⚠️ AI PERMISSION: NO-MODIFY"
  
Enforcement:
  ai_behavior: "AI tools must check for these headers before any modification"
  validation: "Build process should verify headers exist in protected folders"
```

---

## Part 2: Folder Structure Specification

### 📂 7-Category System
```yaml
Structure:
  00_DOCS:
    purpose: "Documentation"
    ai_permission: "READ_ONLY"
    contents: ["README.md", "guides", "specifications"]
    
  01_CONFIG:
    purpose: "Configuration"
    ai_permission: "NO_ACCESS"
    contents: ["env files", "secrets", "credentials"]
    critical: true
    
  02_STATIC:
    purpose: "Static Resources"
    ai_permission: "READ_ADD"
    contents: ["ASSET_* files", "TEMPLATE_* files", "CONFIG_* files"]
    naming_rule: "MANDATORY prefixes (ASSET_, TEMPLATE_, CONFIG_)"
    
  03_ACTIVE:
    purpose: "Active Code"
    ai_permission: "FULL_ACCESS"
    contents: ["all source code"]
    naming_rule: "MANDATORY"
    
  04_TEST:
    purpose: "Test Code"
    ai_permission: "CREATE_MODIFY"
    contents: ["indexed test files"]
    naming_rule: "MANDATORY (001_TEST_* pattern)"
    
  05_BUILD:
    purpose: "Build Output"
    ai_permission: "CREATE_ONLY"
    contents: ["compiled", "bundled", "minified"]
    gitignore: true
    
  06_LOGS:
    purpose: "Log Files"
    ai_permission: "WRITE_ONLY"
    contents: ["app.log", "error.log", "access.log"]
    gitignore: true
```

---

## Part 3: File Extension Mapping

### 📄 Extension Rules
```yaml
Frontend:
  .jsx: "React components"
  .js: "JavaScript logic"
  .ts: "TypeScript"
  .tsx: "TypeScript React"
  .vue: "Vue components"
  .html: "HTML templates"
  .css: "Stylesheets"
  .scss: "Sass stylesheets"

Backend:
  .py: "Python"
  .js: "Node.js"
  .java: "Java"
  .go: "Golang"
  .rb: "Ruby"
  .php: "PHP"
  .cs: "C#"
  .rs: "Rust"

Database:
  .sql: "SQL queries"
  .migration: "Migration files"
  .seed: "Seed data"

Configuration:
  .yml: "YAML config"
  .yaml: "YAML config"
  .json: "JSON config"
  .env: "Environment variables"
  .ini: "INI config"
  .toml: "TOML config"

Documentation:
  .md: "Markdown"
  .rst: "reStructuredText"
  .txt: "Plain text"
```

---

## Part 4: Validation Rules

### ✅ Naming Validation
```javascript
const VALIDATION_RULES = {
  index: {
    pattern: /^\d{3}([-.]\d+|[a-z]|s\d+)?$/,
    message: "Index must be 3 digits with optional suffix"
  },
  
  layer: {
    pattern: /^(FE|BE|DB|API|ML|INFRA|SH)$/,
    message: "Layer must be one of: FE, BE, DB, API, ML, INFRA, SH"
  },
  
  domain: {
    pattern: /^[A-Z][a-z]+$/,
    message: "Domain must be PascalCase"
  },
  
  feature: {
    pattern: /^[A-Z][a-z]+$/,
    message: "Feature must be PascalCase"
  },
  
  action: {
    pattern: /^[CRUDVXSTG]$/,
    message: "Action must be one of: C, R, U, D, V, X, S, T, G"
  },
  
  detail: {
    pattern: /^[A-Z][a-z]+$/,
    message: "Detail must be PascalCase"
  },
  
  environment: {
    pattern: /^(DEV|STG|PROD|COMMON)$/,
    message: "Environment must be: DEV, STG, PROD, or COMMON"
  }
};
```

---

## Part 5: Common Patterns

### 🎨 Project Templates

#### Web Application
```
03_ACTIVE/
├── 001_FE_App-Init_C_Component_PROD.jsx
├── 002_FE_Router-Main_C_Config_PROD.js
├── 003_FE_Layout-Main_C_Component_PROD.jsx
├── 010_FE_Home-Page_R_Page_PROD.jsx
├── 020_BE_Server-Init_X_Bootstrap_PROD.js
├── 021_BE_Router-API_C_Config_PROD.js
├── 030_DB_Schema-Init_C_Migration_PROD.sql
└── 031_DB_Seed-Data_C_Seed_PROD.sql
```

#### REST API
```
03_ACTIVE/
├── 001_BE_Server-Init_X_Bootstrap_PROD.py
├── 002_BE_Config-Load_R_Settings_PROD.py
├── 010_API_User-CRUD_X_Endpoints_PROD.py
├── 011_API_Auth-JWT_V_Middleware_PROD.py
├── 020_DB_User-Model_C_Schema_PROD.py
└── 021_DB_Connect-Pool_C_Config_PROD.py
```

#### Microservice
```
03_ACTIVE/
├── 001_INFRA_Docker-Compose_C_Config_PROD.yml
├── 002_INFRA_K8s-Deploy_C_Manifest_PROD.yml
├── 010_BE_Service-User_X_Main_PROD.py
├── 011_BE_Service-Order_X_Main_PROD.py
├── 012_BE_Service-Payment_X_Main_PROD.py
├── 020_API_Gateway-Kong_C_Config_PROD.yml
└── 021_API_Gateway-Routes_C_Rules_PROD.yml
```

---

## Part 6: Best Practices

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

## Part 7: Migration Mapping

### 🔄 Common Translations

| Traditional | → | AI Naming Convention |
|------------|---|---------------------|
| src/components/Login.jsx | → | 03_ACTIVE/001_FE_User-Login_C_Component_PROD.jsx |
| api/userService.js | → | 03_ACTIVE/010_BE_User-Service_X_Service_PROD.js |
| models/User.js | → | 03_ACTIVE/020_DB_User-Model_C_Schema_PROD.js |
| utils/helpers.js | → | 03_ACTIVE/030_SH_Common-Helpers_X_Utils_COMMON.js |
| tests/user.test.js | → | 04_TEST/unit/test_001_User_Service.js |
| config/database.yml | → | 01_CONFIG/database.yml |
| public/images/logo.png | → | 02_STATIC/images/logo.png |

---

## Part 8: Glossary

### 📖 Terms and Definitions

| Term | Definition |
|------|-----------|
| **Index** | 3-digit number indicating execution/priority order |
| **Layer** | Architectural tier (Frontend, Backend, Database, etc.) |
| **Domain** | Business area or module |
| **Feature** | Specific functionality within domain |
| **Action** | Operation type (CRUD + Extended) |
| **Detail** | Component type or file purpose |
| **Environment** | Deployment target (DEV, STG, PROD, COMMON) |
| **03_ACTIVE** | Primary workspace for all active code |
| **Dependency** | Files that must execute sequentially |
| **Parallel** | Files that can execute concurrently |
| **Subordinate** | Child files dependent on parent |

---

## 📚 References

- Complete Guide: [AI_NAMING_CONVENTION_FINAL.md](../AI_NAMING_CONVENTION_FINAL.md)
- Quick Start: [QUICK_START_FINAL.md](../01-quick-start/QUICK_START_FINAL.md)
- Human Guide: [HUMAN_GUIDE_FINAL.md](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- Machine Rules: [MACHINE_RULES_FINAL.md](../03-machine-rules/MACHINE_RULES_FINAL.md)

---

**Version**: FINAL  
**Updated**: 2025.10.14  
**Status**: Production Ready ✅
