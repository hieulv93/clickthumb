import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-roblox-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a Roblox Thumbnail (Free, 2026)",
  description:
    "Step-by-step guide to making a Roblox thumbnail that gets more clicks — correct size, color strategy, character placement, game-specific tips for Adopt Me, Blox Fruits, and Obby. Free tool included.",
  keywords: [
    "how to make a roblox thumbnail",
    "roblox thumbnail",
    "roblox thumbnail maker",
    "roblox thumbnail size",
    "roblox youtube thumbnail",
    "roblox thumbnail design",
    "adopt me thumbnail",
    "blox fruits thumbnail",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a Roblox Thumbnail That Gets Clicked (2026)",
    description:
      "Size specs, color strategy, and step-by-step guide for Roblox thumbnails that increase CTR.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a Roblox Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Roblox Thumbnail (2026 Guide)",
    description:
      "Size specs, color tips, and step-by-step guide for high-CTR Roblox thumbnails.",
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
          name: "How to Make a Roblox Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a Roblox Thumbnail That Gets Clicked (2026)",
      description:
        "Complete guide to creating Roblox thumbnails: correct size, color strategy, character placement, game-specific tips for Adopt Me, Blox Fruits, and Obby content.",
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
          name: "What size should a Roblox YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at a 16:9 aspect ratio. This is YouTube's required size for all video thumbnails, including Roblox content. Keep the file under 2MB and export as JPG at quality 85 for best results.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for Roblox thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bright, saturated colors perform best for Roblox thumbnails because the audience is primarily children and teens who respond to high-energy visuals. Roblox Red (#e00), electric yellow, sky blue, and lime green are the top-performing accent colors. Avoid dark, muted, or monochrome palettes — they look out of place in the Roblox content category.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use my Roblox avatar or my face in the thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both work well, and the combination of your real face plus your Roblox avatar tends to perform best. Showing your face signals a personal channel and builds trust with repeat viewers. Your Roblox avatar immediately signals the game. A side-by-side layout — face on one side, avatar on the other — is one of the most clicked formats in the Roblox category.",
          },
        },
        {
          "@type": "Question",
          name: "How many words should I use on a Roblox thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maximum 5 words, ideally 3. Roblox thumbnails are viewed on mobile screens where the thumbnail appears at roughly 120×67px. Only very large, high-contrast text in 3–5 words remains readable at that size. Use uppercase Impact or Bebas Neue at 80px or larger. The text should communicate the hook, not the full title.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Photoshop to make Roblox thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Browser-based tools like ClickThumb's Roblox Thumbnail Maker are pre-configured at 1280×720 with Roblox-style templates. You can create a complete, professional-looking thumbnail in under three minutes with no design software or skills required.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a Roblox thumbnail different from other gaming thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roblox thumbnails target a younger audience (ages 8–16) and use brighter, more playful visuals than most gaming content. The best Roblox thumbnails feature: cartoon-style avatar characters with expressive poses, very bright and saturated backgrounds, short readable text with rounded or bold fonts, and game-specific visual cues (pets for Adopt Me, swords for Blox Fruits).",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a Roblox thumbnail for Adopt Me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Adopt Me thumbnails perform best when pets are prominently featured alongside the avatar. Use pastel or bright backgrounds that feel friendly and cute. Feature your newest or rarest pet as the visual centerpiece. Text like "NEW PET!" or "RARE TRADE" communicates the hook immediately. Avoid dark or intense color schemes — the Adopt Me audience expects a warm, playful visual tone.',
          },
        },
        {
          "@type": "Question",
          name: "What font should I use for Roblox thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bold, heavy fonts work best — Impact, Anton, Bebas Neue, or Fredoka One for a more playful look that suits the younger Roblox audience. Always use a dark outline or stroke on all text so it reads over any background color. Avoid thin or script fonts — they become unreadable at small thumbnail sizes.",
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
