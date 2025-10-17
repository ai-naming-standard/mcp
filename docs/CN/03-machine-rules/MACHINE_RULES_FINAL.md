# 🤖 Machine Rules - AI 시스템 명세 v4+v5 통합본

## 📌 이 문서의 목적
AI 시스템이 이해하고 실행해야 할 기술적 규칙과 명세

---

## Part 1: AI Instructions (AI 실행 지침)

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
      - "ASSET_background.jpg"
  
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
    - "003_TEST_Full-Flow_E2E_PROD.test.ts"
  
  AI_TEST_GENERATION:
    - Auto-generate test index matching source file
    - Create test file when creating source file
    - Link tests to source via index number
```

### 📊 Data Structures

```typescript
interface NamingConvention {
  index: Index;
  layer: Layer;
  domain: string;
  feature: string;
  action: Action;
  detail: string;
  environment: Environment;
  extension: string;
}

type Index = 
  | string  // "001"
  | DecimalIndex  // "001.1"
  | DependencyIndex  // "001-1"
  | ParallelIndex  // "001a"
  | SubordinateIndex;  // "001s1"

enum Layer {
  FE = "Frontend",
  BE = "Backend",
  DB = "Database",
  API = "API Gateway",
  ML = "Machine Learning",
  INFRA = "Infrastructure",
  SH = "Shared"
}

enum Action {
  C = "Create",
  R = "Read",
  U = "Update",
  D = "Delete",
  V = "Validate",
  X = "Execute",
  S = "Send",
  T = "Transform",
  G = "Generate"
}

enum Environment {
  DEV = "Development",
  STG = "Staging",
  PROD = "Production",
  COMMON = "Common"
}
```

### 🔄 Processing Pipeline

```python
class FileProcessor:
    """AI processing pipeline for file operations"""
    
    def __init__(self):
        self.workspace = "03_ACTIVE"
        self.pattern = re.compile(r'(\d{3}[^_]*)_([^_]+)_([^_]+)_([^_]+)_([^_]+)_([^_]+)\.(.+)')
    
    def validate_filename(self, filename: str) -> bool:
        """Validate against naming convention"""
        return bool(self.pattern.match(filename))
    
    def parse_filename(self, filename: str) -> dict:
        """Extract components from filename"""
        match = self.pattern.match(filename)
        if not match:
            raise ValueError(f"Invalid filename: {filename}")
        
        return {
            'index': match.group(1),
            'layer': match.group(2),
            'domain_feature': match.group(3),
            'action': match.group(4),
            'detail': match.group(5),
            'environment': match.group(6),
            'extension': match.group(7)
        }
    
    def get_execution_order(self, files: list) -> list:
        """Sort files by execution order"""
        def sort_key(filename):
            parts = self.parse_filename(filename)
            index = parts['index']
            
            # Handle special indices
            base = re.match(r'\d+', index).group()
            suffix = index[len(base):]
            
            # Priority: base number, then -, then ., then letters
            priority = {'-': 1, '.': 2, 'a': 3, 'b': 4, 'c': 5, 's': 6}
            suffix_priority = priority.get(suffix[0] if suffix else 'z', 9)
            
            return (int(base), suffix_priority, suffix)
        
        return sorted(files, key=sort_key)
    
    def suggest_next_index(self, domain: str, layer: str) -> str:
        """Suggest next available index"""
        existing = self.list_files(domain, layer)
        if not existing:
            return "001"
        
        indices = [self.parse_filename(f)['index'] for f in existing]
        last_base = max([int(re.match(r'\d+', i).group()) for i in indices])
        
        return str(last_base + 1).zfill(3)
