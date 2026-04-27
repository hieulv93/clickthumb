import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/social-media-image-sizes/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Social Media Image Sizes 2026: The Complete Guide',
  description:
    'Exact image dimensions for every social media platform in 2026. Instagram, YouTube, Twitter, LinkedIn, Facebook, TikTok — cover photos, posts, stories, and thumbnails.',
  keywords: [
    'social media image sizes',
    'social media image dimensions',
    'social media sizes 2026',
    'instagram image size',
    'youtube thumbnail size',
    'twitter header size',
    'linkedin banner size',
    'facebook cover size',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Social Media Image Sizes 2026: The Complete Guide',
    description:
      'Exact dimensions for Instagram, YouTube, Twitter, LinkedIn, Facebook, TikTok — posts, covers, stories, banners.',
    url: PAGE_URL,
    siteName: 'ClickThumb',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Social Media Image Sizes 2026' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Image Sizes 2026',
    description:
      'Every image size for Instagram, YouTube, Twitter, LinkedIn, Facebook, TikTok in one guide.',
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
          name: 'Social Media Image Sizes 2026',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Social Media Image Sizes 2026: The Complete Guide',
      description:
        'Exact image dimensions for every social media platform in 2026 — Instagram, YouTube, Twitter, LinkedIn, Facebook, TikTok.',
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
          name: 'What is the standard social media image size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no single standard — each platform has its own dimensions. The most common sizes are: Instagram post 1080×1080px (1:1), YouTube thumbnail 1280×720px (16:9), Twitter/X header 1500×500px (3:1), LinkedIn banner 1584×396px. Always create images at the platform\'s recommended size to avoid cropping.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size should Instagram posts be in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram post sizes in 2026: Square post 1080×1080px (1:1), Portrait post 1080×1350px (4:5), Landscape post 1080×566px (1.91:1), Story and Reel 1080×1920px (9:16). The 4:5 portrait format (1080×1350px) shows more of the image in the feed and generally gets higher engagement.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the LinkedIn banner size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The LinkedIn personal profile banner is 1584×396px. The LinkedIn company page banner is also 1128×191px. Use JPG or PNG format. The banner displays at different crops on mobile vs desktop, so keep important content in the center third of the image.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size is a Facebook cover photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Facebook cover photo size is 851×315px for desktop and displays at 640×360px on mobile. Use a design that works at both crops. Facebook page cover photos are the same size. PNG format is recommended for text-heavy covers; JPG for photographic covers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are TikTok image dimensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TikTok profile photo: 200×200px minimum. TikTok video cover: 1080×1920px (9:16 vertical). TikTok image posts: 1080×1080px (1:1) or 1080×1920px (9:16). Always design for the 9:16 vertical format as TikTok is a mobile-first platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do social media platforms compress images?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All major platforms re-compress uploaded images. Instagram, Facebook, and Twitter all apply lossy compression that can degrade quality. To minimize visible compression artifacts, upload images at the exact recommended dimensions (not larger), use JPG at quality 85–90, and avoid uploading already-compressed files.',
          },
        },
        {
          '@type': 'Question',
          name: 'What image format should I use for social media?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JPG is recommended for photographs and complex images. PNG is better for graphics, logos, and images with text or flat colors. Most platforms do not support WebP uploads. For stories and covers, PNG often preserves sharper text and edges after platform re-compression.',
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
