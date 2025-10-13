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
  suggestCorrection
} from './tools/index.js';
import { namingRules } from './rules/convention.js';
import { getMessage, getMessages } from './messages/index.js';

// MCP 서버 생성
const server = new Server(
  {
    name: 'ai-naming-standard',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// 도구 목록 정의 (다국어 지원)
const TOOLS = () => {
  const msg = getMessages();
  return [
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
    }
  ];
};

// 리소스 목록 정의
const RESOURCES = [
  {
    uri: 'naming://convention',
    name: 'AI Naming Convention v4',
    description: 'Complete naming convention rules and guidelines',
    mimeType: 'application/json'
  },
  {
    uri: 'naming://quick-reference',
    name: 'Quick Reference Guide',
    description: 'Layer codes, action codes, and quick reference tables',
    mimeType: 'text/markdown'
  }
];

// 도구 목록 핸들러
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: TOOLS() };
});

// 도구 실행 핸들러
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const msg = getMessages();

  try {
    let result;
    
    switch (name) {
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

// 리소스 읽기 핸들러
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;
  const msg = getMessages();
  
  if (uri === 'naming://convention') {
    return {
      contents: [
        {
          uri: 'naming://convention',
          mimeType: 'application/json',
          text: JSON.stringify(namingRules, null, 2)
        }
      ]
    };
  }
  
  if (uri === 'naming://quick-reference') {
    const layers = msg.layers;
    const actions = msg.actions;
    
    return {
      contents: [
        {
          uri: 'naming://quick-reference',
          mimeType: 'text/markdown',
          text: `# AI Naming Convention - Quick Reference

## ${msg.descriptions.fileDescription}
\`\`\`
[MS-Service]_[sequence]_[Layer]_[Domain-Sub]_[Action]_[Feature]_[Env].[ext]
\`\`\`

## Layer Codes
| Layer | Description | Example |
|-------|-------------|---------|
| controller | ${layers.controller} | auth_001_controller_user-login_validate_validation_prod.ts |
| service | ${layers.service} | payment_002_service_card-payment_create_encryption_prod.ts |
| repository | ${layers.repository} | user_003_repository_profile-data_read_caching_prod.ts |
| model | ${layers.model} | product_004_model_item-schema_create_validation_prod.ts |
| dto | ${layers.dto} | order_005_dto_cart-response_transform_validation_prod.ts |

## Action Codes
| Action | Description | Use Case |
|--------|-------------|----------|
| create | ${actions.create} | New resource |
| read | ${actions.read} | Fetch data |
| update | ${actions.update} | Modify data |
| delete | ${actions.delete} | Remove resource |
| validate | ${actions.validate} | Check validity |
| transform | ${actions.transform} | Convert format |
| calculate | ${actions.calculate} | Compute values |
| send | ${actions.send} | Transmit data |

## Environment Tags
| Tag | Environment | Purpose |
|-----|-------------|---------|
| dev | Development | Local development |
| test | Testing | Automated testing |
| staging | Staging | Pre-production |
| prod | Production | Live service |
| common | Common | All environments |`
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
  console.error(msg.server.started);
}

main().catch(console.error);
