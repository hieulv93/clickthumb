import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/how-to-make-thumbnail-without-canva/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Make a Thumbnail Without Canva (Free, 2026)',
  description:
    'Make YouTube and social media thumbnails without Canva — no subscription, no watermark, no account. Free browser-based tool with platform-correct sizes built in.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Make a Thumbnail Without Canva (Free, 2026)',
    description:
      'Skip the Canva subscription. Make thumbnails free in your browser — correct platform sizes, ready-made templates, no watermark.',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Make a Thumbnail Without Canva',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'BlogPosting',
      headline: 'How to Make a Thumbnail Without Canva (Free, 2026)',
      description:
        'How to make YouTube and social media thumbnails without Canva — free browser-based alternatives, step-by-step guide, and design tips.',
      url: PAGE_URL,
      datePublished: '2026-05-11',
      dateModified: '2026-05-11',
      author: { '@type': 'Person', name: 'Alex Kim' },
      publisher: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      image: OG_IMAGE,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I make thumbnails without Canva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Browser-based thumbnail makers like ClickThumb work without any account or subscription. You get a canvas pre-sized to 1280×720px for YouTube, templates to start from, text and background controls, and direct download — no watermark, no sign-up.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best free Canva alternative for thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ClickThumb is built specifically for thumbnails — unlike Canva, which is a general design tool. Every canvas is pre-sized to the exact platform dimensions (1280×720 for YouTube, 1080×1080 for Instagram, etc.), so you never have to look up dimensions or resize after exporting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Canva put a watermark on free thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Canva's free plan does not watermark most exports, but some premium elements (photos, graphics, templates marked with a crown icon) require a paid subscription to download without a watermark. If you used a premium element accidentally, the export will be blocked until you upgrade or remove the element.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an account to make thumbnails without Canva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No account is required to use ClickThumb. Open the tool, pick a template, customize text and background, and download. The canvas runs entirely in your browser — no sign-up, no email, no subscription.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should a YouTube thumbnail be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1280×720 pixels (16:9 aspect ratio). Maximum file size 2MB. JPG, PNG, GIF, or BMP format. ClickThumb pre-sets the canvas to 1280×720 automatically — you never have to enter dimensions manually.',
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
