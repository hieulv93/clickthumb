import Link from "next/link";

export default function YouTubeBannerSizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav
        className="text-xs text-text-muted mb-8 flex items-center gap-1.5"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span>/</span>
        <span className="text-text-main">YouTube Banner Size Guide</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">
              Guide
            </span>
            <span>·</span>
            <time dateTime="2026-05-30">May 30, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            YouTube Banner Size Guide 2026 — Dimensions, Safe Zones &amp; Design
            Tips
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your YouTube banner is the first thing visitors see when they land
            on your channel page. Get the dimensions wrong and your logo
            disappears on mobile, or your text gets cut off on desktop. This
            guide gives you the exact size, the safe zone you must design
            inside, and the rules that make a banner look great on every device
            — from a 65-inch TV to a phone screen.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick Specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              YouTube Banner — Quick Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Total canvas size", value: "2560 × 1440 px" },
                { label: "Safe zone (all devices)", value: "1546 × 423 px" },
                { label: "Desktop visible area", value: "2560 × 423 px" },
                { label: "Max file size", value: "6 MB" },
                { label: "Accepted formats", value: "JPG, PNG" },
                { label: "Minimum upload size", value: "2048 × 1152 px" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-border rounded-lg p-3"
                >
                  <p className="text-text-muted text-xs mb-1">{label}</p>
                  <p className="font-semibold text-text-main">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The One Correct Size: 2560×1440px
            </h2>
            <p>
              YouTube channel art has one recommended upload size:{" "}
              <strong>2560×1440 pixels</strong>. This is a 16:9 aspect ratio
              canvas — the same ratio as full HD and 4K video. The maximum file
              size allowed is <strong>6MB</strong>, and YouTube accepts JPG and
              PNG formats only.
            </p>
            <p className="mt-3">
              Why is the canvas so large when most people watch on a 1080p
              monitor? Because YouTube also displays channel banners on
              televisions through YouTube TV and smart TV apps, where the full
              2560×1440px resolution is visible. A banner that is too small will
              be stretched and appear blurry on these large screens. Always
              design at the full 2560×1440px size.
            </p>
            <p className="mt-3">
              YouTube&apos;s minimum accepted upload size is 2048×1152px. While
              images this size will upload without error, they may appear
              slightly soft on high-DPI monitors and TV screens. There is no
              reason to use less than the full 2560×1440px canvas — design at
              maximum resolution and let YouTube downscale for smaller contexts.
            </p>
            <p className="mt-3">
              For file format, choose <strong>PNG</strong> when your banner
              contains text, a logo, or flat graphic elements where sharp edges
              matter. Choose <strong>JPG</strong> when your banner is primarily
              a photograph with no text overlaid. PNG files are larger but
              preserve edge sharpness that JPG compression can blur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Safe Zone: The Only Area That Is Always Visible
            </h2>
            <p>
              This is the most important thing to understand about YouTube
              banner design:{" "}
              <strong>
                the full 2560×1440px canvas is never fully visible on all
                devices at once
              </strong>
              . Each device type shows a different crop of the banner. The only
              area that is guaranteed to be visible on every device — TV,
              desktop, tablet, and mobile — is the center{" "}
              <strong>1546×423 pixels</strong>.
            </p>
            <p className="mt-3">
              Everything outside this center zone will be cropped on at least
              one device. If you place your channel name, logo, or social media
              handles outside the 1546×423px safe zone, mobile viewers will
              never see them. Many creators make this mistake and wonder why
              their banner looks professional on their desktop but incomplete on
              a phone.
            </p>
            <p className="mt-3">
              Think of the safe zone as a horizontal strip running across the
              center of your canvas. Design all critical branding elements
              inside this strip. Use the space outside the safe zone only for
              decorative background elements — colors, patterns, or background
              imagery that looks fine when cropped.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">
              Device-by-Device Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">
                      Device
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Visible area
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      device: "TV / Smart TV",
                      area: "2560 × 1440 px",
                      note: "Full canvas visible — design here must look clean too",
                    },
                    {
                      device: "Desktop browser",
                      area: "2560 × 423 px",
                      note: "Full width, but only the center strip height",
                    },
                    {
                      device: "Tablet",
                      area: "1855 × 423 px",
                      note: "Sides trimmed slightly vs desktop",
                    },
                    {
                      device: "Mobile",
                      area: "1546 × 423 px",
                      note: "Smallest crop — this is your safe zone",
                    },
                  ].map(({ device, area, note }, i) => (
                    <tr
                      key={device}
                      className={i % 2 === 1 ? "bg-surface/50" : ""}
                    >
                      <td className="p-3 border border-border font-medium">
                        {device}
                      </td>
                      <td className="p-3 border border-border font-mono text-xs">
                        {area}
                      </td>
                      <td className="p-3 border border-border text-text-muted">
                        {note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              The safe zone (1546×423px) is centered horizontally and vertically
              within the full 2560×1440px canvas. Center your design around the
              coordinates X: 507–2053px, Y: 508–931px.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              What to Put Inside (and Outside) the Safe Zone
            </h2>
            <p>
              The safe zone rule is simple: anything you need every viewer to
              see must be inside the center 1546×423px area. This includes your
              channel name, tagline, upload schedule, social handles, and any
              logo you want consistently visible.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="border border-green-700/40 bg-green-950/20 rounded-xl p-4">
                <p className="font-semibold text-green-400 mb-2 text-sm">
                  Inside safe zone
                </p>
                <ul className="text-sm text-text-muted space-y-1 list-disc pl-4">
                  <li>Channel name / wordmark</li>
                  <li>Tagline or value proposition</li>
                  <li>
                    Upload schedule (e.g., &quot;New videos Tues &amp;
                    Fri&quot;)
                  </li>
                  <li>Social media handles</li>
                  <li>Primary logo mark</li>
                </ul>
              </div>
              <div className="border border-red-700/40 bg-red-950/20 rounded-xl p-4">
                <p className="font-semibold text-red-400 mb-2 text-sm">
                  Outside safe zone (decorative only)
                </p>
                <ul className="text-sm text-text-muted space-y-1 list-disc pl-4">
                  <li>Background gradient or color fill</li>
                  <li>Abstract patterns or texture</li>
                  <li>Background photography</li>
                  <li>Decorative shapes or lines</li>
                  <li>Secondary visual elements</li>
                </ul>
              </div>
            </div>

            <p className="mt-4">
              The outer area of the banner — particularly the top and bottom
              halves visible only on TV — should be treated as a background
              fill. Use a color or gradient that complements your branding and
              looks intentional when displayed fully on a TV screen, but does
              not contain any content that would be missed if cropped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Design Tips for a Banner That Works Everywhere
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Keep branding centered and compact
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Your channel name and logo should sit comfortably within the
                  1546×423px safe zone with breathing room on all sides. A
                  common mistake is stretching branding to fill the safe zone
                  edge-to-edge — this looks cramped and gets further cropped on
                  very small screens. Leave at least 50–80px of padding inside
                  the safe zone on each side.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Use a simple, consistent background
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  The background of your banner will be cropped differently on
                  every device. A solid color or a clean gradient adapts
                  perfectly to all crop sizes. Complex background images — city
                  skylines, collages, full character art — can look great on TV
                  but appear disjointed and random when cropped on mobile. If
                  you use a photo background, make sure the subject of the photo
                  is centered and looks acceptable at all crop widths.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Limit text to channel name and one tagline
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  The banner is displayed at a fixed height of 423px on non-TV
                  devices. This is not a lot of vertical space. Two lines of
                  text — channel name and a short tagline — is the maximum that
                  reads cleanly. Use a bold, simple sans-serif font. Avoid
                  script fonts and decorative typefaces at small sizes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Test your design at multiple crop widths
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Before uploading, preview your banner at the four device
                  widths: 2560px (TV), 2560px cropped to 423px height (desktop),
                  1855px (tablet), and 1546px (mobile). YouTube Studio shows a
                  preview of all device layouts before you confirm your upload.
                  Use this preview to verify that your safe zone content is
                  fully visible on mobile.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Match your banner to your thumbnail style
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Channels with strong brand recognition use the same color
                  palette, font, and visual style across their banner and
                  thumbnails. A viewer who lands on your channel page should
                  immediately recognize the visual language from your
                  thumbnails. This consistency builds brand recognition and
                  increases the likelihood of returning viewers clicking future
                  videos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Common YouTube Banner Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Using the wrong canvas size (900×180 or 1280×720).
                </strong>{" "}
                These sizes were used by older YouTube tools and templates that
                are now outdated. YouTube&apos;s current banner system requires
                2560×1440px. Uploading a 1280×720px banner will result in
                visible blurriness on desktop and it will not display at all on
                TV screens at full quality.
              </li>
              <li>
                <strong className="text-text-main">
                  Putting text near the left or right edges.
                </strong>{" "}
                Text placed in the outer 500px on each side of the canvas will
                be cropped on desktop and tablet. Text placed outside the center
                1546px will be invisible on mobile. The most common banner
                mistake is a channel name that reads fine on the creator&apos;s
                wide monitor but is completely absent on a mobile viewer&apos;s
                phone.
              </li>
              <li>
                <strong className="text-text-main">
                  Including a detailed illustration that depends on the full
                  canvas.
                </strong>{" "}
                Complex art that only makes sense at the full 2560×1440px
                dimensions will be confusing and visually broken when cropped to
                the narrow desktop strip. Banners are horizontal strips, not
                poster art. Design accordingly.
              </li>
              <li>
                <strong className="text-text-main">
                  Uploading a file over 6MB.
                </strong>{" "}
                YouTube will reject banner files larger than 6MB. Large PNG
                files with complex gradients and transparency can exceed this
                limit. Optimize your PNG using a tool like Squoosh, or switch to
                JPG for photographic backgrounds.
              </li>
              <li>
                <strong className="text-text-main">
                  Not updating the banner after a rebrand.
                </strong>{" "}
                A channel banner that does not match current thumbnails, color
                schemes, or channel focus creates a disjointed first impression.
                Update your banner whenever you update your visual identity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create a YouTube Banner for Free
            </h2>
            <p>
              The fastest way to create a YouTube banner at exactly 2560×1440px
              — with safe zone guides built in — is to use a browser-based
              banner maker. No software download, no account, no subscription.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-text-muted mt-3">
              <li>
                <Link
                  href="/youtube-banner-maker"
                  className="text-primary hover:underline font-medium"
                >
                  Open the YouTube Banner Maker
                </Link>{" "}
                — pre-set to 2560×1440px with safe zone overlay visible
              </li>
              <li>Choose a background color or upload a background photo</li>
              <li>
                Add your channel name and tagline inside the center safe zone
              </li>
              <li>Upload your logo or icon if you have one</li>
              <li>
                Preview the mobile and desktop crops to confirm safe zone
                placement
              </li>
              <li>
                Download as PNG or JPG — ready to upload to YouTube Studio
              </li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free browser-based tool — no account required
              </p>
              <Link
                href="/youtube-banner-maker"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make YouTube Banner Free →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What is the correct YouTube banner size in 2026?",
                  a: "The correct YouTube banner size is 2560×1440 pixels. This is the full canvas size that displays at maximum quality on TV screens. The maximum file size is 6MB and accepted formats are JPG and PNG.",
                },
                {
                  q: "What is the YouTube banner safe zone?",
                  a: "The safe zone is the center 1546×423 pixels of the 2560×1440px canvas. This is the only area that is guaranteed to be visible on every device — TV, desktop, tablet, and mobile. Keep all important content (text, logo, branding) inside this zone.",
                },
                {
                  q: "What file format should a YouTube banner be?",
                  a: "Use PNG for banners with text, logos, or sharp graphic edges — it preserves crispness. Use JPG for photographic backgrounds. Both formats are accepted, with a 6MB maximum file size.",
                },
                {
                  q: "How does the YouTube banner look on mobile?",
                  a: "On mobile, YouTube crops the banner to the center 1546×423 pixels. The left and right portions of the canvas are hidden. Any text or branding placed outside this center strip will not be visible to mobile users.",
                },
                {
                  q: "Can I use a 1280×720 image for a YouTube banner?",
                  a: "No. YouTube requires at minimum 2048×1152px and recommends 2560×1440px. A 1280×720px image will appear blurry on desktop and will not fill TV screens correctly. Always design at the full 2560×1440px canvas.",
                },
                {
                  q: "How do I update my YouTube channel banner?",
                  a: "Go to youtube.com → your profile icon → Your channel → Customize channel. Click the pencil icon on the banner area, then Change photo. Upload your new banner image (2560×1440px, max 6MB) and click Done.",
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
                <Link
                  href="/youtube-banner-maker"
                  className="text-primary hover:underline"
                >
                  YouTube Banner Maker
                </Link>{" "}
                — 2560×1440px with safe zone guides
              </li>
              <li>
                <Link
                  href="/youtube-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Maker
                </Link>{" "}
                — 1280×720px instant download
              </li>
              <li>
                <Link
                  href="/twitter-header-maker"
                  className="text-primary hover:underline"
                >
                  Twitter Header Maker
                </Link>{" "}
                — 1500×500px profile banner
              </li>
              <li>
                <Link
                  href="/linkedin-banner-maker"
                  className="text-primary hover:underline"
                >
                  LinkedIn Banner Maker
                </Link>{" "}
                — 1584×396px professional banner
              </li>
              <li>
                <Link
                  href="/blog/youtube-thumbnail-size-guide"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Size Guide
                </Link>{" "}
                — 1280×720px specs explained
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
