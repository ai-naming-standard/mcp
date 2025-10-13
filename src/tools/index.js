import { getMessages, formatMessage } from '../messages/index.js';

// 파일명 생성 함수
export async function generateFileName({
  microservice,
  sequence = '001',
  layer,
  domain,
  action,
  feature = 'base',
  env = 'dev',
  ext
}) {
  const msg = getMessages();
  
  // 도메인 정규화 (공백을 하이픈으로)
  const normalizedDomain = domain.toLowerCase().replace(/\s+/g, '-');
  
  // 파일명 생성
  const fileName = `${microservice}_${sequence}_${layer}_${normalizedDomain}_${action}_${feature}_${env}.${ext}`;
  
  return {
    fileName,
    path: `/${microservice}/${layer}/${fileName}`,
    description: `${microservice} ${msg.descriptions.fileDescription} ${layer} ${normalizedDomain} ${action}`
  };
}

// 파일명 검증 함수
export async function validateFileName({ fileName }) {
  const msg = getMessages();
  
  // 파일명 패턴
  const pattern = /^([a-z]+)_([0-9]{3}|v[0-9]+|main|alt|[0-9]{3}[a-z]?[0-9]?|[0-9]{3}-[0-9]+|[0-9]{3}s[0-9]+)_([a-z]+)_([a-z]+-[a-z]+)_([a-z]+)_([a-z]+)_([a-z]+)\.([a-z]+)$/;
  
  const match = fileName.match(pattern);
  
  if (!match) {
    return {
      valid: false,
      errors: [
        msg.errors.invalidPattern,
        msg.errors.correctFormat
      ],
      suggestion: await suggestCorrection({ fileName })
    };
  }
  
  const [, microservice, sequence, layer, domain, action, feature, env, ext] = match;
  
  const errors = [];
  const warnings = [];
  
  // 각 컴포넌트 검증
  const validMicroservices = ['auth', 'user', 'payment', 'order', 'product', 'notification', 'analytics', 'gateway', 'search', 'recommendation'];
  if (!validMicroservices.includes(microservice)) {
    warnings.push(`${msg.warnings.customMicroservice.replace('가 표준 목록에 없습니다. 커스텀 서비스인지 확인하세요', '')}: '${microservice}'`);
  }
  
  const validLayers = ['controller', 'service', 'repository', 'model', 'dto', 'middleware', 'util', 'config', 'validator', 'helper'];
  if (!validLayers.includes(layer)) {
    errors.push(`${msg.errors.invalidLayer}: '${layer}'`);
  }
  
  const validActions = ['create', 'read', 'update', 'delete', 'validate', 'transform', 'calculate', 'send', 'fetch', 'process'];
  if (!validActions.includes(action)) {
    warnings.push(`${msg.warnings.nonStandardAction}: '${action}'`);
  }
  
  const validEnvs = ['dev', 'test', 'staging', 'prod', 'common'];
  if (!validEnvs.includes(env)) {
    errors.push(`${msg.errors.invalidEnv}: '${env}'`);
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    components: {
      microservice,
      sequence,
      layer,
      domain,
      action,
      feature,
      env,
      ext
    }
  };
}

// 파일명 설명 함수
export async function explainFileName({ fileName }) {
  const msg = getMessages();
  const validation = await validateFileName({ fileName });
  
  if (!validation.valid) {
    return {
      error: msg.errors.invalidPattern,
      details: validation.errors
    };
  }
  
  const { microservice, sequence, layer, domain, action, feature, env, ext } = validation.components;
  
  // 시퀀스 타입 분석
  let sequenceType = 'standard';
  let sequenceExplanation = `${msg.sequences.standard} ${sequence}`;
  
  if (sequence.includes('-')) {
    sequenceType = 'dependency';
    sequenceExplanation = msg.sequences.dependency;
  } else if (sequence.match(/[0-9]{3}[a-z]/)) {
    sequenceType = 'parallel';
    sequenceExplanation = msg.sequences.parallel;
  } else if (sequence.includes('s')) {
    sequenceType = 'subordinate';
    sequenceExplanation = msg.sequences.subordinate;
  } else if (sequence === 'main') {
    sequenceExplanation = msg.sequences.main;
  } else if (sequence === 'alt') {
    sequenceExplanation = msg.sequences.alt;
  } else if (sequence.startsWith('v')) {
    sequenceExplanation = `${msg.sequences.version} ${sequence.substring(1)}`;
  }
  
  return {
    fileName,
    explanation: {
      microservice: `${msg.descriptions.microservice}: ${microservice}`,
      sequence: sequenceExplanation,
      layer: `${msg.descriptions.layer}: ${layer}`,
      domain: `${msg.descriptions.domain}: ${domain.replace('-', ' ')}`,
      action: `${msg.descriptions.action}: ${action}`,
      feature: `${msg.descriptions.feature}: ${feature}`,
      environment: `${msg.descriptions.environment}: ${env}`,
      extension: `${msg.descriptions.extension}: ${ext}`
    },
    purpose: msg.descriptions.purpose
      .replace('環境', env)
      .replace('サービス', microservice)
      .replace('レイヤー', layer)
      .replace('に対する', domain.replace('-', ' '))
      .replace('操作', action),
    sequenceType
  };
}

