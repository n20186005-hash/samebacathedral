'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PHONE_DISPLAY = '+995 571 00 29 42';
const PHONE_TEL = '+995571002942';
const MAPS_URL = 'https://maps.app.goo.gl/WR4V932yRvQLWhos5';

type Route = { mode: string; summary: string; detail?: string; time?: string; price?: string };

/**
 * Prominent, above-the-fold practical band for travellers already in Georgia:
 * opening hours, a tap-to-call number and the live bus / metro / taxi routes
 * from Freedom Square (Tavisuplebis Moedani) to Sameba Cathedral.
 */
export default function PracticalInfo() {
  const { t } = useTranslation();
  const routes = t('transport.routes', { returnObjects: true }) as Route[];

  return (
    <section
      id="practical"
      className="bg-neutral-50 dark:bg-neutral-900/40 border-y border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400 mb-3">
            {t('transport.quickTitle', 'Getting Here from Freedom Square')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
            {t('transport.quickTitle', 'Getting Here from Freedom Square')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t(
              'transport.quickSubtitle',
              'The fastest ways to reach the cathedral on foot, by bus, metro or taxi',
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400 font-semibold">
                {t('hero.infoHoursLabel', 'Opening Hours')}
              </p>
              <p className="text-sm text-neutral-900 dark:text-white font-semibold">
                {t('hero.infoHoursValue', 'Daily 08:00 — 20:00')}
              </p>
            </div>
          </div>

          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
          >
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300 font-semibold">
                {t('hero.infoPhoneLabel', 'Call Cathedral')}
              </p>
              <p className="text-sm text-neutral-900 dark:text-white font-bold tracking-wide">{PHONE_DISPLAY}</p>
            </div>
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400 font-semibold">
                {t('hero.infoAddressLabel', 'Address')}
              </p>
              <p className="text-sm text-neutral-900 dark:text-white font-semibold">
                {t('hero.infoAddressValue', 'MRX8+3H8 · Elia Hill')}
              </p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.isArray(routes) &&
                routes.map((r, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <p className="text-sm font-bold text-neutral-900 dark:text-white">{r.mode}</p>
                      {(r.time || r.price) && (
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                          {r.time}
                          {r.time && r.price && ' · '}
                          {r.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 leading-snug">
                      {r.summary}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
              <p className="text-xs uppercase tracking-widest text-amber-800 dark:text-amber-300 font-semibold mb-2">
                {t('transport.quickCallLabel', 'Need live info?')}
              </p>
              <p className="text-xs text-amber-800/80 dark:text-amber-200/80 leading-relaxed mb-3">
                {t(
                  'transport.quickCallText',
                  "Call the cathedral office directly for today's service schedule, temporary closures or feast day changes.",
                )}
              </p>
              <a href={`tel:${PHONE_TEL}`} className="text-lg font-bold text-amber-900 dark:text-amber-100 tracking-tight">
                {PHONE_DISPLAY}
              </a>
            </div>

            <Link
              href="/mass-schedule"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t('map.ctaMassSchedule', 'View Full Mass & Liturgy Schedule')}
            </Link>

            <a
              href="#map"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-semibold hover:bg-white dark:hover:bg-neutral-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {t('map.openMaps', 'Open in Google Maps')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
