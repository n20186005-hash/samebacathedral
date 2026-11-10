import { notFound } from 'next/navigation';
import NearbyArticle from '@/components/NearbyArticle';
import { isNearbySlug, nearbyMetadata, nearbySlugs } from '@/lib/nearby';
import { isRoutedLocale, ROUTED_LOCALES } from '@/lib/locale-routing';
export const dynamicParams = false;
export function generateStaticParams() { return ROUTED_LOCALES.flatMap(lang => nearbySlugs.map(slug => ({ lang, slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  return isRoutedLocale(lang) && isNearbySlug(slug) ? nearbyMetadata(lang, slug) : {};
}
export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isRoutedLocale(lang) || !isNearbySlug(slug)) notFound();
  return <NearbyArticle lang={lang} slug={slug} />;
}
