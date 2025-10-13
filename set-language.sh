#!/bin/bash

echo "================================================"
echo "  AI Naming Standard MCP - Language Settings"
echo "================================================"
echo ""

echo "Select Language / 언어 선택 / 言語を選択:"
echo ""
echo "[1] 한국어 (Korean)"
echo "[2] English"
echo "[3] 日本語 (Japanese)"
echo ""

read -p "Select (1-3): " choice

case $choice in
    1)
        LANG="ko"
        echo "한국어가 선택되었습니다."
        ;;
    2)
        LANG="en"
        echo "English selected."
        ;;
    3)
        LANG="ja"
        echo "日本語が選択されました。"
        ;;
    *)
        echo "Invalid selection. Defaulting to Korean."
        LANG="ko"
        ;;
esac

echo ""
echo "Setting MCP_LANG=$LANG"

# Shell configuration file detection
if [ -f "$HOME/.zshrc" ]; then
    SHELL_CONFIG="$HOME/.zshrc"
elif [ -f "$HOME/.bashrc" ]; then
    SHELL_CONFIG="$HOME/.bashrc"
elif [ -f "$HOME/.bash_profile" ]; then
    SHELL_CONFIG="$HOME/.bash_profile"
else
    SHELL_CONFIG="$HOME/.profile"
fi

# Remove existing MCP_LANG if present
grep -v "export MCP_LANG=" "$SHELL_CONFIG" > "$SHELL_CONFIG.tmp"
mv "$SHELL_CONFIG.tmp" "$SHELL_CONFIG"

# Add new language setting
echo "export MCP_LANG=$LANG" >> "$SHELL_CONFIG"

# Apply immediately
export MCP_LANG=$LANG

echo ""
echo "================================================"
case $LANG in
    ko)
        echo "✅ 언어 설정 완료!"
        echo "Claude Desktop을 재시작하세요."
        echo ""
        echo "또는 터미널에서 다음 명령 실행:"
        echo "source $SHELL_CONFIG"
        ;;
    en)
        echo "✅ Language setting complete!"
        echo "Please restart Claude Desktop."
        echo ""
        echo "Or run this command in terminal:"
        echo "source $SHELL_CONFIG"
        ;;
    ja)
        echo "✅ 言語設定完了！"
        echo "Claude Desktopを再起動してください。"
        echo ""
        echo "またはターミナルで次のコマンドを実行："
        echo "source $SHELL_CONFIG"
        ;;
esac
echo "================================================"
echo ""
