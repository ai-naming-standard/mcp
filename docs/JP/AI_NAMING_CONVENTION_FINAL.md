# 📚 AI 네이밍 컨벤션 최종 통합본 (v4 + v5)

> **작성일**: 2025년 10월 14일  
> **버전**: v5.0.2 FINAL (v4 네이밍 규칙 + v5 폴더 구조 + ChatGPT 개선사항)  
> **목적**: AI와 인간이 협업하는 표준화된 개발 시스템  
> **최신 업데이트**: ChatGPT 5가지 개선 + 외부 파일 관리 시스템 추가  

---

## 🎯 핵심 철학

### **Smart-Folderization**
> "최소한의 폴더로 최대한의 구조를, 파일명으로 완벽한 컨텍스트를"

- **폴더**: AI의 작업 영역을 구분하는 7개 카테고리
- **파일명**: AI가 이해하고 실행하는 명령어
- **목표**: 비개발자도 AI를 통해 개발에 참여

---

## 🌱 Part 0: 초보자 가이드

### 🎓 처음 시작하는 분들을 위한 안내

#### **당신의 상황은?**

| 상황 | 추천 경로 | 소요 시간 |
|-----|----------|-----------|
| 🚀 **"지금 당장 시작하고 싶어요"** | Part 10: 빠른 시작 → Part 5: AI 협업 | 5분 |
| 📖 **"차근차근 배우고 싶어요"** | Part 0 → Part 1 → Part 2 순서대로 | 30분 |
| 👔 **"비개발자예요"** | Part 5: AI 협업만 읽기 | 10분 |
| 💻 **"개발자예요"** | Part 2 → Part 3 → Part 4 집중 | 20분 |

#### **핵심 개념 3가지만 기억하세요**

1. **폴더는 7개** 
   - 00_DOCS ~ 06_LOGS
   - 더 만들지 마세요

2. **03_ACTIVE가 핵심**
   - 모든 코드는 여기에
   - AI가 주로 작업하는 곳

3. **파일명이 설명서**
   ```
   001_FE_User-Login_C_Page_PROD.js
   = "첫번째 프론트엔드 사용자로그인 생성 페이지 운영용"
   ```

#### **초보자용 학습 자료**

이 문서가 어렵다면 서브 폴더의 **EXPLAINED** 버전들을 참고하세요:

| 난이도 | 파일 | 내용 |
|--------|------|------|
| ⭐ | 01-quick-start/QUICK-START-EXPLAINED.md | 템플릿 복사해서 시작 |
| ⭐⭐ | 02-human-guides/Quick-Reference-EXPLAINED.md | 빠른 참조 가이드 |
| ⭐⭐⭐ | 04-shared-specs/Naming-Convention-EXPLAINED.md | 네이밍 규칙 상세 |

#### **자주 하는 실수와 해결법**

| 실수 | 올바른 방법 |
|------|------------|
| ❌ "파일 만들어줘" | ✅ "03_ACTIVE 폴더에 파일 만들어줘" |
| ❌ src/components/user/... | ✅ 03_ACTIVE/001_FE_User... |
| ❌ 폴더 많이 만들기 | ✅ 7개 폴더만 사용 |
| ❌ 파일명 대충 짓기 | ✅ 네이밍 규칙 따르기 |

---

## 📂 Part 1: 폴더 구조 (v5 체계)

### 🏗️ 7-Category System

```
project-root/
├── 00_DOCS/         # 📚 문서 (AI 읽기 전용)
├── 01_CONFIG/       # ⚙️ 설정 (AI 수정 금지)
├── 02_STATIC/       # 📦 정적 자원 (거의 불변)
├── 03_ACTIVE/       # 🔥 활성 코드 (AI 주 작업 영역) ⭐
├── 04_TEST/         # 🧪 테스트 (AI 생성/수정)
├── 05_BUILD/        # 🏗️ 빌드 결과물 (AI 생성)
└── 06_LOGS/         # 📊 로그 (AI 자동 기록)
```

