import Link from 'next/link'

export default function HowToMakeThumbnailWithoutCanvaPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">Make Thumbnail Without Canva</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-05-11">May 11, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Make a Thumbnail Without Canva (Free, 2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Canva is a capable design tool — but for thumbnails specifically, it has real friction:
            you need an account, some templates require a paid plan, elements can trigger a paywall
            mid-design, and exporting uploads your image to Canva&apos;s servers. If you just need
            a clean YouTube or social media thumbnail in two minutes, there is a faster path.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          {/* Why skip Canva */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Why Creators Skip Canva for Thumbnails</h2>
            <p className="text-text-muted">
              Canva was designed as a general-purpose design tool — it handles presentations,
              social posts, flyers, resumes, and dozens of other formats. That breadth means
              it is not optimized for the specific workflow of making thumbnails quickly. The
              problems that come up most often:
            </p>
            <div className="space-y-3">
              {[
                {
                  problem: 'Account required',
                  detail: 'Canva requires an email sign-up before you can export anything. If you are making a quick thumbnail for a single video, creating and managing an account is friction you do not need.',
                },
                {
                  problem: 'Premium element traps',
                  detail: 'Canva\'s free tier includes many templates and graphics, but premium elements are scattered throughout. It is easy to build a design and only discover at export time that one graphic or photo requires a Pro subscription ($13–$15/month).',
                },
                {
                  problem: 'Canva owns your uploads',
                  detail: 'Images you upload to Canva are stored on their servers. For gaming creators using captured footage, streamers with brand assets, or creators with proprietary character art, uploading to a third-party server is an unnecessary risk.',
                },
                {
                  problem: 'Not sized for thumbnails by default',
                  detail: 'You have to manually select "YouTube Thumbnail" or set custom dimensions. The tool does not default to 1280×720 for thumbnails — you navigate through a template library first.',
                },
              ].map(({ problem, detail }) => (
                <div key={problem} className="rounded-xl border border-border p-4 space-y-1">
                  <p className="text-sm font-semibold text-text-main">❌ {problem}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What you actually need */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">What You Actually Need to Make a Thumbnail</h2>
            <p className="text-text-muted">
              A thumbnail has three elements: a background (color, gradient, or image), text (title
              or hook), and optionally a character or face. That is it. You do not need a
              full design suite for that. What you do need:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  need: 'Correct canvas size',
                  desc: '1280×720px for YouTube. 1080×1080 for Instagram. 1080×1920 for TikTok. The canvas must be pre-sized — resizing after export compresses and blurs the result.',
                },
                {
                  need: 'Text overlay',
                  desc: 'Bold title text, typically 80–120pt, high-contrast color. Thumbnails are scanned in under a second — text must be readable at thumbnail size (approx. 120×68px on mobile).',
                },
                {
                  need: 'Background image or color',
                  desc: 'A solid color, gradient, or gameplay screenshot. The background establishes the visual tone — it does not need to be elaborate, but it must not compete with the text.',
                },
              ].map(({ need, desc }) => (
                <div key={need} className="rounded-xl border border-border p-4 space-y-1">
                  <p className="font-semibold text-text-main text-sm">✓ {need}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Step by step */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How to Make a Thumbnail Without Canva — Step by Step</h2>
            <p className="text-text-muted">
              This walkthrough uses{' '}
              <Link href="/youtube-thumbnail-maker" className="text-primary underline">
                ClickThumb
              </Link>
              , a free browser-based thumbnail maker. No account needed — open it and it is ready.
            </p>
            <ol className="space-y-5">
              {[
                {
                  step: '1. Open the thumbnail maker for your platform',
                  desc: 'Go to the tool for your platform: YouTube Thumbnail Maker (1280×720), Instagram Post Maker (1080×1080), TikTok Cover Maker (1080×1920). The canvas is pre-sized to the exact platform dimensions — you never have to enter a number.',
                  link: null,
                },
                {
                  step: '2. Pick a template or set a background color',
                  desc: 'Choose a template from the panel on the right to start from an existing layout, or click the background color swatch to set a solid color. For gaming thumbnails, upload a screenshot as the background using the "Upload Background Image" button below the canvas.',
                  link: null,
                },
                {
                  step: '3. Edit the title text',
                  desc: 'Click the text field and type your video title or hook. Short and punchy works best — 3 to 5 words that complete a thought or raise a question. Adjust the font from the dropdown to match your channel style.',
                  link: null,
                },
                {
                  step: '4. Drag the text to position',
                  desc: 'Click and drag the text on the canvas to place it. Common positions: top-left for gaming thumbnails, center for tutorial thumbnails, bottom-left when a face or character fills the right side.',
                  link: null,
                },
                {
                  step: '5. Export and download',
                  desc: 'Click the Download button. The image saves to your device as a JPG or PNG at the exact platform dimensions. No watermark, no account, no upload to any server.',
                  link: null,
                },
              ].map(({ step, desc }) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {step[0]}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-text-main">{step.slice(3)}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Platform sizes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Thumbnail Sizes by Platform — 2026</h2>
            <p className="text-text-muted">
              Every platform has different requirements. Getting the size wrong means your thumbnail
              gets cropped, stretched, or displayed blurry. ClickThumb pre-sets the canvas to the
              correct size for each platform automatically.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left p-3 font-semibold text-text-main">Platform</th>
                    <th className="text-left p-3 font-semibold text-text-main">Dimensions</th>
                    <th className="text-left p-3 font-semibold text-text-main">Aspect Ratio</th>
                    <th className="text-left p-3 font-semibold text-text-main">Tool</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['YouTube Thumbnail', '1280×720px', '16:9', '/youtube-thumbnail-maker'],
                    ['Instagram Post', '1080×1080px', '1:1', '/instagram-post-maker'],
                    ['Instagram Story / TikTok', '1080×1920px', '9:16', '/tiktok-thumbnail-maker'],
                    ['Twitter / X Header', '1500×500px', '3:1', '/twitter-header-maker'],
                    ['LinkedIn Banner', '1584×396px', '4:1', '/linkedin-banner-maker'],
                    ['Facebook Cover', '851×315px', '2.7:1', '/'],
                    ['OG Image (link preview)', '1200×630px', '1.91:1', '/og-image-generator'],
                  ].map(([platform, dims, ratio, href]) => (
                    <tr key={platform} className="border-b border-border hover:bg-surface/50 transition-colors">
                      <td className="p-3 font-medium text-text-main text-xs">{platform}</td>
                      <td className="p-3 text-text-muted text-xs">{dims}</td>
                      <td className="p-3 text-text-muted text-xs">{ratio}</td>
                      <td className="p-3 text-xs">
                        <Link href={href} className="text-primary underline">
                          Open tool →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Design tips */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5 Thumbnail Design Rules That Actually Work</h2>
            <p className="text-text-muted">
              The goal of a thumbnail is not to look polished — it is to get a click. These rules
              are based on what high-CTR thumbnails from top creators have in common:
            </p>
            <div className="space-y-3">
              {[
                {
                  rule: 'High contrast text — always',
                  detail: 'White text on a dark background, or dark text on a light background. Never gray text on gray. Thumbnails are scanned at 120×68px on mobile — if the text is not readable at that size, it will not get clicks.',
                },
                {
                  rule: 'Three words or fewer for the hook',
                  detail: '"I WAS WRONG", "BIGGEST MISTAKE", "ACTUALLY WORKS" — short emotional triggers outperform descriptive titles every time. The full title is already in the video title beneath the thumbnail.',
                },
                {
                  rule: 'One focal point',
                  detail: 'A cluttered thumbnail is an ignored thumbnail. Pick one thing to draw the eye: a face, a bold number, or a single striking visual. Everything else is background.',
                },
                {
                  rule: 'Faces get more clicks',
                  detail: 'Thumbnails with visible human faces showing clear emotion (shock, excitement, confusion) consistently outperform thumbnails without faces. If you appear on camera, include a reaction shot.',
                },
                {
                  rule: 'Match your channel palette',
                  detail: 'Viewers recognize returning creators partly by color. Pick 2–3 brand colors and use them consistently across thumbnails. Over 50 videos, that consistency builds visual identity without extra design work.',
                },
              ].map(({ rule, detail }) => (
                <div key={rule} className="rounded-xl border border-border p-4 space-y-1">
                  <p className="text-sm font-semibold text-text-main">→ {rule}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Canva vs ClickThumb */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Canva vs ClickThumb for Thumbnails</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left p-3 font-semibold text-text-main">Feature</th>
                    <th className="text-left p-3 font-semibold text-text-main">Canva Free</th>
                    <th className="text-left p-3 font-semibold text-text-main">ClickThumb</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Account required', '✅ Yes', '✅ No'],
                    ['Watermark-free export', '⚠️ Some elements locked', '✅ Always free'],
                    ['Platform-correct sizes', '⚠️ Manual selection', '✅ Pre-set by default'],
                    ['Images uploaded to server', '❌ Yes (Canva servers)', '✅ No (browser only)'],
                    ['Monthly cost', '❌ $13–15/mo for Pro', '✅ Free'],
                    ['Templates for gaming thumbnails', '⚠️ Generic only', '✅ Game-specific'],
                    ['Works offline', '❌ No', '✅ Yes (after first load)'],
                  ].map(([feature, canva, ct]) => (
                    <tr key={feature} className="border-b border-border hover:bg-surface/50 transition-colors">
                      <td className="p-3 font-medium text-text-main text-xs">{feature}</td>
                      <td className="p-3 text-text-muted text-xs">{canva}</td>
                      <td className="p-3 text-text-muted text-xs">{ct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tools */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Free Thumbnail Makers by Platform</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/youtube-thumbnail-maker', label: 'YouTube\nThumbnail' },
                { href: '/gaming-thumbnail-maker', label: 'Gaming\nThumbnail' },
                { href: '/instagram-post-maker', label: 'Instagram\nPost' },
                { href: '/tiktok-thumbnail-maker', label: 'TikTok\nCover' },
                { href: '/twitter-header-maker', label: 'Twitter\nHeader' },
                { href: '/linkedin-banner-maker', label: 'LinkedIn\nBanner' },
                { href: '/og-image-generator', label: 'OG Image\nGenerator' },
                { href: '/facebook-cover-maker', label: 'Facebook\nCover' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-border px-3 py-3 text-xs text-center font-medium text-text-muted hover:text-primary hover:border-primary transition-colors whitespace-pre-line"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <dl className="space-y-4">
              {[
                {
                  q: 'Can I make thumbnails without Canva?',
                  a: 'Yes. Browser-based thumbnail makers like ClickThumb work without any account or subscription. You get a canvas pre-sized to the correct platform dimensions, templates to start from, text and background controls, and direct download — no watermark, no sign-up.',
                },
                {
                  q: 'What is the best free Canva alternative for thumbnails?',
                  a: 'ClickThumb is built specifically for thumbnails — unlike Canva, which is a general design tool. Every canvas is pre-sized to the exact platform dimensions (1280×720 for YouTube, 1080×1080 for Instagram), so you never have to look up dimensions or resize after exporting.',
                },
                {
                  q: 'Does Canva put a watermark on free thumbnails?',
                  a: "Canva's free plan does not watermark most exports, but premium elements (photos, graphics, templates with a crown icon) require a paid plan to download watermark-free. If you used a premium element, the export is blocked until you upgrade or remove it.",
                },
                {
                  q: 'Do I need to sign up to use ClickThumb?',
                  a: 'No account is required. Open the tool, pick a template, customize text and background, and download. The canvas runs entirely in your browser — no sign-up, no email, no subscription.',
                },
                {
                  q: 'What size should a YouTube thumbnail be?',
                  a: '1280×720 pixels (16:9 aspect ratio). Maximum file size 2MB. ClickThumb pre-sets the canvas to 1280×720 automatically when you open the YouTube Thumbnail Maker.',
                },
                {
                  q: 'Can I use my own background image in the thumbnail?',
                  a: 'Yes. Click the "Upload Background Image" button below the canvas to use your own screenshot, photo, or artwork as the background. The image is loaded directly into the browser — it is never uploaded to any server.',
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-border rounded-xl p-4 space-y-2">
                  <dt className="font-semibold text-text-main text-sm">{q}</dt>
                  <dd className="text-sm text-text-muted leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

        </div>

        <div className="pt-8 border-t border-border mt-10">
          <Link href="/blog" className="text-primary text-sm hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  )
}
