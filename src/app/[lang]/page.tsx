import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomePageContent from '@/components/HomePageContent';
import I18nProvider from '@/components/I18nProvider';
import { resources } from '@/i18n/resources';
import { languageAlternates } from '@/lib/locale-routing';
import { isRoutedLocale, ROUTED_LOCALES } from '@/lib/locale-routing';

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
    title: resources[lang].translation.meta.title,
    description: resources[lang].translation.meta.description,
    openGraph: { title: resources[lang].translation.meta.title, description: resources[lang].translation.meta.description, url: `https://samebacathedral.com/${lang}/` },
    twitter: { card: 'summary_large_image', title: resources[lang].translation.meta.title, description: resources[lang].translation.meta.description, images: ['/gallery/images%20(1).jpg'] },
    alternates: {
      canonical: `https://samebacathedral.com/${lang}/`,
      languages: languageAlternates(),
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
