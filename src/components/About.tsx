'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function About() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 p-6 rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/30">
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed text-center">
            {t('about.disclaimer')}
          </p>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 font-medium">
            {t('about.intro')}
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 mb-12">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('about.nearbyTitle')}
          </h3>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t('about.nearbyText')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/history"
            className="group block p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-amber-300/70 dark:hover:border-amber-700/50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-700 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z M8 14l2 2m4-8l8 8" />
                </svg>
              </div>
              <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400 mb-2">
              {t('about.deepDiveTag', 'Deep Dive')}
            </p>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
              {t('about.historyCTATitle', 'Complete History & Spiritual Significance')}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {t('about.historyCTADesc', 'From the 1989 national awakening through the 15-year construction arc to the 2004 consecration on St. George\'s Day — full chronology, theological purpose, and post-Soviet legacy.')}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 group-hover:gap-3 transition-all">
              {t('about.historyCTALink', 'Read the full 15-year chronology')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </Link>

          <Link
            href="/architecture"
            className="group block p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-emerald-300/70 dark:hover:border-emerald-700/50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400 mb-2">
              {t('architecture.kicker', 'Form & Symbolism')}
            </p>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
              {t('about.architectureCTATitle', 'Sameba Cathedral Architectural Symbolism Decoded')}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {t('about.architectureCTADesc', 'Cruciform plan, five-dome composition, 101-metre gilded cupola, underground baptistery chapels, fresco programme, and the Georgian-Byzantine synthesis of architect Archil Mindiashvili.')}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 group-hover:gap-3 transition-all">
              {t('about.architectureCTALink', 'Explore the architectural symbology')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
