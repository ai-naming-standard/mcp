@echo off
echo ================================================
echo   GitHub Upload - AI Naming Standard MCP
echo ================================================
echo.
echo Target: https://github.com/ai-naming-standard/mcp
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize git if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

REM Set user config
echo Setting Git configuration...
git config user.name "AI Naming Standard"
git config user.email "ai-naming-standard@example.com"
echo.

REM Add all files
echo Adding files...
git add .
echo.

REM Create initial commit
echo Creating commit...
git commit -m "Initial commit: AI Naming Standard MCP v1.0.0

- Multi-language support (English default, Korean, Japanese)
- 8 comprehensive tools for file naming
- Support for 10+ project types
- Microservices architecture patterns
- Claude Desktop and Cursor IDE integration"
echo.

REM Add remote origin
echo Adding GitHub remote...
git remote remove origin 2>nul
git remote add origin https://github.com/ai-naming-standard/mcp.git
echo.

REM Create main branch
git branch -M main

echo ================================================
echo Ready to push to GitHub!
echo ================================================
echo.
echo Please make sure you have:
echo 1. Created the repository at https://github.com/ai-naming-standard/mcp
echo 2. Have push access to the organization
echo.
echo Run this command to push:
echo   git push -u origin main
echo.
echo If you need to set up authentication:
echo   git config --global credential.helper manager
echo.
pause
