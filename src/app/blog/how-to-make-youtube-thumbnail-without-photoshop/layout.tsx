import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-youtube-thumbnail-without-photoshop/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a YouTube Thumbnail Without Photoshop (Free, 2026)",
  description:
    "Make professional YouTube thumbnails for free without Photoshop — step-by-step guide covering the right size, templates, design tips, and common mistakes to avoid.",
  keywords: [
    "how to make youtube thumbnail without photoshop",
    "youtube thumbnail without photoshop",
    "free youtube thumbnail maker",
    "youtube thumbnail maker no photoshop",
    "make youtube thumbnail free",
    "youtube thumbnail design free",
    "photoshop alternative thumbnail",
    "youtube thumbnail online free",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a YouTube Thumbnail Without Photoshop (Free, 2026)",
    description:
      "Step-by-step guide to professional YouTube thumbnails — no Photoshop, no cost, no watermark.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a YouTube Thumbnail Without Photoshop",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Without Photoshop — Free 2026 Guide",
    description:
      "Make professional YouTube thumbnails for free — no Photoshop, no design skills required.",
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
          name: "How to Make a YouTube Thumbnail Without Photoshop",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "How to Make a YouTube Thumbnail Without Photoshop (Free, 2026)",
      description:
        "Complete guide to creating professional YouTube thumbnails without Photoshop — free tools, correct size specifications, design tips, and common mistakes to avoid.",
      url: PAGE_URL,
      datePublished: "2026-05-04",
      dateModified: "2026-05-04",
      author: {
        "@type": "Person",
        name: "Alex Kim",
        url: `${SITE_URL}/about/`,
      },
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
          name: "Can you make YouTube thumbnails without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Browser-based tools like ClickThumb create thumbnails at exactly 1280×720px — the correct YouTube size — without any software download or design experience. You get templates, text controls, and direct download with no watermark.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best free alternative to Photoshop for YouTube thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ClickThumb is built specifically for thumbnails — every canvas is pre-sized to 1280×720px so you never have to enter dimensions manually. Unlike general design tools, it includes templates optimized for click-through rate, not just visual appearance.",
          },
        },
        {
          "@type": "Question",
          name: "What size should a YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels (16:9 aspect ratio). Maximum file size 2MB. YouTube accepts JPG, PNG, GIF, or BMP. ClickThumb pre-sets the canvas to 1280×720 so you never have to calculate or enter dimensions.",
          },
        },
        {
          "@type": "Question",
          name: "Do free thumbnail makers put a watermark on downloads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some do, some do not. ClickThumb does not add any watermark to downloaded thumbnails — exports are clean JPG files ready to upload to YouTube. No account or subscription is required.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a good YouTube thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A good YouTube thumbnail has: (1) Bold text of 3–5 words with high contrast. (2) A clear focal point — face reaction, key character, or visual hook. (3) Saturated colors that stand out in YouTube search results. (4) A layout that is readable at ~120px wide (mobile thumbnail size). All of these can be achieved with a browser-based tool — Photoshop is not required.",
          },
        },
        {
          "@type": "Question",
          name: "Is Canva good for YouTube thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Canva works for thumbnails but has trade-offs: many premium templates are locked behind a $15/month subscription, and it's designed as a general tool rather than a thumbnail-specific one. ClickThumb is purpose-built for thumbnails with templates optimized for CTR, pre-set to 1280×720px, and completely free with no watermark.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to make a YouTube thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With a browser-based template tool, a complete YouTube thumbnail takes 5–10 minutes: choose a template (1 minute), upload background or pick a color (2 minutes), edit text (2 minutes), check readability at small size (1 minute), download (10 seconds). Experienced creators average under 5 minutes per thumbnail.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my YouTube thumbnails blurry even without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blurry thumbnails are caused by: exporting at too low a resolution (must be 1280×720px minimum), saving with heavy compression (keep JPG quality at 80+), or uploading a file that YouTube then downsamples. Always create at exactly 1280×720, export at quality 80–90, and keep the file under 2MB.",
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
