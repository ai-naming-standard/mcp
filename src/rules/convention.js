import { getMessages } from '../messages/index.js';

// AI 네이밍 컨벤션 v4.1 규칙 정의 (다국어 지원)
export const namingRules = () => {
  const msg = getMessages();
  
  return {
    version: "4.1",
    pattern: "[MS-Service]_[순번]_[Layer]_[Domain-Sub]_[Action]_[Feature]_[Env].[ext]",
    
    components: {
      microservice: {
        description: msg.components.microservice,
        format: "lowercase",
        examples: ["auth", "user", "payment", "order", "product"],
        validation: /^[a-z]+$/,
        maxLength: 15
      },
      
      sequence: {
        description: msg.components.sequence,
        types: {
          sequential: {
            pattern: /^[0-9]{3}$/,
            example: "001",
            description: msg.components.sequential
          },
          version: {
            pattern: /^v[0-9]+$/,
            example: "v1",
            description: msg.components.version
          },
          variant: {
            pattern: /^(main|alt)$/,
            examples: ["main", "alt"],
            description: msg.components.variant
          },
          dependency: {
            pattern: /^[0-9]{3}-[0-9]+$/,
            example: "001-1",
            description: msg.components.dependency
          },
          parallel: {
            pattern: /^[0-9]{3}[a-z]$/,
            example: "001a",
            description: msg.components.parallel
          },
          subordinate: {
            pattern: /^[0-9]{3}s[0-9]+$/,
            example: "001s1",
            description: msg.components.subordinate
          }
        }
      },
      
      layer: {
        description: msg.components.layer,
        categories: {
          backend: ["controller", "service", "repository", "model", "dto", "middleware", "validator", "helper"],
          frontend: ["component", "page", "hook", "store", "util", "style"],
          data: ["migration", "seed", "schema"],
          infra: ["config", "docker", "k8s", "terraform"]
        },
        validation: /^[a-z]+$/
      },
      
      domain: {
        description: msg.components.domain,
        format: "kebab-case",
        example: "user-profile",
        validation: /^[a-z]+(-[a-z]+)+$/
      },
      
      action: {
        description: msg.components.action,
        categories: {
          crud: ["create", "read", "update", "delete"],
          processing: ["validate", "transform", "calculate", "process", "analyze"],
          communication: ["send", "fetch", "sync", "publish", "subscribe"]
        },
        validation: /^[a-z]+$/
      },
      
      feature: {
        description: msg.components.feature,
        examples: ["validation", "encryption", "caching", "logging", "notification", "export", "import", "batch"],
        validation: /^[a-z]+$/
      },
      
      environment: {
        description: msg.components.environment,
        values: ["dev", "test", "staging", "prod", "common"],
        validation: /^(dev|test|staging|prod|common)$/
      },
      
      extension: {
        description: msg.components.extension,
        languages: {
          javascript: ["js", "jsx", "mjs"],
          typescript: ["ts", "tsx"],
          python: ["py"],
          java: ["java"],
          go: ["go"],
          config: ["yml", "yaml", "json", "env"],
          document: ["md", "txt"],
          database: ["sql"]
        },
        validation: /^[a-z]+$/
      }
    },
    
    projectTypes: {
      ecommerce: {
        name: msg.projectTypes.ecommerce,
        microservices: [
          "auth", "user", "product", "inventory", "cart",
          "order", "payment", "shipping", "review", "search",
          "recommendation", "notification", "analytics", "admin", "support"
        ],
        estimatedFiles: {
          mvp: "300-500",
          growth: "1,000-2,000",
          mature: "3,000-5,000",
          enterprise: "5,000-8,000"
        }
      },
      
      "social-media": {
        name: msg.projectTypes['social-media'],
        microservices: [
          "identity", "profile", "feed", "story", "post",
          "media", "messaging", "comment", "reaction", "follow",
          "hashtag", "trending", "notification", "moderation", "ads"
        ],
        estimatedFiles: {
          mvp: "400-600",
          growth: "1,500-2,500",
          mature: "4,000-6,000",
          enterprise: "6,000-10,000"
        }
      },
      
      fintech: {
        name: msg.projectTypes.fintech,
        microservices: [
          "auth", "account", "transaction", "payment", "wallet",
          "card", "loan", "investment", "kyc", "fraud",
          "reporting", "audit", "notification", "compliance", "analytics"
        ],
        estimatedFiles: {
          mvp: "500-700",
          growth: "2,000-3,000",
          mature: "5,000-7,000",
          enterprise: "8,000-12,000"
        }
      },
      
      healthcare: {
        name: msg.projectTypes.healthcare,
        microservices: [
          "auth", "patient", "provider", "appointment", "medical-record",
          "prescription", "lab", "imaging", "billing", "insurance",
          "telemedicine", "emergency", "pharmacy", "analytics", "compliance"
        ],
        estimatedFiles: {
          mvp: "600-800",
          growth: "2,500-3,500",
          mature: "6,000-8,000",
          enterprise: "10,000-15,000"
        }
      },
      
      education: {
        name: msg.projectTypes.education,
        microservices: [
          "auth", "student", "instructor", "course", "enrollment",
          "content", "assignment", "exam", "grading", "discussion",
          "live-class", "certificate", "payment", "analytics", "admin"
        ],
        estimatedFiles: {
          mvp: "400-600",
          growth: "1,500-2,500",
          mature: "4,000-6,000",
          enterprise: "6,000-10,000"
        }
      }
    },
    
    bestPractices: msg.bestPractices,
    antiPatterns: msg.antiPatterns
  };
};

// 기본 내보내기 (하위 호환성)
export const namingRulesStatic = {
  version: "4.1",
  pattern: "[MS-Service]_[순번]_[Layer]_[Domain-Sub]_[Action]_[Feature]_[Env].[ext]"
};

export default namingRules;
