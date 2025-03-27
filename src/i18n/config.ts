// Global Language Map
export const langMap: Record<string, string[]> = {
  'en': ['en-US'],
}

// Waline Language Map
// https://waline.js.org/guide/i18n.html
export const walineLocaleMap: Record<string, string> = {
  'en': 'en-US',
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
