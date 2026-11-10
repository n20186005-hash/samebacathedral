import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "კონფიდენციალურობის პოლიტიკა",
  "description": "Sameba Cathedral Guide-ის კონფიდენციალურობის პოლიტიკა, მონაცემების გამოყენება და კონტაქტი.",
  "alternates": {
    "canonical": "https://samebacathedral.com/privacy-policy/"
  },
  "openGraph": {
    "title": "კონფიდენციალურობის პოლიტიკა",
    "description": "Sameba Cathedral Guide-ის კონფიდენციალურობის პოლიტიკა, მონაცემების გამოყენება და კონტაქტი.",
    "url": "https://samebacathedral.com/privacy-policy/",
    "type": "website",
    "locale": "ka_GE",
    "images": []
  },
  "twitter": {
    "card": "summary",
    "title": "კონფიდენციალურობის პოლიტიკა",
    "description": "Sameba Cathedral Guide-ის კონფიდენციალურობის პოლიტიკა, მონაცემების გამოყენება და კონტაქტი.",
    "images": []
  }
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
