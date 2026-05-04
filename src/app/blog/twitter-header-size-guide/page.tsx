import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Twitter / X Header Size Guide 2026 — Exact Dimensions & Safe Zones',
  description:
    'The exact Twitter (X) header size for 2026 — 1500×500px, what gets hidden by the profile picture, and how to design a header that looks great on all devices.',
  alternates: { canonical: 'https://click-thumb.com/blog/twitter-header-size-guide/' },
}

export default function TwitterHeaderSizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">Twitter Header Size Guide 2026</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-06">May 6, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Twitter / X Header Size Guide 2026 — Exact Dimensions & Safe Zones
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your Twitter (X) header image is one of the first things people see when they visit
            your profile. Getting the dimensions and safe zones right means your design looks
            professional on every device — desktop, tablet, and mobile — without being cropped
            or covered by your profile picture.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Twitter Header Size: Exact Specifications</h2>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-2">
              <p className="font-semibold text-text-main mb-3">Twitter / X header specifications (2026)</p>
              {[
                ['Recommended size', '1500 × 500 pixels'],
                ['Aspect ratio', '3:1 (landscape)'],
                ['Minimum size', '600 × 200 pixels'],
                ['File format', 'JPG, PNG, or GIF (static only)'],
                ['Max file size', '5 MB'],
                ['Display width', 'Scales to fit browser/app width'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-text-muted">
                  <span className="font-medium text-text-main w-44 shrink-0">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted">
              Design at <strong className="text-text-main">1500×500 pixels</strong>. This is the size Twitter
              recommends and what most desktop monitors display natively. At smaller screen sizes,
              Twitter scales the header down proportionally — no cropping on width, but the top
              and bottom edges may be cropped on some mobile views.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Safe Zone: Profile Picture Overlap</h2>
            <p className="text-text-muted">
              The most common Twitter header mistake: placing important content (logo, text, face)
              in the bottom-left corner — exactly where the profile picture overlaps the header.
            </p>
            <div className="border border-border rounded-xl p-5 text-sm space-y-4">
              <p className="font-semibold text-text-main">Areas to avoid on a 1500×500 header</p>
              <div className="space-y-3 text-text-muted">
                <div className="flex gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-400 shrink-0 mt-1"></span>
                  <div>
                    <p className="font-medium text-text-main">Bottom-left corner (~250×250px)</p>
                    <p>Profile picture overlaps here. Any content placed in this area is hidden behind the circular avatar.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0 mt-1"></span>
                  <div>
                    <p className="font-medium text-text-main">Bottom edge (~60px)</p>
                    <p>Username, bio, and follow button sit below the header. Keep the bottom edge clean — avoid important content very close to the bottom.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 shrink-0 mt-1"></span>
                  <div>
                    <p className="font-medium text-text-main">Center and right side — safe zone</p>
                    <p>This area is always visible on desktop and mobile. Place your brand name, tagline, or key visual here.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What to Put in Your Twitter Header</h2>
            <p className="text-text-muted">
              The Twitter header is prime real estate that most users leave generic. A
              well-designed header communicates who you are and what you do within 2 seconds.
              Here are the most effective approaches by account type:
            </p>
            <div className="space-y-3">
              {[
                { type: 'Personal brand / creator', content: 'Your name or handle, a one-line description of what you do, and optionally a link to your latest project or newsletter. Clean, minimal.' },
                { type: 'Business / brand', content: 'Product screenshot or hero visual, tagline, and website URL. Think of it as a mini billboard.' },
                { type: 'Developer / indie maker', content: 'Screenshot of your app, "Built by @handle", and launch date or current status ("🚀 Now live"). Updates regularly as you ship.' },
                { type: 'Content creator / YouTuber', content: 'Channel art showing your content style, your posting schedule ("New videos every Tuesday"), and a call to action like "Subscribe →".' },
              ].map(({ type, content }) => (
                <div key={type} className="border border-border rounded-xl p-4 space-y-1">
                  <p className="font-semibold text-text-main text-sm">{type}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Design Tips for Twitter Headers</h2>
            <div className="space-y-3">
              {[
                { tip: 'Use the full width', desc: '1500px is wide. Most other platforms use square or portrait formats — Twitter is the rare platform where horizontal space is your advantage. Spread your design across the full width rather than centering everything.' },
                { tip: 'Match your profile picture color', desc: 'Coordinate your header background color with your profile picture border or background color. This creates visual cohesion that signals attention to branding detail.' },
                { tip: 'Keep text large', desc: 'Twitter scales the header down on mobile. Any text in the header must be readable when the header is displayed at roughly 375px wide. Large, bold text only — no body copy.' },
                { tip: 'Update it regularly', desc: "Twitter header is one of the few places on the platform you can update without affecting the algorithm. Update it for product launches, announcements, or seasonal campaigns. It's visible on your profile for the lifetime of the pinned tweet." },
              ].map(({ tip, desc }) => (
                <div key={tip} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-semibold text-text-main text-sm">{tip}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Step-by-Step: Make a Twitter Header Free</h2>
            <p className="text-text-muted">
              <Link href="/twitter-header-maker" className="text-primary underline">
                ClickThumb&apos;s Twitter Header Maker
              </Link>{' '}
              opens at 1500×500 — the exact Twitter header size — with templates designed around
              the profile picture safe zone.
            </p>
            <div className="space-y-3">
              {[
                { step: 'Step 1', title: 'Open Twitter Header Maker', desc: 'Canvas loads at 1500×500 automatically. Choose a template — minimal, brand-focused, or creator-style.' },
                { step: 'Step 2', title: 'Add your brand content', desc: 'Replace template text with your name, tagline, or announcement. Keep text on the right 70% of the canvas to avoid the profile picture zone.' },
                { step: 'Step 3', title: 'Set your background', desc: 'Upload a background image or choose a solid/gradient color that matches your brand. Ensure contrast between background and text.' },
                { step: 'Step 4', title: 'Download and upload', desc: 'Export as JPG (1500×500). On Twitter/X, go to Edit Profile → Header photo → Upload. The result displays immediately.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="border border-border rounded-xl p-5 space-y-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">{step}</p>
                  <p className="font-semibold text-text-main">{title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the Twitter / X header size in 2026?', a: '1500×500 pixels (3:1 aspect ratio). This is the recommended size that displays at full quality on desktop. Twitter scales it down proportionally on smaller screens.' },
                { q: 'What part of the Twitter header is hidden by the profile picture?', a: 'The bottom-left corner of the header — roughly a 250×250px area. Avoid placing your logo, face, or important text in this region. Keep key content in the center or right side of the header.' },
                { q: 'What file formats does Twitter accept for headers?', a: 'JPG, PNG, and static GIF. Twitter does not support animated GIF headers (the animation will not play). Max file size is 5MB. JPG at high quality is the recommended format for photos; PNG for designs with text or transparent elements.' },
                { q: 'How often should I update my Twitter header?', a: "Update it whenever you have a major announcement: product launch, new project, milestone, or seasonal campaign. A stale header (years old) signals an inactive account. Updating it regularly also gives followers a reason to visit your profile." },
                { q: 'Does Twitter compress header images?', a: "Yes — Twitter re-compresses uploaded images. Upload at exactly 1500×500 and use a high-quality JPG or PNG to minimize the impact. Pre-compressing with a tool like compressimg.pro to ~500KB before uploading can also help retain sharpness." },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-surface border border-border p-6 space-y-3">
            <h2 className="text-xl font-bold text-text-main">Make Your Twitter Header Now</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Free, no signup, no watermark. Canvas pre-set to 1500×500 with safe zone templates.
              Design your header and download in under two minutes.
            </p>
            <Link href="/twitter-header-maker" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Open Twitter Header Maker →
            </Link>
          </section>

          <div className="border-t border-border pt-6 text-sm text-text-muted">
            <p>More guides: <Link href="/blog" className="text-primary hover:underline">ClickThumb Blog →</Link></p>
          </div>
        </div>
      </article>
    </main>
  )
}
