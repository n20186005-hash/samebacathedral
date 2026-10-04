import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

const DOMAIN_NAME = "samebacathedral.com";
const SITE_NAME = "Sameba Cathedral Guide";
const ATTRACTION_GEORGIAN_NAME = "თბილისის სამების საკათედრო ტაძარი";
const ATTRACTION_GEORGIAN_SHORT_NAME = "სამების საკათედრო ტაძარი";
const ATTRACTION_FULL_NAME = "Holy Trinity Cathedral of Tbilisi";
const ATTRACTION_SHORT_NAME = "Sameba Cathedral";
const CITY_NAME = "Tbilisi";
const STATE_PROVINCE = "Tbilisi";
const COUNTRY_NAME = "Georgia";
const COUNTRY_CODE_2LETTER = "GE";
const POSTAL_CODE = "0105";
const LATITUDE = 41.69765157114227;
const LONGITUDE = 44.81387181312111;
const MAPS_SHARE_URL = "https://maps.app.goo.gl/WR4V932yRvQLWhos5";
const NEARBY_LANDMARK_1 = "Narikala Fortress";
const NEARBY_LANDMARK_2 = "Rike Park and Bridge of Peace";
const GOVT_TOURISM_URL = "https://georgia.travel";
const HERO_IMAGE = `/gallery/images (1).jpg`;

