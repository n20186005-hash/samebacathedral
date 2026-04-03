'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const photos = [
  'https://images.unsplash.com/photo-1565008576549-57569a49371d',
  'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22',
  'https://images.unsplash.com/photo-1567606404132-28c0bfc5ba87',
  'https://images.unsplash.com/photo-1596464716127-f2a82984de30',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e',
  'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
  'https://images.unsplash.com/photo-1548013146-72479768bada',
  'https://images.unsplash.com/photo-1555990793-da11153b2473',
];

export default function Gallery() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('gallery.title')}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((url, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
            >
              <Image
                src={`${url}?w=800&q=80`}
                alt={t(`gallery.captions.${i}`)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <span className="text-white text-sm px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {t(`gallery.captions.${i}`)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3]">
            <Image
              src={`${photos[lightbox]}?w=1600&q=90`}
              alt={t(`gallery.captions.${lightbox}`)}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="absolute bottom-6 text-sm text-white/70">
            {t(`gallery.captions.${lightbox}`)}
          </p>
        </div>
      )}
    </section>
  );
}
