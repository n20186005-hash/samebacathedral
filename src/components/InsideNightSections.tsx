'use client';
import { useTranslation } from 'react-i18next';
import EditorialNotice from '@/components/EditorialNotice';
import Image from 'next/image';
import Link from 'next/link';

const INSIDE_PHOTOS = [
  '/gallery/images (2).jpg',
  '/gallery/images (8).jpg',
  '/gallery/images (10).jpg',
  '/gallery/images (15).jpg',
];

const NIGHT_PHOTOS = [
  '/gallery/images (9).jpg',
  '/gallery/images (10).jpg',
  '/gallery/images (16).jpg',
  '/gallery/images (7).jpg',
];

export function InsideSection() {
  const { t } = useTranslation();
  const highlights = t('inside.highlights', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section id="inside" className="py-24 sm:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6"><EditorialNotice kind="legacy" />
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400 mb-4">
            {t('inside.kicker', 'Sameba Inside · Interior Views')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4 leading-tight">
            {t('inside.title', 'Inside Sameba Cathedral — Frescoes, Dome & Iconostasis')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t('inside.intro', 'A close reading of the cathedral interior: Pantocrator fresco 40 metres overhead, the gilded three-tier iconostasis, nine side chapels, and the polished stone floors where 15,000 worshippers gather for Georgian Orthodox liturgy.')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {INSIDE_PHOTOS.map((src, i) => (
            <figure key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 group">
              <Image
                src={src}
                alt={t(`inside.photoAlt.${i}`, {
                  defaultValue: `Sameba Cathedral interior view ${i + 1} — frescoes, iconostasis and central dome inside Holy Trinity Cathedral Tbilisi`,
                })}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-[11px] sm:text-xs text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {t(`inside.photoCaption.${i}`, { defaultValue: 'Interior of Sameba Cathedral — frescoes and central dome' })}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.isArray(highlights) && highlights.map((h, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-rose-200/40 dark:border-rose-900/40 bg-rose-50/50 dark:bg-rose-950/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {t('inside.tipTitle', 'Interior Photography & Etiquette')}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
                {t('inside.tipText', 'Photography is allowed inside without flash. Please keep voices low during divine liturgy. Mobile phones should be silenced and never used near the iconostasis or sanctuary during the Eucharistic prayers.')}
              </p>
            </div>
            <Link
              href="/architecture#inside-focus"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium transition-colors self-start"
            >
              {t('inside.frescoLink', 'Full fresco programme')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AtNightSection() {
  const { t } = useTranslation();
  const features = t('night.features', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section id="night" className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-neutral-950 to-neutral-950" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
            {t('night.kicker', 'Sameba At Night · Lights & Panorama')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {t('night.title', 'Sameba Cathedral at Night — Golden Dome Over Tbilisi')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 dark:text-neutral-300 leading-relaxed">
            {t('night.intro', 'After sunset the 101-metre gilded cupola of Sameba Cathedral is lit from below with warm floodlights, creating a silhouette visible across the entire Tbilisi basin and one of the city\'s most photographed night panoramas.')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {NIGHT_PHOTOS.map((src, i) => (
            <figure key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src={src}
                alt={t(`night.photoAlt.${i}`, {
                  defaultValue: `Sameba Cathedral night view ${i + 1} — illuminated golden dome against Tbilisi skyline`,
                })}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-[11px] sm:text-xs text-white/90 font-medium">
                {t(`night.photoCaption.${i}`, { defaultValue: 'Sameba Cathedral night lights — golden dome panorama over Tbilisi' })}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {Array.isArray(features) && features.map((f, i) => (
            <div key={i} className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-400/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t('night.tipTitle', 'Best Night Viewpoint Tips')}
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed max-w-2xl">
                {t('night.tipText', 'The two most popular vantage points are Narikala Fortress (20 minute walk uphill from Rike Park) and the Mother of Georgia statue on Sololaki ridge. Blue hour 20 minutes after sunset gives the perfect mix of warm cathedral light and deep indigo sky.')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 self-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs text-amber-300 border border-white/10">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
                {t('night.tipBlueHour', 'Blue hour: sunset + 20 min')}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs text-amber-300 border border-white/10">
                {t('night.tipDuration', 'Stay: 45–60 min')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
