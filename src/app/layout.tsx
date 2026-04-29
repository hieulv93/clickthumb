import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
})

export const metadata: Metadata = {
  verification: {
    other: {
      'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_ID ?? '',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://click-thumb.com'),
  title: {
    default: 'Free Thumbnail & Social Media Image Maker | ClickThumb',
    template: '%s | ClickThumb',
  },
  description:
    'Free online thumbnail and social media image creator. Make YouTube thumbnails, Instagram posts, Twitter headers, and LinkedIn banners instantly. No signup, 100% browser-based.',
  keywords: [
    'thumbnail maker',
    'youtube thumbnail maker',
    'social media image creator',
    'instagram post maker',
    'thumbnail studio',
  ],
  authors: [{ name: 'ClickThumb' }],
  alternates: { canonical: 'https://click-thumb.com/' },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ClickThumb',
    url: 'https://click-thumb.com/',
    images: [{ url: 'https://click-thumb.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@clickthumb' },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      url: 'https://click-thumb.com',
      name: 'ClickThumb',
      description:
        'Free browser-based image creator. Make YouTube thumbnails, Instagram posts, Twitter headers, and LinkedIn banners instantly. No upload, no login — 100% private.',
    },
    {
      '@type': 'Organization',
      url: 'https://click-thumb.com',
      name: 'ClickThumb',
      logo: {
        '@type': 'ImageObject',
        url: 'https://click-thumb.com/logo.png',
        width: 512,
        height: 512,
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-text-main flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        {ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
            id="adsense-script"
          />
        )}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
