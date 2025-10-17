# 🚀 AI 네이밍 컨벤션 - 빠른 시작 가이드 v5.0.2

> **업데이트**: 2025.10.14 | **소요시간**: 5분 | **난이도**: ⭐

---

## 1️⃣ 폴더 만들기 (30초)
```bash
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS
```

## 2️⃣ 7개 폴더 이해하기 (1분)

| 폴더 | 용도 | AI 권한 | ⚠️ 주의사항 |
|------|------|---------|-------------|
| 00_DOCS | 문서 | 읽기만 | `⚠️ AI NO-MODIFY` 헤더 |
| 01_CONFIG | 설정 | **수정 금지** 🔴 | `⚠️ AI NO-MODIFY - CRITICAL` |
| 02_STATIC | 자원 | 읽기/추가 | **접두사 필수**: ASSET_*, TEMPLATE_*, CONFIG_* |
| **03_ACTIVE** | **실제 코드** | **전체 권한** ✅ | 💥 **모든 코드는 여기에!** |
| 04_TEST | 테스트 | 생성/수정 | **001_TEST_* 인덱스 필수** |
| 05_BUILD | 빌드 | 자동 생성 | dist/, 컴파일 결과 |
| 06_LOGS | 로그 | 자동 기록 | 실행/에러 로그 |

## 3️⃣ 파일명 패턴 마스터 (2분)

### 📝 기본 공식
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### 🔢 실제 예시
```
001_FE_User-Login_C_Page_PROD.js
```
- **001**: 실행 순서
- **FE**: Frontend 계층
- **User-Login**: 사용자 로그인 기능
- **C**: Create 동작
- **Page**: 페이지 타입
- **PROD**: Production 환경

### 🆕 의존성 표현 (v5.0.1)
```
001-1, 001-2    # 순차 실행 (1 다음 2)
001a, 001b      # 병렬 실행 (동시에)
001s1, 001s2    # 종속 관계 (부모-자식)
[Deps: 001,002] # 명시적 의존성 표시
```

## 4️⃣ 핵심 코드표 (빠른 참조)

### 📊 Layer 코드
| 코드 | 의미 | 예시 |
|------|------|------|
| **FE** | Frontend | React, Vue |
| **BE** | Backend | Node.js, Python |
| **DB** | Database | MySQL, MongoDB |
| **API** | API Gateway | REST, GraphQL |
| **ML** | Machine Learning | AI 모델 |

### ⚡ Action 코드
| 코드 | 의미 | 사용 예 |
|------|------|---------|
| **C** | Create | 생성, 추가 |
| **R** | Read | 조회, 검색 |
| **U** | Update | 수정, 변경 |
| **D** | Delete | 삭제, 제거 |
| **V** | Validate | 검증 |
| **X** | Execute | 실행 |

### 🌍 환경 코드
| 코드 | 의미 |
|------|------|
| **DEV** | 개발 환경 |
| **STG** | 스테이징 |
| **PROD** | 운영 환경 |
| **COMMON** | 모든 환경 |

## 5️⃣ 실전 예시 - 쇼핑몰 (2분)

### 📁 03_ACTIVE 폴더 구조
```
03_ACTIVE/
├── 001_FE_Product-List_R_Page_PROD.jsx       # 상품 목록 조회
├── 002_FE_Product-Detail_R_Modal_PROD.jsx    # 상품 상세 모달
├── 003_BE_Product-API_R_Service_PROD.py      # 상품 API 서비스
├── 004_BE_Cart-Add_C_Handler_PROD.py         # 장바구니 추가
├── 005_DB_Product-Schema_C_Table_COMMON.sql  # 상품 테이블
└── 006_TEST_Product-List_V_Unit_DEV.test.js  # 상품 목록 테스트
```

### 📁 02_STATIC 폴더 구조 (v5.0.1)
```
02_STATIC/
├── ASSET_logo_main.png                       # 로고 이미지
├── TEMPLATE_email_order.html                 # 주문 이메일 템플릿
├── CONFIG_api_endpoints.json                 # API 엔드포인트 설정
└── EXTERNAL_JS_TossPayments_v1.2.0.min.js   # 토스 결제 SDK (v5.0.2)
```

### 📁 04_TEST 폴더 구조 (v5.0.1)
```
04_TEST/
├── 001_TEST_User-Login_Unit_DEV.test.js      # 로그인 단위 테스트
├── 002_TEST_Product-API_Integration_STG.test.py  # API 통합 테스트
└── 003_TEST_Payment-Flow_E2E_PROD.test.js    # 결제 E2E 테스트
```

## 6️⃣ AI와 대화하기

### ✅ 올바른 요청
```
"AI야, 03_ACTIVE 폴더에 001_FE_User-Login_C_Page_PROD.jsx 만들어줘"
"02_STATIC에 ASSET_logo.png 추가해줘"
"04_TEST에 001_TEST_Login_Unit_DEV.test.js 생성해줘"
```

### ❌ 잘못된 요청
```
"파일 만들어줘" (폴더 지정 없음)
"src/components/..." (잘못된 폴더 구조)
"02_STATIC에 logo.png" (접두사 없음)
```

## 7️⃣ v5.0.2 외부 파일 관리

### 📦 외부 라이브러리 네이밍
```
EXTERNAL_[Type]_[Vendor]_v[Version].[ext]

예시:
EXTERNAL_JS_jQuery_v3.6.0.min.js
EXTERNAL_SDK_Firebase_v10.0.0.zip
EXTERNAL_CSS_Bootstrap_v5.3.0.min.css
```

### 🔄 버전 업데이트시
```
# 이전 버전은 _DEPRECATED 추가
EXTERNAL_JS_React_v17.0.2_DEPRECATED.js
EXTERNAL_JS_React_v18.2.0.js  # 현재 버전
```

## ⚠️ 자주 하는 실수 TOP 5

| 실수 | 올바른 방법 |
|------|------------|
| ❌ 폴더 많이 만들기 | ✅ 7개 폴더만 사용 |
| ❌ "src/components/..." | ✅ "03_ACTIVE/001_FE_..." |
| ❌ 02_STATIC에 "logo.png" | ✅ "ASSET_logo.png" |
| ❌ 테스트 파일 아무렇게 | ✅ "001_TEST_*" 형식 |
| ❌ 파일명 대충 짓기 | ✅ 패턴 정확히 따르기 |

## 🎯 핵심 3가지만 기억!

### 1️⃣ **03_ACTIVE가 메인**
모든 실제 코드는 여기에!

### 2️⃣ **파일명이 설명서**
```
001_FE_User-Login_C_Page_PROD.js
= "첫번째 프론트엔드 사용자로그인 생성 페이지 운영용"
```

### 3️⃣ **AI 요청시 폴더 명시**
```
"03_ACTIVE 폴더에..."로 시작
```

---

## 📚 더 자세히 배우기

- **전체 가이드**: [AI_NAMING_CONVENTION_FINAL.md](AI_NAMING_CONVENTION_FINAL.md)
- **변경 사항**: [CHANGELOG_v5.md](CHANGELOG_v5.md)
- **프로젝트 초기화**: `python SCRIPT_init_structure.py`

---

**✨ v5.0.2 적용 완료!** 이제 시작하세요 🚀

---
*최종 업데이트: 2025.10.14 | ChatGPT 5가지 개선 + 외부 파일 관리 포함*