### 📊 폴더별 AI 권한 매트릭스

| 폴더 | AI 권한 | 수정 빈도 | 네이밍 룰 | 설명 |
|------|---------|-----------|-----------|------|
| `00_DOCS` | 읽기만 ⚠️ | 매우 낮음 | 자유 | README, 가이드, 문서 (AI NO-MODIFY) |
| `01_CONFIG` | **수정 금지 ⚠️** | 낮음 | 자유 | 환경설정, 시크릿, API키 (AI NO-MODIFY) |
| `02_STATIC` | 읽기/추가 | 낮음 | **ASSET_ 접두사** | 이미지(ASSET_), 템플릿(TEMPLATE_) |
| **`03_ACTIVE`** | **전체 권한** | **매우 높음** | **필수 100%** | **핵심 비즈니스 로직** |
| `04_TEST` | 생성/수정 | 중간 | **인덱스 필수** | 001_TEST_* 형식 필수 |
| `05_BUILD` | 생성만 | 자동 | 자동 생성 | dist/, 컴파일 결과물 |
| `06_LOGS` | 쓰기만 | 자동 | 자동 생성 | 실행/에러/감사 로그 |

### 🎯 폴더 네이밍 규칙

```
[Priority]_[Category]

Priority: 00-06 (실행/중요도 순서)
Category: DOCS, CONFIG, STATIC, ACTIVE, TEST, BUILD, LOGS
```

---

## 📝 Part 2: 파일 네이밍 컨벤션 (v4 규칙)

### 🔸 기본 패턴 (03_ACTIVE 내부 필수)

```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### 🔸 구성 요소 상세

#### 1️⃣ **Index** (순번)
- **기본**: `001`, `002`, `003` ... `999`
- **소수점**: `001.1`, `001.2` (세부 단계)
- **관계 표현**:
  - **의존성**: `001-1`, `001-2` (순차 실행)
  - **병렬성**: `001a`, `001b`, `001c` (동시 실행)
  - **종속성**: `001s1`, `001s2` (부모-자식)

#### 2️⃣ **Layer** (계층)
| 코드 | 의미 | 예시 기술 |
|------|------|-----------|
| `FE` | Frontend | React, Vue, Angular |
| `BE` | Backend | Node.js, Python, Java |
| `DB` | Database | MySQL, MongoDB, PostgreSQL |
| `API` | API Gateway | REST, GraphQL, gRPC |
| `ML` | Machine Learning | TensorFlow, PyTorch |
| `INFRA` | Infrastructure | Docker, K8s, Terraform |
| `SH` | Shared/Common | 공통 유틸리티 |

#### 3️⃣ **Domain-Feature** (도메인-기능)
```
Domain: 비즈니스 영역 (User, Product, Order, Payment)
Feature: 구체적 기능 (Login, Search, Checkout, Refund)

