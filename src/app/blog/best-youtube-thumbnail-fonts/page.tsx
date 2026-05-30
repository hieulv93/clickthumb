import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function BestYouTubeThumbnailFonts() {
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
        <span className="text-text-main">Best YouTube Thumbnail Fonts</span>
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
            Best Fonts for YouTube Thumbnails (2026) — What Actually Works
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Most thumbnail text fails at the moment that matters most — when
            YouTube displays it at 120×67 pixels in a phone search result. At
            that size, elegant serif fonts, thin letterforms, and decorative
            scripts all collapse into an unreadable blur. This guide covers the
            five fonts that actually survive thumbnail scaling, why they work,
            how to apply stroke and shadow for maximum legibility, and the font
            mistakes that signal amateur hour to every viewer.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick Specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Thumbnail Font — Quick Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Minimum text height", value: "80 px at 1280×720" },
                {
                  label: "Recommended weight",
                  value: "Bold or Black (700–900)",
                },
                { label: "Best stroke", value: "3–5px black outline" },
                { label: "Max words on thumbnail", value: "3–5 words" },
                { label: "Case rule", value: "ALL CAPS preferred" },
                { label: "Fonts to avoid", value: "Thin, serif, script" },
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
              Why Font Choice Matters More Than You Think
            </h2>
            <p>
              YouTube thumbnails are displayed at drastically different sizes
              depending on where they appear. On the YouTube homepage, a
              thumbnail might render at 360×202 pixels. In the suggested video
              sidebar, it shrinks to 168×94 pixels. In mobile search results —
              the most competitive and highest-traffic context — thumbnails
              appear at just <strong>120×67 pixels</strong>.
            </p>
            <p className="mt-3">
              At 120×67px, a 1280×720px image has been reduced to roughly 9% of
              its original size. Every pixel of text must still communicate
              clearly at that scale. Only fonts with these specific
              characteristics survive this scaling:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">
                  High stroke weight (bold to black):
                </strong>{" "}
                Thin letterforms simply disappear at small sizes. A font at
                weight 400 or below will not render legibly in thumbnail
                contexts.
              </li>
              <li>
                <strong className="text-text-main">
                  Condensed or normal width:
                </strong>{" "}
                Condensed fonts fit more characters per horizontal inch,
                allowing you to use larger type sizes for the same word count.
                Wider fonts force smaller type, which hurts legibility.
              </li>
              <li>
                <strong className="text-text-main">Large x-height:</strong> The
                x-height is the height of lowercase letters relative to
                capitals. A large x-height means lowercase text stays readable
                even when the overall font size is small.
              </li>
              <li>
                <strong className="text-text-main">
                  Simple, open letterforms:
                </strong>{" "}
                Fonts with complex decorative details — serifs, swashes,
                ligatures — look sophisticated at large sizes but turn into
                visual noise at thumbnail scales.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The 5 Best Fonts for YouTube Thumbnails
            </h2>

            <div className="space-y-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">1. Impact</h3>
                  <span className="text-xs bg-surface px-2 py-1 rounded text-text-muted">
                    System font
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Impact is the most widely used YouTube thumbnail font for a
                  reason: it is pre-installed on virtually every Windows and Mac
                  computer, requires no download, and was specifically designed
                  for situations where maximum legibility at small sizes is
                  required — originally for newspaper headlines. Its
                  ultra-condensed proportions allow large text with minimal
                  horizontal space, and its extremely heavy stroke weight means
                  it remains clearly readable even at 120×67px thumbnail size.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  Best for: all-purpose thumbnail text, especially on channels
                  covering news, reaction content, finance, and commentary. Used
                  by virtually every large English-language creator at some
                  point.
                </p>
                <p className="text-xs text-text-muted mt-2 italic">
                  Available: pre-installed on Windows and macOS. No download
                  needed.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">2. Bebas Neue</h3>
                  <span className="text-xs bg-surface px-2 py-1 rounded text-text-muted">
                    Free — Google Fonts
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Bebas Neue is the modern creator&apos;s Impact — a free,
                  all-caps condensed font from Google Fonts with clean,
                  geometric letterforms that feel more contemporary than
                  Impact&apos;s slightly dated newspaper aesthetic. It is
                  heavily used by gaming, fitness, and lifestyle channels who
                  want the impact-level boldness with a cleaner, more premium
                  look.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  Bebas Neue is available in only one weight (Regular, which is
                  visually bold due to its design), so there is no risk of
                  accidentally using a thin weight. It pairs naturally with
                  itself — use it for both headline and subtitle text, sized
                  differently.
                </p>
                <p className="text-xs text-text-muted mt-2 italic">
                  Available: fonts.google.com/specimen/Bebas+Neue — free for
                  commercial use.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">3. Anton</h3>
                  <span className="text-xs bg-surface px-2 py-1 rounded text-text-muted">
                    Free — Google Fonts
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Anton is similar to Bebas Neue but slightly wider, with
                  marginally rounder letterforms that can feel slightly more
                  readable for longer words. It occupies the space between
                  Impact (very condensed) and Montserrat Black (wider). If Bebas
                  Neue feels too narrow for your word count or topic, Anton is a
                  natural next choice.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  Anton works particularly well for educational and tutorial
                  channels where multi-word headlines need to fit on a single
                  line without becoming too small. Its slightly increased letter
                  spacing compared to Bebas Neue also gives it a slightly more
                  &quot;premium&quot; appearance at large sizes.
                </p>
                <p className="text-xs text-text-muted mt-2 italic">
                  Available: fonts.google.com/specimen/Anton — free for
                  commercial use.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">
                    4. Montserrat Black (weight 900)
                  </h3>
                  <span className="text-xs bg-surface px-2 py-1 rounded text-text-muted">
                    Free — Google Fonts
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Montserrat is a versatile geometric sans-serif available in
                  nine weights. For thumbnails, only the{" "}
                  <strong>Black (weight 900)</strong> or ExtraBold (weight 800)
                  variants are appropriate. These weights give Montserrat the
                  stroke thickness needed for thumbnail legibility while its
                  geometric, modern letterforms give thumbnails a polished,
                  professional aesthetic.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  Montserrat Black is particularly popular with educational,
                  personal finance, and business channels where a clean and
                  professional appearance is part of the brand. It is also one
                  of the few thumbnail fonts that works in mixed-case (not
                  all-caps) without losing too much legibility.
                </p>
                <p className="text-xs text-text-muted mt-2 italic">
                  Available: fonts.google.com/specimen/Montserrat — select
                  weight 900 (Black). Free for commercial use.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">5. Oswald Bold</h3>
                  <span className="text-xs bg-surface px-2 py-1 rounded text-text-muted">
                    Free — Google Fonts
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Oswald is a condensed, slightly more humanist sans-serif that
                  reads with slightly greater warmth than the very geometric
                  Bebas Neue or Anton. Its Bold and ExtraBold weights perform
                  well at thumbnail sizes, and it is slightly more readable than
                  Impact for multi-line text or when using mixed-case. Tutorial
                  and how-to content channels frequently use Oswald because it
                  communicates a &quot;helpful expert&quot; tone rather than the
                  high-energy feel of Impact or Bebas Neue.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  Use Oswald Bold or ExtraBold — never Oswald Regular or Light
                  on a thumbnail. The lighter weights collapse to unreadable at
                  small sizes just like any other thin font.
                </p>
                <p className="text-xs text-text-muted mt-2 italic">
                  Available: fonts.google.com/specimen/Oswald — select Bold or
                  ExtraBold. Free for commercial use.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Use Stroke and Shadow for Maximum Legibility
            </h2>
            <p>
              Even the best thumbnail font will fail if placed directly over a
              complex or mid-tone background without treatment. Two techniques
              dramatically improve text legibility across all background types:{" "}
              <strong>stroke (outline)</strong> and <strong>drop shadow</strong>
              .
            </p>

            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Stroke (outline effect)
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  A stroke is a solid outline drawn around the outside of each
                  letter. A black stroke on white or yellow text creates the
                  highest-contrast combination possible — visible on dark
                  backgrounds, light backgrounds, and everything in between. Use
                  a stroke width of approximately 3–5% of your text height. For
                  text that is 100px tall, use a 3–5px stroke. Too thin and the
                  stroke disappears at small sizes. Too thick and it changes the
                  perceived shape of the letterforms.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  The most effective thumbnail text style used by top creators:{" "}
                  <strong>white or yellow text + black stroke of 3–5px</strong>.
                  This combination reads on virtually any background color or
                  photo.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Drop shadow</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  A drop shadow adds a slightly offset, blurred copy of the text
                  behind the original letters. Unlike stroke, shadow creates the
                  illusion of depth and lifts the text off the background
                  visually. Use a dark (near-black) shadow with low blur (2–4px)
                  and small offset (2–4px in any direction). Heavy blur or large
                  offsets create a glow effect that reduces rather than improves
                  readability.
                </p>
                <p className="text-text-muted text-sm leading-relaxed mt-2">
                  Stroke and drop shadow can be combined — stroke for clarity at
                  the letter edges, shadow for depth and separation from the
                  background. This combination is common on high-production
                  thumbnails.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Background box behind text
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  When a background photo is very complex or high-contrast in
                  the exact area where text needs to sit, a semi-transparent or
                  solid-color box behind the text block is the most reliable
                  solution. This is commonly seen in news-style thumbnails — a
                  brightly colored bar behind a line of white text. This
                  approach guarantees legibility regardless of the background
                  image.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Font Pairing for Thumbnails
            </h2>
            <p>
              Most effective thumbnail text uses only one font family — varied
              by size, weight, or color to create visual hierarchy. Using two
              different font families on a thumbnail rarely improves anything
              and usually creates visual conflict at small sizes.
            </p>
            <p className="mt-3">
              The standard thumbnail typography hierarchy uses:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">Primary headline:</strong>{" "}
                Largest text on the thumbnail. 120–150px. ALL CAPS. Impact or
                Bebas Neue. Yellow or white with black stroke.
              </li>
              <li>
                <strong className="text-text-main">
                  Secondary line (optional):
                </strong>{" "}
                70–90px. Same font, same weight. White or a contrasting color.
                Supports or completes the headline message.
              </li>
              <li>
                <strong className="text-text-main">No tertiary text:</strong> A
                third line of text on a 1280×720px thumbnail canvas is almost
                always too small to read at display size. Cut it and communicate
                the information in the video title instead.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Fonts to Avoid on YouTube Thumbnails
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Thin or light-weight fonts (Raleway Thin, Roboto Light, any
                  weight below 600).
                </strong>{" "}
                The thin letterforms become invisible at thumbnail sizes. Even
                at full resolution these fonts feel weak on a thumbnail. Stick
                to weight 700 (Bold) minimum.
              </li>
              <li>
                <strong className="text-text-main">
                  Serif fonts (Times New Roman, Georgia, Playfair Display).
                </strong>{" "}
                Serifs are the small decorative strokes at the ends of
                letterforms. At thumbnail sizes these details disappear
                entirely, leaving behind malformed-looking letterforms with
                blurry edges. Serifs work for long-form reading — not 120×67px
                image contexts.
              </li>
              <li>
                <strong className="text-text-main">
                  Script and cursive fonts (Pacifico, Dancing Script, Great
                  Vibes).
                </strong>{" "}
                Script fonts are nearly impossible to read quickly, especially
                in all-caps. At thumbnail sizes they become completely
                illegible. Avoid entirely.
              </li>
              <li>
                <strong className="text-text-main">
                  Decorative and display fonts (most fonts with unusual
                  letterforms).
                </strong>{" "}
                Fonts designed for logos, posters, or branding at large sizes
                collapse into unreadable complexity at 120×67px. If a font has
                unusual stylistic details — broken letters, textured fills,
                extreme distortion — it will not work as thumbnail text.
              </li>
              <li>
                <strong className="text-text-main">
                  Too many font families (more than two on a single thumbnail).
                </strong>{" "}
                Each additional font style adds visual complexity that reads as
                noise at small sizes. Restraint is a design skill. One font, two
                sizes, strong color contrast. That is the formula.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Add Thumbnail Text for Free
            </h2>
            <p>
              The fastest way to add bold thumbnail text with stroke and shadow
              — using any of these recommended fonts — is to use a browser-based
              thumbnail maker. No software download, no account required.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-text-muted mt-3">
              <li>
                <Link
                  href="/youtube-thumbnail-maker"
                  className="text-primary hover:underline font-medium"
                >
                  Open the YouTube Thumbnail Maker
                </Link>{" "}
                — pre-set to 1280×720px
              </li>
              <li>Upload your photo or choose a background color</li>
              <li>
                Click &quot;Add Text&quot; and type your headline (3–5 words
                maximum)
              </li>
              <li>Select Impact, Bebas Neue, or Anton from the font picker</li>
              <li>
                Set the text to ALL CAPS and increase the font size to at least
                100px
              </li>
              <li>
                Enable stroke (3–5px black outline) and optional drop shadow
              </li>
              <li>
                Preview at 25% zoom to verify legibility at thumbnail scale
              </li>
              <li>Download as JPG — ready to upload to YouTube Studio</li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free browser-based tool — no account required
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
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What is the best font for YouTube thumbnails?",
                  a: "The best fonts for YouTube thumbnails are Impact, Bebas Neue, Anton, Montserrat Black (weight 900), and Oswald Bold. All are bold, condensed typefaces that remain highly legible when thumbnails are displayed at small sizes like 120×67px in mobile search results.",
                },
                {
                  q: "Why do most YouTubers use Impact font?",
                  a: "Impact is pre-installed on virtually every computer, requires no download, and was designed specifically for maximum legibility in small formats — originally for newspaper headlines. Its ultra-condensed proportions and heavy stroke weight make it the most space-efficient readable font available.",
                },
                {
                  q: "What Google Fonts work best for YouTube thumbnails?",
                  a: "The best free Google Fonts for thumbnails are Bebas Neue, Anton, Montserrat (weight 900), and Oswald Bold or Extra Bold. All are available at fonts.google.com and share the bold condensed characteristics needed for thumbnail legibility.",
                },
                {
                  q: "How do I add a stroke or outline to thumbnail text?",
                  a: "Use a black stroke of 3–5% of your text height. For 100px text, that is a 3–5px stroke. In ClickThumb's thumbnail maker, select your text layer and increase the stroke value in the style panel. White or yellow text with a black stroke is the highest-contrast combination that works on any background.",
                },
                {
                  q: "What font size should I use on a YouTube thumbnail?",
                  a: "At 1280×720px canvas, use a minimum of 80px for any text — ideally 100–150px for the primary headline. Thumbnails appear as small as 120×67px in mobile search, which renders 100px text as roughly 9px. Only bold fonts with stroke survive this level of downscaling.",
                },
                {
                  q: "What fonts should I avoid on YouTube thumbnails?",
                  a: "Avoid thin or light-weight fonts (any weight below 600), serif fonts (Times New Roman, Georgia, Playfair Display), script and cursive fonts (Pacifico, Dancing Script), and decorative display fonts. If you cannot read the font at 25% zoom, it will fail in thumbnails.",
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
            <h2 className="text-2xl font-bold mb-4">
              Related Tools &amp; Guides
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link
                  href="/youtube-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Maker
                </Link>{" "}
                — 1280×720px with Impact, Bebas Neue, and more
              </li>
              <li>
                <Link
                  href="/gaming-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Gaming Thumbnail Maker
                </Link>{" "}
                — templates for gaming content with bold font presets
              </li>
              <li>
                <Link
                  href="/blog/how-to-increase-youtube-ctr"
                  className="text-primary hover:underline"
                >
                  How to Increase YouTube CTR
                </Link>{" "}
                — thumbnail strategy beyond font choice
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-gaming-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Gaming Thumbnail
                </Link>{" "}
                — step-by-step with font recommendations
              </li>
              <li>
                <Link
                  href="/blog/youtube-thumbnail-size-guide"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Size Guide
                </Link>{" "}
                — 1280×720px specs and format requirements
              </li>
            </ul>
          </section>
        </div>
        <AuthorBox />
      </article>
    </main>
  );
}
