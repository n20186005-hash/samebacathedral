import type { Metadata } from "next";
import Script from "next/script";
import ArchitectureSection from "@/components/ArchitectureSection";
import I18nProvider from "@/components/I18nProvider";

const DOMAIN_NAME = "samebacathedral.com";
const ATTRACTION_FULL_NAME = "Holy Trinity Cathedral of Tbilisi";
const ATTRACTION_SHORT_NAME = "Sameba Cathedral";
const CITY_NAME = "Tbilisi";
const COUNTRY_NAME = "Georgia";
const BASE_URL = `https://${DOMAIN_NAME}`;
const PAGE_URL = `${BASE_URL}/architecture`;
const HERO_IMAGE = `${BASE_URL}/gallery/images (4).jpg`;

export const metadata: Metadata = {
  title: `Architecture & Sacred Symbolism of ${ATTRACTION_SHORT_NAME} (${CITY_NAME})`,
  description: `Decoding ${ATTRACTION_FULL_NAME}: cruciform Greek-cross plan, five-dome 1+4 composition, 101-metre gilded cupola, Georgian-Byzantine synthesis, fresco programme, and nine underground baptistery chapels in Tbilisi, ${COUNTRY_NAME}.`,
  keywords: [
    "Sameba Cathedral architecture",
    "Sameba Cathedral symbolism",
    "Georgian Orthodox five dome cathedral",
    "cruciform church plan Tbilisi",
    "Archil Mindiashvili cathedral",
    "Orthodox fresco programme dome",
    "Georgian Byzantine architecture synthesis",
    "Tbilisi Holy Trinity dome height",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Architecture & Symbolism of ${ATTRACTION_SHORT_NAME} — ${ATTRACTION_FULL_NAME}`,
    description: `Cruciform plan, five-dome typology, 101m gilded cupola, fresco program, and the Georgian-Byzantine synthesis of Sameba Cathedral in ${CITY_NAME}.`,
    url: PAGE_URL,
    type: "article",
    siteName: `${ATTRACTION_SHORT_NAME} Guide`,
    locale: "en_US",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: `${ATTRACTION_SHORT_NAME} architecture — 5-dome cruciform plan in ${CITY_NAME}, ${COUNTRY_NAME}`,
      },
    ],
    publishedTime: "2024-05-01T10:00:00+04:00",
    modifiedTime: "2026-09-11T00:00:00+04:00",
    section: "Architectural Studies",
    tags: ["Sameba Cathedral architecture", "Georgian ecclesiastical architecture", "Orthodox church symbolism", "Tbilisi domes"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Architecture & Symbolism of ${ATTRACTION_SHORT_NAME} (${CITY_NAME})`,
    description: `101m gilded cupola, 5-dome 1+4 plan, cruciform layout, and fresco program decoded.`,
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
  headline: `Architecture & Sacred Symbolism of ${ATTRACTION_SHORT_NAME} — ${ATTRACTION_FULL_NAME} (${CITY_NAME})`,
  description: `Detailed architectural reading of Sameba Cathedral (Holy Trinity Cathedral of Tbilisi): cruciform Greek-cross plan, 5-dome 1+4 composition, 101-metre gilded cupola, underground baptistery chapels, fresco programme, Georgian-Byzantine synthesis.`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  keywords: "Sameba Cathedral architecture, sacred symbolism, five dome church, cruciform plan, Georgian Orthodox, fresco, Tbilisi, Georgia",
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
  datePublished: "2024-05-01",
  dateModified: "2026-09-11",
  articleSection: "Architectural Studies",
  articleBody: `Sameba Cathedral architectural analysis: Greek-cross cruciform nave, 5-dome 1+4 typology with central Christ Pantocrator drum and 4 Evangelist corner domes, 101m gold-gilded cupola, 7.5m cross, natural stone cladding, 9 underground chapels, architect Archil Mindiashvili Georgian-Byzantine synthesis.`,
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
      name: `Architecture of ${ATTRACTION_SHORT_NAME}`,
      item: PAGE_URL,
    },
  ],
};

export default function ArchitecturePage() {
  return (
    <I18nProvider>
      <Script
        id="architecture-article-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="architecture-breadcrumb-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ArchitectureSection />
    </I18nProvider>
  );
}
