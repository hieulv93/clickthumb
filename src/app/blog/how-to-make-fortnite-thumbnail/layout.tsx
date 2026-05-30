import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-fortnite-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a Fortnite Thumbnail (Free, 2026 Guide)",
  description:
    "Step-by-step guide to making a Fortnite thumbnail that gets more clicks — correct size, color strategy, text rules, character placement, and common mistakes to avoid.",
  keywords: [
    "how to make a fortnite thumbnail",
    "fortnite thumbnail",
    "fortnite thumbnail maker",
    "fortnite thumbnail size",
    "fortnite youtube thumbnail",
    "fortnite thumbnail design",
    "fortnite thumbnail ideas",
    "gaming thumbnail fortnite",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a Fortnite Thumbnail That Gets Clicked (2026)",
    description:
      "Size specs, color strategy, and step-by-step guide for Fortnite thumbnails that increase CTR.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a Fortnite Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Fortnite Thumbnail (2026 Guide)",
    description:
      "Size specs, color tips, and step-by-step guide for high-CTR Fortnite thumbnails.",
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
          name: "How to Make a Fortnite Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a Fortnite Thumbnail That Gets Clicked (2026)",
      description:
        "Complete guide to creating Fortnite thumbnails: correct size, color strategy, text rules, character placement, and common mistakes to avoid.",
      url: PAGE_URL,
      datePublished: "2026-05-05",
      dateModified: "2026-05-05",
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
          name: "What size should a Fortnite YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels (16:9). This is YouTube's recommended size for all thumbnails. Design at this resolution and export as JPG or PNG under 2MB.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Photoshop to make Fortnite thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Browser-based tools like ClickThumb are pre-configured at 1280×720 with Fortnite-style templates. You can create a complete thumbnail in under two minutes with no design software.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use my face or a Fortnite character in the thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both work. Face + character thumbnails tend to outperform character-only thumbnails because faces trigger emotional recognition. If you play face-cam, overlay your reaction next to the character.",
          },
        },
        {
          "@type": "Question",
          name: "What font works best for Fortnite thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Heavy, condensed fonts — Impact, Anton, Bebas Neue, or Black Han Sans. Always add a dark outline or shadow so text reads over any background.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for Fortnite thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High-saturation neon colors match Fortnite's visual identity — electric blue, hot pink, lime green, bright orange. Avoid muted or desaturated palettes which look out of place in the Fortnite content category.",
          },
        },
        {
          "@type": "Question",
          name: "How many words should I use on a Fortnite thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maximum 5 words, ideally 3–4. At mobile thumbnail size (~120px wide), only large, high-contrast text remains readable. The text should communicate the hook, not the full video title.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get more clicks on my Fortnite thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Test one variable at a time — background color, text hook, or character pose. Check YouTube Studio CTR data after 48 hours. The thumbnail with higher CTR wins. Consistent testing across 10+ videos reveals what works for your specific audience.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Fortnite thumbnails different from other gaming thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fortnite thumbnails are brighter and more saturated than most gaming thumbnails. The game's visual identity is neon and colorful — thumbnails that match this palette feel native to Fortnite content. COD uses dark tactical colors, CS2 uses blue or orange on black. Fortnite thumbnails stand out in YouTube feeds because they are designed to be louder and more colorful than almost any other gaming genre.",
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
