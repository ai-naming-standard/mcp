@echo off
echo ================================================
echo      NPM Package Update v1.0.1
echo ================================================
echo.
echo GitHub Repository: https://github.com/ai-naming-standard/mcp
echo NPM Package: ai-naming-standard-mcp
echo Version: 1.0.1
echo.

echo Checking NPM login...
npm whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo You are not logged in to NPM!
    echo Please run: npm login
    echo.
    pause
    exit /b 1
)

echo Logged in as:
npm whoami
echo.

echo Publishing to NPM...
npm publish --access public

if %errorlevel% eq 0 (
    echo.
    echo ================================================
    echo    SUCCESS! Package Updated to v1.0.1
    echo ================================================
    echo.
    echo NPM Page: https://www.npmjs.com/package/ai-naming-standard-mcp
    echo GitHub: https://github.com/ai-naming-standard/mcp
    echo.
    echo The NPM page now shows the correct GitHub links!
    echo.
) else (
    echo.
    echo Publishing failed!
    echo Please check the error message above.
    echo.
)

pause
