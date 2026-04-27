import Link from 'next/link'

export default function SocialMediaImageSizes() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-text-muted mb-8 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-text-main">Social Media Image Sizes 2026</span>
      </nav>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <span className="bg-surface px-2 py-0.5 rounded font-medium">Guide</span>
            <span>·</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
            <span>·</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight mb-4">
            Social Media Image Sizes 2026: The Complete Guide
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Upload the wrong size and platforms crop your design, compress it aggressively, or
            display it blurry. This guide lists the exact pixel dimensions for every image type on
            every major platform — updated for 2026.
          </p>
        </header>

        <div className="space-y-10 text-text-main leading-relaxed">

          {/* Master reference table */}
          <section className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Quick Reference — All Platforms</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-white">
                    <th className="text-left p-2.5 border border-border font-semibold">Platform</th>
                    <th className="text-left p-2.5 border border-border font-semibold">Image type</th>
                    <th className="text-left p-2.5 border border-border font-semibold">Size (px)</th>
                    <th className="text-left p-2.5 border border-border font-semibold">Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { platform: 'YouTube', type: 'Thumbnail', size: '1280 × 720', ratio: '16:9' },
                    { platform: 'YouTube', type: 'Channel banner', size: '2560 × 1440', ratio: '16:9' },
                    { platform: 'YouTube', type: 'Profile photo', size: '800 × 800', ratio: '1:1' },
                    { platform: 'Instagram', type: 'Square post', size: '1080 × 1080', ratio: '1:1' },
                    { platform: 'Instagram', type: 'Portrait post', size: '1080 × 1350', ratio: '4:5' },
                    { platform: 'Instagram', type: 'Landscape post', size: '1080 × 566', ratio: '1.91:1' },
                    { platform: 'Instagram', type: 'Story / Reel', size: '1080 × 1920', ratio: '9:16' },
                    { platform: 'Instagram', type: 'Profile photo', size: '320 × 320', ratio: '1:1' },
                    { platform: 'Twitter / X', type: 'Header / banner', size: '1500 × 500', ratio: '3:1' },
                    { platform: 'Twitter / X', type: 'Post image', size: '1200 × 675', ratio: '16:9' },
                    { platform: 'Twitter / X', type: 'Profile photo', size: '400 × 400', ratio: '1:1' },
                    { platform: 'LinkedIn', type: 'Profile banner', size: '1584 × 396', ratio: '4:1' },
                    { platform: 'LinkedIn', type: 'Company banner', size: '1128 × 191', ratio: '~6:1' },
                    { platform: 'LinkedIn', type: 'Post image', size: '1200 × 627', ratio: '1.91:1' },
                    { platform: 'LinkedIn', type: 'Profile photo', size: '400 × 400', ratio: '1:1' },
                    { platform: 'Facebook', type: 'Cover photo', size: '851 × 315', ratio: '~2.7:1' },
                    { platform: 'Facebook', type: 'Post image', size: '1200 × 630', ratio: '1.91:1' },
                    { platform: 'Facebook', type: 'Profile photo', size: '170 × 170', ratio: '1:1' },
                    { platform: 'TikTok', type: 'Video cover', size: '1080 × 1920', ratio: '9:16' },
                    { platform: 'TikTok', type: 'Profile photo', size: '200 × 200', ratio: '1:1' },
                    { platform: 'Pinterest', type: 'Pin image', size: '1000 × 1500', ratio: '2:3' },
                    { platform: 'Pinterest', type: 'Profile photo', size: '165 × 165', ratio: '1:1' },
                  ].map(({ platform, type, size, ratio }, i) => (
                    <tr key={`${platform}-${type}`} className={i % 2 === 1 ? 'bg-surface/50' : 'bg-white'}>
                      <td className="p-2.5 border border-border font-medium text-xs">{platform}</td>
                      <td className="p-2.5 border border-border text-xs">{type}</td>
                      <td className="p-2.5 border border-border font-mono text-xs">{size}</td>
                      <td className="p-2.5 border border-border text-xs">{ratio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">YouTube Image Sizes</h2>
            <p>
              YouTube is the second largest search engine in the world. Getting image sizes right
              directly affects thumbnail CTR and channel discoverability.
            </p>
            <div className="mt-4 space-y-3">
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Thumbnail</h3>
                  <span className="font-mono text-sm text-primary">1280 × 720 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  16:9 ratio, max 2MB, JPG or PNG. The most important image on YouTube — thumbnails
                  directly drive click-through rate. Use bold text (3–5 words), high contrast, and a
                  human face for maximum CTR.
                </p>
                <Link href="/youtube-thumbnail-maker" className="text-primary text-sm hover:underline mt-2 inline-block">
                  Make YouTube thumbnail →
                </Link>
              </div>
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Channel banner</h3>
                  <span className="font-mono text-sm text-primary">2560 × 1440 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  The full banner size is 2560×1440px, but safe zone for all devices is the central
                  1546×423px. Keep all important content (logo, tagline) within the safe zone. YouTube
                  crops the banner differently on TV, desktop, tablet, and mobile.
                </p>
                <Link href="/youtube-banner-maker" className="text-primary text-sm hover:underline mt-2 inline-block">
                  Make YouTube banner →
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Instagram Image Sizes</h2>
            <p>
              Instagram supports multiple aspect ratios in the feed. The platform re-compresses all
              uploaded images — using JPG at quality 85–90 before upload minimizes visible
              compression artifacts after Instagram processes the image.
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  type: 'Square post',
                  size: '1080 × 1080 px',
                  note: 'The original Instagram format. Displays at full width in the feed on mobile. Best for products and portraits where vertical framing is not critical.',
                },
                {
                  type: 'Portrait post (recommended)',
                  size: '1080 × 1350 px',
                  note: '4:5 ratio — takes up more vertical space in the feed, which means more screen real estate and typically higher engagement. The best default for most content.',
                },
                {
                  type: 'Landscape post',
                  size: '1080 × 566 px',
                  note: '1.91:1 ratio. Takes less vertical space in the feed. Best for wide scenes and group shots where cropping to square or portrait would lose important content.',
                },
                {
                  type: 'Story and Reel',
                  size: '1080 × 1920 px',
                  note: '9:16 full-screen vertical format. Keep text and key elements in the center 80% of the frame — top and bottom 14% may be obscured by UI elements.',
                },
              ].map(({ type, size, note }) => (
                <div key={type} className="border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm">{type}</h3>
                    <span className="font-mono text-sm text-primary">{size}</span>
                  </div>
                  <p className="text-text-muted text-sm">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <Link href="/instagram-post-maker" className="text-primary text-sm hover:underline">
                Make Instagram post (1080×1080px) →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Twitter / X Image Sizes</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Header / banner</h3>
                  <span className="font-mono text-sm text-primary">1500 × 500 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  3:1 ratio. Displays behind your profile photo, which covers the bottom-left corner.
                  Keep important content away from the bottom-left 20% of the banner.
                </p>
                <Link href="/twitter-header-maker" className="text-primary text-sm hover:underline mt-2 inline-block">
                  Make Twitter header →
                </Link>
              </div>
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Post image</h3>
                  <span className="font-mono text-sm text-primary">1200 × 675 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  16:9 ratio for single image tweets. Twitter crops the preview in the timeline — the
                  full image is only shown when clicked. Design so the center of the image communicates
                  the key message at the cropped preview size.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">LinkedIn Image Sizes</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Personal profile banner</h3>
                  <span className="font-mono text-sm text-primary">1584 × 396 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  4:1 ratio. Displays differently on desktop vs mobile — desktop shows more width,
                  mobile crops to a narrower center strip. Keep all text and logos in the central 60%
                  of the banner width.
                </p>
                <Link href="/linkedin-banner-maker" className="text-primary text-sm hover:underline mt-2 inline-block">
                  Make LinkedIn banner →
                </Link>
              </div>
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Post image</h3>
                  <span className="font-mono text-sm text-primary">1200 × 627 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  1.91:1 ratio. LinkedIn is primarily a desktop platform, so the full image is more
                  visible than on mobile-first platforms. Text-heavy images perform well on LinkedIn
                  — use PNG for sharper text rendering.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Facebook Image Sizes</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Cover photo</h3>
                  <span className="font-mono text-sm text-primary">851 × 315 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  Displays at 851×315px on desktop, 640×360px on mobile. Your profile photo overlaps
                  the bottom-left corner on desktop. Keep the central area clear of the profile photo
                  overlap zone.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Post / shared image</h3>
                  <span className="font-mono text-sm text-primary">1200 × 630 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  This is also the recommended OG image size — the image that appears when a URL is
                  shared on Facebook. Any page you want to share on Facebook should have an OG image
                  at 1200×630px.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">TikTok and Pinterest</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">TikTok video cover</h3>
                  <span className="font-mono text-sm text-primary">1080 × 1920 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  9:16 full vertical. TikTok is an entirely mobile-first platform — all content is
                  designed for portrait orientation. The profile grid crops covers to a square center,
                  so keep the key visual in the center third.
                </p>
              </div>
              <div className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Pinterest Pin</h3>
                  <span className="font-mono text-sm text-primary">1000 × 1500 px</span>
                </div>
                <p className="text-text-muted text-sm">
                  2:3 ratio. Pinterest strongly favors vertical images — taller pins take more space
                  in the masonry grid and receive more impressions. The 2:3 ratio is the sweet spot.
                  Avoid going taller than 1:2.1 as Pinterest crops very tall images.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Platform Re-compression Matters</h2>
            <p>
              Every major social platform re-compresses images when you upload them. Instagram,
              Facebook, Twitter, and LinkedIn all apply their own lossy compression to reduce storage
              and delivery costs. This means:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-main">Upload at exact recommended dimensions.</strong>{' '}
                Uploading a larger image (e.g., 2160×2160px for an Instagram post) forces the platform
                to downsample first, then compress — two rounds of quality loss.
              </li>
              <li>
                <strong className="text-text-main">Use JPG at quality 85–90.</strong>{' '}
                Starting from an already-compressed file adds platform compression on top — quality
                loss compounds. Start from the original or a high-quality export.
              </li>
              <li>
                <strong className="text-text-main">Use PNG for text-heavy designs.</strong>{' '}
                JPEG compression introduces blocky artifacts around high-contrast text edges. PNG
                preserves sharp text before the platform recompresses it.
              </li>
              <li>
                <strong className="text-text-main">Don&apos;t upload WebP to social media.</strong>{' '}
                Most platforms do not accept WebP. Convert to JPG or PNG before uploading.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Create Images at the Right Size</h2>
            <p>
              ClickThumb creates images at exactly the right dimensions for each platform — no manual
              resizing needed.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-text-muted">
              <li>
                <Link href="/youtube-thumbnail-maker" className="text-primary hover:underline">YouTube Thumbnail Maker</Link>
                {' '}— 1280×720px
              </li>
              <li>
                <Link href="/youtube-banner-maker" className="text-primary hover:underline">YouTube Banner Maker</Link>
                {' '}— 2560×1440px
              </li>
              <li>
                <Link href="/instagram-post-maker" className="text-primary hover:underline">Instagram Post Maker</Link>
                {' '}— 1080×1080px
              </li>
              <li>
                <Link href="/twitter-header-maker" className="text-primary hover:underline">Twitter Header Maker</Link>
                {' '}— 1500×500px
              </li>
              <li>
                <Link href="/linkedin-banner-maker" className="text-primary hover:underline">LinkedIn Banner Maker</Link>
                {' '}— 1584×396px
              </li>
              <li>
                <Link href="/facebook-cover-maker" className="text-primary hover:underline">Facebook Cover Maker</Link>
                {' '}— 851×315px
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What is the standard social media image size?',
                  a: 'There is no single standard. Common sizes: Instagram post 1080×1080px, YouTube thumbnail 1280×720px, Twitter header 1500×500px, LinkedIn banner 1584×396px. Each platform has its own requirements — always use the platform-specific size.',
                },
                {
                  q: 'What size should Instagram posts be in 2026?',
                  a: 'Instagram post sizes: Square 1080×1080px (1:1), Portrait 1080×1350px (4:5, recommended for more feed space), Landscape 1080×566px, Story/Reel 1080×1920px (9:16).',
                },
                {
                  q: 'What is the LinkedIn banner size?',
                  a: 'LinkedIn personal profile banner: 1584×396px. LinkedIn company page banner: 1128×191px. Keep important content in the central 60% of the width to account for mobile cropping.',
                },
                {
                  q: 'What size is a Facebook cover photo?',
                  a: 'Facebook cover photo: 851×315px on desktop, displayed at 640×360px on mobile. Your profile photo overlaps the bottom-left corner — keep key content away from that area.',
                },
                {
                  q: 'Do social media platforms compress images?',
                  a: 'Yes. All platforms re-compress uploaded images. To minimize quality loss: upload at exact recommended dimensions, use JPG at quality 85–90, use PNG for text-heavy designs, and never upload already-compressed files.',
                },
                {
                  q: 'What image format should I use for social media?',
                  a: 'JPG at quality 85–90 for photographs and complex images. PNG for graphics with text, flat colors, or sharp edges. Most platforms do not accept WebP — convert to JPG or PNG before uploading.',
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
      </article>
    </main>
  )
}
