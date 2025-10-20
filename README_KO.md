# 🚀 AI 파일 네이밍 도우미

> **AI에게 파일 이름 짓는 법을 가르쳐주세요!**  
> 그러면 AI가 당신의 프로젝트를 더 잘 이해하고 효과적으로 도와줍니다.

[![npm version](https://img.shields.io/npm/v/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![npm downloads](https://img.shields.io/npm/dt/ai-naming-standard-mcp.svg?style=flat-square)](https://www.npmjs.com/package/ai-naming-standard-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**🌐 언어**: [English](./README.md) | [한국어](./README_KO.md) | [日本語](./README_JA.md) | [中文](./README_CN.md)

---

## 💡 이런 분들께 추천해요

✅ Claude, ChatGPT, Cursor 같은 AI 도구를 쓰시는 분  
✅ 파일이 너무 많아서 관리가 어려운 분  
✅ 팀원들과 파일 이름 규칙을 통일하고 싶은 분  
✅ AI가 내 프로젝트를 더 잘 이해했으면 하는 분

---

## 🎯 어떤 문제를 해결하나요?

### ❌ 기존: 헷갈리는 파일 이름

```
login.js
user_page_final_v2.jsx
payment_수정본.py
test123.sql
```

**결과:** AI가 헷갈려서 실수를 합니다 😵

### ✅ 적용 후: 명확한 파일 이름

```
001_FE_User-Login_C_Page_PROD.jsx
002_BE_Payment-Process_X_API_PROD.py
003_DB_User-Schema_C_Migration_PROD.sql
004_TEST_Login_Unit_DEV.test.js
```

**결과:** AI가 정확히 이해하고 더 잘 도와줍니다! ✨

---

## 🎁 어떤 도움을 받을 수 있나요?

### 1. 🤖 AI가 의도를 이해합니다

**일상 언어로 말하기만 하면:**
- "로그인 페이지 만들어줘" → AI가 자동으로: `001_FE_User-Login_C_Page_PROD.jsx`
- "결제 취소 API 추가해줘" → AI가 자동으로: `021_BE_Payment-Refund_C_API_PROD.py`
- "상품 테이블 만들어줘" → AI가 자동으로: `005_DB_Product-Schema_C_Migration_PROD.sql`

### 2. 📁 8개의 간단한 폴더

프로젝트가 자동으로 정리됩니다:

```
my-project/
├── 00_DOCS/      📚 문서
├── 01_CONFIG/    ⚙️ 설정 파일
├── 02_STATIC/    📦 이미지, 폰트
├── 03_ACTIVE/    🔥 메인 코드
├── 04_TEST/      🧪 테스트
├── 05_BUILD/     🏗️ 빌드 파일
├── 06_LOGS/      📊 로그
└── 07_META/      🎯 AI 협업 파일
```

### 3. 🤝 여러 AI가 함께 작업

- **Claude**가 코드 작성
- **Cursor**가 리뷰
- **ChatGPT**가 구조 설계
- **모두 같은 규칙을 이해합니다!**

### 4. 📝 자동 기록 관리

모든 것이 자동으로 기록됩니다:
- 누가 무엇을 했는지
- 언제 작업했는지
- 어떤 파일들이 서로 연결되어 있는지

---

## ⚡ 빠른 시작 (3분)

### 1단계: 설치

```bash
npm install -g ai-naming-standard-mcp
```

### 2단계: AI에게 알려주기

Claude나 Cursor 설정에 이것만 복사하세요:

```json
{
  "mcpServers": {
    "ai-naming-standard": {
      "command": "node",
      "args": ["path/to/ai-naming-standard-mcp/src/index.js"]
    }
  }
}
```

### 3단계: 바로 사용!

AI에게 일상 언어로 말하세요:
- "사용자 대시보드 페이지 만들어줘"
- "이메일 인증 API 추가해줘"
- "상품 데이터베이스 테이블 만들어줘"

**끝입니다!** 🎉

---

## 📖 실제 사용 예시

### 예시 1: 쇼핑몰 만들기

**당신:** "장바구니 페이지 필요해"

**AI가 만듦:**
```
015_FE_Cart-Shopping_R_Page_PROD.jsx
```

**이름만 봐도 알 수 있어요:**
- `015` - 파일 번호 (찾기 쉽게)
- `FE` - 프론트엔드 (웹페이지)
- `Cart-Shopping` - 장바구니 기능
- `R` - Read/보기 (정보 표시)
- `Page` - 페이지
- `PROD` - 프로덕션 (실제 사이트)

### 예시 2: 팀 협업

**기존:**
- 철수: `login_page.jsx`
- 영희: `LoginPage.jsx`
- 민수: `user-login-component.jsx`
- 😵 모두 헷갈림!

**적용 후:**
- 모두: `001_FE_User-Login_C_Page_PROD.jsx`
- ✨ 완벽한 일관성!

---

## 🌍 4개 언어 지원

모든 기능이 당신의 언어로 작동합니다:

| 언어 | 상태 | 문서 |
|----------|--------|---------------|
| English | ✅ 완전 지원 | [Docs](https://github.com/ai-naming-standard/mcp/tree/main/docs/EN) |
| 한국어 (Korean) | ✅ 완전 지원 | [문서](https://github.com/ai-naming-standard/mcp/tree/main/docs/KR) |
| 日本語 (Japanese) | ✅ 완전 지원 | [ドキュメント](https://github.com/ai-naming-standard/mcp/tree/main/docs/JP) |
| 中文 (Chinese) | ✅ 완전 지원 | [文档](https://github.com/ai-naming-standard/mcp/tree/main/docs/CN) |

---

## 🎓 파일 이름은 어떻게 만들어지나요?

걱정 마세요 - 외울 필요 없습니다!  
**AI에게 원하는 것을 말하기만 하면, AI가 올바른 이름을 만듭니다.**

하지만 궁금하시다면, 이렇게 작동합니다:

```
[번호]_[위치]_[무엇]-[세부사항]_[동작]_[타입]_[환경]
```

**예시:**

| 파일 이름 | 의미 |
|-----------|---------|
| `001_FE_User-Login_C_Page_PROD.jsx` | 프론트엔드 로그인 페이지 (생성) |
| `002_BE_Payment-Process_X_Service_PROD.py` | 백엔드 결제 서비스 (실행) |
| `003_DB_Order-Schema_C_Migration_PROD.sql` | 데이터베이스 주문 테이블 (생성) |

**위치 (Layer):**
- `FE` = 프론트엔드 (사용자가 보는 화면)
- `BE` = 백엔드 (서버 로직)
- `DB` = 데이터베이스 (데이터 저장)
- `API` = API (연결)

**동작:**
- `C` = Create (새로 만들기)
- `R` = Read (보기)
- `U` = Update (수정)
- `D` = Delete (삭제)
- `X` = Execute (처리)

---

## 💬 도움이 필요하신가요?

📧 **이메일**: [omskykhal@gmail.com](mailto:omskykhal@gmail.com)

---

## 🤝 함께 만들어가요

환영합니다:
- 버그 리포트
- 기능 제안
- 번역
- 문서 개선

**기여 방법:**

1. GitHub 방문: [https://github.com/ai-naming-standard/mcp](https://github.com/ai-naming-standard/mcp)
2. Issue나 Pull Request 열기
3. 빠르게 검토하고 답변드립니다!

---

## 📜 라이선스

MIT 라이선스 - 누구나 무료로 사용 가능!

```
Copyright (c) 2025 AI Naming Standard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🎯 핵심 혜택

✨ **시간 절약**: 더 이상 파일 이름 고민 안 해도 됨  
✨ **헷갈림 없음**: 모두가 같은 규칙 사용  
✨ **더 나은 AI 도움**: AI가 프로젝트 구조 이해  
✨ **쉬운 협업**: 모두에게 명확한 규칙  
✨ **전문적**: 프로젝트가 정리되고 깔끔해 보임

---

## 📦 기술 세부사항 (개발자용)

<details>
<summary>기술 정보 보기</summary>

### MCP 프로토콜

- MCP v0.6.0 호환
- 24개 내장 파일 관리 도구
- 멀티 AI 오케스트레이션 지원
- 자동 의존성 추적

### 시스템 요구사항

- Node.js >= 16.0.0
- npm 또는 yarn
- Claude Desktop, Cursor, VS Code 호환

### 고급 기능

- 커스텀 네이밍 규칙
- v4/v5에서 마이그레이션
- 의존성 그래프 생성
- AI 역할 매트릭스 관리
- 대화 기록 추적

자세한 기술 문서: [기술 문서](./AI-NAMING-STANDARD/KR/v6.0.0/)

</details>

---

<div align="center">

**버전**: 6.0.13  
**상태**: 프로덕션 준비 완료 ✅

AI 커뮤니티를 위해 정성껏 만들었습니다 💙

[NPM 패키지](https://www.npmjs.com/package/ai-naming-standard-mcp) • 
[GitHub](https://github.com/ai-naming-standard/mcp) • 
[문서](./AI-NAMING-STANDARD/KR/v6.0.0/)

</div>
