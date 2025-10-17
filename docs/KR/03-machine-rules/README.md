# 📁 03-machine-rules - AI를 위한 규칙

> **폴더 목적**: AI가 따라야 할 정확한 기술 스펙 정의

---

## 📄 포함된 파일

### `MACHINE_RULES_FINAL.md`
- **용도**: AI 시스템을 위한 정형화된 규칙
- **포함 내용**:
  - 파일명 생성 알고리즘
  - 패턴 검증 규칙
  - 에러 처리 방법
  - 자동 수정 로직
  - 정규표현식 패턴

---

## 🎯 이 폴더를 사용해야 하는 경우

✅ **다음과 같은 경우 이 폴더를 선택하세요:**
- 개발자 (프로그래머)
- AI 시스템 구현하는 경우
- 정확한 기술 스펙이 필요할 때
- 검증 로직을 만들 때
- 자동화 도구를 개발할 때

❌ **다음과 같은 경우는 다른 폴더를 선택하세요:**
- 비개발자 → [`02-human-guides/`](../02-human-guides/)
- 빠른 시작 → [`01-quick-start/`](../01-quick-start/)
- 참조표만 필요 → [`04-shared-specs/`](../04-shared-specs/)

---

## 🔧 기술적 내용

### 1. 파일명 생성 알고리즘
```javascript
function generateFileName(params) {
  const pattern = `${params.index}_${params.layer}_${params.domain}...`;
  return validate(pattern);
}
```

### 2. 패턴 검증
```regex
^[0-9]{3}(_[A-Z]{2,6})(_[A-Za-z\-]+)(_[CRUDVXSTG])(_[A-Z][a-z]+)(_[A-Z]+)\.[a-z]+$
```

### 3. 자동 수정 규칙
```
입력: "userLogin.js"
분석: 규칙 위반 감지
출력: "001_FE_User-Login_C_Page_PROD.js"
제안: 3가지 대안 제시
```

---

## 📚 관련 문서

- **사람용 가이드**: [`../02-human-guides/HUMAN_GUIDE_FINAL.md`](../02-human-guides/HUMAN_GUIDE_FINAL.md)
- **코드표 참조**: [`../04-shared-specs/SHARED_SPECS_FINAL.md`](../04-shared-specs/SHARED_SPECS_FINAL.md)
- **전체 문서**: [`../AI_NAMING_CONVENTION_FINAL.md`](../AI_NAMING_CONVENTION_FINAL.md) (Part 2-4)
- **메인 인덱스**: [`../INDEX.md`](../INDEX.md)

---

**업데이트**: 2025.10.18
