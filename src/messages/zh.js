// 中文消息
export const messages = {
  // 版本信息
  version: '5.0',
  architecture: '智能文件夹化(Smart-Folderization)',
  // 工具描述
  tools: {
    generateFileName: {
      name: '生成文件名',
      description: '根据AI命名规范生成文件名'
    },
    validateFileName: {
      name: '验证文件名',
      description: '验证文件名是否符合AI命名规范'
    },
    explainFileName: {
      name: '解释文件名',
      description: '解释文件名的各个组成部分'
    },
    getLayerCodes: {
      name: '查询Layer代码',
      description: '查询Layer代码表'
    },
    getActionCodes: {
      name: '查询Action代码',
      description: '查询Action代码表'
    },
    getProjectTemplate: {
      name: '项目模板',
      description: '按项目类型生成文件结构模板'
    },
    batchGenerateFileNames: {
      name: '批量生成',
      description: '一次性生成多个文件名'
    },
    suggestCorrection: {
      name: '修改建议',
      description: '为错误的文件名提供修改建议'
    }
  },

  // 参数描述
  parameters: {
    microservice: '微服务名称（auth、user、payment等）',
    sequence: '序号（001-999、v1-v99、main/alt）或关系（001-1、001a、001s1）',
    layer: '架构层',
    domain: '域-子域（user-login、payment-card等）',
    action: 'CRUD操作',
    feature: '详细功能',
    env: '环境',
    ext: '文件扩展名',
    fileName: '要验证的文件名',
    category: '类别',
    projectType: '项目类型',
    scale: '项目规模',
    microservices: '微服务列表',
    count: '要生成的文件数'
  },

  // 错误消息
  errors: {
    invalidPattern: '文件名不符合命名规范模式',
    correctFormat: '正确格式：[microservice]_[sequence]_[layer]_[domain-sub]_[action]_[feature]_[env].[ext]',
    invalidLayer: '无效的层',
    invalidEnv: '无效的环境',
    unknownTool: '未知工具',
    unknownResource: '未知资源',
    unknownProjectType: '未知项目类型',
    missingComponents: '缺少必需组件。完整格式'
  },

  // 警告消息
  warnings: {
    customMicroservice: '微服务不在标准列表中。请确认是否为自定义服务',
    nonStandardAction: '非标准操作'
  },

  // 说明消息
  descriptions: {
    fileDescription: '在服务的层中执行域操作的文件',
    microservice: '微服务',
    sequence: '序号',
    layer: '架构层',
    domain: '域',
    action: '执行操作',
    feature: '详细功能',
    environment: '运行环境',
    extension: '文件格式',
    purpose: '此文件在环境中的服务层执行操作'
  },

  // 序列描述
  sequences: {
    standard: '序号',
    dependency: '依赖关系（需要顺序执行）',
    parallel: '可并行执行的相关文件',
    subordinate: '从属关系（父-子）',
    main: '主文件',
    alt: '备选实现',
    version: '版本'
  },

  // 建议消息
  suggestions: {
    fixMicroservice: '将微服务名称修改为',
    fixSequence: '将序号修改为\'001\'格式',
    addMicroservice: '需要添加微服务名称（例如：auth、user、payment）',
    addSequence: '需要添加序号（例如：001、v1、main）',
    recommended: '推荐文件名'
  },

  // 项目类型
  projectTypes: {
    ecommerce: '电子商务/市场',
    'social-media': '社交媒体',
    fintech: '金融科技/银行',
    healthcare: '医疗保健/医疗',
    education: '教育/在线学习',
    streaming: '流媒体/媒体',
    'food-delivery': '外卖配送',
    travel: '旅游/住宿',
    iot: '物联网/智能家居',
    gaming: '游戏/电竞',
    blockchain: '区块链/Web3'
  },

  // 组件描述
  components: {
    microservice: '微服务标识符',
    sequence: '文件序号或关系表达',
    sequential: '顺序编号（001-999）',
    version: '版本号',
    variant: '主/辅助实现',
    dependency: '依赖关系（顺序执行）',
    parallel: '可并行执行',
    subordinate: '从属关系（父-子）',
    layer: '架构层',
    domain: '域-子域',
    action: '执行操作',
    feature: '详细功能',
    environment: '运行环境',
    extension: '文件扩展名'
  },

  // 最佳实践
  bestPractices: [
    '微服务名称应清晰简洁',
    '序号从001开始顺序分配',
    '相关文件使用Level 1关系表达',
    '域-子域使用kebab-case表示',
    '环境标签应与部署环境一致',
    '文件名长度限制在80字符以内',
    '建议使用明确的词语而非缩写'
  ],

  // 反模式
  antiPatterns: [
    '禁止使用驼峰命名法或帕斯卡命名法',
    '禁止使用特殊字符（下划线和连字符除外）',
    '禁止使用不明确的缩写',
    '禁止包含重复信息',
    '禁止遗漏环境信息'
  ],

  // Layer描述
  layers: {
    controller: 'HTTP请求处理、路由',
    service: '业务逻辑实现',
    repository: '数据访问层',
    model: '数据结构定义',
    dto: '数据传输对象',
    middleware: '请求/响应中间处理',
    validator: '输入验证',
    component: 'UI组件',
    page: '页面组件',
    hook: 'React/Vue钩子',
    store: '状态管理',
    util: '实用函数',
    style: '样式表',
    migration: '数据库迁移',
    seed: '初始数据',
    schema: '数据库架构',
    config: '配置文件',
    docker: 'Docker配置',
    k8s: 'K8s清单',
    terraform: 'IaC代码'
  },

  // Action描述
  actions: {
    create: '创建新资源',
    read: '查询数据',
    update: '修改现有数据',
    delete: '删除资源',
    validate: '验证检查',
    transform: '数据转换',
    calculate: '执行计算',
    process: '数据处理',
    analyze: '数据分析',
    send: '数据传输',
    fetch: '获取外部数据',
    sync: '同步',
    publish: '发布事件',
    subscribe: '订阅事件'
  },

  // 服务器消息
  server: {
    started: 'AI Naming Standard MCP服务器v5.0（智能文件夹化）已成功启动',
    error: '错误'
  },

  // v5专用消息
  v5: {
    projectCreated: '使用7个标准文件夹创建项目结构完成',
    folderSuggested: '通过文件分析建议文件夹',
    migrationPlan: '创建从v4到v5的迁移计划（测试运行）',
    migrationExecuted: 'v5迁移成功执行',
    smartFolderization: '智能文件夹化：最少文件夹，文件名包含最多上下文'
  },

  // 文件夹描述
  folders: {
    '00_DOCS': '文档（AI只读）',
    '01_CONFIG': '配置（AI禁止修改）',
    '02_STATIC': '静态资源（AI读取/添加）',
    '03_ACTIVE': '活动代码（AI完全权限）',
    '04_TEST': '测试（AI生成/修改）',
    '05_BUILD': '构建产物（AI仅生成）',
    '06_LOGS': '日志（AI仅写入）'
  },

  // AI权限
  aiPermissions: {
    'read-only': '仅可读',
    'no-modify': '不可修改',
    'read-add': '可读取和添加',
    'full-access': '所有操作权限',
    'create-modify': '可创建和修改',
    'create-only': '仅可创建',
    'write-only': '仅可写入/添加'
  }
};

export default messages;
