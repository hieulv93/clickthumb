"use client";

import CanvasToolClient from "@/components/canvas/CanvasToolClient";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQItem from "@/components/tool/FAQItem";
import { PLATFORMS } from "@/lib/platforms";
import { GAMING_TEMPLATES } from "@/lib/templates";
import Link from "next/link";

const platform = PLATFORMS.gaming;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Gaming Thumbnail Maker",
      url: "https://click-thumb.com/gaming-thumbnail-maker/",
      applicationCategory: "DesignApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free online gaming thumbnail maker. Create 1280×720px YouTube gaming thumbnails with neon, fire, and cyberpunk templates. No signup, instant download.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What size should a gaming thumbnail be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gaming thumbnails on YouTube should be 1280×720 pixels (16:9 ratio). This is the standard YouTube thumbnail size and works for all gaming channels. The minimum size is 640×360px, but 1280×720 is recommended for the best quality on all screens.",
          },
        },
        {
          "@type": "Question",
          name: "Is this gaming thumbnail maker free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, completely free. No account required, no watermark. Create and download unlimited gaming thumbnails.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a good gaming thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High-contrast colors (neon on black, red on dark), bold Impact-style text, a strong action word (INSANE, EPIC, BEST, HOW TO), and your face with a reaction expression. The thumbnail should be readable even at small sizes in the YouTube sidebar.",
          },
        },
        {
          "@type": "Question",
          name: "What font is best for gaming thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Impact is the most used font for gaming thumbnails — it is bold, condensed, and readable at small sizes. Arial Bold is a good alternative. Avoid thin or script fonts — they are unreadable in the YouTube sidebar where thumbnails display at around 120px wide.",
          },
        },
        {
          "@type": "Question",
          name: "What colors work best for gaming thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High-contrast color combinations: neon green on black (#00ff88 on #0a0a0a), bright red on dark (#ff4400 on #0d0000), yellow on purple, or white on dark blue. Avoid low-contrast combinations like light gray on white. Saturation and contrast are more important than specific colors.",
          },
        },
        {
          "@type": "Question",
          name: "How many characters should a gaming thumbnail title have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Keep thumbnail text to 3–6 words maximum. The thumbnail title is different from the video title — it should be a visual hook, not a full description. Examples: "INSANE WIN", "1 vs 100", "WORLD RECORD", "HOW I WON". Short and punchy wins every time.',
          },
        },
        {
          "@type": "Question",
          name: "Should I add my face to the thumbnail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — thumbnails with human faces perform 30–40% better than those without. Upload a transparent PNG of yourself using the background image upload feature, or use a photo with a solid background and high contrast against the thumbnail background.",
          },
        },
        {
          "@type": "Question",
          name: "What file format should I use for gaming thumbnails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JPG is recommended for gaming thumbnails. YouTube accepts JPG, PNG, GIF, and BMP (max 2MB). JPG gives the best quality at the smallest file size for thumbnails with solid backgrounds and text. This tool exports as JPG at 92% quality.",
          },
        },
      ],
    },
  ],
};

