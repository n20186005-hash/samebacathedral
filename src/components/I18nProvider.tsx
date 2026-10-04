'use client';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createI18nInstance, DEFAULT_LANGUAGE, getSavedLanguage } from '../i18n/config';
import LocalizedHead from './LocalizedHead';

export default function I18nProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage?: string;
}) {
  const [i18n] = useState(() => createI18nInstance(initialLanguage ?? DEFAULT_LANGUAGE));

  useEffect(() => {
    const nextLanguage = initialLanguage ?? getSavedLanguage();

    if (i18n.language !== nextLanguage) {
      i18n.changeLanguage(nextLanguage);
    }

    // Initialize theme from localStorage
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);

    localStorage.setItem('language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, [i18n, initialLanguage]);

  return (
    <I18nextProvider i18n={i18n}>
      <LocalizedHead />
      {children}
    </I18nextProvider>
  );
}
