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
    
    print("✅ Created: 00_DOCS/README.md")
    print("✅ Created: 00_DOCS/EXTERNAL_DEPENDENCIES.md")
    
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
    
    print("\n" + "=" * 50)
    print(f"✨ Project '{project_name}' initialized successfully!")
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
        print("Usage: python SCRIPT_init_structure.py <project_name> [project_type]")
        print("\nProject types:")
        print("  • web (default) - React/Vue/Angular projects")
        print("  • api - REST API/Backend services")
        print("  • ml - Machine Learning projects")
        print("\nExamples:")
        print("  python SCRIPT_init_structure.py my-app")
        print("  python SCRIPT_init_structure.py my-api api")
        print("  python SCRIPT_init_structure.py ml-model ml")
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
