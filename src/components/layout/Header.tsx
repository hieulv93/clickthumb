import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
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
          <ul className="flex items-center gap-1 sm:gap-3 text-sm">
            <li>
              <Link
                href="/youtube-thumbnail-maker"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                href="/gaming-thumbnail-maker"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Gaming
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/instagram-post-maker"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Instagram
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/tiktok-thumbnail-maker"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                TikTok
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/twitter-header-maker"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Twitter
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/linkedin-banner-maker"
                className="text-text-muted hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
