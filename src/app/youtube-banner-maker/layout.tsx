import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Banner Maker — Free Channel Art, 2560×1440px',
  description:
    'Create YouTube channel art at 2560×1440px free online. Professional banner templates for any channel type. Download instantly, no signup, no watermark.',
  keywords: ['youtube banner maker', 'youtube channel art maker', 'youtube banner creator', 'free youtube banner', 'youtube channel art 2560x1440'],
  alternates: { canonical: 'https://click-thumb.com/youtube-banner-maker/' },
  openGraph: {
    title: 'YouTube Banner Maker — Free Channel Art, 2560×1440px',
    description: 'Create YouTube channel art at 2560×1440px. Templates, custom text, instant download.',
    url: 'https://click-thumb.com/youtube-banner-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
