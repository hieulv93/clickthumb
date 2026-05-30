import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/og-image-size-guide/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "OG Image Size Guide 2026 — Open Graph Dimensions for Every Platform",
  description:
    "The correct OG image size for 2026: 1200×630px for Facebook, Twitter, LinkedIn, Slack, and Discord. Minimum sizes, text safe zones, and how to create one free.",
  keywords: [
    "og image size",
    "open graph image size",
    "og image dimensions 2026",
    "open graph image dimensions",
    "social media preview image size",
    "og:image size",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "OG Image Size Guide 2026 — Open Graph Dimensions for Every Platform",
    description:
      "1200×630px is the universal OG image standard for 2026. Platform-by-platform display sizes, minimum dimensions, text safe zones, and how to add og:image to your site.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "OG Image Size Guide 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OG Image Size Guide 2026 — Open Graph Dimensions for Every Platform",
    description:
      "1200×630px universal standard for Facebook, Twitter, LinkedIn, Slack, Discord. Minimum sizes, safe zones, and the og:image meta tag explained.",
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
          name: "OG Image Size Guide",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "OG Image Size Guide 2026 — Open Graph Dimensions for Every Platform",
      description:
        "The correct OG image size for 2026: 1200×630px for all major platforms. Platform breakdown, minimum sizes, safe zones, and og:image implementation.",
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
          name: "What is the correct OG image size in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The correct OG image size in 2026 is 1200×630 pixels. This is the universal standard that displays correctly on Facebook, Twitter, LinkedIn, Slack, Discord, and iMessage link previews. The aspect ratio is approximately 1.91:1. A minimum of 600×315px is accepted but 1200×630px is strongly recommended for sharp display on retina screens.",
          },
        },
        {
          "@type": "Question",
          name: "What is an OG image?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'An OG image (Open Graph image) is the preview image that appears when a URL is shared on social media platforms like Facebook, Twitter, LinkedIn, Slack, or Discord. It is defined in the HTML of a webpage using the meta tag: <meta property="og:image" content="https://yoursite.com/og-image.png">. Without this tag, social media platforms will try to find an image on the page automatically, often with poor results.',
          },
        },
        {
          "@type": "Question",
          name: "Is the OG image size the same for Twitter and Facebook?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 1200×630px works correctly on both Twitter and Facebook. Twitter technically specifies 1200×628px for summary_large_image cards (a 2px height difference) but in practice displays 1200×630px images without any visible cropping. Use 1200×630px as your single OG image — it works across all major platforms.",
          },
        },
        {
          "@type": "Question",
          name: "How do I add an OG image to my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Add the following meta tag to the <head> section of your HTML: <meta property="og:image" content="https://yoursite.com/og-image.png">. Also add: <meta property="og:image:width" content="1200"> and <meta property="og:image:height" content="630">. For Twitter specifically, add: <meta name="twitter:card" content="summary_large_image"> and <meta name="twitter:image" content="https://yoursite.com/og-image.png">.',
          },
        },
        {
          "@type": "Question",
          name: "How do I test my OG image?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the official social media debugger tools to test your OG image: Facebook Sharing Debugger (developers.facebook.com/tools/debug), Twitter Card Validator (cards-dev.twitter.com/validator), and LinkedIn Post Inspector (linkedin.com/post-inspector). These tools fetch your URL and show exactly how the link preview will appear when shared, including whether your og:image is loading correctly.",
          },
        },
        {
          "@type": "Question",
          name: "What should I put on an OG image?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An effective OG image should include: the page or article title (large, bold, readable text), your site name or logo for brand recognition, and a relevant background — either a brand color, pattern, or photo. Keep all text at least 50px from any edge to avoid cropping on platforms that display slightly different aspect ratios. Avoid putting critical information in the corners.",
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
