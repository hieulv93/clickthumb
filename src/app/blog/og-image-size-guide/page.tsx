import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function OgImageSizeGuide() {
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
        <span className="text-text-main">OG Image Size Guide</span>
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
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            OG Image Size Guide 2026 — Open Graph Dimensions &amp; Best
            Practices
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Every time someone shares your URL on Facebook, LinkedIn, Twitter,
            Slack, or Discord, a preview image appears. That image is your OG
            image — and most developers and site owners either set the wrong
            size, skip it entirely, or use an image that crops awkwardly on half
            the platforms. This guide covers the one universal size that works
            everywhere, how OG images work technically, what to put on them, and
            how to test them before your links go live.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick Specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">OG Image — Quick Specs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Recommended size", value: "1200 × 630 px" },
                { label: "Aspect ratio", value: "1.91:1" },
                { label: "Minimum size", value: "600 × 315 px" },
                { label: "Max file size", value: "8 MB (Facebook)" },
                { label: "Recommended format", value: "PNG or JPG" },
                { label: "Text safe zone", value: "50px from edges" },
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
            <h2 className="text-2xl font-bold mb-4">What Is an OG Image?</h2>
            <p>
              An OG image — short for <strong>Open Graph image</strong> — is the
              preview image that social media platforms display when someone
              shares a link to your website. When you paste a URL into Facebook,
              LinkedIn, Twitter, Slack, or Discord, the platform fetches the
              page and looks for specific HTML meta tags to build a rich link
              preview. The{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                og:image
              </code>{" "}
              meta tag tells it which image to display.
            </p>
            <p className="mt-3">
              The tag looks like this in your HTML{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                &lt;head&gt;
              </code>
              :
            </p>
            <div className="mt-3 bg-surface border border-border rounded-xl p-4 font-mono text-sm text-text-muted overflow-x-auto">
              <p>{`<meta property="og:image" content="https://yoursite.com/og-image.png">`}</p>
              <p className="mt-1">{`<meta property="og:image:width" content="1200">`}</p>
              <p className="mt-1">{`<meta property="og:image:height" content="630">`}</p>
            </div>
            <p className="mt-4">
              Without this tag, platforms attempt to automatically find an image
              on the page — and the result is almost always wrong. They may pick
              a logo, a random thumbnail, or display no image at all. An
              explicitly defined OG image guarantees that every share of your
              URL looks exactly as intended.
            </p>
            <p className="mt-3">
              OG images have become a significant factor in link engagement.
              Studies from multiple social media platforms show that links with
              a strong, relevant image generate substantially higher
              click-through rates than links shared without a preview image. A
              well-designed OG image is the single most impactful visual asset
              for a piece of content that will be shared online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Universal Standard: 1200×630px
            </h2>
            <p>
              The OG image standard was established by Facebook&apos;s Open
              Graph protocol and has since been adopted by virtually every major
              platform. The recommended size is <strong>1200×630 pixels</strong>
              , which gives an aspect ratio of approximately{" "}
              <strong>1.91:1</strong>.
            </p>
            <p className="mt-3">
              This size was chosen because it displays at sharp quality on both
              standard displays and retina / high-DPI screens. The 1200px width
              means that when a platform displays the image at its maximum
              preview width (typically 500–600px), the image is still being
              downscaled rather than upscaled — preserving sharpness and
              quality.
            </p>
            <p className="mt-3">
              The <strong>minimum accepted size</strong> across most platforms
              is 600×315px. Images below this threshold may not display as
              large-format previews — Facebook and LinkedIn will fall back to a
              small thumbnail treatment rather than the full-width card layout.
              Always use 1200×630px.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">
              Platform-by-Platform Display Table
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">
                      Platform
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Display size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      platform: "Facebook",
                      size: "1200 × 630 px",
                      note: "Official recommended size. Displays as full-width card on both desktop and mobile.",
                    },
                    {
                      platform: "Twitter / X",
                      size: "1200 × 628 px (spec)",
                      note: "1200×630 works fine — the 2px difference is not visible. Use summary_large_image card type.",
                    },
                    {
                      platform: "LinkedIn",
                      size: "1200 × 627 px (spec)",
                      note: "1200×630 works fine. LinkedIn compresses images heavily — use PNG for text clarity.",
                    },
                    {
                      platform: "Slack",
                      size: "1200 × 628 px",
                      note: "Slack respects og:image and displays full-width previews in channels.",
                    },
                    {
                      platform: "Discord",
                      size: "400 × 300 px (minimum)",
                      note: "1200×630 works and displays as a large embed. Discord crops to 16:9 ratio.",
                    },
                    {
                      platform: "iMessage / SMS",
                      size: "800 × 600 px (minimum)",
                      note: "1200×630 works. iOS Link Preview uses og:image for rich link cards.",
                    },
                    {
                      platform: "WhatsApp",
                      size: "300 × 200 px (minimum)",
                      note: "1200×630 is displayed as a small square thumbnail — center your design.",
                    },
                  ].map(({ platform, size, note }, i) => (
                    <tr
                      key={platform}
                      className={i % 2 === 1 ? "bg-surface/50" : ""}
                    >
                      <td className="p-3 border border-border font-medium">
                        {platform}
                      </td>
                      <td className="p-3 border border-border font-mono text-xs">
                        {size}
                      </td>
                      <td className="p-3 border border-border text-text-muted text-sm">
                        {note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Text Safe Zone: Keep Content Away from Edges
            </h2>
            <p>
              Different platforms crop and resize OG images slightly
              differently. Facebook may show the full 1200×630px. Twitter may
              crop a few pixels. Mobile devices may letterbox the image in
              different ways. To guarantee that no important content is cut off
              on any platform, keep all text and logos at least{" "}
              <strong>50 pixels from every edge</strong> of the 1200×630px
              canvas.
            </p>
            <p className="mt-3">
              This gives you a safe working area of{" "}
              <strong>1100×530 pixels</strong> in the center of the canvas.
              Position your article title, site name, logo, and any other
              critical content inside this zone. Use the outer 50px border only
              for background color, gradient, or decorative elements that can be
              cropped without losing meaning.
            </p>
            <p className="mt-3">
              A common mistake is placing the site name or logo in a corner —
              the bottom-right is a particularly risky position because some
              platforms display small icons or timestamps in that area of the
              preview. Center your most important elements or position them in
              the upper-left quadrant of the safe zone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              What to Put on an OG Image
            </h2>
            <p>
              An effective OG image communicates three things at a glance: what
              the content is about, that it is worth clicking, and which site it
              comes from. The best OG images are simple — a clear background,
              readable title text, and a logo.
            </p>

            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Article or page title
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  The most important element on an OG image is the title of the
                  content being shared. Use bold, readable text — at least
                  60–80px at 1200×630px resolution. Keep the title to 8–12 words
                  maximum. If the full title is longer, shorten it to the most
                  compelling version. The title in the OG image does not need to
                  match the HTML title tag exactly — optimize it for visual
                  impact at the preview size.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Site name and logo</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Include your site name or logo so viewers know immediately
                  where the link goes. This is especially important for building
                  brand recognition — when people repeatedly see your OG images
                  in feeds, they start recognizing your visual identity and are
                  more likely to click. Position the logo or site name in the
                  same location on every OG image for consistency.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Background: brand color or relevant image
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  The background of your OG image should reinforce your brand
                  identity. A consistent background color — your primary brand
                  color — makes all your shared links visually recognizable in
                  feeds. Alternatively, a relevant photograph behind a
                  semi-transparent overlay creates a more editorial look. Avoid
                  complex, high-detail backgrounds without an overlay — text
                  legibility is always the priority.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Optional: category badge or metadata
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Some publications include a category label (e.g.,
                  &quot;Guide&quot;, &quot;Tutorial&quot;, &quot;News&quot;) or
                  a publication date on their OG images. This adds context that
                  can improve click-through in professional contexts like
                  LinkedIn. However, keep this information small and in a corner
                  — it should not compete with the title for attention.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How the og:image Meta Tag Works
            </h2>
            <p>
              The OG image meta tag is part of the Open Graph protocol — a set
              of HTML meta tags originally developed by Facebook to standardize
              how web content is previewed across social platforms. The core
              tags needed for a functional link preview are:
            </p>
            <div className="mt-3 bg-surface border border-border rounded-xl p-4 font-mono text-sm text-text-muted overflow-x-auto space-y-1">
              <p>{`<!-- Required for all platforms -->`}</p>
              <p>{`<meta property="og:title" content="Your Page Title">`}</p>
              <p>{`<meta property="og:description" content="A brief description of the content.">`}</p>
              <p>{`<meta property="og:image" content="https://yoursite.com/og-image.png">`}</p>
              <p>{`<meta property="og:image:width" content="1200">`}</p>
              <p>{`<meta property="og:image:height" content="630">`}</p>
              <p>{`<meta property="og:url" content="https://yoursite.com/the-page/">`}</p>
              <p className="mt-2">{`<!-- Twitter-specific (also reads og: tags as fallback) -->`}</p>
              <p>{`<meta name="twitter:card" content="summary_large_image">`}</p>
              <p>{`<meta name="twitter:image" content="https://yoursite.com/og-image.png">`}</p>
            </div>
            <p className="mt-4">
              The{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                og:image:width
              </code>{" "}
              and{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                og:image:height
              </code>{" "}
              tags are optional but strongly recommended. Without them, Facebook
              and some other platforms must download the full image to determine
              its dimensions before rendering the preview — which slows down the
              crawl and can result in the image not displaying on first share.
            </p>
            <p className="mt-3">
              Twitter reads{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                og:image
              </code>{" "}
              as a fallback but has its own tag system. The{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                twitter:card
              </code>{" "}
              tag set to{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-sm">
                summary_large_image
              </code>{" "}
              is what causes Twitter to display the large full-width image
              format rather than a small thumbnail in the corner of the card.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Common OG Image Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Using the wrong aspect ratio (1:1 or 16:9).
                </strong>{" "}
                A square (1:1) OG image will be displayed with black bars or
                cropped on platforms expecting the 1.91:1 ratio. A widescreen
                16:9 image (1920×1080px) gets its top and bottom cropped. Always
                design at 1200×630px — the 1.91:1 ratio is the only universally
                correct option.
              </li>
              <li>
                <strong className="text-text-main">
                  Too much text, too small to read.
                </strong>{" "}
                OG images display at 500–600px width in most feed contexts. Text
                smaller than 40px at 1200×630px will be illegible in the
                preview. Focus on one headline and one site name — not
                paragraphs of content.
              </li>
              <li>
                <strong className="text-text-main">
                  No branding — the image looks like stock art.
                </strong>{" "}
                An OG image without a logo or site name provides no brand
                recognition benefit. Every time your link is shared, the preview
                should visually reinforce where it comes from.
              </li>
              <li>
                <strong className="text-text-main">
                  Using a generic site-wide OG image for all pages.
                </strong>{" "}
                A single OG image shared across all pages means every link
                preview looks identical, regardless of the content. Create
                unique OG images per page — or at minimum per content category —
                so shared links give viewers accurate visual context for what
                they are about to click.
              </li>
              <li>
                <strong className="text-text-main">
                  Not testing with social media debugger tools.
                </strong>{" "}
                Social platforms cache OG image data. If you update an og:image
                without clearing the cache, shared links may continue showing
                the old image. Use platform debugger tools (Facebook Sharing
                Debugger, Twitter Card Validator) to force a fresh fetch and
                confirm the new image displays correctly.
              </li>
              <li>
                <strong className="text-text-main">
                  Using a relative URL in the og:image content attribute.
                </strong>{" "}
                The og:image URL must be an absolute URL (starting with
                https://). Relative paths like /og-image.png will not work —
                crawlers fetching your page from external servers cannot resolve
                relative paths. Always use the full URL:
                https://yoursite.com/og-image.png.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Test Your OG Image
            </h2>
            <p>
              After adding or updating your OG image, test it with the official
              debugger tools from each major platform before widely sharing the
              link:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  name: "Facebook Sharing Debugger",
                  url: "developers.facebook.com/tools/debug",
                  note: "Shows exactly how your link will appear on Facebook. Also clears cached data if your og:image has changed.",
                },
                {
                  name: "Twitter Card Validator",
                  url: "cards-dev.twitter.com/validator",
                  note: "Validates Twitter card tags and shows a preview of how the card will display. Requires Twitter login.",
                },
                {
                  name: "LinkedIn Post Inspector",
                  url: "linkedin.com/post-inspector",
                  note: "Shows the LinkedIn link preview and reports any issues with Open Graph tags.",
                },
                {
                  name: "OpenGraph.xyz",
                  url: "opengraph.xyz",
                  note: "Third-party tool that previews your OG image across Facebook, Twitter, LinkedIn, and Discord simultaneously.",
                },
              ].map(({ name, url, note }) => (
                <div key={name} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-text-main text-sm">{name}</p>
                  <p className="text-xs font-mono text-text-muted mt-0.5">
                    {url}
                  </p>
                  <p className="text-sm text-text-muted mt-1">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Create an OG Image for Free
            </h2>
            <p>
              The fastest way to create an OG image at exactly 1200×630px — with
              the correct safe zone guides visible — is to use a browser-based
              tool. No download, no account, no subscription required.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-text-muted mt-3">
              <li>
                <Link
                  href="/og-image-generator"
                  className="text-primary hover:underline font-medium"
                >
                  Open the OG Image Generator
                </Link>{" "}
                — pre-set to 1200×630px
              </li>
              <li>
                Choose a background color matching your brand or upload a
                background photo
              </li>
              <li>Add your page title in bold text (8–12 words maximum)</li>
              <li>Add your site name or logo in a corner</li>
              <li>Keep all text inside the 50px safe margin from every edge</li>
              <li>
                Download as PNG — upload to your server and update the og:image
                URL
              </li>
              <li>
                Test with Facebook Sharing Debugger to confirm it displays
                correctly
              </li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free browser-based tool — no account required
              </p>
              <Link
                href="/og-image-generator"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Create OG Image Free →
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
                  q: "What is the correct OG image size in 2026?",
                  a: "1200×630 pixels is the correct OG image size in 2026. This is the universal standard that displays correctly on Facebook, Twitter, LinkedIn, Slack, Discord, and iMessage. The aspect ratio is 1.91:1. A minimum of 600×315px is accepted, but 1200×630px is strongly recommended for sharp display on retina screens.",
                },
                {
                  q: "What is an OG image?",
                  a: 'An OG image (Open Graph image) is the preview image that appears when a URL is shared on social media. It is defined with <meta property="og:image" content="https://yoursite.com/og-image.png"> in the HTML head. Without it, social platforms try to find an image automatically, often with poor results.',
                },
                {
                  q: "Is the OG image size the same for Twitter and Facebook?",
                  a: "Yes. 1200×630px works correctly on both platforms. Twitter technically specifies 1200×628px but in practice displays 1200×630px images without any visible cropping. Use 1200×630px as your single OG image — it works across all major platforms.",
                },
                {
                  q: "How do I add an OG image to my website?",
                  a: 'Add <meta property="og:image" content="https://yoursite.com/og-image.png"> to your HTML head. Also add the width and height tags: <meta property="og:image:width" content="1200"> and <meta property="og:image:height" content="630">. For Twitter, additionally add <meta name="twitter:card" content="summary_large_image"> and <meta name="twitter:image" content="...">.',
                },
                {
                  q: "How do I test my OG image?",
                  a: "Use Facebook Sharing Debugger (developers.facebook.com/tools/debug), Twitter Card Validator (cards-dev.twitter.com/validator), and LinkedIn Post Inspector (linkedin.com/post-inspector). These tools fetch your URL and show exactly how your link preview will appear — and can clear cached images if you have updated your og:image.",
                },
                {
                  q: "What should I put on an OG image?",
                  a: "Include: the page or article title in large bold text (8–12 words max), your site name or logo for brand recognition, and a clear background — brand color, gradient, or photo with overlay. Keep all text at least 50px from the edges to prevent cropping across platforms.",
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
                  href="/og-image-generator"
                  className="text-primary hover:underline"
                >
                  OG Image Generator
                </Link>{" "}
                — 1200×630px with safe zone guides
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
            </ul>
          </section>
        </div>
        <AuthorBox />
      </article>
    </main>
  );
}
