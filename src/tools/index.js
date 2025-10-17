import { getMessages, formatMessage } from '../messages/index.js';
import namingRules from '../rules/convention.js';

// ========== v4 기존 도구들 (하위 호환성) ==========

// 파일명 생성 함수 (v5.0.1 ChatGPT Enhancement)
export async function generateFileName({
  folder = '03_ACTIVE',
  index = '001',
  layer = 'BE',
  domain,
  feature,
  action = 'R',
  detail = 'Service',
  env = 'DEV',
  ext = 'js',
  isTest = false,
  isStatic = false,
  staticType = null
}) {
  const msg = getMessages();
  
  // 02_STATIC 파일 처리 (ChatGPT Enhancement)
  if (folder === '02_STATIC' || isStatic) {
    const prefix = staticType === 'template' ? 'TEMPLATE_' : 
                   staticType === 'config' ? 'CONFIG_' : 'ASSET_';
    const staticName = domain || 'file';
    return {
      fileName: `${prefix}${staticName}.${ext}`,
      folder: '02_STATIC',
      fullPath: `02_STATIC/${prefix}${staticName}.${ext}`,
      description: `Static ${staticType || 'asset'} file`,
      requiresPrefix: true
    };
  }
  
  // 04_TEST 파일 처리 (ChatGPT Enhancement)
  if (folder === '04_TEST' || isTest) {
    const testType = detail || 'Unit';
    const testFileName = `${index}_TEST_${domain}-${feature}_${testType}_${env}.test.${ext}`;
    return {
      fileName: testFileName,
      folder: '04_TEST',
      fullPath: `04_TEST/${testFileName}`,
      description: `Test file for ${domain}-${feature} (${testType})`,
      indexedNaming: true
    };
  }
  
  // 도메인과 기능 정규화 (03_ACTIVE 파일)
  const normalizedDomain = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase();
  const normalizedFeature = feature.charAt(0).toUpperCase() + feature.slice(1).toLowerCase();
  
  // 표준 파일명 생성 (v5 패턴)
  const fileName = `${index}_${layer}_${normalizedDomain}-${normalizedFeature}_${action}_${detail}_${env}.${ext}`;
  
  return {
    fileName,
    folder,
    fullPath: `${folder}/${fileName}`,
    description: `${layer} ${normalizedDomain} ${normalizedFeature} ${detail} for ${env} environment`,
    hasDependency: index.includes('-') || index.includes('s') || /[a-z]$/.test(index)
  };
}

// 파일명 검증 함수 (v5 업데이트)
export async function validateFileName({ fileName, folder = '03_ACTIVE' }) {
  const msg = getMessages();
  const rules = namingRules();
  
  // v5 파일명 패턴
  const pattern = /^([0-9]{3}(?:\.[0-9]+)?(?:[a-z]|s[0-9]+|-[0-9]+)?)_([A-Z]{2,6})_([A-Z][a-z]+(?:-[A-Z][a-z]+)+)_([CRUDVXSTG])_([A-Z][a-z]+)_([A-Z]{2,6})\.([a-z]+)$/;
  
  const match = fileName.match(pattern);
  
  if (!match) {
    return {
      valid: false,
      errors: [
        msg.errors.invalidPattern || 'Invalid file name pattern',
        'Correct format: [Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]'
      ],
      suggestion: await suggestCorrection({ fileName })
    };
  }
  
  const [, index, layer, domainFeature, action, detail, env, ext] = match;
  
  const errors = [];
  const warnings = [];
  
  // 폴더별 네이밍 규칙 체크
  const folderRule = rules.standardFolders[folder];
  if (folderRule && !folderRule.namingRuleRequired && folder !== '03_ACTIVE') {
    warnings.push(`Naming convention is optional for ${folder}`);
  }
  
  // Layer 검증
  const validLayers = ['FE', 'BE', 'DB', 'API', 'ML', 'INFRA', 'SH'];
  if (!validLayers.includes(layer)) {
    errors.push(`Invalid layer: '${layer}'`);
  }
  
  // Action 검증
  const validActions = ['C', 'R', 'U', 'D', 'V', 'X', 'S', 'T', 'G'];
  if (!validActions.includes(action)) {
    errors.push(`Invalid action: '${action}'`);
  }
  
  // Environment 검증
  const validEnvs = ['DEV', 'STG', 'PROD', 'COMMON'];
  if (!validEnvs.includes(env)) {
    errors.push(`Invalid environment: '${env}'`);
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    components: {
      index,
      layer,
      domainFeature,
      action,
      detail,
      env,
      ext
    },
    folder
  };
}

