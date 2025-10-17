# 📚 AI 네이밍 컨벤션 - 문서 인덱스

## ⭐ 최종 통합본
```
📖 AI_NAMING_CONVENTION_FINAL.md
   모든 내용이 통합된 완성본 (초보자 가이드 포함)
   이 문서 하나로 충분합니다!
```

---

## 🗂️ 문서 구조

### 📌 메인 문서 (2개만!)
- **[AI_NAMING_CONVENTION_FINAL.md](AI_NAMING_CONVENTION_FINAL.md)** - 🔥 **완전한 통합본**
- **[QUICK_START.md](QUICK_START.md)** - 5분 빠른 시작

### 📁 참고 자료
```
01-quick-start/     # 빠른 시작 템플릿
02-human-guides/    # 상세 가이드  
03-machine-rules/   # AI 기술 명세
04-shared-specs/    # 공용 명세서
```

---

## 🎯 당신에게 맞는 시작점

### 🚀 급한 경우 (5분)
→ **[QUICK_START.md](QUICK_START.md)** 읽고 바로 시작

### 📖 제대로 배우기 (30분)
→ **[AI_NAMING_CONVENTION_FINAL.md](AI_NAMING_CONVENTION_FINAL.md)** Part 0부터 순서대로

### 👔 비개발자
→ **FINAL.md**의 Part 5 (AI와의 협업)만 읽기

### 💻 개발자
→ **FINAL.md**의 Part 2-4 집중

---

## ⚡ 핵심 요약

### 📂 7개 폴더 (v5.0.1 ChatGPT 개선판)
```
00_DOCS/     # 문서 (⚠️ AI NO-MODIFY)
01_CONFIG/   # 설정 (⚠️ AI NO-MODIFY - CRITICAL!)
02_STATIC/   # 자원 (ASSET_*, TEMPLATE_*, CONFIG_* 접두사 필수)
03_ACTIVE/   # 💥 실제 코드 (핵심!)
04_TEST/     # 테스트 (001_TEST_* 인덱스 필수)
05_BUILD/    # 빌드
06_LOGS/     # 로그
```

### 📝 네이밍 룰
```
001_FE_User-Login_C_Page_PROD.js
```

### 💬 AI 요청
```
"AI야, 03_ACTIVE 폴더에..."
```

---

## 🚀 즉시 시작

```bash
# 폴더 생성
mkdir 00_DOCS 01_CONFIG 02_STATIC 03_ACTIVE 04_TEST 05_BUILD 06_LOGS

# 끝!
```

---

## 🆕 v5.0.1 ChatGPT 개선사항

### ✨ 5가지 주요 개선
1. **[Deps] 마커** - 의존성 명시 (001-1, 001a, 001s1)
2. **02_STATIC 네이밍** - ASSET_, TEMPLATE_, CONFIG_ 접두사 필수화
3. **04_TEST 인덱싱** - 001_TEST_* 형식으로 테스트 추적성 향상
4. **AI 권한 표시** - ⚠️ NO-MODIFY 헤더로 안전성 강화
5. **자동화 스크립트** - 프로젝트 초기화/마이그레이션 자동화

---

## 📁 파일별 상세 용도 설명

### 1️⃣ **AI_NAMING_CONVENTION_FINAL.md** (21.15 KB)
**🎯 용도: 메인 통합 문서 - 모든 것이 담긴 바이블**

- **핵심 역할**: AI 네이밍 컨벤션의 완전한 가이드북
- **포함 내용**:
  - 초보자부터 전문가까지 단계별 학습 경로
  - v4 네이밍 규칙 + v5 폴더 구조의 통합본
  - Smart-Folderization 철학과 실제 적용법
  - 7개 표준 폴더 구조 설명
  - 파일명 패턴 상세 가이드
  - AI와의 협업 방법
- **주 사용자**: 프로젝트에 참여하는 모든 사람 (개발자, 비개발자, AI)

### 2️⃣ **CHANGELOG_v5.md** (2.42 KB)
**🎯 용도: 버전 변경 기록 - 개선사항 추적**

- **핵심 역할**: v5.0.1과 v5.0.2의 업데이트 내역 기록
- **주요 기록**:
  - ChatGPT가 제안한 5가지 개선사항
  - [Deps] 마커를 통한 의존성 표시
  - 02_STATIC 폴더의 접두사 필수화
  - AI 권한 헤더 표시 규칙
  - 외부 파일 관리 시스템 추가
- **주 사용자**: 버전 업그레이드 담당자, 시스템 관리자

### 3️⃣ **INDEX.md** (이 파일)
**🎯 용도: 네비게이션 맵 - 어디로 가야할지 안내**

- **핵심 역할**: 전체 문서 구조의 인덱스와 안내판
- **포함 내용**:
  - 상황별 문서 읽기 가이드
  - 사용자 유형별 추천 경로
  - 핵심 요약과 즉시 시작 명령어
  - 모든 파일의 상세 용도 설명
- **주 사용자**: 처음 시작하는 모든 사용자

