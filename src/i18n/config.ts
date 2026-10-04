import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import ka from './locales/ka.json';
import en from './locales/en.json';
import tr from './locales/tr.json';
import ru from './locales/ru.json';
import zhHant from './locales/zh-Hant.json';
import zhHans from './locales/zh-Hans.json';

export const DEFAULT_LANGUAGE = 'ka';

export const resources = {
  ka: { translation: ka },
  en: { translation: en },
  tr: { translation: tr },
  ru: { translation: ru },
  'zh-Hant': { translation: zhHant },
  'zh-Hans': { translation: zhHans },
};

export const getSavedLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || DEFAULT_LANGUAGE;
  }
  return DEFAULT_LANGUAGE;
};

export function createI18nInstance(initialLanguage: string = DEFAULT_LANGUAGE) {
  const i18n = createInstance();

  i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    initImmediate: false,
  });

  return i18n;
}
