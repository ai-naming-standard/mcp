@echo off
echo ================================================
echo   AI Naming Standard MCP - Quick Installer
echo ================================================
echo.
echo This will install AI Naming Standard MCP globally
echo and configure it for Claude Desktop.
echo.
pause

echo.
echo [1] Installing from NPM...
call npm install -g ai-naming-standard

if %errorlevel% neq 0 (
    echo.
    echo ❌ Installation failed!
    echo Please check your internet connection and npm setup.
    pause
    exit /b 1
)

echo.
echo ✅ Package installed successfully!
echo.

echo [2] Configuring Claude Desktop...

set CONFIG_DIR=%APPDATA%\Claude
set CONFIG_FILE=%CONFIG_DIR%\claude_desktop_config.json

if not exist "%CONFIG_DIR%" (
    echo Creating config directory...
    mkdir "%CONFIG_DIR%"
)

if exist "%CONFIG_FILE%" (
    echo.
    echo ⚠️  Config file already exists!
    echo.
    echo Current config:
    echo ------------------------------------------------
    type "%CONFIG_FILE%"
    echo ------------------------------------------------
    echo.
    echo Please add the following to your mcpServers section:
    echo.
    echo   "ai-naming-standard": {
    echo     "command": "npx",
    echo     "args": ["ai-naming-standard"]
    echo   }
    echo.
    echo Opening config file in notepad...
    notepad "%CONFIG_FILE%"
) else (
    echo Creating new config file...
    (
        echo {
        echo   "mcpServers": {
        echo     "ai-naming-standard": {
        echo       "command": "npx",
        echo       "args": ["ai-naming-standard"]
        echo     }
        echo   }
        echo }
    ) > "%CONFIG_FILE%"
    echo ✅ Config file created!
)

echo.
echo [3] Language Settings
echo.
echo Select default language:
echo [1] 한국어 (Korean)
echo [2] English
echo [3] 日本語 (Japanese)
echo.

set /p lang_choice="Select (1-3): "

if "%lang_choice%"=="1" (
    setx MCP_LANG ko >nul
    echo ✅ 한국어로 설정되었습니다.
) else if "%lang_choice%"=="2" (
    setx MCP_LANG en >nul
    echo ✅ Set to English.
) else if "%lang_choice%"=="3" (
    setx MCP_LANG ja >nul
    echo ✅ 日本語に設定されました。
) else (
    setx MCP_LANG ko >nul
    echo ✅ Defaulting to Korean.
)

echo.
echo ================================================
echo          Installation Complete! 🎉
echo ================================================
echo.
echo Next steps:
echo 1. Close this window
echo 2. Restart Claude Desktop
echo 3. Test with: "Generate file name for auth controller"
echo.
echo Installed version:
call npm list -g ai-naming-standard
echo.
pause
