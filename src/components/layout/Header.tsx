"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const navLinks = [
  { href: "/youtube-thumbnail-maker", label: "YouTube" },
  { href: "/tiktok-thumbnail-maker", label: "TikTok" },
  { href: "/gaming-thumbnail-maker", label: "Gaming" },
  { href: "/instagram-post-maker", label: "Instagram" },
  { href: "/twitter-header-maker", label: "Twitter" },
  { href: "/linkedin-banner-maker", label: "LinkedIn" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="w-full border-b border-border bg-white sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
        {/* Logo — shrink-0 so it never gets squeezed */}
        <Link
          href="/"
          className="shrink-0 flex items-center gap-2 font-bold text-text-main hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
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
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="4" y1="8.5" x2="15" y2="8.5" strokeWidth="1.5" />
            <line x1="4" y1="11.5" x2="11" y2="11.5" strokeWidth="1" />
            <path
              d="M15 12 L15 18 L21 15 Z"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold">ClickThumb</span>
            <span className="text-[10px] font-normal text-text-muted hidden sm:block">
              Free Image Creator
            </span>
          </span>
        </Link>

        {/* Nav — scrolls horizontally, tool links only (Dashboard moved to auth area) */}
        <div className="relative flex-1 min-w-0">
          <nav
            className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            aria-label="Main navigation"
          >
            <ul className="flex flex-nowrap gap-x-1 text-sm">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href || pathname === href + "/";
                return (
                  <li key={href} className="shrink-0">
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 whitespace-nowrap block ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-text-muted hover:text-primary"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Gradient fade hint — indicates more links to the right */}
          <div
            className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Auth + Dashboard — shrink-0, always visible */}
        <div className="shrink-0 flex items-center gap-2">
          {isLoaded && isSignedIn && (
            <Link
              href="/dashboard"
              aria-current={pathname === "/dashboard" ? "page" : undefined}
              className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 whitespace-nowrap text-sm ${
                pathname === "/dashboard"
                  ? "text-primary font-semibold"
                  : "text-text-muted hover:text-primary"
              }`}
            >
              Dashboard
            </Link>
          )}
          {!isLoaded ? (
            <div className="w-16 h-7 rounded-lg bg-gray-100 animate-pulse" />
          ) : isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="redirect">
              <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors whitespace-nowrap">
                Sign in
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
}
