# 🤖 Machine Rules - AI System Specification v4+v5 Integration

## 📌 Purpose of This Document
Technical rules and specifications that AI systems must understand and execute

---

## Part 1: AI Instructions (AI Execution Guidelines)

### 🎯 Core Directives

```yaml
AI_BEHAVIOR:
  primary_workspace: "03_ACTIVE"
  naming_pattern: "[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]"
  
FOLDER_PERMISSIONS:
  00_DOCS: READ_ONLY      # ⚠️ AI PERMISSION: NO-MODIFY
  01_CONFIG: NO_ACCESS    # ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL: Never modify
  02_STATIC: READ_ADD     # ASSET_ prefix required for assets
  03_ACTIVE: FULL_ACCESS  # Primary work area
  04_TEST: CREATE_MODIFY  # Use indexed naming: 001_TEST_*.test.{ext}
  05_BUILD: CREATE_ONLY
  06_LOGS: WRITE_ONLY

EXECUTION_RULES:
  - Always work in 03_ACTIVE for code files
  - Follow naming convention 100% in 03_ACTIVE
  - Never create folders beyond the 7 categories
  - Process files in index order (001 → 002 → 003)
  - Respect environment tags (DEV/STG/PROD)
  - Use ASSET_ prefix for resources in 02_STATIC
  - Apply indexed naming to test files in 04_TEST
  - Check [Deps] markers for dependency relationships
```

### 🔧 File Generation Rules

```python
def generate_filename(params):
    """
    AI must follow this pattern for file creation
    """
    components = [
        params['index'].zfill(3),      # 001, 002, 003...
        params['layer'],                # FE, BE, DB, API...
        f"{params['domain']}-{params['feature']}",  # User-Login
        params['action'],               # C, R, U, D, V, X, S...
        params['detail'],               # Page, Service, Component...
        params['environment']          # DEV, STG, PROD, COMMON
    ]
    
    filename = '_'.join(components) + '.' + params['extension']
    filepath = f"03_ACTIVE/{filename}"
    
    return filepath
```

### 🔍 Pattern Recognition

```regex
# File Pattern Regex
^(\d{3}(?:[-.]?\d+)?[a-z]?(?:s\d+)?)_([A-Z]{2,5})_([A-Z][a-z]+)-([A-Z][a-z]+)_([CRUDVXSTG])_([A-Z][a-z]+)_(DEV|STG|PROD|COMMON)\.(js|jsx|py|sql|yml|json)$

# Groups:
# 1: Index (with optional relations)
# 2: Layer
# 3: Domain
# 4: Feature
# 5: Action
# 6: Detail
# 7: Environment
# 8: Extension
```

---

## Part 2: Technical Specifications

### 📌 [Deps] Dependency Notation

```yaml
DEPENDENCY_MARKERS:
  sequential: "001-1, 001-2"     # Must execute in order
  parallel: "001a, 001b"          # Can execute concurrently
  subordinate: "001s1, 001s2"     # Child relationships
  variant: "001.1, 001.2"         # Alternative implementations

AI_DEPENDENCY_RULES:
  - Check for [Deps] markers in comments
  - Respect execution order for sequential dependencies
  - Process parallel files concurrently when possible
  - Update parent files when subordinates change
```

### 🎨 02_STATIC Naming Convention

```yaml
STATIC_FILES:
  assets:
    pattern: "ASSET_[name].[ext]"
    examples:
      - "ASSET_logo.png"
      - "ASSET_favicon.ico"
  
  templates:
    pattern: "TEMPLATE_[name].[ext]"
    examples:
      - "TEMPLATE_email.html"
      - "TEMPLATE_report.docx"
  
  configs:
    pattern: "CONFIG_[name].[ext]"
    examples:
      - "CONFIG_theme.json"
      - "CONFIG_styles.css"
```

### 🧪 04_TEST Naming Convention

```yaml
TEST_FILES:
  pattern: "[Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]"
  
  types:
    - Unit
    - Integration
    - E2E
    - Performance
    - Security
  
  examples:
    - "001_TEST_User-Login_Unit_COMMON.test.js"
    - "002_TEST_Payment-Process_Integration_STG.test.py"
    - "003_TEST_Full-Flow_E2E_PROD.test.js"
```

---

## Part 3: Project Build Rules

### 🏗️ Project Initialization

```python
def initialize_project(project_name: str, project_type: str):
    """
    AI must execute this sequence for new projects
    """
    # Step 1: Create folder structure
    folders = [
        "00_DOCS",
        "01_CONFIG", 
        "02_STATIC",
        "03_ACTIVE",
        "04_TEST",
        "05_BUILD",
        "06_LOGS"
    ]
    
    for folder in folders:
        create_directory(folder)
    
    # Step 2: Create initial documents with AI permission headers
    create_file("00_DOCS/README.md", f"""<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
# {project_name}""")
    
    # Step 3: Create config files
    create_file("01_CONFIG/config.dev.yml", """# ⚠️ AI PERMISSION: NO-MODIFY
env: development""")
    
    # Step 4: Create first code file
    templates = {
        'web': "001_FE_App-Main_C_Component_DEV.jsx",
        'api': "001_BE_Server-Init_X_Bootstrap_DEV.py",
        'ml': "001_ML_Model-Init_C_Pipeline_DEV.py"
    }
    
    first_file = templates.get(project_type, templates['web'])
    create_file(f"03_ACTIVE/{first_file}", get_template(project_type))
    
    return {'status': 'success'}
```

---

## Part 4: External File Management (v5.0.2)

### 📦 External Dependency Handling

```python
def handle_external_file(url, vendor, version, file_type='JS'):
    """
    Process external files with EXTERNAL_ prefix
    """
    filename = f"EXTERNAL_{file_type}_{vendor}_{version}.{get_extension(url)}"
    filepath = f"02_STATIC/{filename}"
    
    download_file(url, filepath)
    sha256_hash = calculate_sha256(filepath)
    
    update_dependencies_md({
        'file': filename,
        'version': version,
        'vendor': vendor,
        'url': url,
        'sha256': sha256_hash
    })
    
    return {'path': filepath}
```

### 🔒 Security Requirements

```python
def verify_external_file(filepath, expected_hash=None):
    """
    Verify integrity of external files
    """
    current_hash = calculate_sha256(filepath)
    
    if expected_hash and expected_hash != current_hash:
        raise SecurityError(f"Hash mismatch for {filepath}")
    
    return {'verified': True, 'hash': current_hash}
```

---

## 📚 Reference

- Main Document: [AI_NAMING_CONVENTION_FINAL.md](../AI_NAMING_CONVENTION_FINAL.md)
- Human Guide: [HUMAN_GUIDE_FINAL.md](../02-human-guides/HUMAN_GUIDE_FINAL.md)

---

**Version**: v5.0.2  
**Updated**: October 14, 2025  
**For**: AI Systems, Automation Tools, CI/CD Pipelines
