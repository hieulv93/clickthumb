import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/linkedin-banner-size-guide/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'LinkedIn Banner Size Guide 2026 — Dimensions, Design Tips & Examples',
  description:
    'The exact LinkedIn banner size for 2026 — 1584×396px, safe zones, what gets cropped on mobile, and how to design a banner that converts profile visitors.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'LinkedIn Banner Size Guide 2026 — Dimensions, Design Tips & Examples',
    description:
      'LinkedIn banner size 2026: 1584×396px. Safe zones, mobile crop area, and design tips to convert profile visitors.',
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
        { '@type': 'ListItem', position: 3, name: 'LinkedIn Banner Size Guide', item: PAGE_URL },
      ],
    },
    {
      '@type': 'BlogPosting',
      headline: 'LinkedIn Banner Size Guide 2026 — Dimensions, Design Tips & Examples',
      description:
        'The exact LinkedIn banner size for 2026 — 1584×396px, safe zones, what gets cropped on mobile, and how to design a banner that converts profile visitors.',
      url: PAGE_URL,
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      image: OG_IMAGE,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the LinkedIn banner size in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1584×396 pixels (4:1 aspect ratio). This is the recommended size for LinkedIn background photos. Design at this resolution to ensure the banner displays at full quality on desktop.',
          },
        },
        {
          '@type': 'Question',
          name: 'What part of the LinkedIn banner is safe from cropping?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The center 60% of the banner (~950px wide) is safe on both desktop and mobile. Avoid placing important content in the bottom-left corner (profile picture zone) and the outer edges (~200px on each side) which are cropped on mobile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the LinkedIn banner affect profile visibility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The banner doesn't affect LinkedIn's search algorithm directly. However, a professional banner improves first impressions, which increases connection acceptance rates, InMail response rates, and recruiter credibility.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I update my LinkedIn banner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Update it when your role, focus, or status changes significantly — new job, new product launch, new specialization. Also update it when you have a major announcement such as speaking at a conference, a new book, or a product launch.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file format is best for LinkedIn banners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PNG for banners with text, logos, or sharp graphics — it preserves edges without compression artifacts. JPG for photo-based banners. Both formats are accepted up to 8MB, but aim for under 2MB for faster loading.',
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
