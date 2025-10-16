# 🚀 Quick Start Guide - v5.0.2 (ChatGPT Enhanced)

## 📌 이 문서의 목적
빠르게 AI 네이밍 컨벤션을 적용하고 시작하기 위한 템플릿과 명령어 모음

---

## 1️⃣ 즉시 시작 템플릿 (복사해서 사용)

### 🏗️ 폴더 구조 생성 

#### 방법 1: 수동 생성 (기본)
```bash
# Windows/Mac/Linux 공통
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 첫 파일 생성
echo "// AI Naming Convention v5.0.2" > 03_ACTIVE/001_FE_Main_C_App_DEV.js
```

#### 방법 2: 자동화 스크립트 (🆕 v5.0.1)
```python
# init_v5_project.py
import os
import sys
import json
from datetime import datetime

def init_project(name="my-project", project_type="web"):
    """프로젝트 자동 초기화 with AI 권한"""
    
    # 1. 폴더 생성 with 권한
    folders = {
        "00_DOCS": {"perm": "READ_ONLY", "header": "⚠️ NO-MODIFY"},
        "01_CONFIG": {"perm": "NO_ACCESS", "header": "⚠️ CRITICAL"},
        "02_STATIC": {"perm": "READ_ADD"},
        "03_ACTIVE": {"perm": "FULL_ACCESS"},
        "04_TEST": {"perm": "CREATE_MODIFY"},
        "05_BUILD": {"perm": "CREATE_ONLY"},
        "06_LOGS": {"perm": "WRITE_ONLY"}
    }
    
    for folder, config in folders.items():
        os.makedirs(folder, exist_ok=True)
        if config.get('header'):
            with open(f"{folder}/.ai_permission", 'w') as f:
                f.write(f"# {config['header']}\n")
    
    # 2. 첫 파일 생성
    templates = {
        'web': '001_FE_App-Main_C_Component_DEV.jsx',
        'api': '001_BE_Server-Init_X_Bootstrap_DEV.py',
        'cli': '001_SH_CLI-Main_X_Entry_COMMON.py'
    }
    
    first_file = templates.get(project_type, templates['web'])
    open(f"03_ACTIVE/{first_file}", 'w').close()
    
    print(f"✅ {name} 프로젝트 생성!")
    print(f"📄 첫 파일: 03_ACTIVE/{first_file}")

# 실행
init_project(sys.argv[1] if len(sys.argv) > 1 else "my-project")

# 정적 파일 생성 (🆕 v5.0.1 ASSET_ 접두사 필수)
echo "<!-- Static Asset -->" > 02_STATIC/ASSET_logo.png
echo "<!-- Template -->" > 02_STATIC/TEMPLATE_email.html
echo "{\"theme\": \"default\"}" > 02_STATIC/CONFIG_theme.json

# 테스트 파일 생성 (🆕 v5.0.1 인덱스 필수)
echo "// Test" > 04_TEST/001_TEST_Main_Unit_COMMON.test.js

# AI 권한 표시 (🆕 v5.0.1)
echo "# ⚠️ AI PERMISSION: NO-MODIFY" > 01_CONFIG/.ai_permission
```

### 📝 파일 생성 템플릿
```javascript
// 03_ACTIVE/[순번]_[레이어]_[도메인-기능]_[동작]_[상세]_[환경].[확장자]

// 예시 1: 프론트엔드
// 03_ACTIVE/001_FE_User-Login_C_Page_PROD.jsx
import React from 'react';

export default function LoginPage() {
    // [User-Login] 페이지 생성 (C)
    return <div>Login Page</div>;
}

// 예시 2: 백엔드
// 03_ACTIVE/002_BE_Auth-JWT_C_Service_PROD.py
def create_jwt_token(user_id):
    # [Auth-JWT] 토큰 생성 서비스 (C)
    pass

// 예시 3: 데이터베이스
// 03_ACTIVE/003_DB_User-Table_C_Schema_PROD.sql
CREATE TABLE users (
    -- [User-Table] 테이블 생성 (C)
    id INT PRIMARY KEY,
    email VARCHAR(255)
);
```

---

## 2️⃣ AI 프로젝트 명령어 템플릿

### 🛒 이커머스 프로젝트
```
"AI야, 03_ACTIVE 폴더에 이커머스 프로젝트 구조를 만들어줘:

사용자 관련:
- 001_FE_User-Register_C_Page_PROD.jsx (회원가입 페이지)
- 002_FE_User-Login_C_Page_PROD.jsx (로그인 페이지)
- 003_BE_User-Auth_C_Service_PROD.py (인증 서비스)

상품 관련:
- 010_FE_Product-List_R_Page_PROD.jsx (상품 목록)
- 011_FE_Product-Detail_R_Component_PROD.jsx (상품 상세)
- 012_BE_Product-Search_R_API_PROD.py (상품 검색 API)

주문 관련:
- 020_FE_Cart-View_R_Page_PROD.jsx (장바구니)
- 021_BE_Order-Create_C_Service_PROD.py (주문 생성)
- 022_DB_Order-Schema_C_Table_PROD.sql (주문 테이블)"
```