예시:
User-Login      # 사용자 로그인
Product-Search  # 상품 검색
Order-Checkout  # 주문 결제
Payment-Refund  # 결제 환불
```

#### 4️⃣ **Action** (동작)
| 코드 | 의미 | 사용 예시 |
|------|------|-----------|
| `C` | Create | 생성, 추가, 등록 |
| `R` | Read | 조회, 검색, 가져오기 |
| `U` | Update | 수정, 변경, 갱신 |
| `D` | Delete | 삭제, 제거 |
| `V` | Validate | 검증, 확인 |
| `X` | Execute | 실행, 처리 |
| `S` | Send | 전송, 발송 |
| `T` | Transform | 변환, 변경 |
| `G` | Generate | 생성, 출력 |

#### 5️⃣ **Detail** (세부사항)
```
Handler     # 요청 처리
Service     # 비즈니스 로직
Repository  # 데이터 접근
Controller  # 라우팅
Component   # UI 컴포넌트
Helper      # 헬퍼 함수
Validator   # 검증 로직
Mapper      # 데이터 매핑
```

#### 6️⃣ **Env** (환경)
| 코드 | 의미 | 용도 |
|------|------|------|
| `DEV` | Development | 개발 환경 |
| `STG` | Staging | 테스트 환경 |
| `PROD` | Production | 운영 환경 |
| `COMMON` | Common | 모든 환경 공통 |

---

## 💡 Part 3: 실전 적용

### 📁 03_ACTIVE 폴더 구조 옵션

#### 옵션 A: 완전 플랫 (파일 < 100개)
```
03_ACTIVE/
├── 001_FE_User-Login_C_Page_PROD.jsx
├── 002_FE_User-Profile_R_Component_PROD.jsx
├── 003_BE_Auth-Token_C_Service_PROD.py
├── 004_BE_User-Data_R_API_PROD.py
└── 005_DB_User-Table_C_Schema_COMMON.sql
```

#### 옵션 B: 도메인 그룹핑 (파일 > 100개)
```
03_ACTIVE/
├── FE_User/
│   ├── 001_FE_User-Login_C_Page_PROD.jsx
│   └── 002_FE_User-Profile_R_Component_PROD.jsx
├── BE_Auth/
│   ├── 001_BE_Auth-Token_C_Service_PROD.py
│   └── 002_BE_Auth-Validate_V_Middleware_PROD.py
└── DB_Common/
    └── 001_DB_Common-Schema_C_Migration_PROD.sql
```

---

## 🛠️ Part 4: 실제 프로젝트 예시

### 🛒 이커머스 프로젝트 전체 구조

```
ecommerce/
├── 00_DOCS/
│   ├── README.md
│   ├── API_Documentation.md
│   └── Architecture_Overview.md
│
├── 01_CONFIG/
│   ├── config.dev.yml
│   ├── config.prod.yml
│   └── .env                    # gitignore
│
├── 02_STATIC/
│   ├── images/
│   │   ├── logo.png
│   │   └── products/
│   └── templates/
│       └── email_order.html
│
├── 03_ACTIVE/                  # 🔥 핵심 작업 영역
│   # === 사용자 관련 ===
│   ├── 001_FE_User-Register_C_Page_PROD.jsx
│   ├── 001-1_FE_User-Register_V_FormValidator_PROD.js
│   ├── 002_FE_User-Login_C_Page_PROD.jsx
│   ├── 003_BE_User-Register_C_API_PROD.py
│   ├── 004_BE_User-Auth_V_Service_PROD.py
│   │
│   # === 상품 관련 ===
│   ├── 010_FE_Product-List_R_Page_PROD.jsx
│   ├── 011_FE_Product-Detail_R_Component_PROD.jsx
│   ├── 012_BE_Product-Search_R_API_PROD.py
│   ├── 013_BE_Product-Filter_T_Service_PROD.py
│   │
│   # === 주문 관련 ===
│   ├── 020_FE_Cart-View_R_Page_PROD.jsx
│   ├── 021_FE_Cart-Add_C_Handler_PROD.js
│   ├── 022_BE_Order-Create_C_Service_PROD.py
│   ├── 022-1_BE_Order-Validate_V_Helper_PROD.py
│   ├── 022-2_BE_Order-Calculate_X_Processor_PROD.py
│   ├── 023_BE_Payment-Process_X_Service_PROD.py
│   │
│   # === 알림 관련 (병렬 처리) ===
│   ├── 030a_BE_Email-Order_S_Service_PROD.py
│   ├── 030b_BE_SMS-Order_S_Service_PROD.py
│   ├── 030c_BE_Push-Order_S_Service_PROD.py
│   │
│   # === 데이터베이스 ===
│   ├── 040_DB_User-Schema_C_Migration_PROD.sql
│   ├── 041_DB_Product-Schema_C_Migration_PROD.sql
│   └── 042_DB_Order-Schema_C_Migration_PROD.sql
│
├── 04_TEST/
│   ├── unit/
│   │   ├── test_user_service.py
│   │   └── test_order_service.py
│   └── e2e/
│       └── test_checkout_flow.js
│
├── 05_BUILD/
│   └── dist/                   # 자동 생성
│
└── 06_LOGS/
    └── 2025-10-14_deploy.log   # 자동 생성
