import type { Metadata } from "next";
import Script from "next/script";
import MassScheduleSection from "@/components/MassScheduleSection";
import I18nProvider from "@/components/I18nProvider";

const DOMAIN_NAME = "samebacathedral.com";
const ATTRACTION_FULL_NAME = "Holy Trinity Cathedral of Tbilisi";
const ATTRACTION_SHORT_NAME = "Sameba Cathedral";
const CITY_NAME = "Tbilisi";
const COUNTRY_NAME = "Georgia";
const BASE_URL = `https://${DOMAIN_NAME}`;
const PAGE_URL = `${BASE_URL}/mass-schedule`;
const HERO_IMAGE = `${BASE_URL}/gallery/images (2).jpg`;

export const metadata: Metadata = {
  title: `Mass Schedule — Holy Trinity Cathedral Tbilisi (Sameba) Liturgy Times 2026`,
  description: `Sameba Cathedral (Holy Trinity Cathedral of Tbilisi, Georgia) 2026 mass schedule. Weekly Divine Liturgy, vespers, feast days, confession, dress code and communion instructions. Phone +995 571 00 29 42.`,
  keywords: [
    "holy trinity cathedral of tbilisi mass schedule",
    "Sameba Cathedral mass times",
    "სამება ლიტურგია",
    "sameba katedrali ayin saatleri",
    "Tbilisi Orthodox liturgy hours",
    "Georgian Orthodox mass schedule Tbilisi",
    "Sameba Cathedral confession",
    "Holy Trinity Tbilisi communion",
    "Sameba katedrali ibadet programı",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Sameba Cathedral Mass Schedule 2026 — Holy Trinity Tbilisi Liturgy Times`,
    description: `Weekly Georgian Orthodox divine liturgy, vespers, feast days, confession & preparation guide for Holy Trinity Cathedral (Sameba) Tbilisi, Georgia.`,
    url: PAGE_URL,
    type: "article",
    siteName: `${ATTRACTION_SHORT_NAME} Guide`,
    locale: "en_US",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: `Holy Trinity Cathedral Tbilisi — Sameba mass schedule & liturgy interior`,
      },
    ],
    publishedTime: "2026-01-07T09:00:00+04:00",
    modifiedTime: "2026-09-11T00:00:00+04:00",
    section: "Liturgy Schedule",
    tags: ["Divine Liturgy", "Georgian Orthodox", "Sameba Cathedral mass times", "Feast days Georgia"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sameba Cathedral Mass Schedule 2026 — Tbilisi Liturgy Hours`,
    description: `Georgian Orthodox weekly divine liturgy, feast days and confession guide at Holy Trinity Cathedral Tbilisi.`,
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
  headline: `Mass Schedule & Divine Liturgy Times — ${ATTRACTION_FULL_NAME} (${ATTRACTION_SHORT_NAME})`,
  description: `2026 weekly divine liturgy, vespers, major feast days, confession and Holy Communion preparation guide for ${ATTRACTION_SHORT_NAME} in Tbilisi, Georgia.`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  keywords: "mass schedule, divine liturgy, Sameba Cathedral mass times, Georgian Orthodox, confession, communion, feast days, Tbilisi",
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
  datePublished: "2026-01-07",
  dateModified: "2026-09-11",
  articleSection: "Liturgy Schedule",
  articleBody: `Sameba Cathedral 2026 weekly mass schedule: Sunday Divine Liturgy at 9:00 AM with Patriarch Ilia II on major feast days. Weekday liturgies Monday-Saturday 8:00 AM. Vespers Saturday 18:00. St. George's Day November 23, Christmas January 7, Easter. Free entry, dress code enforced. Phone +995 571 00 29 42 for schedule updates.`,
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
    telephone: "+995571002942",
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
      name: `Mass Schedule ${ATTRACTION_SHORT_NAME}`,
      item: PAGE_URL,
    },
  ],
};

export default function MassSchedulePage() {
  return (
    <I18nProvider>
      <Script
        id="mass-article-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="mass-breadcrumb-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <MassScheduleSection />
    </I18nProvider>
  );
}
