import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/youtube-thumbnail-size-guide/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Size: The Complete 2026 Guide',
  description:
    'YouTube thumbnail dimensions: 1280×720px, 16:9 ratio, max 2MB. Learn the exact specs plus design tips that increase click-through rate.',
  keywords: [
    'youtube thumbnail size',
    'youtube thumbnail dimensions',
    'youtube thumbnail resolution',
    'youtube thumbnail specs',
    'best youtube thumbnail size',
    'youtube thumbnail size 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'YouTube Thumbnail Size: The Complete 2026 Guide',
    description:
      'Exact dimensions, file size limits, and format requirements for YouTube thumbnails — plus tips to improve CTR.',
    url: PAGE_URL,
    siteName: 'ClickThumb',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'YouTube Thumbnail Size Guide' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Thumbnail Size Guide 2026',
    description: '1280×720px, 16:9, max 2MB. Full specs + design tips for higher CTR.',
    images: [OG_IMAGE],
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
          name: 'YouTube Thumbnail Size Guide',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'YouTube Thumbnail Size: The Complete 2026 Guide',
      description:
        'YouTube thumbnail dimensions: 1280×720px, 16:9 ratio, max 2MB. Design tips to increase click-through rate.',
      url: PAGE_URL,
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      author: { '@type': 'Organization', name: 'ClickThumb', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'ClickThumb',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the ideal YouTube thumbnail size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The ideal YouTube thumbnail size is 1280×720 pixels with a 16:9 aspect ratio. This is the recommended size by YouTube and displays correctly on all devices including mobile, tablet, and desktop. The minimum width is 640 pixels.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file size limit does YouTube have for thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube thumbnails must be under 2MB in file size. JPG, PNG, GIF, and BMP formats are accepted. For best results, use JPG at quality 85–90 which keeps file size well under the 2MB limit while maintaining sharp visual quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What resolution should a YouTube thumbnail be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1280×720px is the recommended resolution. YouTube also accepts higher resolutions like 1920×1080px, but 1280×720px is the standard that balances quality and file size. Avoid going below 640px wide — YouTube will reject thumbnails that are too small.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does thumbnail quality affect YouTube rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thumbnail quality affects click-through rate (CTR), which is a ranking factor on YouTube. A higher CTR signals to the YouTube algorithm that viewers find the video relevant and appealing. YouTube has confirmed that CTR influences how often a video is recommended. A well-designed thumbnail can increase CTR by 2–3×.',
          },
        },
        {
          '@type': 'Question',
          name: 'What text size should I use on a YouTube thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use text that is at least 60–80px tall at 1280×720px resolution. This ensures readability on small screens — remember that thumbnails often appear as small as 120×67px in YouTube search results. Use a maximum of 3–5 words. High contrast between text and background is essential.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a custom thumbnail without monetization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom thumbnails require your YouTube channel to be verified (phone verification). Monetization is not required — any verified channel can upload custom thumbnails. To verify your channel, go to YouTube Studio → Settings → Channel → Feature eligibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'What aspect ratio do YouTube thumbnails use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '16:9 is the required aspect ratio for YouTube thumbnails. This matches the standard widescreen video format. If you upload a thumbnail with a different aspect ratio (such as 4:3 or 1:1), YouTube will crop or letterbox it, which can cut off important parts of your design.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a YouTube thumbnail online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use ClickThumb\'s free YouTube Thumbnail Maker at click-thumb.com/youtube-thumbnail-maker. It creates thumbnails at exactly 1280×720px with no signup required. Upload your photo, add bold text, and download the result instantly — all in your browser.',
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