```

### 🔗 Relationship Manager

```python
class RelationshipManager:
    """Manage file relationships"""
    
    @staticmethod
    def create_dependency(base_index: str, step: int) -> str:
        """Create dependency index (sequential execution)"""
        return f"{base_index}-{step}"
    
    @staticmethod
    def create_parallel(base_index: str, branch: str) -> str:
        """Create parallel index (concurrent execution)"""
        return f"{base_index}{branch}"  # 001a, 001b, 001c
    
    @staticmethod
    def create_subordinate(base_index: str, child: int) -> str:
        """Create subordinate index (parent-child)"""
        return f"{base_index}s{child}"
    
    def get_related_files(self, base_file: str) -> dict:
        """Find all related files"""
        base_index = self.parse_filename(base_file)['index']
        base_number = re.match(r'\d+', base_index).group()
        
        related = {
            'dependencies': [],  # 001-1, 001-2
            'parallels': [],     # 001a, 001b
            'subordinates': [],  # 001s1, 001s2
            'variants': []       # 001.1, 001.2
        }
        
        for file in self.list_all_files():
            index = self.parse_filename(file)['index']
            if index.startswith(base_number):
                if '-' in index:
                    related['dependencies'].append(file)
                elif re.match(f'{base_number}[a-z]', index):
                    related['parallels'].append(file)
                elif 's' in index:
                    related['subordinates'].append(file)
                elif '.' in index:
                    related['variants'].append(file)
        
        return related
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
    create_file("00_DOCS/API.md", """<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
# API Documentation""")
    
    # Step 3: Create config files with AI permission headers
    create_file("01_CONFIG/config.dev.yml", """# ⚠️ AI PERMISSION: NO-MODIFY
env: development""")
    create_file("01_CONFIG/config.prod.yml", """# ⚠️ AI PERMISSION: NO-MODIFY
env: production""")
    
    # Step 4: Create first code file based on project type
    templates = {
        'web': "001_FE_App-Main_C_Component_DEV.jsx",
        'api': "001_BE_Server-Init_X_Bootstrap_DEV.py",
        'cli': "001_SH_CLI-Main_X_Entry_COMMON.py",
        'ml': "001_ML_Model-Init_C_Pipeline_DEV.py"
    }
    
    first_file = templates.get(project_type, templates['web'])
    create_file(f"03_ACTIVE/{first_file}", get_template(project_type))
    
    # Step 5: Setup git
    create_file(".gitignore", """
01_CONFIG/*.env
01_CONFIG/secrets.*
05_BUILD/
06_LOGS/
node_modules/
__pycache__/
*.log
.env
    """)
    
    return {
        'status': 'success',
        'structure': folders,
        'first_file': first_file
    }
```

### 🔨 Build Pipeline

```yaml
BUILD_PIPELINE:
  input: "03_ACTIVE/*"
  output: "05_BUILD/"
  
  stages:
    - validate:
        check: naming_convention
        enforce: true
        
    - compile:
        frontend:
          source: "03_ACTIVE/*_FE_*"
          target: "05_BUILD/frontend/"
          
        backend:
          source: "03_ACTIVE/*_BE_*"
          target: "05_BUILD/backend/"
          
    - bundle:
        dev:
          files: "*_DEV.*"
          output: "05_BUILD/dev/"
          
        staging:
          files: "*_STG.*"
          output: "05_BUILD/staging/"
          
        production:
          files: "*_PROD.*"
          output: "05_BUILD/production/"
          
    - deploy:
        environments:
          - DEV: immediate
          - STG: approval_required
          - PROD: manual_only
```

### 🧪 Test Automation

```python
def auto_generate_tests(file_path: str):
    """
    Automatically generate test files for 03_ACTIVE files
    Following indexed naming convention
    """
    components = parse_filename(file_path)
    
    # Use indexed naming for test files
    test_file = f"{components['index']}_TEST_{components['domain_feature']}_Unit_{components['environment']}.test.py"
    test_path = f"04_TEST/{test_file}"
    
    test_content = f"""
import pytest
from {file_path} import *

class Test_{components['domain']}{components['feature']}:
    \"\"\"Auto-generated test for {file_path}\"\"\"
    
    def test_{components['action'].lower()}_operation(self):
        # Test {components['action']} operation
        assert True  # TODO: Implement
    
    def test_validation(self):
        # Test validation logic
        assert True  # TODO: Implement
    
    def test_error_handling(self):
        # Test error cases
        assert True  # TODO: Implement
"""
    
    create_file(test_path, test_content)
    return test_path
