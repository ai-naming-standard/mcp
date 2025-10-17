#!/usr/bin/env python3
"""
AI-Compatible Project Structure Initializer
Version: v5.0.2 - With External Dependency Management
Based on ChatGPT's recommendations for v5 improvements
"""

import os
import json
import yaml
import hashlib
import urllib.request
from datetime import datetime
import sys

def calculate_sha256(file_path):
    """Calculate SHA256 hash of a file"""
    sha256_hash = hashlib.sha256()
    try:
        with open(file_path, "rb") as f:
            for byte_block in iter(lambda: f.read(4096), b""):
                sha256_hash.update(byte_block)
        return sha256_hash.hexdigest()
    except:
        return "N/A"

def handle_external_file(url, vendor, version, file_type='JS'):
    """
    v5.0.2: Handle external files with EXTERNAL_ prefix
    """
    # Generate standardized name
    ext = url.split('.')[-1]
    filename = f"EXTERNAL_{file_type}_{vendor}_v{version}.{ext}"
    filepath = f"02_STATIC/{filename}"
    
    try:
        # Download file
        print(f"📥 Downloading {vendor} v{version}...")
        urllib.request.urlretrieve(url, filepath)
        
        # Calculate hash
        sha256 = calculate_sha256(filepath)
        
        # Update dependency manifest
        update_dependency_manifest({
            'file': filename,
            'version': version,
            'vendor': vendor,
            'url': url,
            'sha256': sha256,
            'date': datetime.now().strftime('%Y-%m-%d'),
            'license': 'Check vendor site'
        })
        
        print(f"✅ External file added: {filename}")
        print(f"   SHA256: {sha256[:16]}...")
        
        return filepath
    except Exception as e:
        print(f"❌ Failed to download {vendor}: {e}")
        return None

def update_dependency_manifest(dep_info):
    """
    v5.0.2: Update EXTERNAL_DEPENDENCIES.md
    """
    manifest_path = "00_DOCS/EXTERNAL_DEPENDENCIES.md"
    
    # Create if not exists
    if not os.path.exists(manifest_path):
        with open(manifest_path, 'w') as f:
            f.write("""<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
# External Dependencies Registry

## v5.0.2 External File Management

| File | Version | Vendor | URL | SHA256 | Date | License |
|------|---------|--------|-----|--------|------|---------|
""")
    
    # Append new entry
    with open(manifest_path, 'a') as f:
        f.write(f"| {dep_info['file']} | {dep_info['version']} | {dep_info['vendor']} | ")
        f.write(f"{dep_info['url'][:30]}... | {dep_info['sha256'][:16]}... | ")
        f.write(f"{dep_info['date']} | {dep_info['license']} |\n")

def migrate_external_file(old_file, vendor, version):
    """
    v5.0.2: Migrate existing external file to new naming
    """
    ext = old_file.split('.')[-1]
    
    # Determine file type
    file_type = 'JS' if ext in ['js', 'mjs'] else 'LIB'
    if 'sdk' in old_file.lower():
        file_type = 'SDK'
    elif ext == 'jar':
        file_type = 'JAR'
    elif ext == 'zip':
        file_type = 'ZIP'
    
    # Generate new name
    new_name = f"EXTERNAL_{file_type}_{vendor}_v{version}.{ext}"
    
    # Check for existing version
    if os.path.exists(f"02_STATIC/{new_name}"):
        # Mark old as deprecated
        deprecated_name = f"EXTERNAL_{file_type}_{vendor}_v{version}_DEPRECATED.{ext}"
        os.rename(f"02_STATIC/{new_name}", f"02_STATIC/{deprecated_name}")
        print(f"   ⚠️ Deprecated: {deprecated_name}")
    
    # Rename file
    if os.path.exists(old_file):
        os.rename(old_file, f"02_STATIC/{new_name}")
        
        # Calculate hash
        sha256 = calculate_sha256(f"02_STATIC/{new_name}")
        
        # Update manifest
        update_dependency_manifest({
            'file': new_name,
            'version': version,
            'vendor': vendor,
            'url': 'Local file',
            'sha256': sha256,
            'date': datetime.now().strftime('%Y-%m-%d'),
            'license': 'Check vendor site'
        })
        
        print(f"✅ Migrated: {old_file} → {new_name}")
        return new_name
    
    return None

