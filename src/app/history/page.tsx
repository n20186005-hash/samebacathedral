import type { Metadata } from "next";
import { resources } from '@/i18n/resources';
import Script from "next/script";
import HistorySection from "@/components/HistorySection";
import I18nProvider from "@/components/I18nProvider";

const DOMAIN_NAME = "samebacathedral.com";
const ATTRACTION_FULL_NAME = "Holy Trinity Cathedral of Tbilisi";
const ATTRACTION_SHORT_NAME = "Sameba Cathedral";
const CITY_NAME = "Tbilisi";
const BASE_URL = `https://${DOMAIN_NAME}`;
const PAGE_URL = `${BASE_URL}/history/`;
const HERO_IMAGE = `${BASE_URL}/gallery/images (5).jpg`;

const PAGE_TITLE = resources.ka.translation.history.pageTitle;
const PAGE_DESCRIPTION = "სამების ტაძრის ისტორია: 1995 წლის საძირკველი, Georgia Travel-ის მიერ აღწერილი 1996 წლის მშენებლობის დასაწყისი და 2004 წლის დასრულება. წყაროები და ძველი ცნობების შესწორება.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "Sameba Cathedral history",
    "Holy Trinity Cathedral Tbilisi history",
    "Georgian Orthodox cathedral consecration 2004",
    "Ilia II cathedral Tbilisi",
    "Sameba Cathedral timeline 1989 2004",
    "post-Soviet Georgia national awakening",
    "Elia Hill Tbilisi history",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: `${ATTRACTION_SHORT_NAME} Guide`,
    locale: "ka_GE",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: resources.ka.translation.gallery.alts[4],
      },
    ],

    modifiedTime: "2026-11-10T00:00:00+04:00",
    section: "Cultural History",
    tags: ["Sameba Cathedral", "Georgian Orthodox Church", "Tbilisi history", "Patriarch Ilia II"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [HERO_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "ka",
  "@id": `${PAGE_URL}#article`,
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  keywords: "Sameba Cathedral history, Holy Trinity Cathedral Tbilisi, Georgian Orthodox, Ilia II, 2004 consecration, St. George's Day, Elia Hill, Tbilisi, Georgia",
  author: {
    "@type": "Organization",
    name: "Sameba Cathedral Visitor Guide",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Sameba Cathedral Visitor Guide",
    url: BASE_URL,
  },
  image: [HERO_IMAGE],

  dateModified: "2026-11-10",
  articleSection: "Cultural History",

  about: {
    "@type": "TouristAttraction",
    "@id": `${BASE_URL}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: ATTRACTION_SHORT_NAME,
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY_NAME,
      addressCountry: "GE",
    },
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: resources.ka.translation.nav.home,
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: PAGE_TITLE,
      item: PAGE_URL,
    },
  ],
};

export default function HistoryPage() {
  return (
    <I18nProvider>
      <Script
        id="history-article-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="history-breadcrumb-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <HistorySection />
    </I18nProvider>
  );
}
