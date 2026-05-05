import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/twitter-header-size-guide/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Twitter / X Header Size Guide 2026 — Exact Dimensions & Safe Zones',
  description:
    'The exact Twitter (X) header size for 2026 — 1500×500px, what gets hidden by the profile picture, and how to design a header that looks great on all devices.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Twitter / X Header Size Guide 2026 — Exact Dimensions & Safe Zones',
    description:
      'Twitter header size 2026: 1500×500px. Safe zones, profile picture overlap area, and design tips for all devices.',
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
        { '@type': 'ListItem', position: 3, name: 'Twitter Header Size Guide', item: PAGE_URL },
      ],
    },
    {
      '@type': 'BlogPosting',
      headline: 'Twitter / X Header Size Guide 2026 — Exact Dimensions & Safe Zones',
      description:
        'The exact Twitter (X) header size for 2026 — 1500×500px, what gets hidden by the profile picture, and how to design a header that looks great on all devices.',
      url: PAGE_URL,
      datePublished: '2026-05-06',
      dateModified: '2026-05-06',
      author: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      image: OG_IMAGE,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Twitter / X header size in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1500×500 pixels (3:1 aspect ratio). This is the recommended size that displays at full quality on desktop. Twitter scales it down proportionally on smaller screens.',
          },
        },
        {
          '@type': 'Question',
          name: 'What part of the Twitter header is hidden by the profile picture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The bottom-left corner of the header — roughly a 250×250px area. Avoid placing your logo, face, or important text in this region. Keep key content in the center or right side of the header.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file formats does Twitter accept for headers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG, PNG, and static GIF. Twitter does not support animated GIF headers (the animation will not play). Max file size is 5MB. JPG at high quality is the recommended format for photos; PNG for designs with text or transparent elements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update my Twitter header?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Update it whenever you have a major announcement: product launch, new project, milestone, or seasonal campaign. A stale header signals an inactive account. Updating it regularly also gives followers a reason to visit your profile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Twitter compress header images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — Twitter re-compresses uploaded images. Upload at exactly 1500×500 and use a high-quality JPG or PNG to minimize the impact. Pre-compressing to ~500KB before uploading can also help retain sharpness.',
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
