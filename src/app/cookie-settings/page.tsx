'use client';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieSettingsPage() {
  const { t } = useTranslation();
  const [analytics, setAnalytics] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookiePreferences');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.analytics) setAnalytics(true);
        if (parsed.thirdParty) setThirdParty(true);
      }
    } catch { /* ignore */ }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem('cookiePreferences', JSON.stringify({ essential: true, analytics, thirdParty }));
    } catch { /* ignore */ }
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            {t('cookieSettings.backHome', '← Back to Home')}
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('cookieSettings.title', 'Cookie Settings')}</h1>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12">
          {t('cookieSettings.intro', 'Manage your cookie preferences below. Essential cookies are required for the site to function.')}
        </p>

        <div className="space-y-6">
          {/* Essential - Always Active */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{t('cookieSettings.essential.title', 'Essential Cookies')}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t('cookieSettings.essential.description', 'Required for language preference, theme selection, and basic site functionality. These cannot be disabled.')}
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                <div className="w-12 h-6 rounded-full bg-blue-500 relative">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-white shadow" />
                </div>
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                  {t('cookieSettings.essential.status', 'Always Active')}
                </span>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{t('cookieSettings.analytics.title', 'Analytics Cookies')}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t('cookieSettings.analytics.description', 'Help us understand how visitors interact with the site. Data is anonymized and used only to improve the visitor experience.')}
                </p>
              </div>
              <button type="button" onClick={() => { setAnalytics(!analytics); setSaved(false); }}
                className={`flex-shrink-0 mt-1 w-12 h-6 rounded-full relative transition-colors duration-200 ${analytics ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                aria-label="Toggle analytics cookies">
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200 ${analytics ? 'left-6' : 'left-0.5'}`} />
              </button>
            </div>
          </div>

          {/* Third-Party */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{t('cookieSettings.thirdParty.title', 'Third-Party Cookies')}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t('cookieSettings.thirdParty.description', 'Used by embedded services like Google Maps. Disabling may affect map functionality.')}
                </p>
              </div>
              <button type="button" onClick={() => { setThirdParty(!thirdParty); setSaved(false); }}
                className={`flex-shrink-0 mt-1 w-12 h-6 rounded-full relative transition-colors duration-200 ${thirdParty ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                aria-label="Toggle third-party cookies">
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200 ${thirdParty ? 'left-6' : 'left-0.5'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="mt-10 flex items-center gap-4">
          <button type="button" onClick={handleSave}
            className="px-8 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
            {t('cookieSettings.save', 'Save Preferences')}
          </button>
          {saved && <span className="text-sm font-medium text-green-600 dark:text-green-400">✓</span>}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <Link href="/privacy-policy" className="text-sm text-amber-700 dark:text-amber-400 underline hover:opacity-80 transition-opacity">
            {t('footer.privacy', 'Privacy Policy')}
          </Link>
        </div>
      </div>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">{t('footer.rights', '© 2026 Sameba Cathedral Guide · All rights reserved.')}</p>
          <div className="flex items-center gap-6 text-xs text-neutral-400 dark:text-neutral-500">
            <Link href="/privacy-policy" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{t('footer.privacy', 'Privacy Policy')}</Link>
            <Link href="/terms-of-service" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{t('footer.terms', 'Terms of Service')}</Link>
            <span className="font-medium text-neutral-600 dark:text-neutral-300">{t('footer.cookies', 'Cookie Settings')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
