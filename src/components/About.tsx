'use client';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(highlights) && highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800"
            >
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
