#!/usr/bin/env node
/**
 * AI-Compatible Project Structure Initializer (Node.js Version)
 * Version: v5.0.2 - With External Dependency Management
 * Based on ChatGPT's recommendations for v5 improvements
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

/**
 * Calculate SHA256 hash of a file
 */
function calculateSHA256(filePath) {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        const hashSum = crypto.createHash('sha256');
        hashSum.update(fileBuffer);
        return hashSum.digest('hex');
    } catch (error) {
        return 'N/A';
    }
}

/**
 * v5.0.2: Handle external files with EXTERNAL_ prefix
 */
function handleExternalFile(url, vendor, version, fileType = 'JS') {
    return new Promise((resolve, reject) => {
        const ext = url.split('.').pop();
        const filename = `EXTERNAL_${fileType}_${vendor}_v${version}.${ext}`;
        const filepath = path.join('02_STATIC', filename);
        
        const file = fs.createWriteStream(filepath);
        
        console.log(`📥 Downloading ${vendor} v${version}...`);
        
        https.get(url, (response) => {
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                
                // Calculate hash
                const sha256 = calculateSHA256(filepath);
                
                // Update dependency manifest
                const depInfo = {
                    file: filename,
                    version: version,
                    vendor: vendor,
                    url: url,
                    sha256: sha256,
                    date: new Date().toISOString().split('T')[0],
                    license: 'Check vendor site'
                };
                
                updateDependencyManifest(depInfo);
                
                console.log(`✅ External file added: ${filename}`);
                console.log(`   SHA256: ${sha256.substring(0, 16)}...`);
                
                resolve(filepath);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            console.error(`❌ Failed to download ${vendor}: ${err.message}`);
            reject(err);
        });
    });
}

/**
 * v5.0.2: Update EXTERNAL_DEPENDENCIES.md
 */
function updateDependencyManifest(depInfo) {
    const manifestPath = path.join('00_DOCS', 'EXTERNAL_DEPENDENCIES.md');
    
    // Create if not exists
    if (!fs.existsSync(manifestPath)) {
        const header = `<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
# External Dependencies Registry

## v5.0.2 External File Management

| File | Version | Vendor | URL | SHA256 | Date | License |
|------|---------|--------|-----|--------|------|---------|
`;
        fs.writeFileSync(manifestPath, header);
    }
    
    // Append new entry
    const entry = `| ${depInfo.file} | ${depInfo.version} | ${depInfo.vendor} | ${depInfo.url.substring(0, 30)}... | ${depInfo.sha256.substring(0, 16)}... | ${depInfo.date} | ${depInfo.license} |\n`;
    fs.appendFileSync(manifestPath, entry);
}

/**
 * Create complete folder structure with AI restrictions
 */
