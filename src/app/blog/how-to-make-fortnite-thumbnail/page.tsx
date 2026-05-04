import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Make a Fortnite Thumbnail (Free, 2026 Guide)',
  description:
    'Step-by-step guide to making a Fortnite thumbnail that gets more clicks — correct size, color strategy, text rules, character placement, and common mistakes to avoid.',
  alternates: { canonical: 'https://click-thumb.com/blog/how-to-make-fortnite-thumbnail/' },
}

export default function HowToMakeFortniteThumbnail() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">How to Make a Fortnite Thumbnail</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-05">May 5, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Make a Fortnite Thumbnail (Free, 2026 Guide)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Fortnite thumbnails have a distinct visual language — bright neon colors, dramatic
            character poses, bold outlined text. Getting this right is the difference between a
            thumbnail that gets scrolled past and one that earns the click. Here is the complete
            guide.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Correct Fortnite Thumbnail Size</h2>
            <p className="text-text-muted">
              YouTube requires all thumbnails at <strong className="text-text-main">1280×720 pixels</strong> (16:9
              aspect ratio), and Fortnite thumbnails are no exception. Designing at any other
              size means YouTube will scale or crop your image — text becomes blurry, characters
              lose detail.
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-2">
              <p className="font-semibold text-text-main mb-3">Fortnite thumbnail specifications</p>
              {[
                ['Resolution', '1280 × 720 pixels'],
                ['Aspect ratio', '16:9'],
                ['File format', 'JPG or PNG'],
                ['Max file size', '2 MB'],
                ['Safe zone for text', 'Keep text within center 80% — edges get cropped on some devices'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-text-muted">
                  <span className="font-medium text-text-main w-44 shrink-0">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What Makes Fortnite Thumbnails Work</h2>
            <p className="text-text-muted">
              Fortnite thumbnails follow a recognizable formula that the biggest gaming channels
              have refined over millions of impressions. Understanding why this formula works helps
              you apply it without copying anyone directly.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Neon and high-saturation colors',
                  desc: "Fortnite's in-game aesthetic is bright and saturated — electric blue, hot pink, lime green, bright orange. Thumbnails that match this palette feel native to the game. Muted or desaturated thumbnails look out of place and get fewer clicks from Fortnite audiences.",
                },
                {
                  title: 'Character in a dramatic pose',
                  desc: "A Fortnite skin mid-action — jumping, landing, aiming — reads as exciting at thumbnail size. A static standing character does not. Use in-game screenshots at peak-action moments, or use a character PNG with a transparent background placed over a custom background.",
                },
                {
                  title: 'Bold, outlined text with high contrast',
                  desc: "Fortnite thumbnails typically use thick, white text with a dark outline or glow effect. This makes text readable over any background color. Keep the title to 3–5 words maximum. Long text shrinks to unreadable at mobile thumbnail size.",
                },
                {
                  title: 'A clear focal hierarchy',
                  desc: 'One character (or face), one text element, one background. Fortnite thumbnails that perform well do not have cluttered layouts. The eye moves: background → character → text. Three elements, in that order.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-semibold text-text-main text-sm">{title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Step-by-Step: Make a Fortnite Thumbnail Free</h2>
            <p className="text-text-muted">
              <Link href="/fortnite-thumbnail-maker" className="text-primary underline">
                ClickThumb&apos;s Fortnite Thumbnail Maker
              </Link>{' '}
              opens at 1280×720 with Fortnite-styled templates ready. No signup, no watermark.
            </p>
            <div className="space-y-3">
              {[
                { step: 'Step 1', title: 'Open the Fortnite Thumbnail Maker', desc: "Go to ClickThumb's Fortnite Thumbnail Maker. The canvas is pre-set to 1280×720. Choose a template that matches your video's energy — intense, funny, or challenge-style." },
                { step: 'Step 2', title: 'Set your background', desc: 'Upload a screenshot from your Fortnite session as the background — a dramatic storm circle, a Victory Royale moment, or a high-action firefight. Or use a solid neon color for a clean graphic look.' },
                { step: 'Step 3', title: 'Add your title text', desc: "Keep it short: '100 Eliminations in 1 Game' becomes '100 Kills'. The text should communicate the hook, not the full title. Use the font selector to pick a bold, heavy-weight font." },
                { step: 'Step 4', title: 'Check readability at small size', desc: 'Zoom out your browser until the thumbnail preview is about 120px wide. If you can read the text and identify the character, it will work on mobile. If not, increase font size or reduce text.' },
                { step: 'Step 5', title: 'Download', desc: 'Click Download Thumbnail. Exports at full 1280×720 resolution as JPG, under 500KB, ready to upload to YouTube directly.' },
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
            <h2 className="text-2xl font-bold">Color Strategy for Fortnite Thumbnails</h2>
            <p className="text-text-muted">
              Color is the most important single variable in Fortnite thumbnail performance. Here
              is how top channels use it:
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-3">
              <div className="grid grid-cols-2 gap-4 text-text-muted">
                <div>
                  <p className="font-semibold text-text-main mb-2">High-performing palettes</p>
                  <ul className="space-y-1">
                    <li>Electric blue + white text</li>
                    <li>Hot pink + black outline</li>
                    <li>Lime green + dark background</li>
                    <li>Bright orange + white</li>
                    <li>Purple + gold accent</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-text-main mb-2">Avoid these combinations</p>
                  <ul className="space-y-1">
                    <li>Dark blue + dark background</li>
                    <li>Red text on red-orange background</li>
                    <li>Grey + grey — low contrast</li>
                    <li>More than 4 colors total</li>
                    <li>Pastel tones — too soft for gaming</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Common Fortnite Thumbnail Mistakes</h2>
            <div className="space-y-3">
              {[
                { mistake: 'Too much text', fix: 'Cut the title to 3–5 words maximum. Everything else goes in the video title, not the thumbnail.' },
                { mistake: 'Character too small', fix: 'The character or face should occupy at least 40% of the canvas height. Small characters lose all impact at mobile thumbnail size.' },
                { mistake: 'Using in-game HUD screenshots', fix: 'Crop out the health bar, ammo counter, and map. Clean backgrounds make the character and text stand out.' },
                { mistake: 'Inconsistent style', fix: 'Use the same template, font, and color scheme across your channel. Consistency builds recognition — viewers click channels they recognize.' },
              ].map(({ mistake, fix }) => (
                <div key={mistake} className="border border-border rounded-xl p-4 space-y-1">
                  <p className="font-semibold text-text-main text-sm">❌ {mistake}</p>
                  <p className="text-text-muted text-sm leading-relaxed">✅ {fix}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What size should a Fortnite YouTube thumbnail be?', a: '1280×720 pixels (16:9). This is YouTube\'s recommended size for all thumbnails. Design at this resolution and export as JPG or PNG under 2MB.' },
                { q: 'Do I need Photoshop to make Fortnite thumbnails?', a: 'No. Browser-based tools like ClickThumb are pre-configured at 1280×720 with Fortnite-style templates. You can create a complete thumbnail in under two minutes with no design software.' },
                { q: 'Should I use my face or a Fortnite character in the thumbnail?', a: 'Both work. Face + character thumbnails tend to outperform character-only thumbnails because faces trigger emotional recognition. If you play face-cam, overlay your reaction next to the character.' },
                { q: 'What font works best for Fortnite thumbnails?', a: 'Heavy, condensed fonts with high weight — Impact, Anton, Bebas Neue, or Black Han Sans. Always add a dark outline or shadow so text reads over any background.' },
                { q: 'How do I get more clicks on my Fortnite thumbnails?', a: 'Test one variable at a time: try a different background color, change the text hook, or swap character pose. Check YouTube Studio CTR data after 48 hours. The thumbnail with higher CTR wins — replace the other.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-surface border border-border p-6 space-y-3">
            <h2 className="text-xl font-bold text-text-main">Make Your Fortnite Thumbnail Now</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Free, no signup, no watermark. Canvas pre-set to 1280×720 with Fortnite-style
              templates. Edit text, upload your background, download in two minutes.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/fortnite-thumbnail-maker" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Open Fortnite Thumbnail Maker →
              </Link>
              <Link href="/gaming-thumbnail-maker" className="inline-block border border-border px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:border-primary transition-colors">
                Gaming Thumbnail Maker
              </Link>
            </div>
          </section>

          <div className="border-t border-border pt-6 text-sm text-text-muted">
            <p>More guides: <Link href="/blog" className="text-primary hover:underline">ClickThumb Blog →</Link></p>
          </div>
        </div>
      </article>
    </main>
  )
}
