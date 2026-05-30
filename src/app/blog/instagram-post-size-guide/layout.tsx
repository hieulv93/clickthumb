import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/instagram-post-size-guide/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Instagram Post Size Guide 2026 — All Formats & Dimensions",
  description:
    "Exact Instagram post sizes for 2026 — square, portrait, landscape, Stories, Reels, and carousel. The right dimensions for every format so your images never get cropped.",
  keywords: [
    "instagram post size",
    "instagram image size 2026",
    "instagram photo dimensions",
    "instagram story size",
    "instagram reel size",
    "instagram carousel size",
    "instagram square size",
    "instagram portrait size",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Instagram Post Size Guide 2026 — All Formats & Dimensions",
    description:
      "Exact Instagram post sizes for square, portrait, landscape, Stories, Reels, and carousel — so your images are never cropped.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Instagram Post Size Guide 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Post Size Guide 2026 — All Formats",
    description:
      "Exact dimensions for every Instagram format — square, portrait, Stories, Reels, carousel.",
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
          name: "Instagram Post Size Guide 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Instagram Post Size Guide 2026 — All Formats & Dimensions",
      description:
        "Complete guide to Instagram image sizes in 2026 — square, portrait, landscape, Stories, Reels, and carousel dimensions so your images are never cropped.",
      url: PAGE_URL,
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
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
          name: "What is the best size for an Instagram post in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a square post: 1080×1080px (1:1). For portrait (recommended for feed reach): 1080×1350px (4:5). For landscape: 1080×566px (1.91:1). Instagram recommends portrait because it takes up more screen space in the feed, which correlates with higher engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What size should Instagram Stories be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram Stories should be 1080×1920px (9:16 aspect ratio). Keep interactive elements — stickers, text, CTAs — within the center safe zone: 1080×1420px (leaving 250px margin at top and bottom). The top and bottom areas are covered by the UI.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Instagram Reels size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram Reels should be 1080×1920px (9:16), the same as Stories. Keep important content within the center safe zone to avoid it being covered by the Reels UI — the bottom 250px is overlaid with the caption and like/comment icons.",
          },
        },
        {
          "@type": "Question",
          name: "What size is an Instagram carousel post?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram carousel posts use the same dimensions as regular posts: square (1080×1080), portrait (1080×1350), or landscape (1080×566). All slides in a carousel must use the same aspect ratio — Instagram will crop slides that differ from the first image.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Instagram crop my photos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram crops images that don't match its supported aspect ratios. The platform only supports images between 4:5 (portrait) and 1.91:1 (landscape). Images outside this range — such as 9:16 vertical photos for the feed — are cropped to 4:5 automatically. Always size your image correctly before uploading.",
          },
        },
        {
          "@type": "Question",
          name: "What file format should I use for Instagram posts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JPEG for photos (Instagram recompresses all uploads, and JPEG gives better color rendering after recompression). PNG for graphics with text or transparent elements. Instagram accepts both JPG and PNG. Maximum file size is 30MB for images.",
          },
        },
        {
          "@type": "Question",
          name: "Does Instagram reduce image quality when you upload?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Instagram recompresses all uploaded images to reduce file size. To minimize quality loss: upload at exactly 1080px wide (not larger), save JPEGs at 80–90% quality before uploading, and use sRGB color profile. Uploading at 2× resolution does not help — Instagram still downsamples to 1080px.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Instagram profile picture size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram profile pictures display at 110×110px on mobile and 180×180px on desktop, but the platform stores them at 320×320px. Upload at 320×320px or larger in a 1:1 aspect ratio. The image is cropped to a circle — keep your subject centered and avoid important elements in the corners.",
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