### 4️⃣ **QUICK_START.md** (1.82 KB)
**🎯 용도: 5분 속성 가이드 - 바로 시작하기**

- **핵심 역할**: 최소한의 지식으로 즉시 시작
- **포함 내용**:
  - 30초 만에 폴더 생성
  - 1분 만에 구조 이해
  - 실전 예시 (쇼핑몰)
  - 핵심 3가지만 기억하기
- **주 사용자**: 시간이 없는 사람, 실무자

### 5️⃣ **SCRIPT_init_structure.py** (17.46 KB)
**🎯 용도: 자동화 스크립트 - 프로젝트 초기 설정**

- **핵심 기능**:
  - 7개 표준 폴더 자동 생성
  - README 파일 자동 배치
  - .ai_permission 파일 생성
  - 외부 파일 다운로드 및 관리
  - SHA256 해시 검증
  - 의존성 매니페스트 자동 생성
- **특별 기능**:
  - `handle_external_file()`: 외부 SDK/라이브러리 자동 다운로드
  - `update_dependency_manifest()`: 의존성 목록 업데이트
  - `create_project_structure()`: 전체 프로젝트 구조 생성
- **주 사용자**: DevOps, 프로젝트 초기 설정 담당자

---

## 📊 파일 관계도

```
INDEX.md (입구)
    ├─→ QUICK_START.md (급한 사람용)
    └─→ AI_NAMING_CONVENTION_FINAL.md (전체 학습용)
            ├── CHANGELOG_v5.md (변경 사항 참고)
            └── SCRIPT_init_structure.py (자동 실행)
```

---

## 📂 하위 폴더 구조

### 📁 01-quick-start/
- **용도**: 빠른 시작을 위한 템플릿과 예제
- **내용**: 프로젝트별 시작 템플릿, 샘플 코드

### 📁 02-human-guides/
- **용도**: 사람이 읽기 위한 상세 가이드
- **내용**: 초보자 가이드, 마이그레이션 가이드, 베스트 프랙티스

### 📁 03-machine-rules/
- **용도**: AI와 자동화 도구를 위한 기술 명세
- **내용**: JSON/YAML 형식의 규칙, API 명세, 검증 스키마

### 📁 04-shared-specs/
- **용도**: 인간과 기계가 공유하는 명세서
- **내용**: 통합 규칙, 상호 참조 문서

---

## 💡 사용 팁

### 🎯 상황별 활용법

1. **처음 시작하는 경우**
   - INDEX.md (이 파일)를 먼저 읽고 자신에게 맞는 경로 선택
   
2. **시간이 없는 경우**
   - QUICK_START.md만 보고 바로 시작 (5분 소요)
   
3. **제대로 배우고 싶은 경우**
   - AI_NAMING_CONVENTION_FINAL.md를 Part 0부터 순서대로 (30분 소요)
   
4. **프로젝트 생성이 필요한 경우**
   - SCRIPT_init_structure.py 실행으로 자동 설정
   ```bash
   python SCRIPT_init_structure.py
   ```
   
5. **최신 변경사항 확인**
   - CHANGELOG_v5.md에서 업데이트 내역 확인

### 🔄 업무 플로우별 추천

| 역할 | 필수 문서 | 선택 문서 |
|------|-----------|----------|
| 🚀 **개발자** | QUICK_START.md → FINAL.md (Part 2-4) | CHANGELOG_v5.md |
| 👔 **비개발자** | FINAL.md (Part 5) | QUICK_START.md |
| 🤖 **AI 협업** | FINAL.md (전체) | 03-machine-rules/ |
| 🛠️ **DevOps** | SCRIPT_init_structure.py | CHANGELOG_v5.md |
| 📊 **프로젝트 관리자** | INDEX.md → FINAL.md (Part 0) | 모든 문서 |

---

## 🆕 v5.0.2 외부 파일 관리 (External Dependencies)

### 📦 주요 추가 기능
1. **EXTERNAL_ 접두사** - 외부 SDK, 라이브러리 체계적 관리
2. **버전 관리** - _DEPRECATED 전략으로 이전 버전 보존
3. **SHA256 검증** - 보안 강화를 위한 무결성 검증
4. **의존성 문서** - 00_DOCS/EXTERNAL_DEPENDENCIES.md 자동 업데이트

### 📝 네이밍 패턴
```
EXTERNAL_[Type]_[Vendor]_[Version].[ext]

예시:
EXTERNAL_JS_TossPayments_v1.2.0.min.js
EXTERNAL_SDK_Firebase_v12.1.0.zip
```

### 🛠️ 새로운 도구
- **handleExternalFile** - 외부 파일 등록 및 네이밍
- **updateExternalFileVersion** - 버전 업데이트 관리
- **generateDependencyManifest** - 의존성 목록 자동 생성

---

**Version**: v5.0.2 (External Dependency Management)  
**Updated**: 2025.10.14  
**한 문서로 모든 것을**: AI_NAMING_CONVENTION_FINAL.md ✅
