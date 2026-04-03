import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ka from './locales/ka.json';
import en from './locales/en.json';
import ru from './locales/ru.json';
import zhHant from './locales/zh-Hant.json';
import zhHans from './locales/zh-Hans.json';

const resources = {
  ka: { translation: ka },
  en: { translation: en },
  ru: { translation: ru },
  'zh-Hant': { translation: zhHant },
  'zh-Hans': { translation: zhHans },
};

// Get saved language from localStorage (client-side only)
const getSavedLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'ka';
  }
  return 'ka';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
