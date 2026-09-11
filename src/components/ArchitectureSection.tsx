'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EXTERIOR_PHOTO = '/gallery/images (4).jpg';
const DOME_INTERIOR = '/gallery/images (2).jpg';
const COMPLEX_AERIAL = '/gallery/images (7).jpg';

export default function ArchitectureSection() {
  const { t } = useTranslation();
  const symbols = t('architecture.symbols', { returnObjects: true }) as Array<{ name: string; description: string }>;
  const sections = t('architecture.sections', { returnObjects: true }) as Array<{ heading: string; paragraphs: string[] }>;
  const floorplan = t('architecture.floorplan', { returnObjects: true }) as Array<{ zone: string; detail: string }>;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Header />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900/60 dark:to-neutral-950" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-50/70 dark:bg-emerald-950/30 text-xs font-medium tracking-wide text-emerald-800 dark:text-emerald-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {t('architecture.kicker', 'Form & Symbolism · Architectural Treatise')}
          </div>
          <nav aria-label="breadcrumb" className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 tracking-wide">
            <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">{t('architecture.crumbHome', 'Home')}</Link>
            <span className="mx-2">/</span>
            <span>{t('architecture.crumbActive', 'Architecture & Symbolism')}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('architecture.pageTitle', 'Architecture & Sacred Symbolism of Sameba Cathedral')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {t('architecture.pageSubtitle', 'A guided reading of the cruciform plan, five-dome composition, 101-metre gilded cupola, fresco program, and Georgian-Byzantine synthesis — decoding the theological language behind Tbilisi\'s Holy Trinity Cathedral.')}
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            {[
              { label: t('architecture.statHeightLabel', 'Total Height'), value: t('architecture.statHeight', '101 m') },
              { label: t('architecture.statAreaLabel', 'Floor Area'), value: t('architecture.statArea', '3,000 m²') },
              { label: t('architecture.statDomesLabel', 'Domes'), value: t('architecture.statDomes', '5 (1 + 4)') },
              { label: t('architecture.statCapacityLabel', 'Capacity'), value: t('architecture.statCapacity', '15,000') },
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40">
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{s.value}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-12">
              {Array.isArray(sections) && sections.map((sec, i) => (
                <section key={i} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 text-[15px] sm:text-base leading-[1.9] text-neutral-700 dark:text-neutral-300">
                    {Array.isArray(sec.paragraphs) && sec.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <figure className="space-y-3">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                    <Image src={DOME_INTERIOR} alt={t('architecture.domePhotoAlt', 'Interior view of the central dome — Pantocrator fresco and supporting drum at Sameba Cathedral')} fill className="object-cover" loading="lazy" />
                  </div>
                  <figcaption className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed px-1">
                    {t('architecture.domePhotoCaption', 'Central dome drum with the Pantocrator Christ fresco — four auxiliary corner domes echo the five-dome canonical scheme symbolic of Christ and the Four Evangelists.')}
                  </figcaption>
                </figure>

                <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-4">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {t('architecture.symbolsTitle', 'Sacred Symbolism at a Glance')}
                  </h3>
                  <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {Array.isArray(symbols) && symbols.map((s, i) => (
                      <li key={i} className="py-3 first:pt-0 last:pb-0">
                        <p className="text-sm font-medium text-neutral-900 dark:text-white mb-1">{s.name}</p>
                        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{s.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/30 space-y-4">
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">{t('architecture.readAlsoTitle', 'Continue your cultural tour')}</p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/history" className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-700 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>{t('architecture.readAlsoHistory', 'Full 15-year construction chronology and consecration ceremony of Holy Trinity Cathedral')}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#guide" className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-700 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>{t('architecture.readAlsoGuide', 'Visitor dress code, photography rules, and access to underground baptistery chapels')}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400 mb-4">
                {t('architecture.planKicker', 'Spatial Hierarchy · Cruciform Liturgy')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                {t('architecture.planTitle', 'Floor Plan — Liturgical Zones & Nine Chapels')}
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                {t('architecture.planIntro', 'Sameba Cathedral is organised around a Greek-cross (cruciform) nave. Below are the principal functional zones, including the five underground chapels and the elevated sanctuary (sanctuary) reserved for the celebrating clergy.')}
              </p>
              <dl className="space-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-6">
                {Array.isArray(floorplan) && floorplan.map((f, i) => (
                  <div key={i} className="grid grid-cols-[8rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 items-start">
                    <dt className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 pt-1 tracking-wide">
                      {f.zone}
                    </dt>
                    <dd className="text-sm sm:text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {f.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <Image src={EXTERIOR_PHOTO} alt={t('architecture.exteriorPhotoAlt', 'Exterior facade — stone facing, carved arches, and gold-gilded central dome of Sameba Cathedral')} fill className="object-cover" loading="lazy" />
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed px-1">
                {t('architecture.exteriorPhotoCaption', 'Light-toned natural stone cladding with recessed Georgian-style arched bays. The 7.5-metre gilded cross on the central dome is visible from most vantage points across the Tbilisi basin.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('architecture.complexTitle', 'The Sameba Cathedral Precinct — Beyond the Main Church')}
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t('architecture.complexIntro', 'The cathedral does not stand alone. The Elia Hill precinct forms an integrated monastic and administrative quarter, extending the sacred geometry of the main church into a lived landscape of prayer, study, and governance.')}
            </p>
          </div>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image src={COMPLEX_AERIAL} alt={t('architecture.complexPhotoAlt', 'Aerial perspective of the Sameba Cathedral complex showing surrounding monastery, seminary, gardens, and bell tower')} fill className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                {t('architecture.complexPhotoCaption', 'Precinct inventory (clockwise from the cathedral): free-standing bell tower, monastic cells and refectory, theological academy and seminary, patriarchal administrative residence, museum, conference hall, landscaped gardens, and perimeter walls with dedicated entry pavilions.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('architecture.ctaTitle', 'Travelling for spiritual or architectural reasons?')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {t('architecture.ctaSubtitle', 'Combine this architectural reading with our practical visitor guide — dress code, underground chapels, and photography etiquette all included.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#guide" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                {t('architecture.ctaGuide', 'Open Visitor Guide')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="/history" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                {t('architecture.ctaHistory', 'Read Full Construction History')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
