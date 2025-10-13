#!/bin/bash

echo "================================================"
echo "     AI Naming Standard - NPM Publishing"
echo "================================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# [1] Check NPM login
echo "[1] Checking NPM login status..."
if npm whoami >/dev/null 2>&1; then
    echo -e "${GREEN}✅ NPM login confirmed${NC}"
else
    echo -e "${RED}❌ Not logged in to NPM!${NC}"
    echo "Please run: npm login"
    exit 1
fi
echo ""

# [2] Run tests
echo "[2] Running tests..."
if node test-languages.js >/dev/null 2>&1; then
    echo -e "${GREEN}✅ All tests passed${NC}"
else
    echo -e "${RED}❌ Tests failed!${NC}"
    echo "Please run: node test-languages.js"
    exit 1
fi
echo ""

# [3] Check package name availability
echo "[3] Checking package name availability..."
if npm view ai-naming-standard >/dev/null 2>&1; then
    echo ""
    echo -e "${YELLOW}⚠️  Package 'ai-naming-standard' already exists!${NC}"
    echo ""
    echo "Choose an option:"
    echo "[1] Update version and republish"
    echo "[2] Change package name"
    echo "[3] Cancel"
    echo ""
    read -p "Select (1-3): " choice
    
    case $choice in
        1)
            echo ""
            echo "Current version in package.json:"
            grep '"version"' package.json
            echo ""
            echo "Update version before republishing!"
            echo "Run: npm version patch/minor/major"
            exit 0
            ;;
        2)
            echo ""
            echo "Edit package.json and change the \"name\" field"
            echo "Suggested names:"
            echo "- ai-naming-standard-mcp"
            echo "- @leipokr/ai-naming-standard"
            echo "- naming-convention-mcp"
            exit 0
            ;;
        *)
            echo "Cancelled."
            exit 0
            ;;
    esac
else
    echo -e "${GREEN}✅ Package name is available${NC}"
fi
echo ""

# [4] Show files to be published
echo "[4] Files to be published:"
echo "------------------------------------------------"
npm pack --dry-run 2>/dev/null | grep "npm notice"
echo "------------------------------------------------"
echo ""

# [5] Confirm and publish
echo "[5] Ready to publish to NPM!"
echo ""
echo "Package: ai-naming-standard"
echo "Version: 1.0.0"
echo "Access: public"
echo ""
read -p "Publish to NPM? (yes/no): " confirm

if [[ "$confirm" == "yes" ]]; then
    echo ""
    echo "Publishing..."
    
    if npm publish --access public; then
        echo ""
        echo "================================================"
        echo -e "${GREEN}✅ Successfully published!${NC}"
        echo "================================================"
        echo ""
        echo "View at: https://www.npmjs.com/package/ai-naming-standard"
        echo ""
        echo "Install: npm install -g ai-naming-standard"
        echo ""
    else
        echo ""
        echo -e "${RED}❌ Publishing failed!${NC}"
        echo "Check error messages above."
        echo ""
    fi
else
    echo ""
    echo "Publishing cancelled."
fi
