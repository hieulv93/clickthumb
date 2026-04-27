import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valorant Thumbnail Maker — Free Online, No Signup',
  description:
    'Create Valorant thumbnails at 1280×720px free online. Agent Impact, ACE Gold, and Clutch Navy templates for Valorant YouTube creators. Download instantly, no account needed.',
  keywords: ['valorant thumbnail maker', 'valorant youtube thumbnail', 'valorant thumbnail creator', 'free valorant thumbnail', 'valorant thumbnail template'],
  alternates: { canonical: 'https://click-thumb.com/valorant-thumbnail-maker/' },
  openGraph: {
    title: 'Valorant Thumbnail Maker — Free Online, No Signup',
    description: 'Create 1280×720px Valorant thumbnails. Agent Impact, ACE Gold, Clutch Navy templates. Download instantly.',
    url: 'https://click-thumb.com/valorant-thumbnail-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
