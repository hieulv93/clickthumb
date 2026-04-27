import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Banner Maker — Free Online, No Signup',
  description:
    'Create a LinkedIn profile banner at 1584×396px free online. Professional templates, custom text, upload your photo. Download instantly, no account needed.',
  keywords: ['linkedin banner maker', 'linkedin background maker', 'linkedin cover maker', 'linkedin banner creator', 'free linkedin banner'],
  alternates: { canonical: 'https://click-thumb.com/linkedin-banner-maker/' },
  openGraph: {
    title: 'LinkedIn Banner Maker — Free Online, No Signup',
    description: 'Design a LinkedIn banner at 1584×396px. Professional templates, instant download.',
    url: 'https://click-thumb.com/linkedin-banner-maker/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
