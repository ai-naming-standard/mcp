# 🚀 스크립트 실행 가이드 - AI 네이밍 컨벤션 자동 초기화

> **버전**: v5.0.2 FINAL  
> **업데이트**: 2025.10.14  
> **목적**: 프로젝트 구조 자동 생성 및 AI 개발 환경 설정

---

## 📌 개요

AI 네이밍 컨벤션을 적용한 프로젝트를 **단 한 번의 명령어**로 자동 생성합니다.

### ✨ 자동 생성 항목
- ✅ 7개 표준 폴더 (00_DOCS ~ 06_LOGS)
- ✅ AI 권한 파일 (.ai_permission)
- ✅ 기본 문서 (README.md, EXTERNAL_DEPENDENCIES.md)
- ✅ 프로젝트 타입별 첫 코드 파일
- ✅ .gitignore 설정

---

## 🎯 스크립트 선택 가이드

| 스크립트 | 환경 | 추천 대상 | 특징 |
|---------|------|-----------|------|
| **SCRIPT_init_structure.py** | Python 3.x+ | Python 개발자, 범용 | 🔥 가장 안정적 |
| **SCRIPT_init_structure.js** | Node.js | JavaScript/TypeScript 개발자 | ⚡ 빠른 실행 |
| **SCRIPT_init_structure.bat** | Windows | Windows 사용자 | 🪟 설치 불필요 |

---

## 📦 1. Python 버전 (.py)

### 설치 요구사항
```bash
# Python 버전 확인
python --version  # Python 3.6 이상 필요
```

### 기본 사용법
```bash
# 웹 프로젝트 (기본)
python SCRIPT_init_structure.py my-project

# API 프로젝트
python SCRIPT_init_structure.py my-api api

# ML 프로젝트
python SCRIPT_init_structure.py ml-model ml
```

### 실행 화면
```
🚀 Initializing AI-Standard Project: my-project
📦 Project Type: web
🔧 Version: v5.0.2 with External Dependency Management
--------------------------------------------------

📁 Creating folder structure...
✅ Created: 00_DOCS - Documentation (AI Read-Only)
✅ Created: 01_CONFIG - Configuration (AI No Access - CRITICAL)
✅ Created: 02_STATIC - Static Resources (Prefix required)
✅ Created: 03_ACTIVE - Active Development (AI Primary Workspace)
✅ Created: 04_TEST - Tests (Indexed naming required)
✅ Created: 05_BUILD - Build Output
✅ Created: 06_LOGS - Logs

📝 Creating initial files...
✅ Created: 00_DOCS/README.md
✅ Created: 00_DOCS/EXTERNAL_DEPENDENCIES.md

==================================================
✨ Project 'my-project' initialized successfully!
==================================================
```

---

## ⚡ 2. Node.js 버전 (.js)

### 설치 요구사항
```bash
# Node.js 버전 확인
node --version  # Node.js 12.x 이상 권장
```

### 기본 사용법
```bash
# 웹 프로젝트 (기본)
node SCRIPT_init_structure.js my-project

# API 프로젝트
node SCRIPT_init_structure.js my-api api

# ML 프로젝트
node SCRIPT_init_structure.js ml-model ml
```

### 특징
- ⚡ 빠른 실행 속도
- 🔧 외부 패키지 다운로드 지원
- 🔐 SHA256 무결성 검증

---

## 🪟 3. Windows Batch 버전 (.bat)

### 설치 요구사항
```
없음 - Windows 기본 지원
```

### 기본 사용법
```cmd
REM 웹 프로젝트 (기본)
SCRIPT_init_structure.bat my-project

REM API 프로젝트
SCRIPT_init_structure.bat my-api api

REM ML 프로젝트
SCRIPT_init_structure.bat ml-model ml
```

### 특징
- 🪟 Windows 네이티브
- 📦 추가 설치 불필요
- 🚀 즉시 사용 가능

---

## 📊 생성되는 프로젝트 구조

### 실행 전
```
현재 디렉토리/
└── (비어있음)
```

### 실행 후
```
my-project/
├── 00_DOCS/
│   ├── .ai_permission              # AI 권한: READ_ONLY
│   ├── README.md                   # 프로젝트 문서
│   └── EXTERNAL_DEPENDENCIES.md    # 외부 라이브러리 목록
│
├── 01_CONFIG/
│   └── .ai_permission              # AI 권한: NO_ACCESS ⚠️
│
├── 02_STATIC/
│   ├── .ai_permission              # AI 권한: READ_ADD
│   └── EXTERNAL_README.md          # 외부 파일 가이드
│
├── 03_ACTIVE/
│   ├── .ai_permission              # AI 권한: FULL_ACCESS ✅
│   └── 001_FE_App-Main_C_Component_DEV.jsx  # 첫 코드 파일
│
├── 04_TEST/
│   └── .ai_permission              # AI 권한: CREATE_MODIFY
│
├── 05_BUILD/
│   └── .ai_permission              # AI 권한: CREATE_ONLY
│
├── 06_LOGS/
│   └── .ai_permission              # AI 권한: WRITE_ONLY
│
└── .gitignore                      # Git 설정
```

---

## 🤖 AI 자동 인식 워크플로우

### 1️⃣ 스크립트 실행
```bash
python SCRIPT_init_structure.py my-shop web
```

### 2️⃣ 프로젝트 구조 생성
- 7개 폴더 자동 생성
- 각 폴더에 `.ai_permission` 파일 배치

