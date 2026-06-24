import type { Metadata } from "next";
import AuthorBox from "@/components/blog/AuthorBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Make a YouTube Banner — Size, Design & Free Maker (2026)",
  description:
    "YouTube banner size is 2560×1440px with a 1546×423px safe zone. Learn how to design channel art that looks great on all devices. Free online banner maker included.",
  alternates: {
    canonical: "https://click-thumb.com/blog/how-to-make-youtube-banner/",
  },
};

export default function HowToMakeYouTubeBannerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
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
        <span className="text-text-main">How to Make a YouTube Banner</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">
              Guide
            </span>
            <span>·</span>
            <time dateTime="2026-06-30">June 30, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Make a YouTube Banner — Size, Design & Free Maker (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your YouTube banner (channel art) is the first thing new visitors
            see when they land on your channel page. A professional banner
            signals that you are a serious creator and gives new viewers a
            reason to subscribe. This guide covers the exact size specs, the
            safe zone rules, and how to design a banner that looks great on
            every device — from mobile to 4K TV.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              YouTube Banner — Official Size Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Total canvas size", value: "2560 × 1440 px" },
                { label: "Safe zone (all devices)", value: "1546 × 423 px" },
                { label: "Mobile display", value: "1546 × 423 px" },
                { label: "Desktop display", value: "2560 × 423 px" },
                { label: "TV display", value: "2560 × 1440 px" },
                { label: "Max file size", value: "6 MB" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-border rounded-lg p-3"
                >
                  <p className="text-text-muted text-xs mb-1">{label}</p>
                  <p className="font-semibold text-text-main text-sm">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-muted">
              The safe zone (1546×423px, centered) is the only area guaranteed
              to be visible on every device — mobile, desktop, tablet, and TV.
              Keep all important text and logos inside this zone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Understanding the YouTube Banner Safe Zone
            </h2>
            <p>
              YouTube displays your banner differently depending on the device.
              On a mobile phone, only the central 1546×423px strip is shown. On
              desktop, a wider crop is displayed. On a TV, the entire
              2560×1440px canvas is visible.
            </p>
            <p className="mt-3">This means you need to design in two layers:</p>
            <ul className="list-disc pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Critical content (safe zone only):
                </strong>{" "}
                Channel name, tagline, upload schedule, social media icons.
                These elements must be inside the 1546×423px center zone —
                anything outside may be cropped on mobile.
              </li>
              <li>
                <strong className="text-text-main">
                  Decorative background (full 2560×1440px canvas):
                </strong>{" "}
                Background color, texture, pattern, extended artwork. This fills
                the edges visible on desktop and TV.
              </li>
            </ul>
            <p className="mt-4">
              Most creators make the mistake of placing their channel name near
              the edges of the banner. On mobile, viewers only see the center
              strip — and the channel name disappears. Always test your banner
              by previewing it in YouTube Studio before publishing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Step 1 — Choose Your Banner Style
            </h2>
            <p>
              Your banner style should reflect your content type. Viewers make
              fast judgments — a gaming channel banner should look immediately
              different from a cooking channel or a tech review channel.
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  style: "Bold text + solid color background",
                  best: "Tech, business, education, commentary",
                  example:
                    "Channel name large in center, tagline below, single strong color",
                },
                {
                  style: "Character / face art",
                  best: "Gaming, animation, entertainment",
                  example:
                    "Avatar or character illustration centered, name overlay",
                },
                {
                  style: "Photography background",
                  best: "Travel, lifestyle, cooking, vlogging",
                  example:
                    "Landscape or lifestyle photo, dark overlay, name on top",
                },
                {
                  style: "Gradient + geometric shapes",
                  best: "Music, art, design, ASMR",
                  example:
                    "Smooth gradient background, minimal text, clean aesthetic",
                },
                {
                  style: "Logo + brand color",
                  best: "Business, corporate, brand channels",
                  example:
                    "Company logo centered, brand colors consistent with other assets",
                },
              ].map(({ style, best, example }) => (
                <div
                  key={style}
                  className="border border-border rounded-xl p-4"
                >
                  <p className="font-semibold text-text-main text-sm mb-1">
                    {style}
                  </p>
                  <p className="text-xs text-primary font-medium mb-1">
                    Best for: {best}
                  </p>
                  <p className="text-text-muted text-sm">{example}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Step 2 — Design the Banner (What to Include)
            </h2>
            <p>
              A YouTube banner does not need to be complex. The most effective
              banners are clean and readable at a glance. Here is what to
              include and what to avoid:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">
                      Include
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Avoid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      include: "Channel name (large, bold font)",
                      avoid: "More than 2 fonts",
                    },
                    {
                      include: "Tagline or niche description (1 line)",
                      avoid: "Small text under 30px",
                    },
                    {
                      include:
                        "Upload schedule (e.g., 'New videos every Tuesday')",
                      avoid: "Too many social icons cluttering the design",
                    },
                    {
                      include: "Brand colors consistent with channel art",
                      avoid: "Low-contrast text on busy backgrounds",
                    },
                    {
                      include: "Social media handle or website URL",
                      avoid: "Important content outside the safe zone",
                    },
                  ].map(({ include, avoid }, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface/50" : ""}>
                      <td className="p-3 border border-border text-green-700 dark:text-green-400">
                        ✓ {include}
                      </td>
                      <td className="p-3 border border-border text-red-600 dark:text-red-400">
                        ✗ {avoid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Step 3 — Font and Color Choices
            </h2>
            <p>
              YouTube banner text must be readable in the safe zone preview —
              which is only 423px tall on mobile. Large, bold fonts are the safe
              choice.
            </p>
            <div className="mt-4 space-y-4">
              {[
                {
                  rule: "Use a bold or heavy weight font",
                  detail:
                    "Thin fonts disappear on busy backgrounds. Use Bold or Black weight variants. Good choices: Montserrat Bold, Bebas Neue, Oswald, Roboto Black. Avoid light or serif fonts for the channel name.",
                },
                {
                  rule: "Minimum 60px for channel name in the safe zone",
                  detail:
                    "At 1546px width, a 60px channel name is clear and readable. Smaller text becomes unreadable on mobile. Use 40–50px for taglines and secondary text.",
                },
                {
                  rule: "High contrast between text and background",
                  detail:
                    "White text on dark backgrounds, black text on light backgrounds. If using a photo background, add a semi-transparent dark overlay (40–60% opacity) behind text to guarantee readability.",
                },
                {
                  rule: "Stick to 2–3 colors maximum",
                  detail:
                    "A channel color palette creates recognizable branding. Pick one primary brand color, one accent, and white or black for text. Consistency across your banner, thumbnails, and profile picture builds a professional look.",
                },
              ].map(({ rule, detail }) => (
                <div key={rule} className="border border-border rounded-xl p-5">
                  <h3 className="font-bold text-text-main mb-2">{rule}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Make a YouTube Banner Free Online
            </h2>
            <p>
              The fastest way to create a YouTube banner at exactly 2560×1440px
              without installing Photoshop or Canva:
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-3 text-text-muted">
              <li>
                <Link
                  href="/youtube-banner-maker/"
                  className="text-primary hover:underline font-medium"
                >
                  Open the YouTube Banner Maker
                </Link>{" "}
                — pre-set to 2560×1440px with the safe zone guide visible
              </li>
              <li>
                Choose a background — solid color, gradient, or upload a photo
              </li>
              <li>
                Add your channel name using a bold font — keep it inside the
                safe zone markers
              </li>
              <li>Add tagline and upload schedule below the channel name</li>
              <li>Download as PNG and upload to YouTube Studio</li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free, no account required. Exact 2560×1440px canvas with safe
                zone guide.
              </p>
              <Link
                href="/youtube-banner-maker/"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make YouTube Banner Free →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Upload a Banner to YouTube
            </h2>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Go to <strong className="text-text-main">YouTube Studio</strong>{" "}
                and click{" "}
                <strong className="text-text-main">Customization</strong> in the
                left menu
              </li>
              <li>
                Select the <strong className="text-text-main">Branding</strong>{" "}
                tab
              </li>
              <li>
                Under <strong className="text-text-main">Banner image</strong>,
                click <strong className="text-text-main">Upload</strong>
              </li>
              <li>Select your 2560×1440px PNG file (must be under 6 MB)</li>
              <li>
                YouTube shows a preview across TV, desktop, and mobile — adjust
                if anything critical is outside the safe zone
              </li>
              <li>
                Click <strong className="text-text-main">Done</strong> then{" "}
                <strong className="text-text-main">Publish</strong>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              YouTube Banner Ideas by Channel Type
            </h2>
            <div className="space-y-3">
              {[
                {
                  type: "Gaming channel",
                  idea: "Dark background + game screenshot faded in + channel name in bold white + 'Live every Friday'",
                },
                {
                  type: "Vlog / lifestyle",
                  idea: "Bright travel or lifestyle photo + warm overlay + name in script font + social handles",
                },
                {
                  type: "Tech reviews",
                  idea: "Clean dark gradient + tech product imagery + channel name in sans-serif + 'Reviews every Tuesday'",
                },
                {
                  type: "Cooking / food",
                  idea: "Kitchen or food flat lay + warm tones + brand logo + upload schedule",
                },
                {
                  type: "Music",
                  idea: "Abstract gradient or waveform visual + artist name large + latest release info",
                },
                {
                  type: "Education / tutorials",
                  idea: "Clean white or navy background + bold channel name + tagline ('Learn X every week') + minimal icons",
                },
                {
                  type: "Fitness",
                  idea: "High energy photo (gym, workout) + bold name + motivational tagline + upload days",
                },
                {
                  type: "Business / finance",
                  idea: "Professional clean design + logo + niche tagline + subtle brand color accent",
                },
              ].map(({ type, idea }) => (
                <div key={type} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-text-main text-sm mb-1">
                    {type}
                  </p>
                  <p className="text-text-muted text-sm">{idea}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Common YouTube Banner Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Placing the channel name near the edges.
                </strong>{" "}
                On mobile, only the 1546×423px center strip is visible. Anything
                outside is cropped. Always keep critical content inside the safe
                zone.
              </li>
              <li>
                <strong className="text-text-main">
                  Using a 1280×720px image.
                </strong>{" "}
                YouTube scales your banner to 2560×1440px, so an undersized
                image becomes blurry. Always start with the full 2560×1440px
                canvas.
              </li>
              <li>
                <strong className="text-text-main">
                  Too much text on the banner.
                </strong>{" "}
                The banner is not a blog post. Channel name, tagline, and upload
                schedule is enough. Paragraphs of text are never readable at
                banner size.
              </li>
              <li>
                <strong className="text-text-main">
                  Not matching the thumbnail style.
                </strong>{" "}
                Your banner, thumbnails, and profile picture should share the
                same color palette and visual style. Consistency makes your
                channel look professional and helps viewers recognize your
                content.
              </li>
              <li>
                <strong className="text-text-main">
                  Using a low-resolution background image.
                </strong>{" "}
                On a TV, the banner fills a 2560×1440px screen. A 500px
                background image will look pixelated. Use high-resolution photos
                or create a vector/flat-color design that scales cleanly.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link
                  href="/youtube-banner-maker/"
                  className="text-primary hover:underline"
                >
                  YouTube Banner Maker
                </Link>{" "}
                — free, 2560×1440px, safe zone guide
              </li>
              <li>
                <Link
                  href="/youtube-thumbnail-maker/"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Maker
                </Link>{" "}
                — 1280×720px thumbnails to match your banner
              </li>
              <li>
                <Link
                  href="/gaming-thumbnail-maker/"
                  className="text-primary hover:underline"
                >
                  Gaming Thumbnail Maker
                </Link>{" "}
                — for gaming channels
              </li>
              <li>
                <Link
                  href="/twitch-banner-maker/"
                  className="text-primary hover:underline"
                >
                  Twitch Banner Maker
                </Link>{" "}
                — if you also stream on Twitch
              </li>
              <li>
                <Link
                  href="/og-image-generator/"
                  className="text-primary hover:underline"
                >
                  OG Image Generator
                </Link>{" "}
                — social media preview images for your other platforms
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What size is a YouTube banner?",
                  a: "YouTube banner (channel art) is 2560×1440 pixels at 16:9 aspect ratio. The file must be under 6 MB. The safe zone — the area visible on all devices including mobile — is 1546×423px centered on the canvas. Keep all critical text and logos within this safe zone.",
                },
                {
                  q: "What is the YouTube banner safe zone?",
                  a: "The safe zone is a 1546×423px rectangle centered within the full 2560×1440px canvas. This is the only area guaranteed to display on every device (mobile phone, tablet, desktop, and TV). On mobile, YouTube crops the banner to this strip. On TV, the full 2560×1440px canvas is displayed.",
                },
                {
                  q: "What file format should I use for a YouTube banner?",
                  a: "PNG is the recommended format for YouTube banners — it supports the full 2560×1440px resolution without compression artifacts. JPEG is also accepted but can show compression artifacts on gradients and flat colors. The file must be under 6 MB.",
                },
                {
                  q: "How do I make a YouTube banner without Photoshop?",
                  a: "Use ClickThumb's free YouTube Banner Maker at click-thumb.com/youtube-banner-maker. It is pre-set to 2560×1440px with the safe zone guide visible, so you can design without worrying about sizing. No software installation or account required.",
                },
                {
                  q: "How often should I update my YouTube banner?",
                  a: "Update your banner when your content focus changes, when you rebrand, when you reach a milestone (100K subscribers), or when you start a new series or upload schedule. Avoid updating too frequently — consistent branding helps viewers recognize your channel across platforms.",
                },
                {
                  q: "Can I use the same banner on YouTube and Twitch?",
                  a: "The dimensions are different — YouTube uses 2560×1440px while Twitch uses a different aspect ratio for its profile banner. However, you can use the same design style, fonts, and colors across both. Design the YouTube version first, then adapt it for Twitch using the Twitch Banner Maker.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-text-main mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <AuthorBox />
      </article>
    </main>
  );
}