export const metadata: Metadata = {
  title: {
    default: `სამების საკათედრო ტაძარი (Sameba), თბილისი – საათები, მისამართი და ფოტოები`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `თბილისის წმინდა სამების საკათედრო ტაძარი (Sameba): სამუშაო საათები, მისამართი, როგორ მივიდეთ, ჩაცმის წესები, ლიტურგიის ინფორმაცია, ფოტოები და ვიზიტის რჩევები.`,
  keywords: [
    ATTRACTION_GEORGIAN_NAME,
    ATTRACTION_GEORGIAN_SHORT_NAME,
    ATTRACTION_FULL_NAME,
    ATTRACTION_SHORT_NAME,
    "სამება",
    "სამება თბილისი",
    "სამების ტაძარი",
    "სამების ეკლესია",
    "sameba",
    "sameba katedrali",
    "sameba cathedral tbilisi",
    `${ATTRACTION_SHORT_NAME} hours`,
    `${ATTRACTION_SHORT_NAME} dress code`,
    "სამება ღამით",
    "სამება შიგნიდან",
    "თბილისის სამების საკათედრო ტაძარი ფოტოები",
    `${ATTRACTION_FULL_NAME} ${CITY_NAME}`,
  ],
  alternates: {
    canonical: `https://${DOMAIN_NAME}`,
  },
  openGraph: {
    title: `სამების საკათედრო ტაძარი – Sameba Cathedral Tbilisi | საათები და ვიზიტი`,
    description: `დამოუკიდებელი ვიზიტორთა გზამკვლევი სამების საკათედრო ტაძარზე: მისამართი, ჩაცმის წესები, ფოტოები, რუკა და პრაქტიკული რჩევები თბილისის სტუმრებისთვის.`,
    url: `https://${DOMAIN_NAME}`,
    type: "website",
    siteName: SITE_NAME,
    locale: "ka_GE",
    images: [
      {
        url: HERO_IMAGE,
        alt: `${ATTRACTION_GEORGIAN_NAME} — ოქროს გუმბათი და მთავარი ხედი თბილისში`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `სამების საკათედრო ტაძარი (Sameba), თბილისი`,
    description: `სამების საკათედრო ტაძრის დამოუკიდებელი გზამკვლევი: საათები, მისამართი, ფოტოები და ვიზიტის რჩევები.`,
    images: [HERO_IMAGE],
  },
  metadataBase: new URL(`https://${DOMAIN_NAME}`),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `https://${DOMAIN_NAME}/#website`,
  name: SITE_NAME,
  url: `https://${DOMAIN_NAME}`,
  inLanguage: "ka-GE",
  description: `Independent visitor guide to ${ATTRACTION_GEORGIAN_NAME} in ${CITY_NAME}, ${COUNTRY_NAME}.`,
};

const churchLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": `https://${DOMAIN_NAME}/#church`,
  name: ATTRACTION_GEORGIAN_NAME,
  alternateName: [
    ATTRACTION_FULL_NAME,
    ATTRACTION_SHORT_NAME,
    "Tsminda Sameba Cathedral",
    ATTRACTION_GEORGIAN_SHORT_NAME,
    "წმინდა სამების საკათედრო ტაძარი",
  ],
  description: `Independent visitor guide to ${ATTRACTION_FULL_NAME} in ${CITY_NAME}, ${COUNTRY_NAME}. This site is not the cathedral's official website.`,
  url: `https://${DOMAIN_NAME}`,
  image: [
    `https://${DOMAIN_NAME}/gallery/images%20(1).jpg`,
  ],
  isAccessibleForFree: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: `MRX8+3H8`,
    addressLocality: CITY_NAME,
    addressRegion: STATE_PROVINCE,
    postalCode: POSTAL_CODE,
    addressCountry: COUNTRY_CODE_2LETTER,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LATITUDE,
    longitude: LONGITUDE,
  },
  hasMap: MAPS_SHARE_URL,
  telephone: "+995571002942",
  sameAs: [
    MAPS_SHARE_URL,
    GOVT_TOURISM_URL,
  ],
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: `Where is ${ATTRACTION_FULL_NAME} located?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${ATTRACTION_FULL_NAME} is located in ${CITY_NAME}, ${STATE_PROVINCE}, ${COUNTRY_NAME}. The address is MRX8+3H8, ${CITY_NAME}, ${COUNTRY_NAME}.`,
      },
    },
    {
      "@type": "Question",
      name: `Is ${ATTRACTION_SHORT_NAME} free to visit?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes, ${ATTRACTION_FULL_NAME} is a public space and is free to visit year-round. Entry to the cathedral and grounds is open to all visitors without charge.`,
      },
    },
    {
      "@type": "Question",
      name: `What are the opening hours for ${ATTRACTION_SHORT_NAME}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Visitors commonly plan around 8:00 AM to 8:00 PM, but hours and interior access can change during liturgies, feast days, and religious events. Check Google Maps or call +995 571 00 29 42 before visiting.`,
      },
    },
    {
      "@type": "Question",
      name: `How do I get to ${ATTRACTION_FULL_NAME} from central ${CITY_NAME}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `To reach ${ATTRACTION_SHORT_NAME}, take the Metro red line to Avlabari station (5-minute walk), buses 31/44/55 stop nearby, or a taxi from the city center costs approximately 5 GEL and takes 10 minutes.`,
      },
    },
    {
      "@type": "Question",
      name: `What is the dress code for visiting ${ATTRACTION_SHORT_NAME}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `As an active Georgian Orthodox religious site, modest dress is required: women must cover their heads with scarves and cover shoulders and knees; men must wear long trousers (no shorts). Headscarves and wraps are available for free at the entrance if needed.`,
      },
    },
    {
      "@type": "Question",
      name: `What landmarks are near ${ATTRACTION_FULL_NAME}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Nearby landmarks include ${NEARBY_LANDMARK_1}, ${NEARBY_LANDMARK_2}, Old Town Abanotubani, Metekhi Church, and the Tbilisi Botanical Garden - all within 10-25 minutes walking distance.`,
      },
    },
    {
      "@type": "Question",
      name: `When was ${ATTRACTION_FULL_NAME} built?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Construction of ${ATTRACTION_SHORT_NAME} began in November 1995 and was completed in 2004. The cathedral was solemnly consecrated on November 23, 2004, St. George's Day, by Catholicos-Patriarch Ilia II.`,
      },
    },
    {
      "@type": "Question",
      name: `Is photography allowed inside ${ATTRACTION_SHORT_NAME}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Photography is generally permitted inside ${ATTRACTION_FULL_NAME}, but flash photography is prohibited and filming during religious services should be avoided. Always be respectful of worshippers and keep voices low.`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        <Script
          id="ga4-base"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HXM22WWPKP', { anonymize_ip: true });`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#171717" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={ATTRACTION_SHORT_NAME} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
