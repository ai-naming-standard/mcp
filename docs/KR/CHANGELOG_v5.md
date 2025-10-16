# 📋 변경 이력 - v5.0.1 & v5.0.2

## 🆕 v5.0.1 - ChatGPT 5가지 개선사항 
**업데이트**: 2025.10.14

### 1. 📌 [Deps] 마커 - 의존성 명시
- **순차 실행**: 001-1, 001-2
- **병렬 실행**: 001a, 001b  
- **종속 관계**: 001s1, 001s2
- AI가 파일 간 관계를 자동으로 파악

### 2. 📦 02_STATIC 네이밍 강화
- **ASSET_** - 모든 자산 파일 필수
- **TEMPLATE_** - 템플릿 파일 필수
- **CONFIG_** - 설정 파일 필수
- 접두사 없는 파일 자동 거부

### 3. 🧪 04_TEST 인덱싱 필수화
- 패턴: `001_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]`
- 소스 파일과 1:1 매칭
- 테스트 추적성 향상

### 4. ⚠️ AI 권한 헤더 표시
- 00_DOCS: `/* ⚠️ AI PERMISSION: NO-MODIFY */`
- 01_CONFIG: `/* ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL */`
- 각 폴더별 `.ai_permission` 파일

### 5. 🛠️ 자동화 스크립트
- **init_v5_project.py** - 프로젝트 초기화
- **migrate_to_v5.sh** - 기존 프로젝트 마이그레이션
- MCP 도구 통합

---

## 🆕 v5.0.2 - 외부 파일 관리 시스템
**업데이트**: 2025.10.14

### 1. 📦 EXTERNAL_ 접두사 체계
```
EXTERNAL_[Type]_[Vendor]_[Version].[ext]
```
- Type: JS, SDK, JAR, BIN, ZIP, LIB, MODULE
- 외부 라이브러리 체계적 관리

### 2. 🔄 버전 관리 전략
- 기존: `_DEPRECATED` 접미사 추가
- 신규: 새 버전 파일 생성
- 이전 버전 보존 (롤백 가능)

### 3. 🔒 SHA256 무결성 검증
- 모든 외부 파일 해시 기록
- `00_DOCS/EXTERNAL_DEPENDENCIES.md` 자동 업데이트
- 보안 취약점 체크

### 4. 📝 의존성 매니페스트
```markdown
| File | Version | Vendor | URL | SHA256 | Date | License |
```

---

## 📊 적용 현황

| 문서 | v5.0.1 | v5.0.2 |
|------|--------|--------|
| AI_NAMING_CONVENTION_FINAL.md | ✅ | ✅ |
| MACHINE_RULES_FINAL.md | ✅ | ✅ |
| INDEX.md | ✅ | ✅ |
| QUICK_START_FINAL.md | ✅ | ✅ |
| HUMAN_GUIDE_FINAL.md | ✅ | 진행중 |
| SHARED_SPECS_FINAL.md | ✅ | 진행중 |

---

## 🎯 핵심 메시지

> "ChatGPT 제안으로 더 안전하고 체계적인 AI 네이밍 컨벤션 완성"

- **안전성**: AI 권한 명시로 실수 방지
- **체계성**: 의존성 표현으로 실행 순서 명확화
- **확장성**: 외부 파일 관리로 대규모 프로젝트 지원
- **자동화**: 스크립트로 프로젝트 초기화 간소화

---

**작성일**: 2025.10.14  
**최종 버전**: v5.0.2
