import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export const DEFAULT_LANGUAGE = 'ka';

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
    initAsync: false,
  });

  return i18n;
}
