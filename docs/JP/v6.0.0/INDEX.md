# 📑 AI 네이밍 컨벤션 v6.0.0 - 문서 인덱스

> **전체 문서 네비게이션**

---

## 🎯 시작하기

### 처음 사용자
1. ⭐ [README.md](./README.md) - 5분 개요
2. 📘 [AI_NAMING_CONVENTION_v6.md](./AI_NAMING_CONVENTION_v6.md) - Part 0: 초보자 가이드
3. 🚀 [01-quick-start/QUICK_START.md](./01-quick-start/QUICK_START.md) - 빠른 시작

### 기존 사용자 (v5 → v6)
1. 📋 [CHANGELOG_v6.md](./CHANGELOG_v6.md) - 변경사항
2. 🔄 [AI_NAMING_CONVENTION_v6_CONTINUATION.md](./AI_NAMING_CONVENTION_v6_CONTINUATION.md) - Part 10: 마이그레이션
3. 🆕 [05-meta-templates/](./05-meta-templates/) - 새 메타 파일

---

## 📚 메인 문서

### 핵심 문서
| 파일 | 내용 | 페이지 | 난이도 |
|------|------|--------|--------|
| [README.md](./README.md) | 빠른 개요 | 1-2 | ⭐ |
| [AI_NAMING_CONVENTION_v6.md](./AI_NAMING_CONVENTION_v6.md) | 메인 통합 문서 | 1-50 | ⭐⭐⭐ |
| [AI_NAMING_CONVENTION_v6_CONTINUATION.md](./AI_NAMING_CONVENTION_v6_CONTINUATION.md) | 연속 문서 | 51-80 | ⭐⭐⭐ |
| [CHANGELOG_v6.md](./CHANGELOG_v6.md) | 변경 로그 | 1-20 | ⭐⭐ |

### AI_NAMING_CONVENTION_v6.md 목차

| Part | 제목 | 내용 |
|------|------|------|
| 0 | 초보자 가이드 | 학습 경로, 핵심 개념 |
| 1 | 폴더 구조 | 8-Category System |
| 2 | 파일 네이밍 | 네이밍 규칙 (v5와 동일) |
| 3 | AI 역할 분화 | Multi-AI 협업 시스템 |
| 4 | Naming Wizard | 자연어 자동 변환 |
| 5 | 의존성 그래프 | @deps 태그 시스템 |
| 6 | AI 협업 | Multi-AI 시나리오 |

### AI_NAMING_CONVENTION_v6_CONTINUATION.md 목차

| Part | 제목 | 내용 |
|------|------|------|
| 7 | 거버넌스 | 감사 추적 시스템 |
| 8 | CLI 도구 | ainaming 명령어 |
| 9 | 실전 프로젝트 | 이커머스 예시 |
| 10 | 마이그레이션 | v5 → v6 전환 |
| 11 | 기대 효과 | 성능 개선 |
| 12 | 핵심 원칙 | 12가지 원칙 |
| 13 | 빠른 시작 | 30초 가이드 |

---

## 📁 하위 폴더 구조

### 01-quick-start/
```
빠른 시작 가이드 및 템플릿
├── QUICK_START.md              # 5분 시작 가이드
├── TEMPLATE_PROJECT.zip        # 프로젝트 템플릿
└── CHEATSHEET.pdf              # 치트시트
```

### 02-human-guides/
```
사람을 위한 상세 가이드
├── BEGINNER_GUIDE.md           # 초보자 가이드
├── DEVELOPER_GUIDE.md          # 개발자 가이드
├── TEAM_LEAD_GUIDE.md          # 팀 리더 가이드
└── MIGRATION_GUIDE.md          # 마이그레이션 상세
```

### 03-machine-rules/
```
AI를 위한 기술 명세
├── AI_TECHNICAL_SPEC.md        # AI 기술 명세
├── MCP_INTEGRATION.md          # MCP 통합 가이드
└── API_REFERENCE.md            # API 레퍼런스
```

### 04-shared-specs/
```
공용 명세서
├── NAMING_RULES.md             # 네이밍 규칙 상세
├── FOLDER_STRUCTURE.md         # 폴더 구조 명세
└── FILE_TEMPLATES.md           # 파일 템플릿
```

