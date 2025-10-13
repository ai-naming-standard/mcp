# 🚀 **AI Naming Standard MCP - 배포 및 설치 완벽 가이드**

## 📦 **Part 1: NPM 공공배포 (개발자용)**

### **1단계: NPM 계정 준비**
```bash
# NPM 회원가입 (https://www.npmjs.com)
# 터미널에서 로그인
npm login
```

### **2단계: 퍼블리싱**
```bash
# Windows
publish-to-npm.bat

# Mac/Linux
chmod +x publish-to-npm.sh
./publish-to-npm.sh
```

### **3단계: 확인**
- NPM 페이지: `https://www.npmjs.com/package/ai-naming-standard`
- 설치 테스트: `npm install -g ai-naming-standard`

---

## 💻 **Part 2: 다른 컴퓨터에 설치 (사용자용)**

### **방법 1: 자동 설치 (추천) 🎯**

#### **Windows 사용자**
1. 다운로드: `quick-install-windows.bat`
2. 더블클릭 실행
3. 언어 선택
4. Claude Desktop 재시작

#### **Mac/Linux 사용자**
1. 다운로드: `quick-install-mac-linux.sh`
2. 터미널에서 실행:
```bash
chmod +x quick-install-mac-linux.sh
./quick-install-mac-linux.sh
```
3. 언어 선택
4. Claude Desktop 재시작

---

### **방법 2: 수동 설치**

#### **Step 1: NPM 패키지 설치**
```bash
npm install -g ai-naming-standard
```

#### **Step 2: Claude Desktop 설정**

**Windows:**
1. 실행창 (Win+R): `%APPDATA%\Claude`
2. `claude_desktop_config.json` 생성
3. 내용 추가:
```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "npx",
      "args": ["ai-naming-standard"]
    }
  }
}
```

**Mac/Linux:**
```bash
mkdir -p ~/.config/claude
nano ~/.config/claude/claude_desktop_config.json
```
위와 동일한 JSON 내용 추가

#### **Step 3: 언어 설정**
```bash
# Windows
set MCP_LANG=ko  # 또는 en, ja

# Mac/Linux
export MCP_LANG=ko  # 또는 en, ja
```

#### **Step 4: Claude Desktop 재시작**

---

## 🔍 **Part 3: 작동 확인**

### **Claude Desktop에서 테스트**

#### **한국어 테스트**
```
auth 컨트롤러 파일명 생성해줘
```

#### **영어 테스트**
```
Generate file name for payment service
```

#### **일본어 테스트**  
```
ユーザー認証のコントローラーファイル名を生成してください
```

### **예상 결과**
```
auth_001_controller_user-login_validate_validation_prod.ts
```

---

## ⚡ **빠른 설치 명령어**

### **NPM에서 직접 설치 (인터넷 필요)**
```bash
# 전역 설치
npm i -g ai-naming-standard

# Claude 설정 (Windows)
echo {"mcpServers":{"ai-naming-standard":{"command":"npx","args":["ai-naming-standard"]}}} > %APPDATA%\Claude\claude_desktop_config.json

# Claude 설정 (Mac/Linux)
mkdir -p ~/.config/claude && echo '{"mcpServers":{"ai-naming-standard":{"command":"npx","args":["ai-naming-standard"]}}}' > ~/.config/claude/claude_desktop_config.json
```

---

## 📱 **지원 플랫폼**

| 플랫폼 | 지원 | 설치 방법 |
|--------|------|-----------|
| Windows 10/11 | ✅ | `quick-install-windows.bat` |
| macOS | ✅ | `quick-install-mac-linux.sh` |
| Linux | ✅ | `quick-install-mac-linux.sh` |
| Claude Desktop | ✅ | 자동 연동 |
| Cursor IDE | ✅ | MCP 설정 |
| VS Code | ⚠️ | 확장 필요 |

---

## 🔧 **문제 해결**

### **1. "command not found" 에러**
```bash
# Node.js 설치 확인
node --version  # v16 이상 필요
npm --version   # v7 이상 필요

# 재설치
npm uninstall -g ai-naming-standard
npm install -g ai-naming-standard
```

### **2. Claude에서 인식 안 됨**
```bash
# 설정 파일 위치 확인
# Windows
dir %APPDATA%\Claude\

# Mac/Linux
ls -la ~/.config/claude/

# JSON 문법 검증
# https://jsonlint.com 에서 확인
```

### **3. 언어가 안 바뀜**
```bash
# 환경 변수 확인
# Windows
echo %MCP_LANG%

# Mac/Linux
echo $MCP_LANG

# 직접 설정
export MCP_LANG=en  # 또는 ko, ja
```

---

## 📊 **버전 관리**

### **현재 버전 확인**
```bash
npm list -g ai-naming-standard
```

### **업데이트**
```bash
npm update -g ai-naming-standard
```

### **특정 버전 설치**
```bash
npm install -g ai-naming-standard@1.0.0
```

---

## 🌐 **언어별 설치 스크립트**

### **한국어 전용**
```bash
npm i -g ai-naming-standard && set MCP_LANG=ko
```

### **English Only**
```bash
npm i -g ai-naming-standard && export MCP_LANG=en
```

### **日本語専用**
```bash
npm i -g ai-naming-standard && export MCP_LANG=ja
```

---

## 📝 **설치 체크리스트**

- [ ] Node.js v16+ 설치됨
- [ ] NPM v7+ 설치됨
- [ ] `npm i -g ai-naming-standard` 실행
- [ ] Claude Desktop 설정 파일 생성
- [ ] JSON 설정 추가
- [ ] 언어 설정 (MCP_LANG)
- [ ] Claude Desktop 재시작
- [ ] 테스트 명령 실행
- [ ] 파일명 생성 확인

---

## 🎯 **다음 단계**

1. **사용해보기**
   - "Generate file name for user authentication"
   - "Validate: auth_001_controller_user_validate.ts"
   - "Create e-commerce project template"

2. **팀과 공유**
   - NPM 링크 공유
   - 설치 가이드 공유
   - 네이밍 컨벤션 교육

3. **피드백**
   - GitHub Issues: https://github.com/leipokr/ai-naming-standard/issues
   - NPM 평점: https://www.npmjs.com/package/ai-naming-standard

---

## 📞 **지원**

- **Documentation**: [GitHub README](https://github.com/leipokr/ai-naming-standard)
- **Issues**: [GitHub Issues](https://github.com/leipokr/ai-naming-standard/issues)
- **NPM**: [npmjs.com/package/ai-naming-standard](https://www.npmjs.com/package/ai-naming-standard)
- **Email**: your-email@example.com

---

**🎉 축하합니다! AI Naming Standard MCP가 설치되었습니다!**

이제 AI와 함께 완벽한 파일 네이밍 컨벤션을 사용할 수 있습니다.
