import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fortnite Thumbnail Maker — Free Online, No Signup',
  description:
    'Create Fortnite thumbnails at 1280×720px free online. Storm Eye, Zero Point, and Legendary Loot templates. Download instantly, no account needed.',
  keywords: ['fortnite thumbnail maker', 'fortnite youtube thumbnail', 'fortnite thumbnail creator', 'free fortnite thumbnail', 'fortnite thumbnail template'],
  alternates: { canonical: 'https://click-thumb.com/fortnite-thumbnail-maker/' },
  openGraph: {
    title: 'Fortnite Thumbnail Maker — Free Online, No Signup',
    description: 'Create 1280×720px Fortnite thumbnails. Storm Eye, Zero Point, Legendary Loot templates. Download instantly.',
    url: 'https://click-thumb.com/fortnite-thumbnail-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