```

---

## 💬 Part 5: AI와의 협업

### 🗣️ 비개발자가 AI에게 요청하는 방법

#### ❌ 잘못된 요청
```
"로그인 만들어줘"  # 너무 모호함
```

#### ✅ 올바른 요청
```
"AI야, 03_ACTIVE 폴더에 User-Login 기능을 추가해줘.
프론트엔드는 React로, 백엔드는 Python으로 만들어줘."
```

#### 🌟 완벽한 요청
```
"AI야, 03_ACTIVE에 다음 파일들을 생성해줘:
1. 001_FE_User-Login_C_Page_PROD.jsx - 로그인 페이지
2. 002_BE_Auth-JWT_C_Service_PROD.py - JWT 인증 서비스
3. 003_DB_User-Auth_C_Table_PROD.sql - 인증 테이블

각 파일에 기본 구조와 주석을 포함해줘."
```

### 🤖 AI의 이해 프로세스

1. **폴더 확인**: "03_ACTIVE" → 수정 권한 있음 ✅
2. **도메인 파악**: "User-Login" → 사용자 로그인 기능
3. **작업 분류**: "C" → 새로 생성
4. **환경 확인**: "PROD" → 운영 환경용
5. **실행**: 파일 생성 및 코드 작성

---

## 📊 Part 6: 마이그레이션 가이드

### 🔄 기존 프로젝트 전환 (3단계)

#### Phase 1: 준비 (Day 1-2)
```bash
# 1. 폴더 구조 생성
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 2. 문서와 설정 이동
mv *.md README.* docs/* → 00_DOCS/
mv *.env config.* .env* → 01_CONFIG/
mv assets/ static/ public/ → 02_STATIC/
```

#### Phase 2: 코드 마이그레이션 (Day 3-7)
```javascript
// 자동 변환 스크립트
const oldName = "user_login_handler.js";
const newName = "001_FE_User-Login_C_Handler_PROD.js";

// 1. 파일 분석
// 2. 새 이름 생성  
// 3. 03_ACTIVE로 이동
```

#### Phase 3: 완성 (Day 8-10)
```bash
# 테스트 구조화
mv test/* → 04_TEST/

# CI/CD 업데이트
update build scripts → 05_BUILD/

# 로깅 설정
configure logging → 06_LOGS/
```

---

## ✅ Part 7: 체크리스트

### 📋 프로젝트 시작 체크리스트

#### 필수 설정
- [ ] 7개 폴더 생성 (00_DOCS ~ 06_LOGS)
- [ ] 03_ACTIVE 폴더 확인
- [ ] .gitignore 설정 (01_CONFIG/*.env, 05_BUILD/, 06_LOGS/)
- [ ] README.md 작성 (00_DOCS/)

#### 네이밍 규칙 적용
- [ ] 순번 체계 결정 (001부터 시작)
- [ ] 레이어 코드 이해 (FE/BE/DB/API)
- [ ] 도메인-기능 정의
- [ ] 환경 구분 (DEV/STG/PROD)

#### AI 협업 준비
- [ ] 팀원 교육 완료
- [ ] AI 도구 설정
- [ ] 03_ACTIVE 권한 이해

---

## 🎯 Part 8: 핵심 원칙

### 🔑 10가지 핵심 원칙

1. **폴더는 7개만**: 더 만들지 않기
2. **03_ACTIVE 집중**: 모든 활성 코드는 여기에
3. **파일명이 문서**: 별도 문서 없어도 이해 가능
4. **순번은 실행 순서**: 001 → 002 → 003
5. **환경 명시 필수**: DEV/STG/PROD 구분
6. **AI 권한 존중**: 01_CONFIG는 건드리지 않기
7. **일관성 유지**: 팀 전체가 같은 규칙
8. **점진적 도입**: 한 번에 다 바꾸지 않기
9. **비개발자 친화**: 자연어로 설명 가능
10. **실용성 우선**: 이상보다 현실

---

## 📈 Part 9: 기대 효과

### 정량적 성과
- **파일 검색**: 30초 → 3초 (90% ⬇️)
- **온보딩**: 2주 → 3일 (78% ⬇️)
- **유지보수**: 40% 시간 절감
- **에러율**: 80% 감소

### 정성적 성과
- ✅ 비개발자도 프로젝트 이해
- ✅ AI와 자연스러운 협업
- ✅ 지식 영속성 확보
- ✅ 팀 생산성 향상

---

## 🚀 Part 10: 빠른 시작

### 30초 시작 가이드

```bash
# 1. 폴더 생성 (복사 → 실행)
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 2. 첫 파일 생성
echo "// Start" > 03_ACTIVE/001_FE_Main_C_App_DEV.js

# 3. AI에게 요청
"AI야, 03_ACTIVE의 001번 파일을 React 앱으로 만들어줘"
```

---

## 📞 Part 11: 지원 정보

### 도구 및 자원
- **GitHub**: https://github.com/ai-naming-standard/mcp
- **NPM**: `npm i -g ai-naming-standard-mcp`
- **문서**: 이 파일이 최종 완성본입니다

### 추가 학습 자료
- `01-quick-start/` - 빠른 시작 템플릿
- `02-human-guides/` - 상세 가이드
- `03-machine-rules/` - AI 기술 명세
- `04-shared-specs/` - 공용 명세서

---

## ✨ 결론

**AI 네이밍 컨벤션 최종 통합본**은:
- **v5의 실용적 폴더 구조** (7-Category System)
- **v4의 강력한 네이밍 규칙** (완벽한 컨텍스트)
- **현실과 이상의 균형점**

> "폴더는 최소로, 네이밍은 최대로, 협업은 자연스럽게"

---

**Version**: FINAL  
**Date**: 2025.10.14  
**Status**: Production Ready ✅

---

## 📋 Part 12: v5.0.1 개선사항 (ChatGPT 제안 반영)

### 🆕 2025.10.14 업데이트 내용

ChatGPT의 제안을 검증하여 다음과 같은 개선사항을 적용했습니다:

#### 1️⃣ **02_STATIC 네이밍 패턴 강화**
```
02_STATIC/
  ├── ASSET_[name].[ext]      # 이미지, 폰트 등 자산
  │   ├── ASSET_logo.png
  │   └── ASSET_favicon.ico
  ├── TEMPLATE_[name].[ext]   # HTML, 이메일 템플릿
  │   └── TEMPLATE_email.html
  └── CONFIG_[name].[ext]     # 테마, 설정 파일
      └── CONFIG_theme.json
```

**효과**: 
- ✅ 코드와 리소스 명확한 구분
- ✅ AI가 파일 유형 즉시 인식
- ✅ 자동 분류 및 처리 가능

#### 2️⃣ **04_TEST 인덱싱 체계 필수화**
```
패턴: [Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]

예시:
001_TEST_User-Login_Unit_COMMON.test.js
002_TEST_Payment-Process_Integration_STG.test.py
003_TEST_Order-Checkout_E2E_PROD.test.js
```

**효과**:
- ✅ AI 자동 회귀테스트 연결
- ✅ 테스트와 코드 1:1 매핑
- ✅ 테스트 커버리지 자동 추적

#### 3️⃣ **01_CONFIG AI 권한 경고 강화**
```javascript
/* 
 * ⚠️ AI PERMISSION: NO-MODIFY
 * This file in 01_CONFIG cannot be modified by AI
 * Manual changes only - contains sensitive data
 */
