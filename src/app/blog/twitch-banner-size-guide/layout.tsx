import type { Metadata } from "next";

const SITE_URL = "https://click-thumb.com";
const PAGE_URL = `${SITE_URL}/blog/twitch-banner-size-guide/`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: "Twitch Banner Size Guide 2026: Dimensions, Safe Zones & Tips",
  description:
    "Twitch offline banner is 1920×1080px. Profile banner is 1200×480px. Complete guide to every Twitch image size, safe zones, and design tips for a professional channel.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Twitch Banner Size Guide 2026",
    description:
      "Every Twitch image dimension: offline banner, profile banner, profile picture, panels, and mobile safe zones.",
    url: PAGE_URL,
    siteName: "ClickThumb",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Twitch Banner Size Guide",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitch Banner Size Guide 2026",
    description:
      "Offline banner 1920×1080. Profile banner 1200×480. Every Twitch dimension explained.",
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
          name: "Twitch Banner Size Guide",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Twitch Banner Size Guide 2026: Dimensions, Safe Zones & Tips",
      description:
        "Complete guide to Twitch image sizes: offline banner 1920×1080, profile banner 1200×480, profile picture 256×256, panels 320px wide, and mobile safe zones.",
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
          name: "What is the Twitch offline banner size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1920×1080 pixels (16:9 aspect ratio). This is the image displayed on your channel when you are not live. Export as JPG or PNG, max 10MB. Keep critical content (text, logo) in the center-safe zone away from the top 15% and bottom 15% of the image as those areas may be clipped on some devices.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Twitch profile banner size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1200×480 pixels. This banner appears at the top of your Twitch channel page behind your profile picture and channel info. It is cropped and displayed at different dimensions depending on the viewer's screen size, so keep key design elements in the center horizontal band of the image.",
          },
        },
        {
          "@type": "Question",
          name: "What size is a Twitch profile picture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "256×256 pixels, displayed as a circle. Upload a square image and Twitch will crop it to a circle automatically. PNG format is recommended for logos and sharp-edged artwork to avoid compression artifacts at small sizes.",
          },
        },
        {
          "@type": "Question",
          name: "What size are Twitch panels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Twitch panels display at 320 pixels wide. Height is flexible but standard sizes are 320×100px for simple text panels or 320×160px for panels with images and links. Keep file size under 2.9MB per panel. PNG is recommended for panels with text to maintain sharpness.",
          },
        },
        {
          "@type": "Question",
          name: "Does Twitch have a safe zone for banners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For the offline banner (1920×1080), keep important content within the center 1280×720 area. The outer 320px on left and right may be cropped on narrower screens. For the profile banner (1200×480), the center horizontal band (approximately 600×200px) is the safest area for logos and text.",
          },
        },
        {
          "@type": "Question",
          name: "What image format should I use for Twitch banners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JPG for photographic or complex gradient backgrounds — smaller file size. PNG for designs with sharp text, logos, or solid color backgrounds — better quality at small file sizes for these types. Maximum file size for Twitch uploads is 10MB for banners.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a Twitch banner for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use ClickThumb's free YouTube Thumbnail Maker at click-thumb.com/youtube-thumbnail-maker and set custom dimensions to 1920×1080 for your offline banner. No software download, no account required.",
          },
        },
        {
          "@type": "Question",
          name: "What should a Twitch offline banner include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Effective offline banners include: your channel name or logo (clearly readable), your streaming schedule (days and times in your timezone), social media handles or Discord link, a brief tagline about your content type, and your brand colors. Keep text minimal — viewers see this image briefly before deciding whether to follow.",
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
