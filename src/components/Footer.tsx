'use client';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white mb-2">
                {t('footer.officialName')}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t('footer.georgianName')}
              </p>
            </div>
            <div>
              <p className="font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t('footer.addressLabel')}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t('map.address')}
              </p>
            </div>
            <div>
              <p className="font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t('footer.contactLabel')}
              </p>
              <a href="tel:+995571002942" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                {t('map.phone')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              {t('footer.support')}{' '}
              <a
                href="mailto:n20186005@gmail.com"
                className="text-neutral-900 dark:text-white hover:underline"
              >
                n20186005@gmail.com
              </a>
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg mb-4">
              {t('footer.disclaimer')}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed max-w-lg italic">
              {t('footer.imageCopyright')}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="/privacy-policy"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {t('footer.terms')}
            </a>
            <a
              href="/cookie-settings"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {t('footer.cookies')}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            {t('footer.rights')}
          </p>
          <a
            href="mailto:n20186005@gmail.com"
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            n20186005@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
