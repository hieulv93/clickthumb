import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function HowToMakePUBGThumbnailPage() {
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
        <span className="text-text-main">How to Make a PUBG Thumbnail</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">
              Guide
            </span>
            <span>·</span>
            <time dateTime="2026-06-08">June 8, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Make a PUBG Thumbnail That Gets Clicked
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            PUBG has a distinct military-tactical visual identity — dusty orange
            map lighting, realistic weapon renders, and the iconic blue zone
            closing in. Thumbnails that match this aesthetic perform
            significantly better in PUBG search results because they feel native
            to the game. This guide covers chicken dinner design, weapon
            showcase strategy, the right color palette, and the correct
            thumbnail size for YouTube.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              PUBG Thumbnail Quick Specs
            </h2>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <strong className="text-text-main">Size:</strong> 1280×720 px
                (16:9)
              </li>
              <li>
                <strong className="text-text-main">Format:</strong> JPG (quality
                85)
              </li>
              <li>
                <strong className="text-text-main">Max file size:</strong> 2MB
                (aim for under 500KB)
              </li>
              <li>
                <strong className="text-text-main">Primary colors:</strong>{" "}
                Dusty orange-yellow, army green, near-black
              </li>
              <li>
                <strong className="text-text-main">Text accent:</strong> Gold
                (#f5c842) or bright white
              </li>
              <li>
                <strong className="text-text-main">Free tool:</strong>{" "}
                <Link
                  href="/gaming-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  ClickThumb Gaming Thumbnail Maker
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Why PUBG&apos;s Visual Identity Matters for Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              PUBG players have trained visual expectations. They scroll past
              thumbnails that look like Fortnite (bright, cartoonish) or Warzone
              (ultra-dark, cinematic). PUBG thumbnails occupy a specific middle
              ground: realistic enough to feel authentic to the game&apos;s
              military setting, but clear enough to communicate the video&apos;s
              topic at a glance.
            </p>
            <p className="text-text-muted mb-4">
              The game&apos;s iconic visuals — the Erangel map&apos;s
              golden-hour lighting, the blue zone circle, specific rifles like
              the SCAR-L and AWM, the frying pan — are all powerful signaling
              tools. Using them correctly tells viewers exactly what the video
              is about before they read a word of text.
            </p>
            <p className="text-text-muted">
              Thumbnails that look generically &quot;gritty shooter&quot;
              without PUBG-specific elements perform worse than thumbnails that
              immediately signal PUBG to anyone who plays or watches the game.
              The specificity of the visual signal is what drives the click.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Correct PUBG Thumbnail Size
            </h2>
            <p className="text-text-muted mb-4">
              YouTube requires thumbnails at 1280×720 pixels in a 16:9 aspect
              ratio. PUBG thumbnails should be exported as JPG at quality 85.
              The game&apos;s visual style — dark backgrounds, dust textures,
              weapon metal — compresses efficiently and typically results in
              files well under 500KB.
            </p>
            <p className="text-text-muted mb-4">
              Design at 1280×720 from the start. The most common mistake is
              designing in 1920×1080 and scaling down — this causes text and
              weapon details to become illegible when YouTube displays the
              thumbnail at preview size (approximately 168×94px in search
              results).
            </p>
            <p className="text-text-muted">
              Keep the most important visual elements in the center-safe zone
              (roughly 1080×608px inset from each edge). YouTube occasionally
              crops the outer edges depending on viewing context, so critical
              text and the weapon or character should never be placed at the
              extreme corners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Chicken Dinner Thumbnail Design
            </h2>
            <p className="text-text-muted mb-4">
              &quot;Winner Winner Chicken Dinner&quot; is PUBG&apos;s most
              recognizable phrase and the strongest thumbnail hook for
              win-highlight content. A well-executed chicken dinner thumbnail
              typically includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                Dark background with subtle Erangel map texture or dust
                atmosphere
              </li>
              <li>
                <strong className="text-text-main">Bold uppercase text</strong>{" "}
                in yellow-gold: &quot;WINNER WINNER&quot; or &quot;CHICKEN
                DINNER&quot;
              </li>
              <li>
                Kill count displayed clearly: &quot;22 KILLS&quot;, &quot;35
                KILLS SOLO&quot;
              </li>
              <li>
                Your character standing or crouching with the final-kill weapon
              </li>
              <li>
                Subtle zone circle or match-end screen element for context
              </li>
            </ul>
            <p className="text-text-muted">
              The kill count is as important as the chicken dinner phrase for
              high-kill-game content — &quot;35 KILLS&quot; next to
              &quot;CHICKEN DINNER&quot; creates immediate curiosity. Keep the
              kill number large enough to read at thumbnail preview size. A
              black stroke outline on the number ensures it reads clearly
              against any background.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Weapon Showcase Strategy
            </h2>
            <p className="text-text-muted mb-4">
              PUBG has one of the most weapon-savvy player bases of any battle
              royale. Featuring the specific weapon being discussed is a
              powerful signal for loadout guides, tips, and tier list content.
            </p>
            <p className="text-text-muted mb-4">
              Best practices for weapon thumbnails:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                Use a clean side-on render or high-res in-game screenshot of the
                weapon
              </li>
              <li>
                Feature the weapon at an angle that shows its distinctive
                silhouette — the AWM&apos;s bolt-action profile, the
                SCAR-L&apos;s compact body
              </li>
              <li>
                Add stat or tier overlay text: &quot;BEST IN GAME&quot;,
                &quot;S-TIER META&quot;, &quot;WIN RATE +40%&quot;
              </li>
              <li>
                Keep the weapon as the dominant visual element — 40–50% of
                thumbnail space
              </li>
              <li>
                Use a dark or map-texture background so the weapon silhouette
                reads clearly
              </li>
            </ul>
            <p className="text-text-muted">
              High-recognition PUBG weapons for thumbnails: AWM (bolt-action
              sniper, instantly recognizable profile), SCAR-L (most-used AR),
              M416 (popular meta rifle), VSS (unique suppressed rifle
              silhouette), and the frying pan (meme value — great for comedy
              content).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              PUBG Color Palette for Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              PUBG&apos;s color identity comes from Erangel&apos;s golden-hour
              lighting and the game&apos;s military aesthetic. The effective
              thumbnail palette:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Background:</strong>{" "}
                Near-black (#0d0d0d to #1a1a1a) with dust or atmosphere overlay
              </li>
              <li>
                <strong className="text-text-main">Map accent:</strong> Dusty
                orange-yellow (#c9873a to #e8a845) — Erangel&apos;s defining
                light
              </li>
              <li>
                <strong className="text-text-main">Text primary:</strong> Bright
                white (#ffffff) for readability
              </li>
              <li>
                <strong className="text-text-main">Text accent:</strong> Gold
                (#f5c842) for chicken dinner moments
              </li>
              <li>
                <strong className="text-text-main">Zone circle:</strong>{" "}
                Electric blue (#1e90ff) — uniquely PUBG, instantly recognizable
              </li>
              <li>
                <strong className="text-text-main">Military green:</strong> Army
                green (#3d5a3e) for camouflage or background accents
              </li>
            </ul>
            <p className="text-text-muted">
              Avoid bright neon greens, purples, or reds unless making crossover
              content. PUBG&apos;s audience responds to the realistic military
              palette — it is the game&apos;s strongest brand signal and what
              separates PUBG content visually from every other battle royale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Using PUBG Map Visuals as Backgrounds
            </h2>
            <p className="text-text-muted mb-4">
              Each PUBG map has a distinct visual signature that tells
              experienced players which map the content covers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Erangel:</strong> Golden-hour
                Eastern European countryside — warm orange-yellow light. The
                default PUBG visual, best for general content.
              </li>
              <li>
                <strong className="text-text-main">Miramar:</strong> Desert
                beige and bleached stone — bright daylight, high-contrast
                shadows. Best for desert-map-specific guides.
              </li>
              <li>
                <strong className="text-text-main">Sanhok:</strong> Dense green
                jungle — lush tropical foliage with diffused green-tinted light.
                Visually distinct from all other maps.
              </li>
              <li>
                <strong className="text-text-main">Vikendi:</strong> Snow and
                grey — cold blue-white tones, frozen landscape. Strong visual
                contrast for text overlay.
              </li>
              <li>
                <strong className="text-text-main">Taego:</strong> Korean
                cityscape — urban concrete, mid-century architecture.
              </li>
            </ul>
            <p className="text-text-muted">
              For general PUBG content, Erangel is the safest choice because it
              is the most associated with the game. For map-specific guides and
              loot videos, matching the map&apos;s visual signature signals the
              specific content type to the viewer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Text Strategy for PUBG Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              PUBG thumbnails should never have more than 3–5 words of primary
              text. At YouTube&apos;s preview size (168×94px in search results),
              anything beyond 5 short words becomes illegible.
            </p>
            <p className="text-text-muted mb-4">
              High-performing text patterns for PUBG content:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Win highlights:</strong>{" "}
                &quot;CHICKEN DINNER&quot;, &quot;35 KILLS SOLO&quot;,
                &quot;FINAL CIRCLE WIN&quot;
              </li>
              <li>
                <strong className="text-text-main">Tips and guides:</strong>{" "}
                &quot;BEST LOOT SPOTS&quot;, &quot;META LOADOUT 2026&quot;,
                &quot;NEW DROP ZONE&quot;
              </li>
              <li>
                <strong className="text-text-main">Ranked content:</strong>{" "}
                &quot;CONQUEROR GRIND&quot;, &quot;PUSHING DIAMOND&quot;,
                &quot;RANK UP FAST&quot;
              </li>
              <li>
                <strong className="text-text-main">Weapon guides:</strong>{" "}
                &quot;AWM GUIDE&quot;, &quot;BEST AR TIER LIST&quot;, &quot;M416
                BUILD&quot;
              </li>
            </ul>
            <p className="text-text-muted">
              Always add a black stroke outline (2–4px) to white text, and a
              dark stroke to gold and yellow text. PUBG backgrounds mix light
              and dark elements — a stroke ensures text stays readable
              regardless of what it overlaps.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              Make Your PUBG Thumbnail Free
            </h2>
            <p className="text-text-muted mb-4">
              ClickThumb&apos;s free Gaming Thumbnail Maker is pre-configured at
              1280×720px with customizable templates built for tactical shooter
              content. No Photoshop, no account required.
            </p>
            <Link
              href="/gaming-thumbnail-maker"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors text-sm"
            >
              Open Gaming Thumbnail Maker →
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/how-to-make-gaming-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Gaming Thumbnail
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-fortnite-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Fortnite Thumbnail
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-apex-legends-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make an Apex Legends Thumbnail
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-valorant-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Valorant Thumbnail
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-youtube-thumbnail-fonts"
                  className="text-primary hover:underline"
                >
                  Best Fonts for YouTube Thumbnails
                </Link>
              </li>
            </ul>
          </section>

          <AuthorBox />
        </div>
      </article>
    </main>
  );
}
