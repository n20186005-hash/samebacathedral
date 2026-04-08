'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            {t('terms.backHome', '← Back to Home')}
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{t('terms.title', 'Terms of Service')}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-12">{t('terms.lastUpdated', 'Last updated: April 2026')}</p>

        <div className="space-y-10">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t('terms.intro', 'By using this website, you agree to the following terms.')}
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('terms.sections.0.title', 'Purpose')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('terms.sections.0.content', 'This site provides tourism information about Sameba Cathedral for educational and informational purposes. We are not affiliated with the cathedral administration or the Georgian Orthodox Church.')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('terms.sections.1.title', 'Accuracy')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('terms.sections.1.content', 'Information is sourced from public resources and may not always be current. We recommend verifying opening hours and access details before your visit via Google Maps or official tourism channels.')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('terms.sections.2.title', 'Intellectual Property')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('terms.sections.2.content', 'Site design and original content are protected. Photos are sourced from Unsplash under their license. Google Maps content is subject to Google\'s terms.')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t('terms.sections.3.title', 'Limitation of Liability')}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('terms.sections.3.content', 'We are not liable for any damages arising from the use of information on this site. Travel and visit decisions are your own responsibility.')}
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
            <Link href="/privacy-policy" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{t('footer.privacy', 'Privacy Policy')}</Link>
            <span className="font-medium text-neutral-600 dark:text-neutral-300">{t('footer.terms', 'Terms of Service')}</span>
            <Link href="/cookie-settings" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{t('footer.cookies', 'Cookie Settings')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
