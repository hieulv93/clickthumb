import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-pubg-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a PUBG Thumbnail (Free, 2026)",
  description:
    "Step-by-step guide to making PUBG thumbnails that get clicks — correct size, chicken dinner design, weapon showcase, Erangel map colors, and zone circle visuals.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a PUBG Thumbnail (2026)",
    description:
      "Chicken dinner design, weapon showcases, and the correct military color palette for high-CTR PUBG thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a PUBG Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a PUBG Thumbnail (2026 Guide)",
    description:
      "Chicken dinner design, weapon showcases, and color strategy for PUBG thumbnails.",
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
          name: "How to Make a PUBG Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a PUBG Thumbnail That Gets Clicked (2026)",
      description:
        "Complete guide to PUBG thumbnails: correct size, chicken dinner design, weapon showcase, Erangel color palette, map backgrounds, and text strategy.",
      url: PAGE_URL,
      datePublished: "2026-06-08",
      dateModified: "2026-06-08",
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
          name: "What size should a PUBG YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at a 16:9 aspect ratio — YouTube's standard thumbnail size. Export as JPG at quality 85, keeping the file under 2MB. PUBG thumbnails with dark backgrounds and high-contrast weapon art typically compress to under 400KB.",
          },
        },
        {
          "@type": "Question",
          name: "What text should I put on a PUBG thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For chicken dinner content: 'WINNER WINNER' or 'CHICKEN DINNER' in bold uppercase with a yellow-gold accent plus your kill count ('22 KILLS'). For tips: the specific mechanic ('BEST DROP SPOT', 'NO HIT ZONE 6'). Keep text to 3–5 words for readability at preview size.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for PUBG thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PUBG's visual identity is military tactical — dusty orange-yellow (Erangel map lighting), dark army green, and near-black backgrounds. Gold and bright white work well for text. The blue zone circle (#1e90ff) is uniquely PUBG and instantly recognizable. Avoid neon colors — PUBG's audience responds to realistic military aesthetics.",
          },
        },
        {
          "@type": "Question",
          name: "Should I show weapons or character in PUBG thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both work. Weapon-focused thumbnails perform better for gear guides and tips content. Character-focused thumbnails work better for highlight and clutch content. For weapon guides, feature the weapon at an angle that shows its distinctive silhouette as the dominant visual element.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a chicken dinner PUBG thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Classic structure: dark background with Erangel atmosphere, bold 'WINNER WINNER CHICKEN DINNER' text in yellow-gold with black stroke outline, your kill count ('22 KILLS'), and your character with the final-kill weapon. The kill count alongside the chicken dinner phrase is the strongest CTR combination.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a PUBG thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free Gaming Thumbnail Maker at click-thumb.com/gaming-thumbnail-maker. Pre-set at 1280×720px with customizable templates for tactical shooter content. No software download or account required.",
          },
        },
        {
          "@type": "Question",
          name: "Which PUBG map should I use as thumbnail background?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Erangel is the most recognizable PUBG map for general thumbnails — golden-hour lighting and Eastern European countryside signal PUBG immediately. For map-specific guides use the matching map: Miramar (desert beige), Sanhok (jungle green), Vikendi (snow white), Taego (Korean cityscape).",
          },
        },
        {
          "@type": "Question",
          name: "How is a PUBG thumbnail different from other battle royale thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PUBG thumbnails should feel tactical and realistic — muted military colors, dust atmosphere, and clean weapon renders rather than cartoon or neon aesthetics. Fortnite uses bright primary colors. Warzone is ultra-dark cinematic. PUBG sits between: realistic enough to feel authentic, clear enough to read at small sizes.",
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
