import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Among Us Thumbnail Maker — Free Online, No Signup',
  description:
    'Create Among Us thumbnails at 1280×720px free online. Impostor Red, Crewmate Blue, and Emergency Meeting templates for Among Us YouTube creators. Download instantly, no account needed.',
  keywords: ['among us thumbnail maker', 'among us youtube thumbnail', 'among us thumbnail creator', 'free among us thumbnail', 'among us thumbnail template'],
  alternates: { canonical: 'https://click-thumb.com/among-us-thumbnail-maker/' },
  openGraph: {
    title: 'Among Us Thumbnail Maker — Free Online, No Signup',
    description: 'Create 1280×720px Among Us thumbnails. Impostor Red, Crewmate Blue, Emergency Meeting templates. Download instantly.',
    url: 'https://click-thumb.com/among-us-thumbnail-maker/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
