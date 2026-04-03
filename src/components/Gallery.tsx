'use client';
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const photos = Array.from({ length: 12 }, (_, i) => `/gallery/images (${i + 1}).jpg`);
const PHOTOS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(photos.length / PHOTOS_PER_PAGE);
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/qdNpHuRo5UrsWY7LA';

export default function Gallery() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getPhotosForPage = (page: number) => {
    const start = page * PHOTOS_PER_PAGE;
    return photos.slice(start, start + PHOTOS_PER_PAGE);
  };

  const goToPage = (page: number) => {
    setCurrentPage((page + TOTAL_PAGES) % TOTAL_PAGES);
  };

  const goToPrev = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null ? (prev - 1 + photos.length) % photos.length : 0);
    if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null ? (prev + 1) % photos.length : 0);
    if (e.key === 'Escape') setLightboxIndex(null);
  }, [lightboxIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentPhotos = getPhotosForPage(currentPage);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('gallery.title')}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {currentPhotos.map((url, idx) => {
            const actualIndex = currentPage * PHOTOS_PER_PAGE + idx;
            return (
              <button
                key={actualIndex}
                onClick={() => setLightboxIndex(actualIndex)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
              >
                <Image
                  src={url}
                  alt={t(`gallery.captions.${idx}`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <span className="text-white text-sm px-4 pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {t('gallery.viewOriginal')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={goToPrev}
            className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center text-neutral-700 dark:text-neutral-300"
            aria-label="Previous page"
          >
            <span className="text-2xl font-light">‹</span>
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center text-neutral-700 dark:text-neutral-300"
            aria-label="Next page"
          >
            <span className="text-2xl font-light">›</span>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>{t('gallery.photoSource')}</p>
          <p className="mt-1">
            {t('gallery.viewAll')}{' '}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t('gallery.clickHere')}
            </a>
          </p>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length); }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex]}
              alt={t(`gallery.captions.${lightboxIndex % PHOTOS_PER_PAGE}`)}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % photos.length); }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="absolute bottom-6 text-sm text-white/70">
            {lightboxIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}