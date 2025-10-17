import { getMessages } from '../messages/index.js';

// AI 네이밍 컨벤션 v5.0 - Smart-Folderization
export const namingRules = () => {
  const msg = getMessages();
  
  return {
    version: "5.0",
    architecture: "Smart-Folderization",
    philosophy: "최소한의 폴더로 최대한의 구조를, 파일명으로 완벽한 컨텍스트를",
    
    patterns: {
      folder: "[Priority]_[Category]",
      file: "[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]"
    },
    
    // 7-Category System
    standardFolders: {
      "00_DOCS": {
        name: "Documentation",
        aiPermission: "read-only",
        aiWarning: "⚠️ AI PERMISSION: NO-MODIFY",
        description: "Project documentation and guides - AI Read-Only",
        modificationFrequency: "very-low",
        namingRuleRequired: false,
        fileHeader: "<!-- ⚠️ AI PERMISSION: NO-MODIFY -->\n<!-- This file is protected from AI modifications -->",
        headerFormats: {
          markdown: "<!-- ⚠️ AI PERMISSION: NO-MODIFY -->",
          text: "# ⚠️ AI PERMISSION: NO-MODIFY"
        },
        examples: ["README.md", "API_Documentation.md", "Architecture.md"]
      },
      "01_CONFIG": {
        name: "Configuration",
        aiPermission: "no-modify",
        aiWarning: "⚠️ AI CANNOT MODIFY - CRITICAL",
        description: "Environment settings and secrets - Protected from AI",
        modificationFrequency: "low",
        namingRuleRequired: false,
        fileHeader: "/* \n * ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL\n * This file in 01_CONFIG cannot be modified by AI\n * Manual changes only - contains sensitive data\n */",
        headerFormats: {
          yaml: "# ⚠️ AI PERMISSION: NO-MODIFY - CRITICAL",
          json: "// Note: AI PERMISSION: NO-MODIFY (see .ai_permission)",
          javascript: "/* ⚠️ AI PERMISSION: NO-MODIFY */",
          python: "# ⚠️ AI PERMISSION: NO-MODIFY"
        },
        examples: [".env", "config.prod.yml", "firebase.json"]
      },
      "02_STATIC": {
        name: "Static Resources & External Dependencies",
        aiPermission: "read-add",
        description: "Static resources and external dependencies with mandatory prefixes",
        modificationFrequency: "low",
        namingRuleRequired: true,
        namingPattern: {
          assets: "ASSET_[name].[ext]",
          templates: "TEMPLATE_[name].[ext]",
          configs: "CONFIG_[name].[ext]",
          external: "EXTERNAL_[Type]_[Vendor]_[Version].[ext]"  // v5.0.2: External files
        },
        prefixRules: {
          ASSET_: "Required for all internal images, media files",
          TEMPLATE_: "Required for all template files",
          CONFIG_: "Required for all configuration files",
          EXTERNAL_: "Required for all external dependencies (SDKs, libraries, modules)"
        },
        externalFileRules: {
          pattern: "EXTERNAL_[Type]_[Vendor]_[Version].[ext]",
          types: ["JS", "SDK", "JAR", "BIN", "ZIP", "LIB", "MODULE"],
          versionFormat: "vX.Y.Z or vYYYY-MM",
          deprecation: "Add _DEPRECATED suffix when replacing",
          examples: [
            "EXTERNAL_JS_TossPayments_v1.2.0.min.js",
            "EXTERNAL_SDK_Firebase_v12.1.0.zip",
            "EXTERNAL_JAR_BootpaySDK_v3.0.1.jar",
            "EXTERNAL_BIN_ChromeDriver_v114.exe"
          ]
        },
        examples: [
          "ASSET_logo.png",
          "ASSET_favicon.ico",
          "TEMPLATE_email_welcome.html",
          "CONFIG_theme.json",
          "EXTERNAL_JS_jQuery_v3.6.0.min.js",
          "EXTERNAL_SDK_Kakao_v2.1.0.zip"
        ]
      },
      "03_ACTIVE": {
        name: "Active Code",
        aiPermission: "full-access",
        description: "Core business logic - AI main workspace",
        modificationFrequency: "very-high",
        namingRuleRequired: true,
        examples: [
          "001_FE_User-Login_C_Page_PROD.jsx",
          "002_BE_Auth-Token_V_Service_PROD.py",
          "003_DB_User-Schema_C_Migration_PROD.sql"
        ]
      },
      "04_TEST": {
        name: "Tests",
        aiPermission: "create-modify",
        description: "Unit and integration tests",
        modificationFrequency: "medium",
        namingRuleRequired: true,  // 업그레이드: recommended → true
        namingPattern: "[Index]_TEST_[Domain]-[Feature]_[Type]_[Env].test.[ext]",
        examples: [
          "001_TEST_User-Login_Unit_COMMON.test.js",
          "002_TEST_Payment-Process_Integration_STG.test.py",
          "003_TEST_Order-Checkout_E2E_PROD.test.js"
        ]
      },
      "05_BUILD": {
        name: "Build Output",
        aiPermission: "create-only",
        description: "Compiled results",
        modificationFrequency: "automatic",
        namingRuleRequired: false,
        examples: ["dist/", "bundle.js", "app.min.css"]
      },
      "06_LOGS": {
        name: "Logs",
        aiPermission: "write-only",
        description: "Runtime and error logs",
        modificationFrequency: "automatic",
        namingRuleRequired: false,
        examples: ["2025-10-14_error.log", "access.log", "deploy.log"]
      }
    },
    
    // External Dependency Management (v5.0.2)
    externalDependencyManagement: {
      description: "Management rules for external files and dependencies",
      location: "02_STATIC with EXTERNAL_ prefix",
      documentationFile: "00_DOCS/EXTERNAL_DEPENDENCIES.md",
      
      namingConvention: {
        pattern: "EXTERNAL_[Type]_[Vendor]_[Version].[ext]",
        components: {
          prefix: "EXTERNAL (fixed)",
          type: "JS, SDK, JAR, BIN, ZIP, LIB, MODULE",
          vendor: "Provider name (TossPayments, Firebase, etc.)",
          version: "vX.Y.Z format required",
          extension: "Original file extension"
        }
      },
      
      versionManagement: {
        updateStrategy: "Keep old versions with _DEPRECATED suffix",
        example: {
          old: "EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js",
          new: "EXTERNAL_JS_jQuery_v3.6.0.min.js"
        }
      },
      
      aiRules: {
        download: "AI must record URL and SHA256 hash",
        storage: "Always in 02_STATIC with EXTERNAL_ prefix",
        modification: "Read-only - never modify external files",
        documentation: "Update 00_DOCS/EXTERNAL_DEPENDENCIES.md",
        security: "Verify integrity before use"
      },
      
      trackingSchema: {
        file: "00_DOCS/EXTERNAL_DEPENDENCIES.md",
        format: "markdown table",
        columns: [
          "File Name",
          "Version",
          "Vendor",
          "Download URL",
          "SHA256 Hash",
          "Date Added",
          "License",
          "Notes"
        ]
      },
      
      importExample: `
        // In 03_ACTIVE files:
        import TossPayments from '../../02_STATIC/EXTERNAL_JS_TossPayments_v1.2.0.min.js';
        const firebase = require('../../02_STATIC/EXTERNAL_SDK_Firebase_v12.1.0.js');
      `
    },
    
    // [Deps] Dependency Markers (ChatGPT Enhancement)
    dependencyMarkers: {
      description: "Use [Deps] markers in comments to indicate file relationships",
      format: "// [Deps]: {relationship}",
      types: {
        sequential: {
          pattern: "001-1, 001-2",
          meaning: "Must execute in order",
          example: "// [Deps]: 001-1, 001-2 - Sequential execution required"
        },
        parallel: {
          pattern: "001a, 001b",
          meaning: "Can execute concurrently",
          example: "// [Deps]: 001a, 001b - Parallel execution allowed"
        },
        subordinate: {
          pattern: "001s1, 001s2",
          meaning: "Child of parent file",
          example: "// [Deps]: 001s1 - Subordinate to parent 001"
        },
        variant: {
          pattern: "001.1, 001.2",
          meaning: "Alternative implementations",
          example: "// [Deps]: 001.1 - Variant implementation"
        },
        none: {
          pattern: "None",
          meaning: "No dependencies - entry point",
          example: "// [Deps]: None - Entry point"
        }
      },
      usage: "Place [Deps] marker on the second line of file after description"
    },
    
    components: {
      // Index (순번)
      index: {
        description: msg.components.index || "File sequence number",
        types: {
          sequential: {
            pattern: /^[0-9]{3}$/,
            example: "001",
            description: "Standard sequence (001-999)"
          },
          decimal: {
            pattern: /^[0-9]{3}\.[0-9]+$/,
            example: "001.1",
            description: "Sub-steps"
          },
          dependency: {
            pattern: /^[0-9]{3}-[0-9]+$/,
            example: "001-1",
            description: "Sequential execution required"
          },
          parallel: {
            pattern: /^[0-9]{3}[a-z]$/,
            example: "001a",
            description: "Parallel executable"
          },
          subordinate: {
            pattern: /^[0-9]{3}s[0-9]+$/,
            example: "001s1",
            description: "Parent-child relationship"
          }
        }
      },
      
      // Layer (계층)
      layer: {
        description: msg.components.layer || "Architecture layer",
        codes: {
          "FE": "Frontend (React, Vue, Angular)",
          "BE": "Backend (Node.js, Python, Java)",
          "DB": "Database (MySQL, MongoDB, PostgreSQL)",
          "API": "API Gateway (REST, GraphQL, gRPC)",
          "ML": "Machine Learning (TensorFlow, PyTorch)",
          "INFRA": "Infrastructure (Docker, K8s, Terraform)",
          "SH": "Shared/Common utilities"
        },
        validation: /^(FE|BE|DB|API|ML|INFRA|SH)$/
      },
      
      // Domain-Feature (도메인-기능)
      domain: {
        description: msg.components.domain || "Business domain and feature",
        format: "kebab-case",
        examples: [
          "User-Login",
          "Product-Search",
          "Order-Checkout",
          "Payment-Refund"
        ],
        validation: /^[A-Z][a-z]+(-[A-Z][a-z]+)+$/
      },
      
      // Action (동작)
      action: {
        description: msg.components.action || "Operation type",
        codes: {
          "C": "Create (생성, 추가, 등록)",
          "R": "Read (조회, 검색, 가져오기)",
          "U": "Update (수정, 변경, 갱신)",
          "D": "Delete (삭제, 제거)",
          "V": "Validate (검증, 확인)",
          "X": "Execute (실행, 처리)",
          "S": "Send (전송, 발송)",
          "T": "Transform (변환, 변경)",
          "G": "Generate (생성, 출력)"
        },
        validation: /^[CRUDVXSTG]$/
      },
      
      // Detail (세부사항)
      detail: {
        description: msg.components.detail || "Specific component type",
        examples: [
          "Handler",
          "Service",
          "Repository",
          "Controller",
          "Component",
          "Helper",
          "Validator",
          "Mapper",
          "Page",
          "Schema",
          "Migration",
          "Middleware",
          "Processor"
        ],
        validation: /^[A-Z][a-z]+$/
      },
      
      // Environment (환경)
      environment: {
        description: msg.components.environment || "Deployment environment",
        values: {
          "DEV": "Development",
          "STG": "Staging",
          "PROD": "Production",
          "COMMON": "All environments"
        },
        validation: /^(DEV|STG|PROD|COMMON)$/
      },
      
      // Extension (확장자)
      extension: {
        description: msg.components.extension || "File format",
        categories: {
          frontend: ["js", "jsx", "ts", "tsx", "vue", "html", "css", "scss"],
          backend: ["js", "ts", "py", "java", "go", "rb", "php", "cs"],
          database: ["sql", "prisma", "graphql"],
          config: ["json", "yml", "yaml", "env", "toml", "xml"],
          document: ["md", "txt", "pdf", "docx"],
          data: ["csv", "json", "xml"]
        },
        validation: /^[a-z]+$/
      }
    },
    
    // Project Templates
    projectTemplates: {
      ecommerce: {
        name: msg.projectTypes?.ecommerce || "E-commerce/Marketplace",
        folders: ["00_DOCS", "01_CONFIG", "02_STATIC", "03_ACTIVE", "04_TEST", "05_BUILD", "06_LOGS"],
        domains: ["User", "Product", "Order", "Payment", "Cart", "Shipping"],
        estimatedFiles: {
          mvp: "50-100",
          growth: "200-500",
          mature: "500-1000",
          enterprise: "1000+"
        }
      },
      "social-media": {
        name: msg.projectTypes?.['social-media'] || "Social Media Platform",
        folders: ["00_DOCS", "01_CONFIG", "02_STATIC", "03_ACTIVE", "04_TEST", "05_BUILD", "06_LOGS"],
        domains: ["User", "Post", "Comment", "Feed", "Message", "Notification"],
        estimatedFiles: {
          mvp: "60-120",
          growth: "250-600",
          mature: "600-1200",
          enterprise: "1200+"
        }
      },
      fintech: {
        name: msg.projectTypes?.fintech || "Fintech/Banking",
        folders: ["00_DOCS", "01_CONFIG", "02_STATIC", "03_ACTIVE", "04_TEST", "05_BUILD", "06_LOGS"],
        domains: ["Auth", "Account", "Transaction", "Payment", "Wallet", "KYC"],
        estimatedFiles: {
          mvp: "80-150",
          growth: "300-700",
          mature: "700-1500",
          enterprise: "1500+"
        }
      }
    },
    
    // Best Practices
    bestPractices: [
      "폴더는 7개만 사용 (00_DOCS ~ 06_LOGS)",
      "03_ACTIVE에 모든 활성 코드 집중",
      "파일명이 곧 문서가 되도록 명확히 작성",
      "순번은 실행 순서를 의미 (001 → 002 → 003)",
      "환경(DEV/STG/PROD) 명시 필수",
      "도메인-기능은 PascalCase-kebab 사용",
      "AI 권한 매트릭스 준수",
      "01_CONFIG는 절대 AI가 수정 금지"
    ],
    
    // Anti-patterns
    antiPatterns: [
      "7개 이상의 폴더 생성 금지",
      "src/, components/ 같은 전통적 폴더 사용 금지",
      "파일명에 camelCase 사용 금지",
      "환경 정보 누락 금지",
      "03_ACTIVE 외부에 활성 코드 배치 금지"
    ],
    
    // Migration Path
    migrationPath: {
      "from_traditional": {
        "src/": "03_ACTIVE/",
        "docs/": "00_DOCS/",
        "config/": "01_CONFIG/",
        "public/": "02_STATIC/",
        "test/": "04_TEST/",
        "dist/": "05_BUILD/",
        "logs/": "06_LOGS/"
      },
      "from_v4": {
        description: "v4 Zero-Folderization에서 v5 Smart-Folderization으로",
        steps: [
          "7개 표준 폴더 생성",
          "문서와 설정 파일 분리 (00_DOCS, 01_CONFIG)",
          "모든 활성 코드를 03_ACTIVE로 이동",
          "파일명은 그대로 유지 (이미 v4 규칙 적용됨)",
          "테스트와 빌드 분리"
        ]
      }
    }
  };
};

// 기본 내보내기 (하위 호환성)
export const namingRulesStatic = {
  version: "5.0",
  architecture: "Smart-Folderization",
  pattern: {
    folder: "[Priority]_[Category]",
    file: "[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]"
  }
};

export default namingRules;