// 파일명 설명 함수
export async function explainFileName({ fileName }) {
  const msg = getMessages();
  const validation = await validateFileName({ fileName });
  
  if (!validation.valid) {
    return {
      error: msg.errors.invalidPattern || 'Invalid pattern',
      details: validation.errors
    };
  }
  
  const { index, layer, domainFeature, action, detail, env, ext } = validation.components;
  
  // 액션 코드 설명
  const actionDescriptions = {
    'C': 'Create',
    'R': 'Read',
    'U': 'Update',
    'D': 'Delete',
    'V': 'Validate',
    'X': 'Execute',
    'S': 'Send',
    'T': 'Transform',
    'G': 'Generate'
  };
  
  // 레이어 설명
  const layerDescriptions = {
    'FE': 'Frontend',
    'BE': 'Backend',
    'DB': 'Database',
    'API': 'API Gateway',
    'ML': 'Machine Learning',
    'INFRA': 'Infrastructure',
    'SH': 'Shared/Common'
  };
  
  return {
    fileName,
    explanation: {
      index: `Sequence: ${index}`,
      layer: `Layer: ${layerDescriptions[layer] || layer}`,
      domainFeature: `Domain-Feature: ${domainFeature}`,
      action: `Action: ${actionDescriptions[action]} (${action})`,
      detail: `Component: ${detail}`,
      environment: `Environment: ${env}`,
      extension: `Format: ${ext}`
    },
    purpose: `${layerDescriptions[layer]} ${detail} that performs ${actionDescriptions[action]} operation for ${domainFeature} in ${env} environment`
  };
}

