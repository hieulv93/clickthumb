import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-minecraft-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make a Minecraft Thumbnail (Free, 2026)",
  description:
    "Complete guide to making Minecraft thumbnails that get more views — correct size, pixel art vs screenshot styles, Steve/Alex and Creeper placement, survival vs PvP color strategies. Free maker included.",
  keywords: [
    "how to make a minecraft thumbnail",
    "minecraft thumbnail",
    "minecraft thumbnail maker",
    "minecraft thumbnail size",
    "minecraft youtube thumbnail",
    "minecraft thumbnail design",
    "minecraft thumbnail tips",
    "minecraft creeper thumbnail",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make a Minecraft Thumbnail That Gets More Views (2026)",
    description:
      "Size, pixel art vs screenshots, color palettes, and design tips for high-CTR Minecraft thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make a Minecraft Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Minecraft Thumbnail (2026 Guide)",
    description:
      "Size, pixel art tips, color palettes, and step-by-step guide for Minecraft thumbnails.",
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
          name: "How to Make a Minecraft Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make a Minecraft Thumbnail That Gets More Views (2026)",
      description:
        "Complete guide to Minecraft thumbnails: correct size, pixel art vs screenshot styles, Steve/Alex placement, Creeper face strategy, survival vs PvP color approaches, and common mistakes.",
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
          name: "What size should a Minecraft YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at a 16:9 aspect ratio. This is YouTube's required size for all thumbnails. Keep the file under 2MB and export as JPG at quality 85. Minecraft thumbnails with flat-color pixel art backgrounds can also use PNG without a large size penalty.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use pixel art or screenshots for Minecraft thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both approaches work, and the best choice depends on content type. Pixel art backgrounds (blocky, stylized) feel authentically Minecraft and stand out with a unique visual signature. Screenshot backgrounds work best when the screenshot captures a genuinely dramatic moment — a massive build, a Creeper explosion, or a PvP kill. Screenshot backgrounds without a dramatic scene look like any other gaming thumbnail.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for Minecraft thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minecraft's iconic color palette includes grass green (#5d7c15), diamond blue (#44afd1), gold (#f9a825), and TNT red (#cc2200). For survival and building content, green and brown backgrounds signal the game immediately. For PvP content, darker backgrounds with red or orange accents communicate intensity. Diamond blue is the highest-performing accent color for highlight and achievement content.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Steve, Alex, or a custom skin for Minecraft thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use your actual in-game skin. Steve and Alex are recognizable but generic — your custom skin is your brand identity. If you are building a channel, consistency in your skin across thumbnails helps viewers recognize your content at a glance. If you use a very recognizable custom skin (a famous YouTuber's skin, for example), use it prominently as a recognition signal.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Creeper face effective for Minecraft thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the Creeper face is one of the most universally recognized gaming icons. Featuring a Creeper prominently in a thumbnail immediately signals Minecraft content to anyone scrolling through YouTube. It works especially well for survival, challenge, or horror-themed Minecraft content. For building, redstone, or creative content, the Creeper is less relevant than showcasing the actual builds.",
          },
        },
        {
          "@type": "Question",
          name: "What font works best for Minecraft thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two approaches: (1) Use the Minecraft font (Mojangles or a Minecraft-style pixelated font) for content where staying on-brand is important — it instantly signals Minecraft and has strong recognition value. (2) Use a bold, heavy sans-serif (Impact, Bebas Neue, Anton) for high-energy content like PvP, challenge, or survival videos where urgency and energy matter more than brand consistency. Always add a dark stroke to ensure text reads over any background.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a Minecraft thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free Minecraft Thumbnail Maker at click-thumb.com/minecraft-thumbnail-maker. Pre-configured at 1280×720px with Minecraft-style templates, pixel art backgrounds, and bold fonts. Upload your screenshot or character, add text, and download instantly. No software or account required.",
          },
        },
        {
          "@type": "Question",
          name: "How do Minecraft thumbnail strategies differ for survival vs creative vs PvP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Survival thumbnails emphasize challenge, danger, and achievement — Creeper faces, death screens, and milestone numbers work well. Creative and building thumbnails lead with the build itself as the visual centerpiece, because viewers click based on seeing impressive constructions. PvP thumbnails use darker, more intense color schemes with kill counts and combatant face-offs — closer to a traditional gaming thumbnail. Matching your thumbnail style to the content type increases CTR because it sets the right expectation.",
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