```

---

## Part 4: AI Response Templates

### 📝 Standard Responses

```python
RESPONSE_TEMPLATES = {
    'file_created': """
✅ Created: {filepath}
- Layer: {layer}
- Domain: {domain}
- Action: {action}
- Environment: {environment}
    """,
    
    'validation_error': """
❌ Invalid filename: {filename}
Expected pattern: [Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
Suggestion: {suggestion}
    """,
    
    'permission_denied': """
⚠️ Permission denied: {folder}
AI cannot modify {folder}. This folder is {permission}.
Please work in 03_ACTIVE instead.
    """,
    
    'structure_report': """
📊 Project Structure:
- Files in 03_ACTIVE: {active_count}
- Frontend files: {fe_count}
- Backend files: {be_count}
- Database files: {db_count}
- Test coverage: {test_coverage}%
    """
}
```

### 🔍 Query Handlers

```python
def handle_ai_query(query: str) -> str:
    """
    Process natural language queries about the project
    """
    patterns = {
        r"list.*files": list_all_files,
        r"find.*login": lambda: search_files("Login"),
        r"show.*structure": show_project_structure,
        r"create.*(\w+)": create_file_from_description,
        r"validate.*naming": validate_all_files,
        r"suggest.*next": suggest_next_file,
        r"related.*to": find_related_files
    }
    
    for pattern, handler in patterns.items():
        if re.search(pattern, query.lower()):
            return handler()
    
    return "Query not understood. Please be more specific."
```

---

## Part 5: Validation & Enforcement

### ✅ Validation Rules

```python
class NamingValidator:
    """Enforce naming convention"""
    
    def __init__(self):
        self.errors = []
        self.warnings = []
    
    def validate_project(self) -> dict:
        """Validate entire project structure"""
        results = {
            'valid': True,
            'errors': [],
            'warnings': [],
            'suggestions': []
        }
        
        # Check folder structure
        required_folders = ["00_DOCS", "01_CONFIG", "02_STATIC", 
                          "03_ACTIVE", "04_TEST", "05_BUILD", "06_LOGS"]
        
        for folder in required_folders:
            if not os.path.exists(folder):
                results['errors'].append(f"Missing folder: {folder}")
                results['valid'] = False
        
        # Check 03_ACTIVE files
        active_files = glob.glob("03_ACTIVE/*")
        for file in active_files:
            if not self.validate_filename(os.path.basename(file)):
                results['errors'].append(f"Invalid name: {file}")
                results['suggestions'].append(self.suggest_correction(file))
                results['valid'] = False
        
        # Check for orphaned files
        if glob.glob("*.js") or glob.glob("*.py"):
            results['warnings'].append("Files found outside folder structure")
        
        return results
    
    def suggest_correction(self, bad_filename: str) -> str:
        """Suggest correct naming"""
        # Analyze the file
        ext = bad_filename.split('.')[-1]
        
        # Guess components
        if 'controller' in bad_filename.lower():
            layer, detail = 'FE', 'Controller'
        elif 'service' in bad_filename.lower():
            layer, detail = 'BE', 'Service'
        elif 'model' in bad_filename.lower():
            layer, detail = 'DB', 'Model'
        else:
            layer, detail = 'SH', 'Module'
        
        # Extract potential domain
        domain = bad_filename.split('_')[0].split('.')[0].title()
        
        # Generate suggestion
        suggestion = f"001_{layer}_{domain}-Main_{action}_{detail}_DEV.{ext}"
        
        return suggestion
```

---

## Part 6: Automated Project Setup Scripts

### 🛠️ Initialize Script

```python
#!/usr/bin/env python3
# SCRIPT_init_structure.py
"""AI-compatible project structure initializer"""

import os
import json
import yaml
from datetime import datetime

def create_ai_project_structure(project_name, project_type="web"):
    """
    Create complete folder structure with AI restrictions
    """
    
    # Define folder structure with permissions
    folders = {
        "00_DOCS": {"permission": "READ_ONLY", "header": "⚠️ AI PERMISSION: NO-MODIFY"},
        "01_CONFIG": {"permission": "NO_ACCESS", "header": "⚠️ AI PERMISSION: NO-MODIFY"},
        "02_STATIC": {"permission": "READ_ADD", "header": "Use ASSET_ prefix for assets"},
        "03_ACTIVE": {"permission": "FULL_ACCESS", "header": "Primary AI workspace"},
        "04_TEST": {"permission": "CREATE_MODIFY", "header": "Use indexed naming"},
        "05_BUILD": {"permission": "CREATE_ONLY", "header": "Build output only"},
        "06_LOGS": {"permission": "WRITE_ONLY", "header": "Logs only"}
    }
    
    # Create folders
    for folder, config in folders.items():
        os.makedirs(folder, exist_ok=True)
        
        # Create permission file
        perm_file = f"{folder}/.ai_permission"
        with open(perm_file, 'w') as f:
            f.write(f"Permission: {config['permission']}\n")
            f.write(f"Note: {config['header']}\n")
    
    # Create initial files based on project type
    if project_type == "web":
        create_web_project_files(project_name)
    elif project_type == "api":
        create_api_project_files(project_name)
    elif project_type == "ml":
        create_ml_project_files(project_name)
    
    # Create AI instruction file
    with open(".ai_instructions.md", 'w') as f:
        f.write("""
# AI Development Instructions

## Folder Permissions
- 00_DOCS: ⚠️ NO-MODIFY
- 01_CONFIG: ⚠️ NO-MODIFY
- 02_STATIC: Use ASSET_ prefix
- 03_ACTIVE: Your primary workspace
- 04_TEST: Use indexed naming (001_TEST_*)
- 05_BUILD: Output only
- 06_LOGS: Logs only

## Naming Convention
Pattern: [Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]

## Dependencies
Use [Deps] markers for:
- Sequential: 001-1, 001-2
- Parallel: 001a, 001b
- Subordinate: 001s1, 001s2
        """)
    
    print(f"✅ Project '{project_name}' initialized successfully!")
    return True

