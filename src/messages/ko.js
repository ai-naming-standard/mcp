// 한국어 메시지
export const messages = {
  // 버전 정보
  version: '5.0',
  architecture: '스마트 폴더화(Smart-Folderization)',
  // 도구 설명
  tools: {
    generateFileName: {
      name: '파일명 생성',
      description: 'AI 네이밍 컨벤션에 따라 파일명을 생성합니다'
    },
    validateFileName: {
      name: '파일명 검증',
      description: '파일명이 AI 네이밍 컨벤션을 준수하는지 검증합니다'
    },
    explainFileName: {
      name: '파일명 설명',
      description: '파일명의 각 구성 요소를 설명합니다'
    },
    getLayerCodes: {
      name: 'Layer 코드 조회',
      description: 'Layer 코드표를 조회합니다'
    },
    getActionCodes: {
      name: 'Action 코드 조회',
      description: 'Action 코드표를 조회합니다'
    },
    getProjectTemplate: {
      name: '프로젝트 템플릿',
      description: '프로젝트 타입별 파일 구조 템플릿을 생성합니다'
    },
    batchGenerateFileNames: {
      name: '일괄 생성',
      description: '여러 파일명을 한번에 생성합니다'
    },
    suggestCorrection: {
      name: '수정 제안',
      description: '잘못된 파일명에 대한 수정 제안을 제공합니다'
    }
  },

  // 파라미터 설명
  parameters: {
    microservice: '마이크로서비스명 (auth, user, payment 등)',
    sequence: '순번 (001-999, v1-v99, main/alt) 또는 관계성 (001-1, 001a, 001s1)',
    layer: '아키텍처 계층',
    domain: '도메인-서브도메인 (user-login, payment-card 등)',
    action: 'CRUD 동작',
    feature: '세부 기능',
    env: '환경',
    ext: '파일 확장자',
    fileName: '검증할 파일명',
    category: '카테고리',
    projectType: '프로젝트 타입',
    scale: '프로젝트 규모',
    microservices: '마이크로서비스 목록',
    count: '생성할 파일 수'
  },

  // 에러 메시지
  errors: {
    invalidPattern: '파일명이 네이밍 컨벤션 패턴을 따르지 않습니다',
    correctFormat: '올바른 형식: [microservice]_[sequence]_[layer]_[domain-sub]_[action]_[feature]_[env].[ext]',
    invalidLayer: '유효하지 않은 레이어',
    invalidEnv: '유효하지 않은 환경',
    unknownTool: '알 수 없는 도구',
    unknownResource: '알 수 없는 리소스',
    unknownProjectType: '알 수 없는 프로젝트 타입',
    missingComponents: '누락된 구성 요소가 있습니다. 전체 형식'
  },

  // 경고 메시지
  warnings: {
    customMicroservice: '마이크로서비스가 표준 목록에 없습니다. 커스텀 서비스인지 확인하세요',
    nonStandardAction: '비표준 액션'
  },

  // 설명 메시지
  descriptions: {
    fileDescription: '서비스의 계층에서 도메인의 작업을 수행하는 파일',
    microservice: '마이크로서비스',
    sequence: '순번',
    layer: '아키텍처 계층',
    domain: '도메인',
    action: '수행 작업',
    feature: '세부 기능',
    environment: '실행 환경',
    extension: '파일 형식',
    purpose: '이 파일은 환경에서 서비스의 계층에서 에 대한 작업을 수행합니다'
  },

  // 시퀀스 설명
  sequences: {
    standard: '순번',
    dependency: '의존성 관계 (순차 실행 필요)',
    parallel: '병렬 실행 가능한 관련 파일',
    subordinate: '종속 관계 (부모-자식)',
    main: '메인 파일',
    alt: '대체 구현',
    version: '버전'
  },

  // 제안 메시지
  suggestions: {
    fixMicroservice: '마이크로서비스명을 다음으로 수정',
    fixSequence: '순번을 \'001\' 형식으로 수정',
    addMicroservice: '마이크로서비스명 추가 필요 (예: auth, user, payment)',
    addSequence: '순번 추가 필요 (예: 001, v1, main)',
    recommended: '추천 파일명'
  },

  // 프로젝트 타입
  projectTypes: {
    ecommerce: '이커머스/마켓플레이스',
    'social-media': '소셜 미디어',
    fintech: '핀테크/뱅킹',
    healthcare: '헬스케어/의료',
    education: '교육/이러닝',
    streaming: '스트리밍/미디어',
    'food-delivery': '음식 배달',
    travel: '여행/숙박',
    iot: 'IoT/스마트홈',
    gaming: '게이밍/e스포츠',
    blockchain: '블록체인/Web3'
  },

  // 컴포넌트 설명
  components: {
    microservice: '마이크로서비스 식별자',
    sequence: '파일 순번 또는 관계성 표현',
    sequential: '순차적 번호 (001-999)',
    version: '버전 번호',
    variant: '주/보조 구현',
    dependency: '의존성 관계 (순차 실행)',
    parallel: '병렬 실행 가능',
    subordinate: '종속 관계 (부모-자식)',
    layer: '아키텍처 계층',
    domain: '도메인-서브도메인',
    action: '수행 동작',
    feature: '세부 기능',
    environment: '실행 환경',
    extension: '파일 확장자'
  },

  // 베스트 프랙티스
  bestPractices: [
    '마이크로서비스명은 명확하고 간결하게',
    '순번은 001부터 시작하여 순차적으로 부여',
    '관계성이 있는 파일은 Level 1 관계성 표현 사용',
    '도메인-서브도메인은 kebab-case로 표현',
    '환경 태그는 배포 환경과 일치시키기',
    '파일명 길이는 80자 이내로 제한',
    '약어보다는 명확한 단어 사용 권장'
  ],

  // 안티패턴
  antiPatterns: [
    '카멜케이스나 파스칼케이스 사용 금지',
    '특수문자 사용 금지 (언더스코어, 하이픈 제외)',
    '불명확한 약어 사용 금지',
    '중복된 정보 포함 금지',
    '환경 정보 누락 금지'
  ],

  // Layer 설명
  layers: {
    controller: 'HTTP 요청 처리, 라우팅',
    service: '비즈니스 로직 구현',
    repository: '데이터 접근 계층',
    model: '데이터 구조 정의',
    dto: '데이터 전송 객체',
    middleware: '요청/응답 중간 처리',
    validator: '입력 검증',
    component: 'UI 컴포넌트',
    page: '페이지 컴포넌트',
    hook: 'React/Vue 훅',
    store: '상태 관리',
    util: '유틸리티 함수',
    style: '스타일시트',
    migration: 'DB 마이그레이션',
    seed: '초기 데이터',
    schema: 'DB 스키마',
    config: '설정 파일',
    docker: 'Docker 설정',
    k8s: 'K8s 매니페스트',
    terraform: 'IaC 코드'
  },

  // Action 설명
  actions: {
    create: '새로운 리소스 생성',
    read: '데이터 조회',
    update: '기존 데이터 수정',
    delete: '리소스 삭제',
    validate: '유효성 검사',
    transform: '데이터 변환',
    calculate: '계산 수행',
    process: '데이터 처리',
    analyze: '데이터 분석',
    send: '데이터 전송',
    fetch: '외부 데이터 가져오기',
    sync: '동기화',
    publish: '이벤트 발행',
    subscribe: '이벤트 구독'
  },

  // 서버 메시지
  server: {
    started: 'AI Naming Standard MCP 서버 v5.0 (스마트 폴더화) 가 성공적으로 시작되었습니다',
    error: '오류'
  },

  // v5 전용 메시지
  v5: {
    projectCreated: '7개 표준 폴더로 프로젝트 구조 생성 완료',
    folderSuggested: '파일 분석을 통해 폴더 제안됨',
    migrationPlan: 'v4에서 v5로의 마이그레이션 계획 생성 (테스트 실행)',
    migrationExecuted: 'v5 마이그레이션 성공적으로 실행됨',
    smartFolderization: '스마트 폴더화: 최소 폴더, 파일명에 최대 컨텍스트'
  },

  // 폴더 설명
  folders: {
    '00_DOCS': '문서 (AI 읽기 전용)',
    '01_CONFIG': '설정 (AI 수정 금지)',
    '02_STATIC': '정적 자원 (AI 읽기/추가)',
    '03_ACTIVE': '활성 코드 (AI 전체 권한)',
    '04_TEST': '테스트 (AI 생성/수정)',
    '05_BUILD': '빌드 결과물 (AI 생성 전용)',
    '06_LOGS': '로그 (AI 쓰기 전용)'
  },

  // AI 권한
  aiPermissions: {
    'read-only': '읽기만 가능',
    'no-modify': '수정 불가',
    'read-add': '읽기 및 추가 가능',
    'full-access': '모든 작업 권한',
    'create-modify': '생성 및 수정 가능',
    'create-only': '생성만 가능',
    'write-only': '쓰기/추가만 가능'
  }
};

export default messages;