import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Post Maker — Free Online, No Signup',
  description:
    'Create Instagram posts at 1080×1080px free online. Square posts, Story format 1080×1920, templates, custom text and background. Download instantly, no account needed.',
  keywords: ['instagram post maker', 'instagram image maker', 'instagram post creator', 'free instagram post maker', 'instagram template maker'],
  alternates: { canonical: 'https://click-thumb.com/instagram-post-maker/' },
  openGraph: {
    title: 'Instagram Post Maker — Free Online, No Signup',
    description: 'Create Instagram posts at 1080×1080px. Templates, custom text, instant download.',
    url: 'https://click-thumb.com/instagram-post-maker/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
