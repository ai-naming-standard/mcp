# 📘 AI 네이밍 컨벤션 v6.0.0

> **AI 거버넌스 시대**의 완성형 표준  
> "AI가 협력하고, 인간이 감독한다"

---

## 🚀 빠른 시작

### 30초만에 시작하기

```bash
# 1. CLI 설치
npm install -g ainaming-cli

# 2. 프로젝트 초기화
ainaming init my-project

# 3. 첫 파일 생성 (자연어)
ainaming add "로그인 페이지 만들어줘"
```

---

## 📚 문서 구조

### 📂 메인 문서
| 파일 | 설명 | 대상 |
|------|------|------|
| [AI_NAMING_CONVENTION_v6.md](./AI_NAMING_CONVENTION_v6.md) | 메인 통합 문서 | 모든 사용자 |
| [AI_NAMING_CONVENTION_v6_CONTINUATION.md](./AI_NAMING_CONVENTION_v6_CONTINUATION.md) | 연속 문서 | 모든 사용자 |
| [CHANGELOG_v6.md](./CHANGELOG_v6.md) | 변경 로그 | 기존 사용자 |

### 📁 하위 폴더

#### 01-quick-start/
빠른 시작 가이드 및 템플릿

#### 02-human-guides/
사람을 위한 상세 가이드

#### 03-machine-rules/
AI를 위한 기술 명세

#### 04-shared-specs/
공용 명세서

#### 05-meta-templates/ 🆕
v6 메타 파일 템플릿
- `AI_ROLE_MATRIX.yaml` - AI 역할 정의
- `NAMING_WIZARD_RULES.yaml` - 자연어 변환 규칙
- `DEP_GRAPH.yaml` - 의존성 그래프 템플릿

---

## 🌟 v6의 5대 혁신

### 1. 🤖 Multi-AI 협업
여러 AI가 동시에 작업하면서 충돌 없이 협력

### 2. 🧠 Naming Wizard
"로그인 페이지 만들어줘" → 자동으로 `001_FE_User-Login_C_Page_PROD.jsx` 생성

### 3. 🔗 의존성 그래프
파일 간 관계를 @deps 태그로 명시하고 자동으로 추적

### 4. 📊 완전한 거버넌스
모든 AI 활동과 인간 개입을 기록하여 감사 추적 가능

### 5. 🏗️ 07_META 폴더
AI 협업을 위한 메타데이터 관리 시스템

---

## 📂 v6 폴더 구조

```
project-root/
├── 00_DOCS/         # 📚 문서
├── 01_CONFIG/       # ⚙️ 설정
├── 02_STATIC/       # 📦 정적 자원
├── 03_ACTIVE/       # 🔥 활성 코드 ⭐
├── 04_TEST/         # 🧪 테스트
├── 05_BUILD/        # 🏗️ 빌드 결과물
├── 06_LOGS/         # 📊 로그
└── 07_META/         # 🆕 AI 협업 메타데이터
    ├── AI_ROLE_MATRIX.yaml
    ├── DEP_GRAPH.yaml
    ├── CONVERSATION_HISTORY.json
    ├── HUMAN_OVERRIDES.md
    ├── NAMING_WIZARD_RULES.yaml
    └── PROJECT_METADATA.json
```

---

## 🤖 AI 역할 분화

### Cursor (Code Writer)
- ✅ 코드 작성
- ✅ 테스트 생성
- ❌ 리뷰 불가

### Claude (Reviewer)
- ✅ 코드 리뷰
- ✅ 문서 작성
- ❌ 코드 수정 불가

### ChatGPT (Architect)
- ✅ 구조 설계
- ✅ 파일명 생성
- ❌ 코드 작성 불가

### Human (Supervisor)
- ✅ 최종 승인
- ✅ 모든 권한
- ✅ 01_CONFIG 직접 수정

---

## 💡 주요 기능

### 자연어로 파일 생성
```bash
# Before (v5)
"03_ACTIVE 폴더에 001_FE_User-Login_C_Page_PROD.jsx 만들어줘"

# After (v6)
"로그인 페이지 만들어줘"
```

### 의존성 자동 추적
```javascript
/* 
 * @file: 003_BE_Order-Process_X_Service_PROD.py
 * @deps:
 *   - 002_BE_Order-Validate_V_Helper_PROD.py
 *   - 005_DB_Order-Schema_C_Migration_PROD.sql
 */
```

### CLI 도구
```bash
ainaming init        # 프로젝트 초기화
ainaming add         # 자연어로 파일 생성
ainaming deps        # 의존성 시각화
ainaming sync        # AI 권한 동기화
ainaming validate    # 전체 검증
```

---

