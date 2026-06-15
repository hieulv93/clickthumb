import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-league-of-legends-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a League of Legends Thumbnail (Free, 2026)",
  description:
    "Step-by-step guide to making LoL thumbnails that get clicks — correct size, champion showcase strategy, rank climb design, LoL gold color palette, and text rules.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a League of Legends Thumbnail (2026)",
    description:
      "Champion showcase, rank emblems, and the LoL gold-teal palette for high-CTR League of Legends thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a League of Legends Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a League of Legends Thumbnail (2026 Guide)",
    description:
      "Champion art, Challenger emblems, and LoL color strategy for high-CTR thumbnails.",
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
          name: "How to Make a League of Legends Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "How to Make a League of Legends Thumbnail That Gets Clicked (2026)",
      description:
        "Complete guide to LoL thumbnails: correct size, champion showcase, rank climb design, color palette, and text strategy for every content type.",
      url: PAGE_URL,
      datePublished: "2026-06-15",
      dateModified: "2026-06-15",
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
          name: "What size should a League of Legends YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at 16:9 aspect ratio — YouTube's standard thumbnail size. Export as JPG at quality 85, targeting under 500KB. LoL thumbnails with dark navy backgrounds and high-contrast champion art typically compress to under 400KB.",
          },
        },
        {
          "@type": "Question",
          name: "What champion should I use in my LoL thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use whichever champion your video covers. High-click champions in 2026 include Jinx, Ahri, Zed, Yasuo, Yone, and Arcane-related champions. Always use a high-resolution splash art or loading screen render, and feature the champion's face at a 3/4 angle for maximum recognition at small sizes.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for LoL thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LoL's signature palette: deep navy (#010A13) as background, LoL gold (#C89B3C) as primary accent, teal (#0BC4E3) as secondary accent, and bright white for text. This combination is immediately recognizable to the 160M+ League of Legends player base and signals authentic LoL content before the viewer reads a word of text.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a rank climb LoL thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Feature the target rank emblem (Challenger is the strongest CTR signal) prominently on one side. Add the champion used to climb on the other side. Include rank progression text ('IRON TO CHALLENGER') and a stat like LP/game or win rate. Keep text to 4–5 words maximum for readability at preview size.",
          },
        },
        {
          "@type": "Question",
          name: "What text should I put on a League of Legends thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maximum 5 words in bold uppercase. Effective patterns: 'IRON TO CHALLENGER', 'BEST JUNGLE GUIDE 2026', 'S-TIER CARRY CHAMPION', 'PENTAKILL HIGHLIGHTS', 'CHALLENGER IN 30 GAMES'. Use Impact or Bebas Neue font with a 3–4px black stroke outline on white text.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a LoL thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free Gaming Thumbnail Maker at click-thumb.com/gaming-thumbnail-maker. Pre-set at 1280×720px with dark background templates and bold font presets. Upload your champion art, add text, and download. No software, no account required.",
          },
        },
        {
          "@type": "Question",
          name: "Should I show my rank emblem in LoL thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for ranked content — the Challenger emblem is the strongest CTR signal in LoL thumbnail design. Even for non-ranked content, including the rank you're playing at adds credibility. The Challenger or Grandmaster emblem signals high-level play that attracts viewers looking to improve.",
          },
        },
        {
          "@type": "Question",
          name: "What font should I use for LoL thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bold condensed fonts work best: Impact (classic, free), Bebas Neue (clean condensed), Anton (Google Font, free), or Montserrat Black (versatile). All LoL text should be in uppercase with a 3–4px black stroke outline for readability across dark and bright background areas.",
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
