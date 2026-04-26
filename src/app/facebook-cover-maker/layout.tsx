import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facebook Cover Maker — Free Online, No Signup',
  description:
    'Create a Facebook cover photo at 851×315px free online. Professional templates, custom text, upload your photo. Download instantly, no account needed.',
  keywords: ['facebook cover maker', 'facebook cover photo maker', 'facebook banner maker', 'free facebook cover maker', 'facebook cover creator'],
  alternates: { canonical: 'https://click-thumb.com/facebook-cover-maker/' },
  openGraph: {
    title: 'Facebook Cover Maker — Free Online, No Signup',
    description: 'Design a Facebook cover photo at 851×315px. Templates, custom text, instant download.',
    url: 'https://click-thumb.com/facebook-cover-maker/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
