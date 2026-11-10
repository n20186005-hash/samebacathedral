'use client';
import { useTranslation } from 'react-i18next';
import { nearbyData, nearbyLabels, nearbySlugs, type NearbyLocale } from '@/lib/nearby';
import { localizedPath } from '@/lib/locale-routing';
export default function NearbyLinks() {
  const { i18n } = useTranslation();
  const lang = (i18n.language in nearbyData ? i18n.language : 'ka') as NearbyLocale;
  return <section id="nearby" className="py-16 bg-neutral-50 dark:bg-neutral-900/50"><div className="max-w-6xl mx-auto px-6"><h2 className="text-3xl font-bold mb-8">{nearbyLabels[lang][0]}</h2><div className="grid md:grid-cols-3 gap-6">{nearbySlugs.map(slug => <a key={slug} href={localizedPath(lang, `/nearby/${slug}/`)} className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-md"><h3 className="font-semibold text-xl mb-3">{nearbyData[lang][slug].title}</h3><p className="text-neutral-600 dark:text-neutral-400 leading-7">{nearbyData[lang][slug].tagline}</p></a>)}</div></div></section>;
}
