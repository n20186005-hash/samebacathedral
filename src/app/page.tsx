import { languageAlternates } from '@/lib/locale-routing';
import type { Metadata } from 'next';
import HomePageContent from '@/components/HomePageContent';
import I18nProvider from '@/components/I18nProvider';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://samebacathedral.com/',
    languages: languageAlternates(),
  },
};

export default function Home() {
  return (
    <I18nProvider initialLanguage="ka">
      <HomePageContent />
    </I18nProvider>
  );
}
