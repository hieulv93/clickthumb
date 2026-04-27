import Link from 'next/link'

export default function YouTubeThumbnailSizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">YouTube Thumbnail Size Guide</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            YouTube Thumbnail Size: The Complete 2026 Guide
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            The right thumbnail dimensions are non-negotiable — upload the wrong size and YouTube
            crops your design, cuts off your text, and tanks your click-through rate. This guide
            covers the exact specs, format requirements, and design principles that top creators use
            to increase CTR by 2–3×.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          {/* Quick reference */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">YouTube Thumbnail Size — Quick Reference</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Recommended size', value: '1280 × 720 px' },
                { label: 'Aspect ratio', value: '16:9' },
                { label: 'Minimum width', value: '640 px' },
                { label: 'Max file size', value: '2 MB' },
                { label: 'Accepted formats', value: 'JPG, PNG, GIF, BMP' },
                { label: 'Best format', value: 'JPG at quality 85' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-border rounded-lg p-3">
                  <p className="text-text-muted text-xs mb-1">{label}</p>
                  <p className="font-semibold text-text-main">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Standard: 1280×720 Pixels</h2>
            <p>
              YouTube&apos;s official recommendation is <strong>1280×720 pixels</strong> at a{' '}
              <strong>16:9 aspect ratio</strong>. This is the widescreen format that matches standard
              HD video, and it is the size your thumbnail will appear at in the highest-resolution
              display contexts — such as a featured video on the homepage or the large preview when
              hovering over a video in search results.
            </p>
            <p className="mt-3">
              YouTube also accepts thumbnails at higher resolutions (1920×1080px, 2560×1440px), but
              there is no visual benefit. The extra pixels add file size without improving display
              quality since YouTube resamples all thumbnails to its own delivery sizes. Stick with
              1280×720px.
            </p>
            <p className="mt-3">
              The <strong>minimum accepted width is 640 pixels</strong>. YouTube will reject
              thumbnails narrower than this. Uploading a 640×360px thumbnail is technically valid,
              but the image will appear noticeably soft on retina displays and large monitors. Always
              use 1280×720px.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">File Size and Format Requirements</h2>
            <p>
              YouTube enforces a <strong>2MB maximum file size</strong> for thumbnails. A properly
              sized 1280×720px JPG saved at quality 85 will typically be 150–400KB — well under the
              limit. PNG thumbnails at the same resolution are usually 500KB–1.5MB depending on
              content complexity.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Format</th>
                    <th className="text-left p-3 border border-border font-semibold">Typical size at 1280×720</th>
                    <th className="text-left p-3 border border-border font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border font-medium">JPG</td>
                    <td className="p-3 border border-border">150–400 KB</td>
                    <td className="p-3 border border-border">Photos, faces, complex backgrounds</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border font-medium">PNG</td>
                    <td className="p-3 border border-border">500 KB–1.5 MB</td>
                    <td className="p-3 border border-border">Logos, flat colors, transparency</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-medium">GIF</td>
                    <td className="p-3 border border-border">Varies</td>
                    <td className="p-3 border border-border">Static only — YouTube ignores animation</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="p-3 border border-border font-medium">BMP</td>
                    <td className="p-3 border border-border">2–3 MB (often rejected)</td>
                    <td className="p-3 border border-border">Not recommended — too large</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-text-muted text-sm">
              JPG at quality 85 is the recommended output format. It produces sharp images at small
              file sizes and is universally supported. WebP is not accepted by YouTube — always
              export as JPG or PNG.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Where Thumbnails Display and Why Size Matters</h2>
            <p>
              YouTube displays thumbnails at different sizes depending on context. Understanding
              this is critical for designing thumbnails that work at every size:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  context: 'Search results (desktop)',
                  size: '246 × 138 px',
                  note: 'The most important context — most discovery happens here',
                },
                {
                  context: 'Homepage recommendations',
                  size: '360 × 202 px',
                  note: 'Second most important — drives returning viewer traffic',
                },
                {
                  context: 'Suggested videos sidebar',
                  size: '168 × 94 px',
                  note: 'Small — text must be very large to be readable',
                },
                {
                  context: 'Mobile search',
                  size: '120 × 67 px',
                  note: 'Smallest context — only strong contrast and bold visuals work',
                },
                {
                  context: 'Channel page / featured',
                  size: 'Up to 1280 × 720 px',
                  note: 'Full resolution display — where quality matters most',
                },
              ].map(({ context, size, note }) => (
                <div key={context} className="border border-border rounded-xl p-4 flex gap-4">
                  <div className="flex-shrink-0 w-32 text-right">
                    <p className="font-semibold text-text-main text-sm">{size}</p>
                  </div>
                  <div>
                    <p className="font-medium text-text-main text-sm">{context}</p>
                    <p className="text-text-muted text-xs mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4">
              The critical insight: at 120×67px on mobile search, only thumbnails with bold, high-contrast
              visuals and large text (3 words maximum) remain readable. Design at 1280×720px but test your
              thumbnail by scaling it down to 25% size — if it still communicates clearly, it will
              perform well across all contexts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Design Principles for High-CTR Thumbnails</h2>
            <p>
              Technical specs get your thumbnail uploaded. Design gets it clicked. YouTube&apos;s
              internal research shows that thumbnail CTR is one of the top signals used by the
              recommendation algorithm. Here are the principles used by channels with millions of
              subscribers:
            </p>

            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-lg font-bold mb-2">1. Use a human face — preferably with emotion</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Thumbnails featuring faces consistently outperform text-only and object-only thumbnails.
                  The human brain is hardwired to notice and process faces faster than any other visual
                  element. Surprised, excited, or concerned expressions outperform neutral faces. The
                  face should occupy at least 40% of the frame and be well-lit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">2. Bold text — maximum 3–5 words</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  If you include text, use large bold fonts with high contrast against the background.
                  At 1280×720px, use text that is at least 80px tall. Yellow text with black stroke is
                  the most visible combination across all background types. More than 5 words becomes
                  unreadable at small sizes — the text should reinforce the image, not replace it.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">3. Rule of thirds and visual hierarchy</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Place your main subject (face, key object) in the left or right third of the frame.
                  Text goes in the opposite third. The center of the frame is naturally where the eye
                  goes first — use it for the most important element. Avoid cluttering all three zones
                  with competing elements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">4. High contrast and saturated colors</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Thumbnails compete with dozens of other thumbnails in search results. High color
                  contrast (bright background vs. dark subject or vice versa) and saturated colors
                  increase visual salience — the likelihood that a viewer&apos;s eye lands on your
                  thumbnail first. Avoid muddy or low-contrast color combinations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">5. Consistent branding</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Use a consistent color palette, font style, and visual structure across all your
                  thumbnails. Viewers who have watched your content before will recognize your
                  thumbnails instantly, improving return-viewer CTR. Many large channels use the same
                  background color or corner logo on every thumbnail.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Thumbnail Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">Using the auto-generated thumbnail.</strong>{' '}
                YouTube auto-selects a frame from your video — usually a mid-sentence blinking shot.
                Custom thumbnails consistently outperform auto-generated ones by 2–5× CTR.
              </li>
              <li>
                <strong className="text-text-main">Placing important content near the edges.</strong>{' '}
                The bottom-right corner of thumbnails is often obscured by the video duration
                timestamp. Keep faces, text, and key visuals in the center 80% of the frame.
              </li>
              <li>
                <strong className="text-text-main">Clickbait that doesn&apos;t match the video.</strong>{' '}
                YouTube tracks audience retention. If viewers click your thumbnail expecting content
                that isn&apos;t there, they leave early — which tanks your video&apos;s ranking. High
                CTR combined with low retention is worse than moderate CTR with good retention.
              </li>
              <li>
                <strong className="text-text-main">Too many elements.</strong>{' '}
                A thumbnail with 3 faces, 2 text blocks, a logo, and a background image is unreadable
                at small sizes. Choose one focal point — one face or one key visual — and build
                everything else around it.
              </li>
              <li>
                <strong className="text-text-main">Low resolution or blurry thumbnails.</strong>{' '}
                Uploading a screenshot at 640×360px or saving a JPG at quality below 70 produces
                visible softness and compression artifacts. YouTube&apos;s own encoding further
                reduces quality — start sharp.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Thumbnail Sizes for Other Social Platforms</h2>
            <p>
              If you repurpose video content for other platforms, here are the correct image sizes:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Platform</th>
                    <th className="text-left p-3 border border-border font-semibold">Image type</th>
                    <th className="text-left p-3 border border-border font-semibold">Dimensions</th>
                    <th className="text-left p-3 border border-border font-semibold">Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { platform: 'YouTube', type: 'Thumbnail', size: '1280 × 720 px', ratio: '16:9' },
                    { platform: 'YouTube', type: 'Channel banner', size: '2560 × 1440 px', ratio: '16:9' },
                    { platform: 'Instagram', type: 'Post', size: '1080 × 1080 px', ratio: '1:1' },
                    { platform: 'Instagram', type: 'Story / Reel', size: '1080 × 1920 px', ratio: '9:16' },
                    { platform: 'Twitter / X', type: 'Header', size: '1500 × 500 px', ratio: '3:1' },
                    { platform: 'LinkedIn', type: 'Banner', size: '1584 × 396 px', ratio: '4:1' },
                    { platform: 'Facebook', type: 'Cover', size: '851 × 315 px', ratio: '~2.7:1' },
                    { platform: 'TikTok', type: 'Cover', size: '1080 × 1920 px', ratio: '9:16' },
                  ].map(({ platform, type, size, ratio }, i) => (
                    <tr key={`${platform}-${type}`} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border font-medium">{platform}</td>
                      <td className="p-3 border border-border">{type}</td>
                      <td className="p-3 border border-border font-mono text-xs">{size}</td>
                      <td className="p-3 border border-border">{ratio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How to Create a YouTube Thumbnail</h2>
            <p>
              The fastest way to create a thumbnail at exactly 1280×720px is to use a browser-based
              tool — no download or account required.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-text-muted mt-3">
              <li>
                <Link href="/youtube-thumbnail-maker" className="text-primary hover:underline font-medium">
                  Open the YouTube Thumbnail Maker
                </Link>{' '}
                — pre-set to 1280×720px
              </li>
              <li>Upload your photo or choose a background color</li>
              <li>Add bold text (keep it to 3–5 words)</li>
              <li>Adjust contrast and color to make the thumbnail pop</li>
              <li>Download as JPG — ready to upload to YouTube Studio</li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free, browser-based — no account required
              </p>
              <Link
                href="/youtube-thumbnail-maker"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make YouTube Thumbnail Free →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the ideal YouTube thumbnail size?',
                  a: 'The ideal YouTube thumbnail size is 1280×720 pixels with a 16:9 aspect ratio. This is the recommended size by YouTube and displays correctly on all devices. The minimum width is 640 pixels.',
                },
                {
                  q: 'What file size limit does YouTube have for thumbnails?',
                  a: 'YouTube thumbnails must be under 2MB. JPG, PNG, GIF, and BMP are accepted. JPG at quality 85 is recommended — a 1280×720px JPG is typically 150–400KB, well under the limit.',
                },
                {
                  q: 'Does thumbnail quality affect YouTube rankings?',
                  a: 'Yes, indirectly. Thumbnail quality affects click-through rate (CTR), which is a direct ranking factor for the YouTube algorithm. A higher CTR signals relevance and increases recommendation frequency. A well-designed thumbnail can increase CTR by 2–3×.',
                },
                {
                  q: 'What text size should I use on a YouTube thumbnail?',
                  a: 'Use text at least 80px tall at 1280×720px resolution. Thumbnails appear as small as 120×67px in mobile search — only very large, high-contrast text remains readable. Use 3–5 words maximum.',
                },
                {
                  q: 'Can I use a custom thumbnail without monetization?',
                  a: 'Yes. Custom thumbnails require only phone verification of your YouTube channel, not monetization. Go to YouTube Studio → Settings → Channel → Feature eligibility to verify.',
                },
                {
                  q: 'What aspect ratio do YouTube thumbnails use?',
                  a: '16:9 is required. If you upload a thumbnail with a different ratio, YouTube will crop or letterbox it, potentially cutting off important elements in your design.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link href="/youtube-thumbnail-maker" className="text-primary hover:underline">
                  YouTube Thumbnail Maker
                </Link>{' '}
                — 1280×720px, instant download
              </li>
              <li>
                <Link href="/youtube-banner-maker" className="text-primary hover:underline">
                  YouTube Banner Maker
                </Link>{' '}
                — 2560×1440px channel art
              </li>
              <li>
                <Link href="/instagram-post-maker" className="text-primary hover:underline">
                  Instagram Post Maker
                </Link>{' '}
                — 1080×1080px square posts
              </li>
              <li>
                <Link href="/twitter-header-maker" className="text-primary hover:underline">
                  Twitter Header Maker
                </Link>{' '}
                — 1500×500px profile banner
              </li>
              <li>
                <Link href="/gaming-thumbnail-maker" className="text-primary hover:underline">
                  Gaming Thumbnail Maker
                </Link>{' '}
                — templates for gaming content
              </li>
            </ul>
          </section>

        </div>
      </article>
    </main>
  )
}
