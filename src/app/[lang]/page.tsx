import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomePageContent from '@/components/HomePageContent';
import I18nProvider from '@/components/I18nProvider';
import { isRoutedLocale, ROUTED_LOCALES } from '@/lib/locale-routing';

const HOME_METADATA: Record<
  string,
  Pick<Metadata, 'title' | 'description' | 'openGraph' | 'twitter'>
> = {
  en: {
    title: 'Sameba Cathedral Tbilisi - Hours, Address and Photos',
    description:
      'Independent visitor guide to Sameba Cathedral in Tbilisi with opening hours, address, dress code, photos, map directions, and practical tips.',
    openGraph: {
      title: 'Sameba Cathedral Tbilisi - Hours, Address and Photos',
      description:
        'Independent visitor guide to Sameba Cathedral in Tbilisi with opening hours, address, dress code, photos, map directions, and practical tips.',
      url: 'https://samebacathedral.com/en',
      locale: 'en_US',
    },
    twitter: {
      title: 'Sameba Cathedral Tbilisi - Hours, Address and Photos',
      description:
        'Independent visitor guide to Sameba Cathedral in Tbilisi with opening hours, address, dress code, photos, map directions, and practical tips.',
    },
  },
  ru: {
    title: 'Собор Самеба в Тбилиси - часы работы, адрес и фото',
    description:
      'Независимый гид по собору Самеба в Тбилиси: часы работы, адрес, дресс-код, фото, карта и практические советы для посетителей.',
    openGraph: {
      title: 'Собор Самеба в Тбилиси - часы работы, адрес и фото',
      description:
        'Независимый гид по собору Самеба в Тбилиси: часы работы, адрес, дресс-код, фото, карта и практические советы для посетителей.',
      url: 'https://samebacathedral.com/ru',
      locale: 'ru_RU',
    },
    twitter: {
      title: 'Собор Самеба в Тбилиси - часы работы, адрес и фото',
      description:
        'Независимый гид по собору Самеба в Тбилиси: часы работы, адрес, дресс-код, фото, карта и практические советы для посетителей.',
    },
  },
};

export function generateStaticParams() {
  return ROUTED_LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isRoutedLocale(lang)) {
    return {};
  }

  return {
    ...HOME_METADATA[lang],
    alternates: {
      canonical: `https://samebacathedral.com/${lang}`,
      languages: {
        ka: 'https://samebacathedral.com/',
        en: 'https://samebacathedral.com/en',
        ru: 'https://samebacathedral.com/ru',
        'x-default': 'https://samebacathedral.com/',
      },
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isRoutedLocale(lang)) {
    notFound();
  }

  return (
    <I18nProvider initialLanguage={lang}>
      <HomePageContent />
    </I18nProvider>
  );
}
