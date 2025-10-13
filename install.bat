@echo off
echo ===============================================
echo   AI Naming Standard MCP Server 설치 스크립트
echo ===============================================
echo.

REM Node.js 확인
echo [1/5] Node.js 확인 중...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js가 설치되지 않았습니다.
    echo 👉 https://nodejs.org 에서 Node.js를 먼저 설치하세요.
    pause
    exit /b 1
)
echo ✅ Node.js 설치 확인됨

REM 의존성 설치
echo.
echo [2/5] 의존성 설치 중...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 의존성 설치 실패
    pause
    exit /b 1
)
echo ✅ 의존성 설치 완료

REM 전역 링크
echo.
echo [3/5] 전역 명령어 등록 중...
call npm link
if %errorlevel% neq 0 (
    echo ❌ 전역 등록 실패
    pause
    exit /b 1
)
echo ✅ 전역 명령어 등록 완료

REM Claude 설정 파일 확인
echo.
echo [4/5] Claude Desktop 설정 확인 중...
set CLAUDE_CONFIG=%APPDATA%\Claude\claude_desktop_config.json

if not exist "%APPDATA%\Claude" (
    mkdir "%APPDATA%\Claude"
)

if not exist "%CLAUDE_CONFIG%" (
    echo 📝 Claude 설정 파일 생성 중...
    echo { > "%CLAUDE_CONFIG%"
    echo   "mcpServers": { >> "%CLAUDE_CONFIG%"
    echo     "ai-naming-standard": { >> "%CLAUDE_CONFIG%"
    echo       "command": "npx", >> "%CLAUDE_CONFIG%"
    echo       "args": ["ai-naming-standard"] >> "%CLAUDE_CONFIG%"
    echo     } >> "%CLAUDE_CONFIG%"
    echo   } >> "%CLAUDE_CONFIG%"
    echo } >> "%CLAUDE_CONFIG%"
    echo ✅ Claude 설정 파일 생성 완료
) else (
    echo ⚠️  Claude 설정 파일이 이미 존재합니다.
    echo    수동으로 다음 내용을 추가해주세요:
    echo.
    echo    "ai-naming-standard": {
    echo      "command": "npx",
    echo      "args": ["ai-naming-standard"]
    echo    }
)

REM 테스트
echo.
echo [5/5] MCP 서버 테스트 중...
echo | call npx ai-naming-standard >nul 2>&1
if %errorlevel% eq 0 (
    echo ✅ MCP 서버 정상 작동 확인
) else (
    echo ⚠️  MCP 서버 테스트 중 경고 (정상일 수 있음)
)

echo.
echo ===============================================
echo   ✅ 설치 완료!
echo ===============================================
echo.
echo 📌 다음 단계:
echo    1. Claude Desktop을 재시작하세요
echo    2. Claude에서 "generateFileName" 도구를 사용해보세요
echo.
echo 💡 예시 명령:
echo    "로그인 컨트롤러 파일명 생성해줘"
echo    "auth_001_controller_user-login.ts 검증해줘"
echo.
pause
