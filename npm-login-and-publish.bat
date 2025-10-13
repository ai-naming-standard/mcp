@echo off
echo ================================================
echo      NPM Login & Publishing Assistant
echo ================================================
echo.

echo Step 1: NPM Login
echo -----------------
echo Please enter your NPM credentials:
echo.

call npm login

if %errorlevel% neq 0 (
    echo.
    echo ❌ Login failed!
    echo.
    echo Please check:
    echo 1. Username and password are correct
    echo 2. Email is verified on npmjs.com
    echo 3. 2FA code if enabled
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Login successful!
echo.

echo Checking login status...
call npm whoami
echo.

echo ================================================
echo Step 2: Pre-Publishing Check
echo ================================================
echo.

echo Checking package name availability...
call npm view ai-naming-standard name 2>nul

if %errorlevel% eq 0 (
    echo.
    echo ⚠️ Package name 'ai-naming-standard' already exists on NPM!
    echo.
    echo You have 3 options:
    echo.
    echo 1. Use a different name (recommended):
    echo    - ai-naming-standard-mcp
    echo    - @your-username/ai-naming-standard
    echo    - naming-convention-mcp
    echo.
    echo 2. If this is YOUR package, increment version:
    echo    - Current: 1.0.0
    echo    - New: 1.0.1 or 1.1.0
    echo.
    echo 3. Force republish (if you own it)
    echo.
    set /p action="Enter 1, 2, or 3: "
    
    if "%action%"=="1" (
        echo.
        echo Please edit package.json and change the "name" field.
        echo Opening package.json...
        notepad package.json
        echo.
        echo After changing the name, run this script again.
        pause
        exit /b 0
    ) else if "%action%"=="2" (
        echo.
        echo Incrementing version...
        call npm version patch
        echo.
    )
) else (
    echo ✅ Package name is available!
)

echo.
echo ================================================
echo Step 3: Publishing to NPM
echo ================================================
echo.
echo Package Details:
echo ----------------
type package.json | findstr "name"
type package.json | findstr "version"
echo.

set /p confirm="Ready to publish? (yes/no): "

if /i "%confirm%"=="yes" (
    echo.
    echo Publishing to NPM...
    echo.
    
    call npm publish --access public
    
    if %errorlevel% eq 0 (
        echo.
        echo ================================================
        echo    🎉 SUCCESSFULLY PUBLISHED TO NPM! 🎉
        echo ================================================
        echo.
        echo Your package is now live at:
        echo https://www.npmjs.com/package/ai-naming-standard
        echo.
        echo Anyone can now install it with:
        echo npm install -g ai-naming-standard
        echo.
        echo Next steps:
        echo 1. Check your package page on NPM
        echo 2. Share with your team
        echo 3. Create GitHub repository
        echo.
    ) else (
        echo.
        echo ❌ Publishing failed!
        echo.
        echo Common issues:
        echo 1. Package name already taken
        echo 2. Version already published
        echo 3. Network connection issues
        echo 4. NPM registry down
        echo.
        echo Please check the error message above.
    )
) else (
    echo.
    echo Publishing cancelled.
)

echo.
pause
