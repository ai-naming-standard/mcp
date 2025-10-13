# 🚀 GitHub Upload Guide for AI Naming Standard MCP

## Prerequisites
1. Git installed on your system
2. Access to https://github.com/ai-naming-standard organization
3. Repository created at: https://github.com/ai-naming-standard/mcp

## Step-by-Step Upload Commands

### 1. Open Terminal/Command Prompt
```bash
cd C:\Users\khalo\OneDrive\Desktop\Project\leipokr\CascadeProjects\windsurf-project\ai-naming-standard-mcp
```

### 2. Initialize Git Repository
```bash
git init
```

### 3. Configure Git User
```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

### 4. Add All Files
```bash
git add .
```

### 5. Create Initial Commit
```bash
git commit -m "Initial commit: AI Naming Standard MCP v1.0.0

- Multi-language support (English default, Korean, Japanese)
- 8 comprehensive tools for file naming
- Support for 10+ project types
- Microservices architecture patterns
- Claude Desktop and Cursor IDE integration
- NPM package: ai-naming-standard-mcp"
```

### 6. Add Remote Repository
```bash
git remote add origin https://github.com/ai-naming-standard/mcp.git
```

### 7. Set Main Branch
```bash
git branch -M main
```

### 8. Push to GitHub
```bash
git push -u origin main
```

## If Authentication Required

### Option A: Using Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Generate new token with 'repo' scope
3. Use token as password when prompted

### Option B: Using GitHub CLI
```bash
gh auth login
gh repo clone ai-naming-standard/mcp
```

### Option C: Using SSH
```bash
git remote set-url origin git@github.com:ai-naming-standard/mcp.git
```

## Verify Upload
1. Visit: https://github.com/ai-naming-standard/mcp
2. Check all files are uploaded
3. Verify README.md is displayed correctly

## Next Steps
1. Add repository description
2. Add topics: mcp, claude, naming-convention, ai
3. Create releases for version management
4. Enable GitHub Pages if needed

## Troubleshooting

### Permission Denied
- Ensure you have write access to the organization
- Check if repository exists and is not private

### Large Files Error
- Check if any file exceeds 100MB
- Use Git LFS for large files if needed

### Authentication Failed
- Regenerate personal access token
- Ensure token has correct permissions
- Try using GitHub Desktop app

## Quick One-Liner (Copy & Paste)
```bash
git init && git add . && git commit -m "Initial commit: AI Naming Standard MCP v1.0.0" && git branch -M main && git remote add origin https://github.com/ai-naming-standard/mcp.git && git push -u origin main
```

---

## Contact
Organization: https://github.com/ai-naming-standard
Repository: https://github.com/ai-naming-standard/mcp
