import type { Metadata } from 'next';
const title = 'სამების ტაძრის გზამკვლევი და ისტორიები';
const description = 'სამების ტაძრის ისტორიისა და ვიზიტის გზამკვლევი: წყაროები და გადამოწმებული შესწორებები.';
const url = 'https://samebacathedral.com/blog/';
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, locale: 'ka_GE', type: 'website', images: [] },
  twitter: { title, description, card: 'summary', images: [] },
};
export default function BlogLayout({ children }: { children: React.ReactNode }) { return children; }
