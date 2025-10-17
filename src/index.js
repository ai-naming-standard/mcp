#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { 
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { 
  generateFileName,
  validateFileName,
  explainFileName,
  getLayerCodes,
  getActionCodes,
  getProjectTemplate,
  batchGenerateFileNames,
  suggestCorrection,
  // v5 tools
  createProjectStructure,
  checkFolderPermission,
  migrateFromV4,
  suggestFolder,
  handleExternalFile,
  updateExternalFileVersion,
  generateDependencyManifest,
  // 🆕 v6 tools
  createAIRoleMatrix,
  generateDepGraph,
  validateDeps,
  addNamingWizardRule,
  scanProject,
  exportConfig,
  naturalLanguageToFileName,
  getAIRole,
  logHumanOverride,
  checkCircularDeps
} from './tools/index.js';
import { namingRules } from './rules/convention.js';
import { getMessage, getMessages } from './messages/index.js';

// MCP 서버 생성 (v6.0.0 AI Governance Era)
const server = new Server(
  {
    name: 'ai-naming-standard',
    version: '6.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// 도구 목록 정의 (v6.0.0 with Multi-AI Support)
const TOOLS = () => {
  const msg = getMessages();
  return [
    // ==========================================
    // Core Naming Tools (v4/v5 Compatible)
    // ==========================================
    {
      name: 'generateFileName',
      description: msg.tools.generateFileName.description,
      inputSchema: {
        type: 'object',
        properties: {
          microservice: {
            type: 'string',
            description: msg.parameters.microservice,
            enum: ['auth', 'user', 'payment', 'order', 'product', 'notification', 'analytics', 'gateway', 'search', 'recommendation']
          },
          sequence: {
            type: 'string',
            description: msg.parameters.sequence,
            default: '001'
          },
          layer: {
            type: 'string',
            description: msg.parameters.layer,
            enum: ['controller', 'service', 'repository', 'model', 'dto', 'middleware', 'util', 'config', 'validator', 'helper']
          },
          domain: {
            type: 'string',
            description: msg.parameters.domain
          },
          action: {
            type: 'string',
            description: msg.parameters.action,
            enum: ['create', 'read', 'update', 'delete', 'validate', 'transform', 'calculate', 'send', 'fetch', 'process']
          },
          feature: {
            type: 'string',
            description: msg.parameters.feature,
            enum: ['validation', 'encryption', 'caching', 'logging', 'notification', 'export', 'import', 'batch', 'async', 'sync']
          },
          env: {
            type: 'string',
            description: msg.parameters.env,
            enum: ['dev', 'test', 'staging', 'prod', 'common']
          },
          ext: {
            type: 'string',
            description: msg.parameters.ext,
            enum: ['js', 'ts', 'py', 'java', 'go', 'yml', 'json', 'sql', 'md']
          }
        },
        required: ['microservice', 'layer', 'domain', 'action', 'ext']
      }
    },
    {
      name: 'validateFileName',
      description: msg.tools.validateFileName.description,
      inputSchema: {
        type: 'object',
        properties: {
          fileName: {
            type: 'string',
            description: msg.parameters.fileName
          }
        },
        required: ['fileName']
      }
    },
    {
      name: 'explainFileName',
      description: msg.tools.explainFileName.description,
      inputSchema: {
        type: 'object',
        properties: {
          fileName: {
            type: 'string',
            description: msg.parameters.fileName
          }
        },
        required: ['fileName']
      }
    },
    {
      name: 'getLayerCodes',
      description: msg.tools.getLayerCodes.description,
      inputSchema: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            description: msg.parameters.category + ' (all, backend, frontend, data, infra)',
            enum: ['all', 'backend', 'frontend', 'data', 'infra'],
            default: 'all'
          }
        }
      }
    },
    {
      name: 'getActionCodes',
      description: msg.tools.getActionCodes.description,
      inputSchema: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            description: msg.parameters.category + ' (all, crud, processing, communication)',
            enum: ['all', 'crud', 'processing', 'communication'],
            default: 'all'
          }
        }
      }
    },
    {
      name: 'getProjectTemplate',
      description: msg.tools.getProjectTemplate.description,
      inputSchema: {
        type: 'object',
        properties: {
          projectType: {
            type: 'string',
            description: msg.parameters.projectType,
            enum: ['ecommerce', 'social-media', 'fintech', 'healthcare', 'education', 'streaming', 'food-delivery', 'travel', 'iot', 'gaming']
          },
          scale: {
            type: 'string',
            description: msg.parameters.scale,
            enum: ['mvp', 'growth', 'mature', 'enterprise'],
            default: 'mvp'
          }
        },
        required: ['projectType']
      }
    },
    {
      name: 'batchGenerateFileNames',
      description: msg.tools.batchGenerateFileNames.description,
      inputSchema: {
        type: 'object',
        properties: {
          projectType: {
            type: 'string',
            description: msg.parameters.projectType
          },
          microservices: {
            type: 'array',
            description: msg.parameters.microservices,
            items: { type: 'string' }
          },
          count: {
            type: 'number',
            description: msg.parameters.count,
            default: 10
          }
        },
        required: ['projectType', 'microservices']
      }
    },
    {
      name: 'suggestCorrection',
      description: msg.tools.suggestCorrection.description,
      inputSchema: {
        type: 'object',
        properties: {
          fileName: {
            type: 'string',
            description: msg.parameters.fileName
          }
        },
        required: ['fileName']
      }
    },

    // ==========================================
    // v5 Project Structure Tools
    // ==========================================
    {
      name: 'createProjectStructure',
      description: 'Create v6 standard 8-folder project structure (includes 07_META)',
      inputSchema: {
        type: 'object',
        properties: {
          projectName: {
            type: 'string',
            description: 'Name of the new project',
            default: 'new-project'
          },
          version: {
            type: 'string',
            description: 'Convention version (v5 or v6)',
            enum: ['v5', 'v6'],
            default: 'v6'
          }
        }
      }
    },
    {
      name: 'checkFolderPermission',
      description: 'Check AI permission for a specific folder (v6 includes 07_META)',
      inputSchema: {
        type: 'object',
        properties: {
          folder: {
            type: 'string',
            description: 'Folder name to check',
            enum: ['00_DOCS', '01_CONFIG', '02_STATIC', '03_ACTIVE', '04_TEST', '05_BUILD', '06_LOGS', '07_META']
          },
          operation: {
            type: 'string',
            description: 'Operation type',
            enum: ['read', 'write', 'modify', 'delete'],
            default: 'modify'
          },
          aiName: {
            type: 'string',
            description: 'AI name (cursor, claude, chatgpt, windsurf, human)',
            enum: ['cursor', 'claude', 'chatgpt', 'windsurf', 'human'],
            default: 'cursor'
          }
        },
        required: ['folder']
      }
    },
    {
      name: 'migrateFromV4',
      description: 'Migrate project from v4/v5 to v6 with 07_META folder',
      inputSchema: {
        type: 'object',
        properties: {
          sourcePath: {
            type: 'string',
            description: 'Source project path',
            default: '.'
          },
          sourceVersion: {
            type: 'string',
            description: 'Source version',
            enum: ['v4', 'v5'],
            default: 'v5'
          },
          dryRun: {
            type: 'boolean',
            description: 'Test run without actual changes',
            default: true
          }
        }
      }
    },
    {
      name: 'suggestFolder',
      description: 'Suggest appropriate folder for a file (v6 includes 07_META)',
      inputSchema: {
        type: 'object',
        properties: {
          fileName: {
            type: 'string',
            description: 'File name to analyze'
          },
          fileType: {
            type: 'string',
            description: 'Type of file (optional)'
          },
          content: {
            type: 'string',
            description: 'File content preview (optional)'
          }
        },
        required: ['fileName']
      }
    },

    // ==========================================
    // 🆕 v6 Multi-AI Orchestration Tools
    // ==========================================
    {
      name: 'createAIRoleMatrix',
      description: '🆕 v6: Create AI_ROLE_MATRIX.yaml for multi-AI collaboration',
      inputSchema: {
        type: 'object',
        properties: {
          projectName: {
            type: 'string',
            description: 'Project name',
            default: 'my-project'
          },
          aiTools: {
            type: 'array',
            description: 'List of AI tools to use',
            items: {
              type: 'string',
              enum: ['cursor', 'claude', 'chatgpt', 'windsurf']
            },
            default: ['cursor', 'claude', 'chatgpt']
          }
        }
      }
    },
    {
      name: 'getAIRole',
      description: '🆕 v6: Get AI role and permissions from AI_ROLE_MATRIX.yaml',
      inputSchema: {
        type: 'object',
        properties: {
          aiName: {
            type: 'string',
            description: 'AI name to check',
            enum: ['cursor', 'claude', 'chatgpt', 'windsurf', 'human']
          }
        },
        required: ['aiName']
      }
    },

    // ==========================================
    // 🆕 v6 Naming Wizard Tools
    // ==========================================
    {
      name: 'naturalLanguageToFileName',
      description: '🆕 v6: Convert natural language to file name using Naming Wizard',
      inputSchema: {
        type: 'object',
        properties: {
          naturalLanguage: {
            type: 'string',
            description: 'Natural language description (e.g., "로그인 페이지 만들어줘")'
          },
          language: {
            type: 'string',
            description: 'Input language',
            enum: ['ko', 'en', 'ja'],
            default: 'ko'
          }
        },
        required: ['naturalLanguage']
      }
    },
    {
      name: 'addNamingWizardRule',
      description: '🆕 v6: Add custom rule to NAMING_WIZARD_RULES.yaml',
      inputSchema: {
        type: 'object',
        properties: {
          ruleType: {
            type: 'string',
            description: 'Type of rule',
            enum: ['domainMapping', 'actionMapping', 'layerMapping', 'detailMapping']
          },
          keywords: {
            type: 'array',
            description: 'Keywords to match',
            items: { type: 'string' }
          },
          output: {
            type: 'object',
            description: 'Output mapping'
          }
        },
        required: ['ruleType', 'keywords', 'output']
      }
    },

    // ==========================================
    // 🆕 v6 Dependency Graph Tools
    // ==========================================
    {
      name: 'generateDepGraph',
      description: '🆕 v6: Generate DEP_GRAPH.yaml from @deps tags',
      inputSchema: {
        type: 'object',
        properties: {
          sourcePath: {
            type: 'string',
            description: 'Project path to scan',
            default: '.'
          },
          outputPath: {
            type: 'string',
            description: 'Output path for DEP_GRAPH.yaml',
            default: '07_META/DEP_GRAPH.yaml'
          }
        }
      }
    },
    {
      name: 'validateDeps',
      description: '🆕 v6: Validate @deps tags in files',
      inputSchema: {
        type: 'object',
        properties: {
          filePath: {
            type: 'string',
            description: 'File path to validate'
          }
        },
        required: ['filePath']
      }
    },
    {
      name: 'checkCircularDeps',
      description: '🆕 v6: Check for circular dependencies in project',
      inputSchema: {
        type: 'object',
        properties: {
          depGraphPath: {
            type: 'string',
            description: 'Path to DEP_GRAPH.yaml',
            default: '07_META/DEP_GRAPH.yaml'
          }
        }
      }
    },

    // ==========================================
    // 🆕 v6 Governance & Audit Tools
    // ==========================================
    {
      name: 'logHumanOverride',
      description: '🆕 v6: Log human intervention to HUMAN_OVERRIDES.md',
      inputSchema: {
        type: 'object',
        properties: {
          fileName: {
            type: 'string',
            description: 'File that was modified'
          },
          reason: {
            type: 'string',
            description: 'Reason for override'
          },
          aiSuggestion: {
            type: 'string',
            description: 'AI suggestion (if any)'
          },
          humanDecision: {
            type: 'string',
            description: 'Human decision'
          },
          result: {
            type: 'string',
            description: 'Result of the override'
          }
        },
        required: ['fileName', 'reason', 'humanDecision']
      }
    },

    // ==========================================
    // 🆕 v6 Utility Tools
    // ==========================================
    {
      name: 'scanProject',
      description: '🆕 v6: Scan project structure and generate reports',
      inputSchema: {
        type: 'object',
        properties: {
          projectPath: {
            type: 'string',
            description: 'Project path to scan',
            default: '.'
          },
          reportType: {
            type: 'string',
            description: 'Type of report',
            enum: ['full', 'structure', 'dependencies', 'compliance'],
            default: 'full'
          }
        }
      }
    },
    {
      name: 'exportConfig',
      description: '🆕 v6: Export configuration for different AI tools',
      inputSchema: {
        type: 'object',
        properties: {
          targetTool: {
            type: 'string',
            description: 'Target AI tool',
            enum: ['mcp', 'cursor', 'claude', 'vscode'],
            default: 'mcp'
          },
          outputPath: {
            type: 'string',
            description: 'Output file path'
          }
        },
        required: ['targetTool']
      }
    }
  ];
};

