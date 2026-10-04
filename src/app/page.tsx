import type { Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import I18nProvider from '@/components/I18nProvider';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://samebacathedral.com/',
    languages: {
      ka: 'https://samebacathedral.com/',
      en: 'https://samebacathedral.com/en',
      ru: 'https://samebacathedral.com/ru',
      'x-default': 'https://samebacathedral.com/',
    },
  },
};

export default function Home() {
  return (
    <I18nProvider>
      <HomePageContent />
    </I18nProvider>
  );
}
