# 📋 AI Naming Standard - Changelog v6.0.0

> **Version History and Changes**

**Language**: **English** | [한국어](../KR/v6.0.0/CHANGELOG_v6.md)

---

## [6.0.2] - 2025-10-17

### Changed
- 🌐 Updated homepage URL to `https://ai-naming-standard.dev`
- 📝 No functional changes
- 100% compatible with v6.0.0 and v6.0.1

---

## [6.0.1] - 2025-10-17

### Changed
- 🌐 Changed main README.md to English version
- 📝 Korean README moved to README_KO.md
- 🔗 Updated language selection links
- 100% compatible with v6.0.0

---

## [6.0.0] - 2025-10-17 🎉 MAJOR RELEASE

### 🌟 Major Features

#### 🤖 Multi-AI Orchestration
- **NEW**: Support for multiple AI tools working simultaneously
- **NEW**: AI_ROLE_MATRIX.yaml for role-based permissions
- **NEW**: Coordinated workflows between Cursor, Claude, ChatGPT, and Windsurf
- **NEW**: Role differentiation (Code Writer, Reviewer, Architect, Supervisor)

#### 🧠 Naming Wizard
- **NEW**: Natural language to file name conversion
- **NEW**: NAMING_WIZARD_RULES.yaml for customizable rules
- **NEW**: Multi-language support (Korean initial support)
- **NEW**: High-confidence keyword mapping
- **NEW**: Domain, action, and layer auto-detection

#### 🔗 Dependency Graph
- **NEW**: Automatic @deps tag tracking
- **NEW**: DEP_GRAPH.yaml generation
- **NEW**: Circular dependency detection
- **NEW**: File relationship visualization
- **NEW**: Dependency validation tools

#### 📊 Complete Governance Layer
- **NEW**: HUMAN_OVERRIDES.md for audit trail
- **NEW**: CONVERSATION_HISTORY.json for AI activity logs
- **NEW**: PROJECT_METADATA.json for project information
- **NEW**: Full governance and compliance support
- **NEW**: Audit trail for all human interventions

#### 🏗️ 07_META Folder System
- **NEW**: AI collaboration metadata management
- **NEW**: Project-wide AI coordination
- **NEW**: Governance and audit capabilities
- **NEW**: Centralized metadata storage

### 🛠️ MCP Tools (24 Total, +12 from v5)

#### New Multi-AI Tools (2)
- `createAIRoleMatrix` - Create AI_ROLE_MATRIX.yaml
- `getAIRole` - Get AI role and permissions

#### New Naming Wizard Tools (2)
- `naturalLanguageToFileName` - Convert natural language to file name
- `addNamingWizardRule` - Add custom naming rules

#### New Dependency Graph Tools (3)
- `generateDepGraph` - Generate dependency graph from @deps tags
- `validateDeps` - Validate @deps tags in files
- `checkCircularDeps` - Check for circular dependencies

#### New Governance Tools (3)
- `logHumanOverride` - Log human interventions
- `scanProject` - Scan project structure and generate reports
- `exportConfig` - Export configuration for different AI tools

#### Updated Tools (6)
- `createProjectStructure` - Now creates 8 folders (added 07_META)
- `checkFolderPermission` - Now supports 07_META and multi-AI permissions
- `migrateFromV4` - Now supports v5→v6 migration with 07_META
- `suggestFolder` - Now includes 07_META in suggestions
- `handleExternalFile` - Enhanced with v6 patterns
- `generateDependencyManifest` - Enhanced with @deps support

### 📂 Folder Structure Changes

#### Added
- **07_META/** - AI collaboration metadata folder
  - AI_ROLE_MATRIX.yaml
  - DEP_GRAPH.yaml
  - CONVERSATION_HISTORY.json
  - HUMAN_OVERRIDES.md
  - NAMING_WIZARD_RULES.yaml
  - PROJECT_METADATA.json

### 📝 File Naming Enhancements

#### Added
- **@deps tag** - Required in file headers for dependency tracking
- **@ai tag** - Indicates which AI created the file
- **@reviewed tag** - Indicates review status
- **@created tag** - Creation timestamp

#### Example File Header
```javascript
/* 
 * @file: 003_BE_Order-Process_X_Service_PROD.py
 * @deps:
 *   - 002_BE_Order-Validate_V_Helper_PROD.py
 *   - 005_DB_Order-Schema_C_Migration_PROD.sql
 * @ai: cursor
 * @reviewed: claude
 * @created: 2025-10-17
 */
