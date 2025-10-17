# 📚 AI 네이밍 컨벤션 - 문서 인덱스

> **최신 버전**: v6.0.0 (2025.10.18)  
> **안정 버전**: v5.0.2 (2025.10.14)  
> **언어**: 한국어 | [English](../EN/INDEX.md)

---

## 🎯 빠른 시작 - 당신에게 맞는 문서를 선택하세요

### 👤 사용자 타입별 추천 경로

| 타입 | 추천 문서 | 소요 시간 | 설명 |
|------|----------|-----------|------|
| 🚀 **급해요!** | [`QUICK_START.md`](QUICK_START.md) | 5분 | 핵심만 빠르게 |
| 📖 **전체 이해** | [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) | 30분 | v5.0.2 완전판 |
| 🆕 **최신 버전** | [`v6.0.0/README.md`](v6.0.0/README.md) | 10분 | Multi-AI 협업 |
| 💼 **비개발자** | [`02-human-guides/HUMAN_GUIDE_FINAL.md`](02-human-guides/HUMAN_GUIDE_FINAL.md) | 15분 | AI와 대화하는 법 |
| 💻 **개발자** | [`03-machine-rules/MACHINE_RULES_FINAL.md`](03-machine-rules/MACHINE_RULES_FINAL.md) | 20분 | 기술 스펙 상세 |

---

## 📁 문서 구조

### 📄 루트 레벨 (v5.0.2 현재 버전)

```
KR/
├── 📖 AI_NAMING_CONVENTION_FINAL.md    ⭐ 전체 통합 문서 (Part 0-13)
├── 🚀 QUICK_START.md                   ⭐ 5분 빠른 시작
├── 📋 INDEX.md                         ← 지금 여기!
├── 📝 CHANGELOG_v5.md                  버전 변경 이력
├── 🛠️ SCRIPT_EXECUTION_GUIDE.md        스크립트 실행 가이드
├── 🔧 SCRIPT_init_structure.bat        초기화 스크립트 (Windows)
├── 🔧 SCRIPT_init_structure.js         초기화 스크립트 (Node.js)
└── 🔧 SCRIPT_init_structure.py         초기화 스크립트 (Python)
```

### 📂 주제별 상세 가이드

#### [`01-quick-start/`](01-quick-start/) - 빠른 시작 템플릿
```
📁 01-quick-start/
└── QUICK_START_FINAL.md               상세 템플릿 + 코드 예시
```
- **용도**: 복사/붙여넣기 가능한 템플릿
- **대상**: 즉시 프로젝트 시작하고 싶은 분
- **특징**: Python/JavaScript/Bash 스크립트 포함

#### [`02-human-guides/`](02-human-guides/) - 사람을 위한 가이드
```
📁 02-human-guides/
└── HUMAN_GUIDE_FINAL.md               AI와 협업하는 방법
```
- **용도**: AI에게 요청하는 방법
- **대상**: 비개발자, PM, 디자이너
- **특징**: 자연어 예시 중심

#### [`03-machine-rules/`](03-machine-rules/) - AI를 위한 규칙
```
📁 03-machine-rules/
└── MACHINE_RULES_FINAL.md             기술 스펙 상세
```
- **용도**: AI가 따라야 할 정확한 규칙
- **대상**: 개발자, AI 시스템
- **특징**: 정형화된 패턴 + 검증 규칙

#### [`04-shared-specs/`](04-shared-specs/) - 공통 스펙
```
📁 04-shared-specs/
└── SHARED_SPECS_FINAL.md              코드표 + 참조 자료
```
- **용도**: 레이어 코드, 액션 코드 등 참조표
- **대상**: 모든 사용자
- **특징**: 빠른 검색용 치트시트

---

### 📦 버전 아카이브

#### [`v5.0.2/`](v5.0.2/) - 현재 안정 버전 백업
```
📁 v5.0.2/
├── AI_NAMING_CONVENTION_FINAL.md      v5.0.2 백업
├── CHANGELOG_v5.md
├── INDEX.md
├── QUICK_START.md
├── QUICK_START_FINAL.md
└── SCRIPT_EXECUTION_GUIDE.md
```
- **용도**: v5.0.2 스냅샷 보존
- **상태**: ✅ 안정 버전 (Production Ready)

