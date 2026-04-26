import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Maker — Free Online, No Signup',
  description:
    'Create professional YouTube thumbnails at 1280×720px free online. Choose from templates, add bold text, upload your photo. No signup required — download instantly.',
  keywords: [
    'youtube thumbnail maker',
    'thumbnail maker online free',
    'youtube thumbnail creator',
    'free thumbnail maker',
    'make youtube thumbnail',
  ],
  alternates: { canonical: 'https://click-thumb.com/youtube-thumbnail-maker/' },
  openGraph: {
    title: 'YouTube Thumbnail Maker — Free Online, No Signup',
    description: 'Create pro YouTube thumbnails at 1280×720px. Templates, custom text, instant download.',
    url: 'https://click-thumb.com/youtube-thumbnail-maker/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
