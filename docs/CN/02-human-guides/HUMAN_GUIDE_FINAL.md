# 📖 Human Guide - v4+v5 통합본

## 📌 이 문서의 목적
사람(개발자, 비개발자, 관리자)을 위한 종합 가이드

---

## Part 1: 빠른 참조 가이드

### 📊 네이밍 구조 한눈에 보기
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
001_FE_User-Login_C_Page_PROD.js
```

### 🔤 구성 요소별 상세 설명

#### Index (순번)
| 형식 | 의미 | 예시 |
|------|------|------|
| `001` | 기본 순번 | 첫 번째 파일 |
| `001.1` | 소수점 | 세부 단계 |
| `001-1` | 의존성 | 순차 실행 |
| `001a` | 병렬성 | 동시 실행 |
| `001s1` | 종속성 | 부모-자식 |

#### Layer (계층)
| 코드 | 풀네임 | 담당 영역 | 예시 기술 |
|------|--------|----------|-----------|
| `FE` | Frontend | 화면/UI | React, Vue, Angular |
| `BE` | Backend | 서버/로직 | Node.js, Python, Java |
| `DB` | Database | 데이터 | MySQL, MongoDB |
| `API` | API Gateway | 통신 | REST, GraphQL |
| `ML` | Machine Learning | AI/학습 | TensorFlow, PyTorch |
| `INFRA` | Infrastructure | 인프라 | Docker, K8s |
| `SH` | Shared | 공통 | 유틸리티 |

#### Action (동작)
| 코드 | 의미 | SQL | REST | 설명 |
|------|------|-----|------|------|
| `C` | Create | INSERT | POST | 생성/추가 |
| `R` | Read | SELECT | GET | 조회/검색 |
| `U` | Update | UPDATE | PUT/PATCH | 수정/변경 |
| `D` | Delete | DELETE | DELETE | 삭제/제거 |
| `V` | Validate | - | - | 검증/확인 |
| `X` | Execute | CALL | - | 실행/처리 |
| `S` | Send | - | - | 전송/발송 |
| `T` | Transform | - | - | 변환/변경 |
| `G` | Generate | - | - | 생성/출력 |

---

## Part 2: 프로젝트 예시

### 🛒 이커머스 완전체
```
ecommerce/
├── 00_DOCS/                        # [⚠️ AI PERMISSION: NO-MODIFY]
│   ├── README.md                  # ⚠️ NO-MODIFY 헤더 필수
│   ├── API_Documentation.md       # ⚠️ NO-MODIFY 헤더 필수
│   └── Business_Requirements.md   # ⚠️ NO-MODIFY 헤더 필수
│
├── 01_CONFIG/                      # [⚠️ AI PERMISSION: NO-MODIFY]
│   ├── config.dev.yml             # ⚠️ NO-MODIFY 헤더 필수
│   ├── config.prod.yml            # ⚠️ NO-MODIFY 헤더 필수
│   └── secrets.env                # ⚠️ NO-MODIFY + .gitignore
│
├── 02_STATIC/                     # [ChatGPT 개선: ASSET_ 접두사 필수]
│   ├── ASSET_logo.png
│   ├── ASSET_favicon.ico
│   ├── ASSET_banner_main.jpg
│   ├── TEMPLATE_email_order.html
│   ├── TEMPLATE_invoice.html
│   └── CONFIG_theme.json
│
├── 03_ACTIVE/
│   # === Phase 1: 사용자 시스템 ===
│   ├── 001_FE_User-Register_C_Page_PROD.jsx
│   ├── 001-1_FE_User-Register_V_FormValidator_PROD.js
│   ├── 001-2_FE_User-Register_X_Submit_PROD.js
│   ├── 002_FE_User-Login_C_Page_PROD.jsx
│   ├── 003_FE_User-Profile_R_Page_PROD.jsx
│   ├── 004_BE_User-Register_C_API_PROD.py
│   ├── 005_BE_User-Auth_V_Service_PROD.py
│   ├── 006_BE_User-JWT_G_Token_PROD.py
│   │
│   # === Phase 2: 상품 시스템 ===
│   ├── 010_FE_Product-List_R_Page_PROD.jsx
│   ├── 011_FE_Product-Grid_R_Component_PROD.jsx
│   ├── 012_FE_Product-Card_R_Component_PROD.jsx
│   ├── 013_FE_Product-Detail_R_Modal_PROD.jsx
│   ├── 014_BE_Product-Search_R_API_PROD.py
│   ├── 015_BE_Product-Filter_T_Service_PROD.py
│   ├── 016_BE_Product-Recommend_ML_Engine_PROD.py
│   │
│   # === Phase 3: 장바구니 & 주문 ===
│   ├── 020_FE_Cart-View_R_Page_PROD.jsx
│   ├── 021_FE_Cart-Item_U_Component_PROD.jsx
│   ├── 022_FE_Cart-Summary_R_Component_PROD.jsx
│   ├── 023_BE_Cart-Add_C_Handler_PROD.py
│   ├── 024_BE_Cart-Update_U_Service_PROD.py
│   ├── 025_BE_Order-Create_C_Service_PROD.py
│   ├── 025-1_BE_Order-Validate_V_Helper_PROD.py
│   ├── 025-2_BE_Order-Calculate_X_Processor_PROD.py
│   ├── 026_BE_Payment-Process_X_Service_PROD.py
│   │
│   # === Phase 4: 알림 시스템 (병렬) ===
│   ├── 030a_BE_Email-Order_S_Service_PROD.py
│   ├── 030b_BE_SMS-Order_S_Service_PROD.py
│   ├── 030c_BE_Push-Order_S_Service_PROD.py
│   ├── 030d_BE_Slack-Admin_S_Notifier_PROD.py
│   │
│   # === Phase 5: 데이터베이스 ===
│   ├── 040_DB_User-Schema_C_Migration_PROD.sql
│   ├── 041_DB_Product-Schema_C_Migration_PROD.sql
│   ├── 042_DB_Order-Schema_C_Migration_PROD.sql
│   ├── 043_DB_Cart-Schema_C_Migration_PROD.sql
│   └── 044_DB_Analytics-View_C_Query_PROD.sql
│
├── 04_TEST/                        # [ChatGPT 개선: 인덱스 네이밍 필수]
│   ├── 001_TEST_User-Service_Unit_COMMON.test.py
│   ├── 002_TEST_Order-Service_Unit_COMMON.test.py
│   ├── 003_TEST_Payment-Service_Unit_COMMON.test.py
│   ├── 010_TEST_Checkout-Flow_Integration_STG.test.py
│   └── 020_TEST_Full-Purchase_E2E_PROD.test.js
│
├── 05_BUILD/
│   └── dist/                    # 자동 생성
│
└── 06_LOGS/
    ├── app.log                  # 자동 생성
    └── error.log                # 자동 생성
