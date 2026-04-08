'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Top bar */}
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            {t('privacy.backHome', '← Back to Home')}
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{t('privacy.title', 'Privacy Policy')}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-12">{t('privacy.lastUpdated', 'Last updated: April 2026')}</p>

        <div className="space-y-10">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t('privacy.intro', 'This privacy policy explains how we collect, use, and protect your information when you visit our website.')}
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('privacy.sections.0.title', 'Information We Collect')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('privacy.sections.0.content', 'We collect minimal data: basic analytics (page views, browser type, country), language preferences stored locally, and theme preferences stored locally. We do not collect personal information unless you contact us directly.')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('privacy.sections.1.title', 'Cookies')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('privacy.sections.1.content', 'We use essential cookies for language and theme preferences. Optional analytics cookies help us understand site usage. You can manage cookie preferences in Cookie Settings.')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('privacy.sections.2.title', 'Third-Party Services')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('privacy.sections.2.content', 'We embed Google Maps for location display. Google\'s own privacy policy applies to map interactions. Photos are sourced from Unsplash and loaded from their CDN.')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('privacy.sections.3.title', 'Contact')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('privacy.sections.3.content', 'For privacy concerns, contact us at n20186005@gmail.com.')}
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {t('tripDisclaimer')}
          </p>
        </div>
      </div>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">{t('footer.rights', '© 2026 Sameba Cathedral Guide · All rights reserved.')}</p>
          <div className="flex items-center gap-6 text-xs text-neutral-400 dark:text-neutral-500">
            <span className="font-medium text-neutral-600 dark:text-neutral-300">{t('footer.privacy', 'Privacy Policy')}</span>
            <Link href="/terms-of-service" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{t('footer.terms', 'Terms of Service')}</Link>
            <Link href="/cookie-settings" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{t('footer.cookies', 'Cookie Settings')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
