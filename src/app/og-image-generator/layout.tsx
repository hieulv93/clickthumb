import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OG Image Generator — Free Online Open Graph Image Maker',
  description:
    'Generate Open Graph preview images at 1200×630px free online. Create social preview images for your website, blog, or app. No signup, instant download.',
  keywords: ['og image generator', 'open graph image maker', 'social preview image', 'og image creator', 'meta image generator'],
  alternates: { canonical: 'https://click-thumb.com/og-image-generator/' },
  openGraph: {
    title: 'OG Image Generator — Free Open Graph Image Maker',
    description: 'Create Open Graph preview images at 1200×630px. Templates, custom text, instant download.',
    url: 'https://click-thumb.com/og-image-generator/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
