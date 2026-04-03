import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  title: "Sameba Cathedral – Holy Trinity Cathedral of Tbilisi | Visitor Guide",
  description: "Complete visitor guide to Sameba Cathedral (Holy Trinity Cathedral), the largest cathedral in Georgia. Hours, photos, reviews, and travel tips.",
  keywords: "Sameba Cathedral, Holy Trinity Cathedral, Tbilisi, Georgia, Orthodox, visitor guide, travel",
  openGraph: {
    title: "Sameba Cathedral – Holy Trinity Cathedral of Tbilisi",
    description: "Complete visitor guide with photos, reviews, and travel tips.",
    type: "website",
    url: "https://samebacathedral.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        {/* Blocking script to prevent theme flash (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
        <link rel="alternate" hrefLang="ka" href="https://samebacathedral.com/" />
        <link rel="alternate" hrefLang="en" href="https://samebacathedral.com/" />
        <link rel="alternate" hrefLang="ru" href="https://samebacathedral.com/" />
        <link rel="alternate" hrefLang="zh-Hant" href="https://samebacathedral.com/" />
        <link rel="alternate" hrefLang="zh-Hans" href="https://samebacathedral.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://samebacathedral.com/" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