#### [`v6.0.0/`](v6.0.0/) - 차세대 Multi-AI 버전 🆕
```
📁 v6.0.0/
├── 📖 README.md                        v6 개요
├── 📖 AI_NAMING_CONVENTION_v6.md       Part 0-6
├── 📖 AI_NAMING_CONVENTION_v6_CONTINUATION.md  Part 7-13
├── 📝 CHANGELOG_v6.md                  v6 변경사항
├── 📋 INDEX.md                         v6 전용 인덱스
├── 🎉 UPGRADE_COMPLETE.md              업그레이드 가이드
└── 📁 05-meta-templates/               ⭐ v6 핵심 기능
    ├── AI_ROLE_MATRIX.yaml             AI 역할 정의
    ├── DEP_GRAPH.yaml                  의존성 그래프
    └── NAMING_WIZARD_RULES.yaml        자연어 변환 규칙
```
- **용도**: Multi-AI 협업 시스템
- **상태**: 🆕 최신 버전 (Stable)
- **주요 기능**:
  - 🤖 여러 AI 동시 협업
  - 🪄 자연어 → 파일명 자동 변환
  - 🔗 의존성 자동 추적
  - 📊 완전한 거버넌스

---

## 🎓 학습 경로 추천

### 🚀 초급자 (처음 시작)
```
1단계: QUICK_START.md (5분)
   ↓
2단계: 01-quick-start/QUICK_START_FINAL.md (10분)
   ↓
3단계: 실제 프로젝트에 적용 (30분)
```

### 📚 중급자 (전체 이해 필요)
```
1단계: AI_NAMING_CONVENTION_FINAL.md (Part 0-5) (20분)
   ↓
2단계: 02-human-guides/ 또는 03-machine-rules/ (20분)
   ↓
3단계: 04-shared-specs/ 참조하며 실습 (30분)
```

### 🚀 고급자 (v6 마이그레이션)
```
1단계: v6.0.0/README.md (10분)
   ↓
2단계: v6.0.0/CHANGELOG_v6.md (5분)
   ↓
3단계: v6.0.0/AI_NAMING_CONVENTION_v6.md (30분)
   ↓
4단계: v6.0.0/UPGRADE_COMPLETE.md (10분)
```

---

## 🔍 주제별 찾아보기

### 폴더 구조 이해하기
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 1
- [`v6.0.0/AI_NAMING_CONVENTION_v6.md`](v6.0.0/AI_NAMING_CONVENTION_v6.md) - Part 1

### 파일 네이밍 규칙
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 2-4
- [`03-machine-rules/MACHINE_RULES_FINAL.md`](03-machine-rules/MACHINE_RULES_FINAL.md)
- [`04-shared-specs/SHARED_SPECS_FINAL.md`](04-shared-specs/SHARED_SPECS_FINAL.md)

### AI와 협업하기
- [`02-human-guides/HUMAN_GUIDE_FINAL.md`](02-human-guides/HUMAN_GUIDE_FINAL.md)
- [`AI_NAMING_CONVENTION_FINAL.md`](AI_NAMING_CONVENTION_FINAL.md) - Part 5

### 프로젝트 초기화
- [`QUICK_START.md`](QUICK_START.md)
- [`01-quick-start/QUICK_START_FINAL.md`](01-quick-start/QUICK_START_FINAL.md)
- [`SCRIPT_EXECUTION_GUIDE.md`](SCRIPT_EXECUTION_GUIDE.md)

### Multi-AI 협업 (v6)
- [`v6.0.0/README.md`](v6.0.0/README.md)
- [`v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml`](v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml)

### 자연어 파일명 변환 (v6)
- [`v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml`](v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml)

### 의존성 관리 (v6)
- [`v6.0.0/05-meta-templates/DEP_GRAPH.yaml`](v6.0.0/05-meta-templates/DEP_GRAPH.yaml)

---

## 📖 문서 읽기 팁

### 💡 효율적인 읽기 방법

1. **전체를 읽을 필요 없습니다**
   - 필요한 부분만 찾아서 읽으세요
   - INDEX를 활용하세요

2. **실습하면서 배우세요**
   - 템플릿을 복사해서 시작
   - 예제를 직접 실행

3. **버전 선택**
   - 새 프로젝트 → v6.0.0 추천
   - 기존 프로젝트 → v5.0.2 유지

4. **도움이 필요하면**
   - QUICK_START.md부터 시작
   - 02-human-guides/ 참조

---

## 🔄 버전 비교

| 항목 | v5.0.2 | v6.0.0 |
|------|--------|--------|
| **폴더 구조** | 7개 | 8개 (+ 07_META) |
| **AI 협업** | 단일 AI | Multi-AI |
| **파일명 생성** | 수동 규칙 학습 | 자연어 자동 변환 |
| **의존성 추적** | 수동 관리 | 자동 추적 |
| **상태** | ✅ 안정 | 🆕 최신 |
| **추천 대상** | 기존 프로젝트 | 신규 프로젝트 |

---

## 📞 추가 정보

### 🌐 다른 언어
- [English Version](../EN/INDEX.md)

### 📦 GitHub
- Repository: https://github.com/ai-naming-standard/mcp

### 💬 문의
- 문서 이슈나 개선 제안은 GitHub Issues에 등록해주세요

---

**마지막 업데이트**: 2025.10.18  
**문서 버전**: v6.0.0
