'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HTML_LANG: Record<string, string> = {
  ka: 'ka',
  en: 'en',
  tr: 'tr',
  ru: 'ru',
  'zh-Hant': 'zh-Hant',
  'zh-Hans': 'zh-Hans',
};

const OG_LOCALE: Record<string, string> = {
  ka: 'ka_GE',
  en: 'en_US',
  tr: 'tr_TR',
  ru: 'ru_RU',
  'zh-Hant': 'zh_TW',
  'zh-Hans': 'zh_CN',
};

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keeps the document <title>, meta description, Open Graph / Twitter card
 * and <html lang> in sync with the currently selected language.
 *
 * This is what lets a single-URL site expose localized meta titles and
 * descriptions for Georgian (ka), Turkish (tr) and the other locales.
 */
export default function LocalizedHead() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || 'ka';
    const title = t('meta.title', {
      defaultValue: 'Sameba Cathedral Tbilisi: Hours, Dress Code & Visitor Guide 2026',
    });
    const description = t('meta.description', {
      defaultValue:
        'Sameba Cathedral (Holy Trinity Cathedral Tbilisi) — 2026 opening hours, dress code, mass times, bus & taxi from Freedom Square, interior frescoes and night lights. Address: MRX8+3H8 · Tel +995 571 00 29 42.',
    });

    document.title = title;
    document.documentElement.lang = HTML_LANG[lang] || 'en';

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', OG_LOCALE[lang] || 'en_US');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [t, i18n.language]);

  return null;
}
