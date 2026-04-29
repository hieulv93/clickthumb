import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitch Banner Maker — Free Offline Screen Creator',
  description:
    'Create a Twitch offline banner at 1920×1080px free online. Gaming templates, custom text, instant download. No signup, no watermark.',
  keywords: [
    'twitch banner maker',
    'twitch offline screen maker',
    'twitch banner creator',
    'twitch offline banner',
    'free twitch banner',
    'twitch overlay maker',
    'twitch screen maker',
    'twitch channel banner',
  ],
  alternates: { canonical: 'https://click-thumb.com/twitch-banner-maker/' },
  openGraph: {
    title: 'Twitch Banner Maker — Free Offline Screen Creator',
    description:
      'Create a Twitch offline banner at 1920×1080px. Gaming templates, custom text, instant download. No signup.',
    url: 'https://click-thumb.com/twitch-banner-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