### 3️⃣ AI가 권한 파일 읽기
```
00_DOCS/.ai_permission
┌─────────────────────────────────┐
│ Permission: READ_ONLY           │
│ Note: ⚠️ AI PERMISSION: NO-MODIFY│
│ Description: AI cannot modify   │
└─────────────────────────────────┘
```

### 4️⃣ AI가 규칙 적용
```
사용자: "로그인 페이지 만들어줘"

AI 처리:
1. 03_ACTIVE 폴더 확인 → FULL_ACCESS ✅
2. 네이밍 규칙 적용 → 001_FE_User-Login_C_Page_PROD.jsx
3. 파일 생성 및 코드 작성
4. 테스트 파일 자동 생성 → 04_TEST/001_TEST_User-Login_Unit_COMMON.test.js
```

---

## 💡 프로젝트 타입별 상세

### 🌐 web (웹 애플리케이션)
```bash
python SCRIPT_init_structure.py my-shop web
```

**자동 생성 파일:**
- `03_ACTIVE/001_FE_App-Main_C_Component_DEV.jsx`

**적합한 프로젝트:**
- React / Vue / Angular 프로젝트
- SPA (Single Page Application)
- PWA (Progressive Web App)

### 🔌 api (백엔드 API)
```bash
python SCRIPT_init_structure.py my-api api
```

**자동 생성 파일:**
- `03_ACTIVE/001_BE_Server-Init_X_Bootstrap_DEV.py`

**적합한 프로젝트:**
- REST API
- GraphQL API
- 마이크로서비스

### 🤖 ml (머신러닝)
```bash
python SCRIPT_init_structure.py ml-model ml
```

**자동 생성 파일:**
- `03_ACTIVE/001_ML_Model-Init_C_Pipeline_DEV.py`

**적합한 프로젝트:**
- TensorFlow / PyTorch 프로젝트
- 데이터 분석
- AI 모델 개발

---

## 🔄 실행 전/후 비교

### ❌ 스크립트 없이 수동 작업
```bash
# 1. 폴더 7개 일일이 생성
mkdir 00_DOCS
mkdir 01_CONFIG
mkdir 02_STATIC
mkdir 03_ACTIVE
mkdir 04_TEST
mkdir 05_BUILD
mkdir 06_LOGS

# 2. 권한 파일 7개 일일이 생성
echo "Permission: READ_ONLY" > 00_DOCS/.ai_permission
# ... (반복 7번)

# 3. 문서 파일 작성
# ... (수동으로 내용 입력)

# 소요 시간: 약 15-20분 ⏱️
```

### ✅ 스크립트로 자동 작업
```bash
# 단 한 줄!
python SCRIPT_init_structure.py my-project

# 소요 시간: 약 3초 ⚡
```

---

## 🎯 다음 단계

### 1. AI와 대화 시작
```
"AI야, 03_ACTIVE 폴더에 User-Login 기능을 추가해줘"
```

### 2. AI가 자동으로:
- ✅ 폴더 권한 확인 (03_ACTIVE = FULL_ACCESS)
- ✅ 파일명 규칙 적용
- ✅ 코드 생성
- ✅ 테스트 파일 생성

### 3. 결과 확인
```
03_ACTIVE/
└── 001_FE_User-Login_C_Page_PROD.jsx  ✅ 생성됨

04_TEST/
└── 001_TEST_User-Login_Unit_COMMON.test.js  ✅ 자동 생성됨
```

---

## ❓ 자주 묻는 질문

### Q1: 기존 프로젝트에도 사용 가능한가요?
**A:** 새 폴더에서 실행 후, 기존 파일을 마이그레이션하는 것을 권장합니다.

### Q2: 스크립트가 실행되지 않아요
**A:** 
```bash
# Python 버전 확인
python --version

# 실행 권한 부여 (Linux/Mac)
chmod +x SCRIPT_init_structure.py

# Windows: 관리자 권한으로 실행
```

### Q3: 프로젝트 타입을 잘못 선택했어요
**A:** 새 폴더에서 다시 실행하거나, 첫 파일만 수동으로 변경하세요.

### Q4: .ai_permission 파일을 삭제해도 되나요?
**A:** ❌ 삭제하지 마세요. AI가 권한을 인식하지 못합니다.

---

## 🔧 고급 사용법

### 커스텀 설정으로 실행
```python
# Python 스크립트 수정
# SCRIPT_init_structure.py 열기

# 첫 파일 커스터마이징
templates = {
    'web': "001_FE_Custom-Start_C_Component_DEV.jsx",  # 변경
    'api': "001_BE_Custom-API_X_Bootstrap_DEV.py",     # 변경
}
```

### 다중 프로젝트 생성
```bash
# 배치 스크립트 작성 (Windows)
@echo off
python SCRIPT_init_structure.py project-frontend web
python SCRIPT_init_structure.py project-backend api
python SCRIPT_init_structure.py project-ml ml
```

---

## 📞 지원 및 문의

**문제 발생 시:**
1. 스크립트 버전 확인 (v5.0.2)
2. 환경 요구사항 재확인
3. GitHub Issue 제출

**관련 문서:**
- [AI_NAMING_CONVENTION_FINAL.md](AI_NAMING_CONVENTION_FINAL.md) - 전체 가이드
- [QUICK_START.md](QUICK_START.md) - 빠른 시작
- [CHANGELOG_v5.md](CHANGELOG_v5.md) - 변경 사항

---

**Version**: v5.0.2  
**Updated**: 2025.10.14  
**Status**: Production Ready ✅
