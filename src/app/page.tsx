import Link from 'next/link'

const tools = [
  {
    href: '/youtube-thumbnail-maker',
    title: 'YouTube Thumbnail Maker',
    desc: 'Create eye-catching thumbnails at 1280×720px. Bold text, templates, instant download.',
    badge: '500K searches/mo',
  },
  {
    href: '/gaming-thumbnail-maker',
    title: 'Gaming Thumbnail Maker',
    desc: 'Neon, fire, and cyberpunk templates built for gaming content. 1280×720px.',
    badge: '300K searches/mo',
  },
  {
    href: '/roblox-thumbnail-maker',
    title: 'Roblox Thumbnail Maker',
    desc: 'Roblox Red, Neon Obby, and Rare Item templates for Roblox YouTube creators.',
    badge: '200K searches/mo',
  },
  {
    href: '/minecraft-thumbnail-maker',
    title: 'Minecraft Thumbnail Maker',
    desc: 'Grass Block, Diamond Mine, and Nether Portal templates for Minecraft creators.',
    badge: '150K searches/mo',
  },
  {
    href: '/fortnite-thumbnail-maker',
    title: 'Fortnite Thumbnail Maker',
    desc: 'Storm Eye, Zero Point, and Legendary Loot templates for Fortnite content creators.',
    badge: '100K searches/mo',
  },
  {
    href: '/valorant-thumbnail-maker',
    title: 'Valorant Thumbnail Maker',
    desc: 'Agent Impact, ACE Gold, and Clutch Navy templates for Valorant YouTube creators.',
    badge: '80K searches/mo',
  },
  {
    href: '/apex-legends-thumbnail-maker',
    title: 'Apex Legends Thumbnail Maker',
    desc: 'Champion Orange, Legend Gold, and Dark Red templates for Apex Legends creators.',
    badge: '120K searches/mo',
  },
  {
    href: '/among-us-thumbnail-maker',
    title: 'Among Us Thumbnail Maker',
    desc: 'Impostor Red, Crewmate Blue, and Emergency Meeting templates for Among Us content.',
    badge: '100K searches/mo',
  },
  {
    href: '/instagram-post-maker',
    title: 'Instagram Post Maker',
    desc: 'Square 1080×1080 or Story 1080×1920. Perfect for Reels covers and feed posts.',
    badge: '200K searches/mo',
  },
  {
    href: '/youtube-banner-maker',
    title: 'YouTube Banner Maker',
    desc: 'Design a channel art banner at 2560×1440px. Looks great on TV, desktop, and mobile.',
    badge: '200K searches/mo',
  },
  {
    href: '/twitter-header-maker',
    title: 'Twitter Header Maker',
    desc: 'Create a professional Twitter/X profile header at 1500×500px.',
    badge: '100K searches/mo',
  },
  {
    href: '/linkedin-banner-maker',
    title: 'LinkedIn Banner Maker',
    desc: 'Stand out on LinkedIn with a custom 1584×396px profile banner.',
    badge: '80K searches/mo',
  },
  {
    href: '/facebook-cover-maker',
    title: 'Facebook Cover Maker',
    desc: 'Design a Facebook cover photo at 851×315px. Free, no watermark.',
    badge: '150K searches/mo',
  },
  {
    href: '/og-image-generator',
    title: 'OG Image Generator',
    desc: 'Generate Open Graph preview images at 1200×630px for websites and blogs.',
    badge: '50K searches/mo',
  },
]

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight">
            Free Thumbnail &amp; Social Image Maker
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
            Create platform-perfect images in seconds — YouTube thumbnails, Instagram posts, Twitter
            headers, and more. No signup, no watermark, 100% free.
          </p>
          <Link
            href="/youtube-thumbnail-maker"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors duration-150"
          >
            Start with YouTube Thumbnail →
          </Link>
        </div>

        {/* Tool grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block rounded-2xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all duration-150 group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="font-semibold text-text-main group-hover:text-primary transition-colors text-sm">
                  {tool.title}
                </p>
                <span className="flex-shrink-0 text-[10px] bg-drag-active text-primary font-medium px-2 py-0.5 rounded-full">
                  {tool.badge}
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{tool.desc}</p>
            </Link>
          ))}
        </div>

        {/* Cross-promo */}
        <div className="rounded-2xl border border-border bg-surface p-5 text-center space-y-2">
          <p className="text-sm font-semibold text-text-main">Need to compress your image?</p>
          <p className="text-xs text-text-muted">
            After creating your thumbnail, reduce file size before uploading.
          </p>
          <a
            href="https://compressimg.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
          >
            CompressImg.pro — Free Image Compressor →
          </a>
        </div>
      </div>
    </main>
  )
}