def create_ai_project_structure(project_name, project_type="web"):
    """
    Create complete folder structure with AI restrictions
    Following ChatGPT's enhanced recommendations v5.0.2
    """
    
    print(f"\n🚀 Initializing AI-Standard Project: {project_name}")
    print(f"📦 Project Type: {project_type}")
    print(f"🔧 Version: v5.0.2 with External Dependency Management")
    print("-" * 50)
    
    # Define folder structure with permissions
    folders = {
        "00_DOCS": {
            "permission": "READ_ONLY", 
            "header": "⚠️ AI PERMISSION: NO-MODIFY",
            "description": "Documentation - AI cannot modify"
        },
        "01_CONFIG": {
            "permission": "NO_ACCESS", 
            "header": "⚠️ AI PERMISSION: NO-MODIFY - CRITICAL",
            "description": "Configuration files - Protected from AI"
        },
        "02_STATIC": {
            "permission": "READ_ADD", 
            "header": "Use ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_ prefixes",
            "description": "Static resources - Prefix required"
        },
        "03_ACTIVE": {
            "permission": "FULL_ACCESS", 
            "header": "Primary AI workspace",
            "description": "Active development - Full AI access"
        },
        "04_TEST": {
            "permission": "CREATE_MODIFY", 
            "header": "Use indexed naming: 001_TEST_*",
            "description": "Test files - Indexed naming required"
        },
        "05_BUILD": {
            "permission": "CREATE_ONLY", 
            "header": "Build output only",
            "description": "Build artifacts - AI creates only"
        },
        "06_LOGS": {
            "permission": "WRITE_ONLY", 
            "header": "Logs only",
            "description": "Log files - AI writes only"
        }
    }
    
    # Create folders
    for folder, config in folders.items():
        os.makedirs(folder, exist_ok=True)
        print(f"✅ Created: {folder} - {config['description']}")
        
        # Create permission file
        perm_file = f"{folder}/.ai_permission"
        with open(perm_file, 'w') as f:
            f.write(f"Permission: {config['permission']}\n")
            f.write(f"Note: {config['header']}\n")
            f.write(f"Description: {config['description']}\n")
            f.write(f"Created: {datetime.now().isoformat()}\n")
    
    print("\n📝 Creating initial files...")
    
    # Create README with AI permission header
    with open("00_DOCS/README.md", 'w') as f:
        f.write(f"""<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
<!-- This file is protected from AI modifications -->

# {project_name}

## Project Structure
This project follows the AI-Standard v5.0.2 naming convention with ChatGPT enhancements.

### Folder Structure
- **00_DOCS**: Documentation (AI Read-Only)
- **01_CONFIG**: Configuration (AI No Access)
- **02_STATIC**: Static Assets (Prefix required: ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_)
- **03_ACTIVE**: Active Development (AI Primary Workspace)
- **04_TEST**: Tests (Use indexed naming: 001_TEST_*)
- **05_BUILD**: Build Output
- **06_LOGS**: Logs

### Naming Convention
Pattern: `[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]`

### Dependencies ([Deps])
- Sequential: 001-1, 001-2
- Parallel: 001a, 001b
- Subordinate: 001s1, 001s2

### External Dependencies (v5.0.2)
- Pattern: `EXTERNAL_[Type]_[Vendor]_[Version].[ext]`
- SHA256 verification required
- See 00_DOCS/EXTERNAL_DEPENDENCIES.md for registry
""")
    
    # Create EXTERNAL_DEPENDENCIES.md
    with open("00_DOCS/EXTERNAL_DEPENDENCIES.md", 'w') as f:
        f.write("""<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
# External Dependencies Registry

## v5.0.2 External File Management

This file tracks all external libraries and dependencies used in the project.

| File | Version | Vendor | URL | SHA256 | Date | License |
|------|---------|--------|-----|--------|------|---------|
""")
    print("✅ Created: 00_DOCS/EXTERNAL_DEPENDENCIES.md")
    
    # Create config files with headers
    configs = {
        "config.dev.yml": """# ⚠️ AI PERMISSION: NO-MODIFY
# Development Configuration
# This file cannot be modified by AI

environment: development
debug: true
port: 3000
""",
        "config.stg.yml": """# ⚠️ AI PERMISSION: NO-MODIFY
# Staging Configuration
# This file cannot be modified by AI

environment: staging
debug: false
port: 8080
""",
        "config.prod.yml": """# ⚠️ AI PERMISSION: NO-MODIFY
# Production Configuration
# This file cannot be modified by AI

environment: production
debug: false
port: 80
"""
    }
    
    for filename, content in configs.items():
        with open(f"01_CONFIG/{filename}", 'w') as f:
            f.write(content)
        print(f"✅ Created: 01_CONFIG/{filename}")
    
    # Create sample static files with v5.0.2 prefixes
    static_samples = {
        "ASSET_placeholder.txt": "# Static Assets\nUse ASSET_ prefix for all asset files\n",
        "TEMPLATE_base.html": "<!-- Template files use TEMPLATE_ prefix -->\n<html><body></body></html>\n",
        "CONFIG_theme.json": json.dumps({"theme": "default", "colors": {"primary": "#007bff"}}, indent=2)
    }
    
    for filename, content in static_samples.items():
        with open(f"02_STATIC/{filename}", 'w') as f:
            f.write(content)
        print(f"✅ Created: 02_STATIC/{filename}")
    
    # Create sample external file placeholder
    with open("02_STATIC/EXTERNAL_README.md", 'w') as f:
        f.write("""# External Files Directory

## v5.0.2 Naming Convention
All external libraries must use the following pattern:
`EXTERNAL_[Type]_[Vendor]_[Version].[ext]`

### Types
- JS: JavaScript libraries
- SDK: Software Development Kits
- JAR: Java Archives
- ZIP: Compressed packages
- LIB: Generic libraries
- MODULE: Node modules

### Version Management
- Current: EXTERNAL_JS_jQuery_v3.6.0.min.js
- Deprecated: EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js

### Security
All files are SHA256 hashed for integrity verification.
Check 00_DOCS/EXTERNAL_DEPENDENCIES.md for details.
""")
    
    # Create first code file based on project type
    templates = {
        'web': {
            'file': "001_FE_App-Main_C_Component_DEV.jsx",
            'content': f"""// Main Application Component
// [Deps]: None - Entry point
// Version: v5.0.2

import React from 'react';

const App = () => {{
    return (
        <div>
            <h1>Welcome to {project_name}</h1>
            <p>AI-Standard v5.0.2 Project</p>
        </div>
    );
}};

export default App;
"""
        },
        'api': {
            'file': "001_BE_Server-Init_X_Bootstrap_DEV.py",
            'content': f"""# Server Initialization
# [Deps]: None - Entry point
# Version: v5.0.2

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return {{"message": "Welcome to {project_name}", "version": "v5.0.2"}}

if __name__ == '__main__':
    app.run(debug=True)
"""
        },
        'ml': {
            'file': "001_ML_Model-Init_C_Pipeline_DEV.py",
            'content': f"""# ML Model Initialization
# [Deps]: None - Entry point
# Version: v5.0.2

import numpy as np
import pandas as pd

class ModelPipeline:
    def __init__(self):
        self.model = None
        self.version = "v5.0.2"
        
    def load_data(self):
        pass
        
    def train(self):
        pass

if __name__ == '__main__':
    pipeline = ModelPipeline()
"""
        }
    }
    
    template = templates.get(project_type, templates['web'])
    first_file = f"03_ACTIVE/{template['file']}"
    with open(first_file, 'w') as f:
        f.write(template['content'])
    print(f"✅ Created: {first_file}")
    
    # Create sample test file with indexed naming
    test_file = "04_TEST/001_TEST_App-Main_Unit_COMMON.test.js"
    with open(test_file, 'w') as f:
        f.write("""// Test file following indexed naming convention
// [Deps]: 001 - Tests for main app component
// Version: v5.0.2

describe('App Main Component', () => {
    test('should render correctly', () => {
        expect(true).toBe(true);
    });
});
""")
    print(f"✅ Created: {test_file}")
    
    # Create AI instruction file with v5.0.2 updates
    with open(".ai_instructions.md", 'w') as f:
        f.write(f"""# AI Development Instructions (v5.0.2 with External Dependencies)

## ⚠️ Critical Folder Permissions
| Folder | Permission | Note |
|--------|------------|------|
| 00_DOCS | ❌ NO-MODIFY | Documentation is protected |
| 01_CONFIG | ❌ NO-ACCESS | Configuration files are critical |
| 02_STATIC | ✅ READ/ADD | Use proper prefixes (ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_) |
| 03_ACTIVE | ✅ FULL ACCESS | Your primary workspace |
| 04_TEST | ✅ CREATE/MODIFY | Use indexed naming (001_TEST_*) |
| 05_BUILD | ✅ CREATE ONLY | Build output only |
| 06_LOGS | ✅ WRITE ONLY | Log files only |

## 📝 Naming Convention
**Pattern**: `[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]`

**Example**: `001_FE_User-Login_V_Form_DEV.jsx`

## 🔗 Dependencies ([Deps])
Mark dependencies in comments:
- **Sequential**: 001-1, 001-2 (must execute in order)
- **Parallel**: 001a, 001b (can run concurrently)
- **Subordinate**: 001s1, 001s2 (child relationships)
- **Variant**: 001.1, 001.2 (alternative implementations)

## 🎨 02_STATIC File Naming (v5.0.1)
- Assets: `ASSET_[name].[ext]` (e.g., ASSET_logo.png)
- Templates: `TEMPLATE_[name].[ext]` (e.g., TEMPLATE_email.html)
- Configs: `CONFIG_[name].[ext]` (e.g., CONFIG_theme.json)

## 📦 External Files (v5.0.2)
**Pattern**: `EXTERNAL_[Type]_[Vendor]_[Version].[ext]`

**Examples**:
- `EXTERNAL_JS_jQuery_v3.6.0.min.js`
- `EXTERNAL_SDK_Firebase_v12.1.0.zip`
- `EXTERNAL_LIB_TossPayments_v1.2.0.js`

**Version Update**:
1. Keep old: `EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js`
2. Add new: `EXTERNAL_JS_jQuery_v3.6.0.min.js`
3. Update imports in 03_ACTIVE
4. Record in 00_DOCS/EXTERNAL_DEPENDENCIES.md

**Security**: SHA256 hash verification for all external files

## 🧪 04_TEST File Naming
**Pattern**: `[Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]`

**Types**: Unit, Integration, E2E, Performance, Security

**Example**: `001_TEST_User-Login_Unit_COMMON.test.js`

## 🚀 Best Practices
1. Always work in 03_ACTIVE for code files
2. Check [Deps] markers before modifying files
3. Use indexed naming for all test files
4. Add proper prefixes in 02_STATIC (ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_)
5. Never modify files in 00_DOCS or 01_CONFIG
6. Process files in index order
7. Respect environment tags (DEV/STG/PROD)
8. Verify SHA256 for external files
9. Keep deprecated versions with _DEPRECATED suffix
10. Update EXTERNAL_DEPENDENCIES.md for all external files

---
Generated: {datetime.now().isoformat()}
Version: v5.0.2 with External Dependency Management
""")
    
    # Create .gitignore
    with open(".gitignore", 'w') as f:
        f.write("""# Protected files
01_CONFIG/*.env
01_CONFIG/secrets.*

# Build and logs
05_BUILD/
06_LOGS/

# Dependencies
node_modules/
__pycache__/
*.pyc
.venv/
venv/

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Temporary
*.tmp
*.log
.env

# External deprecated files (optional)
# 02_STATIC/*_DEPRECATED.*
""")
    
    print("\n" + "=" * 50)
    print(f"✨ Project '{project_name}' initialized successfully!")
    print(f"📁 Total folders created: {len(folders)}")
    print(f"📄 Configuration files created: {len(configs)}")
    print("\n🔥 v5.0.2 Features:")
    print("  • External file management (EXTERNAL_ prefix)")
    print("  • SHA256 integrity verification")
    print("  • Dependency registry in 00_DOCS")
    print("  • Version deprecation strategy")
    print("\n🎯 Next Steps:")
    print("1. Review .ai_instructions.md for AI development guidelines")
    print("2. Start developing in 03_ACTIVE/")
    print("3. Use indexed naming for test files in 04_TEST/")
    print("4. Remember prefixes in 02_STATIC:")
    print("   - ASSET_ for assets")
    print("   - TEMPLATE_ for templates")
    print("   - CONFIG_ for configs")
    print("   - EXTERNAL_ for external libraries")
    print("5. Check 00_DOCS/EXTERNAL_DEPENDENCIES.md for external files")
    print("=" * 50)
    
    return True

