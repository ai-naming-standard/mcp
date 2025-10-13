# 📦 NPM 퍼블리싱 가이드

## 🔐 Step 1: NPM 계정 준비

### 1.1 NPM 계정 생성 (없는 경우)
```bash
# https://www.npmjs.com/signup 에서 계정 생성
```

### 1.2 NPM 로그인
```bash
npm login
# Username: (your-username)
# Password: (your-password)  
# Email: (your-email)
# OTP: (2FA 코드, 설정한 경우)
```

### 1.3 로그인 확인
```bash
npm whoami
# your-username 이 출력되면 성공
```

---

## 🚀 Step 2: 퍼블리싱 전 체크리스트

### 2.1 패키지 이름 확인
```bash
npm view ai-naming-standard
# 404 에러가 나와야 사용 가능한 이름
```

### 2.2 파일 확인
```bash
# 배포될 파일 목록 확인
npm pack --dry-run

# 패키지 크기 확인
npm publish --dry-run
```

### 2.3 버전 확인
```bash
# package.json의 version 확인
# 첫 배포는 1.0.0 권장
```

---

## 📤 Step 3: NPM에 퍼블리싱

### 3.1 첫 번째 퍼블리싱
```bash
npm publish --access public
```

### 3.2 성공 메시지
```
+ ai-naming-standard@1.0.0
```

### 3.3 확인
```bash
# NPM 페이지 확인
https://www.npmjs.com/package/ai-naming-standard

# 설치 테스트
npm view ai-naming-standard
```

---

## 🔄 Step 4: 버전 업데이트 (향후)

### 4.1 버전 올리기
```bash
# 패치 버전 (1.0.0 → 1.0.1)
npm version patch

# 마이너 버전 (1.0.0 → 1.1.0)
npm version minor

# 메이저 버전 (1.0.0 → 2.0.0)
npm version major
```

### 4.2 재퍼블리싱
```bash
npm publish
```

---

## 💻 Step 5: 다른 컴퓨터에 설치

### 5.1 전역 설치 (추천)
```bash
npm install -g ai-naming-standard
```

### 5.2 Claude Desktop 설정

**Windows:**
1. 파일 탐색기에서 주소창에 입력:
   ```
   %APPDATA%\Claude
   ```

2. `claude_desktop_config.json` 파일 생성/수정:
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
1. 터미널에서:
   ```bash
   mkdir -p ~/.config/claude
   nano ~/.config/claude/claude_desktop_config.json
   ```

2. 같은 내용 추가

### 5.3 언어 설정
```bash
# Windows
set MCP_LANG=ko

# Mac/Linux
export MCP_LANG=ko
```

### 5.4 Claude Desktop 재시작

---

## 🔍 Step 6: 설치 확인

### 6.1 패키지 확인
```bash
# 설치된 위치 확인
npm list -g ai-naming-standard

# 버전 확인
npx ai-naming-standard --version
```

### 6.2 Claude에서 테스트
```
Claude에서 입력:
"Generate file name for user authentication controller"
```

---

## ⚠️ 문제 해결

### NPM 퍼블리싱 에러

#### 1. 401 Unauthorized
```bash
# 다시 로그인
npm logout
npm login
```

#### 2. 403 Forbidden (이름 중복)
```bash
# package.json에서 name 변경
"name": "ai-naming-standard-v2"
```

#### 3. 패키지 크기 초과
```bash
# .npmignore 확인
# 불필요한 파일 제외
```

### Claude Desktop 연결 안 됨

#### 1. 경로 확인
```bash
# 전역 설치 위치 확인
npm root -g
```

#### 2. 설정 파일 위치
```bash
# Windows
echo %APPDATA%\Claude\claude_desktop_config.json

# Mac/Linux  
echo ~/.config/claude/claude_desktop_config.json
```

#### 3. JSON 문법 확인
- 쉼표, 중괄호, 따옴표 확인
- JSON 검증 사이트: https://jsonlint.com/

---

## 📊 통계 확인

### NPM 다운로드 통계
```bash
# 주간 다운로드
npm view ai-naming-standard

# 상세 통계 (웹)
https://www.npmjs.com/package/ai-naming-standard
```

---

## 🎯 다음 단계

1. **GitHub 저장소 생성**
   - https://github.com/new
   - Repository name: ai-naming-standard

2. **코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial release v1.0.0"
   git remote add origin https://github.com/leipokr/ai-naming-standard.git
   git push -u origin main
   ```

3. **README 뱃지 업데이트**
   - npm 버전 뱃지
   - 다운로드 수 뱃지
   - GitHub 스타 뱃지

---

## 📝 퍼블리싱 체크리스트

- [ ] NPM 계정 생성
- [ ] npm login 완료
- [ ] package.json 정보 확인
- [ ] .npmignore 파일 생성
- [ ] README.md 작성
- [ ] 테스트 실행 (node test-languages.js)
- [ ] npm publish --dry-run 테스트
- [ ] npm publish 실행
- [ ] NPM 페이지 확인
- [ ] 다른 컴퓨터에서 설치 테스트
- [ ] Claude Desktop 연동 테스트
- [ ] GitHub 저장소 생성
- [ ] 코드 푸시

---

**축하합니다! 🎉 AI Naming Standard MCP가 전 세계에 공개됩니다!**
