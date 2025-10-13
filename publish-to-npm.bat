@echo off
echo ================================================
echo     AI Naming Standard - NPM Publishing
echo ================================================
echo.

echo [1] Checking NPM login status...
call npm whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ Not logged in to NPM!
    echo Please run: npm login
    echo.
    pause
    exit /b 1
)
echo ✅ NPM login confirmed
echo.

echo [2] Running tests...
call node test-languages.js >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Tests failed!
    echo Please run: node test-languages.js
    echo.
    pause
    exit /b 1
)
echo ✅ All tests passed
echo.

echo [3] Checking package name availability...
call npm view ai-naming-standard >nul 2>&1
if %errorlevel% eq 0 (
    echo.
    echo ⚠️  Package 'ai-naming-standard' already exists!
    echo.
    echo Choose an option:
    echo [1] Update version and republish
    echo [2] Change package name
    echo [3] Cancel
    echo.
    set /p choice="Select (1-3): "
    
    if "%choice%"=="1" (
        echo.
        echo Current version in package.json:
        type package.json | findstr "version"
        echo.
        echo Update version before republishing!
        echo Run: npm version patch/minor/major
        echo.
        pause
        exit /b 0
    ) else if "%choice%"=="2" (
        echo.
        echo Edit package.json and change the "name" field
        echo Suggested names:
        echo - ai-naming-standard-mcp
        echo - @leipokr/ai-naming-standard
        echo - naming-convention-mcp
        echo.
        pause
        exit /b 0
    ) else (
        echo Cancelled.
        pause
        exit /b 0
    )
)
echo ✅ Package name is available
echo.

echo [4] Files to be published:
echo ------------------------------------------------
call npm pack --dry-run 2>nul | findstr "npm notice"
echo ------------------------------------------------
echo.

echo [5] Ready to publish to NPM!
echo.
echo Package: ai-naming-standard
echo Version: 1.0.0
echo Access: public
echo.
set /p confirm="Publish to NPM? (yes/no): "

if /i "%confirm%"=="yes" (
    echo.
    echo Publishing...
    call npm publish --access public
    
    if %errorlevel% eq 0 (
        echo.
        echo ================================================
        echo ✅ Successfully published!
        echo ================================================
        echo.
        echo View at: https://www.npmjs.com/package/ai-naming-standard
        echo.
        echo Install: npm install -g ai-naming-standard
        echo.
    ) else (
        echo.
        echo ❌ Publishing failed!
        echo Check error messages above.
        echo.
    )
) else (
    echo.
    echo Publishing cancelled.
)

echo.
pause
