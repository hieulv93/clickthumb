import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/facebook-cover-photo-size-guide/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Facebook Cover Photo Size Guide 2026 — Dimensions & Design Tips",
  description:
    "The exact Facebook cover photo size for 2026 — 851×315px on desktop, cropped to 640×360px on mobile. Safe zones, design rules, and how to make one free.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Facebook Cover Photo Size Guide 2026 — Dimensions & Design Tips",
    description:
      "851×315px on desktop, cropped to 640×360px on mobile. Profile picture overlap, safe zones, and design tips for Facebook cover photos in 2026.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Facebook Cover Photo Size Guide 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Cover Photo Size Guide 2026 — Dimensions & Design Tips",
    description:
      "Exact dimensions: 851×315px desktop, 640×360px mobile crop. Profile picture overlap zone, safe zones, and free cover photo maker.",
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
          name: "Facebook Cover Photo Size Guide",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Facebook Cover Photo Size Guide 2026 — Dimensions & Design Tips",
      description:
        "The exact Facebook cover photo size for 2026, mobile crop, profile picture overlap zone, safe zones, and design tips.",
      url: PAGE_URL,
      datePublished: "2026-05-30",
      dateModified: "2026-05-30",
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
          name: "What is the correct Facebook cover photo size in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct Facebook cover photo size is 851×315 pixels for desktop display. On mobile, Facebook automatically crops the cover to 640×360 pixels, cutting approximately 106px from each side. Design your cover at 851×315px and keep important content centered within the 640×315px middle zone.",
          },
        },
        {
          "@type": "Question",
          name: "How does a Facebook cover photo look on mobile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On mobile, Facebook crops the cover photo to 640×360 pixels. The sides are cut — approximately 106px from the left and right edges of the 851px-wide image are not visible. The bottom portion may also show slightly differently. Keep all text and important visuals centered in the 640px-wide middle zone to ensure they appear correctly on mobile.",
          },
        },
        {
          "@type": "Question",
          name: "Where does the profile picture overlap on a Facebook cover photo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On personal profiles, the profile picture (approximately 170×170 pixels on desktop) overlaps the bottom-left corner of the cover photo. Avoid placing text or important visual elements in the bottom-left corner of your cover. For Pages, the profile picture placement is similar but slightly different — always preview before publishing.",
          },
        },
        {
          "@type": "Question",
          name: "What file size should a Facebook cover photo be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Facebook recommends keeping cover photos under 100KB to reduce compression artifacts. Facebook re-compresses uploaded images — uploading a highly compressed JPG results in double-compression that severely degrades quality. Upload a clean PNG or high-quality JPG and let Facebook handle the compression at acceptable quality.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use PNG or JPG for a Facebook cover photo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use PNG for cover photos containing text, logos, or flat graphic elements — PNG avoids JPG compression artifacts on sharp edges. Use JPG for photographic covers without text overlays. Facebook converts all images internally, but starting with PNG preserves quality through that conversion.",
          },
        },
        {
          "@type": "Question",
          name: "How do I update my Facebook cover photo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To update your Facebook cover photo, go to your profile or Page, hover over your existing cover photo, and click the camera icon or Update Cover Photo button. Select Upload Photo, choose your image (851×315px recommended), drag to reposition it, and click Save Changes.",
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
