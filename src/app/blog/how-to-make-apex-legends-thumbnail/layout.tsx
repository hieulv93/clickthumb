import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/how-to-make-apex-legends-thumbnail/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "How to Make an Apex Legends Thumbnail (Free, 2026)",
  description:
    "Complete guide to Apex Legends thumbnails that get clicks — correct size, legend showcase, Champion Squad screen, Champion Orange palette, 20-bomb milestones, squad wipes, and seasonal content strategy.",
  keywords: [
    "how to make an apex legends thumbnail",
    "apex legends thumbnail",
    "apex legends thumbnail maker",
    "apex legends youtube thumbnail",
    "apex legends thumbnail design",
    "apex legends thumbnail size",
    "apex legends wraith thumbnail",
    "apex legends 20 bomb thumbnail",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Make an Apex Legends Thumbnail That Gets Clicks (2026)",
    description:
      "Legend showcase, Champion Orange color strategy, 20-bomb milestones, and squad wipe design for Apex Legends thumbnails.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Make an Apex Legends Thumbnail",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make an Apex Legends Thumbnail (2026 Guide)",
    description:
      "Legend showcase, Champion Orange palette, and milestone design for Apex thumbnails.",
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
          name: "How to Make an Apex Legends Thumbnail",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Make an Apex Legends Thumbnail That Gets Clicks (2026)",
      description:
        "Complete guide to Apex Legends thumbnails: size requirements, legend showcase strategy, Champion Orange color palette, kill count milestone design, squad wipe content, and seasonal legend updates.",
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
          name: "What size should an Apex Legends YouTube thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1280×720 pixels at a 16:9 aspect ratio. This is YouTube's required thumbnail size for all gaming content including Apex Legends. Export as JPG at quality 85, keeping the file under 2MB. Apex thumbnails with dark backgrounds and sharp legend artwork typically come in at 200–450KB at these settings.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for Apex Legends thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Champion Orange — the bright orange-gold color from the Champion Squad screen and Apex's branding — is the defining accent color for high-performing Apex Legends thumbnails. Pair it with dark or near-black backgrounds. Secondary accent colors vary by legend: blue for Wraith and Horizon, purple for Revenant, green for Caustic, red for Bloodhound. The Champion Squad color scheme (orange text on dark background) is extremely recognizable to Apex players.",
          },
        },
        {
          "@type": "Question",
          name: "Which legends work best for Apex Legends thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wraith is the most globally recognized Apex legend and performs well in any thumbnail. Bloodhound, Gibraltar, and Horizon are also highly recognizable. For legend-specific content, always feature the legend the video covers — players who main or are learning that legend will click faster on recognition. Seasonal or new legends have strong thumbnail CTR in the weeks following their release.",
          },
        },
        {
          "@type": "Question",
          name: 'What is the "20 bomb" thumbnail and why does it work?',
          acceptedAnswer: {
            "@type": "Answer",
            text: 'The "20 bomb" refers to achieving 20 kills in a single Apex Legends game — a milestone that is rare enough to be impressive to most players. "20 KILLS" displayed prominently in a thumbnail is one of the highest-performing text hooks in the Apex content category because it communicates a clear, quantifiable achievement that viewers aspire to. Similar milestones like "4K DAMAGE", "SOLO SQUAD WIPE", and "25 KILLS" follow the same principle.',
          },
        },
        {
          "@type": "Question",
          name: "Should I show the Champion Squad screen in a thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Champion Squad end screen is one of the most recognizable visual signals in Apex Legends content — it immediately communicates a win to any Apex player. Using this screen as a background element or featuring the Champion badge in a thumbnail is highly effective for win highlight content. Pair it with a kill count or damage number overlay to add a specific quantifiable achievement on top of the win signal.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make an Apex Legends thumbnail without Photoshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free Apex Legends Thumbnail Maker at click-thumb.com/apex-legends-thumbnail-maker. Pre-configured at 1280×720px with Apex-style templates featuring dark backgrounds, champion orange accents, and legend artwork areas. No software or account required.",
          },
        },
        {
          "@type": "Question",
          name: "How do seasonal legend updates affect thumbnail strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each Apex Legends season introduces a new legend, new abilities, and often significant meta changes. Content about new legends, season changes, and meta updates spikes in search volume significantly in the first 2–4 weeks of a new season. Thumbnails for new season content should prominently feature the new legend's face and name, using the legend's own color palette as the accent color. Publishing within the first 48 hours of a season drop captures the highest search volume period.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Apex Legends thumbnails different from other battle royale thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Apex Legends thumbnails are characterized by: legend character art (often stylized and dramatic), Champion Orange as the primary accent color, milestone numbers (kills, damage, elimination streaks), and a darker overall palette than Fortnite. The Apex audience is older and more competitive than Fortnite's — thumbnails that communicate specific achievements (20 bomb, 4K damage, squad wipe) outperform general gameplay thumbnails because they appeal to the competitive aspiration that drives this audience.",
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
