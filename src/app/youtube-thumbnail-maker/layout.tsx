import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/youtube-thumbnail-maker/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Free YouTube Thumbnail Maker — Create Thumbnails Online, No Signup',
  description:
    'Create professional YouTube thumbnails at 1280×720px free online. No Photoshop needed — choose a template, add bold text, upload your photo. No signup, no watermark.',
  keywords: [
    'youtube thumbnail maker',
    'thumbnail maker online free',
    'youtube thumbnail creator',
    'free thumbnail maker',
    'make youtube thumbnail',
    'youtube thumbnail maker without photoshop',
    'youtube thumbnail size',
    'create youtube thumbnail',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free YouTube Thumbnail Maker — No Signup, No Watermark',
    description:
      'Create pro YouTube thumbnails at 1280×720px. Templates, custom text, instant download. No Photoshop or account needed.',
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'YouTube Thumbnail Maker', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebApplication',
      name: 'ClickThumb — Free YouTube Thumbnail Maker',
      url: PAGE_URL,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description:
        'Free browser-based YouTube thumbnail maker. Create 1280×720px thumbnails with templates, custom text, and background photos. No account or watermark.',
      featureList: [
        'Create YouTube thumbnails online for free',
        'Export at 1280×720px — correct YouTube thumbnail size',
        'No signup or watermark',
        'Custom text, background colors and images',
        'Works on mobile and desktop browsers',
        'No Photoshop or design software needed',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size is a YouTube thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The recommended YouTube thumbnail size is 1280×720 pixels with a 16:9 aspect ratio. This tool exports at exactly this size. YouTube also accepts 1920×1080, but 1280×720 is the standard and sufficient for all display sizes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this YouTube thumbnail maker really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free. No account required, no watermark on the exported file, no daily limits. Download as many thumbnails as you need.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use my own photo as a background?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Click "Upload image" in the Background Image section to add your own photo. The image is processed entirely in your browser — it is never uploaded to any server.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I edit the text directly on the canvas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Double-click any text layer on the canvas to enter edit mode. You can change the content, move the text box, and resize it using the handles.',
          },
        },
        {
          '@type': 'Question',
          name: 'What font should I use for YouTube thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bold, high-weight fonts like Impact, Arial Black, or Bebas Neue are standard for thumbnails because they are readable at small sizes. This tool uses Impact and Arial Bold by default, which are the most reliable cross-browser options.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I upload my thumbnail to YouTube?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After downloading, go to YouTube Studio → select your video → Edit → Thumbnail → Upload custom thumbnail → select the downloaded file. The thumbnail goes live within a few minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does YouTube say my thumbnail was rejected?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube rejects thumbnails for three reasons: file over 2MB, resolution under 640px wide, or community guidelines violations (misleading or adult content). This tool exports well within the size and resolution requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I make thumbnails for other platforms too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — this tool focuses on YouTube (1280×720), but ClickThumb.com also has dedicated makers for Instagram posts, Twitter headers, LinkedIn banners, and Facebook covers, each pre-sized for the correct platform dimensions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a YouTube thumbnail without Photoshop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use this free browser-based thumbnail maker — no Photoshop or design software needed. Choose a template, edit the text directly on the canvas, set your background color or upload a photo, and download the finished thumbnail at 1280×720px. The entire process takes under 2 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a YouTube thumbnail on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open this page in Safari or Chrome on your phone. The canvas editor works on mobile — you can tap to select elements, edit text, and upload your own background photo from your camera roll. Tap Download to save the 1280×720px JPG directly to your phone.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best free YouTube thumbnail maker?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best free YouTube thumbnail maker depends on your needs. If you want full template customization with no watermark, no sign-up, and instant download — this tool is built for exactly that. It runs 100% in your browser, exports at the correct 1280×720px size, and has zero limits on how many thumbnails you create.',
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
