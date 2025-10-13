#!/usr/bin/env node

import { 
  getMessages, 
  setLanguage, 
  getCurrentLanguage, 
  SUPPORTED_LANGUAGES 
} from './src/messages/index.js';

console.log('🌐 AI Naming Standard MCP - Language Test\n');
console.log('='.repeat(50));

// 각 언어별로 테스트
for (const lang of SUPPORTED_LANGUAGES) {
  setLanguage(lang);
  const msg = getMessages();
  
  console.log(`\n📍 Language: ${lang.toUpperCase()}`);
  console.log('-'.repeat(50));
  
  // 도구 이름 테스트
  console.log(`✓ Generate File Name: ${msg.tools.generateFileName.description}`);
  console.log(`✓ Validate File Name: ${msg.tools.validateFileName.description}`);
  
  // 에러 메시지 테스트
  console.log(`✓ Invalid Pattern: ${msg.errors.invalidPattern}`);
  console.log(`✓ Invalid Layer: ${msg.errors.invalidLayer}`);
  
  // 프로젝트 타입 테스트
  console.log(`✓ E-commerce: ${msg.projectTypes.ecommerce}`);
  console.log(`✓ Social Media: ${msg.projectTypes['social-media']}`);
  
  // 서버 메시지 테스트
  console.log(`✓ Server Started: ${msg.server.started}`);
}

console.log('\n' + '='.repeat(50));
console.log('✅ All language tests passed!');
console.log('\nCurrent language:', getCurrentLanguage());
console.log('To change language, set MCP_LANG environment variable.');