export default function GamingThumbnailMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: "Gaming Thumbnail Maker",
                url: "https://click-thumb.com/gaming-thumbnail-maker/",
              },
            ]}
          />
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-main">
              Gaming Thumbnail Maker
            </h1>
            <p className="text-text-muted text-sm sm:text-base">
              Free online — 1280×720px — no signup, no watermark
            </p>
          </div>

          <CanvasToolClient
            platform={platform}
            templates={GAMING_TEMPLATES}
            downloadFilename="click-thumb-gaming-thumbnail.jpg"
            exportLabel="Download Thumbnail (1280×720)"
          >
            <section className="space-y-8 text-sm text-text-muted leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  What Makes a Gaming Thumbnail That Gets Clicks?
                </h2>
                <p>
                  A gaming thumbnail has one job: make the viewer stop scrolling
                  and click. In a YouTube feed packed with hundreds of videos,
                  your thumbnail competes for attention in under 0.3 seconds.
                  The best gaming thumbnails share three elements: extreme
                  contrast between text and background, a short punchy title
                  (3–5 words), and an emotion or action that promises a payoff.
                </p>
                <p>
                  Top gaming channels have refined thumbnail design into a
                  science. Study channels like MrBeast Gaming, Dream, or
                  Markiplier — their thumbnails use neon colors on dark
                  backgrounds, Impact font with thick outlines, bold facial
                  expressions, and numbers (streak counts, win percentages,
                  challenge difficulty). These patterns are not accidental —
                  they are the result of years of A/B testing against millions
                  of viewers.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Gaming Thumbnail Size — YouTube Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface">
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Spec
                        </th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Value
                        </th>
                        <th className="border border-border px-3 py-2 text-left font-semibold text-text-main">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Recommended size",
                          "1280×720px",
                          "Best quality on all devices",
                        ],
                        [
                          "Minimum size",
                          "640×360px",
                          "Avoid — blurry on large screens",
                        ],
                        ["Aspect ratio", "16:9", "Matches YouTube player"],
                        ["Max file size", "2MB", "JPG recommended"],
                        [
                          "Formats accepted",
                          "JPG, PNG, GIF, BMP",
                          "JPG is optimal for thumbnails",
                        ],
                      ].map(([s, v, n]) => (
                        <tr key={s} className="even:bg-surface/50">
                          <td className="border border-border px-3 py-2 font-medium text-text-main">
                            {s}
                          </td>
                          <td className="border border-border px-3 py-2">
                            {v}
                          </td>
                          <td className="border border-border px-3 py-2">
                            {n}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  This tool exports at exactly 1280×720px as JPG — the
                  YouTube-recommended size. No re-sizing, no quality loss.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Gaming Thumbnail CTR Science — What the Data Shows
                </h2>
                <p>
                  Gaming is the most competitive thumbnail niche on YouTube. The
                  average gaming video competes against 5–15 other thumbnails on
                  the same topic in the recommendation feed, all targeting the
                  same audience. What separates a 12% CTR thumbnail from a 4%
                  one is not luck — it is following the visual grammar that
                  gaming audiences have been trained to respond to.
                </p>
                <p>
                  Research from YouTube creators who run A/B tests consistently
                  shows the same patterns: thumbnails with a face expressing
                  shock or intensity outperform faceless thumbnails by 30–40%.
                  Numbers anchor the promise (&quot;1 HP WIN&quot; is more
                  compelling than &quot;INSANE WIN&quot; because it is
                  specific). And dark backgrounds with neon or high-saturation
                  text register faster in peripheral vision than
                  light-background designs — which is why neon on black became
                  the gaming channel default.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-1 mt-2">
                  <li>
                    <strong className="text-text-main">
                      Use a face with a reaction:
                    </strong>{" "}
                    Shock, disbelief, or intense focus. Point at something
                    off-frame to create curiosity.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      Be specific with numbers:
                    </strong>{" "}
                    &quot;1 vs 47&quot; beats &quot;1 vs MANY&quot;. &quot;0.1%
                    HP&quot; beats &quot;LOW HP&quot;. Specificity =
                    believability.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      Impact font with a dark outline:
                    </strong>{" "}
                    A 3–4px black stroke on neon text keeps it readable at 120px
                    sidebar width and over any game background.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      One clear focal point:
                    </strong>{" "}
                    Busy thumbnails lose. One face, one number, one emotion —
                    not three elements competing for attention.
                  </li>
                  <li>
                    <strong className="text-text-main">
                      Neon on dark for gaming:
                    </strong>{" "}
                    This is the genre&apos;s visual language. Viewers are
                    pattern-matched to it. Deviate only if your brand is
                    specifically &quot;calm and educational&quot;.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Gaming Thumbnail Text — Words That Stop the Scroll
                </h2>
                <p>
                  The text on a gaming thumbnail is not the video title — it is
                  a visual emotion trigger. It should make the viewer feel
                  something in under half a second. These are the text patterns
                  that consistently outperform in gaming:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      type: "Impossible odds",
                      examples:
                        '"1 vs 100", "SOLO vs FULL SQUAD", "0 HEALTH WIN"',
                      why: "Creates disbelief. Viewer has to see how.",
                    },
                    {
                      type: "Superlatives",
                      examples: '"BEST LOADOUT", "WORST GUN WINS", "GOD MODE"',
                      why: "Promise of extreme. Easy to understand instantly.",
                    },
                    {
                      type: "Achievement unlocked",
                      examples: '"WORLD RECORD", "FIRST EVER", "UNBEATABLE"',
                      why: "Social proof trigger. Fear of missing historic moment.",
                    },
                    {
                      type: "Challenge format",
                      examples: '"24 HOURS", "NO SCOPE ONLY", "BLINDFOLDED"',
                      why: "Curiosity + doubt combo. Viewer wants to see it fail or succeed.",
                    },
                  ].map((t) => (
                    <div
                      key={t.type}
                      className="rounded-xl border border-border p-3 space-y-1"
                    >
                      <p className="font-semibold text-text-main text-xs">
                        {t.type}
                      </p>
                      <p className="text-xs text-text-muted">{t.examples}</p>
                      <p className="text-xs text-text-muted italic">{t.why}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Choosing a Background for Your Gaming Thumbnail
                </h2>
                <p>
                  The background sets the genre and energy of the thumbnail
                  before the viewer reads a single word. Use the{" "}
                  <strong className="text-text-main">Upload image</strong>{" "}
                  button to add your own game screenshot, or start with a
                  solid-color template and add your screenshot on top.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      source: "In-game screenshot",
                      tip: "Take it at 1920×1080 or higher. Avoid UI-heavy areas (minimap, health bar) — crop to show action. Blur or darken it slightly so text stays readable.",
                    },
                    {
                      source: "Cinematic moment",
                      tip: "Pause during a cutscene or death cam. Dramatic lighting from the game itself makes better backgrounds than screenshot collages.",
                    },
                    {
                      source: "Solid neon gradient",
                      tip: "Fastest to make and tests well across all screen sizes. Use the gradient templates (Neon Cyber, Plasma) when you want the text to be the hero.",
                    },
                  ].map((t) => (
                    <div
                      key={t.source}
                      className="rounded-xl border border-border p-3 space-y-1"
                    >
                      <p className="font-semibold text-text-main text-xs">
                        {t.source}
                      </p>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {t.tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-main">
                  Gaming Thumbnail File Requirements &amp; Compression
                </h2>
                <p>
                  YouTube accepts JPG, PNG, GIF, and BMP thumbnails up to 2MB. A
                  1280×720px JPG at 92% quality is typically 150–350KB for
                  solid-color backgrounds and 300–550KB for screenshot
                  backgrounds — both well within the limit. If your thumbnail
                  exports over 2MB (common with high-detail game screenshots as
                  background), compress it with{" "}
                  <Link
                    href="https://compressimg.pro/compress-image"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    CompressImg.pro
                  </Link>{" "}
                  before uploading — it reduces file size by 40–70% with no
                  visible quality difference at thumbnail scale.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-base font-bold text-text-main">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      q: "What size should a gaming thumbnail be?",
                      a: "Gaming thumbnails on YouTube should be 1280×720 pixels (16:9 ratio). This tool exports at exactly this size — no resizing or quality loss after export.",
                    },
                    {
                      q: "Is this gaming thumbnail maker free?",
                      a: "Yes, completely free. No account required, no watermark. Download unlimited gaming thumbnails at 1280×720px.",
                    },
                    {
                      q: "Do gaming thumbnails with faces really perform better?",
                      a: "Yes — multiple YouTube A/B test studies show thumbnails with a human face performing 30–40% better than faceless thumbnails. The face needs a strong expression: shock, disbelief, or intense focus. A neutral face does not have the same effect.",
                    },
                    {
                      q: "What font is best for gaming thumbnails?",
                      a: "Impact is the industry standard — bold, condensed, and readable at 120px sidebar width. Always add a 3–4px black or contrasting outline so the text stays readable over any game background. Avoid thin serif or script fonts.",
                    },
                    {
                      q: "What colors work best for gaming thumbnails?",
                      a: "Neon on dark: #00ff88 on #0a0a0a (neon green), #ff4400 on #0d0000 (fire red), #00cfff on #05001a (cyber blue). The gaming audience is pattern-matched to high-contrast, high-saturation colors. Low-contrast thumbnails disappear in the feed.",
                    },
                    {
                      q: "How many words should be on a gaming thumbnail?",
                      a: '3–5 words maximum, but specific is better than clever. "1 vs 100" beats "CRAZY GAME". "0.1% HEALTH WIN" beats "INSANE WIN". Numbers and specificity make the hook believable and impossible to ignore.',
                    },
                    {
                      q: "Can I upload my own game screenshot as the background?",
                      a: 'Yes. Click "Upload image" to add your own game screenshot as the canvas background. Take the screenshot at 1920×1080 or higher for best quality. All processing runs locally — nothing is sent to any server.',
                    },
                    {
                      q: "What is the best file format for gaming thumbnails?",
                      a: "JPG is recommended. YouTube accepts JPG, PNG, GIF, and BMP (max 2MB). JPG gives the best quality-to-size ratio for thumbnails with mixed content (screenshot + text). This tool exports as JPG at 92% quality — typically 150–550KB.",
                    },
                  ].map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-border">
                <h2 className="text-sm font-semibold text-text-main">
                  More Gaming Thumbnail Makers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {
                      href: "/call-of-duty-thumbnail-maker",
                      title: "COD Thumbnail Maker",
                      desc: "Military Dark, Combat Orange, Camo Green for COD.",
                    },
                    {
                      href: "/gta-thumbnail-maker",
                      title: "GTA Thumbnail Maker",
                      desc: "GTA Gold, Night Purple, Wanted Red for GTA 5.",
                    },
                    {
                      href: "/cs2-thumbnail-maker",
                      title: "CS2 Thumbnail Maker",
                      desc: "CT Blue, T-Side Orange, Pro Minimal for CS2.",
                    },
                    {
                      href: "/pubg-thumbnail-maker",
                      title: "PUBG Thumbnail Maker",
                      desc: "Chicken Dinner, Military Tan, Night Drop for PUBG.",
                    },
                    {
                      href: "/valorant-thumbnail-maker",
                      title: "Valorant Thumbnail Maker",
                      desc: "Agent Impact, ACE Gold, Clutch Navy for Valorant.",
                    },
                    {
                      href: "/apex-legends-thumbnail-maker",
                      title: "Apex Legends Thumbnail Maker",
                      desc: "Champion Orange, Dark Red for Apex Legends.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl border border-border p-3 hover:border-primary transition-colors group"
                    >
                      <p className="font-semibold text-text-main text-xs group-hover:text-primary">
                        {item.title}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </CanvasToolClient>
        </div>
      </main>
    </>
  );
}