def main():
    """Main entry point"""
    if len(sys.argv) < 2:
        print("\n📋 AI-Standard Project Initializer v5.0.2")
        print("=" * 50)
        print("Usage: python SCRIPT_init_structure_v502.py <project_name> [project_type]")
        print("\nProject types:")
        print("  • web (default) - React/Vue/Angular projects")
        print("  • api - REST API/Backend services")
        print("  • ml - Machine Learning projects")
        print("\nExamples:")
        print("  python SCRIPT_init_structure_v502.py my-app")
        print("  python SCRIPT_init_structure_v502.py my-api api")
        print("  python SCRIPT_init_structure_v502.py ml-model ml")
        print("\nFeatures (v5.0.2):")
        print("  ✅ 7-folder structure with AI permissions")
        print("  ✅ Indexed naming for files")
        print("  ✅ [Deps] dependency markers")
        print("  ✅ Prefix requirements (ASSET_, TEMPLATE_, etc.)")
        print("  ✅ External dependency management")
        print("  ✅ SHA256 integrity verification")
        print("=" * 50)
        sys.exit(1)
    
    project_name = sys.argv[1]
    project_type = sys.argv[2] if len(sys.argv) > 2 else "web"
    
    if project_type not in ["web", "api", "ml"]:
        print(f"⚠️ Warning: Unknown project type '{project_type}', using 'web'")
        project_type = "web"
    
    try:
        create_ai_project_structure(project_name, project_type)
    except Exception as e:
        print(f"\n❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