// Layer 코드 조회 함수
export async function getLayerCodes({ category = 'all' }) {
  const msg = getMessages();
  const layerDescs = msg.layers;
  
  const layers = {
    backend: [
      { code: 'controller', name: 'Controller', description: layerDescs.controller },
      { code: 'service', name: 'Service', description: layerDescs.service },
      { code: 'repository', name: 'Repository', description: layerDescs.repository },
      { code: 'model', name: 'Model', description: layerDescs.model },
      { code: 'dto', name: 'DTO', description: layerDescs.dto },
      { code: 'middleware', name: 'Middleware', description: layerDescs.middleware },
      { code: 'validator', name: 'Validator', description: layerDescs.validator }
    ],
    frontend: [
      { code: 'component', name: 'Component', description: layerDescs.component },
      { code: 'page', name: 'Page', description: layerDescs.page },
      { code: 'hook', name: 'Hook', description: layerDescs.hook },
      { code: 'store', name: 'Store', description: layerDescs.store },
      { code: 'util', name: 'Utility', description: layerDescs.util },
      { code: 'style', name: 'Style', description: layerDescs.style }
    ],
    data: [
      { code: 'migration', name: 'Migration', description: layerDescs.migration },
      { code: 'seed', name: 'Seed', description: layerDescs.seed },
      { code: 'schema', name: 'Schema', description: layerDescs.schema }
    ],
    infra: [
      { code: 'config', name: 'Config', description: layerDescs.config },
      { code: 'docker', name: 'Docker', description: layerDescs.docker },
      { code: 'k8s', name: 'Kubernetes', description: layerDescs.k8s },
      { code: 'terraform', name: 'Terraform', description: layerDescs.terraform }
    ]
  };
  
  if (category === 'all') {
    return {
      layers: [
        ...layers.backend,
        ...layers.frontend,
        ...layers.data,
        ...layers.infra
      ]
    };
  }
  
  return {
    category,
    layers: layers[category] || []
  };
}

// Action 코드 조회 함수
export async function getActionCodes({ category = 'all' }) {
  const msg = getMessages();
  const actionDescs = msg.actions;
  
  const actions = {
    crud: [
      { code: 'create', name: 'Create', description: actionDescs.create },
      { code: 'read', name: 'Read', description: actionDescs.read },
      { code: 'update', name: 'Update', description: actionDescs.update },
      { code: 'delete', name: 'Delete', description: actionDescs.delete }
    ],
    processing: [
      { code: 'validate', name: 'Validate', description: actionDescs.validate },
      { code: 'transform', name: 'Transform', description: actionDescs.transform },
      { code: 'calculate', name: 'Calculate', description: actionDescs.calculate },
      { code: 'process', name: 'Process', description: actionDescs.process },
      { code: 'analyze', name: 'Analyze', description: actionDescs.analyze }
    ],
    communication: [
      { code: 'send', name: 'Send', description: actionDescs.send },
      { code: 'fetch', name: 'Fetch', description: actionDescs.fetch },
      { code: 'sync', name: 'Sync', description: actionDescs.sync },
      { code: 'publish', name: 'Publish', description: actionDescs.publish },
      { code: 'subscribe', name: 'Subscribe', description: actionDescs.subscribe }
    ]
  };
  
  if (category === 'all') {
    return {
      actions: [
        ...actions.crud,
        ...actions.processing,
        ...actions.communication
      ]
    };
  }
  
  return {
    category,
    actions: actions[category] || []
  };
}

