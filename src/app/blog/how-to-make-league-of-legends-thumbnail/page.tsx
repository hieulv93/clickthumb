import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function HowToMakeLeagueOfLegendsThumbnailPage() {
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
          How to Make a League of Legends Thumbnail
        </span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">
              Guide
            </span>
            <span>·</span>
            <time dateTime="2026-06-15">June 15, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            How to Make a League of Legends Thumbnail That Gets Clicked
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            League of Legends has one of the most visually distinct aesthetics
            in gaming — high-fantasy champion art, gold and teal rank emblems,
            and flashy ability effects. Thumbnails that lean into these visual
            cues perform better in LoL search results because they immediately
            signal the game to viewers. This guide covers champion showcase
            strategy, rank climb design, color palette, correct thumbnail size,
            and text rules for every LoL content type.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              LoL Thumbnail Quick Specs
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
                <strong className="text-text-main">Primary palette:</strong>{" "}
                Gold (#C89B3C), Deep navy (#010A13), Teal (#0BC4E3)
              </li>
              <li>
                <strong className="text-text-main">Text accent:</strong> Bright
                white or LoL gold (#C89B3C)
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
              Why LoL&apos;s Visual Identity Drives Clicks
            </h2>
            <p className="text-text-muted mb-4">
              League of Legends has been running for over 15 years and has one
              of the most recognizable visual libraries in gaming. Champion
              splash arts, the loading screen border styles, rank emblems (Iron
              to Challenger), and the HUD gold-and-teal color scheme are all
              immediately familiar to the 160+ million players who have touched
              the game.
            </p>
            <p className="text-text-muted mb-4">
              Thumbnails that use these visual signals — a recognizable champion
              in their classic or prestige skin, a Challenger emblem, the LoL
              logo font style — perform better in search results because they
              create instant recognition. The viewer doesn&apos;t need to read
              the title to know this is LoL content.
            </p>
            <p className="text-text-muted">
              Generic &quot;epic gaming&quot; thumbnails with fire effects and
              random character art underperform against thumbnails that clearly
              signal League of Legends. Specificity drives clicks more reliably
              than visual spectacle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Correct Thumbnail Size for LoL Videos
            </h2>
            <p className="text-text-muted mb-4">
              YouTube requires 1280×720 pixels at a 16:9 aspect ratio. League of
              Legends content performs on both desktop (where thumbnails display
              at 360px wide in search) and mobile (where thumbnails are 168×94px
              in browse). Design at 1280×720 and ensure everything reads at
              1/7th scale.
            </p>
            <p className="text-text-muted mb-4">
              The center-safe zone is approximately 1080×608px inset from each
              edge. The most important elements — champion face, rank emblem,
              key text — should stay within this zone. YouTube can crop outer
              edges in certain UI contexts, and mobile sidebar browsing cuts the
              left 20% of the thumbnail.
            </p>
            <p className="text-text-muted">
              Export as JPG at quality 85. LoL thumbnails use dark backgrounds
              with bright champion art — this combination compresses efficiently
              and typically produces files well under 400KB, far below
              YouTube&apos;s 2MB upload limit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Champion Showcase: The Core LoL Thumbnail Strategy
            </h2>
            <p className="text-text-muted mb-4">
              Champion-focused thumbnails are the most effective format for LoL
              content. Viewers immediately identify which champion the video is
              about and self-select based on whether they play or are interested
              in that champion.
            </p>
            <p className="text-text-muted mb-4">
              Best practices for champion thumbnails:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                Use the champion&apos;s high-resolution splash art or in-client
                loading screen render — these are the most recognizable versions
                of each champion
              </li>
              <li>
                Position the champion on the left or right side of the frame,
                leaving the opposite side for text — this is the standard LoL
                creator layout
              </li>
              <li>
                Feature the champion at an angle that shows their face and
                weapon or ability clearly — full-body side profiles are less
                clickable than 3/4 face angles
              </li>
              <li>
                Prestige and limited skins draw extra attention — if you&apos;re
                covering a champion, use their most visually impressive
                available skin for the thumbnail
              </li>
              <li>
                Ability effect overlays (skill VFX as background elements) add
                depth and signal the champion&apos;s kit to experienced players
              </li>
            </ul>
            <p className="text-text-muted">
              High-click champions for thumbnails in 2026: Jinx, Ahri, Zed,
              Yasuo, Yone, Vi, Jinx, and Arcane-related champions (which carry
              Netflix series recognition beyond the LoL player base).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Rank Climb Thumbnail Design
            </h2>
            <p className="text-text-muted mb-4">
              Ranked content is the dominant LoL content category. &quot;Iron to
              Challenger&quot;, &quot;hitting Diamond&quot;, and &quot;one-trick
              climbing&quot; videos have enormous search volume and consistent
              viewer demand.
            </p>
            <p className="text-text-muted mb-4">
              For rank climb thumbnails, the key design elements are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">
                  Rank emblem prominently displayed
                </strong>{" "}
                — the target rank (Challenger, Grandmaster, Master) should be
                large enough to read at preview size. The gold Challenger emblem
                is the strongest CTR signal in LoL thumbnail design.
              </li>
              <li>
                <strong className="text-text-main">
                  Current rank to target rank arrow
                </strong>{" "}
                — &quot;Gold → Challenger&quot; visual progression creates
                curiosity and communicates the video premise instantly
              </li>
              <li>
                <strong className="text-text-main">LP or winrate stats</strong>{" "}
                — &quot;+40 LP/Game&quot;, &quot;87% Win Rate&quot; creates
                credibility and click incentive
              </li>
              <li>
                <strong className="text-text-main">
                  Champion the viewer will see used
                </strong>{" "}
                — which champion was used to climb is a key viewer decision
                factor for one-trick content
              </li>
            </ul>
            <p className="text-text-muted">
              The strongest rank thumbnail formula: Challenger emblem (large,
              left side) + champion splash art (right side) + rank destination
              text (&quot;CHALLENGER IN 30 GAMES&quot;) in bold white with gold
              outline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              LoL Color Palette for Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              League of Legends&apos; brand colors are deeply familiar to its
              player base. Using the correct palette signals authenticity and
              matches the visual language players see in the client and loading
              screens every day.
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Background:</strong> Deep
                navy-black (#010A13) — the LoL client&apos;s primary background
                color. Instantly recognizable as League.
              </li>
              <li>
                <strong className="text-text-main">Primary accent:</strong> LoL
                Gold (#C89B3C) — used on rank borders, UI elements, and the
                logo. The game&apos;s signature color.
              </li>
              <li>
                <strong className="text-text-main">Secondary accent:</strong>{" "}
                Teal (#0BC4E3) — used in ability effects, the HUD, and map
                elements. Pairs perfectly with the gold.
              </li>
              <li>
                <strong className="text-text-main">Text primary:</strong> Bright
                white (#FFFFFF) with dark stroke — high contrast on the dark
                background.
              </li>
              <li>
                <strong className="text-text-main">
                  Magic/Ability effects:
                </strong>{" "}
                Blue-purple (#5352E8) for mage abilities, electric blue for
                lightning champions (Kennen, Volibear).
              </li>
              <li>
                <strong className="text-text-main">Danger/highlight:</strong>{" "}
                Red (#FF3030) for baron and dragon objectives, or to highlight a
                critical play.
              </li>
            </ul>
            <p className="text-text-muted">
              The deep navy + gold combination is the most immediately
              recognizable LoL palette. Any thumbnail using these two colors
              sends an instant signal to the 160M+ LoL player base, even before
              the champion or text is visible at small sizes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Content-Specific Thumbnail Strategies
            </h2>
            <p className="text-text-muted mb-4">
              Different LoL content types need different thumbnail approaches:
            </p>
            <ul className="list-disc list-inside space-y-3 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Champion guides:</strong>{" "}
                Feature the champion in their best skin, role label
                (&quot;JUNGLE / SUPPORT / ADC&quot;), and tier indicator
                (&quot;S-TIER META 2026&quot;). Include ability VFX in the
                background.
              </li>
              <li>
                <strong className="text-text-main">Tier lists:</strong> Multiple
                champions arranged in a tier grid or compared side-by-side. Use
                colored tier labels (S-tier gold, A-tier blue, B-tier grey).
                High information density works well for tier list thumbnails.
              </li>
              <li>
                <strong className="text-text-main">One-trick content:</strong>{" "}
                Single champion, rank emblem, &quot;ONE TRICK MASTER 500+
                GAMES&quot; style text. The win rate or game count adds
                credibility.
              </li>
              <li>
                <strong className="text-text-main">Patch analysis:</strong> Show
                the patched champion or item with a &quot;PATCH X.XX&quot;
                overlay. Red X or green checkmark overlays signal buffs/nerfs
                quickly.
              </li>
              <li>
                <strong className="text-text-main">
                  Funny moments / fails:
                </strong>{" "}
                Reaction face (your face reacting to the moment), chaotic
                background, bold text. Contrast with the polished champion art
                style works for comedy content.
              </li>
              <li>
                <strong className="text-text-main">
                  Pentakill highlights:
                </strong>{" "}
                Bold &quot;PENTAKILL&quot; text in gold or red, champion
                mid-action shot, score overlay (&quot;5/0 KDA&quot;). The
                pentakill moment is LoL&apos;s strongest content hook.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Text Rules for LoL Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              At YouTube&apos;s preview size, LoL thumbnails display at
              approximately 168×94px in search results on mobile. Text must be
              large enough to read at this scale — which means short, bold,
              uppercase phrases only.
            </p>
            <p className="text-text-muted mb-4">
              Maximum 5 words of primary text. High-performing LoL text
              patterns:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Rank content:</strong>{" "}
                &quot;IRON TO CHALLENGER&quot;, &quot;DIAMOND IN 2 WEEKS&quot;,
                &quot;HITTING CHALLENGER LIVE&quot;
              </li>
              <li>
                <strong className="text-text-main">Guide content:</strong>{" "}
                &quot;BEST BUILD 2026&quot;, &quot;S-TIER JUNGLE GUIDE&quot;,
                &quot;BROKEN IN PATCH 14.12&quot;
              </li>
              <li>
                <strong className="text-text-main">Highlight content:</strong>{" "}
                &quot;PENTAKILL!&quot;, &quot;1v9 CARRY&quot;, &quot;40 KILLS
                GAME&quot;
              </li>
              <li>
                <strong className="text-text-main">Tier list:</strong>{" "}
                &quot;BEST ADC TIER LIST&quot;, &quot;BROKEN SUPPORTS
                2026&quot;, &quot;PATCH 14.12 WINNERS&quot;
              </li>
            </ul>
            <p className="text-text-muted">
              Font weight: use bold or black weight minimum. LoL thumbnails use
              Impact, Bebas Neue, or Anton for primary text — condensed
              uppercase fonts that stay readable at small sizes. Always add a
              3–4px black stroke to white text and a dark stroke to gold text.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              Make Your LoL Thumbnail Free
            </h2>
            <p className="text-text-muted mb-4">
              ClickThumb&apos;s free Gaming Thumbnail Maker is pre-set at
              1280×720px with dark background templates and bold font presets
              built for gaming content. Upload your champion art, add text,
              download in seconds. No Photoshop, no account required.
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
                  href="/blog/how-to-make-valorant-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Valorant Thumbnail
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-increase-youtube-ctr"
                  className="text-primary hover:underline"
                >
                  How to Increase YouTube CTR: 8 Thumbnail Tips
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
              <li>
                <Link
                  href="/blog/youtube-thumbnail-size-guide"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Size Guide 2026
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
