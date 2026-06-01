import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-valorant-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a Valorant Thumbnail (Free, 2026)",
  description:
    "Step-by-step guide to making Valorant thumbnails that stand out — correct size, agent showcase, rank display, Valorant Red color strategy, dark backgrounds, and clutch moment design. Free maker included.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a Valorant Thumbnail That Stands Out (2026)",
    description:
      "Agent showcase, rank display, dark backgrounds, and color strategy for high-CTR Valorant thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a Valorant Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Valorant Thumbnail (2026 Guide)",
    description:
      "Agent showcase, rank display, and color strategy for Valorant thumbnails.",
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
          name: "How to Make a Valorant Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a Valorant Thumbnail That Stands Out (2026)",
      description:
        "Complete guide to Valorant thumbnails: correct size, agent showcase strategy, rank display, Valorant Red color palette, dark backgrounds, clutch moment design, and ability visual elements.",
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
          name: "What size should a Valorant YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at a 16:9 aspect ratio. This is YouTube's required size for all video thumbnails. Export as JPG at quality 85 under 2MB. Valorant thumbnails with dark backgrounds and clean agent artwork typically come in well under 500KB at these settings.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for Valorant thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Valorant Red (#ff4655) paired with dark or near-black backgrounds is the defining color combination for Valorant content. It mirrors the game's official branding and immediately signals Valorant to any player scrolling through YouTube. Secondary accent colors depend on agent role: blue for Controllers (Viper, Astra), purple for Duelists (Jett, Reyna), green for Initiators (Sova, Skye).",
          },
        },
        {
          "@type": "Question",
          name: "Should I show my rank in a Valorant thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for rank-specific content. Rank icons (Iron, Bronze, Silver, Gold, Platinum, Diamond, Ascendant, Immortal, Radiant) are immediately recognizable to Valorant players and serve as powerful filtering signals — viewers searching for Plat-level guides will click a thumbnail featuring the Platinum icon faster than one with generic text. Display the rank icon prominently and clearly.",
          },
        },
        {
          "@type": "Question",
          name: "Which Valorant agent should I feature in thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Feature the agent your video is actually about. Agent-specific thumbnails get significantly higher CTR from players who main that agent or are learning it. For general Valorant content, Jett, Reyna, and Sage are the most recognized agents. For aggressive or highlight content, Jett's silhouette and Reyna's ability visuals are highly effective. Feature the agent's face or signature ability as the dominant visual element.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a clutch moment thumbnail for Valorant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Clutch moment thumbnails perform best with: (1) a screenshot or replay frame of the peak-action moment as the background, (2) the clutch scenario displayed clearly in text ("1v5 CLUTCH", "LAST ROUND WIN"), (3) a dramatic face reaction if you use facecam, and (4) Valorant Red accents to frame the action. The number of enemies in the clutch should be prominent — the higher the number, the more impressive the hook.',
          },
        },
        {
          "@type": "Question",
          name: "What font works best for Valorant thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Valorant uses a custom geometric sans-serif font. For thumbnails, a clean, bold geometric font (Rajdhani, Valorax, or Bebas Neue) that mirrors Valorant's precise, tactical aesthetic works well. Avoid Impact's condensed, casual look — the Valorant audience is older and more design-literate than casual gaming audiences. Always add a stroke or glow to ensure readability against dark backgrounds.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a Valorant thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free Valorant Thumbnail Maker at click-thumb.com/valorant-thumbnail-maker. Pre-configured at 1280×720px with Valorant-style templates featuring dark backgrounds, agent artwork areas, and Valorant Red accents. No software or account required.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Valorant thumbnails different from other FPS thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Valorant thumbnails are more design-precise and tactical than most FPS thumbnails. The game's audience is older (late teens to mid-20s) and responds to clean, professional design rather than chaotic energy. Dark backgrounds with sharp agent artwork and clean geometric text perform better than bright, cluttered layouts. The Valorant Red accent color is the primary brand signal — use it intentionally rather than as a random color choice.",
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
