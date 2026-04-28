import Link from 'next/link'

export default function HowToMakeGamingThumbnailPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">How to Make a Gaming Thumbnail</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Make a Gaming Thumbnail That Gets More Clicks
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            A great gaming thumbnail can double or triple your click-through rate. This guide covers
            the exact size specs, design principles, color strategy, and the most common mistakes
            that are quietly killing your CTR — with specific, actionable fixes for each.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          {/* Quick specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Gaming Thumbnail — Quick Specs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Recommended size', value: '1280 × 720 px' },
                { label: 'Aspect ratio', value: '16:9' },
                { label: 'Minimum width', value: '640 px' },
                { label: 'Max file size', value: '2 MB' },
                { label: 'Best format', value: 'JPG at quality 85' },
                { label: 'Text limit', value: '3–5 words max' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-border rounded-lg p-3">
                  <p className="text-text-muted text-xs mb-1">{label}</p>
                  <p className="font-semibold text-text-main">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step 1 — Start With the Right Size</h2>
            <p>
              Every gaming thumbnail for YouTube must be <strong>1280×720 pixels</strong> at a{' '}
              <strong>16:9 aspect ratio</strong>. This is non-negotiable. YouTube displays thumbnails
              at multiple sizes depending on context — from 120×67px in mobile search to 360×202px on
              the homepage — and a 1280×720px source image scales correctly at every size without
              cropping or letterboxing.
            </p>
            <p className="mt-3">
              The file must be under <strong>2MB</strong>. JPG at quality 85 is the optimal output
              format — a 1280×720px gaming thumbnail at quality 85 typically comes in at 200–500KB,
              well under the limit while remaining visually sharp. PNG is acceptable for thumbnails
              with flat colors or transparency, but will produce larger files.
            </p>
            <p className="mt-3">
              Never design at 72 DPI thinking it refers to screen resolution — work directly in
              pixels. Open your design tool and create a new canvas at exactly 1280×720 pixels.
              Everything else flows from this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step 2 — Choose a Layout That Works at Small Sizes</h2>
            <p>
              The single biggest mistake gaming creators make is designing thumbnails that look great
              at full size but become visual noise at 120×67px — the size YouTube shows thumbnails in
              mobile search results. Every element you place must earn its space by remaining readable
              and impactful when the thumbnail is scaled to 25% of its original size.
            </p>
            <p className="mt-3">
              Three layouts that consistently work for gaming thumbnails:
            </p>
            <div className="mt-4 space-y-4">
              {[
                {
                  name: 'Face + Game screenshot + Text',
                  description:
                    'Place your reaction face on the left third, a dramatic in-game screenshot on the right, and bold text across the top or bottom. This is the most common high-CTR layout for gaming YouTube. The face captures attention, the screenshot signals the game, and the text provides context.',
                },
                {
                  name: 'Full-width game scene + Overlaid text',
                  description:
                    'Use a dramatic in-game screenshot as the full background. Add a semi-transparent dark band at the top or bottom, then place bold text over it. Works well for cinematic games (RPGs, open-world) where the environment itself is visually striking.',
                },
                {
                  name: 'Split frame — before/after or versus',
                  description:
                    'Divide the thumbnail into two halves — left and right — to show a contrast: before/after, two characters facing off, or two outcomes. The split itself creates visual tension that drives curiosity. Works especially well for challenge and comparison videos.',
                },
              ].map(({ name, description }) => (
                <div key={name} className="border border-border rounded-xl p-5">
                  <h3 className="font-bold text-text-main mb-2">{name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step 3 — Face Reactions That Drive Clicks</h2>
            <p>
              Thumbnails featuring a human face consistently outperform no-face thumbnails by
              15–30% CTR, according to research on YouTube recommendation data. The human brain
              processes faces faster than any other visual input — it is hardwired to check faces
              before reading text or interpreting scenes.
            </p>
            <p className="mt-3">
              For gaming thumbnails specifically, the face should:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted mt-3">
              <li>
                <strong className="text-text-main">Show a strong emotion</strong> — surprise, shock,
                excitement, or disbelief outperform neutral or smiling expressions. Gaming content is
                high-energy; the face should match.
              </li>
              <li>
                <strong className="text-text-main">Occupy at least 35% of the frame</strong> — a
                small face in the corner becomes invisible at 120px wide. The face should dominate
                one side of the thumbnail.
              </li>
              <li>
                <strong className="text-text-main">Be well-lit with clear eyes visible</strong> — dark
                or shadowed faces do not register as faces at small sizes. Bright, front-facing
                lighting is best.
              </li>
              <li>
                <strong className="text-text-main">Look at the camera, not at the game</strong> —
                faces looking at the viewer create stronger eye contact and a more personal
                connection than profiles or three-quarter views.
              </li>
            </ul>
            <p className="mt-4">
              If you prefer not to show your face, use a recognizable game character in a dynamic
              pose instead. Iconic game characters (Minecraft Steve, Among Us crewmates, Fortnite
              skins) register as &quot;faces&quot; in the same way human faces do for gaming audiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step 4 — Text: Bold, Short, High Contrast</h2>
            <p>
              If you include text on your gaming thumbnail — and most high-CTR gaming thumbnails do
              — follow these rules without exception:
            </p>
            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-lg font-bold mb-2">Maximum 3–5 words</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  At 120×67px, only 3–5 large words remain readable. Every additional word forces
                  you to use a smaller font, which means the text disappears entirely at small
                  sizes. The text should spark curiosity or emotion — &quot;I ACTUALLY DID IT&quot;,
                  &quot;IMPOSSIBLE CHALLENGE&quot;, &quot;THEY HACKED ME&quot; — not summarize the
                  video. The title already summarizes. The thumbnail should make the viewer{' '}
                  <em>feel</em> something.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Heavy, condensed font at large size</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Use a bold, heavy font — Impact, Bebas Neue, Anton, or Montserrat Black. At
                  1280×720px, text should be at least 80–120px tall. Thin or decorative fonts become
                  unreadable at small sizes. ALL CAPS text is standard for gaming thumbnails — it
                  reads as urgent and energetic, which matches the genre.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Stroke or drop shadow on every text element</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Never place text directly on a background without a stroke or shadow — it will
                  disappear against certain image areas. A 3–5px black stroke on white or yellow
                  text ensures readability against any background color. A dark drop shadow (0px 0px
                  8px rgba(0,0,0,0.9)) also works well for photographic backgrounds.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Yellow or white text for maximum visibility</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Yellow text with a black stroke is the most visible color combination across all
                  background types — it is the reason it is used on road signs and warning labels.
                  White text with a black stroke is a close second. Red text on dark backgrounds
                  also works for urgency. Avoid green, blue, or purple text — they are harder to
                  read and disappear against common gaming screenshot backgrounds.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step 5 — Color Strategy for Gaming Thumbnails</h2>
            <p>
              Gaming thumbnails compete with dozens of other thumbnails in YouTube search results.
              High-saturation colors with strong contrast make your thumbnail visually &quot;pop&quot;
              — the technical term is visual salience, the likelihood that a viewer&apos;s eye lands
              on your thumbnail before others.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">Color combination</th>
                    <th className="text-left p-3 border border-border font-semibold">Effect</th>
                    <th className="text-left p-3 border border-border font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { combo: 'Black + Yellow', effect: 'Maximum contrast, urgent', best: 'Challenge, competitive, survival games' },
                    { combo: 'Dark blue + Orange', effect: 'Dynamic, energetic', best: 'Action, shooter, multiplayer games' },
                    { combo: 'Black + Red', effect: 'Intense, high-stakes', best: 'Horror, dark, difficult content' },
                    { combo: 'Purple + Cyan', effect: 'Futuristic, tech', best: 'Sci-fi, RPG, strategy games' },
                    { combo: 'White + Bright green', effect: 'Fresh, positive', best: 'Minecraft, survival, building games' },
                  ].map(({ combo, effect, best }, i) => (
                    <tr key={combo} className={i % 2 === 1 ? 'bg-surface/50' : ''}>
                      <td className="p-3 border border-border font-medium">{combo}</td>
                      <td className="p-3 border border-border">{effect}</td>
                      <td className="p-3 border border-border text-text-muted text-xs">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-text-muted text-sm">
              Avoid using more than 3 dominant colors — thumbnails with too many competing colors
              look chaotic at small sizes and do not register as a cohesive visual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Step 6 — Build Consistent Branding</h2>
            <p>
              Once you have a layout, color scheme, and font that performs well, apply it consistently
              across every thumbnail. Consistent branding serves two purposes: (1) returning viewers
              recognize your thumbnail instantly in search results and suggestions, improving
              return-viewer CTR without any extra effort; (2) a cohesive channel aesthetic signals
              professionalism to new viewers considering whether to subscribe.
            </p>
            <p className="mt-3">
              Create a template with your channel&apos;s signature elements — a color palette of 2–3
              colors, a font pairing, and a standard layout grid. Save it as your base template and
              modify only the content layer (screenshot, face, and text) for each new video. This
              reduces thumbnail creation time from 30 minutes to under 5 minutes per video.
            </p>
            <p className="mt-3">
              Many of the largest gaming channels (100M+ subscribers) use the same background
              color, font, and layout structure on every single video. Consistency is a competitive
              advantage — not a creative limitation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Common Gaming Thumbnail Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-4 text-text-muted">
              <li>
                <strong className="text-text-main">Using the auto-generated screenshot.</strong>{' '}
                YouTube auto-selects a frame from your video — usually a mid-sentence blinking shot
                or a loading screen. Custom thumbnails consistently outperform auto-generated ones
                by 2–5× CTR. Always upload a custom thumbnail.
              </li>
              <li>
                <strong className="text-text-main">Text too small to read at 120px wide.</strong>{' '}
                Test your thumbnail by scaling it down to 120×67px. If you cannot read the text, a
                mobile viewer cannot either. Scale up or reduce the word count.
              </li>
              <li>
                <strong className="text-text-main">Too many elements competing for attention.</strong>{' '}
                A thumbnail with 3 faces, 2 text blocks, a logo, and a background screenshot is
                unreadable at small sizes. Pick one focal point and eliminate everything that does
                not support it.
              </li>
              <li>
                <strong className="text-text-main">Important elements near the bottom-right corner.</strong>{' '}
                The bottom-right corner is obscured by the video duration timestamp. Keep all
                critical elements — faces, key text — within the center 80% of the frame.
              </li>
              <li>
                <strong className="text-text-main">Clickbait that does not match the video.</strong>{' '}
                YouTube tracks audience retention. If viewers leave early because the thumbnail
                promised something the video does not deliver, YouTube reduces how often it
                recommends the video. High CTR with low retention is worse than moderate CTR with
                good retention.
              </li>
              <li>
                <strong className="text-text-main">Changing style every video.</strong>{' '}
                Inconsistent thumbnails mean no viewer can recognize your channel at a glance.
                Choose a style and commit to it for at least 20–30 videos before evaluating
                performance data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How to Make a Gaming Thumbnail Online for Free</h2>
            <p>
              The fastest way to create a gaming thumbnail at exactly 1280×720px — with gaming
              templates, bold fonts, and instant download — is to use a browser-based tool with no
              software installation required.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-text-muted mt-3">
              <li>
                <Link href="/gaming-thumbnail-maker" className="text-primary hover:underline font-medium">
                  Open the Gaming Thumbnail Maker
                </Link>{' '}
                — pre-set to 1280×720px with gaming-specific templates
              </li>
              <li>Choose a template that matches your game or content style</li>
              <li>Upload your face photo or game screenshot as the background</li>
              <li>Add bold text (3–5 words, uppercase, high contrast)</li>
              <li>Adjust colors to match your channel branding</li>
              <li>Download as PNG — ready to upload to YouTube Studio</li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free, browser-based — no account required. Exact 1280×720px output.
              </p>
              <Link
                href="/gaming-thumbnail-maker"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make Gaming Thumbnail Free →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Gaming Thumbnail Sizes by Platform</h2>
            <p>
              If you post gaming content across multiple platforms, here are the correct thumbnail
              and cover image sizes for each:
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
                    { platform: 'YouTube', type: 'Video thumbnail', size: '1280 × 720 px', ratio: '16:9' },
                    { platform: 'YouTube', type: 'Channel banner', size: '2560 × 1440 px', ratio: '16:9' },
                    { platform: 'TikTok', type: 'Video cover', size: '1080 × 1920 px', ratio: '9:16' },
                    { platform: 'Instagram', type: 'Post', size: '1080 × 1080 px', ratio: '1:1' },
                    { platform: 'Twitter / X', type: 'Header', size: '1500 × 500 px', ratio: '3:1' },
                    { platform: 'Facebook', type: 'Cover', size: '851 × 315 px', ratio: '~2.7:1' },
                    { platform: 'Twitch', type: 'Panel', size: '320 × 160 px', ratio: '2:1' },
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
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What size should a gaming thumbnail be?',
                  a: '1280×720 pixels at 16:9 aspect ratio. This is YouTube\'s recommended size for all video thumbnails. The file must be under 2MB. JPG at quality 85 is the optimal format for gaming thumbnails with photographic backgrounds.',
                },
                {
                  q: 'What makes a good gaming thumbnail?',
                  a: 'A strong face reaction, bold 3–5 word text with high contrast, a recognizable game element (character, screenshot, logo), and saturated colors that stand out in search results. The most important test: does it communicate clearly at 120×67px?',
                },
                {
                  q: 'What font is best for gaming thumbnails?',
                  a: 'Heavy, condensed sans-serif fonts: Impact, Bebas Neue, Anton, or Montserrat Black. Always use ALL CAPS with a black stroke or drop shadow. Avoid thin, script, or decorative fonts — they are unreadable at small sizes.',
                },
                {
                  q: 'How many words should a gaming thumbnail have?',
                  a: 'Maximum 3–5 words. At the smallest display size (120×67px in mobile search), only large, high-contrast text in 3–5 words remains readable. More words force smaller text that disappears entirely.',
                },
                {
                  q: 'Should I show my face on a gaming thumbnail?',
                  a: 'Yes, if building a personal brand. Face thumbnails achieve 15–30% higher CTR on average. Use a strong emotion (surprise, shock, excitement), ensure the face occupies at least 35% of the frame, and use front-facing lighting.',
                },
                {
                  q: 'How do I make a gaming thumbnail without Photoshop?',
                  a: 'Use ClickThumb\'s free Gaming Thumbnail Maker at click-thumb.com/gaming-thumbnail-maker. Creates exact 1280×720px thumbnails with gaming templates, bold fonts, and instant PNG download — no account or software required.',
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
                <Link href="/gaming-thumbnail-maker" className="text-primary hover:underline">
                  Gaming Thumbnail Maker
                </Link>{' '}
                — 1280×720px, gaming templates, instant download
              </li>
              <li>
                <Link href="/youtube-thumbnail-maker" className="text-primary hover:underline">
                  YouTube Thumbnail Maker
                </Link>{' '}
                — general YouTube thumbnails with face + text layouts
              </li>
              <li>
                <Link href="/minecraft-thumbnail-maker" className="text-primary hover:underline">
                  Minecraft Thumbnail Maker
                </Link>{' '}
                — Minecraft-specific templates and color palettes
              </li>
              <li>
                <Link href="/fortnite-thumbnail-maker" className="text-primary hover:underline">
                  Fortnite Thumbnail Maker
                </Link>{' '}
                — Fortnite character and battle royale templates
              </li>
              <li>
                <Link href="/youtube-banner-maker" className="text-primary hover:underline">
                  YouTube Banner Maker
                </Link>{' '}
                — 2560×1440px channel art for gaming channels
              </li>
            </ul>
          </section>

        </div>
      </article>
    </main>
  )
}