// 프로젝트 템플릿 생성 함수
export async function getProjectTemplate({ projectType, scale = 'mvp' }) {
  const msg = getMessages();
  
  const templates = {
    ecommerce: {
      name: msg.projectTypes.ecommerce,
      microservices: ['auth', 'user', 'product', 'order', 'payment', 'inventory', 'cart', 'shipping', 'review'],
      mvp: 20,
      growth: 50,
      mature: 100,
      enterprise: 200
    },
    'social-media': {
      name: msg.projectTypes['social-media'],
      microservices: ['identity', 'profile', 'feed', 'post', 'media', 'messaging', 'comment', 'follow', 'notification'],
      mvp: 25,
      growth: 60,
      mature: 120,
      enterprise: 250
    },
    fintech: {
      name: msg.projectTypes.fintech,
      microservices: ['auth', 'account', 'transaction', 'payment', 'wallet', 'kyc', 'fraud', 'reporting', 'notification'],
      mvp: 30,
      growth: 70,
      mature: 150,
      enterprise: 300
    }
  };
  
  const template = templates[projectType];
  if (!template) {
    return {
      error: `${msg.errors.unknownProjectType}: ${projectType}`
    };
  }
  
  const fileCount = template[scale];
  const files = [];
  
  // 각 마이크로서비스별 기본 파일 생성
  for (const service of template.microservices.slice(0, scale === 'mvp' ? 3 : template.microservices.length)) {
    // Controller
    files.push(`${service}_001_controller_main-api_read_validation_${scale === 'mvp' ? 'dev' : 'prod'}.ts`);
    files.push(`${service}_002_controller_main-api_create_validation_${scale === 'mvp' ? 'dev' : 'prod'}.ts`);
    
    // Service
    files.push(`${service}_001_service_core-logic_process_calculation_${scale === 'mvp' ? 'dev' : 'prod'}.ts`);
    
    // Repository
    files.push(`${service}_001_repository_data-access_read_caching_${scale === 'mvp' ? 'dev' : 'prod'}.ts`);
    
    // Model
    files.push(`${service}_001_model_schema-definition_create_validation_common.ts`);
    
    if (files.length >= fileCount) break;
  }
  
  return {
    projectType,
    projectName: template.name,
    scale,
    microservices: template.microservices,
    estimatedFiles: fileCount,
    sampleFiles: files.slice(0, 10),
    structure: {
      controllers: files.filter(f => f.includes('_controller_')).length,
      services: files.filter(f => f.includes('_service_')).length,
      repositories: files.filter(f => f.includes('_repository_')).length,
      models: files.filter(f => f.includes('_model_')).length
    }
  };
}

// 일괄 파일명 생성 함수
export async function batchGenerateFileNames({ projectType, microservices, count = 10 }) {
  const files = [];
  const layers = ['controller', 'service', 'repository', 'model', 'dto'];
  const actions = ['create', 'read', 'update', 'delete', 'validate'];
  const features = ['validation', 'caching', 'logging', 'encryption', 'notification'];
  const envs = ['dev', 'test', 'prod'];
  
  for (let i = 0; i < count && files.length < count; i++) {
    for (const service of microservices) {
      const layer = layers[i % layers.length];
      const action = actions[Math.floor(i / layers.length) % actions.length];
      const feature = features[i % features.length];
      const env = envs[i % envs.length];
      const sequence = String(i + 1).padStart(3, '0');
      
      const fileName = await generateFileName({
        microservice: service,
        sequence,
        layer,
        domain: `${service}-main`,
        action,
        feature,
        env,
        ext: 'ts'
      });
      
      files.push(fileName);
      
      if (files.length >= count) break;
    }
  }
  
  return {
    projectType,
    count: files.length,
    files
  };
}

// 파일명 수정 제안 함수
export async function suggestCorrection({ fileName }) {
  const msg = getMessages();
  
  // 파일명을 언더스코어로 분리
  const parts = fileName.split(/[_\.]/);
  
  // 확장자 추출
  const ext = parts[parts.length - 1];
  
  // 각 파트 분석 및 제안
  const suggestions = [];
  
  // 첫 번째 파트: 마이크로서비스
  if (parts[0]) {
    const normalized = parts[0].toLowerCase().replace(/[^a-z]/g, '');
    if (normalized !== parts[0]) {
      suggestions.push(`${msg.suggestions.fixMicroservice}: '${normalized}'`);
    }
  } else {
    suggestions.push(msg.suggestions.addMicroservice);
  }
  
  // 두 번째 파트: 순번
  if (parts[1]) {
    if (!/^([0-9]{3}|v[0-9]+|main|alt)/.test(parts[1])) {
      suggestions.push(msg.suggestions.fixSequence);
    }
  } else {
    suggestions.push(msg.suggestions.addSequence);
  }
  
  // 나머지 파트들 체크
  if (parts.length < 8) {
    suggestions.push(`${msg.errors.missingComponents}: [ms]_[seq]_[layer]_[domain]_[action]_[feature]_[env].[ext]`);
  }
  
  // 추천 파일명 생성
  const recommended = `${parts[0] || 'service'}_001_${parts[2] || 'controller'}_${parts[3] || 'main-api'}_${parts[4] || 'read'}_${parts[5] || 'validation'}_${parts[6] || 'dev'}.${ext || 'ts'}`;
  
  return {
    original: fileName,
    issues: suggestions,
    recommended: `${msg.suggestions.recommended}: ${recommended}`,
    pattern: '[microservice]_[sequence]_[layer]_[domain-sub]_[action]_[feature]_[env].[ext]'
  };
}
