import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-call-of-duty-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a Call of Duty Thumbnail (Free, 2026)",
  description:
    "Step-by-step guide to making Call of Duty thumbnails that get clicks — nuke design, weapon showcase, Warzone dark palette, MW military colors, and text strategy.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a Call of Duty Thumbnail (2026)",
    description:
      "Nuke design, weapon showcases, and CoD's dark military palette for high-CTR Call of Duty thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a Call of Duty Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Call of Duty Thumbnail (2026 Guide)",
    description:
      "Nuke thumbnails, weapon showcases, and CoD color strategy for Warzone and MW content.",
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
          name: "How to Make a Call of Duty Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a Call of Duty Thumbnail That Gets Clicked (2026)",
      description:
        "Complete CoD thumbnail guide: nuke design, weapon showcase, Warzone dark cinematic style, MW military palette, Black Ops style, and text strategy.",
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
          name: "What size should a Call of Duty YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at 16:9 aspect ratio. Export as JPG quality 85, targeting under 500KB. CoD thumbnails use dark backgrounds that compress efficiently — typical sizes are 200–400KB, far below YouTube's 2MB limit.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a nuke thumbnail for Call of Duty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Core elements: nuclear explosion or mushroom cloud background, large '30-0' or '30 KILLS' kill count text, your operator with the weapon used, and orange-red or white glow effects for the nuclear aesthetic. The 30-0 kill count is the most important element — it immediately communicates the achievement. Bold uppercase text ('TACTICAL NUKE') with a black stroke outline.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for Warzone thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warzone palette: very dark near-black (#0a0a0a to #1a1a1a) as background, orange-red (#FF4500) for fire and explosion accents, bright white for primary text, smoke grey for depth. This cinematic dark palette matches Warzone's visual identity and signals the game immediately to players scrolling search results.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Warzone and MW thumbnail styles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Warzone: ultra-dark backgrounds, dramatic orange-red fire accents, cinematic atmosphere — emphasizes the battle royale survival stakes. Modern Warfare: military realism with tan (#8B7355), olive green, and concrete grey — more grounded and tactical. Matching your thumbnail style to the specific CoD title improves CTR and viewer retention.",
          },
        },
        {
          "@type": "Question",
          name: "What text should I put on a Call of Duty thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maximum 5 words in bold uppercase: 'TACTICAL NUKE 30-0', 'CHAMPION SQUAD', 'BEST MCW BUILD', 'BROKEN LOADOUT 2026', 'GOING IRIDESCENT'. Always add a black stroke outline to white text — CoD's mixed dark/bright backgrounds make stroke outlines essential for readability.",
          },
        },
        {
          "@type": "Question",
          name: "Should I show my weapon or operator in a CoD thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For loadout guides: feature the weapon as the dominant visual (40–50% of frame) at a 3/4 angle showing attachments. For kill and highlight content: operator with the weapon used performs better — it connects the personal achievement to the visual. For Warzone wins: operator skin + weapon + win score.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a Call of Duty thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free Gaming Thumbnail Maker at click-thumb.com/gaming-thumbnail-maker. Pre-configured at 1280×720px with dark military-style templates and bold font presets. Upload your screenshot, add text, download. No software download or account required.",
          },
        },
        {
          "@type": "Question",
          name: "What font works best for CoD thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bold condensed fonts for maximum readability: Impact (aggressive, classic), Bebas Neue (clean condensed), Anton (Google Font, free). All text should be uppercase with a 3–4px black stroke outline. CoD's dark-to-mid-tone backgrounds work with white primary text; orange or red accent text for kill counts and key stats.",
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
