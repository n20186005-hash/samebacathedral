import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
import { ALL_LOCALES, languageAlternates, localizedPath } from '@/lib/locale-routing';
import { nearbySlugs } from '@/lib/nearby';
const BASE_URL = 'https://samebacathedral.com';
const checked = new Date('2026-11-10');
export default function sitemap(): MetadataRoute.Sitemap {
  const translated = ['/', ...nearbySlugs.map(slug => `/nearby/${slug}/`)];
  const entries: MetadataRoute.Sitemap = translated.flatMap(path => ALL_LOCALES.map(lang => ({
    url: `${BASE_URL}${localizedPath(lang, path)}`,
    lastModified: checked,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
    alternates: { languages: languageAlternates(path) },
  })));
  return [...entries, ...['mass-schedule', 'architecture', 'history', 'blog', 'blog/history-of-sameba', 'blog/visitor-tips', 'privacy-policy', 'terms-of-service', 'cookie-settings'].map(path => ({ url: `${BASE_URL}/${path}/`, lastModified: checked, changeFrequency: 'monthly' as const, priority: 0.6 }))];
}