```

### 📝 블로그 시스템
```
blog/
├── 03_ACTIVE/
│   ├── 001_FE_Post-List_R_Page_PROD.jsx
│   ├── 002_FE_Post-View_R_Page_PROD.jsx
│   ├── 003_FE_Post-Write_C_Editor_PROD.jsx
│   ├── 004_FE_Comment-List_R_Component_PROD.jsx
│   ├── 005_FE_Comment-Write_C_Form_PROD.jsx
│   ├── 010_BE_Post-CRUD_X_Service_PROD.py
│   ├── 011_BE_Comment-CRUD_X_Service_PROD.py
│   ├── 012_BE_Search-Elastic_R_Service_PROD.py
│   ├── 020_DB_Post-Schema_C_Table_PROD.sql
│   └── 021_DB_Comment-Schema_C_Table_PROD.sql
```

### 🏢 기업 홈페이지
```
corporate/
├── 03_ACTIVE/
│   ├── 001_FE_Home-Hero_R_Section_PROD.jsx
│   ├── 002_FE_About-Company_R_Page_PROD.jsx
│   ├── 003_FE_Product-Showcase_R_Gallery_PROD.jsx
│   ├── 004_FE_Contact-Form_C_Component_PROD.jsx
│   ├── 010_BE_Contact-Email_S_Service_PROD.py
│   ├── 011_BE_Newsletter-Subscribe_C_API_PROD.py
│   └── 020_DB_Contact-Log_C_Table_PROD.sql
```

---

## Part 3: 마이그레이션 가이드

### 🔄 기존 프로젝트 전환 전략

#### Phase 1: 분석 (1일)
```bash
# 1. 현재 구조 파악
find . -type f -name "*.js" -o -name "*.py" | head -20

# 2. 파일 수 계산
find . -type f | wc -l

# 3. 복잡도 평가
- 파일 수 < 50: 간단
- 파일 수 50-200: 보통
- 파일 수 > 200: 복잡
```

#### Phase 2: 준비 (2일)
```bash
# 1. 백업
cp -r project project_backup

# 2. 폴더 생성
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 3. 매핑 테이블 작성
echo "old_name,new_name,status" > migration_map.csv
```

#### Phase 3: 이동 (3-5일)

**자동 변환 스크립트**
```python
# migrate.py
import os
import re
import shutil

def convert_filename(old_path):
    """기존 파일명을 새 규칙으로 변환"""
    filename = os.path.basename(old_path)
    
    # 패턴 매칭
    patterns = {
        r'.*controller\.js$': 'FE_{}_C_Controller_PROD.js',
        r'.*service\.py$': 'BE_{}_X_Service_PROD.py',
        r'.*model\.js$': 'DB_{}_C_Model_PROD.js',
        r'.*component\.jsx$': 'FE_{}_R_Component_PROD.jsx',
        r'.*api\.py$': 'BE_{}_R_API_PROD.py',
    }
    
    # 도메인 추출
    domain = extract_domain(filename)
    
    # 새 이름 생성
    for pattern, template in patterns.items():
        if re.match(pattern, filename.lower()):
            return template.format(domain)
    
    return filename  # 변환 실패시 원본 유지

