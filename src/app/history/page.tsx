import type { Metadata } from "next";
import Script from "next/script";
import HistorySection from "@/components/HistorySection";
import I18nProvider from "@/components/I18nProvider";

const DOMAIN_NAME = "samebacathedral.com";
const ATTRACTION_FULL_NAME = "Holy Trinity Cathedral of Tbilisi";
const ATTRACTION_SHORT_NAME = "Sameba Cathedral";
const CITY_NAME = "Tbilisi";
const COUNTRY_NAME = "Georgia";
const BASE_URL = `https://${DOMAIN_NAME}`;
const PAGE_URL = `${BASE_URL}/history`;
const HERO_IMAGE = `${BASE_URL}/gallery/images (5).jpg`;

export const metadata: Metadata = {
  title: `History & Spiritual Significance of ${ATTRACTION_FULL_NAME} (${CITY_NAME})`,
  description: `Complete 15-year chronology of ${ATTRACTION_SHORT_NAME} — from the 1989 national awakening to the 2004 consecration on St. George's Day in Tbilisi, ${COUNTRY_NAME}. Deep cultural study of Sameba Cathedral's theological purpose and post-Soviet legacy.`,
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
    title: `History & Significance of ${ATTRACTION_FULL_NAME} — Sameba Cathedral (${CITY_NAME})`,
    description: `15-year construction chronology, consecration ceremony, and spiritual legacy of ${ATTRACTION_SHORT_NAME} — the seat of the Georgian Orthodox Patriarchate.`,
    url: PAGE_URL,
    type: "article",
    siteName: `${ATTRACTION_SHORT_NAME} Guide`,
    locale: "en_US",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: `${ATTRACTION_FULL_NAME} — consecration & history in ${CITY_NAME}, ${COUNTRY_NAME}`,
      },
    ],
    publishedTime: "2004-11-23T09:00:00+04:00",
    modifiedTime: "2026-09-11T00:00:00+04:00",
    section: "Cultural History",
    tags: ["Sameba Cathedral", "Georgian Orthodox Church", "Tbilisi history", "Patriarch Ilia II"],
  },
  twitter: {
    card: "summary_large_image",
    title: `History of ${ATTRACTION_FULL_NAME} — Sameba Cathedral (${CITY_NAME})`,
    description: `15-year construction arc from 1989 competition to 2004 consecration on St. George's Day.`,
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
  "@id": `${PAGE_URL}#article`,
  headline: `History & Spiritual Significance of ${ATTRACTION_FULL_NAME} — Sameba Cathedral (${CITY_NAME})`,
  description: `Complete 15-year chronology of ${ATTRACTION_SHORT_NAME} in Tbilisi, Georgia: 1989 national competition, construction arc, 23 November 2004 consecration by Patriarch Ilia II, and ongoing spiritual legacy.`,
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
  datePublished: "2004-11-23",
  dateModified: "2026-09-11",
  articleSection: "Cultural History",
  articleBody: `Sameba Cathedral (Holy Trinity Cathedral of Tbilisi) history from 1989 national awakening through 15-year construction to 23 November 2004 consecration on St. George's Day by Catholicos-Patriarch Ilia II, with full Orthodox hierarchy attendance.`,
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
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: `History of ${ATTRACTION_SHORT_NAME}`,
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
