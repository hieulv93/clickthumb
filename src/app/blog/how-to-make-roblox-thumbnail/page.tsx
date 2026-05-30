import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function HowToMakeRobloxThumbnailPage() {
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
        <span className="text-text-main">How to Make a Roblox Thumbnail</span>
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
            How to Make a Roblox Thumbnail That Gets Clicked
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Roblox is one of the most competitive content categories on YouTube,
            with thousands of creators uploading daily. The difference between a
            video that gets 50 views and one that gets 50,000 often comes down
            to the thumbnail. This guide covers every element of a
            high-performing Roblox thumbnail — size, colors, character
            placement, and game-specific strategies for Adopt Me, Blox Fruits,
            Obby, and more.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          {/* Quick Specs */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Roblox Thumbnail — Quick Specs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Recommended size", value: "1280 × 720 px" },
                { label: "Aspect ratio", value: "16:9" },
                { label: "Max file size", value: "Under 2 MB" },
                { label: "Best format", value: "JPG at quality 85" },
                { label: "Max text", value: "5 words or fewer" },
                { label: "Primary color", value: "Roblox Red #e00" },
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
              The Right Size for Roblox Thumbnails
            </h2>
            <p className="text-text-muted">
              All YouTube thumbnails — including Roblox videos — must be{" "}
              <strong className="text-text-main">1280×720 pixels</strong> at a
              16:9 aspect ratio. This is non-negotiable. YouTube displays
              thumbnails at many different sizes depending on where the viewer
              sees them: 120×67px in mobile search, 246×138px in the homepage
              feed, 360×202px in suggested videos on desktop. A 1280×720px
              source image scales correctly at every size without cropping or
              blurring.
            </p>
            <p className="text-text-muted">
              The maximum file size is 2MB. JPG at quality 85 is the optimal
              setting — a 1280×720 Roblox thumbnail at quality 85 typically
              comes in at 200–400KB, well under the limit while staying visually
              sharp. Always design in pixels, not DPI. Open your canvas at
              exactly 1280×720px and every other decision becomes easier.
            </p>
            <p className="text-text-muted">
              One Roblox-specific size tip: because many Roblox viewers are on
              mobile devices, always test your thumbnail at 25% of its original
              size. If the character is recognizable and the text is readable at
              that scale, your thumbnail will perform well across all display
              contexts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Why Color Choice Matters More in Roblox Than Any Other Game
            </h2>
            <p className="text-text-muted">
              Roblox&apos;s primary audience is children and teenagers between
              the ages of 8 and 16. This audience has a strong visual preference
              for bright, saturated, high-energy colors — which is reflected in
              Roblox&apos;s own branding and in-game aesthetics. Thumbnails that
              use muted, dark, or desaturated palettes consistently underperform
              in the Roblox category because they look out of place alongside
              the competition.
            </p>
            <p className="text-text-muted">
              The most effective Roblox thumbnail colors are:
            </p>
            <div className="bg-surface border border-border rounded-xl p-5 text-sm space-y-3">
              <div className="grid grid-cols-2 gap-4 text-text-muted">
                <div>
                  <p className="font-semibold text-text-main mb-2">
                    High-performing colors
                  </p>
                  <ul className="space-y-1">
                    <li>
                      Roblox Red <span className="font-mono">#e00</span>
                    </li>
                    <li>
                      Electric yellow <span className="font-mono">#ffe000</span>
                    </li>
                    <li>
                      Sky blue <span className="font-mono">#00aaff</span>
                    </li>
                    <li>
                      Lime green <span className="font-mono">#00e676</span>
                    </li>
                    <li>
                      Hot pink <span className="font-mono">#ff1f8f</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-text-main mb-2">
                    Avoid these
                  </p>
                  <ul className="space-y-1">
                    <li>Dark grey backgrounds</li>
                    <li>Brown or earth tones</li>
                    <li>Desaturated blue-grey</li>
                    <li>More than 4 colors</li>
                    <li>Black-only background</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-text-muted">
              The single most effective background approach for Roblox
              thumbnails is a bright solid color — electric yellow, sky blue, or
              lime green — with the avatar centered on top. This approach
              creates maximum visual contrast, keeps the avatar prominent, and
              ensures the thumbnail is immediately recognizable as Roblox
              content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Character Placement and Avatar Strategy
            </h2>
            <p className="text-text-muted">
              Your Roblox avatar is your brand identifier. Viewers who have
              watched your channel before will recognize your avatar on sight —
              which means a well-placed avatar functions like a logo, driving
              recognition-based clicks in addition to curiosity-based clicks.
              Here is how to place your avatar for maximum impact:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Use a large, close-up pose",
                  desc: "The avatar should occupy at least 40–50% of the canvas height. A small avatar in the corner is invisible at 120px thumbnail width. Crop in close — show the upper body at minimum, ideally the face and torso with animated expression.",
                },
                {
                  title: "Use an expressive or action pose",
                  desc: "A standing avatar with arms at the side communicates nothing. An avatar mid-jump, pointing, or with arms raised reads as excited and energetic even at small sizes. Take in-game screenshots during dynamic moments, or use a character PNG with arms and expression that signal excitement.",
                },
                {
                  title: "Match the avatar outfit to the content",
                  desc: "If your video is about a specific game (Blox Fruits, Adopt Me, Brookhaven), dress your avatar in gear relevant to that game. Viewers browsing Roblox content will click faster when the avatar signals the specific game they are searching for.",
                },
                {
                  title: "Face + avatar combination",
                  desc: "Showing your real face alongside your Roblox avatar is one of the highest-performing thumbnail formats in the Roblox category. Place your face (with a strong expression) on one side and your avatar on the other. The face drives emotional connection; the avatar signals Roblox content.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="border border-border rounded-xl p-4 space-y-1"
                >
                  <p className="font-semibold text-text-main text-sm">
                    {title}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Game-Specific Thumbnail Strategies
            </h2>
            <p className="text-text-muted">
              Roblox is not one game — it is a platform with thousands of games,
              each with its own audience and visual culture. Matching your
              thumbnail style to the specific game you are covering dramatically
              increases CTR because viewers browsing for that game immediately
              recognize the content as relevant.
            </p>
            <div className="space-y-3">
              {[
                {
                  game: "Adopt Me",
                  strategy:
                    'Feature the most prominent or rarest pet as the visual centerpiece alongside your avatar. Use pastel and warm bright colors — pinks, light blues, and yellows — to match the game\'s friendly aesthetic. Text hooks like "NEW PET!", "RARE TRADE", or "FREE LEGENDARY" perform extremely well. The Adopt Me audience is heavily pet-driven and will click any thumbnail that features a recognizable rare or newly released pet.',
                },
                {
                  game: "Blox Fruits",
                  strategy:
                    'Use action-oriented screenshots featuring swords, devil fruits, or boss fights. The Blox Fruits audience skews toward combat and progression content. Feature the specific fruit or item as a large visual element. Dark or gradient backgrounds work better here than flat colors — they match the game\'s darker fantasy aesthetic. Text hooks: "MAX LEVEL", "BEST FRUIT", "SERVER BOSS".',
                },
                {
                  game: "Obby (Obstacle Courses)",
                  strategy:
                    'Obby thumbnails thrive on contrast between the challenge and the avatar\'s reaction. Show the avatar mid-fall, at a difficult section, or celebrating completion. Bright backgrounds with the avatar in the center. Text: "HARDEST OBBY", "IMPOSSIBLE STAGE", "I BEAT IT". The Obby audience is young and responds to challenge and frustration content.',
                },
                {
                  game: "Brookhaven",
                  strategy:
                    'Brookhaven is a roleplay game with an audience interested in social scenarios, houses, and character customization. Use thumbnails that feature two or more avatars in a scene. Pastel backgrounds, suburban settings from the game, and social scenario text hooks: "NEW HOUSE TOUR", "SECRET LOCATION", "BOYFRIEND ROLEPLAY". Avoid combat-style thumbnails — they do not match the Brookhaven content expectation.',
                },
                {
                  game: "Tower of Hell",
                  strategy:
                    'Tower of Hell thumbnails use the tower itself as a visual backdrop. Show your avatar high on the tower or celebrate a win. Use orange and red from the game\'s color palette. Text: "I BEAT TOWER", "MAX HEIGHT", "IMPOSSIBLE ROUND". Speed-run content performs especially well in this category.',
                },
              ].map(({ game, strategy }) => (
                <div
                  key={game}
                  className="border border-border rounded-xl p-4 space-y-1"
                >
                  <p className="font-semibold text-text-main text-sm">{game}</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {strategy}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Text Rules for Roblox Thumbnails
            </h2>
            <p className="text-text-muted">
              Text on a Roblox thumbnail serves one purpose: give the viewer a
              reason to click that the video title alone does not provide. A
              thumbnail that says &quot;I DID IT&quot; paired with a title that
              says &quot;I Completed the Hardest Obby in Roblox&quot; creates a
              complete message. The text does not need to repeat the title — it
              needs to add emotional energy or signal the hook.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">Maximum 5 words,</strong>{" "}
                ideally 3. Any more forces the font size down to unreadable
                territory at mobile thumbnail sizes.
              </li>
              <li>
                <strong className="text-text-main">Use uppercase.</strong> ALL
                CAPS reads as urgent and energetic, matching the Roblox
                audience&apos;s preference for high-energy content.
              </li>
              <li>
                <strong className="text-text-main">
                  Dark stroke on all text.
                </strong>{" "}
                A 3–5px black outline on white or yellow text ensures
                readability over any background color, including the bright
                backgrounds common in Roblox thumbnails.
              </li>
              <li>
                <strong className="text-text-main">Use bold fonts:</strong>{" "}
                Impact, Anton, Bebas Neue, or Fredoka One (for a more playful
                look that suits the younger Roblox audience). Avoid thin or
                script fonts entirely.
              </li>
              <li>
                <strong className="text-text-main">Text size:</strong> At
                1280×720px canvas, text should be at least 80–120px tall. Scale
                up until the text is clearly readable when the thumbnail is
                viewed at 20% of its full size.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Common Roblox Thumbnail Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-text-muted">
              <li>
                <strong className="text-text-main">
                  Small avatar buried in a complex background.
                </strong>{" "}
                The avatar should be the focal point, not a small element lost
                in a busy screenshot. Use a solid or simple gradient background
                so the avatar stands out.
              </li>
              <li>
                <strong className="text-text-main">
                  Too much text that becomes unreadable.
                </strong>{" "}
                Roblox creators frequently try to fit their whole video concept
                in the thumbnail text. Cut everything down to the core 3–5 word
                hook — the rest belongs in the title.
              </li>
              <li>
                <strong className="text-text-main">
                  Using dark backgrounds for Roblox content.
                </strong>{" "}
                Dark thumbnails work for Fortnite and Valorant but feel wrong
                for Roblox. The Roblox audience expects bright, colorful,
                playful visuals. Dark thumbnails consistently underperform in
                this category.
              </li>
              <li>
                <strong className="text-text-main">
                  Inconsistent avatar appearance across videos.
                </strong>{" "}
                Changing your avatar&apos;s outfit and look on every thumbnail
                prevents viewers from recognizing your channel at a glance. Keep
                the same avatar style across your channel — it functions as a
                logo.
              </li>
              <li>
                <strong className="text-text-main">
                  No game-specific visual cues.
                </strong>{" "}
                A generic Roblox thumbnail without any game-specific element (a
                pet, a fruit, a tower) gives no information about what game the
                video covers. Viewers searching for specific Roblox games will
                skip it.
              </li>
              <li>
                <strong className="text-text-main">
                  Exporting at wrong dimensions.
                </strong>{" "}
                Uploading a thumbnail at 1920×1080px, 720×480px, or any other
                size means YouTube will rescale it — often causing visible blur
                or pixelation, especially on text. Always export at exactly
                1280×720px.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              How to Make a Roblox Thumbnail for Free
            </h2>
            <p className="text-text-muted">
              The fastest way to create a professional Roblox thumbnail —
              pre-sized at 1280×720px, with Roblox-style templates and no
              watermark — is{" "}
              <Link
                href="/roblox-thumbnail-maker"
                className="text-primary underline"
              >
                ClickThumb&apos;s Roblox Thumbnail Maker
              </Link>
              . No signup, no software, no cost.
            </p>
            <div className="space-y-3">
              {[
                {
                  step: "Step 1",
                  title: "Open the Roblox Thumbnail Maker",
                  desc: "Go to ClickThumb's Roblox Thumbnail Maker. The canvas opens at exactly 1280×720px with Roblox-styled templates. Choose a template that matches your video energy — bright and playful for Adopt Me, action-oriented for Blox Fruits.",
                },
                {
                  step: "Step 2",
                  title: "Set your background",
                  desc: "Upload a screenshot from your Roblox session, or choose a solid bright color background. For most Roblox content, a bright solid color (electric yellow, lime green, sky blue) with the avatar on top outperforms complex background screenshots.",
                },
                {
                  step: "Step 3",
                  title: "Add your Roblox avatar",
                  desc: "Export your Roblox avatar as a PNG with a transparent background from the Roblox website, then upload it to the canvas. Position the avatar to occupy at least 40% of the canvas height, centered or slightly to one side to leave room for text.",
                },
                {
                  step: "Step 4",
                  title: "Add your text hook",
                  desc: 'Keep it to 3–5 words maximum. Use uppercase, a bold font (Impact or Anton), and a dark stroke. Examples: "NEW RARE PET!", "I GOT MAX LEVEL", "HARDEST OBBY EVER". Position the text above or below the avatar — never across the avatar\'s face.',
                },
                {
                  step: "Step 5",
                  title: "Test at small size and download",
                  desc: "Zoom out your browser until the preview is about 120px wide. If you can read the text and recognize the avatar, you are done. Click Download — exports at full 1280×720 resolution as JPG, ready to upload directly to YouTube Studio.",
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
                Free, no signup required. Canvas pre-set to 1280×720px with
                Roblox templates.
              </p>
              <Link
                href="/roblox-thumbnail-maker"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Make Roblox Thumbnail Free →
              </Link>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What size should a Roblox YouTube thumbnail be?",
                  a: "1280×720 pixels at a 16:9 aspect ratio. This is YouTube's required size for all video thumbnails. Keep the file under 2MB and export as JPG at quality 85.",
                },
                {
                  q: "What colors work best for Roblox thumbnails?",
                  a: "Bright, saturated colors — Roblox Red (#e00), electric yellow, sky blue, lime green, and hot pink. The Roblox audience is young and responds to high-energy, colorful visuals. Avoid dark or muted palettes.",
                },
                {
                  q: "Should I use my Roblox avatar or my real face?",
                  a: "Both work well. The combination of your real face plus your Roblox avatar typically performs best — the face drives emotional connection and the avatar signals Roblox content. A side-by-side layout is one of the most clicked formats in the Roblox category.",
                },
                {
                  q: "How many words should a Roblox thumbnail have?",
                  a: "Maximum 5 words, ideally 3. At the smallest display size (120×67px in mobile search), only large, high-contrast text in 3–5 words remains readable. Use uppercase Impact or Bebas Neue at 80px or larger.",
                },
                {
                  q: "How do I make a Roblox thumbnail for Adopt Me?",
                  a: 'Feature your rarest or newest pet prominently alongside your avatar. Use pastel or bright backgrounds. Text hooks: "NEW PET!", "RARE TRADE", "FREE LEGENDARY". Warm, friendly colors match the Adopt Me aesthetic.',
                },
                {
                  q: "Do I need Photoshop for Roblox thumbnails?",
                  a: "No. Use ClickThumb's free Roblox Thumbnail Maker at click-thumb.com/roblox-thumbnail-maker. Pre-configured at 1280×720px with Roblox-style templates. No software, no signup, no cost.",
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
                  href="/roblox-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Roblox Thumbnail Maker
                </Link>{" "}
                — 1280×720px, Roblox-style templates, instant download
              </li>
              <li>
                <Link
                  href="/gaming-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Gaming Thumbnail Maker
                </Link>{" "}
                — general gaming thumbnails with character and text layouts
              </li>
              <li>
                <Link
                  href="/youtube-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  YouTube Thumbnail Maker
                </Link>{" "}
                — all-purpose YouTube thumbnail maker at 1280×720px
              </li>
              <li>
                <Link
                  href="/minecraft-thumbnail-maker"
                  className="text-primary hover:underline"
                >
                  Minecraft Thumbnail Maker
                </Link>{" "}
                — Minecraft-specific templates and color palettes
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-gaming-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Gaming Thumbnail
                </Link>{" "}
                — design principles that apply across all gaming content
              </li>
            </ul>
          </section>
        </div>
        <AuthorBox />
      </article>
    </main>
  );
}
