import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About ClickThumb — Free Browser-Based Thumbnail Maker',
  description:
    'Learn about ClickThumb — who built it, why, and our commitment to free, private, instant thumbnail creation. No signup, no watermarks, no uploads.',
  alternates: { canonical: 'https://click-thumb.com/about/' },
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">About ClickThumb</h1>
          <p className="text-lg text-text-muted leading-relaxed">
            ClickThumb is a free, browser-based toolkit for making thumbnails and social media images
            — built for YouTubers, gamers, and creators who need platform-perfect visuals without
            Photoshop, subscriptions, or uploads.
          </p>
        </header>

        {/* Why We Built This */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Why We Built This</h2>
          <p className="text-text-muted leading-relaxed">
            Every thumbnail tool we found had the same problems: they required a design background,
            charged a monthly fee, made you upload your images to a server you couldn&apos;t verify,
            or slapped a watermark on the result unless you paid. For a gaming creator who posts
            three videos a week, that adds up — in money, in friction, and in time spent fighting
            tools instead of making content.
          </p>
          <p className="text-text-muted leading-relaxed">
            The second problem was sizing. Every platform has different requirements — a YouTube
            thumbnail is 1280×720, an Instagram post is 1080×1080, a Twitter header is 1500×500.
            Getting these wrong means your image gets cropped, stretched, or rejected. We wanted a
            tool that baked the correct dimensions into every template, so creators never had to
            think about it.
          </p>
          <p className="text-text-muted leading-relaxed">
            ClickThumb was built to solve both: a canvas editor that runs entirely in your browser,
            pre-configured for the exact size each platform expects, with ready-made templates so
            you can go from nothing to a polished thumbnail in under two minutes — no account
            required, no watermark, no upload.
          </p>
        </section>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border p-5 space-y-2">
              <div className="text-2xl">🔒</div>
              <h3 className="font-semibold text-text-main">Privacy First</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Every tool on ClickThumb runs 100% in your browser. Your images never leave your
                device. Nothing is sent to any server — not even ours.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5 space-y-2">
              <div className="text-2xl">⚡</div>
              <h3 className="font-semibold text-text-main">Fast by Default</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                No upload, no queue, no waiting for a cloud render. Canvas editing and export happen
                instantly on your device, whether you&apos;re on desktop or mobile.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5 space-y-2">
              <div className="text-2xl">🆓</div>
              <h3 className="font-semibold text-text-main">Free Forever</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The core tools — templates, backgrounds, text, export — are free with no watermarks
                and no account required. That will not change.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">How It Works (Technically)</h2>
          <p className="text-text-muted leading-relaxed">
            ClickThumb uses browser-native APIs and open-source JavaScript libraries to run the
            canvas editor entirely client-side:
          </p>
          <ul className="space-y-3 text-text-muted">
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">Canvas editor</strong> uses{' '}
                <code className="text-xs bg-surface px-1 py-0.5 rounded">Fabric.js v5</code>, an
                open-source interactive canvas library. It handles object selection, drag-and-drop,
                text editing, and image placement — all in the browser.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">Platform sizing</strong> is baked into every
                tool. When you open the YouTube Thumbnail Maker, the canvas is pre-set to 1280×720.
                Instagram Post is 1080×1080. Twitter Header is 1500×500. You never have to set
                dimensions manually.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">Export</strong> uses the HTML5 Canvas API
                directly — <code className="text-xs bg-surface px-1 py-0.5 rounded">canvas.toBlob()</code>{' '}
                writes the canvas to a Blob in memory, which is downloaded immediately. No server
                involved.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-text-main">Background images</strong> you upload are loaded
                directly into the canvas via the File API. They never leave your device.
              </span>
            </li>
          </ul>
          <p className="text-text-muted leading-relaxed">
            The site itself is a static Next.js application served from Vercel&apos;s global CDN.
            There is no backend, no database, and no server that receives your image data.
          </p>
        </section>

        {/* Who uses it */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main">Who Uses ClickThumb</h2>
          <div className="space-y-3 text-text-muted">
            <p className="leading-relaxed">
              <strong className="text-text-main">YouTubers and video creators</strong> use it to
              make thumbnails for every upload — pick a template, change the title text, swap the
              background, export at 1280×720. Done in two minutes.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Gaming creators</strong> use the platform-specific
              tools — Roblox, Minecraft, Fortnite, Valorant, Apex Legends — each with templates
              designed for that game&apos;s aesthetic. No starting from scratch.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Social media managers</strong> use the Instagram,
              Twitter, LinkedIn, and Facebook tools to create consistent on-brand visuals quickly —
              without subscribing to a design tool.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Small business owners</strong> use it to create
              professional-looking social media graphics without hiring a designer or learning
              Photoshop. Open Graph images, Facebook covers, LinkedIn banners — all pre-sized.
            </p>
            <p className="leading-relaxed">
              <strong className="text-text-main">Developers and indie makers</strong> use the OG
              Image Generator to create OpenGraph preview images for their projects — the 1200×630
              card that appears when you share a link on Twitter or Slack.
            </p>
          </div>
        </section>

        {/* Commitment */}
        <section className="rounded-xl border border-border bg-surface p-6 space-y-3">
          <h2 className="text-xl font-bold text-text-main">Our Commitment</h2>
          <p className="text-text-muted leading-relaxed">
            ClickThumb will always offer free, unlimited access to core thumbnail and image creation
            tools — no account required, no watermarks, no export limits. We believe creators
            shouldn&apos;t need a subscription to make a thumbnail.
          </p>
          <p className="text-text-muted leading-relaxed">
            The site is supported by ads, which we load only after you have used the tool — never
            before. If you find ClickThumb useful, sharing it with a fellow creator is the best way
            to support keeping it free.
          </p>
        </section>

        {/* Links */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main">Explore the Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: '/youtube-thumbnail-maker', label: 'YouTube Thumbnail' },
              { href: '/gaming-thumbnail-maker', label: 'Gaming Thumbnail' },
              { href: '/instagram-post-maker', label: 'Instagram Post' },
              { href: '/tiktok-thumbnail-maker', label: 'TikTok Cover' },
              { href: '/twitter-header-maker', label: 'Twitter Header' },
              { href: '/linkedin-banner-maker', label: 'LinkedIn Banner' },
              { href: '/og-image-generator', label: 'OG Image' },
              { href: '/blog', label: 'Read the Blog' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg border border-border px-3 py-2.5 text-sm text-center font-medium text-text-muted hover:text-primary hover:border-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <p className="text-sm text-text-muted">
          Questions or feedback?{' '}
          <Link href="/contact" className="text-primary underline">
            Contact us
          </Link>
          . We read every message.
        </p>
      </article>
    </main>
  )
}
