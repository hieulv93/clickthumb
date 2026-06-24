import type { Metadata } from "next";
import AuthorBox from "@/components/blog/AuthorBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Make a Twitch Banner — Size, Design & Free Maker (2026)",
  description:
    "Twitch profile banner size is 1200×480px. Learn how to design a Twitch banner that works for your offline screen, panels, and channel page. Free online maker.",
  alternates: {
    canonical: "https://click-thumb.com/blog/how-to-make-twitch-banner/",
  },
};

export default function HowToMakeTwitchBannerPage() {
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
        <span className="text-text-main">How to Make a Twitch Banner</span>
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
            How to Make a Twitch Banner — Size, Design & Free Maker (2026)
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Your Twitch banner is the first thing potential followers see when
            they visit your channel — especially when you are offline. A
            professional banner tells viewers exactly what type of streamer you
            are, when you stream, and why they should follow. This guide covers
            the exact Twitch banner sizes, what to include, and how to create
            one for free.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Twitch Banner — Official Size Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Profile banner size", value: "1200 × 480 px" },
                { label: "Offline screen size", value: "1920 × 1080 px" },
                { label: "Aspect ratio (banner)", value: "5:2" },
                { label: "Max file size", value: "10 MB" },
                { label: "Best format", value: "PNG or JPG" },
                { label: "Min recommended width", value: "1200 px" },
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
              Twitch has two main banner assets: the profile banner (shown on
              your channel page, 1200×480px) and the offline screen (shown
              during your stream when you are not live, 1920×1080px). Both
              should match your branding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Profile Banner vs Offline Screen — What Is the Difference?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">
                      Asset
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Size
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      When displayed
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Where to set
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      asset: "Profile banner",
                      size: "1200 × 480 px",
                      when: "Always — top of channel page",
                      where:
                        "Creator Dashboard → Settings → Channel → Profile banner",
                    },
                    {
                      asset: "Offline screen",
                      size: "1920 × 1080 px",
                      when: "When stream is offline (in video player)",
                      where:
                        "Creator Dashboard → Settings → Channel → Offline image",
                    },
                  ].map(({ asset, size, when, where }, i) => (
                    <tr
                      key={asset}
                      className={i % 2 === 1 ? "bg-surface/50" : ""}
                    >
                      <td className="p-3 border border-border font-medium">
                        {asset}
                      </td>
                      <td className="p-3 border border-border font-mono text-xs">
                        {size}
                      </td>
                      <td className="p-3 border border-border text-text-muted text-sm">
                        {when}
                      </td>
                      <td className="p-3 border border-border text-text-muted text-xs">
                        {where}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              This guide focuses on the profile banner (1200×480px). For the
              offline screen, use the same design extended to 1920×1080px — same
              fonts, colors, and branding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Step 1 — Define Your Banner Style
            </h2>
            <p>
              Your Twitch banner communicates your channel identity at a glance.
              The most effective banners match the games or content you stream,
              and feel consistent with your profile picture and overlay.
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  style: "Dark gaming aesthetic",
                  best: "FPS, battle royale, horror games",
                  example:
                    "Black or dark background, neon accent color, bold channel name, schedule",
                },
                {
                  style: "Fantasy / RPG illustrated",
                  best: "MMOs, RPGs, Minecraft, Elden Ring",
                  example:
                    "Fantasy art or map element as background, medieval/fantasy font, gold accents",
                },
                {
                  style: "Just Chatting / IRL",
                  best: "Variety streamers, talk shows, podcasts",
                  example:
                    "Clean gradient or photo background, personality-forward, face or avatar centered",
                },
                {
                  style: "Esports / competitive",
                  best: "Ranked grind, CS2, Valorant, League",
                  example:
                    "Dark background, team or rank imagery, aggressive typography",
                },
                {
                  style: "Cozy / pastel",
                  best: "Cozy games, Animal Crossing, Stardew, chill streams",
                  example:
                    "Soft colors, illustrated elements (house, plants), rounded fonts",
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
              Step 2 — What to Include in Your Twitch Banner
            </h2>
            <p>
              A Twitch banner is only 480px tall, so every element needs to earn
              its place. Focus on what a first-time visitor most needs to know.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left p-3 border border-border font-semibold">
                      Element
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Priority
                    </th>
                    <th className="text-left p-3 border border-border font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      element: "Channel name / logo",
                      priority: "Required",
                      notes: "Large, readable at a glance",
                    },
                    {
                      element: "Stream schedule",
                      priority: "Highly recommended",
                      notes: "e.g., 'Live Mon/Wed/Fri 8PM EST'",
                    },
                    {
                      element: "Content niche",
                      priority: "Recommended",
                      notes:
                        "e.g., 'Valorant ranked grind' or 'Chill variety streams'",
                    },
                    {
                      element: "Avatar or character art",
                      priority: "Optional",
                      notes: "Helps personal brand recognition",
                    },
                    {
                      element: "Social handles",
                      priority: "Optional",
                      notes: "Keep small — Twitter/X, Discord, YouTube",
                    },
                    {
                      element: "Sub count milestone",
                      priority: "Avoid",
                      notes: "Goes stale quickly — use panels instead",
                    },
                  ].map(({ element, priority, notes }, i) => (
                    <tr
                      key={element}
                      className={i % 2 === 1 ? "bg-surface/50" : ""}
                    >
                      <td className="p-3 border border-border font-medium">
                        {element}
                      </td>
                      <td className="p-3 border border-border">
                        <span
                          className={
                            priority === "Required"
                              ? "text-red-500 font-semibold"
                              : priority === "Highly recommended"
                                ? "text-amber-600 font-medium"
                                : priority === "Avoid"
                                  ? "text-text-muted line-through"
                                  : "text-green-700 dark:text-green-400"
                          }
                        >
                          {priority}
                        </span>
                      </td>
                      <td className="p-3 border border-border text-text-muted text-sm">
                        {notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Step 3 — Typography and Color Rules
            </h2>
            <p>
              At 1200×480px, your banner has limited vertical space. Font and
              color choices determine whether the banner reads clearly at any
              size.
            </p>
            <div className="mt-4 space-y-4">
              {[
                {
                  rule: "Bold fonts only for the channel name",
                  detail:
                    "Use a heavy weight — Bebas Neue, Montserrat Black, Anton, or Oswald Bold. Light and regular weight fonts look weak at banner scale and are nearly unreadable on small screens.",
                },
                {
                  rule: "Match your overlay and panels",
                  detail:
                    "Consistency is a professional signal. If your stream overlay uses neon purple on dark navy, your banner should too. First-time visitors who see your channel page after watching a clip should instantly recognize the brand.",
                },
                {
                  rule: "High contrast text over any background",
                  detail:
                    "Add a semi-transparent dark overlay (30–50% opacity) behind text if using a photo or illustrated background. White text on a complex background becomes unreadable without contrast protection.",
                },
                {
                  rule: "Limit to 2–3 brand colors",
                  detail:
                    "Pick one dominant background color, one accent for highlights and borders, and white or black for text. More than 3 colors makes the design feel chaotic and amateur.",
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
              How to Make a Twitch Banner Free Online
            </h2>
            <p>
              The fastest way to create a Twitch banner at exactly 1200×480px
              without installing any software:
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-3 text-text-muted">
              <li>
                <Link
                  href="/twitch-banner-maker/"
                  className="text-primary hover:underline font-medium"
                >
                  Open the Twitch Banner Maker
                </Link>{" "}
                — pre-set to 1200×480px with streamer templates
              </li>
              <li>
                Choose a background — dark color, gradient, or upload a game
                screenshot
              </li>
              <li>Add your channel name in a bold font</li>
              <li>Add your stream schedule and content niche</li>
              <li>
                Optionally add your avatar or character in the left or right
                section
              </li>
              <li>Download as PNG and upload to Twitch Creator Dashboard</li>
            </ol>
            <div className="mt-5 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free, no account required. Exact 1200×480px output with Twitch
                streamer templates.
              </p>
              <Link
                href="/twitch-banner-maker/"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make Twitch Banner Free →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How to Upload a Banner to Twitch
            </h2>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-text-muted">
              <li>
                Go to your{" "}
                <strong className="text-text-main">
                  Twitch Creator Dashboard
                </strong>
              </li>
              <li>
                Click <strong className="text-text-main">Settings</strong> in
                the left sidebar, then{" "}
                <strong className="text-text-main">Channel</strong>
              </li>
              <li>
                Scroll to{" "}
                <strong className="text-text-main">Profile banner</strong> and
                click <strong className="text-text-main">Update</strong>
              </li>
              <li>Upload your 1200×480px PNG or JPEG (max 10 MB)</li>
              <li>
                Click <strong className="text-text-main">Save Changes</strong>
              </li>
            </ol>
            <p className="mt-4 text-sm text-text-muted">
              For the offline screen: go to{" "}
              <strong className="text-text-main">
                Settings → Channel → Offline image
              </strong>{" "}
              and upload a 1920×1080px version of your banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Twitch Banner Examples by Stream Type
            </h2>
            <div className="space-y-3">
              {[
                {
                  type: "FPS / shooter (Valorant, CS2, COD)",
                  idea: "Black background, neon red or blue accent, bold condensed font, schedule, agent or operator art on one side",
                },
                {
                  type: "Battle royale (Fortnite, PUBG, Apex)",
                  idea: "Game environment screenshot as background, dark overlay, bright text, character silhouette",
                },
                {
                  type: "RPG / fantasy (Elden Ring, WoW, FFXIV)",
                  idea: "In-game artwork or landscape, warm gold/sepia tones, serif or fantasy font, class or character shown",
                },
                {
                  type: "Minecraft / Roblox / cozy games",
                  idea: "Pixel art or illustrated elements, bright friendly colors, rounded font, chibi avatar character",
                },
                {
                  type: "Just Chatting / IRL / podcast",
                  idea: "Clean gradient or subtle texture, host photo or avatar centered, name large, 'Live talks' or show name",
                },
                {
                  type: "Music / DJ streams",
                  idea: "Dark background with light wave or equalizer graphic, artist name large, genre tags",
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
              Common Twitch Banner Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Using a 1280×720px YouTube thumbnail as the Twitch banner.
                </strong>{" "}
                The aspect ratios are different — YouTube is 16:9 (1280×720),
                Twitch profile banner is 5:2 (1200×480). A YouTube thumbnail
                will appear stretched or cropped on Twitch. Always design at the
                correct dimensions.
              </li>
              <li>
                <strong className="text-text-main">
                  Not including a stream schedule.
                </strong>{" "}
                The most common reason people do not follow is uncertainty about
                when you stream. A schedule directly in the banner removes that
                friction — &ldquo;Live Mon/Wed/Fri 8PM&rdquo; is enough.
              </li>
              <li>
                <strong className="text-text-main">
                  Mismatched branding between banner and stream overlay.
                </strong>{" "}
                If your overlay is clean purple and your banner is chaotic
                rainbow, the channel looks disorganized. Establish a color
                palette and use it everywhere.
              </li>
              <li>
                <strong className="text-text-main">
                  Text too small to read on mobile.
                </strong>{" "}
                Many Twitch viewers browse on phones. Text smaller than 30–40px
                on a 1200px canvas becomes illegible on a 375px mobile screen.
                Test your banner at half size before uploading.
              </li>
              <li>
                <strong className="text-text-main">
                  Outdated schedule or content information.
                </strong>{" "}
                A banner that says &ldquo;fortnite every day&rdquo; when you
                have switched to Valorant is confusing. Update the banner
                whenever your schedule or main game changes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link
                  href="/twitch-banner-maker/"
                  className="text-primary hover:underline"
                >
                  Twitch Banner Maker
                </Link>{" "}
                — free, 1200×480px, streamer templates
              </li>
              <li>
                <Link
                  href="/youtube-banner-maker/"
                  className="text-primary hover:underline"
                >
                  YouTube Banner Maker
                </Link>{" "}
                — if you also post on YouTube
              </li>
              <li>
                <Link
                  href="/gaming-thumbnail-maker/"
                  className="text-primary hover:underline"
                >
                  Gaming Thumbnail Maker
                </Link>{" "}
                — thumbnails for YouTube clips from your stream
              </li>
              <li>
                <Link
                  href="/cs2-thumbnail-maker/"
                  className="text-primary hover:underline"
                >
                  CS2 Thumbnail Maker
                </Link>{" "}
                — for CS2 streamers posting clips
              </li>
              <li>
                <Link
                  href="/valorant-thumbnail-maker/"
                  className="text-primary hover:underline"
                >
                  Valorant Thumbnail Maker
                </Link>{" "}
                — for Valorant streamers
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
                  q: "What size is a Twitch banner?",
                  a: "Twitch profile banner is 1200×480 pixels (5:2 aspect ratio). The offline screen image (shown when you are not streaming) is 1920×1080 pixels (16:9). Both files must be under 10 MB. PNG is recommended for sharp logos and text; JPEG is fine for photo-based designs.",
                },
                {
                  q: "What is the difference between a Twitch banner and an offline screen?",
                  a: "The profile banner (1200×480px) appears at the top of your channel page at all times. The offline screen (1920×1080px) appears in the video player area when you are not live. Both should share the same visual style, but they are set separately in Creator Dashboard → Settings → Channel.",
                },
                {
                  q: "How do I make a Twitch banner without Photoshop?",
                  a: "Use ClickThumb's free Twitch Banner Maker at click-thumb.com/twitch-banner-maker. It is pre-set to the correct 1200×480px dimensions with streamer templates. Upload your background, add your channel name and schedule, and download. No software required.",
                },
                {
                  q: "What should I put on my Twitch banner?",
                  a: "At minimum: channel name (large and bold), stream schedule (day and time with timezone), and content niche. Optionally: your avatar or character art, social media handles, and a tagline. Avoid putting subscriber counts or milestones — they go stale and require frequent updates.",
                },
                {
                  q: "Should my Twitch banner match my YouTube banner?",
                  a: "They should share the same brand identity (colors, fonts, general aesthetic) but not be identical — the dimensions are different. A consistent visual style across Twitch, YouTube, Twitter/X, and Discord makes your brand look professional and makes it easier for fans to find you across platforms.",
                },
                {
                  q: "What is the best file format for a Twitch banner?",
                  a: "PNG for designs with flat colors, logos, text, and sharp edges — it is lossless and will not show compression artifacts. JPEG for photo-based banners where file size matters more than sharpness. Both are accepted up to 10 MB. Avoid GIF for static banners.",
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
