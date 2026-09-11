'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5298.6917377350355!2d44.81387181312111!3d41.69765157114227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cfd14a9a29b%3A0x9a438625d9da2c32!2z56ys5q-U5Yip5pav5Zyj5LiJ5LiA5Li75pWZ5bqn5aCC!5e1!3m2!1szh-CN!2s!4v1789091067392!5m2!1szh-CN!2s';

const GOVT_TOURISM_URL = 'https://georgia.travel';

export default function MapEmbed() {
  const { t } = useTranslation();
  const routes = t('transport.routes', { returnObjects: true }) as Array<{ mode: string; summary: string; detail: string; time?: string; price?: string }>;

  return (
    <section id="map" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('map.sectionTitle')}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mb-1">
            {t('map.address')}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            {t('map.phoneFull')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 [&_.gm-style-cc]:hidden [&_a[href*='maps.google']]:hidden">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={t('map.title')}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-amber-800 dark:text-amber-300 font-semibold mb-1">
                    {t('transport.quickCallLabel', 'Need live info?')}
                  </p>
                  <a href="tel:+995571002942" className="text-xl font-bold text-amber-900 dark:text-amber-100 tracking-tight">
                    +995 571 00 29 42
                  </a>
                </div>
              </div>
              <p className="text-xs text-amber-800/80 dark:text-amber-200/80 leading-relaxed">
                {t('transport.quickCallText', 'Call the cathedral office directly for today\'s service schedule, temporary closures or feast day changes.')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                    {t('map.attractionName')}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {t('map.address')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-4">
                {t('transport.title', 'How to Get from Freedom Square (Tavisuplebis Moedani)')}
              </p>
              <div className="space-y-5">
                {Array.isArray(routes) && routes.map((r, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-700 dark:text-neutral-300">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">{r.mode}</p>
                        {(r.time || r.price) && (
                          <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 tracking-wide">
                            {r.time && r.time}
                            {r.time && r.price && ' · '}
                            {r.price && r.price}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1 leading-snug">
                        {r.summary}
                      </p>
                      <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {r.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/WR4V932yRvQLWhos5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              {t('map.openMaps')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <Link
              href="/mass-schedule"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t('map.ctaMassSchedule', 'View Full Mass & Liturgy Schedule')}
            </Link>

            <a
              href={GOVT_TOURISM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              {t('map.govtPortal')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
