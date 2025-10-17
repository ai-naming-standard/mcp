// 메시지 로더
import koMessages from './ko.js';
import enMessages from './en.js';
import jaMessages from './ja.js';
import zhMessages from './zh.js';

// 지원 언어 목록
export const SUPPORTED_LANGUAGES = ['ko', 'en', 'ja', 'zh'];

// 기본 언어
export const DEFAULT_LANGUAGE = 'en';

// 언어별 메시지 맵
const messageMap = {
  ko: koMessages,
  en: enMessages,
  ja: jaMessages,
  zh: zhMessages
};

// 현재 언어 (환경 변수 또는 기본값)
let currentLanguage = process.env.MCP_LANG || DEFAULT_LANGUAGE;

// 언어 유효성 검사
if (!SUPPORTED_LANGUAGES.includes(currentLanguage)) {
  console.warn(`Unsupported language: ${currentLanguage}. Falling back to ${DEFAULT_LANGUAGE}`);
  currentLanguage = DEFAULT_LANGUAGE;
}

/**
 * 현재 설정된 언어의 메시지를 가져옵니다
 * @returns {Object} 현재 언어의 메시지 객체
 */
export function getMessages() {
  return messageMap[currentLanguage];
}

/**
 * 언어를 변경합니다
 * @param {string} lang - 변경할 언어 코드 (ko, en, ja)
 * @returns {boolean} 성공 여부
 */
export function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    console.error(`Unsupported language: ${lang}`);
    return false;
  }
  currentLanguage = lang;
  return true;
}

/**
 * 현재 설정된 언어를 반환합니다
 * @returns {string} 현재 언어 코드
 */
export function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * 특정 경로의 메시지를 가져옵니다
 * @param {string} path - 점으로 구분된 메시지 경로 (예: 'tools.generateFileName.description')
 * @param {Object} params - 치환 매개변수
 * @returns {string} 메시지 텍스트
 */
export function getMessage(path, params = {}) {
  const messages = getMessages();
  const keys = path.split('.');
  let value = messages;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      console.warn(`Message not found: ${path}`);
      return path; // 메시지를 찾을 수 없으면 경로를 반환
    }
  }
  
  // 파라미터 치환
  if (typeof value === 'string' && Object.keys(params).length > 0) {
    let result = value;
    for (const [key, val] of Object.entries(params)) {
      result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
    }
    return result;
  }
  
  return value;
}

/**
 * 언어별 메시지를 포맷팅합니다
 * @param {string} template - 템플릿 문자열
 * @param {Object} params - 치환 매개변수
 * @returns {string} 포맷팅된 문자열
 */
export function formatMessage(template, params = {}) {
  let result = template;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  }
  return result;
}

// 기본 내보내기
export default {
  getMessages,
  setLanguage,
  getCurrentLanguage,
  getMessage,
  formatMessage,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE
};