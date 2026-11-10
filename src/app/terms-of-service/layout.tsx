import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "მომსახურების პირობები",
  "description": "Sameba Cathedral Guide-ის გამოყენების პირობები და ვიზიტორთა ინფორმაციის ფარგლები.",
  "alternates": {
    "canonical": "https://samebacathedral.com/terms-of-service/"
  },
  "openGraph": {
    "title": "მომსახურების პირობები",
    "description": "Sameba Cathedral Guide-ის გამოყენების პირობები და ვიზიტორთა ინფორმაციის ფარგლები.",
    "url": "https://samebacathedral.com/terms-of-service/",
    "type": "website",
    "locale": "ka_GE",
    "images": []
  },
  "twitter": {
    "card": "summary",
    "title": "მომსახურების პირობები",
    "description": "Sameba Cathedral Guide-ის გამოყენების პირობები და ვიზიტორთა ინფორმაციის ფარგლები.",
    "images": []
  }
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
