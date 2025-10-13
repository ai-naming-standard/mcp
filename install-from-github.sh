#!/bin/bash

# GitHub에서 직접 설치하는 스크립트

echo "================================================"
echo "  AI Naming Standard MCP - GitHub Installer"
echo "================================================"
echo ""

# 1. 저장소 클론
echo "[1/4] 저장소 클론 중..."
git clone https://github.com/ai-naming-standard/mcp.git ai-naming-standard-mcp
cd ai-naming-standard-mcp

# 2. 의존성 설치
echo "[2/4] 의존성 설치 중..."
npm install

# 3. 절대 경로 얻기
MCP_PATH="$(pwd)/src/index.js"
echo "설치 경로: $MCP_PATH"

# 4. Claude 설정
echo "[3/4] Claude Desktop 설정 중..."

# OS 확인
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    CONFIG_PATH="$HOME/Library/Application Support/Claude/claude_desktop_config.json"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
    # Windows
    CONFIG_PATH="$APPDATA/Claude/claude_desktop_config.json"
else
    # Linux
    CONFIG_PATH="$HOME/.config/Claude/claude_desktop_config.json"
fi

# 설정 디렉토리 생성
mkdir -p "$(dirname "$CONFIG_PATH")"

# 기존 설정이 있는지 확인
if [ -f "$CONFIG_PATH" ]; then
    echo "⚠️  기존 Claude 설정이 있습니다."
    echo "다음 내용을 수동으로 추가하세요:"
    echo ""
    echo '"ai-naming-standard": {'
    echo '  "command": "node",'
    echo "  \"args\": [\"$MCP_PATH\"]"
    echo '}'
else
    # 새 설정 파일 생성
    cat > "$CONFIG_PATH" << EOF
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["$MCP_PATH"]
    }
  }
}
EOF
fi

echo "[4/4] 설치 완료!"
echo ""
echo "✅ AI Naming Standard MCP가 설치되었습니다!"
echo ""
echo "📌 다음 단계:"
echo "1. Claude Desktop을 재시작하세요"
echo "2. 새 대화에서 도구를 테스트하세요"
echo ""
echo "💡 테스트 명령:"
echo "   'generateFileName 도구로 파일명 만들어줘'"
