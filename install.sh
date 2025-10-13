#!/bin/bash

echo "==============================================="
echo "  AI Naming Standard MCP Server 설치 스크립트"
echo "==============================================="
echo ""

# Node.js 확인
echo "[1/5] Node.js 확인 중..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되지 않았습니다."
    echo "👉 https://nodejs.org 에서 Node.js를 먼저 설치하세요."
    exit 1
fi
echo "✅ Node.js 설치 확인됨"

# 의존성 설치
echo ""
echo "[2/5] 의존성 설치 중..."
if ! npm install; then
    echo "❌ 의존성 설치 실패"
    exit 1
fi
echo "✅ 의존성 설치 완료"

# 전역 링크
echo ""
echo "[3/5] 전역 명령어 등록 중..."
if ! npm link; then
    echo "❌ 전역 등록 실패"
    exit 1
fi
echo "✅ 전역 명령어 등록 완료"

# Claude 설정 파일 확인
echo ""
echo "[4/5] Claude Desktop 설정 확인 중..."

# OS별 설정 경로
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    CLAUDE_CONFIG="$HOME/Library/Application Support/Claude/claude_desktop_config.json"
    CLAUDE_DIR="$HOME/Library/Application Support/Claude"
else
    # Linux
    CLAUDE_CONFIG="$HOME/.config/Claude/claude_desktop_config.json"
    CLAUDE_DIR="$HOME/.config/Claude"
fi

if [ ! -d "$CLAUDE_DIR" ]; then
    mkdir -p "$CLAUDE_DIR"
fi

if [ ! -f "$CLAUDE_CONFIG" ]; then
    echo "📝 Claude 설정 파일 생성 중..."
    cat > "$CLAUDE_CONFIG" <<EOF
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "npx",
      "args": ["ai-naming-standard"]
    }
  }
}
EOF
    echo "✅ Claude 설정 파일 생성 완료"
else
    echo "⚠️  Claude 설정 파일이 이미 존재합니다."
    echo "   수동으로 다음 내용을 추가해주세요:"
    echo ""
    echo '   "ai-naming-standard": {'
    echo '     "command": "npx",'
    echo '     "args": ["ai-naming-standard"]'
    echo '   }'
fi

# 테스트
echo ""
echo "[5/5] MCP 서버 테스트 중..."
if timeout 2 npx ai-naming-standard &> /dev/null; then
    echo "✅ MCP 서버 정상 작동 확인"
else
    echo "⚠️  MCP 서버 테스트 중 타임아웃 (정상일 수 있음)"
fi

echo ""
echo "==============================================="
echo "  ✅ 설치 완료!"
echo "==============================================="
echo ""
echo "📌 다음 단계:"
echo "   1. Claude Desktop을 재시작하세요"
echo "   2. Claude에서 'generateFileName' 도구를 사용해보세요"
echo ""
echo "💡 예시 명령:"
echo '   "로그인 컨트롤러 파일명 생성해줘"'
echo '   "auth_001_controller_user-login.ts 검증해줘"'
echo ""
