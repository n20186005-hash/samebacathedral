import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Cookie-ების პარამეტრები",
  "description": "Sameba Cathedral Guide-ის Cookie-ების პარამეტრები და შენახული არჩევანის მართვა.",
  "alternates": {
    "canonical": "https://samebacathedral.com/cookie-settings/"
  },
  "openGraph": {
    "title": "Cookie-ების პარამეტრები",
    "description": "Sameba Cathedral Guide-ის Cookie-ების პარამეტრები და შენახული არჩევანის მართვა.",
    "url": "https://samebacathedral.com/cookie-settings/",
    "type": "website",
    "locale": "ka_GE",
    "images": []
  },
  "twitter": {
    "card": "summary",
    "title": "Cookie-ების პარამეტრები",
    "description": "Sameba Cathedral Guide-ის Cookie-ების პარამეტრები და შენახული არჩევანის მართვა.",
    "images": []
  }
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