if __name__ == "__main__":
    import sys
    project_name = sys.argv[1] if len(sys.argv) > 1 else "my-project"
    project_type = sys.argv[2] if len(sys.argv) > 2 else "web"
    create_ai_project_structure(project_name, project_type)
```

### 🔄 Migration Script

```bash
#!/bin/bash
# SCRIPT_migrate_to_v5.sh
# Migrate existing projects to v5 structure

echo "Starting migration to v5 structure..."

# Create v5 folders
mkdir -p {00_DOCS,01_CONFIG,02_STATIC,03_ACTIVE,04_TEST,05_BUILD,06_LOGS}

# Move existing files
for file in *.{js,py,ts,jsx,tsx,sql}; do
    if [ -f "$file" ]; then
        echo "Moving $file to 03_ACTIVE/"
        mv "$file" "03_ACTIVE/"
    fi
done

# Move static assets
for file in *.{png,jpg,jpeg,gif,svg,ico,css,html}; do
    if [ -f "$file" ]; then
        new_name="ASSET_$file"
        echo "Moving $file to 02_STATIC/$new_name"
        mv "$file" "02_STATIC/$new_name"
    fi
done

# Move configs
for file in *.{yml,yaml,json,env,config}; do
    if [ -f "$file" ]; then
        echo "Moving $file to 01_CONFIG/"
        mv "$file" "01_CONFIG/"
        echo "# ⚠️ AI PERMISSION: NO-MODIFY" | cat - "01_CONFIG/$file" > temp && mv temp "01_CONFIG/$file"
    fi
done

# Move tests
for file in *.test.{js,py,ts}; do
    if [ -f "$file" ]; then
        echo "Moving $file to 04_TEST/"
        mv "$file" "04_TEST/"
    fi
done

echo "✅ Migration complete!"
```

---

## Part 7: Performance Optimization

### ⚡ Indexing Strategy

```python
class FileIndex:
    """Optimize file access performance"""
    
    def __init__(self):
        self.index = {}
        self.rebuild_index()
    
    def rebuild_index(self):
        """Build index for O(1) lookup"""
        self.index = {
            'by_layer': {},
            'by_domain': {},
            'by_action': {},
            'by_env': {},
            'by_index': {}
        }
        
        for file in glob.glob("03_ACTIVE/*"):
            components = parse_filename(file)
            
            # Index by different keys
            self._add_to_index('by_layer', components['layer'], file)
            self._add_to_index('by_domain', components['domain'], file)
            self._add_to_index('by_action', components['action'], file)
            self._add_to_index('by_env', components['environment'], file)
            self._add_to_index('by_index', components['index'], file)
    
    def query(self, **filters) -> list:
        """Fast querying with filters"""
        results = None
        
        for key, value in filters.items():
            index_key = f"by_{key}"
            if index_key in self.index:
                matches = set(self.index[index_key].get(value, []))
                if results is None:
                    results = matches
                else:
                    results = results.intersection(matches)
        
        return list(results) if results else []