// 리소스 목록 정의 (v6 업데이트)
const RESOURCES = [
  {
    uri: 'naming://convention/v6',
    name: 'AI Naming Convention v6 (AI Governance Era)',
    description: 'Complete v6 naming convention with Multi-AI orchestration',
    mimeType: 'application/json'
  },
  {
    uri: 'naming://quick-reference/v6',
    name: 'Quick Reference Guide v6',
    description: 'v6 features, layer codes, action codes, and quick reference',
    mimeType: 'text/markdown'
  },
  {
    uri: 'naming://ai-role-matrix',
    name: 'AI Role Matrix Template',
    description: 'AI_ROLE_MATRIX.yaml template for multi-AI collaboration',
    mimeType: 'application/x-yaml'
  },
  {
    uri: 'naming://naming-wizard-rules',
    name: 'Naming Wizard Rules Template',
    description: 'NAMING_WIZARD_RULES.yaml template for natural language conversion',
    mimeType: 'application/x-yaml'
  },
  {
    uri: 'naming://dep-graph-template',
    name: 'Dependency Graph Template',
    description: 'DEP_GRAPH.yaml template for dependency tracking',
    mimeType: 'application/x-yaml'
  }
];

// 도구 목록 핸들러
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: TOOLS() };
});

// 도구 실행 핸들러 (v6 업데이트)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const msg = getMessages();

  try {
    let result;
    
    switch (name) {
      // Core tools
      case 'generateFileName':
        result = await generateFileName(args);
        break;
      case 'validateFileName':
        result = await validateFileName(args);
        break;
      case 'explainFileName':
        result = await explainFileName(args);
        break;
      case 'getLayerCodes':
        result = await getLayerCodes(args);
        break;
      case 'getActionCodes':
        result = await getActionCodes(args);
        break;
      case 'getProjectTemplate':
        result = await getProjectTemplate(args);
        break;
      case 'batchGenerateFileNames':
        result = await batchGenerateFileNames(args);
        break;
      case 'suggestCorrection':
        result = await suggestCorrection(args);
        break;
      
      // v5 tools
      case 'createProjectStructure':
        result = await createProjectStructure(args);
        break;
      case 'checkFolderPermission':
        result = await checkFolderPermission(args);
        break;
      case 'migrateFromV4':
        result = await migrateFromV4(args);
        break;
      case 'suggestFolder':
        result = await suggestFolder(args);
        break;
      case 'handleExternalFile':
        result = await handleExternalFile(args);
        break;
      case 'updateExternalFileVersion':
        result = await updateExternalFileVersion(args);
        break;
      case 'generateDependencyManifest':
        result = await generateDependencyManifest(args);
        break;
      
      // 🆕 v6 tools
      case 'createAIRoleMatrix':
        result = await createAIRoleMatrix(args);
        break;
      case 'getAIRole':
        result = await getAIRole(args);
        break;
      case 'naturalLanguageToFileName':
        result = await naturalLanguageToFileName(args);
        break;
      case 'addNamingWizardRule':
        result = await addNamingWizardRule(args);
        break;
      case 'generateDepGraph':
        result = await generateDepGraph(args);
        break;
      case 'validateDeps':
        result = await validateDeps(args);
        break;
      case 'checkCircularDeps':
        result = await checkCircularDeps(args);
        break;
      case 'logHumanOverride':
        result = await logHumanOverride(args);
        break;
      case 'scanProject':
        result = await scanProject(args);
        break;
      case 'exportConfig':
        result = await exportConfig(args);
        break;
      
      default:
        throw new Error(`${msg.errors.unknownTool}: ${name}`);
    }

    return {
      content: [
        {
          type: 'text',
          text: typeof result === 'string' ? result : JSON.stringify(result, null, 2)
        }
      ]
    };
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `${msg.server.error}: ${error.message}`
        }
      ],
      isError: true
    };
  }
});

