'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/youtube-thumbnail-maker', label: 'YouTube' },
  { href: '/tiktok-thumbnail-maker', label: 'TikTok' },
  { href: '/gaming-thumbnail-maker', label: 'Gaming' },
  { href: '/instagram-post-maker', label: 'Instagram' },
  { href: '/twitter-header-maker', label: 'Twitter' },
  { href: '/linkedin-banner-maker', label: 'LinkedIn' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-border bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-3 sm:h-14 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-text-main hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="ClickThumb - Home"
        >
          <svg
            className="w-8 h-8 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Thumbnail frame — landscape, fills icon */}
            <rect x="2" y="5" width="20" height="14" rx="2" />
            {/* Title text line */}
            <line x1="4" y1="8.5" x2="15" y2="8.5" strokeWidth="1.5" />
            {/* Subtitle text line */}
            <line x1="4" y1="11.5" x2="11" y2="11.5" strokeWidth="1" />
            {/* Play button — bottom right inside frame */}
            <path d="M15 12 L15 18 L21 15 Z" fill="currentColor" stroke="none" />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold">ClickThumb</span>
            <span className="text-[10px] font-normal text-text-muted hidden sm:block">
              Free Image Creator
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:flex-nowrap sm:gap-3">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === href + '/'
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-1 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
