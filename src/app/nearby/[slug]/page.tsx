import { notFound } from 'next/navigation';
import NearbyArticle from '@/components/NearbyArticle';
import { isNearbySlug, nearbyMetadata, nearbySlugs } from '@/lib/nearby';
export const dynamicParams = false;
export function generateStaticParams() { return nearbySlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return isNearbySlug(slug) ? nearbyMetadata('ka', slug) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isNearbySlug(slug)) notFound();
  return <NearbyArticle lang="ka" slug={slug} />;
}
