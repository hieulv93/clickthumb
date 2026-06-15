import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function HowToMakeCallOfDutyThumbnailPage() {
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
          How to Make a Call of Duty Thumbnail
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
            How to Make a Call of Duty Thumbnail That Gets Clicked
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Call of Duty thumbnails need to work across three distinct visual
            identities: Warzone&apos;s ultra-dark cinematic aesthetic, Modern
            Warfare&apos;s gritty military realism, and Black Ops&apos;
            high-contrast tactical style. This guide covers nuke and killstreak
            design, weapon showcase strategy, the CoD color palette, correct
            thumbnail size, and text rules for every Call of Duty content type.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              CoD Thumbnail Quick Specs
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
                <strong className="text-text-main">Warzone palette:</strong>{" "}
                Near-black, orange-red (#FF4500), smoke grey
              </li>
              <li>
                <strong className="text-text-main">MW palette:</strong> Military
                green, tan (#8B7355), dark concrete grey
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
              Understanding CoD&apos;s Three Visual Identities
            </h2>
            <p className="text-text-muted mb-4">
              Call of Duty is not a single visual language — it is three
              distinct franchises with different aesthetics that viewers
              immediately recognize:
            </p>
            <ul className="list-disc list-inside space-y-3 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Warzone:</strong> Ultra-dark
                backgrounds, orange-red fire and explosion accents, cinematic
                wide-angle compositions. Heavy smoke and atmosphere. Warzone
                thumbnails lean into the battle royale survival aesthetic —
                dramatic, high-stakes, visually intense.
              </li>
              <li>
                <strong className="text-text-main">Modern Warfare (MW):</strong>{" "}
                Military realism. Tan, green, concrete grey. Real-world military
                hardware and soldier gear. Less flashy than Warzone — more
                tactical and grounded. MW thumbnails favor weapon showcases and
                tactical play over spectacle.
              </li>
              <li>
                <strong className="text-text-main">Black Ops (BO):</strong>{" "}
                Higher contrast, more stylized. Cold War era aesthetics for
                older titles, futuristic high-tech for newer ones. Black Ops
                thumbnails can use more graphic treatment and stylized elements
                than MW.
              </li>
            </ul>
            <p className="text-text-muted">
              Matching your thumbnail aesthetic to the specific CoD title you
              are covering signals content accuracy to viewers. A Warzone player
              who clicks a dark orange-red thumbnail expecting Warzone and finds
              MW content will leave — correct visual matching improves retention
              as well as CTR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              The Correct CoD Thumbnail Size
            </h2>
            <p className="text-text-muted mb-4">
              All Call of Duty YouTube thumbnails should be 1280×720 pixels in
              16:9 aspect ratio. This is YouTube&apos;s standard thumbnail size.
              CoD thumbnails use dark, atmospheric compositions that compress
              well — typical file sizes are 200–400KB at quality 85, far below
              YouTube&apos;s 2MB limit.
            </p>
            <p className="text-text-muted mb-4">
              Design with the center-safe zone in mind: keep critical elements
              (killstreak counter, weapon, face) within the central 1080×608px
              region. YouTube crops the outer edges in certain browsing
              contexts, particularly on mobile devices where the left portion of
              the thumbnail can be obscured by UI elements.
            </p>
            <p className="text-text-muted">
              Never design at 1920×1080 and scale down. Elements that look sharp
              at 1920px often become unreadable at 1280px, and text sized for
              1080p will be microscopic when the thumbnail is displayed at 168px
              wide in mobile search results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Nuke and Killstreak Thumbnail Design
            </h2>
            <p className="text-text-muted mb-4">
              The Tactical Nuke is the most prestigious killstreak in Call of
              Duty multiplayer — 30 kills without dying. Nuke thumbnails
              generate some of the highest CTR in CoD content because the
              achievement signals exceptional skill and rare content.
            </p>
            <p className="text-text-muted mb-4">
              Elements of an effective nuke thumbnail:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                Nuclear explosion visual as the background — the mushroom cloud
                or white flash is immediately recognizable to any CoD player
              </li>
              <li>
                <strong className="text-text-main">
                  Kill count displayed clearly
                </strong>{" "}
                — &quot;30-0&quot; or &quot;30 KILLS&quot; in large, readable
                text
              </li>
              <li>
                The weapon used for the nuke if notable — a sniper or melee nuke
                is far more impressive than an AR nuke and should be featured
              </li>
              <li>
                Your operator or character skin for personal brand recognition
                if you are an established creator
              </li>
              <li>
                Orange-red or white glow effects around text for the nuclear
                detonation aesthetic
              </li>
            </ul>
            <p className="text-text-muted">
              For general killstreak thumbnails: display the killstreak score
              prominently (&quot;25 KILLSTREAK&quot;), feature the most
              impressive weapon moment from the play, and use bright color
              contrast against the dark CoD background.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Weapon Showcase Thumbnail Strategy
            </h2>
            <p className="text-text-muted mb-4">
              Call of Duty has one of the most weapon-focused player communities
              in gaming. Loadout guides, gun tier lists, and &quot;best
              weapon&quot; content drive enormous search traffic. The weapon
              itself should be the dominant visual in weapon-focused thumbnails.
            </p>
            <p className="text-text-muted mb-4">
              Effective weapon thumbnail principles:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                Feature the weapon at a 3/4 angle that shows both the side
                profile and the muzzle — this angle is most recognizable and
                visually dynamic
              </li>
              <li>
                Show weapon attachments if the build is the point of the video —
                a fully-loaded weapon with visible attachments signals loadout
                guide content immediately
              </li>
              <li>
                Use a dark or blurred map background so the weapon reads clearly
                without background competition
              </li>
              <li>
                Add KD or kill stat text: &quot;4.5 KD&quot;, &quot;BEST
                LOADOUT&quot;, &quot;S-TIER META&quot;
              </li>
              <li>
                Camo showcase content should feature the weapon at close range
                with the camo clearly visible — the camo pattern should fill at
                least 40% of the weapon area
              </li>
            </ul>
            <p className="text-text-muted">
              High-search weapons for CoD thumbnails: MCW (MW3 meta), SVA 545,
              HRM-9, SOA Subverter, and whatever the current season&apos;s meta
              SMG or AR is. Naming the specific weapon in thumbnail text
              (&quot;MCW BEST BUILD&quot;) outperforms generic (&quot;BEST
              GUN&quot;) for search CTR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Warzone Thumbnail Design: Dark Cinematic Style
            </h2>
            <p className="text-text-muted mb-4">
              Warzone thumbnails should feel dramatic and cinematic. The
              game&apos;s battle royale setting — last player standing,
              high-stakes circle collapses, squad wipes — calls for visual
              intensity.
            </p>
            <p className="text-text-muted mb-4">
              Key Warzone thumbnail elements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Very dark background</strong>{" "}
                (#0a0a0a to #1a1a1a) — Warzone&apos;s night maps and cinematic
                tone demand near-black bases
              </li>
              <li>
                <strong className="text-text-main">Operator with weapon</strong>{" "}
                — the operator skin choice signals personal brand; consistent
                skin use across thumbnails helps channel recognition
              </li>
              <li>
                <strong className="text-text-main">Circle indicator</strong> for
                final circle wins — &quot;FINAL CIRCLE&quot; text or visual
                circle closing element
              </li>
              <li>
                <strong className="text-text-main">
                  Kill count + placement
                </strong>
                : &quot;#1 CHAMPION SQUAD&quot; or &quot;22 KILLS VICTORY&quot;
              </li>
              <li>
                Orange-red fire, explosion, or smoke effects to break up the
                dark background and add visual energy
              </li>
            </ul>
            <p className="text-text-muted">
              Warzone thumbnails that show a recognizable Urzikstan or Rebirth
              Island landmark in the background add map-specific context for
              viewers looking for location-specific drop guides or map-specific
              loadout content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              CoD Color Palette for Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              Call of Duty&apos;s palette varies by title but shares a military
              aesthetic across the franchise:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Warzone base:</strong> Very
                dark near-black (#0a0a0a) with orange-red (#FF4500) fire accents
              </li>
              <li>
                <strong className="text-text-main">Modern Warfare base:</strong>{" "}
                Military tan (#8B7355), olive green (#556B2F), dark concrete
                (#2a2a2a)
              </li>
              <li>
                <strong className="text-text-main">Black Ops base:</strong> High
                contrast black (#0d0d0d) with cold blue-white (#E8F4FD) or
                yellow (#FFD700) accents
              </li>
              <li>
                <strong className="text-text-main">Text primary:</strong> Bright
                white (#FFFFFF) with black stroke — works on all CoD backgrounds
              </li>
              <li>
                <strong className="text-text-main">Text accent:</strong> Orange
                (#FF6600) for Warzone, olive (#808000) for MW, yellow (#FFD700)
                for BO
              </li>
              <li>
                <strong className="text-text-main">Kill indicator:</strong> Red
                (#FF3030) for death counts and enemy kills — universally
                understood kill color across all CoD titles
              </li>
            </ul>
            <p className="text-text-muted">
              Avoid bright neons, pastels, or cartoon aesthetics for CoD
              thumbnails. The franchise is rooted in military realism, and the
              audience responds to gritty, high-contrast, cinematic treatments
              over vibrant gaming aesthetics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Text Strategy for CoD Thumbnails
            </h2>
            <p className="text-text-muted mb-4">
              CoD thumbnails perform best with 3–5 words of primary text in bold
              uppercase. At preview size (168px wide on mobile search), longer
              text phrases become unreadable.
            </p>
            <p className="text-text-muted mb-4">
              High-performing text patterns by content type:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Nuke content:</strong>{" "}
                &quot;TACTICAL NUKE 30-0&quot;, &quot;NUKE WITH PISTOL&quot;,
                &quot;FIRST NUKE EVER&quot;
              </li>
              <li>
                <strong className="text-text-main">Warzone wins:</strong>{" "}
                &quot;CHAMPION SQUAD&quot;, &quot;22 KILLS WIN&quot;,
                &quot;FINAL CIRCLE SOLO&quot;
              </li>
              <li>
                <strong className="text-text-main">Loadout guides:</strong>{" "}
                &quot;BEST MCW BUILD&quot;, &quot;BROKEN LOADOUT 2026&quot;,
                &quot;META SETUP SEASON 4&quot;
              </li>
              <li>
                <strong className="text-text-main">Ranked content:</strong>{" "}
                &quot;TOP 250 GRIND&quot;, &quot;GOING IRIDESCENT&quot;,
                &quot;SR PUSH MONTAGE&quot;
              </li>
              <li>
                <strong className="text-text-main">Camo grind:</strong>{" "}
                &quot;INTERSTELLAR UNLOCKED&quot;, &quot;ORION IN ONE DAY&quot;,
                &quot;FASTEST CAMO METHOD&quot;
              </li>
            </ul>
            <p className="text-text-muted">
              Use Impact, Bebas Neue, or Anton Bold for primary text. Always add
              a 3–4px black stroke to white text. CoD backgrounds mix very dark
              and bright elements — a stroke outline is non-negotiable for
              readability across all background combinations.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              Make Your CoD Thumbnail Free
            </h2>
            <p className="text-text-muted mb-4">
              ClickThumb&apos;s free Gaming Thumbnail Maker is pre-configured at
              1280×720px with dark military templates and bold font presets
              built for first-person shooter content. Upload your operator
              screenshot, add text, and download in seconds. No Photoshop, no
              account required.
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
                  href="/blog/how-to-make-apex-legends-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make an Apex Legends Thumbnail
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
                  href="/blog/how-to-increase-youtube-ctr"
                  className="text-primary hover:underline"
                >
                  How to Increase YouTube CTR
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
