'use client';
import { useTranslation } from 'react-i18next';
import { nearbyLabels } from '@/lib/nearby';
import notes from '@/data/editorial-notes.json';
export default function EditorialNotice({ kind = 'core' }: { kind?: 'core' | 'legacy' | 'mass' }) {
  const { i18n } = useTranslation();
  const lang = (i18n.language in notes ? i18n.language : 'ka') as keyof typeof notes;
  const text = notes[lang];
  return <aside className="editorial-notice my-8 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5 text-neutral-800 dark:text-neutral-200"><h2 className="font-semibold text-base mb-3">{text.title}</h2><p className="text-sm leading-7">{text[kind]}</p><p className="mt-3 text-xs leading-6">{nearbyLabels[lang][14]}</p><p className="mt-3 text-sm"><a className="underline" href="https://georgia.travel/holy-trinity-cathedral" target="_blank" rel="noopener noreferrer">Georgia Travel</a> · <a className="underline" href="https://old.about.ge/en/pois/?poid=564" target="_blank" rel="noopener noreferrer">about.ge</a> · <a className="underline" href="https://maps.app.goo.gl/WR4V932yRvQLWhos5" target="_blank" rel="noopener noreferrer">Google Maps</a> · <a className="underline" href="https://ttc.com.ge/en" target="_blank" rel="noopener noreferrer">TTC</a></p></aside>;
}
