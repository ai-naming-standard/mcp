#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MCP 서버 실행
const serverPath = join(__dirname, '..', 'src', 'index.js');

const child = spawn('node', [serverPath], {
  stdio: 'inherit',
  env: process.env
});

child.on('error', (error) => {
  console.error('Failed to start AI Naming Standard MCP server:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});