import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found | ClickThumb',
  description: 'The page you are looking for does not exist. Browse free thumbnail and social image tools below.',
}

const quickLinks = [
  { href: '/youtube-thumbnail-maker', label: 'YouTube Thumbnail Maker' },
  { href: '/gaming-thumbnail-maker', label: 'Gaming Thumbnail Maker' },
  { href: '/instagram-post-maker', label: 'Instagram Post Maker' },
  { href: '/twitter-header-maker', label: 'Twitter Header Maker' },
  { href: '/linkedin-banner-maker', label: 'LinkedIn Banner Maker' },
  { href: '/youtube-banner-maker', label: 'YouTube Banner Maker' },
]

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 py-16 text-center space-y-6">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="text-2xl font-bold text-text-main">Page Not Found</h1>
        <p className="text-text-muted text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Try one of the
          tools below or go back to the homepage.
        </p>

        <div className="grid grid-cols-2 gap-2 pt-2">
          {quickLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg border border-border px-3 py-2 text-sm text-text-main hover:border-primary hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
