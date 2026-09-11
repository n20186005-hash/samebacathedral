'use client';
import { useTranslation } from 'react-i18next';

const GOVT_TOURISM_URL = 'https://georgia.travel';
const PATRIARCHATE_URL = 'https://patriarchate.ge';

export default function Sources() {
  const { t } = useTranslation();
  const items = t('sources.items', { returnObjects: true }) as string[];

  return (
    <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          {t('sources.title')}
        </h2>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {t('sources.text')}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/30">
          {t('sources.govtText')}{' '}
          <a
            href={GOVT_TOURISM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            {t('sources.govtPortal')}
          </a>
          {' · '}
          <a
            href={PATRIARCHATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            {t('sources.patriarchate')}
          </a>
          .
        </p>

        <ul className="space-y-4 mb-8">
          {Array.isArray(items) && items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400"
          >
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
        </ul>

        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            {t('sources.imageCredits.title')}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed italic">
            {t('sources.imageCredits.text')}
          </p>
        </div>
      </div>
    </section>
  );
}
