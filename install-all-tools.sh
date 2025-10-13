#!/bin/bash

echo "================================================"
echo "  AI Naming Standard MCP - Multi-Tool Installer"
echo "================================================"
echo ""

# MCP 경로 설정
MCP_PATH="$(cd "$(dirname "$0")" && pwd)/src/index.js"
echo "MCP 경로: $MCP_PATH"
echo ""

# 메뉴 함수
show_menu() {
    echo "어느 AI 툴에 설치하시겠습니까?"
    echo ""
    echo "[1] Cursor"
    echo "[2] Windsurf"
    echo "[3] Cline (VSCode)"
    echo "[4] Zed"
    echo "[5] Continue"
    echo "[6] 모두 설치"
    echo "[0] 종료"
    echo ""
    read -p "선택 (0-6): " choice
}

# Cursor 설치
install_cursor() {
    echo ""
    echo "[Cursor 설정 중...]"
    CURSOR_DIR="$HOME/.cursor/mcp"
    mkdir -p "$CURSOR_DIR"
    
    cat > "$CURSOR_DIR/settings.json" << EOF
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["$MCP_PATH"]
    }
  }
}
EOF
    
    echo "✅ Cursor 설정 완료!"
}

# Windsurf 설치
install_windsurf() {
    echo ""
    echo "[Windsurf 설정 중...]"
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        WINDSURF_DIR="$HOME/Library/Application Support/Windsurf"
    else
        WINDSURF_DIR="$HOME/.config/windsurf"
    fi
    
    mkdir -p "$WINDSURF_DIR"
    
    cat > "$WINDSURF_DIR/mcp_config.json" << EOF
{
  "servers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["$MCP_PATH"],
      "enabled": true
    }
  }
}
EOF
    
    echo "✅ Windsurf 설정 완료!"
}

# Zed 설치
install_zed() {
    echo ""
    echo "[Zed 설정 중...]"
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        ZED_DIR="$HOME/Library/Application Support/Zed"
    else
        ZED_DIR="$HOME/.config/zed"
    fi
    
    mkdir -p "$ZED_DIR"
    
    # 기존 settings.json이 있는지 확인
    if [ -f "$ZED_DIR/settings.json" ]; then
        echo "⚠️  기존 Zed 설정이 있습니다. 수동으로 병합이 필요합니다."
        echo ""
        echo "다음 내용을 settings.json의 language_models 섹션에 추가하세요:"
        echo ""
        echo '"mcp_servers": {'
        echo '  "ai-naming-standard": {'
        echo '    "command": "node",'
        echo "    \"args\": [\"$MCP_PATH\"]"
        echo '  }'
        echo '}'
    else
        cat > "$ZED_DIR/settings.json" << EOF
{
  "language_models": {
    "mcp_servers": {
      "ai-naming-standard": {
        "command": "node",
        "args": ["$MCP_PATH"]
      }
    }
  }
}
EOF
        echo "✅ Zed 설정 완료!"
    fi
}

# Cline 설치 안내
install_cline() {
    echo ""
    echo "[Cline/VSCode 설정 안내]"
    echo ""
    echo "VSCode settings.json에 다음 내용을 추가하세요:"
    echo ""
    echo "{"
    echo '  "cline.mcpServers": {'
    echo '    "ai-naming-standard": {'
    echo '      "command": "node",'
    echo "      \"args\": [\"$MCP_PATH\"]"
    echo '    }'
    echo '  }'
    echo "}"
    echo ""
    echo "경로:"
    echo "- Mac: Cmd+Shift+P → 'Preferences: Open Settings (JSON)'"
    echo "- Linux: Ctrl+Shift+P → 'Preferences: Open Settings (JSON)'"
}

# Continue 설치
install_continue() {
    echo ""
    echo "[Continue 설정 중...]"
    CONTINUE_DIR="$HOME/.continue"
    mkdir -p "$CONTINUE_DIR"
    
    if [ -f "$CONTINUE_DIR/config.json" ]; then
        echo "⚠️  기존 Continue 설정이 있습니다."
        echo ""
        echo "config.json의 mcpServers 배열에 다음 내용을 추가하세요:"
        echo ""
        echo "{"
        echo '  "name": "ai-naming-standard",'
        echo '  "command": "node",'
        echo "  \"args\": [\"$MCP_PATH\"]"
        echo "}"
    else
        cat > "$CONTINUE_DIR/config.json" << EOF
{
  "models": [],
  "mcpServers": [
    {
      "name": "ai-naming-standard",
      "command": "node",
      "args": ["$MCP_PATH"]
    }
  ]
}
EOF
        echo "✅ Continue 설정 완료!"
    fi
}

# 모두 설치
install_all() {
    echo ""
    echo "[모든 도구에 설치 중...]"
    install_cursor
    install_windsurf
    install_zed
    install_cline
    install_continue
    echo ""
    echo "✅ 모든 설치 완료!"
}

# 메인 루프
while true; do
    show_menu
    
    case $choice in
        1) install_cursor ;;
        2) install_windsurf ;;
        3) install_cline ;;
        4) install_zed ;;
        5) install_continue ;;
        6) install_all; break ;;
        0) exit 0 ;;
        *) echo "잘못된 선택입니다." ;;
    esac
    
    if [ "$choice" != "6" ]; then
        echo ""
        read -p "계속하려면 Enter를 누르세요..."
    fi
done
