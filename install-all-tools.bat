@echo off
setlocal enabledelayedexpansion

echo ================================================
echo   AI Naming Standard MCP - Multi-Tool Installer
echo ================================================
echo.

set MCP_PATH=%~dp0src\index.js
set MCP_PATH_SLASH=%MCP_PATH:\=/%

echo MCP 경로: %MCP_PATH%
echo.

:menu
echo 어느 AI 툴에 설치하시겠습니까?
echo.
echo [1] Cursor
echo [2] Windsurf
echo [3] Cline (VSCode)
echo [4] Zed
echo [5] Continue
echo [6] 모두 설치
echo [0] 종료
echo.
set /p choice="선택 (0-6): "

if "%choice%"=="1" goto cursor
if "%choice%"=="2" goto windsurf
if "%choice%"=="3" goto cline
if "%choice%"=="4" goto zed
if "%choice%"=="5" goto continue
if "%choice%"=="6" goto all
if "%choice%"=="0" exit
goto menu

:cursor
echo.
echo [Cursor 설정 중...]
set CURSOR_DIR=%USERPROFILE%\.cursor\mcp
if not exist "%CURSOR_DIR%" mkdir "%CURSOR_DIR%"

echo { > "%CURSOR_DIR%\settings.json"
echo   "mcpServers": { >> "%CURSOR_DIR%\settings.json"
echo     "ai-naming-standard": { >> "%CURSOR_DIR%\settings.json"
echo       "command": "node", >> "%CURSOR_DIR%\settings.json"
echo       "args": ["%MCP_PATH:\=\\%"] >> "%CURSOR_DIR%\settings.json"
echo     } >> "%CURSOR_DIR%\settings.json"
echo   } >> "%CURSOR_DIR%\settings.json"
echo } >> "%CURSOR_DIR%\settings.json"

echo ✅ Cursor 설정 완료!
if not "%choice%"=="6" pause
if not "%choice%"=="6" goto menu
goto end_cursor
:end_cursor

:windsurf
echo.
echo [Windsurf 설정 중...]
set WINDSURF_DIR=%APPDATA%\Windsurf
if not exist "%WINDSURF_DIR%" mkdir "%WINDSURF_DIR%"

echo { > "%WINDSURF_DIR%\mcp_config.json"
echo   "servers": { >> "%WINDSURF_DIR%\mcp_config.json"
echo     "ai-naming-standard": { >> "%WINDSURF_DIR%\mcp_config.json"
echo       "command": "node", >> "%WINDSURF_DIR%\mcp_config.json"
echo       "args": ["%MCP_PATH:\=\\%"], >> "%WINDSURF_DIR%\mcp_config.json"
echo       "enabled": true >> "%WINDSURF_DIR%\mcp_config.json"
echo     } >> "%WINDSURF_DIR%\mcp_config.json"
echo   } >> "%WINDSURF_DIR%\mcp_config.json"
echo } >> "%WINDSURF_DIR%\mcp_config.json"

echo ✅ Windsurf 설정 완료!
if not "%choice%"=="6" pause
if not "%choice%"=="6" goto menu
goto end_windsurf
:end_windsurf

:cline
echo.
echo [Cline/VSCode 설정 안내]
echo.
echo VSCode settings.json에 다음 내용을 추가하세요:
echo.
echo {
echo   "cline.mcpServers": {
echo     "ai-naming-standard": {
echo       "command": "node",
echo       "args": ["%MCP_PATH_SLASH%"]
echo     }
echo   }
echo }
echo.
echo 경로: File ^> Preferences ^> Settings ^> Open Settings (JSON)
if not "%choice%"=="6" pause
if not "%choice%"=="6" goto menu
goto end_cline
:end_cline

:zed
echo.
echo [Zed 설정 안내]
echo.
echo Zed는 주로 Mac/Linux용입니다.
echo Windows에서 사용 중이라면 WSL을 통해 설정하세요.
if not "%choice%"=="6" pause
if not "%choice%"=="6" goto menu
goto end_zed
:end_zed

:continue
echo.
echo [Continue 설정 중...]
set CONTINUE_DIR=%USERPROFILE%\.continue
if not exist "%CONTINUE_DIR%" mkdir "%CONTINUE_DIR%"

echo 기존 config.json이 있다면 수동으로 병합이 필요합니다.
echo.
echo mcpServers 섹션에 추가할 내용:
echo {
echo   "name": "ai-naming-standard",
echo   "command": "node",
echo   "args": ["%MCP_PATH_SLASH%"]
echo }
if not "%choice%"=="6" pause
if not "%choice%"=="6" goto menu
goto end_continue
:end_continue

:all
echo.
echo [모든 도구에 설치 중...]
goto cursor
goto windsurf
goto cline
goto zed
goto continue
echo.
echo ✅ 모든 설치 완료!
pause
exit

endlocal
