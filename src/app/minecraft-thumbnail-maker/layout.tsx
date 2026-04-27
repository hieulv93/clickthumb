import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minecraft Thumbnail Maker — Free Online, No Signup',
  description:
    'Create Minecraft thumbnails at 1280×720px free online. Grass Block, Diamond Mine, and Nether Portal templates. Download instantly, no account needed.',
  keywords: ['minecraft thumbnail maker', 'minecraft youtube thumbnail', 'minecraft thumbnail creator', 'free minecraft thumbnail', 'minecraft thumbnail template'],
  alternates: { canonical: 'https://click-thumb.com/minecraft-thumbnail-maker/' },
  openGraph: {
    title: 'Minecraft Thumbnail Maker — Free Online, No Signup',
    description: 'Create 1280×720px Minecraft thumbnails. Grass Block, Diamond Mine, Nether Portal templates. Download instantly.',
    url: 'https://click-thumb.com/minecraft-thumbnail-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