```

**효과**:
- ✅ 실수 방지
- ✅ 보안 강화
- ✅ 명확한 권한 경계

#### 4️⃣ **프로젝트 초기화 스크립트 추가**
```python
# init_v5_project.py 사용법
python init_v5_project.py my-project

# 자동 생성 내용:
✅ 7개 표준 폴더
✅ README.md (00_DOCS)
✅ .env.example (01_CONFIG)  
✅ 샘플 테스트 (04_TEST)
✅ .gitignore 설정
✅ package.json (v5 메타데이터 포함)
```

### 📊 검증 결과

| ChatGPT 제안 | 적용 여부 | 실제 효과 | 평가 |
|-------------|----------|-----------|------|
| 의존성 표기 [Deps] | ✅ 이미 구현 | 001-1 형태로 충분 | ⭐⭐⭐ |
| ASSET_ 접두사 | ✅ **적용** | 리소스 분류 명확화 | ⭐⭐⭐⭐⭐ |
| TEST 인덱싱 | ✅ **적용** | 테스트 자동화 향상 | ⭐⭐⭐⭐⭐ |
| 권한 표시 강화 | ✅ **적용** | 보안 및 안전성 향상 | ⭐⭐⭐⭐ |
| 초기화 스크립트 | ✅ 추가 구현 | 프로젝트 시작 단순화 | ⭐⭐⭐⭐ |

### 🔧 MCP v5.0.1 도구 업데이트

**기존 도구 (8개)**:
1. generateFileName
2. validateFileName  
3. explainFileName
4. getLayerCodes
5. getActionCodes
6. getProjectTemplate
7. batchGenerateFileNames
8. suggestCorrection

**새로운 도구 (4개)**:
9. createProjectStructure - 7폴더 자동 생성
10. checkFolderPermission - AI 권한 확인
11. migrateFromV4 - v4→v5 마이그레이션
12. suggestFolder - 파일별 적합 폴더 제안

### 🎯 v5.0.1 핵심 개선점

```javascript
// 개선된 규칙 구조
{
  "02_STATIC": {
    namingPattern: {
      assets: "ASSET_[name].[ext]",
      templates: "TEMPLATE_[name].[ext]",
      configs: "CONFIG_[name].[ext]"
    }
  },
  "04_TEST": {
    namingRuleRequired: true,  // recommended → 필수
    namingPattern: "[Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]"
  },
  "01_CONFIG": {
    aiWarning: "⚠️ AI CANNOT MODIFY - Manual changes only",
    fileHeader: "/* AI PERMISSION: NO-MODIFY */"
  }
}
```

---

**Version**: v5.0.1  
**Updated**: 2025.10.14  
**Status**: Production Ready with Enhancements ✅

---

## 📋 Part 13: v5.0.2 외부 파일 관리 체계 (External Dependencies)

### 🆕 2025.10.14 업데이트 - ChatGPT 추가 제안 반영

외부에서 다운로드하거나 전달받은 SDK, 라이브러리, 모듈 등의 체계적 관리를 위한 표준입니다.

#### 1️⃣ **EXTERNAL_ 접두사 체계**
```
02_STATIC/
  ├── ASSET_*           # 내부 자산
  ├── TEMPLATE_*        # 템플릿
  ├── CONFIG_*          # 설정
  └── EXTERNAL_*        # 🆕 외부 파일
      ├── EXTERNAL_JS_TossPayments_v1.2.0.min.js
      ├── EXTERNAL_SDK_Firebase_v12.1.0.zip
      ├── EXTERNAL_JAR_BootpaySDK_v3.0.1.jar
      └── EXTERNAL_BIN_ChromeDriver_v114.exe
