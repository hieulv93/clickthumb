import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/youtube-banner-size-guide/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "YouTube Banner Size Guide 2026 — Exact Dimensions & Safe Zones",
  description:
    "The exact YouTube banner (channel art) size for 2026 — 2560×1440px explained, what gets cropped on TV, desktop, and mobile, and how to design one that looks great everywhere.",
  keywords: [
    "youtube banner size",
    "youtube channel art size",
    "youtube banner dimensions",
    "youtube banner safe zone",
    "youtube banner size 2026",
    "youtube channel art dimensions",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "YouTube Banner Size Guide 2026 — Exact Dimensions & Safe Zones",
    description:
      "The exact YouTube banner size for 2026 — 2560×1440px total canvas, 1546×423px safe zone visible on all devices. Design tips and free maker included.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "YouTube Banner Size Guide 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Banner Size Guide 2026 — Exact Dimensions & Safe Zones",
    description:
      "2560×1440px total, 1546×423px safe zone. Everything you need to design a YouTube banner that works on TV, desktop, tablet, and mobile.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "YouTube Banner Size Guide",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "YouTube Banner Size Guide 2026 — Exact Dimensions & Safe Zones",
      description:
        "The exact YouTube banner size for 2026 — 2560×1440px explained, safe zones, device breakdown, and design tips.",
      url: PAGE_URL,
      datePublished: "2026-05-30",
      dateModified: "2026-05-30",
      author: { "@type": "Organization", name: "ClickThumb", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "ClickThumb",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the correct YouTube banner size in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct YouTube banner (channel art) size is 2560×1440 pixels. This is the only size that displays at full resolution on TV screens. The maximum file size is 6MB and accepted formats are JPG and PNG.",
          },
        },
        {
          "@type": "Question",
          name: "What is the YouTube banner safe zone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The YouTube banner safe zone is the center 1546×423 pixels of the 2560×1440px canvas. This area is visible on every device — TV, desktop, tablet, and mobile. Keep all important content (text, logo, branding) inside this zone. Everything outside it will be cropped on smaller screens.",
          },
        },
        {
          "@type": "Question",
          name: "What file format should a YouTube banner be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "YouTube banners should be JPG or PNG, with a maximum file size of 6MB. PNG is recommended when your banner contains text or a logo with sharp edges, as it preserves crispness. JPG works well for photographic backgrounds.",
          },
        },
        {
          "@type": "Question",
          name: "How does the YouTube banner look on mobile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On mobile, YouTube shows only the center 1546×423 pixels of your banner. The sides of the banner are cropped. This means any text or logo placed in the outer portions of the full 2560×1440px canvas will not be visible on mobile.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a 1280×720 image for a YouTube banner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "YouTube requires the banner to be at least 2048×1152px to display correctly. While smaller images may upload, they will appear blurry or stretched on larger screens, especially TVs. Always use the full 2560×1440px recommended size for best results.",
          },
        },
        {
          "@type": "Question",
          name: "How do I update my YouTube channel banner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To update your YouTube channel banner, go to youtube.com, click your profile icon, then Your channel. Click Customize channel, then the pencil icon on the banner area. Click Change photo, upload your new banner image, and click Done. Changes are saved immediately.",
          },
        },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
