'use client';
import notes from '@/data/editorial-notes.json';
import { useTranslation } from 'react-i18next';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export default function Reviews() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language in notes ? i18n.language : 'ka') as keyof typeof notes;
  const reviewsList = t('reviews.reviewsList', { returnObjects: true }) as Review[];

  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('reviews.title')}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            {t('reviews.declaration')}
          </p>
        </div>

        <details className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-5"><summary className="cursor-pointer font-medium mb-5">{notes[lang].archive}</summary>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.isArray(reviewsList) && reviewsList.map((review, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                    {review.date}
                  </p>
                </div>

              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        </details>
        {/* Google Maps reviews link */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/WR4V932yRvQLWhos5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {t('reviews.moreReviews')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
