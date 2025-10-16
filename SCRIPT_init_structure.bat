@echo off
REM AI-Compatible Project Structure Initializer (Windows Batch Version)
REM Version: v5.0.2 - With External Dependency Management
REM Based on ChatGPT's recommendations for v5 improvements

setlocal enabledelayedexpansion

REM Check if project name is provided
if "%~1"=="" (
    echo.
    echo 📋 AI-Standard Project Initializer v5.0.2 (Windows Batch)
    echo ==================================================
    echo Usage: SCRIPT_init_structure.bat ^<project_name^> [project_type]
    echo.
    echo Project types:
    echo   • web (default) - React/Vue/Angular projects
    echo   • api - REST API/Backend services
    echo   • ml - Machine Learning projects
    echo.
    echo Examples:
    echo   SCRIPT_init_structure.bat my-app
    echo   SCRIPT_init_structure.bat my-api api
    echo   SCRIPT_init_structure.bat ml-model ml
    echo.
    echo Features (v5.0.2):
    echo   ✅ 7-folder structure with AI permissions
    echo   ✅ Indexed naming for files
    echo   ✅ [Deps] dependency markers
    echo   ✅ Prefix requirements (ASSET_, TEMPLATE_, etc.)
    echo   ✅ External dependency management
    echo   ✅ SHA256 integrity verification
    echo ==================================================
    exit /b 1
)

set PROJECT_NAME=%~1
set PROJECT_TYPE=%~2
if "%PROJECT_TYPE%"=="" set PROJECT_TYPE=web

echo.
echo 🚀 Initializing AI-Standard Project: %PROJECT_NAME%
echo 📦 Project Type: %PROJECT_TYPE%
echo 🔧 Version: v5.0.2 with External Dependency Management
echo --------------------------------------------------

REM Create 7 standard folders
echo.
echo 📁 Creating folder structure...
mkdir 00_DOCS 2>nul
mkdir 01_CONFIG 2>nul
mkdir 02_STATIC 2>nul
mkdir 03_ACTIVE 2>nul
mkdir 04_TEST 2>nul
mkdir 05_BUILD 2>nul
mkdir 06_LOGS 2>nul

echo ✅ Created: 00_DOCS - Documentation (AI Read-Only)
echo ✅ Created: 01_CONFIG - Configuration (AI No Access - CRITICAL)
echo ✅ Created: 02_STATIC - Static Resources (Prefix required)
echo ✅ Created: 03_ACTIVE - Active Development (AI Primary Workspace)
echo ✅ Created: 04_TEST - Tests (Indexed naming required)
echo ✅ Created: 05_BUILD - Build Output
echo ✅ Created: 06_LOGS - Logs

REM Create permission files
echo.
echo 📝 Creating permission files...

echo Permission: READ_ONLY > 00_DOCS\.ai_permission
echo Note: ⚠️ AI PERMISSION: NO-MODIFY >> 00_DOCS\.ai_permission
echo Description: Documentation - AI cannot modify >> 00_DOCS\.ai_permission

echo Permission: NO_ACCESS > 01_CONFIG\.ai_permission
echo Note: ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL >> 01_CONFIG\.ai_permission
echo Description: Configuration files - Protected from AI >> 01_CONFIG\.ai_permission

echo Permission: READ_ADD > 02_STATIC\.ai_permission
echo Note: Use ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_ prefixes >> 02_STATIC\.ai_permission
echo Description: Static resources - Prefix required >> 02_STATIC\.ai_permission

echo Permission: FULL_ACCESS > 03_ACTIVE\.ai_permission
echo Note: Primary AI workspace >> 03_ACTIVE\.ai_permission
echo Description: Active development - Full AI access >> 03_ACTIVE\.ai_permission

echo Permission: CREATE_MODIFY > 04_TEST\.ai_permission
echo Note: Use indexed naming: 001_TEST_* >> 04_TEST\.ai_permission
echo Description: Test files - Indexed naming required >> 04_TEST\.ai_permission

echo Permission: CREATE_ONLY > 05_BUILD\.ai_permission
echo Note: Build output only >> 05_BUILD\.ai_permission
echo Description: Build artifacts - AI creates only >> 05_BUILD\.ai_permission

echo Permission: WRITE_ONLY > 06_LOGS\.ai_permission
echo Note: Logs only >> 06_LOGS\.ai_permission
echo Description: Log files - AI writes only >> 06_LOGS\.ai_permission

REM Create README.md
echo.
echo 📄 Creating documentation files...

