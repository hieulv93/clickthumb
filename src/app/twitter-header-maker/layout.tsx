import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitter Header Maker — Free Online, No Signup',
  description:
    'Create a Twitter/X profile header at 1500×500px free online. Modern templates, custom text and background. Download instantly, no account needed.',
  keywords: ['twitter header maker', 'twitter banner maker', 'x header maker', 'twitter cover maker', 'free twitter header'],
  alternates: { canonical: 'https://click-thumb.com/twitter-header-maker/' },
  openGraph: {
    title: 'Twitter Header Maker — Free Online, No Signup',
    description: 'Create a Twitter/X header at 1500×500px. Templates, custom text, instant download.',
    url: 'https://click-thumb.com/twitter-header-maker/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
