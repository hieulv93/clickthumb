import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instagram Post Size Guide 2026 — All Formats & Dimensions',
  description:
    'Exact Instagram post sizes for 2026 — square, portrait, landscape, Stories, Reels, and carousel. The right dimensions for every format so your images never get cropped.',
  alternates: { canonical: 'https://click-thumb.com/blog/instagram-post-size-guide/' },
}

export default function InstagramPostSizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">Instagram Post Size Guide 2026</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-06">May 6, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Instagram Post Size Guide 2026 — All Formats & Dimensions
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Instagram supports multiple image formats — square, portrait, landscape, Stories,
            Reels — each with different dimensions and cropping behavior. Using the wrong size
            means Instagram re-crops or compresses your image, reducing quality. Here are the
            exact specifications for every format in 2026.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Instagram Post Sizes: Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 font-semibold text-text-main border border-border">Format</th>
                    <th className="text-left p-3 font-semibold text-text-main border border-border">Dimensions</th>
                    <th className="text-left p-3 font-semibold text-text-main border border-border">Ratio</th>
                    <th className="text-left p-3 font-semibold text-text-main border border-border">Best for</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  {[
                    ['Square post', '1080 × 1080 px', '1:1', 'Feed posts, brand content'],
                    ['Portrait post', '1080 × 1350 px', '4:5', 'Photos, takes more feed space'],
                    ['Landscape post', '1080 × 566 px', '1.91:1', 'Wide photos, panoramas'],
                    ['Story / Reel', '1080 × 1920 px', '9:16', 'Vertical video & images'],
                    ['Carousel slide', '1080 × 1080 px', '1:1', 'Multi-image posts'],
                    ['Profile picture', '320 × 320 px', '1:1', 'Displays at 110px circle'],
                  ].map(([format, dims, ratio, use]) => (
                    <tr key={format} className="border-b border-border">
                      <td className="p-3 border border-border font-medium text-text-main">{format}</td>
                      <td className="p-3 border border-border">{dims}</td>
                      <td className="p-3 border border-border">{ratio}</td>
                      <td className="p-3 border border-border">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Feed Posts: Square vs Portrait vs Landscape</h2>
            <p className="text-text-muted">
              Instagram supports three aspect ratios for feed posts. Choosing the right one
              affects how much of the feed your post occupies — and how much attention it gets.
            </p>
            <div className="space-y-4">
              {[
                {
                  format: 'Square (1080×1080) — 1:1',
                  desc: "The most universal format. Works for product photos, text graphics, and brand content. Consistent grid layout since all images are the same height. This is the safest choice if you're unsure which format to use.",
                },
                {
                  format: 'Portrait (1080×1350) — 4:5',
                  desc: "Takes up more vertical space in the feed — roughly 35% more screen area than a square post. This means more visibility per scroll. Best for portrait photos of people, food photography, and text-heavy graphics. The most engagement-efficient feed format.",
                },
                {
                  format: 'Landscape (1080×566) — 1.91:1',
                  desc: "Wide panoramic format. Takes up less vertical space than square, giving less feed presence. Best used for actual wide-format photos (landscapes, architecture, group shots) where cropping to square would lose context.",
                },
              ].map(({ format, desc }) => (
                <div key={format} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{format}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How Instagram Compresses Images</h2>
            <p className="text-text-muted">
              Instagram re-compresses every uploaded image. Even if you upload a perfectly sharp
              1080×1080 JPEG, Instagram will run it through its own compression algorithm — often
              reducing quality noticeably, especially in areas with fine detail or gradients.
            </p>
            <p className="text-text-muted">
              Two ways to reduce Instagram&apos;s compression impact:
            </p>
            <div className="space-y-3">
              {[
                { tip: 'Upload at exactly the right pixel dimensions', desc: 'If Instagram has to resize your image (upscale or downscale), it re-encodes the JPEG, compressing twice. Upload at exactly 1080px width to avoid the resize step.' },
                { tip: 'Pre-compress before uploading', desc: "Instagram's compression is aggressive on large files. Pre-compressing your image to ~500–800KB before upload means Instagram's algorithm has less work to do — the result tends to be sharper. Use a tool like compressimg.pro to reduce file size before uploading." },
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
            <h2 className="text-2xl font-bold">Instagram Stories and Reels Size</h2>
            <p className="text-text-muted">
              Stories and Reels use the same dimensions: <strong className="text-text-main">1080×1920 pixels (9:16)</strong>.
              This is the full-screen portrait format that fills the entire phone display.
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-2">
              <p className="font-semibold text-text-main mb-3">Story / Reel safe zones</p>
              {[
                ['Top 250px', 'Instagram UI overlay (profile name, music label) — avoid placing content here'],
                ['Bottom 250px', 'Like/comment buttons and caption — avoid placing content here'],
                ['Center 1080×1420px', 'Safe zone — all text, faces, and key elements here'],
              ].map(([zone, note]) => (
                <div key={zone} className="flex gap-3 text-text-muted">
                  <span className="font-medium text-text-main w-36 shrink-0">{zone}</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Step-by-Step: Create an Instagram Post with ClickThumb</h2>
            <p className="text-text-muted">
              <Link href="/instagram-post-maker" className="text-primary underline">
                ClickThumb&apos;s Instagram Post Maker
              </Link>{' '}
              opens at 1080×1080 — the standard square format. No signup, no watermark, exports
              at full resolution instantly.
            </p>
            <div className="space-y-3">
              {[
                { step: 'Step 1', title: 'Open Instagram Post Maker', desc: 'Canvas loads at 1080×1080 (square format). Pick a template that suits your post type — product showcase, quote graphic, event announcement, or brand post.' },
                { step: 'Step 2', title: 'Add your content', desc: 'Replace template text with your message. Upload your image as the background. Adjust the background color to match your brand palette.' },
                { step: 'Step 3', title: 'Check text position', desc: 'Ensure all text sits within the center of the canvas — not touching edges. Instagram may crop a small amount on some devices.' },
                { step: 'Step 4', title: 'Download and upload', desc: 'Export as JPG (1080×1080). Upload directly to Instagram. The file size will typically be 200–500KB, well under Instagram\'s 30MB limit.' },
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
                { q: 'What is the best Instagram post size in 2026?', a: '1080×1080px (square, 1:1) is the safest universal choice. For maximum feed presence, use 1080×1350px (portrait, 4:5) — it occupies 35% more vertical space and typically drives more engagement.' },
                { q: 'Why does Instagram crop my photos?', a: "Instagram crops when your image aspect ratio is outside the supported range (0.8:1 to 1.91:1). Portrait images taller than 4:5 get cropped to 4:5. Use 1080×1350 (4:5) for the tallest supported portrait format without cropping." },
                { q: 'Does image size affect Instagram reach?', a: "Image dimensions don't directly affect reach. But image quality does — blurry or heavily compressed images get less engagement, which signals lower quality to the algorithm. Upload sharp, correctly-sized images." },
                { q: 'What is the Instagram carousel size?', a: '1080×1080px (square) per slide is the standard. All slides must use the same aspect ratio — Instagram will force them to match the first slide\'s ratio. Design all carousel slides at 1080×1080 for consistency.' },
                { q: 'Should I post portrait or square on Instagram?', a: "Portrait (1080×1350) generally outperforms square because it occupies more screen space in the feed. Use portrait for photos of people, food, and text graphics. Use square when you need a consistent grid layout or when the image composition doesn't work in portrait." },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5 space-y-2">
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-surface border border-border p-6 space-y-3">
            <h2 className="text-xl font-bold text-text-main">Create Your Instagram Post Now</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Free, no signup, no watermark. Canvas pre-set to 1080×1080 with Instagram-ready
              templates. Design your post and download in under two minutes.
            </p>
            <Link href="/instagram-post-maker" className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Open Instagram Post Maker →
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
