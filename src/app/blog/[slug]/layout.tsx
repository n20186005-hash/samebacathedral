import type { Metadata } from "next";

const BASE_URL = "https://samebacathedral.com";
const SITE_NAME = "Sameba Cathedral Guide";

const POST_SEO: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    publishedTime: string;
    modifiedTime: string;
    section: string;
  }
> = {
  "history-of-sameba": {
    title: "სამების საკათედრო ტაძრის ისტორია – მშენებლობა, არქიტექტორი და 2004 წელი",
    description:
      "სამების საკათედრო ტაძრის ისტორია: 1989 წლის იდეიდან 1995-2004 წლების მშენებლობამდე, არქიტექტორ არჩილ მინდიაშვილამდე და 2004 წლის კურთხევამდე.",
    image: `${BASE_URL}/gallery/images%20(5).jpg`,
    publishedTime: "2026-04-10T00:00:00+04:00",
    modifiedTime: "2026-10-04T00:00:00+04:00",
    section: "ისტორია",
  },
  "visitor-tips": {
    title: "სამების ტაძარი: სამუშაო საათები, ჩაცმის კოდი და ვიზიტის რჩევები (2026)",
    description:
      "სამების ტაძრის პრაქტიკული გზამკვლევი: სამუშაო საათები, ჩაცმის კოდი, როგორ მივიდეთ, ფოტოებისთვის საუკეთესო დრო და ვიზიტის მთავარი რჩევები.",
    image: `${BASE_URL}/gallery/images%20(2).jpg`,
    publishedTime: "2026-04-05T00:00:00+04:00",
    modifiedTime: "2026-10-04T00:00:00+04:00",
    section: "ვიზიტორის გზამკვლევი",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_SEO[slug];

  if (!post) {
    return {
      title: "Post not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: SITE_NAME,
      locale: "ka_GE",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
      section: post.section,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POST_SEO[slug];

  if (!post) {
    return children;
  }

  const url = `${BASE_URL}/blog/${slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    inLanguage: "ka-GE",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    image: [post.image],
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime,
    articleSection: post.section,
    about: {
      "@type": "Church",
      "@id": `${BASE_URL}/#church`,
      name: "თბილისის სამების საკათედრო ტაძარი",
      alternateName: ["Sameba Cathedral", "Holy Trinity Cathedral of Tbilisi"],
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "მთავარი",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ბლოგი",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {children}
    </>
  );
}
