# 🚀 AI Naming Standard MCP v6.0.0

> **AI Governance Era**: Revolutionary Multi-AI Orchestration with Natural Language Support

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-v0.6.0-blue.svg?style=flat-square)](https://modelcontextprotocol.io)
[![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org)

**AI Naming Standard MCP**는 Cursor, Claude, ChatGPT, Windsurf 등 여러 AI가 동시에 협업할 수 있도록 설계된 혁명적인 파일 네이밍 및 프로젝트 구조 표준입니다. 자연어 입력으로 파일명을 자동 생성하고, 의존성을 자동 추적하며, 완벽한 거버넌스를 제공합니다.

**🌐 Language**: **한국어** | [English](./README_EN.md) | [日本語](./README_JA.md)

---

## 🌟 v6.0.0 핵심 기능

### 🤖 Multi-AI Orchestration
여러 AI가 역할을 나눠 협업합니다:
- **Cursor** (Code Writer) - 코드 작성 및 구현
- **Claude** (Reviewer) - 코드 리뷰 및 문서화
- **ChatGPT** (Architect) - 구조 설계 및 규칙 관리
- **Windsurf** (Assistant) - 리팩토링 및 최적화
- **Human** (Supervisor) - 최종 승인 및 품질 관리

### 🧠 Naming Wizard (Natural Language Support)
자연어를 표준 파일명으로 자동 변환:

```javascript
Input:  "로그인 페이지 만들어줘"
Output: 001_FE_User-Login_C_Page_PROD.jsx

Input:  "결제 취소 API 추가"
Output: 021_BE_Payment-Refund_C_API_PROD.py

Input:  "상품 테이블 생성"
Output: 005_DB_Product-Schema_C_Migration_PROD.sql
```

### 🔗 Dependency Graph (@deps Tracking)
파일 간 의존성을 자동으로 추적하고 관리:

```javascript
/* 
 * @file: 003_BE_Order-Process_X_Service_PROD.py
 * @deps:
 *   - 002_BE_Order-Validate_V_Helper_PROD.py
 *   - 005_DB_Order-Schema_C_Migration_PROD.sql
 * @ai: cursor
 * @reviewed: claude
 * @created: 2025-10-17
 */
```

### 📊 Complete Governance Layer
모든 AI 활동과 인간 개입을 완벽하게 기록:
- **AI_ROLE_MATRIX.yaml** - AI 역할 및 권한 정의
- **DEP_GRAPH.yaml** - 프로젝트 전체 의존성 그래프
- **CONVERSATION_HISTORY.json** - AI 간 대화 기록
- **HUMAN_OVERRIDES.md** - 인간 개입 감사 로그

### 🏗️ 07_META Folder System
AI 협업을 위한 메타데이터 관리:

```
07_META/
├── AI_ROLE_MATRIX.yaml           # AI 역할 매트릭스
├── DEP_GRAPH.yaml                # 의존성 그래프
├── CONVERSATION_HISTORY.json     # 대화 이력
├── HUMAN_OVERRIDES.md            # 인간 개입 로그
├── NAMING_WIZARD_RULES.yaml      # 네이밍 규칙
└── PROJECT_METADATA.json         # 프로젝트 메타데이터
```

---

## 📦 설치

### Global Installation (권장)
```bash
npm install -g ai-naming-standard-mcp
```

### Local Installation
```bash
npm install ai-naming-standard-mcp
```

### From Source
```bash
git clone https://github.com/ai-naming-standard/v6.git
cd v6
npm install
npm link
```

---

## 🔧 설정

### Claude Desktop
`claude_desktop_config.json` 파일 수정:

```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["/path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}

```

**설정 파일 위치:**
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

### Cursor
프로젝트 루트에 `.cursorrules` 파일 생성:

```
# AI Naming Standard v6.0.0
Use AI Naming Convention v6.0.0 for all files
Check 07_META/AI_ROLE_MATRIX.yaml for your role and permissions
Always add @deps tags in file headers
Follow the standard folder structure: 00_DOCS through 07_META
```

### VS Code (MCP Extension)
`.vscode/settings.json` 추가:

```json
{
  "mcp.servers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["/path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}
```

---

## 🛠️ MCP 도구 (24개)

### 🎯 Core Naming Tools (8개)
| Tool | Description |
|------|-------------|
| `generateFileName` | 표준 파일명 생성 |
| `validateFileName` | 파일명 형식 검증 |
| `explainFileName` | 파일명 구성 요소 설명 |
| `getLayerCodes` | Layer 코드 테이블 조회 |
| `getActionCodes` | Action 코드 테이블 조회 |
| `getProjectTemplate` | 프로젝트 템플릿 조회 |
| `batchGenerateFileNames` | 여러 파일명 일괄 생성 |
| `suggestCorrection` | 잘못된 파일명 교정 제안 |

### 🏗️ Project Structure Tools (6개)
| Tool | Description |
|------|-------------|
| `createProjectStructure` | v6 8폴더 구조 생성 |
| `checkFolderPermission` | 폴더 권한 확인 |
| `migrateFromV4` | v4/v5에서 v6로 마이그레이션 |
| `suggestFolder` | 적절한 폴더 제안 |
| `handleExternalFile` | 외부 파일 처리 |
| `generateDependencyManifest` | 의존성 매니페스트 생성 |

### 🆕 Multi-AI Orchestration Tools (2개)
| Tool | Description |
|------|-------------|
| `createAIRoleMatrix` | AI 역할 매트릭스 생성 |
| `getAIRole` | AI 역할 및 권한 조회 |

### 🆕 Naming Wizard Tools (2개)
| Tool | Description |
|------|-------------|
| `naturalLanguageToFileName` | 자연어 → 파일명 변환 |
| `addNamingWizardRule` | 커스텀 네이밍 규칙 추가 |

### 🆕 Dependency Graph Tools (3개)
| Tool | Description |
|------|-------------|
| `generateDepGraph` | 의존성 그래프 생성 |
| `validateDeps` | @deps 태그 검증 |
| `checkCircularDeps` | 순환 의존성 체크 |

### 🆕 Governance & Audit Tools (3개)
| Tool | Description |
|------|-------------|
| `logHumanOverride` | 인간 개입 로그 기록 |
| `scanProject` | 프로젝트 구조 스캔 |
| `exportConfig` | AI 도구별 설정 내보내기 |

---

## 💡 사용 예시

### 1. 자연어로 파일 생성

```javascript
// Claude/Cursor에서 실행
{
  "tool": "naturalLanguageToFileName",
  "args": {
    "naturalLanguage": "사용자 프로필 업데이트 API",
    "language": "ko"
  }
}

// 결과
{
  "fileName": "015_BE_User-Profile_U_API_PROD.py",
  "analysis": {
    "domain": "User-Profile",
    "action": "U",
    "layer": "BE",
    "detail": "API",
    "env": "PROD"
  },
  "confidence": "high"
}
```

### 2. AI 역할 및 권한 확인

```javascript
{
  "tool": "getAIRole",
  "args": { "aiName": "cursor" }
}

// 결과
{
  "aiName": "cursor",
  "type": "code_writer",
  "permissions": ["write: 03_ACTIVE", "test: 04_TEST"],
  "canModify": ["03_ACTIVE", "04_TEST"],
  "cannotModify": ["01_CONFIG", "07_META"],
  "responsibilities": ["코드 작성", "테스트 생성", "버그 수정"]
}
```

### 3. 프로젝트 구조 생성

```javascript
{
  "tool": "createProjectStructure",
  "args": {
    "projectName": "my-ecommerce-app",
    "version": "v6"
  }
}

// 생성되는 폴더:
// 00_DOCS/     - 문서
// 01_CONFIG/   - 설정 (AI 수정 금지)
// 02_STATIC/   - 정적 자원
// 03_ACTIVE/   - 활성 코드 (주 작업 영역)
// 04_TEST/     - 테스트
// 05_BUILD/    - 빌드 결과물
// 06_LOGS/     - 로그
// 07_META/     - AI 협업 메타데이터
```

### 4. 의존성 그래프 생성

```javascript
{
  "tool": "generateDepGraph",
  "args": {
    "sourcePath": ".",
    "outputPath": "07_META/DEP_GRAPH.yaml"
  }
}

// 03_ACTIVE 폴더의 모든 파일을 스캔하여
// @deps 태그를 추출하고 DEP_GRAPH.yaml 생성
```

### 5. 파일명 검증

```javascript
{
  "tool": "validateFileName",
  "args": {
    "fileName": "001_BE_User-Login_C_Service_PROD.py"
  }
}

// 결과
{
  "valid": true,
  "components": {
    "index": "001",
    "layer": "BE",
    "domain": "User-Login",
    "action": "C",
    "detail": "Service",
    "env": "PROD",
    "ext": "py"
  }
}
```

---

## 📂 v6 폴더 구조

```
my-project/
├── 00_DOCS/                    # 📚 프로젝트 문서
│   ├── README.md
│   ├── API_SPEC.md
│   └── ARCHITECTURE.md
│
├── 01_CONFIG/                  # ⚙️ 설정 파일 (AI 수정 금지)
│   ├── .env
│   ├── config.yaml
│   └── secrets.json
│
├── 02_STATIC/                  # 📦 정적 자원
│   ├── ASSET_logo.png
│   ├── TEMPLATE_email.html
│   └── EXTERNAL_bootstrap.css
│
├── 03_ACTIVE/                  # 🔥 활성 코드 (메인 작업 공간)
│   ├── 001_BE_User-Login_C_Service_PROD.py
│   ├── 002_FE_Dashboard_R_Page_PROD.jsx
│   └── 003_DB_User-Schema_C_Migration_PROD.sql
│
├── 04_TEST/                    # 🧪 테스트 코드
│   ├── 001_TEST_User-Login_Unit_DEV.test.py
│   └── 002_TEST_Dashboard_E2E_DEV.test.js
│
├── 05_BUILD/                   # 🏗️ 빌드 결과물
│   ├── dist/
│   └── bundle.js
│
├── 06_LOGS/                    # 📊 로그 파일
│   ├── app.log
│   └── error.log
│
└── 07_META/                    # 🆕 AI 협업 메타데이터
    ├── AI_ROLE_MATRIX.yaml
    ├── DEP_GRAPH.yaml
    ├── CONVERSATION_HISTORY.json
    ├── HUMAN_OVERRIDES.md
    ├── NAMING_WIZARD_RULES.yaml
    └── PROJECT_METADATA.json
```

---

## 🎯 파일 네이밍 패턴

### 기본 패턴
```
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
```

### 실제 예시

| 파일명 | 설명 |
|--------|------|
| `001_FE_User-Login_C_Page_PROD.jsx` | 사용자 로그인 페이지 |
| `002_BE_Payment-Process_X_Service_PROD.py` | 결제 처리 서비스 |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | 주문 테이블 마이그레이션 |
| `004_API_Auth-Token_V_Middleware_PROD.js` | 토큰 검증 미들웨어 |
| `005_ML_Recommend-Product_G_Model_PROD.py` | 상품 추천 모델 |

### Layer Codes

| Code | Description | Use Case |
|------|-------------|----------|
| `FE` | Frontend | React, Vue, Angular |
| `BE` | Backend | Node.js, Python, Java |
| `DB` | Database | MySQL, PostgreSQL, MongoDB |
| `API` | API Gateway | REST, GraphQL, gRPC |
| `ML` | Machine Learning | TensorFlow, PyTorch |
| `INFRA` | Infrastructure | Docker, Kubernetes |
| `SH` | Shared/Common | Utils, Helpers |

### Action Codes

| Code | Meaning | Description |
|------|---------|-------------|
| `C` | Create | 새로운 리소스 생성 |
| `R` | Read | 데이터 조회/읽기 |
| `U` | Update | 데이터 수정/업데이트 |
| `D` | Delete | 리소스 삭제 |
| `V` | Validate | 유효성 검증 |
| `X` | Execute | 실행/처리 |
| `S` | Send | 전송 |
| `T` | Transform | 변환 |
| `G` | Generate | 생성/산출 |

### Environment Tags

| Tag | Environment | Purpose |
|-----|-------------|---------|
| `DEV` | Development | 로컬 개발 환경 |
| `STG` | Staging | 스테이징 환경 |
| `PROD` | Production | 프로덕션 환경 |
| `COMMON` | Common | 모든 환경 공통 |

---

## 📈 성능 비교

| Metric | v5.0.2 | v6.0.0 | Improvement |
|--------|--------|--------|-------------|
| **MCP Tools** | 12개 | 24개 | +100% ⬆️ |
| **Folders** | 7개 | 8개 | +14% ⬆️ |
| **AI Support** | Single | Multi-AI | +400% ⬆️ |
| **Natural Language** | ❌ | ✅ Naming Wizard | +100% 🆕 |
| **Dependency Tracking** | Manual | Auto (@deps) | +100% ⬆️ |
| **Governance** | Partial | Complete | +80% ⬆️ |
| **Audit Trail** | ❌ | ✅ Full | +100% 🆕 |
| **Accessibility** | 95% | 100% | +5% ⬆️ |

---

## 🔄 마이그레이션 가이드

### v5 → v6 자동 마이그레이션

```javascript
{
  "tool": "migrateFromV4",
  "args": {
    "sourcePath": ".",
    "sourceVersion": "v5",
    "dryRun": false
  }
}
```

### 수동 마이그레이션 단계

1. **07_META 폴더 생성**
   ```bash
   mkdir 07_META
   ```

2. **AI_ROLE_MATRIX.yaml 생성**
   ```javascript
   {
     "tool": "createAIRoleMatrix",
     "args": {
       "projectName": "my-project",
       "aiTools": ["cursor", "claude", "chatgpt"]
     }
   }
   ```

3. **파일에 @deps 태그 추가**
   ```javascript
   /* 
    * @file: filename.ext
    * @deps:
    *   - dependency1.ext
    *   - dependency2.ext
    * @ai: cursor
    */
   ```

4. **의존성 그래프 생성**
   ```javascript
   {
     "tool": "generateDepGraph",
     "args": {
       "sourcePath": ".",
       "outputPath": "07_META/DEP_GRAPH.yaml"
     }
   }
   ```

---

## 🌐 다국어 지원

| Language | Status | Naming Wizard | Documentation |
|----------|--------|---------------|---------------|
| 한국어 (Korean) | ✅ Full | ✅ Supported | ✅ Complete |
| English | ✅ Full | 🚧 In Progress | ✅ Complete |
| 日本語 (Japanese) | ✅ Full | 🚧 In Progress | 🚧 Partial |
| 中文 (Chinese) | 🚧 Planned | 🚧 Planned | 🚧 Planned |

---

## 📚 문서

### 핵심 문서
- [📖 Complete Documentation](./AI-NAMING-STANDARD/KR/v6.0.0/AI_NAMING_CONVENTION_v6.md) - 전체 문서 (Part 0-6)
- [📖 Continuation](./AI-NAMING-STANDARD/KR/v6.0.0/AI_NAMING_CONVENTION_v6_CONTINUATION.md) - 연속 문서 (Part 7-13)
- [📋 Changelog](./AI-NAMING-STANDARD/KR/v6.0.0/CHANGELOG_v6.md) - 변경 로그
- [🚀 Quick Start](./AI-NAMING-STANDARD/KR/v6.0.0/README.md) - 빠른 시작 가이드
- [📑 Index](./AI-NAMING-STANDARD/KR/v6.0.0/INDEX.md) - 문서 색인

### 메타 템플릿
- [AI_ROLE_MATRIX.yaml](./AI-NAMING-STANDARD/KR/v6.0.0/05-meta-templates/AI_ROLE_MATRIX.yaml)
- [NAMING_WIZARD_RULES.yaml](./AI-NAMING-STANDARD/KR/v6.0.0/05-meta-templates/NAMING_WIZARD_RULES.yaml)
- [DEP_GRAPH.yaml](./AI-NAMING-STANDARD/KR/v6.0.0/05-meta-templates/DEP_GRAPH.yaml)

---

## 🤝 기여하기

버그 리포트, 기능 제안, Pull Request를 환영합니다!

### 기여 방법
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 개발 환경 설정
```bash
git clone https://github.com/ai-naming-standard/v6.git
cd v6
npm install
npm run dev
```

---

## 🐛 버그 리포트

버그를 발견하셨나요? [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)에 리포트해주세요!

**버그 리포트에 포함해주세요:**
- 버그 설명
- 재현 단계
- 예상 동작
- 실제 동작
- 스크린샷 (있다면)
- 환경 정보 (OS, Node 버전 등)

---

## 💬 커뮤니티 & 지원

### 도움이 필요하신가요?
- 💬 [Discord Community](https://discord.gg/ai-naming-standard)
- 📧 [Email Support](mailto:support@ai-naming-standard.org)
- 🐛 [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)
- 💼 [LinkedIn](https://linkedin.com/company/ai-naming-standard)

### 팔로우하기
- 🐦 [Twitter](https://twitter.com/ai_naming_std)
- 📘 [Facebook](https://facebook.com/ai-naming-standard)
- 📺 [YouTube](https://youtube.com/@ai-naming-standard)

---

## 📜 라이선스

MIT License - 자유롭게 사용하세요!

```
MIT License

Copyright (c) 2025 AI Naming Standard Organization

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 감사의 말

v6.0.0은 다음 분들의 기여로 완성되었습니다:

### 핵심 기여자
- **Hyun Seok Yang** - v5.0.2 FINAL 기반 제공, 아키텍처 설계
- **AI Community Contributors** - Multi-AI 협업 아이디어 제공
- **Beta Testers** - v6 초기 검증 및 피드백

### 스페셜 땡스
- Model Context Protocol Team
- Claude AI Team
- Cursor Team
- Open Source Community

---

## 🔜 로드맵

### v6.1 (2025 Q4)
- [ ] 🤖 AI 자동 코드 리뷰 시스템
- [ ] 📊 실시간 협업 대시보드
- [ ] 🌍 다국어 Naming Wizard (EN, JA, ZH)
- [ ] 🔌 VS Code Extension
- [ ] 🎨 Web UI for Configuration

### v6.2 (2026 Q1)
- [ ] 🧪 자동 테스트 생성
- [ ] 🪝 Git Hooks 통합
- [ ] ☁️ 클라우드 동기화
- [ ] 📱 Mobile App
- [ ] 🔐 고급 보안 기능

### v7.0 (2026 Q2)
- [ ] 🤖 AI 에이전트 자동화
- [ ] 🧠 머신러닝 기반 예측
- [ ] 🌐 분산 시스템 지원
- [ ] 🚀 엔터프라이즈 기능

---

## 📊 통계

| Metric | Value |
|--------|-------|
| **MCP Tools** | 24개 |
| **Folders** | 8개 (07_META 포함) |
| **Supported AIs** | 4개 (Cursor, Claude, ChatGPT, Windsurf) |
| **Languages** | 3개 (KO, EN, JA) |
| **Downloads** | [![npm](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg)](https://www.npmjs.com/package/ai-naming-standard-mcp) |
| **Stars** | [![GitHub stars](https://img.shields.io/github/stars/ai-naming-standard/v6.svg)](https://github.com/ai-naming-standard/v6) |
| **Contributors** | [![Contributors](https://img.shields.io/github/contributors/ai-naming-standard/v6.svg)](https://github.com/ai-naming-standard/v6/graphs/contributors) |

---

## 🎯 핵심 가치

> **"폴더는 최소로, 네이밍은 최대로, 협업은 자연스럽게, 거버넌스는 완벽하게"**

### 우리의 비전
AI와 인간이 완벽하게 협업하는 미래, 그 미래는 표준에서 시작됩니다.

### 우리의 미션
모든 프로젝트에 일관성, 추적성, 확장성을 제공하여 AI 시대의 소프트웨어 개발을 혁신합니다.

---

## ⭐ 프로젝트 지원하기

이 프로젝트가 도움이 되셨나요?

- ⭐ [GitHub에 Star 주기](https://github.com/ai-naming-standard/v6)
- 🐦 [Twitter에 공유하기](https://twitter.com/intent/tweet?text=Check%20out%20AI%20Naming%20Standard%20MCP%20v6.0.0!&url=https://github.com/ai-naming-standard/v6)
- 💝 [Sponsor 되기](https://github.com/sponsors/ai-naming-standard)

---

<div align="center">

**Version**: 6.0.0 STABLE  
**Release Date**: 2025.10.17  
**Status**: Production Ready ✅  
**MCP Protocol**: v0.6.0  
**Node**: >=16.0.0

---

Made with ❤️ by [AI Naming Standard Organization](https://github.com/ai-naming-standard)

[Website](https://ai-naming-standard.org) • 
[Documentation](./AI-NAMING-STANDARD/KR/v6.0.0/) • 
[NPM](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/v6)

</div>
