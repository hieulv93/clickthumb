import type { Metadata } from "next";

const PAGE_URL = "https://click-thumb.com/blog/how-to-increase-youtube-ctr/";
const OG_IMAGE = "https://click-thumb.com/og-image.png";

export const metadata: Metadata = {
  title: "How to Increase YouTube CTR in 2026: 8 Tips That Doubled Mine",
  description:
    "YouTube CTR below 4%? Learn the 8 thumbnail psychology tricks that top creators use to hit 8–12% click-through rates. With real before/after examples.",
  keywords: [
    "how to increase youtube ctr",
    "youtube ctr",
    "youtube click through rate",
    "improve youtube ctr",
    "youtube thumbnail ctr",
    "increase youtube clicks",
    "youtube thumbnail tips",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Increase YouTube CTR in 2026: 8 Tips That Doubled Mine",
    description:
      "YouTube CTR below 4%? Learn 8 thumbnail psychology tricks that top creators use to hit 8–12% click-through rates. Real before/after examples included.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Increase YouTube CTR in 2026: 8 Tips That Doubled Mine",
    description:
      "YouTube CTR below 4%? Learn 8 thumbnail tricks top creators use to hit 8–12% CTR. Real before/after examples.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://click-thumb.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://click-thumb.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Increase YouTube CTR",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Increase YouTube CTR: 8 Thumbnail Tips That Work",
      description:
        "Proven thumbnail strategies to improve click-through rate. Contrast, faces, bold text, A/B testing.",
      url: PAGE_URL,
      datePublished: "2026-04-29",
      dateModified: "2026-04-29",
      author: {
        "@type": "Organization",
        name: "ClickThumb",
        url: "https://click-thumb.com",
      },
      publisher: {
        "@type": "Organization",
        name: "ClickThumb",
        url: "https://click-thumb.com",
        logo: { "@type": "ImageObject", url: OG_IMAGE },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a good YouTube CTR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A good YouTube CTR is 4–8% for established channels with existing subscribers. New channels or videos shown to non-subscribers typically see lower CTR (2–4%). Top creators in competitive niches aim for 6–10%+. Your CTR benchmark should be compared to your own channel average, not industry-wide averages.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a thumbnail affect CTR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The thumbnail is the single biggest variable in CTR. Research by YouTube and independent creators consistently shows that thumbnail redesigns alone can improve CTR by 50–200% on the same video with no other changes. The title and thumbnail together account for over 90% of the click decision.",
          },
        },
        {
          "@type": "Question",
          name: "Does CTR affect YouTube algorithm ranking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. YouTube uses CTR as a primary signal in the first 24–48 hours after upload. Videos with higher CTR get shown to more viewers in Browse and Suggested feeds. However, YouTube balances CTR against watch time and satisfaction — a high CTR with low watch time will eventually suppress a video.",
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
