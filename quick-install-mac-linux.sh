#!/bin/bash

echo "================================================"
echo "  AI Naming Standard MCP - Quick Installer"
echo "================================================"
echo ""
echo "This will install AI Naming Standard MCP globally"
echo "and configure it for Claude Desktop."
echo ""
echo "Press Enter to continue..."
read

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo "[1] Installing from NPM..."

if npm install -g ai-naming-standard; then
    echo ""
    echo -e "${GREEN}✅ Package installed successfully!${NC}"
else
    echo ""
    echo -e "${RED}❌ Installation failed!${NC}"
    echo "Please check your internet connection and npm setup."
    exit 1
fi

echo ""
echo "[2] Configuring Claude Desktop..."

CONFIG_DIR="$HOME/.config/claude"
CONFIG_FILE="$CONFIG_DIR/claude_desktop_config.json"

# Create config directory if it doesn't exist
if [ ! -d "$CONFIG_DIR" ]; then
    echo "Creating config directory..."
    mkdir -p "$CONFIG_DIR"
fi

# Check if config file exists
if [ -f "$CONFIG_FILE" ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Config file already exists!${NC}"
    echo ""
    echo "Current config:"
    echo "------------------------------------------------"
    cat "$CONFIG_FILE"
    echo "------------------------------------------------"
    echo ""
    echo "Please add the following to your mcpServers section:"
    echo ""
    echo '  "ai-naming-standard": {'
    echo '    "command": "npx",'
    echo '    "args": ["ai-naming-standard"]'
    echo '  }'
    echo ""
    echo "Opening config file..."
    
    # Try different editors
    if command -v code &> /dev/null; then
        code "$CONFIG_FILE"
    elif command -v nano &> /dev/null; then
        nano "$CONFIG_FILE"
    elif command -v vim &> /dev/null; then
        vim "$CONFIG_FILE"
    else
        echo "Please edit: $CONFIG_FILE"
    fi
else
    echo "Creating new config file..."
    cat > "$CONFIG_FILE" << 'EOF'
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "npx",
      "args": ["ai-naming-standard"]
    }
  }
}
EOF
    echo -e "${GREEN}✅ Config file created!${NC}"
fi

echo ""
echo "[3] Language Settings"
echo ""
echo "Select default language:"
echo "[1] 한국어 (Korean)"
echo "[2] English"
echo "[3] 日本語 (Japanese)"
echo ""
read -p "Select (1-3): " lang_choice

# Detect shell configuration file
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
grep -v "export MCP_LANG=" "$SHELL_CONFIG" > "$SHELL_CONFIG.tmp" 2>/dev/null
mv "$SHELL_CONFIG.tmp" "$SHELL_CONFIG" 2>/dev/null

case $lang_choice in
    1)
        echo "export MCP_LANG=ko" >> "$SHELL_CONFIG"
        export MCP_LANG=ko
        echo -e "${GREEN}✅ 한국어로 설정되었습니다.${NC}"
        ;;
    2)
        echo "export MCP_LANG=en" >> "$SHELL_CONFIG"
        export MCP_LANG=en
        echo -e "${GREEN}✅ Set to English.${NC}"
        ;;
    3)
        echo "export MCP_LANG=ja" >> "$SHELL_CONFIG"
        export MCP_LANG=ja
        echo -e "${GREEN}✅ 日本語に設定されました。${NC}"
        ;;
    *)
        echo "export MCP_LANG=ko" >> "$SHELL_CONFIG"
        export MCP_LANG=ko
        echo -e "${GREEN}✅ Defaulting to Korean.${NC}"
        ;;
esac

echo ""
echo "================================================"
echo "         Installation Complete! 🎉"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Run: source $SHELL_CONFIG"
echo "2. Restart Claude Desktop"
echo "3. Test with: \"Generate file name for auth controller\""
echo ""
echo "Installed version:"
npm list -g ai-naming-standard
echo ""