## 📈 성능 개선

| 항목 | v5.0.2 | v6.0.0 | 개선율 |
|------|--------|--------|--------|
| 협업 효율 | 단일 AI | Multi-AI | +400% |
| 비개발자 접근성 | 95% | 100% | +5% |
| 의존성 추적 | 수동 | 자동 | +100% |
| 문서 최신성 | 수동 | AI 자동 | +90% |

---

## 🔄 마이그레이션

### v5 → v6 자동 업그레이드

```bash
# 1. CLI 설치
npm install -g ainaming-cli

# 2. 자동 마이그레이션
cd your-project
ainaming upgrade --from v5 --to v6

# 3. 검증
ainaming validate --full
```

---

## 📖 학습 경로

### 초보자
1. [README.md](./README.md) (5분)
2. [AI_NAMING_CONVENTION_v6.md](./AI_NAMING_CONVENTION_v6.md) Part 0-1 (10분)
3. [01-quick-start/](./01-quick-start/) 템플릿으로 시작

### 개발자
1. [AI_NAMING_CONVENTION_v6.md](./AI_NAMING_CONVENTION_v6.md) Part 2-3 (20분)
2. [05-meta-templates/](./05-meta-templates/) 메타 파일 이해
3. 실전 프로젝트 적용

### 기존 사용자
1. [CHANGELOG_v6.md](./CHANGELOG_v6.md) (10분)
2. [AI_NAMING_CONVENTION_v6_CONTINUATION.md](./AI_NAMING_CONVENTION_v6_CONTINUATION.md) Part 10 (마이그레이션)
3. 점진적 도입

---

## 🎯 핵심 원칙

1. **폴더는 8개**: 00~07 (07_META 추가)
2. **03_ACTIVE 집중**: 모든 활성 코드
3. **@deps 태그 필수**: 의존성 명시
4. **AI 역할 분화**: 명확한 책임
5. **자연어 우선**: Naming Wizard
6. **거버넌스 필수**: 인간 최종 승인
7. **완전한 추적**: 모든 변경 기록

---

## ✨ v5 vs v6 비교

### v5.0.2의 강점
- ✅ 검증된 7개 폴더 체계
- ✅ 단순하고 명확한 구조
- ✅ 프로덕션 레디

### v6.0.0의 혁신
- 🚀 Multi-AI 오케스트레이션
- 🧠 자연어 자동 변환
- 🔗 명시적 의존성 그래프
- 📊 완벽한 거버넌스
- 🪄 자동화 극대화

---

## 🐛 알려진 이슈

### 1. Naming Wizard 한계
복잡한 도메인은 수동 확인 필요

**해결책**: NAMING_WIZARD_RULES.yaml에 커스텀 규칙 추가

### 2. Multi-AI 동시성
동일 파일 동시 수정 시 충돌 가능

**해결책**: AI_ROLE_MATRIX.yaml에서 권한 명확히 분리

---

## 💬 커뮤니티

### 지원
- **GitHub**: https://github.com/ai-naming-standard/v6
- **Discord**: 커뮤니티 채널
- **Issues**: 버그 리포트 및 제안

### 기여
- Pull Request 환영
- 문서 개선 제안
- 커뮤니티 토론

---

## 📋 체크리스트

### 프로젝트 시작
- [ ] ainaming-cli 설치
- [ ] ainaming init 실행
- [ ] 8개 폴더 생성 확인
- [ ] 07_META 파일 확인
- [ ] AI_ROLE_MATRIX.yaml 설정
- [ ] Naming Wizard 테스트

### v5 마이그레이션
- [ ] v5 프로젝트 백업
- [ ] ainaming upgrade 실행
- [ ] 07_META 폴더 생성 확인
- [ ] @deps 태그 추가 확인
- [ ] ainaming validate 통과
- [ ] 팀 교육 완료

---

## 🙏 감사의 말

v6.0.0은 다음 분들의 기여로 완성되었습니다:

- **Hyun Seok Yang** - v5.0.2 FINAL 기반 제공
- **커뮤니티** - Multi-AI 협업 아이디어
- **베타 테스터** - v6 초기 검증

---

## 🔜 로드맵

### v6.1 (2025 Q4)
- AI 자동 코드 리뷰
- 실시간 협업 대시보드
- 다국어 Naming Wizard

### v6.2 (2026 Q1)
- 자동 테스트 생성
- 버전 관리 통합
- 클라우드 동기화

---

**Version**: v6.0.0 STABLE  
**Release Date**: 2025.10.17  
**Status**: Production Ready ✅

---

**"폴더는 최소로, 네이밍은 최대로, 협업은 자연스럽게, 거버넌스는 완벽하게"**
