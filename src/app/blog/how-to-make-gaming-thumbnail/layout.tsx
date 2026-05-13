import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/how-to-make-gaming-thumbnail/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'How to Make a Gaming Thumbnail That Gets Clicks — Free Maker',
  description:
    'Step-by-step guide to gaming thumbnails: 1280×720px size, color rules, Impact font, face reactions — 7 design principles top gaming creators use to hit 6%+ CTR. Free maker included.',
  keywords: [
    'how to make a gaming thumbnail',
    'gaming thumbnail',
    'gaming thumbnail maker',
    'gaming thumbnail design',
    'gaming thumbnail tips',
    'youtube gaming thumbnail',
    'how to make youtube gaming thumbnail',
    'gaming thumbnail size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Make a Gaming Thumbnail That Gets More Clicks (2026)',
    description:
      'Step-by-step guide to creating gaming thumbnails that increase CTR — size, design, color, and common mistakes.',
    url: PAGE_URL,
    siteName: 'ClickThumb',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'How to Make a Gaming Thumbnail' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Make a Gaming Thumbnail (2026 Guide)',
    description: 'Design tips, size specs, and step-by-step guide for gaming thumbnails that get clicked.',
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
          name: 'How to Make a Gaming Thumbnail',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Make a Gaming Thumbnail That Gets More Clicks (2026)',
      description:
        'Step-by-step guide to creating gaming thumbnails: correct size, design principles, color strategy, text rules, and the most common mistakes that hurt click-through rate.',
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
          name: 'What size should a gaming thumbnail be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gaming thumbnails for YouTube should be 1280×720 pixels with a 16:9 aspect ratio. This is YouTube\'s recommended size for all thumbnails, including gaming content. The file must be under 2MB — use JPG at quality 85 for best results. Avoid going below 640px wide as YouTube will reject thumbnails that are too small.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes a good gaming thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A good gaming thumbnail has: (1) A strong, expressive face reaction in the left or center of the frame. (2) Bold text of 3–5 words with high contrast against the background. (3) A screenshot or character from the game that immediately signals what game is featured. (4) Saturated, vibrant colors that stand out in YouTube search results. (5) A consistent visual style that viewers recognize as yours across all videos.',
          },
        },
        {
          '@type': 'Question',
          name: 'What font is best for gaming thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Heavy, condensed sans-serif fonts work best for gaming thumbnails — they are bold, readable at small sizes, and convey energy. Popular choices include Impact, Bebas Neue, Anton, and Montserrat Black. Avoid thin or script fonts — they become unreadable at the small sizes thumbnails appear in YouTube search results. Always add a stroke or drop shadow to separate text from the background.',
          },
        },
        {
          '@type': 'Question',
          name: 'What colors work best for gaming thumbnails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'High-saturation, contrasting colors consistently outperform muted palettes in gaming thumbnail CTR. Red, orange, and yellow create urgency and excitement — the most clicked emotional responses. Blue and green work well for team or survival game content. The key principle is contrast: a bright text color against a dark background (or vice versa) is always more readable than similar tones. Avoid grey, brown, and desaturated palettes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many words should a gaming thumbnail have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Keep gaming thumbnail text to 3–5 words maximum. At 120×67px — the size thumbnails appear in YouTube mobile search — only very large, high-contrast text remains readable. Every additional word makes the thumbnail harder to process at a glance. The text should spark curiosity or emotion, not summarize the video. Let the video title do the explaining.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I show my face on a gaming thumbnail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, if you are building a personal brand as a gaming creator. Face reaction thumbnails consistently achieve 15–30% higher CTR than game-only thumbnails, because the human brain processes faces faster than any other visual element. The face should occupy at least 35% of the frame, be well-lit, and show a clear emotion — surprise, excitement, or shock perform best. If you prefer not to show your face, use a strong in-game character or dramatic scene instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a gaming thumbnail without Photoshop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use a browser-based tool like ClickThumb\'s Gaming Thumbnail Maker at click-thumb.com/gaming-thumbnail-maker. It creates thumbnails at exactly 1280×720px with pre-built gaming templates — no software installation or design skills required. Upload your photo or game screenshot, add bold text, choose a background, and download instantly. The entire process takes under 2 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do my gaming thumbnails look blurry on YouTube?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Blurry thumbnails are caused by: (1) Uploading at too low a resolution (below 1280×720px). (2) Saving with high JPG compression (quality below 70) which adds visible artifacts. (3) Designing at 72 DPI instead of working in pixels. Always create your thumbnail at exactly 1280×720px, save as JPG at quality 85–90, and keep the file under 2MB. YouTube also applies its own light resampling, so starting sharp is essential.',
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
