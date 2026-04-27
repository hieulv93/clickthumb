import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gaming Thumbnail Maker — Free Online, No Signup',
  description:
    'Create gaming thumbnails at 1280×720px free online. Neon, fire, and cyberpunk templates for YouTube gaming videos. Download instantly, no account needed.',
  keywords: ['gaming thumbnail maker', 'youtube gaming thumbnail', 'gaming thumbnail creator', 'free gaming thumbnail', 'thumbnail maker for gaming'],
  alternates: { canonical: 'https://click-thumb.com/gaming-thumbnail-maker/' },
  openGraph: {
    title: 'Gaming Thumbnail Maker — Free Online, No Signup',
    description: 'Create 1280×720px gaming thumbnails. Neon, fire, cyberpunk templates. Download instantly.',
    url: 'https://click-thumb.com/gaming-thumbnail-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
