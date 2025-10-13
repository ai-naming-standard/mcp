@echo off
chcp 65001 >nul
echo ================================================
echo      NPM Login and Publishing Assistant
echo ================================================
echo.

echo Step 1: NPM Login
echo -----------------
echo Please enter your NPM credentials:
echo.

npm login

echo.
echo Checking login status...
npm whoami

echo.
echo ================================================
echo Step 2: Publishing to NPM
echo ================================================
echo.

echo Package name: ai-naming-standard-mcp
echo Version: 1.0.0
echo.

echo Publishing...
npm publish --access public

echo.
echo ================================================
echo Done!
echo ================================================
pause
