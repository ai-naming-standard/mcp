# 📁 04-shared-specs - 공통 스펙

> **폴더 목적**: 빠른 참조를 위한 코드표와 치트시트

---

## 📄 포함된 파일

### `SHARED_SPECS_FINAL.md`
- **용도**: 모든 사용자를 위한 참조 자료
- **포함 내용**:
  - Layer 코드표 (FE, BE, DB...)
  - Action 코드표 (C, R, U, D...)
  - Environment 코드 (DEV, STG, PROD...)
  - Detail 코드표 (Page, Service, API...)
  - 빠른 검색 치트시트

---

## 🎯 이 폴더를 사용해야 하는 경우

✅ **다음과 같은 경우 이 폴더를 선택하세요:**
- 코드표를 빠르게 확인하고 싶을 때
- "BE가 뭐지?" 같은 궁금증이 있을 때
- 파일명 만들 때 참조가 필요할 때
- 치트시트가 필요할 때

❌ **다음과 같은 경우는 다른 폴더를 선택하세요:**
- 처음 시작 → [`01-quick-start/`](../01-quick-start/)
- AI 협업 방법 → [`02-human-guides/`](../02-human-guides/)
- 기술 상세 → [`03-machine-rules/`](../03-machine-rules/)

---

## 📋 주요 참조 코드표

### Layer 코드 (계층)
| 코드 | 의미 | 예시 |
|------|------|------|
| FE | Frontend | React, Vue |
| BE | Backend | Node.js, Python |
| DB | Database | MySQL, MongoDB |
| API | API Gateway | REST, GraphQL |

### Action 코드 (동작)
| 코드 | 의미 | 사용 예시 |
|------|------|-----------|
| C | Create | 생성, 추가 |
| R | Read | 조회, 검색 |
| U | Update | 수정, 변경 |
| D | Delete | 삭제, 제거 |

### Environment 코드 (환경)
| 코드 | 의미 |
|------|------|
| DEV | 개발 환경 |
| STG | 스테이징 |
| PROD | 운영 환경 |
| COMMON | 공통 |

---

## 🔍 빠른 검색 팁

### 파일명 만들 때
```
1. Layer 찾기 (FE? BE? DB?)
2. Domain 정하기 (User-Login)
3. Action 선택 (C, R, U, D?)
4. Detail 확인 (Page, Service?)
5. Env 확인 (보통 PROD)
```

### 예시
```
"사용자 로그인 페이지"
→ FE (프론트) + User-Login + C (생성) + Page + PROD
→ 001_FE_User-Login_C_Page_PROD.jsx
```

---

## 📚 관련 문서

- **전체 설명**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **사람용 가이드**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **기술 스펙**: [`../03-machine-rules/MACHINE_RULES_FINAL.md`](../03-machine-rules/MACHINE_RULES_FINAL.md)
- **메인 인덱스**: [`../INDEX.md`](../INDEX.md)

---

**업데이트**: 2025.10.18