### 05-meta-templates/ 🆕
```
v6 메타 파일 템플릿
├── AI_ROLE_MATRIX.yaml         # AI 역할 정의
├── NAMING_WIZARD_RULES.yaml    # 자연어 변환 규칙
├── DEP_GRAPH.yaml              # 의존성 그래프
├── CONVERSATION_HISTORY.json   # 대화 기록 템플릿
├── HUMAN_OVERRIDES.md          # 인간 개입 로그
└── PROJECT_METADATA.json       # 프로젝트 메타정보
```

---

## 🎓 학습 경로별 추천 문서

### 🚀 빠른 시작 (5-10분)
```
1. README.md
2. 01-quick-start/QUICK_START.md
3. CLI 설치 → ainaming init
```

### 📖 기본 학습 (30-60분)
```
1. README.md
2. AI_NAMING_CONVENTION_v6.md (Part 0-2)
3. 01-quick-start/CHEATSHEET.pdf
4. 실습: 템플릿 프로젝트로 시작
```

### 💻 개발자 심화 (2-3시간)
```
1. AI_NAMING_CONVENTION_v6.md (전체)
2. AI_NAMING_CONVENTION_v6_CONTINUATION.md (전체)
3. 02-human-guides/DEVELOPER_GUIDE.md
4. 05-meta-templates/ 파일들 이해
5. 실습: 기존 프로젝트 마이그레이션
```

### 🏢 팀 리더 (1-2시간)
```
1. README.md
2. CHANGELOG_v6.md (v5 차이점)
3. 02-human-guides/TEAM_LEAD_GUIDE.md
4. AI_NAMING_CONVENTION_v6.md (Part 3, 7)
5. ROI 계산 및 도입 계획 수립
```

### 🤖 AI 통합 개발자 (3-4시간)
```
1. 03-machine-rules/AI_TECHNICAL_SPEC.md
2. 03-machine-rules/MCP_INTEGRATION.md
3. 05-meta-templates/ 전체 파일
4. 03-machine-rules/API_REFERENCE.md
5. 커스텀 AI 도구 개발
```

---

## 📊 문서 매트릭스

### 역할별 필독 문서

| 역할 | 필수 문서 | 권장 문서 | 선택 문서 |
|------|-----------|-----------|-----------|
| **비개발자** | README, Part 0 | Part 6 | - |
| **주니어 개발자** | README, Part 0-2 | Part 3-6, 01-quick-start | Part 7-13 |
| **시니어 개발자** | Part 0-6 | Part 7-13, 02-human-guides | 03-machine-rules |
| **팀 리더** | README, CHANGELOG | Part 3, 7, 10 | 02-human-guides/TEAM_LEAD |
| **아키텍트** | 전체 메인 문서 | 04-shared-specs | 05-meta-templates |
| **AI 통합 개발자** | 03-machine-rules | 05-meta-templates | 전체 |

### 상황별 추천 문서

| 상황 | 추천 문서 |
|------|-----------|
| 🆕 새 프로젝트 시작 | README → Part 0-1 → 01-quick-start |
| 🔄 v5 마이그레이션 | CHANGELOG → Part 10 → 02-human-guides/MIGRATION |
| 🐛 문제 해결 | Part 해당 섹션 → 04-shared-specs |
| 🤖 AI 도구 개발 | 03-machine-rules → 05-meta-templates |
| 👥 팀 교육 | README → Part 0 → 02-human-guides |
| 📝 규칙 커스터마이징 | Part 4 → 05-meta-templates/NAMING_WIZARD |

---

## 🔍 주제별 색인