function createAIProjectStructure(projectName, projectType = 'web') {
    console.log('\n🚀 Initializing AI-Standard Project:', projectName);
    console.log('📦 Project Type:', projectType);
    console.log('🔧 Version: v5.0.2 with External Dependency Management');
    console.log('-'.repeat(50));
    
    // Define folder structure with permissions
    const folders = {
        '00_DOCS': {
            permission: 'READ_ONLY',
            header: '⚠️ AI PERMISSION: NO-MODIFY',
            description: 'Documentation - AI cannot modify'
        },
        '01_CONFIG': {
            permission: 'NO_ACCESS',
            header: '⚠️ AI PERMISSION: NO-MODIFY - CRITICAL',
            description: 'Configuration files - Protected from AI'
        },
        '02_STATIC': {
            permission: 'READ_ADD',
            header: 'Use ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_ prefixes',
            description: 'Static resources - Prefix required'
        },
        '03_ACTIVE': {
            permission: 'FULL_ACCESS',
            header: 'Primary AI workspace',
            description: 'Active development - Full AI access'
        },
        '04_TEST': {
            permission: 'CREATE_MODIFY',
            header: 'Use indexed naming: 001_TEST_*',
            description: 'Test files - Indexed naming required'
        },
        '05_BUILD': {
            permission: 'CREATE_ONLY',
            header: 'Build output only',
            description: 'Build artifacts - AI creates only'
        },
        '06_LOGS': {
            permission: 'WRITE_ONLY',
            header: 'Logs only',
            description: 'Log files - AI writes only'
        }
    };
    
    // Create folders
    Object.entries(folders).forEach(([folder, config]) => {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }
        console.log(`✅ Created: ${folder} - ${config.description}`);
        
        // Create permission file
        const permFile = path.join(folder, '.ai_permission');
        const permContent = `Permission: ${config.permission}\nNote: ${config.header}\nDescription: ${config.description}\nCreated: ${new Date().toISOString()}\n`;
        fs.writeFileSync(permFile, permContent);
    });
    
    console.log('\n📝 Creating initial files...');
    
    // Create README with AI permission header
    const readmePath = path.join('00_DOCS', 'README.md');
    const readmeContent = `<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
<!-- This file is protected from AI modifications -->

# ${projectName}

## Project Structure
This project follows the AI-Standard v5.0.2 naming convention with ChatGPT enhancements.

### Folder Structure
- **00_DOCS**: Documentation (AI Read-Only)
- **01_CONFIG**: Configuration (AI No Access)
- **02_STATIC**: Static Assets (Prefix required: ASSET_, TEMPLATE_, CONFIG_, EXTERNAL_)
- **03_ACTIVE**: Active Development (AI Primary Workspace)
- **04_TEST**: Tests (Use indexed naming: 001_TEST_*)
- **05_BUILD**: Build Output
- **06_LOGS**: Logs

### Naming Convention
Pattern: \`[Index]_[Layer]_[Domain]-[Feature]_[Action]_[Detail]_[Env].[ext]\`

### Dependencies ([Deps])
- Sequential: 001-1, 001-2
- Parallel: 001a, 001b
- Subordinate: 001s1, 001s2

### External Dependencies (v5.0.2)
- Pattern: \`EXTERNAL_[Type]_[Vendor]_[Version].[ext]\`
- SHA256 verification required
- See 00_DOCS/EXTERNAL_DEPENDENCIES.md for registry
`;
    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ Created: 00_DOCS/README.md');
    
    // Create EXTERNAL_DEPENDENCIES.md
    const depsPath = path.join('00_DOCS', 'EXTERNAL_DEPENDENCIES.md');
    const depsContent = `<!-- ⚠️ AI PERMISSION: NO-MODIFY -->
# External Dependencies Registry

## v5.0.2 External File Management

| File | Version | Vendor | URL | SHA256 | Date | License |
|------|---------|--------|-----|--------|------|---------|
`;
    fs.writeFileSync(depsPath, depsContent);
    console.log('✅ Created: 00_DOCS/EXTERNAL_DEPENDENCIES.md');
    
    // Create sample external file README
    const externalReadmePath = path.join('02_STATIC', 'EXTERNAL_README.md');
    const externalReadmeContent = `# External Files Directory

## v5.0.2 Naming Convention
All external libraries must use the following pattern:
\`EXTERNAL_[Type]_[Vendor]_[Version].[ext]\`

### Types
- JS: JavaScript libraries
- SDK: Software Development Kits
- JAR: Java Archives
- ZIP: Compressed packages
- LIB: Generic libraries
- MODULE: Node modules

### Version Management
- Current: EXTERNAL_JS_jQuery_v3.6.0.min.js
- Deprecated: EXTERNAL_JS_jQuery_v3.5.0_DEPRECATED.min.js

### Security
All files are SHA256 hashed for integrity verification.
Check 00_DOCS/EXTERNAL_DEPENDENCIES.md for details.
`;
    fs.writeFileSync(externalReadmePath, externalReadmeContent);
    
    console.log('\n' + '='.repeat(50));
    console.log(`✨ Project '${projectName}' initialized successfully!`);
    console.log('\n🔥 v5.0.2 Features:');
    console.log('  • External file management (EXTERNAL_ prefix)');
    console.log('  • SHA256 integrity verification');
    console.log('  • Dependency registry in 00_DOCS');
    console.log('  • Version deprecation strategy');
    console.log('\n🎯 Next Steps:');
    console.log('1. Review .ai_instructions.md for AI development guidelines');
    console.log('2. Start developing in 03_ACTIVE/');
    console.log('3. Use indexed naming for test files in 04_TEST/');
    console.log('4. Remember prefixes in 02_STATIC:');
    console.log('   - ASSET_ for assets');
    console.log('   - TEMPLATE_ for templates');
    console.log('   - CONFIG_ for configs');
    console.log('   - EXTERNAL_ for external libraries');
    console.log('5. Check 00_DOCS/EXTERNAL_DEPENDENCIES.md for external files');
    console.log('='.repeat(50));
    
    return true;
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.log('\n📋 AI-Standard Project Initializer v5.0.2 (Node.js)');
        console.log('='.repeat(50));
        console.log('Usage: node SCRIPT_init_structure.js <project_name> [project_type]');
        console.log('\nProject types:');
        console.log('  • web (default) - React/Vue/Angular projects');
        console.log('  • api - REST API/Backend services');
        console.log('  • ml - Machine Learning projects');
        console.log('\nExamples:');
        console.log('  node SCRIPT_init_structure.js my-app');
        console.log('  node SCRIPT_init_structure.js my-api api');
        console.log('  node SCRIPT_init_structure.js ml-model ml');
        console.log('\nFeatures (v5.0.2):');
        console.log('  ✅ 7-folder structure with AI permissions');
        console.log('  ✅ Indexed naming for files');
        console.log('  ✅ [Deps] dependency markers');
        console.log('  ✅ Prefix requirements (ASSET_, TEMPLATE_, etc.)');
        console.log('  ✅ External dependency management');
        console.log('  ✅ SHA256 integrity verification');
        console.log('='.repeat(50));
        process.exit(1);
    }
    
    const projectName = args[0];
    let projectType = args[1] || 'web';
    
    if (!['web', 'api', 'ml'].includes(projectType)) {
        console.log(`⚠️ Warning: Unknown project type '${projectType}', using 'web'`);
        projectType = 'web';
    }
    
    try {
        createAIProjectStructure(projectName, projectType);
    } catch (error) {
        console.error(`\n❌ Error: ${error.message}`);
        process.exit(1);
    }
}

// Execute if run directly
if (require.main === module) {
    main();
}

module.exports = { createAIProjectStructure, handleExternalFile, calculateSHA256 };
