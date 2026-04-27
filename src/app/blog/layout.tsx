import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blog/`

export const metadata: Metadata = {
  title: 'Blog — Thumbnail Tips, Design Guides & Creator Resources',
  description:
    'Guides on YouTube thumbnail design, social media image sizes, and visual content creation tips for creators and marketers.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Blog — ClickThumb',
    description:
      'Guides on YouTube thumbnail design, social media image sizes, and visual content for creators.',
    url: PAGE_URL,
    siteName: 'ClickThumb',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
