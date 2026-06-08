import Link from "next/link";
import AuthorBox from "@/components/blog/AuthorBox";

export default function TwitchBannerSizeGuidePage() {
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
        <span className="text-text-main">Twitch Banner Size Guide</span>
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
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Twitch Banner Size Guide 2026: Every Dimension You Need
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Twitch has several different image assets with different size
            requirements. Using the wrong dimensions means your banner gets
            cropped, your text gets cut off, or your profile picture looks
            blurry. This guide covers every Twitch image size, the correct safe
            zones, and what to include in each one.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Twitch Image Sizes — Quick Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-text-main">
                      Asset
                    </th>
                    <th className="pb-2 pr-4 font-semibold text-text-main">
                      Dimensions
                    </th>
                    <th className="pb-2 font-semibold text-text-main">
                      Format
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Offline Banner</td>
                    <td className="py-2 pr-4">1920×1080 px</td>
                    <td className="py-2">JPG / PNG</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Profile Banner</td>
                    <td className="py-2 pr-4">1200×480 px</td>
                    <td className="py-2">JPG / PNG</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Profile Picture</td>
                    <td className="py-2 pr-4">256×256 px</td>
                    <td className="py-2">PNG</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Panels</td>
                    <td className="py-2 pr-4">320px wide</td>
                    <td className="py-2">PNG / JPG</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Video Thumbnail</td>
                    <td className="py-2 pr-4">1280×720 px</td>
                    <td className="py-2">JPG / PNG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Offline Banner — 1920×1080px
            </h2>
            <p className="text-text-muted mb-4">
              The offline banner is the image displayed on your Twitch channel
              when you are not streaming. It is the most-seen channel asset
              because it appears every time someone visits your page while you
              are offline — which is most of the time for most streamers.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Dimensions:</strong> 1920×1080
              pixels (16:9 aspect ratio)
              <br />
              <strong className="text-text-main">Max file size:</strong> 10MB
              (aim for under 2MB)
              <br />
              <strong className="text-text-main">Format:</strong> JPG for
              photographic backgrounds, PNG for flat design with text
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Safe zone:</strong> Keep
              critical content — your channel name, schedule, and any key text —
              within the center 1280×720 area. The outer 320px on each side may
              be visible on wide monitors but could be partially hidden on
              narrower screens. The top and bottom 10% can also be covered by
              Twitch UI elements on certain layouts.
            </p>
            <p className="text-text-muted">
              Effective offline banners include your streaming schedule, a brief
              description of your content type (&quot;Variety FPS&quot;,
              &quot;Chill RPG&quot;), your social media handles, and Discord
              server link if you have one. Keep text minimal and large enough to
              read — viewers decide whether to follow within a few seconds of
              landing on your page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Profile Banner — 1200×480px
            </h2>
            <p className="text-text-muted mb-4">
              The profile banner appears at the top of your Twitch channel page
              behind your profile picture and channel info overlay. It is
              cropped and displayed at different heights depending on the
              viewer&apos;s screen width, which makes safe zone planning more
              important here than for the offline banner.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Dimensions:</strong> 1200×480
              pixels
              <br />
              <strong className="text-text-main">Max file size:</strong> 10MB
              <br />
              <strong className="text-text-main">Safe zone:</strong> The
              horizontal center band — approximately the middle 240px of height
              — is the most consistently visible area across screen sizes
            </p>
            <p className="text-text-muted mb-4">
              The left side of the profile banner is partially covered by your
              profile picture and channel stats overlay on desktop. Design the
              right half of the banner as the visually dominant area. Avoid
              placing important text or logos in the bottom-left quadrant.
            </p>
            <p className="text-text-muted">
              Profile banners are best used for brand visuals, game art, or
              simple brand color gradients. Avoid dense text — the overlay of
              your channel name, follower count, and profile picture covers a
              significant portion of the left side of the image.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Profile Picture — 256×256px
            </h2>
            <p className="text-text-muted mb-4">
              Your Twitch profile picture is displayed as a circle throughout
              the platform — in search results, recommended channels, chat, and
              on your channel page. It appears at sizes ranging from 20×20px (in
              chat) to 150×150px (on your channel page).
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Upload size:</strong> 256×256
              pixels minimum (Twitch will crop to circle)
              <br />
              <strong className="text-text-main">Format:</strong> PNG
              recommended — sharper than JPG at small sizes for logos and text
              <br />
              <strong className="text-text-main">Max file size:</strong> 10MB
            </p>
            <p className="text-text-muted">
              Keep your design simple enough to read at 40×40px — the size your
              profile appears in chat. A logo, a stylized initial, or a clear
              character portrait works well. Avoid complex scenes or small text
              — they become unreadable at the sizes Twitch displays the profile
              picture in most contexts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Twitch Panels — 320px Wide
            </h2>
            <p className="text-text-muted mb-4">
              Twitch panels appear below your stream or offline banner in the
              About section of your channel. They are used for social media
              links, donation buttons, Discord links, schedules, and sponsor
              information.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Width:</strong> 320px (fixed —
              panels display at exactly 320px wide)
              <br />
              <strong className="text-text-main">Height:</strong> Flexible —
              standard heights are 100px, 160px, or 200px
              <br />
              <strong className="text-text-main">Max file size:</strong> 2.9MB
              per panel
              <br />
              <strong className="text-text-main">Format:</strong> PNG for panels
              with text, JPG for photo panels
            </p>
            <p className="text-text-muted mb-4">
              Panel images can also be clickable links — upload the image and
              then add the destination URL in the panel editor. This is how most
              streamers create visual social media buttons (Discord, Twitter,
              YouTube, Instagram).
            </p>
            <p className="text-text-muted">
              Keep panel design consistent — same font, same color scheme, same
              icon style. Inconsistent panels make a channel look unpolished. A
              simple dark background with your brand color accent and a clear
              icon is more professional than complex artwork at 320px wide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Twitch Video Thumbnail — 1280×720px
            </h2>
            <p className="text-text-muted mb-4">
              Past broadcast thumbnails and clip thumbnails follow the standard
              16:9 video thumbnail format, the same as YouTube thumbnails.
            </p>
            <p className="text-text-muted mb-4">
              <strong className="text-text-main">Dimensions:</strong> 1280×720
              pixels (16:9)
              <br />
              <strong className="text-text-main">Format:</strong> JPG or PNG
              <br />
              <strong className="text-text-main">Max file size:</strong> 10MB
            </p>
            <p className="text-text-muted">
              If you also post stream highlights to YouTube, design thumbnails
              at 1280×720 — they work identically for both platforms. The
              standard YouTube thumbnail design rules apply: bold text, clear
              subject, high contrast between text and background.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Mobile Safe Zone for Twitch Banners
            </h2>
            <p className="text-text-muted mb-4">
              A significant portion of Twitch viewers are on mobile. The Twitch
              mobile app displays banners and channel art differently from
              desktop — images are often cropped more aggressively, and the
              profile overlay covers more of the banner.
            </p>
            <p className="text-text-muted mb-4">
              For the offline banner (1920×1080), mobile-safe design means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                All critical text within the center 1000×560px (about 52% of
                width and 52% of height from center)
              </li>
              <li>No important content in the top 15% or bottom 15%</li>
              <li>
                No important content in the left 20% or right 20% on mobile
              </li>
              <li>
                Test your design at 375px wide (iPhone SE viewport) to check
                what is visible
              </li>
            </ul>
            <p className="text-text-muted">
              The safest approach is treating your offline banner like a poster
              — one strong central visual with text centered. Designs that rely
              on the full 1920px width to read correctly will look broken on
              mobile viewers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Design Tips for Twitch Banners
            </h2>
            <p className="text-text-muted mb-4">
              What makes a Twitch banner look professional versus amateur:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
              <li>
                <strong className="text-text-main">Brand consistency:</strong>{" "}
                Use the same 2–3 colors across all Twitch assets (banner,
                panels, profile picture). Consistent color builds recognition
                faster than any other design element.
              </li>
              <li>
                <strong className="text-text-main">Readable typography:</strong>{" "}
                Use bold, sans-serif fonts for channel name and schedule.
                Decorative or script fonts at banner sizes often become
                unreadable on mobile.
              </li>
              <li>
                <strong className="text-text-main">Schedule visibility:</strong>{" "}
                Make streaming days and times immediately readable. Viewers who
                want to come back need to find the schedule instantly.
              </li>
              <li>
                <strong className="text-text-main">White space:</strong> Leave
                breathing room around text and icons. Crowded banners look
                cluttered even when the individual elements are well-designed.
              </li>
              <li>
                <strong className="text-text-main">Game art usage:</strong>{" "}
                Official game art can be used for personal channels under most
                publishers&apos; fan content guidelines, but verify for each
                specific game. When in doubt, use in-game screenshots you
                captured yourself.
              </li>
            </ul>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              Create Your Twitch Banner Free
            </h2>
            <p className="text-text-muted mb-4">
              ClickThumb&apos;s free YouTube Thumbnail Maker supports custom
              dimensions — set it to 1920×1080 for your Twitch offline banner or
              1200×480 for your profile banner. No software, no account
              required.
            </p>
            <Link
              href="/youtube-thumbnail-maker"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors text-sm"
            >
              Open Free Banner Maker →
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/youtube-banner-size-guide"
                  className="text-primary hover:underline"
                >
                  YouTube Banner Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/twitter-header-size-guide"
                  className="text-primary hover:underline"
                >
                  Twitter Header Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/linkedin-banner-size-guide"
                  className="text-primary hover:underline"
                >
                  LinkedIn Banner Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/social-media-image-sizes"
                  className="text-primary hover:underline"
                >
                  Social Media Image Sizes (All Platforms)
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-make-gaming-thumbnail"
                  className="text-primary hover:underline"
                >
                  How to Make a Gaming Thumbnail
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
