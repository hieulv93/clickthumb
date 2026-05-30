import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function FacebookCoverPhotoSizeGuide() {
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
        <span className="text-text-main">Facebook Cover Photo Size Guide</span>
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
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Facebook Cover Photo Size Guide 2026 — Exact Dimensions &amp; Safe
            Zones
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Facebook cover photos display differently on desktop and mobile —
            and the profile picture blocks part of the lower-left corner. Design
            without understanding these constraints and your text lands behind a
            circle avatar or disappears entirely on phone screens. This guide
            gives you the exact dimensions, the mobile crop zone, the profile
            picture overlap area, and the design rules that make a cover photo
            look right everywhere.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick Specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Facebook Cover Photo — Quick Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Desktop display size", value: "851 × 315 px" },
                { label: "Mobile crop", value: "640 × 360 px" },
                { label: "Recommended upload", value: "851 × 315 px" },
                { label: "Recommended format", value: "PNG (text/logos)" },
                { label: "Target file size", value: "Under 100 KB" },
                { label: "Profile pic overlap", value: "Bottom-left corner" },
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
              The Correct Size: 851×315px for Desktop
            </h2>
            <p>
              Facebook displays cover photos at <strong>851×315 pixels</strong>{" "}
              on desktop browsers. This is the size your cover will appear at
              maximum resolution when a visitor views your profile or Page on a
              laptop or desktop computer. This dimension has been stable for
              several years and remains the standard for 2026.
            </p>
            <p className="mt-3">
              You can upload images larger than 851×315px and Facebook will
              scale them down. Some designers upload at 1702×630px (double
              resolution) for sharper rendering on retina displays. This works
              well — Facebook handles the scaling cleanly. However, uploading at
              exactly 851×315px is sufficient for the vast majority of viewers.
            </p>
            <p className="mt-3">
              The <strong>minimum upload size</strong> Facebook accepts without
              stretching is 400×150px, but any image this small will appear
              visibly soft on modern displays. Always design at 851×315px or
              larger.
            </p>
            <p className="mt-3">
              For file format, <strong>PNG</strong> is recommended when your
              cover contains text, a logo, or bold graphic design — PNG
              preserves sharp edges without the blocky artifacts JPG compression
              introduces. Use <strong>JPG</strong> for purely photographic
              covers without text or overlays. Facebook re-compresses all
              uploads, so starting with a high-quality source file is important.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Mobile Crop: What Gets Cut on Phones
            </h2>
            <p>
              On mobile devices, Facebook does <em>not</em> show the full 851px
              width of your cover photo. Instead, it displays a{" "}
              <strong>640×360px</strong> crop centered on your image. This means
              approximately <strong>106 pixels are cut from each side</strong>{" "}
              of the left and right edges.
            </p>
            <p className="mt-3">
              The height also changes: desktop shows 315px of height, while
              mobile shows 360px — meaning mobile actually shows <em>more</em>{" "}
              vertical content than desktop. This can catch designers off guard.
              Content near the bottom of the image that was below the desktop
              crop may become visible on mobile.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">
                      Context
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Visible size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Side crop
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      context: "Desktop browser",
                      size: "851 × 315 px",
                      crop: "None — full width shown",
                    },
                    {
                      context: "Mobile (iOS / Android)",
                      size: "640 × 360 px",
                      crop: "~106px cut from each side",
                    },
                    {
                      context: "Facebook Pages (desktop)",
                      size: "851 × 315 px",
                      crop: "Same as profile desktop",
                    },
                    {
                      context: "Facebook Groups (desktop)",
                      size: "851 × 315 px",
                      crop: "Same as profile desktop",
                    },
                  ].map(({ context, size, crop }, i) => (
                    <tr
                      key={context}
                      className={i % 2 === 1 ? "bg-surface/50" : ""}
                    >
                      <td className="p-3 border border-border font-medium">
                        {context}
                      </td>
                      <td className="p-3 border border-border font-mono text-xs">
                        {size}
                      </td>
                      <td className="p-3 border border-border text-text-muted text-sm">
                        {crop}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              The practical rule: keep all important content — especially text —
              within the <strong>center 640px</strong> of the 851px-wide cover.
              Anything in the outer 106px on each side may be hidden on mobile.
              This center region is your safe zone for text and logos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Profile Picture Overlap: The Hidden Danger Zone
            </h2>
            <p>
              One of the most common Facebook cover design mistakes is placing
              text or important visuals in the{" "}
              <strong>bottom-left corner</strong> — exactly where the profile
              picture sits.
            </p>
            <p className="mt-3">
              For personal profiles, the profile picture displays as a circle
              approximately <strong>170×170 pixels</strong> in size on desktop,
              positioned in the bottom-left area of the cover. The exact overlap
              depends on the profile type:
            </p>

            <div className="mt-4 space-y-3">
              {[
                {
                  type: "Personal Profile",
                  overlap:
                    "Profile circle (~170px) overlaps bottom-left of cover",
                  note: "Most significant overlap — avoid bottom-left entirely",
                },
                {
                  type: "Facebook Page",
                  overlap:
                    "Page profile picture (~170px) overlaps bottom-left of cover",
                  note: "Similar to personal profile — same avoidance rule applies",
                },
                {
                  type: "Facebook Group",
                  overlap:
                    "Group cover image displayed without profile circle overlap",
                  note: "Full 851×315px area is usable without blocking concern",
                },
              ].map(({ type, overlap, note }) => (
                <div key={type} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-text-main text-sm">{type}</p>
                  <p className="text-text-muted text-sm mt-1">{overlap}</p>
                  <p className="text-xs text-text-muted mt-1 italic">{note}</p>
                </div>
              ))}
            </div>

            <p className="mt-4">
              As a practical rule: treat the bottom-left{" "}
              <strong>200×200px</strong> of your cover as a no-text zone. Place
              nothing important there. The profile picture will obscure it on
              virtually every device and display context.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Safe Zone: Where to Place Your Important Content
            </h2>
            <p>
              Combining the mobile crop and profile picture overlap, the truly
              safe area for text and critical visuals on a Facebook cover is:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-text-muted">
              <li>
                Horizontally: within the <strong>center 640px</strong> of the
                851px width (leaving 106px clear on each side)
              </li>
              <li>
                Vertically: <strong>above the bottom 200px</strong> to avoid
                profile picture overlap
              </li>
              <li>
                Combined: a roughly <strong>640×115px</strong> safe strip in the
                upper-center portion of the cover
              </li>
            </ul>
            <p className="mt-4">
              This sounds restrictive, but most effective Facebook cover designs
              are simple — a clear background color, a centered channel name or
              tagline, and a consistent color palette. The cover is not meant to
              be an information poster. It is a brand impression that tells
              visitors at a glance what your profile or Page is about.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Design Tips for an Effective Facebook Cover
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Keep your message to one line
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  315px is not tall — add mobile crop differences and profile
                  picture overlap and you have very little vertical space for
                  text. One bold tagline or business name, centered in the safe
                  zone, is more effective than trying to pack in multiple lines
                  of information. If you need to communicate more, use the About
                  section of your profile or Page instead.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Use consistent brand colors
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Your Facebook cover is one of the first visual impressions
                  visitors get of your brand. Using the same colors, fonts, and
                  style as your other brand assets — website, YouTube channel,
                  Instagram — creates a cohesive identity that signals
                  professionalism and builds recognition.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Test the mobile view before publishing
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  After uploading your cover, immediately check how it looks on
                  a mobile phone by visiting your profile on your phone.
                  Facebook&apos;s desktop uploader does not always give an
                  accurate mobile preview. If text is cut off or the profile
                  picture overlaps important content, adjust the design and
                  re-upload.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Avoid heavy text over photos
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Facebook compresses uploaded images, which degrades text
                  rendered over photos. Text on a solid or gradient background
                  compresses much better than text on a complex photographic
                  background. If you must overlay text on a photo, add a
                  semi-transparent background behind the text to improve
                  legibility and reduce compression degradation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Coordinate your cover with your profile picture
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Many brands design their cover and profile picture as a
                  unified visual — a background that &quot;connects&quot; to the
                  profile picture, or a color palette that makes both images
                  look like part of the same set. This creates a polished,
                  intentional first impression rather than two unrelated images
                  side by side.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Common Facebook Cover Photo Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Putting your business name in the bottom-left corner.
                </strong>{" "}
                The profile picture sits directly over this area. Your channel
                name or logo will be partially or fully obscured on most device
                sizes. Center your key content in the upper portion of the safe
                zone.
              </li>
              <li>
                <strong className="text-text-main">
                  Designing only for desktop without testing mobile.
                </strong>{" "}
                A cover that looks perfect at 851×315px on desktop can lose
                106px from each side on mobile. Text that reads clearly on
                desktop may be cut in half on a phone. Always verify mobile
                appearance immediately after uploading.
              </li>
              <li>
                <strong className="text-text-main">
                  Uploading a heavily compressed JPG.
                </strong>{" "}
                Facebook re-compresses your upload. If you start with a JPG
                already compressed to reduce file size, the result after
                Facebook&apos;s compression pass is a visibly degraded image
                with blocky artifacts. Start with PNG or a high-quality JPG.
              </li>
              <li>
                <strong className="text-text-main">
                  Using a vertical or square image.
                </strong>{" "}
                A 1:1 or portrait-format image uploaded as a cover will be
                stretched or cropped into the 851×315px aspect ratio. Always
                create your cover at the correct horizontal dimensions from the
                start.
              </li>
              <li>
                <strong className="text-text-main">
                  Ignoring the Groups cover difference.
                </strong>{" "}
                Facebook Group covers do not have profile picture overlap. If
                you use the same template for a Page and a Group, you may be
                leaving empty space in the bottom-left of your Group cover where
                the profile circle was going to be.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create a Facebook Cover Photo for Free
            </h2>
            <p>
              The fastest way to create a cover at exactly the right dimensions
              — with safe zone and profile picture overlap guides visible — is
              to use a browser-based tool. No download, no account, no
              subscription required.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-text-muted mt-3">
              <li>
                <Link
                  href="/facebook-cover-maker"
                  className="text-primary hover:underline font-medium"
                >
                  Open the Facebook Cover Maker
                </Link>{" "}
                — pre-set to 851×315px with mobile safe zone overlay
              </li>
              <li>Choose a background color, gradient, or upload a photo</li>
              <li>
                Add your name, tagline, or logo inside the center safe zone
              </li>
              <li>Avoid the bottom-left corner (profile picture zone)</li>
              <li>
                Preview the mobile crop to confirm nothing important is cut
              </li>
              <li>Download as PNG — upload directly to Facebook</li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free browser-based tool — no account required
              </p>
              <Link
                href="/facebook-cover-maker"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make Facebook Cover Free →
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
                  q: "What is the correct Facebook cover photo size in 2026?",
                  a: "851×315 pixels is the correct Facebook cover photo size for desktop display in 2026. On mobile, the cover is cropped to 640×360 pixels. Upload at 851×315px and keep important content centered within the 640px-wide safe zone.",
                },
                {
                  q: "How does a Facebook cover photo look on mobile?",
                  a: "On mobile, Facebook crops the cover to 640×360 pixels, cutting approximately 106px from each side of the 851px-wide image. Keep all text and important visuals within the center 640px to ensure they remain visible on phones.",
                },
                {
                  q: "Where does the profile picture overlap on a Facebook cover?",
                  a: "The profile picture (approximately 170×170px circle on desktop) overlaps the bottom-left corner of the cover photo on personal profiles and Pages. Avoid placing text or logos in the bottom-left 200×200px area to prevent them from being obscured.",
                },
                {
                  q: "What file size should a Facebook cover photo be?",
                  a: "Keep your cover photo under 100KB where possible to reduce Facebook's re-compression. Upload a clean PNG or high-quality JPG — Facebook compresses all uploads, and starting with a pre-compressed file results in double-compression artifacts.",
                },
                {
                  q: "Should I use PNG or JPG for a Facebook cover photo?",
                  a: "Use PNG for covers containing text, logos, or flat graphic elements — PNG preserves sharp edges. Use JPG for purely photographic covers. Facebook converts all images internally, so start with the highest quality source.",
                },
                {
                  q: "How do I update my Facebook cover photo?",
                  a: 'Go to your Facebook profile or Page, hover over the existing cover photo, and click the camera icon or "Update Cover Photo" button. Choose "Upload Photo," select your 851×315px image, reposition if needed, then click Save Changes.',
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
                  href="/facebook-cover-maker"
                  className="text-primary hover:underline"
                >
                  Facebook Cover Maker
                </Link>{" "}
                — 851×315px with safe zone guides
              </li>
              <li>
                <Link
                  href="/instagram-post-maker"
                  className="text-primary hover:underline"
                >
                  Instagram Post Maker
                </Link>{" "}
                — 1080×1080px square posts
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
                  href="/youtube-banner-maker"
                  className="text-primary hover:underline"
                >
                  YouTube Banner Maker
                </Link>{" "}
                — 2560×1440px channel art
              </li>
              <li>
                <Link
                  href="/blog/twitter-header-size-guide"
                  className="text-primary hover:underline"
                >
                  Twitter Header Size Guide
                </Link>{" "}
                — 1500×500px specs explained
              </li>
            </ul>
          </section>
        </div>
        <AuthorBox />
      </article>
    </main>
  );
}
