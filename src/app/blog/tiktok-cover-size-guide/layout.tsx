import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/tiktok-cover-size-guide/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'TikTok Cover Size Guide 2026 — Exact Dimensions & Design Tips',
  description:
    'The exact TikTok cover size for 2026 — 1080×1920px explained, what gets cropped in the grid view, and how to design a cover that looks great everywhere.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'TikTok Cover Size Guide 2026 — Exact Dimensions & Design Tips',
    description:
      'TikTok cover size 2026: 1080×1920px full cover, 1080×1080px grid crop. Design tips and safe zones explained.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: 'TikTok Cover Size Guide', item: PAGE_URL },
      ],
    },
    {
      '@type': 'BlogPosting',
      headline: 'TikTok Cover Size Guide 2026 — Exact Dimensions & Design Tips',
      description:
        'The exact TikTok cover size for 2026 — 1080×1920px explained, what gets cropped in the grid view, and how to design a cover that looks great everywhere.',
      url: PAGE_URL,
      datePublished: '2026-05-05',
      dateModified: '2026-05-05',
      author: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      image: OG_IMAGE,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the TikTok cover size in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1080×1920 pixels (9:16 portrait ratio). This is the full cover shown in the video player. In your profile grid, TikTok crops to the center 1080×1080 square, so keep all important elements in the middle of the frame.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I set a custom TikTok cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "When uploading a video in the TikTok app, tap 'Select cover' before posting. You can either drag the timeline to a specific frame from the video, or upload a custom cover image. Custom images must be under 10MB.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does TikTok cover affect views?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The cover doesn't affect the For You Page algorithm directly — TikTok distributes videos based on watch time and engagement. But it does affect your profile follow rate. A consistent, professional grid converts profile visitors into followers more effectively.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use the same cover design for every video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — with different text. Keeping the same template (background, layout, font) across all videos in a series makes your profile grid look intentional. Only the title text changes per video.',
          },
        },
        {
          '@type': 'Question',
          name: 'What aspect ratio is TikTok cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '9:16 portrait (same as TikTok videos). The exact pixel dimensions are 1080×1920. Do not use square (1:1) or landscape (16:9) covers — TikTok will stretch or crop them.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
