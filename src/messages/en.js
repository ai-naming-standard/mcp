// English messages
export const messages = {
  // Tool descriptions
  tools: {
    generateFileName: {
      name: 'Generate File Name',
      description: 'Generates file names according to AI naming convention'
    },
    validateFileName: {
      name: 'Validate File Name',
      description: 'Validates if a file name complies with AI naming convention'
    },
    explainFileName: {
      name: 'Explain File Name',
      description: 'Explains each component of a file name'
    },
    getLayerCodes: {
      name: 'Get Layer Codes',
      description: 'Retrieves the layer code table'
    },
    getActionCodes: {
      name: 'Get Action Codes',
      description: 'Retrieves the action code table'
    },
    getProjectTemplate: {
      name: 'Project Template',
      description: 'Generates file structure templates by project type'
    },
    batchGenerateFileNames: {
      name: 'Batch Generate',
      description: 'Generates multiple file names at once'
    },
    suggestCorrection: {
      name: 'Suggest Correction',
      description: 'Provides correction suggestions for invalid file names'
    }
  },

  // Parameter descriptions
  parameters: {
    microservice: 'Microservice name (auth, user, payment, etc.)',
    sequence: 'Sequence (001-999, v1-v99, main/alt) or relationship (001-1, 001a, 001s1)',
    layer: 'Architecture layer',
    domain: 'Domain-subdomain (user-login, payment-card, etc.)',
    action: 'CRUD operation',
    feature: 'Detailed feature',
    env: 'Environment',
    ext: 'File extension',
    fileName: 'File name to validate',
    category: 'Category',
    projectType: 'Project type',
    scale: 'Project scale',
    microservices: 'List of microservices',
    count: 'Number of files to generate'
  },

  // Error messages
  errors: {
    invalidPattern: 'File name does not follow the naming convention pattern',
    correctFormat: 'Correct format: [microservice]_[sequence]_[layer]_[domain-sub]_[action]_[feature]_[env].[ext]',
    invalidLayer: 'Invalid layer',
    invalidEnv: 'Invalid environment',
    unknownTool: 'Unknown tool',
    unknownResource: 'Unknown resource',
    unknownProjectType: 'Unknown project type',
    missingComponents: 'Missing components. Full format'
  },

  // Warning messages
  warnings: {
    customMicroservice: 'Microservice not in standard list. Please verify if it\'s a custom service',
    nonStandardAction: 'Non-standard action'
  },

  // Description messages
  descriptions: {
    fileDescription: 'File performing task in domain at layer of service',
    microservice: 'Microservice',
    sequence: 'Sequence',
    layer: 'Architecture layer',
    domain: 'Domain',
    action: 'Action',
    feature: 'Feature',
    environment: 'Environment',
    extension: 'File format',
    purpose: 'This file performs operation for in layer of service in environment'
  },

  // Sequence descriptions
  sequences: {
    standard: 'Sequence number',
    dependency: 'Dependency relationship (sequential execution required)',
    parallel: 'Parallel executable related files',
    subordinate: 'Subordinate relationship (parent-child)',
    main: 'Main file',
    alt: 'Alternative implementation',
    version: 'Version'
  },

  // Suggestion messages
  suggestions: {
    fixMicroservice: 'Fix microservice name to',
    fixSequence: 'Fix sequence to \'001\' format',
    addMicroservice: 'Add microservice name (e.g., auth, user, payment)',
    addSequence: 'Add sequence (e.g., 001, v1, main)',
    recommended: 'Recommended file name'
  },

  // Project types
  projectTypes: {
    ecommerce: 'E-commerce/Marketplace',
    'social-media': 'Social Media',
    fintech: 'Fintech/Banking',
    healthcare: 'Healthcare/Medical',
    education: 'Education/E-learning',
    streaming: 'Streaming/Media',
    'food-delivery': 'Food Delivery',
    travel: 'Travel/Accommodation',
    iot: 'IoT/Smart Home',
    gaming: 'Gaming/E-sports',
    blockchain: 'Blockchain/Web3'
  },

  // Component descriptions
  components: {
    microservice: 'Microservice identifier',
    sequence: 'File sequence or relationship expression',
    sequential: 'Sequential number (001-999)',
    version: 'Version number',
    variant: 'Main/alternative implementation',
    dependency: 'Dependency relationship (sequential execution)',
    parallel: 'Parallel executable',
    subordinate: 'Subordinate relationship (parent-child)',
    layer: 'Architecture layer',
    domain: 'Domain-subdomain',
    action: 'Action performed',
    feature: 'Detailed feature',
    environment: 'Execution environment',
    extension: 'File extension'
  },

  // Best practices
  bestPractices: [
    'Keep microservice names clear and concise',
    'Start sequence numbers from 001 and increment sequentially',
    'Use Level 1 relationship expressions for related files',
    'Express domain-subdomain in kebab-case',
    'Match environment tags with deployment environments',
    'Limit file name length to 80 characters',
    'Prefer clear words over abbreviations'
  ],

  // Anti-patterns
  antiPatterns: [
    'Avoid camelCase or PascalCase',
    'Avoid special characters (except underscore and hyphen)',
    'Avoid unclear abbreviations',
    'Avoid duplicate information',
    'Don\'t omit environment information'
  ],

  // Layer descriptions
  layers: {
    controller: 'HTTP request handling, routing',
    service: 'Business logic implementation',
    repository: 'Data access layer',
    model: 'Data structure definition',
    dto: 'Data transfer object',
    middleware: 'Request/response middleware',
    validator: 'Input validation',
    component: 'UI components',
    page: 'Page components',
    hook: 'React/Vue hooks',
    store: 'State management',
    util: 'Utility functions',
    style: 'Stylesheets',
    migration: 'DB migrations',
    seed: 'Seed data',
    schema: 'DB schema',
    config: 'Configuration files',
    docker: 'Docker configuration',
    k8s: 'K8s manifests',
    terraform: 'IaC code'
  },

  // Action descriptions
  actions: {
    create: 'Create new resource',
    read: 'Read data',
    update: 'Update existing data',
    delete: 'Delete resource',
    validate: 'Validate data',
    transform: 'Transform data',
    calculate: 'Perform calculation',
    process: 'Process data',
    analyze: 'Analyze data',
    send: 'Send data',
    fetch: 'Fetch external data',
    sync: 'Synchronize',
    publish: 'Publish event',
    subscribe: 'Subscribe to event'
  },

  // Server messages
  server: {
    started: 'AI Naming Standard MCP Server started successfully',
    error: 'Error'
  }
};

export default messages;