// 리소스 목록 핸들러
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return { resources: RESOURCES };
});

// 리소스 읽기 핸들러 (v6 업데이트)
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;
  const msg = getMessages();
  
  if (uri === 'naming://convention/v6') {
    return {
      contents: [
        {
          uri: 'naming://convention/v6',
          mimeType: 'application/json',
          text: JSON.stringify({
            ...namingRules,
            version: '6.0.0',
            features: [
              'multi-ai-orchestration',
              'naming-wizard',
              'dependency-graph',
              'governance-layer',
              '07_META-folder'
            ]
          }, null, 2)
        }
      ]
    };
  }
  
  if (uri === 'naming://quick-reference/v6') {
    const layers = msg.layers;
    const actions = msg.actions;
    
    return {
      contents: [
        {
          uri: 'naming://quick-reference/v6',
          mimeType: 'text/markdown',
          text: `# AI Naming Convention v6 - Quick Reference

## 🌟 v6 New Features
- 🤖 Multi-AI Orchestration (Cursor + Claude + ChatGPT)
- 🧠 Naming Wizard (Natural Language → File Name)
- 🔗 @deps Dependency Graph
- 📊 Complete Governance Layer
- 🏗️ 07_META Folder

## 📂 v6 Folder Structure (8 Folders)
\`\`\`
00_DOCS    # Documents
01_CONFIG  # Configuration (AI NO-MODIFY)
02_STATIC  # Static Resources (ASSET_, TEMPLATE_, EXTERNAL_)
03_ACTIVE  # Active Code (Main Work Area) ⭐
04_TEST    # Tests (001_TEST_* required)
05_BUILD   # Build Output
06_LOGS    # Logs
07_META    # 🆕 AI Collaboration Metadata
\`\`\`

## 🗂️ 07_META Folder Contents
- AI_ROLE_MATRIX.yaml         # AI roles and permissions
- DEP_GRAPH.yaml              # Dependency graph
- CONVERSATION_HISTORY.json   # AI conversation log
- HUMAN_OVERRIDES.md          # Human intervention log
- NAMING_WIZARD_RULES.yaml    # Natural language rules
- PROJECT_METADATA.json       # Project metadata

## 🪄 Naming Wizard Examples
\`\`\`
Input: "로그인 페이지 만들어줘"
Output: 001_FE_User-Login_C_Page_PROD.jsx

Input: "결제 취소 기능 추가"
Output: 021_BE_Payment-Refund_C_Service_PROD.py
\`\`\`

## 🔗 @deps Tag Format
\`\`\`javascript
/* 
 * @file: 003_BE_Order-Process_X_Service_PROD.py
 * @deps:
 *   - 002_BE_Order-Validate_V_Helper_PROD.py
 *   - 005_DB_Order-Schema_C_Migration_PROD.sql
 * @ai: cursor
 * @reviewed: claude
 * @created: 2025-10-17
 */
\`\`\`

## 🤖 AI Roles
| AI | Role | Permissions |
|----|------|-------------|
| Cursor | Code Writer | write: 03_ACTIVE, 04_TEST |
| Claude | Reviewer | review: 03_ACTIVE, write: 00_DOCS |
| ChatGPT | Architect | structure: 00_DOCS, rule: 07_META |
| Human | Supervisor | override: all |

## ${msg.descriptions.fileDescription}
\`\`\`
[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]
\`\`\`

## Layer Codes
| Layer | Description |
|-------|-------------|
| FE | Frontend (React, Vue) |
| BE | Backend (Node.js, Python) |
| DB | Database (MySQL, MongoDB) |
| API | API Gateway |
| ML | Machine Learning |
| INFRA | Infrastructure |
| SH | Shared/Common |

## Action Codes
| Action | Description |
|--------|-------------|
| C | Create |
| R | Read |
| U | Update |
| D | Delete |
| V | Validate |
| X | Execute |
| S | Send |
| T | Transform |
| G | Generate |

## Environment Tags
| Tag | Environment |
|-----|-------------|
| DEV | Development |
| STG | Staging |
| PROD | Production |
| COMMON | All Environments |

## 📈 v6 Performance
| Metric | v5 | v6 | Improvement |
|--------|----|----|-------------|
| Collaboration | Single AI | Multi-AI | +400% |
| Accessibility | 95% | 100% | +5% |
| Dependency Tracking | Manual | Auto | +100% |
| Documentation | Manual | AI Auto | +90% |

---
**Version**: v6.0.0  
**"폴더는 최소로, 네이밍은 최대로, 협업은 자연스럽게, 거버넌스는 완벽하게"**`
        }
      ]
    };
  }
  
  // 🆕 v6 리소스들
  if (uri === 'naming://ai-role-matrix') {
    return {
      contents: [
        {
          uri: 'naming://ai-role-matrix',
          mimeType: 'application/x-yaml',
          text: `# AI_ROLE_MATRIX.yaml Template
version: "6.0.0"
roles:
  - name: cursor
    type: code_writer
    permissions:
      - write: 03_ACTIVE
      - test: 04_TEST
  - name: claude
    type: reviewer
    permissions:
      - review: 03_ACTIVE
      - document: 00_DOCS
  - name: chatgpt
    type: architect
    permissions:
      - structure: 00_DOCS
      - rule: 07_META
  - name: human
    type: supervisor
    permissions:
      - override: all`
        }
      ]
    };
  }
  
  throw new Error(`${msg.errors.unknownResource}: ${uri}`);
});

// 서버 시작
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  const msg = getMessages();
  console.error(`${msg.server.started} (v6.0.0 - AI Governance Era)`);
}

main().catch(console.error);