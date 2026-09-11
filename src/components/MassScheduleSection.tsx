'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MassScheduleSection() {
  const { t } = useTranslation();
  const services = t('mass.services', { returnObjects: true }) as Array<{ day: string; time: string; service: string; language?: string }>;
  const feasts = t('mass.feasts', { returnObjects: true }) as Array<{ name: string; date: string; note: string }>;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Header />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 to-white dark:from-indigo-950/40 dark:to-neutral-950" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200/70 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-950/40 text-xs font-medium tracking-wide text-indigo-800 dark:text-indigo-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            {t('mass.kicker', 'Liturgy Schedule · Georgian Orthodox')}
          </div>
          <nav aria-label="breadcrumb" className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 tracking-wide">
            <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">{t('mass.crumbHome', 'Home')}</Link>
            <span className="mx-2">/</span>
            <span>{t('mass.crumbActive', 'Mass Schedule & Liturgy')}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('mass.pageTitle', 'Holy Trinity Cathedral Tbilisi Mass Schedule — Liturgy & Divine Services')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {t('mass.pageSubtitle', '2026 weekly divine liturgy, vespers and feast-day services at Sameba Cathedral (Holy Trinity Cathedral of Tbilisi, Georgia). Dress code, confession and communion instructions included.')}
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/40">
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">{t('mass.infoPhone', 'Phone')}</p>
              <a href="tel:+995571002942" className="text-base font-semibold text-neutral-900 dark:text-white">+995 571 00 29 42</a>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/40">
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">{t('mass.infoLocation', 'Address')}</p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug">MRX8+3H8, Tbilisi · Elia Hill</p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/40">
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">{t('mass.infoAttendance', 'Daily')}</p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug">{t('mass.infoAttendanceValue', '8:00 — 20:00 · Free entry')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <article className="lg:col-span-3 space-y-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400 mb-4">
                {t('mass.scheduleKicker', 'Weekly Schedule')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-neutral-900 dark:text-white">
                {t('mass.scheduleTitle', 'Weekly Divine Liturgy & Vespers')}
              </h2>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-900/60">
                    <tr>
                      <th className="text-left text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold py-4 px-5 w-28">
                        {t('mass.thDay', 'Day')}
                      </th>
                      <th className="text-left text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold py-4 px-5 w-32">
                        {t('mass.thTime', 'Time')}
                      </th>
                      <th className="text-left text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold py-4 px-5">
                        {t('mass.thService', 'Service / Language')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {Array.isArray(services) && services.map((s, i) => (
                      <tr key={i} className="hover:bg-neutral-50/60 dark:hover:bg-neutral-900/30 transition-colors">
                        <td className="py-4 px-5 font-semibold text-neutral-900 dark:text-white">{s.day}</td>
                        <td className="py-4 px-5 text-indigo-700 dark:text-indigo-300 font-mono text-[13px]">{s.time}</td>
                        <td className="py-4 px-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          <span className="block font-medium text-neutral-900 dark:text-white mb-0.5">{s.service}</span>
                          {s.language && <span className="text-xs text-neutral-500 dark:text-neutral-400">{s.language}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed italic">
                {t('mass.scheduleNote', 'Note: Service times may be extended on major feast days. Confirm by calling +995 571 00 29 42 before planning a pilgrimage visit.')}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-400 mb-4">
                {t('mass.feastKicker', 'Major Feasts 2026')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-neutral-900 dark:text-white">
                {t('mass.feastTitle', 'Principal Feast Days & Pilgrimage')}
              </h2>
              <ul className="space-y-4">
                {Array.isArray(feasts) && feasts.map((f, i) => (
                  <li key={i} className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
                    <div className="flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-widest text-indigo-700 dark:text-indigo-400 font-semibold">
                        {f.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-neutral-900 dark:text-white mb-1 leading-snug">{f.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{f.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
                {t('mass.prepTitle', 'Confession, Communion & Preparation')}
              </h2>
              <ol className="space-y-4 text-sm sm:text-[15px] text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mt-0.5">1</span>
                  <span>{t('mass.prep.0', 'Fast from food and drink from midnight before the liturgy if you intend to receive Holy Communion — fasting exemption applies to pregnant women, the ill, and young children.')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mt-0.5">2</span>
                  <span>{t('mass.prep.1', 'Attend evening vespers on the eve and go to confession to one of the hearing priests in the side chapels; confession queues are shortest on Wednesday and Friday evenings.')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mt-0.5">3</span>
                  <span>{t('mass.prep.2', 'Dress modestly: women — headscarf, long sleeves, long skirt (borrow free at the narthex); men — long trousers, shirt or modest casual top, no shorts, no hats inside.')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center mt-0.5">4</span>
                  <span>{t('mass.prep.3', 'Approach the Holy Doors with arms crossed over your chest; after receiving Communion, drink blessed warm wine and water (antidoron) at the side table and do not leave the church before the final blessing.')}</span>
                </li>
              </ol>
            </div>
          </article>

          <aside className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 rounded-2xl border border-dashed border-indigo-300/60 dark:border-indigo-800/60 bg-white dark:bg-neutral-900/40 space-y-5">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{t('mass.quickTitle', 'Quick Facts for Pilgrims')}</h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <dt className="w-24 flex-shrink-0 text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pt-1">
                      {t('mass.quickEntry', 'Entry')}
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">{t('mass.quickEntryVal', 'Free of charge · no ticket needed')}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <dt className="w-24 flex-shrink-0 text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pt-1">
                      {t('mass.quickWheelchair', 'Access')}
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">{t('mass.quickWheelchairVal', 'Wheelchair ramp at south door · elevator to gallery')}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <dt className="w-24 flex-shrink-0 text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pt-1">
                      {t('mass.quickLanguage', 'Languages')}
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">{t('mass.quickLanguageVal', 'Georgian · occasional panikhida in Russian / Greek')}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <dt className="w-24 flex-shrink-0 text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pt-1">
                      {t('mass.quickShop', 'Candles & Shop')}
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">{t('mass.quickShopVal', 'Candle stands in narthex · small religious shop inside')}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <dt className="w-24 flex-shrink-0 text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pt-1">
                      {t('mass.quickParking', 'Parking')}
                    </dt>
                    <dd className="text-neutral-700 dark:text-neutral-300">{t('mass.quickParkingVal', 'Free on-site on weekdays · shared overflow on Sundays')}</dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-4">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{t('mass.continueTitle', 'Continue Your Visit')}</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/#guide" className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-700 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      <span>{t('mass.continueGuide', 'Dress code, transport from Freedom Square, Narikala & Rike Park — full practical guide')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/history" className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-700 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      <span>{t('mass.continueHistory', '2004 consecration on St. George\'s Day — the full 15-year chronology of Sameba Cathedral')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#inside" className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-700 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      <span>{t('mass.continueInside', 'Interior frescoes, Pantocrator dome and 9 chapels — photo gallery inside Sameba Cathedral')}</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <a
                href="tel:+995571002942"
                className="block p-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-center"
              >
                <p className="text-xs uppercase tracking-widest text-indigo-200 mb-1">{t('mass.callLabel', 'Call the Cathedral Office')}</p>
                <p className="text-lg font-bold tracking-tight">+995 571 00 29 42</p>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