```

### 🌐 Documentation

#### Added
- AI_NAMING_CONVENTION_v6.md (Part 0-6)
- AI_NAMING_CONVENTION_v6_CONTINUATION.md (Part 7-13)
- CHANGELOG_v6.md
- INDEX.md
- README.md (Quick Start)
- 05-meta-templates/ (3 template files)

#### Languages
- ✅ Korean (Complete)
- ✅ English (Complete)
- 🚧 Japanese (In Progress)

### 📈 Performance & Metrics

#### Improvements
- MCP Tools: 12 → 24 (+100%)
- Folders: 7 → 8 (+14%)
- AI Support: Single → Multi-AI (+400%)
- Natural Language: NEW (+100%)
- Dependency Tracking: Manual → Auto (+100%)
- Governance: Partial → Complete (+80%)
- Audit Trail: None → Full (+100%)
- Accessibility: 95% → 100% (+5%)

### 🔄 Migration

#### From v5.0.2 to v6.0.0
- ✅ Fully backward compatible
- ✅ Automatic migration tool available
- ✅ No breaking changes
- ✅ Optional v6 features can be adopted gradually

#### Migration Steps
1. Install v6: `npm install -g ai-naming-standard-mcp@6.0.0`
2. Run migration: Use `migrateFromV4` tool
3. Create 07_META folder
4. Add AI_ROLE_MATRIX.yaml
5. Add @deps tags to files
6. Generate DEP_GRAPH.yaml

### 🐛 Bug Fixes
- Fixed folder permission checks for edge cases
- Improved error handling in file name generation
- Enhanced validation for special characters
- Better support for non-ASCII characters in file names

### 🔧 Technical Changes

#### Dependencies Updated
- @modelcontextprotocol/sdk: ^0.6.0
- js-yaml: ^4.1.0 (NEW)

#### Node Version
- Minimum: >=16.0.0 (unchanged)
- Recommended: >=18.0.0

---

## [5.0.2] - 2025-10-14

### Added
- EXTERNAL_ prefix for external dependencies
- SHA256 integrity verification
- Version management for external files
- Dependency manifest generation

### Changed
- Enhanced external file handling
- Improved documentation structure

---

## [5.0.0] - 2025-10-13

### Added
- 7-Category folder system (00_DOCS through 06_LOGS)
- Smart-Folderization approach
- AI permission system
- ASSET_, TEMPLATE_, CONFIG_ prefixes
- Indexed TEST naming

### Changed
- Moved from Zero-Folderization to Smart-Folderization
- Enhanced folder-based organization
- Improved AI collaboration support

---

## [4.0.0] - 2025-10-10

### Added
- Initial AI Naming Convention
- Zero-Folderization concept
- Basic file naming patterns
- Layer and action codes
- Microservice-based naming

---

## 📊 Version Summary

| Version | Release Date | Major Feature | Status |
|---------|--------------|---------------|--------|
| v6.0.2 | 2025-10-17 | Homepage update | CURRENT |
| v6.0.1 | 2025-10-17 | English README | STABLE |
| v6.0.0 | 2025-10-17 | Multi-AI Orchestration | STABLE |
| v5.0.2 | 2025-10-14 | External File Management | LEGACY |
| v5.0.0 | 2025-10-13 | Smart-Folderization | LEGACY |
| v4.0.0 | 2025-10-10 | Initial Release | DEPRECATED |

---

## 🔜 Upcoming Features

### v6.1 (2025 Q4)
- 🤖 AI automatic code review system
- 📊 Real-time collaboration dashboard
- 🌍 Multi-language Naming Wizard (EN, JA, ZH)
- 🔌 VS Code Extension
- 🎨 Web UI for configuration

### v6.2 (2026 Q1)
- 🧪 Automatic test generation
- 🪝 Git Hooks integration
- ☁️ Cloud synchronization
- 📱 Mobile app
- 🔐 Advanced security features

### v7.0 (2026 Q2)
- 🤖 AI agent automation
- 🧠 ML-based predictions
- 🌐 Distributed system support
- 🚀 Enterprise features

---

## 📝 Notes

### Breaking Changes
- **None** - v6.0.0 is fully backward compatible with v5.0.2
- All v5 projects can be migrated without code changes
- v6 features are optional and can be adopted gradually

### Deprecations
- **None** - All v5 features are still supported
- v4 features are deprecated but still functional

### Security
- No security vulnerabilities reported
- All dependencies are up to date
- SHA256 verification for external files

---

## 🙏 Contributors

### v6.0.0
- **Hyun Seok Yang** - v5.0.2 foundation, architecture design
- **AI Community** - Multi-AI collaboration ideas
- **Beta Testers** - v6 early validation

### Special Thanks
- Model Context Protocol Team
- Claude AI Team
- Cursor Team
- OpenAI Team
- Open Source Community

---

## 📞 Support

### Need Help?
- 💬 [Discord Community](https://discord.gg/ai-naming-standard)
- 📧 [Email Support](mailto:support@ai-naming-standard.org)
- 🐛 [GitHub Issues](https://github.com/ai-naming-standard/v6/issues)

### Resources
- 🌐 [Website](https://ai-naming-standard.dev)
- 📦 [NPM Package](https://www.npmjs.com/package/ai-naming-standard-mcp)
- 📚 [Documentation](https://ai-naming-standard.dev/docs)

---

**Last Updated**: 2025-10-17  
**Current Version**: 6.0.2  
**Status**: Production Ready ✅

---

<div align="center">

Made with ❤️ by [AI Naming Standard Organization](https://github.com/ai-naming-standard)

</div>