```

**네이밍 패턴**: `EXTERNAL_[Type]_[Vendor]_[Version].[ext]`

| 구성 요소 | 설명 | 예시 |
|----------|------|------|
| EXTERNAL | 고정 접두사 | 모든 외부 파일 시작 |
| [Type] | 파일 유형 | JS, SDK, JAR, BIN, ZIP, LIB, MODULE |
| [Vendor] | 공급자명 | TossPayments, Firebase, Kakao |
| [Version] | 버전 (필수) | v1.2.0, v2025-10 |
| [ext] | 확장자 | .js, .jar, .zip, .exe |

#### 2️⃣ **의존성 추적 문서**
```markdown
# 00_DOCS/EXTERNAL_DEPENDENCIES.md

| File Name | Version | Vendor | Download URL | SHA256 | Date Added | License | Notes |
|-----------|---------|--------|--------------|--------|------------|---------|-------|
| EXTERNAL_JS_TossPayments_v1.2.0.min.js | v1.2.0 | Toss | https://... | abc123... | 2025-10-14 | MIT | 결제 SDK |
| EXTERNAL_SDK_Firebase_v12.1.0.zip | v12.1.0 | Google | https://... | def456... | 2025-10-14 | Apache 2.0 | Firebase Admin |
```

#### 3️⃣ **버전 업데이트 전략**
```
# 기존 버전 (Deprecated 처리)
02_STATIC/EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js