// Layer 코드 조회 함수
export async function getLayerCodes({ category = 'all' }) {
  const msg = getMessages();
  
  const layers = {
    frontend: [
      { code: 'FE', name: 'Frontend', description: 'React, Vue, Angular' }
    ],
    backend: [
      { code: 'BE', name: 'Backend', description: 'Node.js, Python, Java' }
    ],
    data: [
      { code: 'DB', name: 'Database', description: 'MySQL, MongoDB, PostgreSQL' }
    ],
    infra: [
      { code: 'API', name: 'API Gateway', description: 'REST, GraphQL, gRPC' },
      { code: 'ML', name: 'Machine Learning', description: 'TensorFlow, PyTorch' },
      { code: 'INFRA', name: 'Infrastructure', description: 'Docker, K8s, Terraform' },
      { code: 'SH', name: 'Shared', description: 'Common utilities' }
    ]
  };
  
  if (category === 'all') {
    return {
      layers: [
        ...layers.frontend,
        ...layers.backend,
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
  
  const actions = {
    crud: [
      { code: 'C', name: 'Create', description: 'Create new resource' },
      { code: 'R', name: 'Read', description: 'Read data' },
      { code: 'U', name: 'Update', description: 'Update existing data' },
      { code: 'D', name: 'Delete', description: 'Delete resource' }
    ],
    processing: [
      { code: 'V', name: 'Validate', description: 'Validate data' },
      { code: 'T', name: 'Transform', description: 'Transform data' },
      { code: 'X', name: 'Execute', description: 'Execute process' },
      { code: 'G', name: 'Generate', description: 'Generate output' }
    ],
    communication: [
      { code: 'S', name: 'Send', description: 'Send data' }
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

// 프로젝트 템플릿 생성 함수 (v5 업데이트)
export async function getProjectTemplate({ projectType, scale = 'mvp' }) {
  const msg = getMessages();
  const rules = namingRules();
  
  const template = rules.projectTemplates[projectType];
  if (!template) {
    return {
      error: `Unknown project type: ${projectType}`
    };
  }
  
  // 7개 표준 폴더 구조
  const folders = [
    '00_DOCS',
    '01_CONFIG', 
    '02_STATIC',
    '03_ACTIVE',
    '04_TEST',
    '05_BUILD',
    '06_LOGS'
  ];
  
  // 샘플 파일 생성
  const sampleFiles = {
    '00_DOCS': ['README.md', 'API_Documentation.md', 'Architecture.md'],
    '01_CONFIG': ['config.dev.yml', 'config.prod.yml', '.env.example'],
    '02_STATIC': ['logo.png', 'favicon.ico'],
    '03_ACTIVE': [],
    '04_TEST': ['test_user_service.py', 'e2e_checkout.test.js'],
    '05_BUILD': [],
    '06_LOGS': []
  };
  
  // 03_ACTIVE에 도메인별 파일 추가
  let fileIndex = 1;
  for (const domain of template.domains.slice(0, scale === 'mvp' ? 3 : template.domains.length)) {
    // Frontend
    sampleFiles['03_ACTIVE'].push(
      `${String(fileIndex).padStart(3, '0')}_FE_${domain}-List_R_Page_PROD.jsx`
    );
    fileIndex++;
    
    // Backend
    sampleFiles['03_ACTIVE'].push(
      `${String(fileIndex).padStart(3, '0')}_BE_${domain}-Create_C_Service_PROD.py`
    );
    fileIndex++;
    
    // Database
    sampleFiles['03_ACTIVE'].push(
      `${String(fileIndex).padStart(3, '0')}_DB_${domain}-Schema_C_Migration_PROD.sql`
    );
    fileIndex++;
  }
  
  return {
    projectType,
    projectName: template.name,
    scale,
    folders,
    estimatedFiles: template.estimatedFiles[scale],
    sampleStructure: sampleFiles,
    domains: template.domains
  };
}

// 일괄 파일명 생성 함수
export async function batchGenerateFileNames({ projectType, domains, count = 10 }) {
  const files = [];
  const layers = ['FE', 'BE', 'DB'];
  const actions = ['C', 'R', 'U', 'D'];
  const details = ['Page', 'Service', 'Schema', 'Controller', 'Component'];
  const envs = ['DEV', 'STG', 'PROD'];
  
  for (let i = 0; i < count && files.length < count; i++) {
    for (const domain of domains) {
      const layer = layers[i % layers.length];
      const action = actions[Math.floor(i / layers.length) % actions.length];
      const detail = details[i % details.length];
      const env = envs[i % envs.length];
      const index = String(i + 1).padStart(3, '0');
      
      const ext = layer === 'FE' ? 'jsx' : layer === 'BE' ? 'py' : 'sql';
      
      const fileName = await generateFileName({
        index,
        layer,
        domain,
        feature: 'Main',
        action,
        detail,
        env,
        ext
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
  const ext = parts[parts.length - 1];
  
  const suggestions = [];
  
  // v5 형식 체크
  if (parts.length < 7) {
    suggestions.push('Missing components. Full format: [Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]');
  }
  
  // 추천 파일명 생성
  const recommended = `001_BE_${parts[2] || 'User-Main'}_R_Service_DEV.${ext || 'js'}`;
  
  return {
    original: fileName,
    issues: suggestions,
    recommended: `Recommended: ${recommended}`,
    pattern: '[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]'
  };
}

// ========== v5.0.2 외부 파일 관리 도구들 ==========

// 외부 파일 처리 도구
export async function handleExternalFile({ 
  vendor,
  version,
  fileType = 'JS',
  url,
  fileName,
  license = 'Unknown'
}) {
  const msg = getMessages();
  const rules = namingRules();
  
  // EXTERNAL_ 파일명 생성
  const ext = fileName ? fileName.split('.').pop() : 'js';
  const externalFileName = `EXTERNAL_${fileType}_${vendor}_${version}.${ext}`;
  const filePath = `02_STATIC/${externalFileName}`;
  
  // 의존성 기록 정보
  const dependencyRecord = {
    fileName: externalFileName,
    version,
    vendor,
    url,
    dateAdded: new Date().toISOString().split('T')[0],
    license,
    path: filePath,
    sha256: 'TO_BE_CALCULATED',  // AI가 다운로드 시 계산
    importStatement: `import ${vendor} from '../../02_STATIC/${externalFileName}';`
  };
  
  return {
    fileName: externalFileName,
    path: filePath,
    dependencyRecord,
    instructions: [
      `1. Download file from: ${url}`,
      `2. Save as: ${filePath}`,
      `3. Calculate SHA256 hash`,
      `4. Update 00_DOCS/EXTERNAL_DEPENDENCIES.md`,
      `5. Never modify the external file`,
      `6. Use in code: ${dependencyRecord.importStatement}`
    ],
    message: msg.v5?.externalFileHandled || `External file registered: ${externalFileName}`
  };
}

// 외부 파일 버전 업데이트 도구
export async function updateExternalFileVersion({
  currentFileName,
  newVersion,
  newUrl
}) {
  const msg = getMessages();
  
  // 기존 파일명 파싱
  const match = currentFileName.match(/^EXTERNAL_([^_]+)_([^_]+)_v([\d.]+)(.*)\.(.+)$/);
  if (!match) {
    return {
      error: 'Invalid external file name format',
      expected: 'EXTERNAL_[Type]_[Vendor]_[Version].[ext]'
    };
  }
  
  const [, type, vendor, oldVersion, suffix, ext] = match;
  
  // 새 파일명 생성
  const deprecatedFileName = `EXTERNAL_${type}_${vendor}_v${oldVersion}_DEPRECATED.${ext}`;
  const newFileName = `EXTERNAL_${type}_${vendor}_${newVersion}.${ext}`;
  
  return {
    actions: [
      {
        step: 1,
        action: 'Rename old file',
        from: `02_STATIC/${currentFileName}`,
        to: `02_STATIC/${deprecatedFileName}`
      },
      {
        step: 2,
        action: 'Download new version',
        url: newUrl,
        saveTo: `02_STATIC/${newFileName}`
      },
      {
        step: 3,
        action: 'Update imports in 03_ACTIVE',
        oldImport: `'../../02_STATIC/${currentFileName}'`,
        newImport: `'../../02_STATIC/${newFileName}'`
      },
      {
        step: 4,
        action: 'Update EXTERNAL_DEPENDENCIES.md',
        markAsDeprecated: deprecatedFileName,
        addNew: newFileName
      }
    ],
    oldFile: deprecatedFileName,
    newFile: newFileName,
    message: `External file update plan created: ${vendor} v${oldVersion} → ${newVersion}`
  };
}

// 외부 의존성 목록 생성 도구
export async function generateDependencyManifest() {
  const msg = getMessages();
  
  const manifestContent = `# External Dependencies\n\n` +
    `Generated: ${new Date().toISOString()}\n\n` +
    `| File Name | Version | Vendor | URL | SHA256 | Date | License | Notes |\n` +
    `|-----------|---------|--------|-----|--------|------|---------|-------|\n` +
    `| (AI will populate this table) | | | | | | | |\n`;
  
  return {
    fileName: 'EXTERNAL_DEPENDENCIES.md',
    path: '00_DOCS/EXTERNAL_DEPENDENCIES.md',
    content: manifestContent,
    instructions: [
      'Create this file in 00_DOCS/',
      'Update whenever adding external files',
      'Include SHA256 hash for security',
      'Track all version changes',
      'Mark deprecated files clearly'
    ],
    message: 'Dependency manifest template generated'
  };
}

// ========== v5 새로운 도구들 ==========

// 1. 프로젝트 구조 생성 도구
export async function createProjectStructure({ projectName = 'new-project' }) {
  const msg = getMessages();
  const rules = namingRules();
  
  const structure = {
    projectName,
    folders: [],
    files: [],
    commands: []
  };
  
  // 7개 표준 폴더 생성 명령
  for (const [folderName, folderInfo] of Object.entries(rules.standardFolders)) {
    structure.folders.push({
      name: folderName,
      path: `${projectName}/${folderName}`,
      description: folderInfo.description,
      aiPermission: folderInfo.aiPermission
    });
    
    structure.commands.push(`mkdir ${projectName}/${folderName}`);
  }
  
  // 기본 파일 추가 (ChatGPT Enhancement: AI 권한 헤더 포함)
  structure.files = [
    { 
      path: `${projectName}/00_DOCS/README.md`, 
      content: `<!-- ⚠️ AI PERMISSION: NO-MODIFY -->\n<!-- This file is protected from AI modifications -->\n# ${projectName}\n\nBuilt with AI Naming Convention v5.0.1 (ChatGPT Enhanced)` 
    },
    { 
      path: `${projectName}/01_CONFIG/.env.example`, 
      content: '# ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL\n# Environment variables\n# Manual changes only - contains sensitive data\n' 
    },
    { 
      path: `${projectName}/01_CONFIG/config.dev.yml`, 
      content: '# ⚠️ AI PERMISSION: NO-MODIFY\nenv: development\n' 
    },
    { path: `${projectName}/01_CONFIG/.gitignore`, content: '.env\nnode_modules/\n05_BUILD/\n06_LOGS/' },
    { path: `${projectName}/02_STATIC/ASSET_placeholder.txt`, content: '# Use ASSET_ prefix for all asset files' },
    { path: `${projectName}/02_STATIC/TEMPLATE_base.html`, content: '<!-- TEMPLATE_ prefix for templates -->' },
    { path: `${projectName}/02_STATIC/CONFIG_theme.json`, content: '{"theme":"default"}' },
    { path: `${projectName}/03_ACTIVE/.gitkeep`, content: '' },
    { path: `${projectName}/04_TEST/001_TEST_Main_Unit_COMMON.test.js`, content: '// Test file with indexed naming\n// [Deps]: 001\n' },
    { 
      path: `${projectName}/.ai_instructions.md`, 
      content: `# AI Development Instructions (v5.0.1 ChatGPT Enhanced)\n\n## ⚠️ Folder Permissions\n- 00_DOCS: NO-MODIFY\n- 01_CONFIG: NO-MODIFY - CRITICAL\n- 02_STATIC: Use ASSET_, TEMPLATE_, CONFIG_ prefixes\n- 03_ACTIVE: Full access (primary workspace)\n- 04_TEST: Use indexed naming (001_TEST_*)\n\n## [Deps] Dependency Markers\n- Sequential: 001-1, 001-2\n- Parallel: 001a, 001b\n- Subordinate: 001s1, 001s2\n- None: Entry point`
    }
  ];
  
  // 전체 생성 명령 (Windows/Unix)
  structure.createCommand = {
    windows: structure.commands.join(' && '),
    unix: structure.commands.join(' && ')
  };
  
  return {
    ...structure,
    message: msg.v5?.projectCreated || 'Project structure created with 7 standard folders'
  };
}

// 2. 폴더 권한 체크 도구
export async function checkFolderPermission({ folder, operation = 'modify' }) {
  const msg = getMessages();
  const rules = namingRules();
  
  const folderInfo = rules.standardFolders[folder];
  
  if (!folderInfo) {
    return {
      valid: false,
      error: `Unknown folder: ${folder}`,
      suggestion: 'Use one of: 00_DOCS, 01_CONFIG, 02_STATIC, 03_ACTIVE, 04_TEST, 05_BUILD, 06_LOGS'
    };
  }
  
  const permissions = {
    '00_DOCS': { read: true, write: false, modify: false, delete: false },
    '01_CONFIG': { read: true, write: false, modify: false, delete: false },
    '02_STATIC': { read: true, write: true, modify: false, delete: false },
    '03_ACTIVE': { read: true, write: true, modify: true, delete: true },
    '04_TEST': { read: true, write: true, modify: true, delete: false },
    '05_BUILD': { read: true, write: true, modify: false, delete: true },
    '06_LOGS': { read: true, write: true, modify: false, delete: false }
  };
  
  const permission = permissions[folder][operation];
  
  return {
    folder,
    operation,
    allowed: permission,
    aiPermission: folderInfo.aiPermission,
    description: folderInfo.description,
    message: permission 
      ? `AI can ${operation} in ${folder}`
      : `AI cannot ${operation} in ${folder} (${folderInfo.aiPermission})`
  };
}

// 3. v4에서 v5로 마이그레이션 도구
export async function migrateFromV4({ 
  sourcePath = '.', 
  dryRun = true 
}) {
  const msg = getMessages();
  const rules = namingRules();
  
  const migration = {
    version: 'v4 → v5',
    steps: [],
    commands: [],
    fileMovements: []
  };
  
  // 마이그레이션 매핑
  const folderMapping = {
    'docs': '00_DOCS',
    'documentation': '00_DOCS',
    'README.md': '00_DOCS',
    'config': '01_CONFIG',
    'settings': '01_CONFIG',
    '.env': '01_CONFIG',
    'public': '02_STATIC',
    'static': '02_STATIC',
    'assets': '02_STATIC',
    'src': '03_ACTIVE',
    'lib': '03_ACTIVE',
    'app': '03_ACTIVE',
    'test': '04_TEST',
    'tests': '04_TEST',
    'spec': '04_TEST',
    'dist': '05_BUILD',
    'build': '05_BUILD',
    'out': '05_BUILD',
    'logs': '06_LOGS',
    'log': '06_LOGS'
  };
  
  // Step 1: 폴더 생성
  migration.steps.push({
    step: 1,
    action: 'Create 7 standard folders',
    commands: Object.keys(rules.standardFolders).map(f => `mkdir ${f}`)
  });
  
  // Step 2: 파일 이동 계획
  for (const [oldPath, newFolder] of Object.entries(folderMapping)) {
    migration.fileMovements.push({
      from: oldPath,
      to: newFolder,
      command: `mv ${oldPath}/* ${newFolder}/`
    });
  }
  
  // Step 3: 파일명 변환 (03_ACTIVE 내부)
  migration.steps.push({
    step: 2,
    action: 'Convert file names in 03_ACTIVE',
    description: 'Apply v5 naming convention to all active code files'
  });
  
  // 마이그레이션 스크립트 생성
  if (!dryRun) {
    migration.executeScript = migration.fileMovements
      .map(m => m.command)
      .join('\n');
  }
  
  return {
    ...migration,
    dryRun,
    message: dryRun 
      ? msg.v5?.migrationPlan || 'Migration plan created (dry run)'
      : msg.v5?.migrationExecuted || 'Migration executed successfully'
  };
}

// 4. 파일 폴더 제안 도구
export async function suggestFolder({ 
  fileName, 
  fileType,
  content 
}) {
  const msg = getMessages();
  const rules = namingRules();
  
  // 파일 유형별 폴더 매핑
  const typeMapping = {
    'documentation': '00_DOCS',
    'readme': '00_DOCS',
    'guide': '00_DOCS',
    'config': '01_CONFIG',
    'env': '01_CONFIG',
    'secret': '01_CONFIG',
    'image': '02_STATIC',
    'font': '02_STATIC',
    'template': '02_STATIC',
    'css': '02_STATIC',
    'code': '03_ACTIVE',
    'component': '03_ACTIVE',
    'service': '03_ACTIVE',
    'api': '03_ACTIVE',
    'test': '04_TEST',
    'spec': '04_TEST',
    'e2e': '04_TEST',
    'build': '05_BUILD',
    'dist': '05_BUILD',
    'bundle': '05_BUILD',
    'log': '06_LOGS',
    'error': '06_LOGS',
    'audit': '06_LOGS'
  };
  
  // 확장자별 폴더 매핑
  const extensionMapping = {
    'md': '00_DOCS',
    'txt': '00_DOCS',
    'yml': '01_CONFIG',
    'yaml': '01_CONFIG',
    'env': '01_CONFIG',
    'png': '02_STATIC',
    'jpg': '02_STATIC',
    'svg': '02_STATIC',
    'js': '03_ACTIVE',
    'jsx': '03_ACTIVE',
    'ts': '03_ACTIVE',
    'tsx': '03_ACTIVE',
    'py': '03_ACTIVE',
    'java': '03_ACTIVE',
    'test.js': '04_TEST',
    'spec.js': '04_TEST',
    'min.js': '05_BUILD',
    'bundle.js': '05_BUILD',
    'log': '06_LOGS'
  };
  
  let suggestedFolder = '03_ACTIVE'; // 기본값
  let reason = 'Default for active code';
  
  // 파일명 분석
  if (fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    
    // v5 네이밍 패턴 체크
    if (/^[0-9]{3}_[A-Z]{2,6}_/.test(fileName)) {
      suggestedFolder = '03_ACTIVE';
      reason = 'Follows v5 naming convention';
    } else if (extensionMapping[ext]) {
      suggestedFolder = extensionMapping[ext];
      reason = `Based on extension: .${ext}`;
    } else if (fileName.includes('test') || fileName.includes('spec')) {
      suggestedFolder = '04_TEST';
      reason = 'Test file detected';
    } else if (fileName.includes('config') || fileName.includes('settings')) {
      suggestedFolder = '01_CONFIG';
      reason = 'Configuration file detected';
    }
  }
  
  // 파일 타입으로 결정
  if (fileType && typeMapping[fileType.toLowerCase()]) {
    suggestedFolder = typeMapping[fileType.toLowerCase()];
    reason = `Based on file type: ${fileType}`;
  }
  
  const folderInfo = rules.standardFolders[suggestedFolder];
  
  return {
    fileName,
    suggestedFolder,
    reason,
    folderInfo: {
      name: folderInfo.name,
      description: folderInfo.description,
      aiPermission: folderInfo.aiPermission,
      namingRuleRequired: folderInfo.namingRuleRequired
    },
    alternativeFolders: Object.keys(rules.standardFolders).filter(f => f !== suggestedFolder),
    message: msg.v5?.folderSuggested || `Suggested folder: ${suggestedFolder} - ${reason}`
  };
}

// ========== 🆕 v6.0.0 Tools Export ==========
export {
  createAIRoleMatrix,
  getAIRole,
  naturalLanguageToFileName,
  addNamingWizardRule,
  generateDepGraph,
  validateDeps,
  checkCircularDeps,
  logHumanOverride,
  scanProject,
  exportConfig
} from './v6-tools.js';