'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const HERO_IMAGE = '/gallery/images (1).jpg';

export default function Hero() {
  const { t } = useTranslation();
  const tags = t('hero.tags', { returnObjects: true }) as string[];

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt={t('hero.imageAlt')}
        fill
        className="object-cover"
        priority
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/80" />

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-5xl mx-auto py-32">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-white/90 font-medium">
            {t('hero.rating')} · {t('hero.ratingCount')} · {t('hero.ratingSource')}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
          {t('hero.title')}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light mb-3 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <p className="text-xs sm:text-sm text-white/60 mb-3 max-w-3xl mx-auto leading-relaxed italic">
          {t('hero.breadcrumb')}
        </p>

        <p className="text-sm sm:text-base text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
          {t('hero.tagline')}
        </p>

        <p className="text-sm sm:text-base text-white/75 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t('hero.introParagraph')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-9">
          <div className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
            <svg className="w-4.5 h-4.5 text-amber-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60 font-semibold">{t('hero.infoHoursLabel', 'Opening Hours')}</p>
              <p className="text-sm text-white font-medium">{t('hero.infoHoursValue', 'Daily 08:00 — 20:00')}</p>
            </div>
          </div>
          <a
            href="tel:+995571002942"
            className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-amber-500/20 backdrop-blur-sm border border-amber-400/40 hover:bg-amber-500/30 transition-colors"
          >
            <svg className="w-4.5 h-4.5 text-amber-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.16em] text-amber-200 font-semibold">{t('hero.infoPhoneLabel', 'Call Cathedral')}</p>
              <p className="text-sm text-white font-bold tracking-wide">+995 571 00 29 42</p>
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/WR4V932yRvQLWhos5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
          >
            <svg className="w-4.5 h-4.5 text-amber-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60 font-semibold">{t('hero.infoAddressLabel', 'Address')}</p>
              <p className="text-sm text-white font-medium">{t('hero.infoAddressValue', 'MRX8+3H8 · Elia Hill')}</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <a
            href="https://maps.app.goo.gl/WR4V932yRvQLWhos5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {t('hero.viewOnMap', 'Open Map & Directions')}
          </a>
          <a
            href="#guide"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('hero.ctaTransport', 'How to get from Freedom Square')}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {Array.isArray(tags) && tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs text-white/70 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
