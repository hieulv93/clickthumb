import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/best-youtube-thumbnail-fonts/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Best Fonts for YouTube Thumbnails 2026 — What Top Creators Use",
  description:
    "The best fonts for YouTube thumbnails in 2026: Impact, Bebas Neue, Anton, Montserrat Black. Why bold condensed fonts work, how to use stroke and shadow, and common font mistakes.",
  keywords: [
    "best fonts for youtube thumbnails",
    "youtube thumbnail fonts",
    "best youtube thumbnail font 2026",
    "impact font youtube thumbnail",
    "bebas neue youtube thumbnail",
    "bold fonts for thumbnails",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Best Fonts for YouTube Thumbnails 2026 — What Top Creators Use",
    description:
      "Impact, Bebas Neue, Anton, Montserrat Black — the 5 best fonts for YouTube thumbnails and why they work at small sizes. Free Google Fonts alternatives included.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Best Fonts for YouTube Thumbnails 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fonts for YouTube Thumbnails 2026 — What Top Creators Use",
    description:
      "Impact, Bebas Neue, Anton, Montserrat Black — why bold condensed fonts dominate thumbnails, how to add stroke and shadow, and what fonts to avoid.",
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
          name: "Best YouTube Thumbnail Fonts",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Best Fonts for YouTube Thumbnails 2026 — What Top Creators Use",
      description:
        "The best fonts for YouTube thumbnails in 2026: Impact, Bebas Neue, Anton, Montserrat Black, and Oswald. Why bold condensed fonts work and how to use them effectively.",
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
          name: "What is the best font for YouTube thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best fonts for YouTube thumbnails are Impact, Bebas Neue, Anton, Montserrat Black, and Oswald Bold. These are all bold, condensed typefaces that remain highly legible when thumbnails are displayed at small sizes like 120×67px in mobile search results. Bold condensed fonts also pack more text into a limited horizontal space without overwhelming the thumbnail.",
          },
        },
        {
          "@type": "Question",
          name: "Why do most YouTubers use Impact font?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Impact became the dominant YouTube thumbnail font because it is pre-installed on virtually every Windows and Mac computer, requires no download, is extremely bold and condensed (fitting many characters in a small width), and reads clearly even at thumbnail sizes as small as 120×67px. Its high x-height and tight letter spacing make it the most space-efficient legible font available.",
          },
        },
        {
          "@type": "Question",
          name: "What Google Fonts work best for YouTube thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best Google Fonts for YouTube thumbnails are Bebas Neue, Anton, Montserrat (weight 900), and Oswald (Bold or Extra Bold). All are free to use, available at fonts.google.com, and share the bold condensed characteristics that make thumbnail text readable at small sizes. Bebas Neue and Anton are the closest modern alternatives to Impact.",
          },
        },
        {
          "@type": "Question",
          name: "How do I add a stroke or outline to thumbnail text?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'In most design tools, text stroke is added through a "stroke" or "outline" effect on the text layer. Use a black stroke of 3–5% of your text height — for 100px tall text, a 3–5px stroke works well. In ClickThumb\'s thumbnail maker, select your text, open the text style panel, and increase the stroke weight. A black stroke on yellow or white text creates the highest contrast combination for thumbnail legibility.',
          },
        },
        {
          "@type": "Question",
          name: "What font size should I use on a YouTube thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At a 1280×720px canvas, use text that is at minimum 80px tall — ideally 100–150px for the primary headline. Thumbnails appear as small as 120×67px in mobile search results, which is roughly 9% of the full canvas size. Text that is 100px tall at full resolution renders as only 9px tall in that context — only bold fonts with strong stroke survive this scaling. Never use text smaller than 60px on a thumbnail canvas.",
          },
        },
        {
          "@type": "Question",
          name: "What fonts should I avoid on YouTube thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid thin or light-weight fonts (like Raleway Thin, Roboto Light, or any font with weight below 600), serif fonts (Times New Roman, Georgia — serifs disappear at small sizes), script or cursive fonts (impossible to read at thumbnail size), and decorative display fonts (too complex to read quickly). The rule is simple: if you cannot read the font at 25% zoom, it will fail in thumbnails.",
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
