// ========== 🆕 v6.0.0 New Tools ==========
// Multi-AI Orchestration, Naming Wizard, Dependency Graph, Governance

import { getMessages } from '../messages/index.js';

// ==========================================
// Multi-AI Orchestration Tools
// ==========================================

/**
 * Create AI_ROLE_MATRIX.yaml for multi-AI collaboration
 */
export async function createAIRoleMatrix({ projectName = 'my-project', aiTools = ['cursor', 'claude', 'chatgpt'] }) {
  const template = `# v6.0 - AI 역할 매핑 표준
version: "6.0.0"
updated: "${new Date().toISOString().split('T')[0]}"
project_name: "${projectName}"

roles:
${aiTools.includes('cursor') ? `  - name: cursor
    type: code_writer
    permissions:
      - write: 03_ACTIVE
      - test: 04_TEST
    responsibilities:
      - "비즈니스 로직 작성"
      - "테스트 코드 생성"
` : ''}${aiTools.includes('claude') ? `  - name: claude
    type: reviewer
    permissions:
      - review: 03_ACTIVE
      - document: 00_DOCS
    responsibilities:
      - "코드 리뷰"
      - "문서 작성"
` : ''}${aiTools.includes('chatgpt') ? `  - name: chatgpt
    type: architect
    permissions:
      - structure: 00_DOCS
      - rule: 07_META
    responsibilities:
      - "구조 설계"
      - "네이밍 규칙 관리"
` : ''}  - name: human
    type: supervisor
    permissions:
      - override: all
`;

  return {
    content: template,
    fileName: 'AI_ROLE_MATRIX.yaml',
    path: '07_META/AI_ROLE_MATRIX.yaml',
    description: 'AI role matrix for multi-AI collaboration',
    aiTools
  };
}

/**
 * Get AI role and permissions
 */
export async function getAIRole({ aiName }) {
  const roles = {
    cursor: {
      type: 'code_writer',
      permissions: ['write: 03_ACTIVE', 'test: 04_TEST'],
      canModify: ['03_ACTIVE', '04_TEST'],
      cannotModify: ['01_CONFIG', '07_META'],
      responsibilities: ['코드 작성', '테스트 생성', '버그 수정']
    },
    claude: {
      type: 'reviewer',
      permissions: ['review: 03_ACTIVE', 'document: 00_DOCS'],
      canModify: ['00_DOCS'],
      cannotModify: ['03_ACTIVE', '01_CONFIG'],
      responsibilities: ['코드 리뷰', '문서 작성', '아키텍처 검증']
    },
    chatgpt: {
      type: 'architect',
      permissions: ['structure: 00_DOCS', 'rule: 07_META'],
      canModify: ['00_DOCS', '07_META'],
      cannotModify: ['03_ACTIVE', '01_CONFIG'],
      responsibilities: ['구조 설계', '파일명 생성', '의존성 관리']
    },
    windsurf: {
      type: 'assistant',
      permissions: ['read: all', 'write: 03_ACTIVE'],
      canModify: ['03_ACTIVE'],
      cannotModify: ['01_CONFIG', '07_META'],
      responsibilities: ['코드 리팩토링', '성능 최적화']
    },
    human: {
      type: 'supervisor',
      permissions: ['override: all', 'approve: all'],
      canModify: ['all'],
      cannotModify: [],
      responsibilities: ['최종 승인', '보안 설정', '프로젝트 방향']
    }
  };

  const role = roles[aiName];
  if (!role) {
    return { error: `Unknown AI: ${aiName}`, availableAIs: Object.keys(roles) };
  }

  return {
    aiName,
    ...role,
    description: `${aiName} is a ${role.type} with ${role.permissions.length} permissions`
  };
}

// ==========================================
// Naming Wizard Tools
// ==========================================

/**
 * Convert natural language to file name
 */
export async function naturalLanguageToFileName({ naturalLanguage, language = 'ko' }) {
  // 간단한 키워드 매핑 (실제로는 NAMING_WIZARD_RULES.yaml 사용)
  const rules = {
    ko: {
      // 도메인
      '로그인': 'User-Login',
      '회원가입': 'User-Register',
      '프로필': 'User-Profile',
      '상품': 'Product',
      '검색': 'Search',
      '결제': 'Payment',
      '주문': 'Order',
      '취소': 'Refund',
      // 액션
      '만들': 'C',
      '생성': 'C',
      '추가': 'C',
      '조회': 'R',
      '보기': 'R',
      '수정': 'U',
      '삭제': 'D',
      // 레이어
      '페이지': 'FE_Page',
      '컴포넌트': 'FE_Component',
      '서비스': 'BE_Service',
      'API': 'BE_API',
      '테이블': 'DB_Table'
    }
  };

  const mapping = rules[language] || rules.ko;
  const input = naturalLanguage.toLowerCase();

  let domain = 'Unknown';
  let action = 'R';
  let layer = 'BE';
  let detail = 'Service';

  // 도메인 감지
  for (const [keyword, value] of Object.entries(mapping)) {
    if (input.includes(keyword.toLowerCase())) {
      if (value.includes('-')) domain = value;
      else if (value.length === 1) action = value;
      else if (value.includes('_')) {
        const [l, d] = value.split('_');
        layer = l;
        detail = d;
      }
    }
  }

  const index = '001';
  const env = 'PROD';
  const ext = layer === 'FE' ? 'jsx' : layer === 'DB' ? 'sql' : 'py';

  const fileName = `${index}_${layer}_${domain}_${action}_${detail}_${env}.${ext}`;

  return {
    input: naturalLanguage,
    analysis: {
      domain,
      action,
      layer,
      detail,
      env
    },
    fileName,
    fullPath: `03_ACTIVE/${fileName}`,
    confidence: domain !== 'Unknown' ? 'high' : 'low',
    suggestion: domain === 'Unknown' ? 'Please provide more specific domain information' : null
  };
}