def extract_domain(filename):
    """파일명에서 도메인 추출"""
    # user_controller.js → User
    # product-service.py → Product
    name = filename.split('.')[0]
    name = name.replace('_', '-').replace('controller', '').replace('service', '')
    return name.title()

# 실행
for root, dirs, files in os.walk('./src'):
    for file in files:
        old_path = os.path.join(root, file)
        new_name = convert_filename(old_path)
        new_path = f'03_ACTIVE/{new_name}'
        
        print(f'{old_path} → {new_path}')
        # shutil.move(old_path, new_path)  # 실제 이동시 주석 해제
```

#### Phase 4: 검증 (2일)
- [ ] 모든 파일 이동 확인
- [ ] import/require 경로 수정
- [ ] 빌드 테스트
- [ ] 단위 테스트
- [ ] 통합 테스트

#### Phase 5: 최적화 (1일)
- [ ] 순번 재정렬
- [ ] 중복 제거
- [ ] 문서 업데이트

---

## Part 4: 팀 협업 가이드

### 👥 역할별 가이드

#### 👨‍💼 PM/기획자
```
"AI야, 03_ACTIVE 폴더를 보고 현재 구현된 기능 목록을 정리해줘"
"AI야, User-Login 관련 파일들이 모두 완성되었는지 확인해줘"
```

#### 👩‍💻 프론트엔드 개발자
```
"AI야, 03_ACTIVE에서 FE_로 시작하는 파일들만 보여줘"
"AI야, Product-List 컴포넌트에 페이지네이션 추가해줘"
```

#### 👨‍💻 백엔드 개발자
```
"AI야, 03_ACTIVE에서 BE_로 시작하는 API들 목록 만들어줘"
"AI야, Order-Create 서비스에 트랜잭션 처리 추가해줘"
```

#### 👩‍🎨 디자이너
```
"AI야, 03_ACTIVE에서 현재 구현된 페이지 목록 알려줘"
"AI야, User-Profile 페이지 구조 설명해줘"
```

### 📝 커밋 메시지 규칙
```bash
# 파일 추가
git commit -m "feat: Add 001_FE_User-Login_C_Page_PROD"

# 파일 수정
git commit -m "fix: Update 002_BE_Auth-JWT validation logic"

# 파일 삭제
git commit -m "remove: Delete deprecated 003_OLD_Legacy_Service"

# 순번 변경
git commit -m "refactor: Reorder Payment files (020-025 → 030-035)"
```

---

## Part 5: 문제 해결 가이드

### ❓ 자주 묻는 질문

#### Q1: 파일이 너무 많아졌어요
**A:** 도메인별 서브폴더 생성
```
03_ACTIVE/
  ├── FE_User/       # 사용자 관련 프론트
  ├── BE_Payment/    # 결제 관련 백엔드
  └── DB_Common/     # 공통 DB
```

#### Q2: 순번이 겹쳐요
**A:** 관계 표현 사용
```
001_Main.js
001-1_Main_Helper.js    # 의존성
001a_Main_Parallel.js   # 병렬
001s1_Main_Child.js     # 종속
```

#### Q3: import 경로가 너무 길어요
**A:** 경로 별칭 설정
```javascript
// webpack.config.js
alias: {
  '@active': path.resolve(__dirname, '03_ACTIVE'),
  '@config': path.resolve(__dirname, '01_CONFIG')
}

// 사용
import Login from '@active/001_FE_User-Login_C_Page_PROD';
```

#### Q4: 기존 도구와 충돌해요
**A:** 설정 파일 수정
```json
// .eslintrc
{
  "rules": {
    "max-len": ["error", { "code": 150 }],  // 긴 파일명 허용
    "no-underscore-dangle": "off"           // 언더스코어 허용
  }
}
```

---

## Part 6: 모범 사례

### ✅ DO (권장)
1. **순번은 10단위로**: 001, 010, 020 (중간 삽입 여유)
2. **도메인 일관성**: User, Product (Users, Products X)
3. **명확한 기능명**: Login, Register (Auth X)
4. **환경 분리**: DEV는 03_ACTIVE_DEV/ 별도 폴더

### ❌ DON'T (금지)
1. **너무 긴 이름**: User-Registration-Form-Validation-Helper (너무 김)
2. **약어 남용**: U-L_C_P_P.js (이해 불가)
3. **순번 건너뛰기**: 001, 002, 099 (연속성 깨짐)
4. **임의 폴더 생성**: 03_ACTIVE/temp/, 03_ACTIVE/old/

---

## 📚 참고 자료
- 메인 문서: [AI_NAMING_CONVENTION_FINAL.md](../AI_NAMING_CONVENTION_FINAL.md)
- 빠른 시작: [QUICK_START.md](../QUICK_START.md)

---

**Version**: FINAL  
**Updated**: 2025.10.14
