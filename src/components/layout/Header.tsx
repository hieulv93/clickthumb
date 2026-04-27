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
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-border bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-2 sm:h-14 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-0">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-text-main hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="ClickThumb - Home"
        >
          <svg
            className="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold">ClickThumb</span>
            <span className="text-[10px] font-normal text-text-muted hidden sm:block">
              Free Image Creator
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm sm:flex-nowrap sm:gap-3">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === href + '/'
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-0.5 ${
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
