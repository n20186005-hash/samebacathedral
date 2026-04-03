'use client';
import { useTranslation } from 'react-i18next';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.0594835819347!2d44.813877177341524!3d41.69765157126215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cfd14a9a29b%3A0x9a438625d9da2c32!2sHoly%20Trinity%20Cathedral%20of%20Tbilisi!5e0!3m2!1sen!2sus!4v1775120624667!5m2!1sen!2sus';

export default function MapEmbed() {
  const { t } = useTranslation();

  return (
    <section id="map" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('map.title')}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            {t('map.address')}
          </p>
        </div>

        {/* Map + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 [&_.gm-style-cc]:hidden [&_a[href*='maps.google']]:hidden">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('map.title')}
              className="w-full"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t('map.address')}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t('map.phone')}
                </p>
              </div>
            </div>

            {/* Open in Google Maps */}
            <a
              href="https://maps.app.goo.gl/WR4V932yRvQLWhos5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              {t('map.openMaps')}
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