### 📝 블로그 프로젝트
```
"AI야, 03_ACTIVE 폴더에 블로그 시스템을 만들어줘:

- 001_FE_Post-List_R_Page_PROD.jsx (글 목록)
- 002_FE_Post-View_R_Page_PROD.jsx (글 읽기)
- 003_FE_Post-Write_C_Page_PROD.jsx (글 쓰기)
- 004_BE_Post-CRUD_X_Service_PROD.py (CRUD 서비스)
- 005_DB_Post-Schema_C_Table_PROD.sql (포스트 테이블)"
```

### 🏢 회사 홈페이지
```
"AI야, 03_ACTIVE 폴더에 회사 홈페이지를 만들어줘:

- 001_FE_Home-Main_R_Page_PROD.jsx (메인 페이지)
- 002_FE_About-Company_R_Page_PROD.jsx (회사 소개)
- 003_FE_Product-Service_R_Page_PROD.jsx (제품/서비스)
- 004_FE_Contact-Form_C_Component_PROD.jsx (문의 폼)
- 005_BE_Contact-Email_S_Service_PROD.py (이메일 전송)"
```

---

## 3️⃣ ChatGPT 개선사항 반영 (v5.0.1 ~ v5.0.2)

### 🔥 v5.0.1 5가지 핵심 개선

### 🆕 02_STATIC 네이밍 규칙
```bash
# 자산 파일: ASSET_ 접두사
02_STATIC/ASSET_logo.png
02_STATIC/ASSET_favicon.ico
02_STATIC/ASSET_background.jpg

# 템플릿 파일: TEMPLATE_ 접두사  
02_STATIC/TEMPLATE_email.html
02_STATIC/TEMPLATE_report.html

# 설정 파일: CONFIG_ 접두사
02_STATIC/CONFIG_theme.json
02_STATIC/CONFIG_styles.css
```

### 🆕 04_TEST 인덱싱 규칙
```bash
# 패턴: [Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]
04_TEST/001_TEST_User-Login_Unit_COMMON.test.js
04_TEST/002_TEST_Payment-Process_Integration_STG.test.py
04_TEST/003_TEST_Order-Flow_E2E_PROD.test.js
```

### 🆕 AI 권한 헤더
```javascript
// 00_DOCS와 01_CONFIG 파일 상단에 필수
/* ⚠️ AI PERMISSION: NO-MODIFY */
```

### 🆕 의존성 표현 ([Deps] 마커)
```javascript
// 03_ACTIVE/001_BE_User-Auth_C_Service_PROD.py
# [Deps: 001-1, 001-2] 순차 실행 필요
# [Deps: 001a, 001b] 병렬 실행 가능
```

### 🔅 v5.0.2 외부 파일 관리

#### 📦 EXTERNAL_ 접두사 사용
```bash
# 패턴: EXTERNAL_[Type]_[Vendor]_[Version].[ext]
02_STATIC/EXTERNAL_JS_TossPayments_v1.2.0.min.js
02_STATIC/EXTERNAL_SDK_Firebase_v12.1.0.zip
02_STATIC/EXTERNAL_LIB_jQuery_v3.6.0.min.js

# 버전 업데이트 시 _DEPRECATED 추가
02_STATIC/EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js  # 기존
02_STATIC/EXTERNAL_JS_jQuery_v3.6.0.min.js            # 신규
```

#### 🔒 SHA256 무결성 검증
```javascript
// 00_DOCS/EXTERNAL_DEPENDENCIES.md
| File | Version | SHA256 | Date |
|------|---------|--------|------|
| EXTERNAL_JS_TossPayments_v1.2.0.min.js | v1.2.0 | abc123... | 2025-10-14 |
```

## 4️⃣ 빠른 참조표

### 📂 폴더 의미
| 폴더 | 용도 | AI 권한 | 네이밍 규칙 |
|------|------|---------|------------|
| **03_ACTIVE** | 실제 코드 | 모든 권한 ✅ | 필수 100% |
| 00_DOCS | 문서 | 읽기만 ⚠️ NO-MODIFY | 자유 |
| 01_CONFIG | 설정 | 수정 금지 ⚠️ NO-MODIFY | 자유 |
| 02_STATIC | 정적 자원 | 읽기/추가 | **ASSET_** 접두사 필수 |
| 04_TEST | 테스트 | 생성/수정 | **001_TEST_** 형식 필수 |