/**
 * Add custom naming wizard rule
 */
export async function addNamingWizardRule({ ruleType, keywords, output }) {
  return {
    ruleType,
    keywords,
    output,
    status: 'Rule would be added to NAMING_WIZARD_RULES.yaml',
    example: {
      input: keywords[0],
      output: output
    }
  };
}

// ==========================================
// Dependency Graph Tools
// ==========================================

/**
 * Generate dependency graph from @deps tags
 */
export async function generateDepGraph({ sourcePath = '.', outputPath = '07_META/DEP_GRAPH.yaml' }) {
  return {
    status: 'would_scan',
    sourcePath,
    outputPath,
    description: 'Would scan all files in 03_ACTIVE for @deps tags and generate DEP_GRAPH.yaml',
    nextSteps: [
      '1. Scan 03_ACTIVE folder',
      '2. Extract @deps tags from files',
      '3. Build dependency graph',
      '4. Generate DEP_GRAPH.yaml',
      '5. Check for circular dependencies'
    ],
    exampleDeps: `/* 
 * @deps:
 *   - 002_BE_Order-Validate_V_Helper_PROD.py
 *   - 005_DB_Order-Schema_C_Migration_PROD.sql
 */`
  };
}

/**
 * Validate @deps tags in a file
 */
export async function validateDeps({ filePath }) {
  return {
    filePath,
    status: 'would_validate',
    checks: [
      'Check if @deps tag exists',
      'Verify all referenced files exist',
      'Check for circular dependencies',
      'Validate file path format'
    ],
    expectedFormat: `/* 
 * @file: filename.ext
 * @deps:
 *   - dependency1.ext
 *   - dependency2.ext
 * @ai: cursor
 * @reviewed: claude
 */`
  };
}

/**
 * Check for circular dependencies
 */
export async function checkCircularDeps({ depGraphPath = '07_META/DEP_GRAPH.yaml' }) {
  return {
    depGraphPath,
    status: 'would_check',
    description: 'Would analyze DEP_GRAPH.yaml for circular dependencies',
    algorithm: 'Depth-First Search (DFS) for cycle detection',
    exampleCircular: [
      'A depends on B',
      'B depends on C',
      'C depends on A ⚠️ CIRCULAR!'
    ]
  };
}

// ==========================================
// Governance & Audit Tools
// ==========================================

/**
 * Log human intervention
 */
export async function logHumanOverride({ fileName, reason, aiSuggestion = '', humanDecision, result = '' }) {
  const timestamp = new Date().toISOString();
  const logEntry = `
### Override #${Date.now()}
**Time**: ${new Date().toLocaleString()}  
**File**: ${fileName}  
**Reason**: ${reason}  
${aiSuggestion ? `**AI Suggestion**: ${aiSuggestion}  \n` : ''}**Human Decision**: ${humanDecision}  
${result ? `**Result**: ${result}  \n` : ''}
`;

  return {
    logEntry,
    fileName: 'HUMAN_OVERRIDES.md',
    path: '07_META/HUMAN_OVERRIDES.md',
    timestamp,
    description: 'Human intervention logged for audit trail'
  };
}

// ==========================================
// Utility Tools
// ==========================================

/**
 * Scan project structure
 */
export async function scanProject({ projectPath = '.', reportType = 'full' }) {
  const reports = {
    full: ['Structure', 'Dependencies', 'Compliance', 'Statistics'],
    structure: ['Folder Structure', 'File Count', 'File Types'],
    dependencies: ['Dependency Graph', 'Circular Dependencies', 'Orphan Files'],
    compliance: ['Naming Convention', 'Folder Permissions', 'Missing @deps']
  };

  return {
    projectPath,
    reportType,
    sections: reports[reportType],
    status: 'would_scan',
    description: `Would generate ${reportType} report for project at ${projectPath}`,
    outputFormat: 'JSON + Markdown'
  };
}

/**
 * Export configuration for different AI tools
 */
export async function exportConfig({ targetTool, outputPath }) {
  const configs = {
    mcp: {
      format: 'JSON',
      file: 'ai-naming-standard.json',
      content: {
        mcpServers: {
          'ai-naming-standard': {
            command: 'node',
            args: ['path/to/src/index.js']
          }
        }
      }
    },
    cursor: {
      format: 'JSON',
      file: '.cursorrules',
      content: {
        rules: ['Use v6 naming convention', 'Check 07_META/AI_ROLE_MATRIX.yaml']
      }
    },
    claude: {
      format: 'Markdown',
      file: 'CLAUDE_INSTRUCTIONS.md',
      content: '# Claude Configuration\n\nUse v6 AI Naming Convention...'
    },
    vscode: {
      format: 'JSON',
      file: '.vscode/settings.json',
      content: {
        'files.exclude': {
          '05_BUILD': true,
          '06_LOGS': true
        }
      }
    }
  };

  const config = configs[targetTool];
  if (!config) {
    return {
      error: `Unknown target tool: ${targetTool}`,
      availableTools: Object.keys(configs)
    };
  }

  return {
    targetTool,
    ...config,
    outputPath: outputPath || config.file,
    description: `Would export ${config.format} configuration for ${targetTool}`
  };
}

// Export all v6 tools
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
};
