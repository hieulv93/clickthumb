import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-gta-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a GTA Thumbnail (Free, 2026)",
  description:
    "Step-by-step guide to making GTA 5 thumbnails that get more clicks — GTA Gold color palette, heist and money themes, luxury cars, character customization, GTA Online grind vs story mode strategies. Free maker included.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a GTA 5 Thumbnail That Gets More Clicks (2026)",
    description:
      "GTA Gold palette, heist themes, luxury cars, and GTA Online vs story mode design strategies for high-CTR GTA thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a GTA Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a GTA Thumbnail (2026 Guide)",
    description:
      "GTA Gold palette, money themes, heist design, and step-by-step guide for GTA 5 thumbnails.",
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
          name: "How to Make a GTA Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a GTA 5 Thumbnail That Gets More Clicks (2026)",
      description:
        "Complete guide to GTA thumbnails: size requirements, GTA Gold color palette, heist and money themes, luxury car placement, character customization, night-city backgrounds, GTA Online grind vs story mode design strategies.",
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
          name: "What size should a GTA YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at a 16:9 aspect ratio. This is YouTube's required size for all video thumbnails including GTA 5 content. Export as JPG at quality 85, keeping the file under 2MB. GTA thumbnails with night-city backgrounds and neon lighting typically compress well at these settings.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for GTA thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GTA Gold (#c4a535) is the signature color for GTA Online money, luxury, and success content — it mirrors the gold used throughout GTA's UI for cash, rankings, and achievement. Pair it with dark or near-black backgrounds. Night-city neon backgrounds (cyan, purple, orange) work well for cinematic GTA content. Red and white can be used for action and Wanted-level content.",
          },
        },
        {
          "@type": "Question",
          name: "What GTA content types perform best with thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'GTA Online money and grind content consistently performs best — thumbnails featuring large money amounts ("$50 MILLION", "RICHEST PLAYER") and heist content drive high CTR because they appeal to the aspirational desire to have in-game wealth. Luxury car showcases, character customization reveals, and high-level property tours also perform well. Story mode content has a separate audience and performs best with cinematic, character-focused thumbnails.',
          },
        },
        {
          "@type": "Question",
          name: "Should I show money in GTA thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — money is the primary aspirational element in GTA Online content. Large cash amounts displayed prominently (GTA Online cash on screen, money bags, in-game bank balance) are among the most reliable click drivers in the GTA content category. The money amount should be visually prominent and legible. Use GTA Gold (#c4a535) as the color for money text to stay consistent with the game's visual language.",
          },
        },
        {
          "@type": "Question",
          name: "How do luxury cars improve GTA thumbnail CTR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury cars are a primary status symbol in GTA Online — they represent achievement, wealth, and gameplay progress. Featuring an expensive or rare vehicle as the visual centerpiece of a thumbnail communicates wealth and aspiration immediately. Use cinematic camera angles (low angle, slight tilt) and make the car occupy at least 50% of the canvas. Night-city or garage settings with dramatic lighting work best.",
          },
        },
        {
          "@type": "Question",
          name: "What is the GTA Wanted Level thumbnail strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Wanted Level content — videos about achieving maximum Wanted stars, escaping police, or surviving military pursuit — uses red as the primary accent color (mirroring the red Wanted stars in-game) on dark backgrounds. The Wanted star count ("5 STARS", "MAX WANTED") is a clear, recognizable hook. Pair with police chase screenshots or helicopter pursuit screenshots for maximum visual context.',
          },
        },
        {
          "@type": "Question",
          name: "How do I make a GTA thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free GTA Thumbnail Maker at click-thumb.com/gta-thumbnail-maker. Pre-configured at 1280×720px with GTA-style templates featuring dark backgrounds, GTA Gold accents, and luxury/heist design elements. No software or account required.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between GTA Online and story mode thumbnail strategies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GTA Online thumbnails emphasize wealth, grind, and multiplayer achievements — money amounts, luxury properties, rare vehicles, and heist completion rewards. The audience is active players grinding for in-game wealth. Story mode thumbnails lean cinematic — dramatic scenes, character moments (Michael, Trevor, Franklin), and mission-specific visuals. Story mode has a separate audience interested in narrative, missions, and single-player exploration.",
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