### 폴더 구조
- [메인: Part 1](./AI_NAMING_CONVENTION_v6.md#part-1)
- [상세: 04-shared-specs/FOLDER_STRUCTURE.md](./04-shared-specs/FOLDER_STRUCTURE.md)
- [07_META: Part 1](./AI_NAMING_CONVENTION_v6.md#07_meta-폴더-상세)

### 파일 네이밍
- [메인: Part 2](./AI_NAMING_CONVENTION_v6.md#part-2)
- [상세: 04-shared-specs/NAMING_RULES.md](./04-shared-specs/NAMING_RULES.md)
- [예시: Part 9](./AI_NAMING_CONVENTION_v6_CONTINUATION.md#part-9)

### AI 협업
- [역할 분화: Part 3](./AI_NAMING_CONVENTION_v6.md#part-3)
- [시나리오: Part 6](./AI_NAMING_CONVENTION_v6.md#part-6)
- [템플릿: 05-meta-templates/AI_ROLE_MATRIX.yaml](./05-meta-templates/AI_ROLE_MATRIX.yaml)

### Naming Wizard
- [메인: Part 4](./AI_NAMING_CONVENTION_v6.md#part-4)
- [규칙: 05-meta-templates/NAMING_WIZARD_RULES.yaml](./05-meta-templates/NAMING_WIZARD_RULES.yaml)
- [커스터마이징: 02-human-guides/DEVELOPER_GUIDE.md](./02-human-guides/DEVELOPER_GUIDE.md)

### 의존성 그래프
- [메인: Part 5](./AI_NAMING_CONVENTION_v6.md#part-5)
- [템플릿: 05-meta-templates/DEP_GRAPH.yaml](./05-meta-templates/DEP_GRAPH.yaml)
- [@deps 태그: Part 2](./AI_NAMING_CONVENTION_v6.md#v6-추가-규칙)

### CLI 도구
- [메인: Part 8](./AI_NAMING_CONVENTION_v6_CONTINUATION.md#part-8)
- [API: 03-machine-rules/API_REFERENCE.md](./03-machine-rules/API_REFERENCE.md)
- [설치: README.md](./README.md#빠른-시작)

### 마이그레이션
- [메인: Part 10](./AI_NAMING_CONVENTION_v6_CONTINUATION.md#part-10)
- [CHANGELOG: CHANGELOG_v6.md](./CHANGELOG_v6.md)
- [상세 가이드: 02-human-guides/MIGRATION_GUIDE.md](./02-human-guides/MIGRATION_GUIDE.md)

---

## 🔗 외부 리소스

### 공식 링크
- **GitHub**: https://github.com/ai-naming-standard/v6
- **NPM**: https://www.npmjs.com/package/ainaming-cli
- **Discord**: https://discord.gg/ai-naming-standard
- **문서 사이트**: https://docs.ai-naming-standard.org

### 관련 도구
- **MCP Server**: https://github.com/ai-naming-standard/mcp
- **VS Code Extension**: https://marketplace.visualstudio.com/ainaming
- **Cursor Integration**: https://cursor.sh/ainaming

---

## 📅 버전 히스토리

| 버전 | 날짜 | 주요 변경사항 | 문서 |
|------|------|--------------|------|
| v6.0.0 | 2025.10.17 | Multi-AI, Naming Wizard, 07_META | [CHANGELOG_v6.md](./CHANGELOG_v6.md) |
| v5.0.2 | 2025.10.14 | 외부 파일 관리 | [이전 버전](../v5.0.2/) |
| v5.0.0 | 2025.10.13 | 7-Category System | [이전 버전](../v5.0.2/) |

---

## 🆘 도움말

### 자주 묻는 질문
1. **v5와 v6 차이점?**
   → [CHANGELOG_v6.md](./CHANGELOG_v6.md) 참조

2. **어떻게 시작하나요?**
   → [README.md](./README.md) → [01-quick-start/QUICK_START.md](./01-quick-start/QUICK_START.md)

3. **기존 프로젝트 마이그레이션?**
   → [Part 10](./AI_NAMING_CONVENTION_v6_CONTINUATION.md#part-10)

4. **Naming Wizard 커스터마이징?**
   → [05-meta-templates/NAMING_WIZARD_RULES.yaml](./05-meta-templates/NAMING_WIZARD_RULES.yaml)

5. **AI 역할 수정?**
   → [05-meta-templates/AI_ROLE_MATRIX.yaml](./05-meta-templates/AI_ROLE_MATRIX.yaml)

### 문제 해결
- **Issue 리포트**: https://github.com/ai-naming-standard/v6/issues
- **Discord 지원**: https://discord.gg/ai-naming-standard
- **이메일**: support@ai-naming-standard.org

---

## 📝 문서 업데이트 로그

| 날짜 | 문서 | 변경사항 |
|------|------|----------|
| 2025.10.17 | 전체 | v6.0.0 최초 릴리스 |
| 2025.10.17 | INDEX.md | 문서 인덱스 생성 |
| 2025.10.17 | README.md | v6 업데이트 |

---

**Version**: v6.0.0  
**Last Updated**: 2025.10.17  
**Status**: Production Ready ✅

---

**"폴더는 최소로, 네이밍은 최대로, 협업은 자연스럽게, 거버넌스는 완벽하게"**