### 🏗️ 레이어 코드
| 코드 | 의미 | 예시 |
|------|------|------|
| FE | Frontend | React, Vue |
| BE | Backend | Node, Python |
| DB | Database | SQL, MongoDB |
| API | API Gateway | REST, GraphQL |

### 🎯 동작 코드 (Action)
| 코드 | 의미 | 사용 예시 |
|------|------|-----------|
| C | Create | 생성, 추가 |
| R | Read | 조회, 검색 |
| U | Update | 수정, 변경 |
| D | Delete | 삭제, 제거 |
| V | Validate | 검증 |
| X | Execute | 실행 |
| S | Send | 전송 |

### 🌍 환경 코드
| 코드 | 의미 |
|------|------|
| DEV | 개발 |
| STG | 스테이징 |
| PROD | 운영 |
| COMMON | 공통 |

---

## 4️⃣ 관계 표현 (고급)

### 순번 관계 유형
```
# 의존성 (순차 실행)
001_FE_Main_C_Page_PROD.js
001-1_FE_Main_V_Validator_PROD.js
001-2_FE_Main_X_Handler_PROD.js

# 병렬성 (동시 실행)
002a_BE_Email_S_Service_PROD.py
002b_BE_SMS_S_Service_PROD.py
002c_BE_Push_S_Service_PROD.py

# 종속성 (부모-자식)
003_FE_User_C_Page_PROD.jsx
003s1_FE_User_C_Modal_PROD.jsx
003s2_FE_User_C_Form_PROD.jsx
```

---

## 5️⃣ 실전 시작 스크립트

### 🚀 프로젝트 초기화 (all-in-one)
```bash
#!/bin/bash
# init-project.sh

# 1. 폴더 생성
mkdir -p 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 2. 기본 문서 생성
echo "# Project Name" > 00_DOCS/README.md
echo "# API Documentation" > 00_DOCS/API.md

# 3. 설정 파일 생성
echo "ENV=dev" > 01_CONFIG/config.dev.env
echo "ENV=prod" > 01_CONFIG/config.prod.env

# 4. 첫 코드 파일 생성
cat > 03_ACTIVE/001_FE_App-Main_C_Component_DEV.js << 'EOF'
// AI Naming Convention Applied
// Layer: FE (Frontend)
// Domain-Feature: App-Main
// Action: C (Create)
// Detail: Component
// Environment: DEV

console.log("Project Started with AI Naming Convention!");
EOF

# 5. 테스트 구조
mkdir -p 04_TEST/unit 04_TEST/e2e

# 6. Git 설정
cat > .gitignore << 'EOF'
01_CONFIG/*.env
01_CONFIG/secrets.*
05_BUILD/
06_LOGS/
node_modules/
*.log
.env
EOF

echo "✅ Project initialized with AI Naming Convention!"
echo "📂 Structure created: 00_DOCS ~ 06_LOGS"
echo "📝 First file: 03_ACTIVE/001_FE_App-Main_C_Component_DEV.js"
echo "🚀 Ready to start development!"
```

---

## 6️⃣ 체크리스트

### ✅ 시작 전 확인
- [ ] 7개 폴더 생성 완료
- [ ] 03_ACTIVE 폴더 확인
- [ ] 첫 파일 생성
- [ ] 팀원 공유

### ✅ 네이밍 확인
- [ ] 순번 (001부터)
- [ ] 레이어 (FE/BE/DB)
- [ ] 도메인-기능
- [ ] 동작 (CRUD+)
- [ ] 환경 (DEV/PROD)

### ✅ AI 요청 확인
- [ ] "03_ACTIVE 폴더에..." 언급
- [ ] 구체적인 기능 설명
- [ ] 파일명 규칙 포함

---

## 💡 Pro Tips

1. **파일이 100개 넘으면**: 03_ACTIVE 내부에 도메인 폴더 생성
   ```
   03_ACTIVE/
     ├── FE_User/
     ├── BE_Payment/
     └── DB_Common/
   ```

2. **import 경로 단축**: webpack/vite alias 설정
   ```javascript
   // vite.config.js
   alias: {
     '@active': path.resolve(__dirname, '03_ACTIVE')
   }
   ```

3. **자동 네이밍 검증**: pre-commit hook
   ```bash
   # .git/hooks/pre-commit
   npm run validate-naming
   ```

---

## 🔗 관련 문서
- 전체 설명: [AI_NAMING_CONVENTION_FINAL.md](../AI_NAMING_CONVENTION_FINAL.md)
- 5분 시작: [QUICK_START.md](../QUICK_START.md)

---

**Version**: v5.0.2 (ChatGPT Enhanced + External Dependencies)  
**Updated**: 2025.10.14  
**추가 기능**: 자동화 스크립트, 외부 파일 관리, AI 권한 강화
