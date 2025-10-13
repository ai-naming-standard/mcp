@echo off
echo ================================================
echo   AI Naming Standard MCP - Language Settings
echo ================================================
echo.

echo Select Language / 언어 선택 / 言語を選択:
echo.
echo [1] 한국어 (Korean)
echo [2] English
echo [3] 日本語 (Japanese)
echo.

set /p choice="Select (1-3): "

if "%choice%"=="1" (
    set LANG=ko
    echo 한국어가 선택되었습니다.
) else if "%choice%"=="2" (
    set LANG=en
    echo English selected.
) else if "%choice%"=="3" (
    set LANG=ja
    echo 日本語が選択されました。
) else (
    echo Invalid selection. Defaulting to Korean.
    set LANG=ko
)

echo.
echo Setting MCP_LANG=%LANG%
setx MCP_LANG %LANG%

echo.
echo ================================================
if "%LANG%"=="ko" (
    echo ✅ 언어 설정 완료!
    echo Claude Desktop을 재시작하세요.
) else if "%LANG%"=="en" (
    echo ✅ Language setting complete!
    echo Please restart Claude Desktop.
) else if "%LANG%"=="ja" (
    echo ✅ 言語設定完了！
    echo Claude Desktopを再起動してください。
)
echo ================================================
echo.

pause
