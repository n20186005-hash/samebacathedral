'use client';
import { useTranslation } from 'react-i18next';

export default function Sources() {
  const { t } = useTranslation();
  const items = t('sources.items', { returnObjects: true }) as string[];

  return (
    <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          {t('sources.title')}
        </h2>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
          {t('sources.text')}
        </p>

        <ul className="space-y-4">
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
      </div>
    </section>
  );
}
