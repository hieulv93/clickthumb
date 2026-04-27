import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Thumbnail Maker — Free Online Cover Image, No Signup',
  description:
    'Create TikTok cover images at 1080×1920px free online. Viral Pink, Dark Glow, and Trending Yellow templates. Download instantly, no account needed.',
  keywords: ['tiktok thumbnail maker', 'tiktok cover maker', 'tiktok cover image', 'tiktok thumbnail size', 'free tiktok cover'],
  alternates: { canonical: 'https://click-thumb.com/tiktok-thumbnail-maker/' },
  openGraph: {
    title: 'TikTok Thumbnail Maker — Free Online Cover Image, No Signup',
    description: 'Create 1080×1920px TikTok cover images. Viral templates. Download instantly.',
    url: 'https://click-thumb.com/tiktok-thumbnail-maker/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
