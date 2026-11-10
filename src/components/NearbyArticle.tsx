import I18nProvider from '@/components/I18nProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { nearbyData, nearbyLabels, nearbyMaps, nearbySlugs, nearbySources, type NearbyLocale, type NearbySlug } from '@/lib/nearby';
import { localizedPath } from '@/lib/locale-routing';

export default function NearbyArticle({ lang, slug }: { lang: NearbyLocale; slug: NearbySlug }) {
  const article = nearbyData[lang][slug];
  const labels = nearbyLabels[lang];
  const sections = [['intro', 1], ['tips', 2], ['highlights', 3], ['about', 4], ['transport', 6], ['culture', 7], ['route', 8], ['notices', 9], ['photos', 10]] as const;
  const rating = { 'metekhi-church': '4.7 / 5 · 3,316', 'bridge-of-peace': '4.7 / 5 · 18,942', 'rike-park': '4.7 / 5 · 15,945' }[slug];
  const url = `https://samebacathedral.com${localizedPath(lang, `/nearby/${slug}/`)}`;
  return <I18nProvider initialLanguage={lang}>
    <main lang={lang} className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <article className="nearby-article max-w-4xl mx-auto px-6 pt-36 pb-20">
        <header className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-10">
          <a href={localizedPath(lang, '/')} className="text-accent hover:underline">{labels[20]}</a>
          <p className="mt-8 mb-4 text-sm uppercase tracking-wider text-neutral-500">{labels[0]}</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">{article.title}</h1>
          <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">{article.tagline}</p>
          <p className="mt-5 text-sm text-neutral-500">{labels[21]} · <span dir="ltr">{rating}</span></p>
          <p className="mt-3 text-sm text-neutral-500">{labels[22]}</p>
          <a href={nearbyMaps[slug]} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3">{labels[17]}</a>
        </header>
        {sections.map(([key, label]) => <section key={key} className="mb-10" aria-labelledby={`nearby-${key}`}>
          <h2 id={`nearby-${key}`} className="text-2xl font-semibold mb-4">{labels[label]}</h2>
          {key === 'route' ? <ol className="list-decimal pl-6 space-y-3">{article.route.split(' / ').map((step, index) => <li key={index} className="leading-8 text-neutral-600 dark:text-neutral-300">{step.replace(/^\d+\. /, '')}</li>)}</ol> : <p className="leading-8 text-neutral-600 dark:text-neutral-300">{article[key]}</p>}
          {key === 'about' && <div className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5"><h3 className="font-semibold mb-3">{labels[5]}</h3><dl className="grid sm:grid-cols-[8rem_1fr] gap-3"><dt>{labels[15]}</dt><dd>{article.title.split(':')[0]}</dd><dt>{labels[16]}</dt><dd>{article.address}</dd></dl></div>}
          {key === 'transport' && <a className="text-accent underline inline-block mt-3" href="https://ttc.com.ge/en" target="_blank" rel="noopener noreferrer">{labels[23]}</a>}
        </section>)}
        <section className="mb-10"><h2 className="text-2xl font-semibold mb-4">{labels[11]}</h2><p className="leading-8 text-neutral-600 dark:text-neutral-300">{labels[18]}</p><a className="text-accent underline" href={nearbyMaps[slug]} target="_blank" rel="noopener noreferrer">Google Maps</a></section>
        <section className="mb-10"><h2 className="text-2xl font-semibold mb-4">{labels[12]}</h2><p className="leading-8 mb-4">{article.address}</p><a className="text-accent underline" href={nearbyMaps[slug]} target="_blank" rel="noopener noreferrer">{labels[17]}</a></section>
        <aside className="border-t border-neutral-200 dark:border-neutral-800 pt-8 mb-10"><h2 className="text-2xl font-semibold mb-4">{labels[19]}</h2><ul className="space-y-3"><li><a className="text-accent underline" href={localizedPath(lang, '/')}>{labels[20]}</a></li>{nearbySlugs.filter(item => item !== slug).map(item => <li key={item}><a className="text-accent underline" href={localizedPath(lang, `/nearby/${item}/`)}>{nearbyData[lang][item].title}</a></li>)}</ul></aside>
        <section className="rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-6"><h2 className="text-xl font-semibold mb-4">{labels[13]}</h2><p className="leading-7 text-sm mb-4">{labels[14]}</p><ul className="space-y-3 text-sm">{nearbySources[slug].map(([name, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline">{name}</a></li>)}</ul></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.tagline, inLanguage: lang, dateModified: '2026-11-10', mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Sameba Cathedral Guide' }, citation: nearbySources[slug].map(source => source[1]) }) }} />
      <Footer />
    </main>
  </I18nProvider>;
}