(
echo ^<^!-- ⚠️ AI PERMISSION: NO-MODIFY --^>
echo ^<^!-- This file is protected from AI modifications --^>
echo.
echo # %PROJECT_NAME%
echo.
echo ## Project Structure
echo This project follows the AI-Standard v5.0.2 naming convention with ChatGPT enhancements.
echo.
echo ### Folder Structure
echo - **00_DOCS**: Documentation (AI Read-Only^)
echo - **01_CONFIG**: Configuration (AI No Access^)
echo - **02_STATIC**: Static Assets (Prefix required: ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_^)
echo - **03_ACTIVE**: Active Development (AI Primary Workspace^)
echo - **04_TEST**: Tests (Use indexed naming: 001_TEST_*^)
echo - **05_BUILD**: Build Output
echo - **06_LOGS**: Logs
echo.
echo ### Naming Convention
echo Pattern: `[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]`
echo.
echo ### Dependencies ([Deps]^)
echo - Sequential: 001-1, 001-2
echo - Parallel: 001a, 001b
echo - Subordinate: 001s1, 001s2
echo.
echo ### External Dependencies (v5.0.2^)
echo - Pattern: `EXTERNAL_[Type]_[Vendor]_[Version].[ext]`
echo - SHA256 verification required
echo - See 00_DOCS/EXTERNAL_DEPENDENCIES.md for registry
) > 00_DOCS\README.md

echo ✅ Created: 00_DOCS\README.md

REM Create EXTERNAL_DEPENDENCIES.md
(
echo ^<^!-- ⚠️ AI PERMISSION: NO-MODIFY --^>
echo # External Dependencies Registry
echo.
echo ## v5.0.2 External File Management
echo.
echo ^| File ^| Version ^| Vendor ^| URL ^| SHA256 ^| Date ^| License ^|
echo ^|------^|-------^|------^|----^|------^|-----^|-------^|
) > 00_DOCS\EXTERNAL_DEPENDENCIES.md

echo ✅ Created: 00_DOCS\EXTERNAL_DEPENDENCIES.md

REM Create EXTERNAL_README in 02_STATIC
(
echo # External Files Directory
echo.
echo ## v5.0.2 Naming Convention
echo All external libraries must use the following pattern:
echo `EXTERNAL_[Type]_[Vendor]_[Version].[ext]`
echo.
echo ### Types
echo - JS: JavaScript libraries
echo - SDK: Software Development Kits
echo - JAR: Java Archives
echo - ZIP: Compressed packages
echo - LIB: Generic libraries
echo - MODULE: Node modules
echo.
echo ### Version Management
echo - Current: EXTERNAL_JS_jQuery_v3.6.0.min.js
echo - Deprecated: EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js
echo.
echo ### Security
echo All files are SHA256 hashed for integrity verification.
echo Check 00_DOCS/EXTERNAL_DEPENDENCIES.md for details.
) > 02_STATIC\EXTERNAL_README.md

echo ✅ Created: 02_STATIC\EXTERNAL_README.md

REM Create sample files based on project type
if "%PROJECT_TYPE%"=="web" (
    echo // React Application Entry Point > 03_ACTIVE\001_FE_App-Main_C_Component_DEV.jsx
    echo // [Deps]: None - Entry point >> 03_ACTIVE\001_FE_App-Main_C_Component_DEV.jsx
    echo ✅ Created: 03_ACTIVE\001_FE_App-Main_C_Component_DEV.jsx
)

if "%PROJECT_TYPE%"=="api" (
    echo # API Server Bootstrap > 03_ACTIVE\001_BE_Server-Init_X_Bootstrap_DEV.py
    echo # [Deps]: None - Entry point >> 03_ACTIVE\001_BE_Server-Init_X_Bootstrap_DEV.py
    echo ✅ Created: 03_ACTIVE\001_BE_Server-Init_X_Bootstrap_DEV.py
)

if "%PROJECT_TYPE%"=="ml" (
    echo # ML Model Pipeline > 03_ACTIVE\001_ML_Model-Init_C_Pipeline_DEV.py
    echo # [Deps]: None - Entry point >> 03_ACTIVE\001_ML_Model-Init_C_Pipeline_DEV.py
    echo ✅ Created: 03_ACTIVE\001_ML_Model-Init_C_Pipeline_DEV.py
)

REM Create .gitignore
(
echo # Protected files
echo 01_CONFIG/*.env
echo 01_CONFIG/secrets.*
echo.
echo # Build and logs
echo 05_BUILD/
echo 06_LOGS/
echo.
echo # Dependencies
echo node_modules/
echo __pycache__/
echo *.pyc
echo .venv/
echo venv/
echo.
echo # IDE
echo .vscode/
echo .idea/
echo *.swp
echo.
echo # OS
echo .DS_Store
echo Thumbs.db
) > .gitignore

echo ✅ Created: .gitignore

echo.
echo ==================================================
echo ✨ Project '%PROJECT_NAME%' initialized successfully!
echo.
echo 🔥 v5.0.2 Features:
echo   • External file management (EXTERNAL_ prefix^)
echo   • SHA256 integrity verification
echo   • Dependency registry in 00_DOCS
echo   • Version deprecation strategy
echo.
echo 🎯 Next Steps:
echo 1. Review 00_DOCS/README.md for guidelines
echo 2. Start developing in 03_ACTIVE/
echo 3. Use indexed naming for test files in 04_TEST/
echo 4. Remember prefixes in 02_STATIC:
echo    - ASSET_ for assets
echo    - TEMPLATE_ for templates
echo    - CONFIG_ for configs
echo    - EXTERNAL_ for external libraries
echo 5. Check 00_DOCS/EXTERNAL_DEPENDENCIES.md for external files
echo ==================================================
echo.

endlocal
