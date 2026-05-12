import type { Metadata } from 'next'

const SITE_URL = 'https://click-thumb.com'
const PAGE_URL = `${SITE_URL}/blox-fruit-thumbnail-maker/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Blox Fruits Thumbnail Maker — Free Online, No Signup',
  description:
    'Create Blox Fruits thumbnails at 1280×720px free online. Legendary Fruit, Raid Boss, Mythical Power templates for YouTube creators. Download instantly, no account needed.',
  keywords: [
    'blox fruit thumbnail maker',
    'blox fruits thumbnail maker',
    'blox fruits youtube thumbnail',
    'blox fruit thumbnail',
    'blox fruits thumbnail template',
    'roblox blox fruits thumbnail',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Blox Fruits Thumbnail Maker — Free Online, No Signup',
    description:
      'Create 1280×720px Blox Fruits thumbnails. Legendary Fruit, Raid Boss, Mythical Power templates. Download instantly.',
    url: PAGE_URL,
    siteName: 'ClickThumb',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Blox Fruits Thumbnail Maker' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blox Fruits Thumbnail Maker — Free Online',
    description: 'Free Blox Fruits thumbnail maker. 4 templates, custom text, 1280×720px download.',
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