```

---

## Part 8: External File Management (v5.0.2)

### 📦 External Dependency Handling

```python
def handle_external_file(url, vendor, version, file_type='JS'):
    """
    Process external files with EXTERNAL_ prefix
    """
    # Generate standardized name
    filename = f"EXTERNAL_{file_type}_{vendor}_{version}.{get_extension(url)}"
    filepath = f"02_STATIC/{filename}"
    
    # Download and verify
    download_file(url, filepath)
    sha256_hash = calculate_sha256(filepath)
    
    # Update dependency manifest
    update_dependencies_md({
        'file': filename,
        'version': version,
        'vendor': vendor,
        'url': url,
        'sha256': sha256_hash,
        'date': datetime.now().isoformat(),
        'license': detect_license(filepath)
    })
    
    return {
        'path': filepath,
        'import': f"import {vendor} from '../../02_STATIC/{filename}';"
    }
```

### 🔄 Version Update Strategy

```python
def update_external_version(current_file, new_version, new_url):
    """
    Update external file version with deprecation
    """
    # Parse current filename
    match = re.match(r'EXTERNAL_([^_]+)_([^_]+)_v([\d.]+)\.(.+)', current_file)
    if not match:
        raise ValueError("Invalid external file format")
    
    file_type, vendor, old_version, ext = match.groups()
    
    # Mark old as deprecated
    old_deprecated = f"EXTERNAL_{file_type}_{vendor}_v{old_version}_DEPRECATED.{ext}"
    os.rename(f"02_STATIC/{current_file}", f"02_STATIC/{old_deprecated}")
    
    # Download new version
    new_file = f"EXTERNAL_{file_type}_{vendor}_{new_version}.{ext}"
    handle_external_file(new_url, vendor, new_version, file_type)
    
    # Update all imports in 03_ACTIVE
    update_imports_in_active(current_file, new_file)
    
    return {
        'deprecated': old_deprecated,
        'current': new_file,
        'imports_updated': True
    }
```

### 📄 Dependency Manifest Structure

```markdown
# 00_DOCS/EXTERNAL_DEPENDENCIES.md

| File | Version | Vendor | URL | SHA256 | Date | License |
|------|---------|--------|-----|--------|------|---------|
| EXTERNAL_JS_TossPayments_v1.2.0.min.js | v1.2.0 | Toss | https://... | abc... | 2025-10-14 | MIT |
```

### 🤖 AI Processing Rules

```yaml
EXTERNAL_FILE_RULES:
  location: "02_STATIC/EXTERNAL_*"
  
  naming:
    pattern: "EXTERNAL_[Type]_[Vendor]_[Version].[ext]"
    types: [JS, SDK, JAR, BIN, ZIP, LIB, MODULE]
    version: "Required in vX.Y.Z format"
  
  operations:
    download: 
      - "Save to 02_STATIC with EXTERNAL_ prefix"
      - "Calculate SHA256 hash"
      - "Record in EXTERNAL_DEPENDENCIES.md"
    
    modify: "FORBIDDEN - External files are immutable"
    
    update:
      - "Keep old with _DEPRECATED suffix"
      - "Download new version"
      - "Update all imports"
      - "Update manifest"
    
    delete: "FORBIDDEN - Keep deprecated versions"
  
  import_syntax:
    javascript: "import {vendor} from '../../02_STATIC/EXTERNAL_{file}';"
    python: "from ...02_STATIC import EXTERNAL_{file}"
    java: "import static 02_STATIC.EXTERNAL_{file};"
```

### 🔒 Security Requirements

```python
def verify_external_file(filepath, expected_hash=None):
    """
    Verify integrity of external files
    """
    # Calculate current hash
    current_hash = calculate_sha256(filepath)
    
    # Check against manifest
    manifest_entry = get_manifest_entry(filepath)
    
    if manifest_entry['sha256'] != current_hash:
        raise SecurityError(f"Hash mismatch for {filepath}")
    
    if expected_hash and expected_hash != current_hash:
        raise SecurityError(f"Expected hash mismatch for {filepath}")
    
    # Check for known vulnerabilities
    check_vulnerability_database(filepath, manifest_entry['version'])
    
    return {
        'verified': True,
        'hash': current_hash,
        'date': datetime.now().isoformat()
    }
```

---

## 📚 Reference

- Main Document: [AI_NAMING_CONVENTION_FINAL.md](../AI_NAMING_CONVENTION_FINAL.md)
- Human Guide: [HUMAN_GUIDE_FINAL.md](../02-human-guides/HUMAN_GUIDE_FINAL.md)

---

**Version**: v5.0.2  
**Updated**: 2025.10.14  
**For**: AI Systems, Automation Tools, CI/CD Pipelines