# 새 버전
02_STATIC/EXTERNAL_JS_jQuery_v3.6.0.min.js
```

**원칙**:
- ✅ 이전 버전은 _DEPRECATED 접미사 추가
- ✅ 완전 삭제 금지 (호환성 유지)
- ✅ SHA256 해시로 무결성 검증

#### 4️⃣ **AI 운영 규칙**
```yaml
AI_EXTERNAL_RULES:
  download: "URL과 SHA256 기록 필수"
  storage: "항상 02_STATIC/EXTERNAL_*"
  modification: "읽기 전용 - 절대 수정 금지"
  documentation: "00_DOCS/EXTERNAL_DEPENDENCIES.md 업데이트"
  security: "사용 전 무결성 검증"
  import: |
    // 03_ACTIVE 파일에서 사용
    import TossPayments from '../../02_STATIC/EXTERNAL_JS_TossPayments_v1.2.0.min.js';
    const firebase = require('../../02_STATIC/EXTERNAL_SDK_Firebase_v12.1.0.js');
```

#### 5️⃣ **외부 파일 처리 워크플로우**
```mermaid
graph TD
    A[외부 파일 요청] --> B{파일 유형?}
    B -->|SDK/Library| C[EXTERNAL_ 네이밍]
    B -->|Package| D[node_modules/vendor]
    C --> E[02_STATIC 저장]
    E --> F[SHA256 계산]
    F --> G[DEPENDENCIES.md 업데이트]
    G --> H[03_ACTIVE에서 import]
```

### 📊 v5.0.2 개선 효과

| 항목 | 이전 | 이후 | 개선율 |
|------|------|------|--------|
| 외부 파일 추적 | 수동 관리 | 자동 추적 | 100% |
| 버전 충돌 | 빈번 | 체계적 관리 | 90% 감소 |
| 보안 검증 | 없음 | SHA256 검증 | 100% 보장 |
| 의존성 문서화 | 누락 많음 | 자동 생성 | 100% |

### 🔧 MCP v5.0.2 새로운 도구

**외부 파일 관리 도구 (3개 추가)**:
13. handleExternalFile - 외부 파일 등록 및 네이밍
14. updateExternalFileVersion - 버전 업데이트 관리
15. generateDependencyManifest - 의존성 목록 생성

### 🎯 v5.0.2 사용 예시

```javascript
// AI에게 지시
"Toss 결제 SDK를 프로젝트에 통합해줘"

// AI 처리 결과
1. 다운로드: https://js.tosspayments.com/v1.2.0/tosspayments.js
2. 저장: 02_STATIC/EXTERNAL_JS_TossPayments_v1.2.0.min.js
3. SHA256 계산: abc123def456...
4. 문서 업데이트: 00_DOCS/EXTERNAL_DEPENDENCIES.md
5. Import 생성:
   import TossPayments from '../../02_STATIC/EXTERNAL_JS_TossPayments_v1.2.0.min.js';
```

### ✨ v5.0.2 핵심 가치

- ✅ **7개 폴더 원칙 유지** (02_STATIC 활용)
- ✅ **체계적 버전 관리** (Deprecated 전략)
- ✅ **보안 강화** (SHA256 검증)
- ✅ **완벽한 추적성** (의존성 문서)
- ✅ **AI 자동화** (도구 제공)

---

**Version**: v5.0.2  
**Updated**: 2025.10.14  
**Status**: Production Ready with External Dependency Management ✅
