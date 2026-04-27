import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roblox Thumbnail Maker — Free Online, No Signup',
  description:
    'Create Roblox thumbnails at 1280×720px free online. Roblox Red, Neon Obby, and Rare Item templates for YouTube creators. Download instantly, no account needed.',
  keywords: ['roblox thumbnail maker', 'roblox youtube thumbnail', 'roblox thumbnail creator', 'free roblox thumbnail', 'roblox thumbnail template'],
  alternates: { canonical: 'https://click-thumb.com/roblox-thumbnail-maker/' },
  openGraph: {
    title: 'Roblox Thumbnail Maker — Free Online, No Signup',
    description: 'Create 1280×720px Roblox thumbnails. Roblox Red, Neon Obby, Rare Item templates. Download instantly.',
    url: 'https://click-thumb.com/roblox-thumbnail-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
