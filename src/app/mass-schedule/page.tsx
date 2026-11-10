import type { Metadata } from "next";
import { resources } from '@/i18n/resources';
import Script from "next/script";
import MassScheduleSection from "@/components/MassScheduleSection";
import I18nProvider from "@/components/I18nProvider";

const DOMAIN_NAME = "samebacathedral.com";
const ATTRACTION_FULL_NAME = "Holy Trinity Cathedral of Tbilisi";
const ATTRACTION_SHORT_NAME = "Sameba Cathedral";
const CITY_NAME = "Tbilisi";
const BASE_URL = `https://${DOMAIN_NAME}`;
const PAGE_URL = `${BASE_URL}/mass-schedule/`;
const HERO_IMAGE = `${BASE_URL}/gallery/images (2).jpg`;

const PAGE_TITLE = resources.ka.translation.mass.pageTitle;
const PAGE_DESCRIPTION = "სამების ტაძარში მსახურებაზე დასწრება: მიმდინარე ოფიციალური განრიგი ვერ დადასტურდა. ვიზიტამდე ტაძარში გადაამოწმეთ კონკრეტული თარიღის ლიტურგია და დაშვება.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
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
        alt: resources.ka.translation.gallery.alts[1],
      },
    ],
    modifiedTime: "2026-11-10T00:00:00+04:00",
    section: "Liturgy Schedule",
    tags: ["Divine Liturgy", "Georgian Orthodox", "Sameba Cathedral mass times", "Feast days Georgia"],
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
  dateModified: "2026-11-10",
  articleSection: "Liturgy Schedule",

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
