import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function HowToMakeApexLegendsThumbnailPage() {
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
        <span className="text-text-main">
          How to Make an Apex Legends Thumbnail
        </span>
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
            How to Make an Apex Legends Thumbnail That Gets Clicks
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Apex Legends is a battle royale game with a passionate, competitive
            audience — and that audience has strong expectations for what great
            Apex content looks like. The best-performing Apex thumbnails
            communicate a specific quantifiable achievement (kills, damage, a
            squad wipe) with legend character art and the game&apos;s signature
            orange-and-dark color scheme. This guide covers every element you
            need to build thumbnails that earn clicks from the Apex audience.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick Specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Apex Legends Thumbnail — Quick Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Recommended size", value: "1280 × 720 px" },
                { label: "Aspect ratio", value: "16:9" },
                { label: "Max file size", value: "Under 2 MB" },
                { label: "Best format", value: "JPG at quality 85" },
                { label: "Signature color", value: "Champion Orange" },
                { label: "Background style", value: "Dark with accent" },
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

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Apex Legends Thumbnail Size and Technical Requirements
            </h2>
            <p className="text-text-muted">
              All YouTube thumbnails — including Apex Legends content — must be{" "}
              <strong className="text-text-main">1280×720 pixels</strong> at a
              16:9 aspect ratio. YouTube displays thumbnails at many sizes
              depending on context: from 120×67px in mobile search to 360×202px
              in desktop suggested videos. A 1280×720px source image scales
              correctly at every display size without cropping or blurring.
            </p>
            <p className="text-text-muted">
              Maximum file size is 2MB. For Apex thumbnails with dark
              backgrounds and sharp legend artwork, export as JPG at quality 85
              — typically 200–450KB at 1280×720, well under the limit. PNG is
              acceptable for thumbnails with transparent legend PNG cutouts, but
              will produce larger files than JPG for photographic backgrounds.
            </p>
            <p className="text-text-muted">
              Always design in pixels, not DPI or percentage. A 1280×720px
              canvas maps exactly to YouTube&apos;s display requirements. Test
              your design at 25% zoom periodically — this approximates the size
              thumbnails appear in YouTube mobile search and is the most
              accurate readability test you can perform without uploading.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Champion Orange — The Core Apex Color Strategy
            </h2>
            <p className="text-text-muted">
              The most recognizable color in Apex Legends content is the bright
              orange-gold used in the Champion Squad end screen — the screen
              that appears after a match to showcase the winning team. This
              &quot;Champion Orange&quot; is deeply embedded in the Apex
              player&apos;s visual memory. Thumbnails that use this color on
              dark backgrounds immediately feel like Apex content to any player
              who has played the game.
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-3">
              <div className="grid grid-cols-2 gap-4 text-text-muted">
                <div>
                  <p className="font-semibold text-text-main mb-2">
                    Apex color palette
                  </p>
                  <ul className="space-y-1">
                    <li>
                      Champion Orange <span className="font-mono">#ff9500</span>
                    </li>
                    <li>
                      Apex dark bg <span className="font-mono">#0d0d0d</span>
                    </li>
                    <li>
                      Red accent <span className="font-mono">#e22626</span>
                    </li>
                    <li>
                      Gold trim <span className="font-mono">#c8a84b</span>
                    </li>
                    <li>
                      Cool white <span className="font-mono">#e8e8e8</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-text-main mb-2">
                    By legend accent
                  </p>
                  <ul className="space-y-1">
                    <li>Wraith: blue-purple</li>
                    <li>Bloodhound: red-gold</li>
                    <li>Gibraltar: blue-grey</li>
                    <li>Horizon: teal-blue</li>
                    <li>Revenant: dark purple</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-text-muted">
              The Champion Orange should be used on your primary text element —
              specifically the achievement number (kill count, damage dealt) or
              the key outcome word (&quot;CHAMPION&quot;, &quot;CLUTCH&quot;,
              &quot;WIN&quot;). The rest of the text can be white or light grey.
              The dark background should dominate 60–70% of the canvas, with the
              legend and text as the focal elements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Legend Showcase — Wraith, Bloodhound, Gibraltar, and More
            </h2>
            <p className="text-text-muted">
              Apex Legends has a cast of legends with distinct visual
              identities, and featuring the right legend prominently in your
              thumbnail drives recognition-based clicks in addition to
              curiosity-based clicks. Players who main a specific legend will
              click any thumbnail that prominently features their legend —
              regardless of other thumbnail elements.
            </p>
            <div className="space-y-3">
              {[
                {
                  legend: "Wraith",
                  approach:
                    "The most globally recognized Apex legend. Wraith thumbnails perform well for any aggressive, high-kill, or carry content. Her blue portal void ability and sleek silhouette create strong visual impact on dark backgrounds. Use Wraith for general highlights and high-kill game content where you do not want to restrict the audience to a specific legend main.",
                },
                {
                  legend: "Bloodhound",
                  approach:
                    "Bloodhound is associated with tracking, hunting, and aggressive play. The red-eye glow and the Beast of the Hunt transformation are highly distinctive visual elements. Bloodhound thumbnails perform well for ranked climb content, aggressive squad wipe videos, and hunter-theme content. The red-and-gold color palette creates strong contrast on dark backgrounds.",
                },
                {
                  legend: "Gibraltar",
                  approach:
                    "Gibraltar is the support and defensive legend with the most recognizable silhouette in the game due to his size. Gibraltar thumbnails work for squad support content, defensive strategy videos, and content about landing zones or holding positions. His gun shield creates a distinctive visual element not shared by other legends.",
                },
                {
                  legend: "Horizon",
                  approach:
                    "Horizon's zero-gravity aesthetic and teal-blue color palette work well for mobility and positioning content. Her NEWT drone is a secondary recognizable element. Horizon thumbnails perform well for rotation guides, high-ground content, and movement-focused videos.",
                },
                {
                  legend: "New seasonal legends",
                  approach:
                    "Every new Apex season introduces a new legend with high search volume in the first 2–4 weeks. Thumbnails featuring the new legend's face prominently — with the legend's name in text — will capture this search traffic. Use the new legend's unique color palette as the accent color. Publishing new legend content within 48 hours of season launch captures peak search volume.",
                },
              ].map(({ legend, approach }) => (
                <div
                  key={legend}
                  className="border border-border rounded-xl p-4 space-y-1"
                >
                  <p className="font-semibold text-text-main text-sm">
                    {legend}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {approach}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              The 20-Bomb Formula — Milestone-Based Thumbnail Strategy
            </h2>
            <p className="text-text-muted">
              The highest-performing content type in the Apex category is
              milestone content — videos built around specific quantifiable
              achievements. The &quot;20 bomb&quot; (20 kills in one game) is
              the most famous, but the same principle applies across a range of
              milestones that communicate clear accomplishment to viewers.
            </p>
            <p className="text-text-muted">
              Milestone thumbnails follow a consistent formula: a large number
              or achievement label as the primary text element, the legend used
              for the achievement as the secondary visual element, and Champion
              Orange as the accent color on the achievement number. The larger
              and clearer the number, the stronger the click signal.
            </p>
            <div className="space-y-3">
              {[
                {
                  milestone: "20 Kill Badge (20 Bomb)",
                  hook: '"20 KILLS" in large Champion Orange text. Feature the legend and the 20-kill badge icon. This is the most aspirational milestone in Apex — players who want to achieve it will click any video that claims to show it.',
                },
                {
                  milestone: "4,000 Damage Badge (4K Damage)",
                  hook: '"4K DAMAGE" or "4,000 DMG" with the damage badge icon. The 4K damage badge is slightly more achievable than 20 kills and has a larger aspirational audience. The damage number should be the most visually prominent element.',
                },
                {
                  milestone: "Solo Squad Wipe",
                  hook: '"SOLO SQUAD WIPE" or "3v1 WIN" — communicating a one-vs-three or one-vs-two scenario that resulted in a win. The numerical contrast (one vs many) is the click driver. Feature the legend in a combat or victory pose.',
                },
                {
                  milestone: "Win Streak",
                  hook: '"5 WINS STRAIGHT", "10 WIN STREAK" — consecutive wins content. Feature the Champion Squad screen as the background, with the streak number overlaid. Win streak content appeals to competitive viewers who want consistency, not just peak moments.',
                },
              ].map(({ milestone, hook }) => (
                <div
                  key={milestone}
                  className="border border-border rounded-xl p-4 space-y-1"
                >
                  <p className="font-semibold text-text-main text-sm">
                    {milestone}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {hook}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Champion Squad Screen and Squad Wipe Thumbnails
            </h2>
            <p className="text-text-muted">
              The Champion Squad end screen is the most universally recognized
              visual in Apex Legends — every player knows exactly what it means
              the moment they see it. Using the Champion Squad screen as a
              background element immediately communicates a win to any Apex
              viewer, before they read a single word of text.
            </p>
            <p className="text-text-muted">
              For squad wipe content — videos about eliminating entire enemy
              squads — feature the elimination feed (the side-screen kills feed)
              as an overlay element to show all three squad eliminations. The
              visual of a full squad wipe in the elimination feed is a powerful
              click signal because it communicates the complete story of the
              wipe in one image.
            </p>
            <p className="text-text-muted">
              Squad composition thumbnails (showing all three legends on your
              team) work well for team strategy and squad synergy content. A
              side-by-side layout showing three legend portraits communicates
              &quot;squad&quot; content immediately. Use this format for content
              about three-stack strategies, legend combination guides, and
              coordinated play tutorials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Common Apex Legends Thumbnail Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Bright backgrounds that clash with Apex&apos;s aesthetic.
                </strong>{" "}
                Apex Legends content lives in a darker, more intense visual
                space than Fortnite or Roblox. Bright yellow or lime green
                backgrounds look wrong for Apex content and underperform. Use
                dark backgrounds with Champion Orange accents.
              </li>
              <li>
                <strong className="text-text-main">
                  Not featuring the achievement number prominently.
                </strong>{" "}
                For milestone content (20 bomb, 4K damage), the achievement
                number is the primary click driver. If the number is small or
                hard to read, the click signal disappears. The number should be
                the largest text element in the thumbnail.
              </li>
              <li>
                <strong className="text-text-main">
                  Generic &quot;battle royale&quot; thumbnails without
                  Apex-specific signals.
                </strong>{" "}
                A thumbnail with an orange explosion background and a facecam
                could be from any battle royale game. Include at least one
                Apex-specific element — a legend, the Champion screen, an Apex
                badge icon, or the Apex Legends logo — to anchor the content in
                Apex specifically.
              </li>
              <li>
                <strong className="text-text-main">
                  In-game HUD visible in screenshots.
                </strong>{" "}
                Health bars, ammo, shield, legend ability icons, and the minimap
                all clutter the thumbnail. Capture clean screenshots using the
                photo mode or by editing out the HUD. A clean background with no
                UI elements makes the legend and text the clear focal points.
              </li>
              <li>
                <strong className="text-text-main">
                  Using a non-featured legend in the thumbnail.
                </strong>{" "}
                If your thumbnail shows Wraith but the video is entirely about a
                Bloodhound game, viewers who clicked based on Wraith recognition
                will feel misled. Feature the legend you actually played —
                accuracy in thumbnails protects audience retention.
              </li>
              <li>
                <strong className="text-text-main">
                  Ignoring seasonal content opportunities.
                </strong>{" "}
                Each Apex season creates a surge in search volume for new
                legend, new weapon, and new map content. Creators who build
                thumbnails around seasonal content immediately (within the first
                48 hours of a season) capture a large, time-limited traffic
                opportunity that late publishers cannot access.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              How to Make an Apex Legends Thumbnail for Free
            </h2>
            <p className="text-text-muted">
              <Link
                href="/apex-legends-thumbnail-maker"
                className="text-primary underline"
              >
                ClickThumb&apos;s Apex Legends Thumbnail Maker
              </Link>{" "}
              opens at 1280×720px with dark-background templates, Champion
              Orange accent elements, and legend artwork areas. No Photoshop, no
              account, no cost.
            </p>
            <div className="space-y-3">
              {[
                {
                  step: "Step 1",
                  title: "Open the Apex Legends Thumbnail Maker",
                  desc: "Go to ClickThumb's Apex Legends Thumbnail Maker. Canvas opens at 1280×720px. Choose a template — milestone-focused for kill count and damage content, champion-focused for win highlights, or legend showcase for guide and tier list content.",
                },
                {
                  step: "Step 2",
                  title: "Set your dark background",
                  desc: "Upload the Champion Squad screen as your background, or a dramatic legend-ability screenshot. Alternatively, use a near-black solid background and build from there. If using a screenshot, apply a dark overlay to 40% opacity to ensure the legend and text stand out clearly.",
                },
                {
                  step: "Step 3",
                  title: "Add the legend as the focal element",
                  desc: "Upload your legend as a PNG cutout (generate from Apex's lobby character view or use a screenshot with clean edges). Position the legend to occupy 40–50% of the canvas height. Slightly right of center leaves room for the achievement text on the left.",
                },
                {
                  step: "Step 4",
                  title: "Add the achievement number in Champion Orange",
                  desc: 'Your milestone number ("20 KILLS", "4K DMG", "SQUAD WIPE") should be the largest text element. Set it in Champion Orange (#ff9500) with a dark stroke. Position it prominently on the left or top of the canvas where it is the first element the eye hits.',
                },
                {
                  step: "Step 5",
                  title: "Download and upload",
                  desc: "Download as JPG at full 1280×720 resolution. Upload to YouTube Studio under Custom Thumbnail for the specific video. Preview the thumbnail in YouTube Studio's mobile view to confirm readability at small sizes before publishing.",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="border border-border rounded-xl p-5 space-y-1"
                >
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {step}
                  </p>
                  <p className="font-semibold text-text-main">{title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-surface rounded-xl p-5 text-center">
              <p className="text-text-muted text-sm mb-3">
                Free, no signup. Dark Apex templates with Champion Orange
                accents. 1280×720px download.
              </p>
              <Link
                href="/apex-legends-thumbnail-maker"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make Apex Legends Thumbnail Free →
              </Link>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What size should an Apex Legends YouTube thumbnail be?",
                  a: "1280×720 pixels at a 16:9 aspect ratio. YouTube's required size for all video thumbnails. Export as JPG at quality 85, under 2MB.",
                },
                {
                  q: "What colors work best for Apex Legends thumbnails?",
                  a: "Champion Orange (#ff9500) on dark or near-black backgrounds. This mirrors the Champion Squad end-screen colors that every Apex player recognizes. Secondary colors depend on the legend featured — blue for Wraith, red-gold for Bloodhound.",
                },
                {
                  q: "Which legends work best for thumbnails?",
                  a: "Feature the legend your video is specifically about. Wraith is the most globally recognized legend for general content. Seasonal or new legends have high CTR in the weeks following release due to search volume spikes.",
                },
                {
                  q: 'What is the "20 bomb" thumbnail strategy?',
                  a: 'Feature the kill count ("20 KILLS") as the largest, most prominent text element in Champion Orange. The 20-kill milestone is highly aspirational — players who want to achieve it click any video that shows how. The same principle applies to 4K damage, solo squad wipes, and win streaks.',
                },
                {
                  q: "Should I show the Champion Squad screen in a thumbnail?",
                  a: "Yes — the Champion Squad end screen is the most universally recognized win signal in Apex. Using it as a background element immediately communicates a win before the viewer reads any text. Overlay kill count or damage numbers for additional click incentive.",
                },
                {
                  q: "Do I need Photoshop for Apex Legends thumbnails?",
                  a: "No. Use ClickThumb's free Apex Legends Thumbnail Maker at click-thumb.com/apex-legends-thumbnail-maker. Dark templates with Champion Orange accents at 1280×720px. No software or account needed.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="border border-border rounded-xl p-5 space-y-2"
                >
                  <p className="font-semibold text-text-main text-sm">{q}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Related Tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <Link
                  href="/apex-legends-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Apex Legends Thumbnail Maker
                </Link>{" "}
                — dark templates with Champion Orange accents at 1280×720px
              </li>
              <li>
                <Link
                  href="/gaming-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Gaming Thumbnail Maker
                </Link>{" "}
                — general gaming thumbnail maker for any game
              </li>
              <li>
                <Link
                  href="/call-of-duty-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Call of Duty Thumbnail Maker
                </Link>{" "}
                — tactical shooter thumbnails for COD content
              </li>
              <li>
                <Link
                  href="/youtube-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Maker
                </Link>{" "}
                — all-purpose 1280×720px YouTube thumbnail creator
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-gaming-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Gaming Thumbnail
                </Link>{" "}
                — core design principles for all gaming content
              </li>
            </ul>
          </section>
        </div>
        <AuthorBox />
      </article>
    </main>
  );
}
