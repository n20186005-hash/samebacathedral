'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocalizedAnchorPath, getLocalizedHomePath } from '@/lib/locale-routing';

const TIMELINE_PHOTO = '/gallery/images (13).jpg';
const CONSECRATION_PHOTO = '/gallery/images (5).jpg';

export default function HistorySection() {
  const { t, i18n } = useTranslation();
  const timeline = t('history.timeline', { returnObjects: true }) as Array<{ year: string; title: string; text: string }>;
  const chapters = t('history.chapters', { returnObjects: true }) as Array<{ heading: string; paragraphs: string[] }>;
  const homePath = getLocalizedHomePath(i18n.language);
  const guidePath = getLocalizedAnchorPath(i18n.language, 'guide');

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Header />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900/60 dark:to-neutral-950" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/30 text-xs font-medium tracking-wide text-amber-800 dark:text-amber-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {t('history.kicker', 'Deep Dive · Cultural Studies')}
          </div>
          <nav aria-label="breadcrumb" className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 tracking-wide">
            <Link href={homePath} className="hover:text-neutral-900 dark:hover:text-white transition-colors">{t('history.crumbHome', 'Home')}</Link>
            <span className="mx-2">/</span>
            <span>{t('history.crumbActive', 'History & Spiritual Context')}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('history.pageTitle', 'History & Significance of Holy Trinity Cathedral of Tbilisi')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {t('history.pageSubtitle', 'From post-Soviet national awakening to the consecration of Georgia\'s spiritual heart — the complete chronology, theological purpose, and living legacy of Sameba Cathedral.')}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>{t('history.metaPeriod', '1989 — 2004 · Ongoing')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>{t('history.metaRead', '12 min read')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>{t('history.metaSources', 'Cross-referenced · 4 primary sources')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-10">
              <article className="prose-neutral dark:prose-invert max-w-none">
                {Array.isArray(chapters) && chapters.map((ch, i) => (
                  <div key={i} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                      {ch.heading}
                    </h2>
                    <div className="space-y-4 text-[15px] sm:text-base leading-[1.9] text-neutral-700 dark:text-neutral-300">
                      {Array.isArray(ch.paragraphs) && ch.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <Image src={CONSECRATION_PHOTO} alt={t('history.sidePhotoAlt', 'Consecration day of Holy Trinity Cathedral — November 23, 2004')} fill className="object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                  <div className="absolute left-0 right-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-widest text-white/70 mb-2">{t('history.sidePhotoTag', '23 November 2004')}</p>
                    <p className="text-white text-sm font-medium leading-relaxed">{t('history.sidePhotoCaption', 'Consecration on St. George\'s Day by Catholicos-Patriarch Ilia II, with hierarchs of the worldwide Orthodox Church in attendance.')}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/30 space-y-4">
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">{t('history.readAlsoTitle', 'Continue your cultural tour')}</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/architecture" className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>{t('history.readAlsoArchitecture', 'Decipher Sameba Cathedral\'s architectural symbolism — cruciform plan, domes, and fresco program')}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href={guidePath} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>{t('history.readAlsoGuide', 'Practical visitor guide — dress code, transport, and nearby Narikala Fortress')}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/40 border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400 mb-4">
              {t('history.timelineKicker', 'Chronology · 15-year construction arc')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('history.timelineTitle', 'Constructing a National Cathedral — Milestones')}
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t('history.timelineIntro', 'A visual chronology from the 1989 national competition through the 2004 consecration, including the delayed post-Soviet political transition.')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300/0 via-amber-300/60 dark:via-amber-700/50 to-amber-300/0" aria-hidden="true" />
            <div className="space-y-10">
              {Array.isArray(timeline) && timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6 sm:gap-10">
                  <div className="relative flex-shrink-0 w-8 sm:w-12 flex flex-col items-center">
                    <span className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-neutral-950 border-2 border-amber-400/70 dark:border-amber-500/60 flex items-center justify-center shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    </span>
                  </div>
                  <div className="flex-1 pb-6 sm:pb-8">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                      <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 tracking-wide">{item.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 relative aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image src={TIMELINE_PHOTO} alt={t('history.timelinePhotoAlt', 'Panoramic view of Sameba Cathedral complex — bell tower, seminary, and surrounding monastery grounds')} fill className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t('history.timelinePhotoCaption', 'Beyond the main cathedral, the Sameba precinct houses a patriarchal residence, monastic quarters, a theological seminary, academy, library, and freestanding bell tower — functioning as the canonical seat of the Georgian Orthodox Patriarchate.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('history.ctaTitle', 'Planning a pilgrimage or cultural visit?')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {t('history.ctaSubtitle', 'Pair this historical reading with our practical visitor guide to make the most of your time at the cathedral.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={guidePath} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                {t('history.ctaGuide', 'Open Visitor Guide')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="/architecture" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                {t('history.ctaArchitecture', 'Read Architectural Symbology')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
