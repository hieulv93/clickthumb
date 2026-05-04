import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TikTok Cover Size Guide 2026 — Exact Dimensions & Design Tips',
  description:
    'The exact TikTok cover size for 2026 — 1080×1920px explained, what gets cropped in the grid view, and how to design a cover that looks great everywhere.',
  alternates: { canonical: 'https://click-thumb.com/blog/tiktok-cover-size-guide/' },
}

export default function TikTokCoverSizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">TikTok Cover Size Guide 2026</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-05">May 5, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            TikTok Cover Size Guide 2026 — Exact Dimensions & Design Tips
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your TikTok cover is the still image viewers see in your profile grid before they
            click a video. Most creators ignore it — but a consistent, well-designed cover is
            one of the fastest ways to make your profile look professional and grow followers.
            Here is everything you need to know.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">TikTok Cover Size: Exact Dimensions</h2>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-2">
              <p className="font-semibold text-text-main mb-3">TikTok cover specifications (2026)</p>
              {[
                ['Full cover size', '1080 × 1920 pixels (9:16 portrait)'],
                ['Profile grid crop', '1080 × 1080 pixels (center square)'],
                ['Safe zone for text/logo', 'Center 1080×1080 square — top and bottom 420px get cropped in grid'],
                ['File format', 'JPG or PNG'],
                ['Max file size', '< 10 MB recommended'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-text-muted">
                  <span className="font-medium text-text-main w-52 shrink-0">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted">
              The most important thing to understand: TikTok displays your cover at two different
              sizes. In the video player (full-screen), it shows at <strong className="text-text-main">1080×1920</strong> (full
              portrait). In your profile grid, it shows as a <strong className="text-text-main">1080×1080 center crop</strong> —
              meaning the top and bottom ~420 pixels of your cover are hidden in the grid view.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Safe Zone: What Gets Cropped</h2>
            <p className="text-text-muted">
              This is the most common TikTok cover mistake: placing your text, logo, or subject
              near the top or bottom of the frame, only to have it cut off in the profile grid.
            </p>
            <div className="border border-border rounded-xl overflow-hidden text-sm">
              <div className="bg-red-50 border-b border-border p-4 text-center">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Cropped in grid view — top 420px</p>
                <p className="text-text-muted text-xs">Avoid placing text, logos, or key subject here</p>
              </div>
              <div className="bg-green-50 p-6 text-center">
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Safe zone — center 1080×1080px</p>
                <p className="text-text-muted text-xs">All important elements (face, text, logo) must be here</p>
              </div>
              <div className="bg-red-50 border-t border-border p-4 text-center">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Cropped in grid view — bottom 420px</p>
                <p className="text-text-muted text-xs">Avoid placing text, logos, or key subject here</p>
              </div>
            </div>
            <p className="text-text-muted">
              Design your cover so that everything important — your face, text, brand logo — sits
              within the center square. The top and bottom sections can have background elements
              (gradient, pattern, color) but nothing critical.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Why TikTok Covers Matter for Growth</h2>
            <p className="text-text-muted">
              When someone discovers your content and visits your profile, they see a grid of
              cover images before anything else. If every cover looks different — random
              screenshots, different color schemes, inconsistent style — the profile looks messy
              and unprofessional. Viewers leave without following.
            </p>
            <p className="text-text-muted">
              Creators who grow fastest on TikTok treat their profile grid like a magazine layout:
              consistent color palette, consistent text placement, consistent visual style. Every
              new video fits the grid. When someone sees one of your videos in their For You Page
              and visits your profile, the grid immediately signals: <em>this creator is serious.</em>
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-3">
              <p className="font-semibold text-text-main">What consistent TikTok covers do for your channel</p>
              <ul className="space-y-2 text-text-muted">
                {[
                  'Profile looks professional → increases follow rate from profile visits',
                  'Consistent branding → viewers recognize your content in their feed',
                  'Series covers (same template) → easier to binge-watch related videos',
                  'Text overlays → communicate video topic even with sound off',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Design a TikTok Cover That Works</h2>
            <div className="space-y-4">
              {[
                { num: '1', title: 'Pick one design system and stick with it', desc: "Choose a background color (or gradient), one font, and one layout — then use it for every video in a series. Your profile grid should look like it was designed by someone who cares about it." },
                { num: '2', title: 'Put text in the center safe zone', desc: "All text must sit within the center 1080×1080px. For a 1080×1920 canvas, this means starting text no higher than 420px from the top and no lower than 420px from the bottom." },
                { num: '3', title: 'Use high-contrast text', desc: "TikTok cover text is often read at the small grid size (~120px). White text on dark background, or dark text on light background. Add a subtle shadow or outline if the background color varies." },
                { num: '4', title: 'Keep it simple', desc: "A solid color background + one line of bold text + your logo is often more effective than a complex design. Complexity gets lost at grid thumbnail size." },
                { num: '5', title: 'Match your niche aesthetic', desc: "Dark and dramatic for gaming. Clean and minimal for lifestyle. Bright and playful for comedy. Your cover style should immediately signal what kind of creator you are." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{num}</div>
                  <div>
                    <p className="font-semibold text-text-main mb-1">{title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Step-by-Step: Make a TikTok Cover Free</h2>
            <p className="text-text-muted">
              <Link href="/tiktok-thumbnail-maker" className="text-primary underline">
                ClickThumb&apos;s TikTok Cover Maker
              </Link>{' '}
              opens at 1080×1920 — the exact TikTok cover size. Templates include safe zone
              guidance so you never accidentally place text where it gets cropped.
            </p>
            <div className="space-y-3">
              {[
                { step: 'Step 1', title: 'Open the TikTok Cover Maker', desc: 'Canvas opens at 1080×1920 automatically. No account, no signup. Choose a template that matches your content style.' },
                { step: 'Step 2', title: 'Edit the title text', desc: 'Replace the template text with your video title or a short hook. Keep it to 3–5 words. Position within the center safe zone.' },
                { step: 'Step 3', title: 'Set your background', desc: 'Upload a still from your video as the background, or use a solid color / gradient that matches your brand palette.' },
                { step: 'Step 4', title: 'Download', desc: 'Exports at 1080×1920 as JPG. Upload directly to TikTok when posting your video by tapping "Select cover" in the TikTok app.' },
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
                { q: 'What is the TikTok cover size in 2026?', a: '1080×1920 pixels (9:16 portrait ratio). This is the full cover shown in the video player. In your profile grid, TikTok crops to the center 1080×1080 square, so keep all important elements in the middle of the frame.' },
                { q: 'How do I set a custom TikTok cover?', a: "When uploading a video in the TikTok app, tap 'Select cover' before posting. You can either drag the timeline to a specific frame from the video, or upload a custom cover image. Custom images must be under 10MB." },
                { q: 'Does TikTok cover affect views?', a: "The cover doesn't affect the For You Page algorithm directly — TikTok distributes videos based on watch time and engagement. But it does affect your profile follow rate. A consistent, professional grid converts profile visitors into followers more effectively." },
                { q: 'Can I use the same cover design for every video?', a: "Yes — with different text. Keeping the same template (background, layout, font) across all videos in a series makes your profile grid look intentional. Only the title text changes per video." },
                { q: 'What aspect ratio is TikTok cover?', a: '9:16 portrait (same as TikTok videos). The exact pixel dimensions are 1080×1920. Do not use square (1:1) or landscape (16:9) covers — TikTok will stretch or crop them.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-surface border border-border p-6 space-y-3">
            <h2 className="text-xl font-bold text-text-main">Make Your TikTok Cover Now</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Free, no signup, no watermark. Canvas pre-set to 1080×1920 with safe zone templates.
              Design your cover and download in under two minutes.
            </p>
            <Link href="/tiktok-thumbnail-maker" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Open TikTok Cover Maker →
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
