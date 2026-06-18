import Link from "next/link";

const toolGroups = [
  {
    heading: "YouTube Thumbnail Makers",
    tools: [
      {
        href: "/youtube-thumbnail-maker",
        title: "YouTube Thumbnail Maker",
        desc: "Create eye-catching thumbnails at 1280×720px. Bold text, templates, instant download.",
      },
      {
        href: "/youtube-banner-maker",
        title: "YouTube Banner Maker",
        desc: "Design a channel art banner at 2560×1440px. Looks great on TV, desktop, and mobile.",
      },
    ],
  },
  {
    heading: "Gaming Thumbnail Makers",
    tools: [
      {
        href: "/gaming-thumbnail-maker",
        title: "Gaming Thumbnail Maker",
        desc: "Neon, fire, and cyberpunk templates built for gaming content. 1280×720px.",
      },
      {
        href: "/roblox-thumbnail-maker",
        title: "Roblox Thumbnail Maker",
        desc: "Roblox Red, Neon Obby, and Rare Item templates for Roblox YouTube creators.",
      },
      {
        href: "/minecraft-thumbnail-maker",
        title: "Minecraft Thumbnail Maker",
        desc: "Grass Block, Diamond Mine, and Nether Portal templates for Minecraft creators.",
      },
      {
        href: "/fortnite-thumbnail-maker",
        title: "Fortnite Thumbnail Maker",
        desc: "Storm Eye, Zero Point, and Legendary Loot templates for Fortnite content creators.",
      },
      {
        href: "/valorant-thumbnail-maker",
        title: "Valorant Thumbnail Maker",
        desc: "Agent Impact, ACE Gold, and Clutch Navy templates for Valorant YouTube creators.",
      },
      {
        href: "/call-of-duty-thumbnail-maker",
        title: "Call of Duty Thumbnail Maker",
        desc: "Military Dark, Combat Orange, and Camo Green templates for COD Warzone & MW3 creators.",
      },
      {
        href: "/apex-legends-thumbnail-maker",
        title: "Apex Legends Thumbnail Maker",
        desc: "Champion Orange, Legend Gold, and Dark Red templates for Apex Legends creators.",
      },
      {
        href: "/gta-thumbnail-maker",
        title: "GTA Thumbnail Maker",
        desc: "GTA Gold, Night Purple, and Wanted Red templates for GTA 5 and GTA Online creators.",
      },
      {
        href: "/cs2-thumbnail-maker",
        title: "CS2 Thumbnail Maker",
        desc: "CT Blue, T-Side Orange, and Pro Minimal templates for Counter-Strike 2 creators.",
      },
      {
        href: "/pubg-thumbnail-maker",
        title: "PUBG Thumbnail Maker",
        desc: "Chicken Dinner, Military Tan, and Night Drop templates for PUBG Mobile and PC creators.",
      },
      {
        href: "/among-us-thumbnail-maker",
        title: "Among Us Thumbnail Maker",
        desc: "Impostor Red, Crewmate Blue, and Emergency Meeting templates for Among Us content.",
      },
    ],
  },
  {
    heading: "Social Media Image Makers",
    tools: [
      {
        href: "/instagram-post-maker",
        title: "Instagram Post Maker",
        desc: "Square 1080×1080 or Story 1080×1920. Perfect for Reels covers and feed posts.",
      },
      {
        href: "/tiktok-thumbnail-maker",
        title: "TikTok Thumbnail Maker",
        desc: "Create TikTok cover images at 1080×1920px. Viral Pink, Dark Glow, Trending Yellow templates.",
      },
      {
        href: "/twitter-header-maker",
        title: "Twitter Header Maker",
        desc: "Create a professional Twitter/X profile header at 1500×500px.",
      },
      {
        href: "/linkedin-banner-maker",
        title: "LinkedIn Banner Maker",
        desc: "Stand out on LinkedIn with a custom 1584×396px profile banner.",
      },
      {
        href: "/facebook-cover-maker",
        title: "Facebook Cover Maker",
        desc: "Design a Facebook cover photo at 851×315px. Free.",
      },
    ],
  },
  {
    heading: "Streaming & Branding Tools",
    tools: [
      {
        href: "/twitch-banner-maker",
        title: "Twitch Banner Maker",
        desc: "Create a Twitch offline screen at 1920×1080px. Gaming templates, instant download.",
      },
      {
        href: "/og-image-generator",
        title: "OG Image Generator",
        desc: "Generate Open Graph preview images at 1200×630px for websites and blogs.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight">
            YouTube Thumbnail Maker &amp; Social Image Creator
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
            Create platform-perfect images in seconds — YouTube thumbnails,
            Instagram posts, Twitter headers, and more. Free to use, no signup.{" "}
            <Link
              href="/upgrade"
              className="text-primary hover:underline font-medium"
            >
              Pro
            </Link>{" "}
            removes watermark and unlocks all templates.
          </p>
          <Link
            href="/youtube-thumbnail-maker"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors duration-150"
          >
            Start with YouTube Thumbnail →
          </Link>
        </div>

        {/* Tool groups */}
        <div className="space-y-10">
          {toolGroups.map((group) => (
            <section key={group.heading}>
              <h2 className="text-lg font-bold text-text-main mb-4">
                {group.heading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block rounded-2xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all duration-150 group"
                  >
                    <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors text-sm mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {tool.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Intro */}
        <div className="space-y-3 text-sm text-text-muted leading-relaxed max-w-2xl mx-auto text-center">
          <p>
            ClickThumb is a free, browser-based image creator built for content
            creators who need platform-correct visuals without a design
            subscription. Every tool produces images at the exact dimensions
            each platform requires — 1280×720px for YouTube thumbnails,
            1080×1920px for TikTok covers, 1584×396px for LinkedIn banners — so
            your uploads are never cropped, stretched, or rejected.
          </p>
          <p>
            No account to create, no premium element traps on exports.
            Everything runs entirely in your browser. Whether you&apos;re a
            YouTuber making weekly thumbnails, a gamer who needs Roblox or
            Fortnite templates, or a business creating social graphics, choose a
            tool above or{" "}
            <a
              href="/blog/"
              className="text-primary hover:underline font-medium"
            >
              read the blog
            </a>{" "}
            for design guides and platform size specs.
          </p>
        </div>

        {/* About section */}
        <div className="space-y-6 text-sm text-text-muted leading-relaxed border-t border-border pt-10">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-text-main">
              What Is ClickThumb?
            </h2>
            <p>
              ClickThumb is a free, browser-based image creator built for
              content creators who need platform-correct visuals without a
              design subscription. Every tool on this site produces images at
              the exact dimensions each platform requires — 1280×720px for
              YouTube thumbnails, 1080×1920px for TikTok covers, 1584×396px for
              LinkedIn banners — so your uploads never get cropped, stretched,
              or rejected.
            </p>
            <p>
              All creation happens inside your browser. No files are uploaded to
              a server, no account is required. Free downloads include a small
              watermark — Pro users download without watermark. The canvas
              editor runs on the Web Canvas API, which means it works on any
              modern device — desktop, tablet, or phone — without installing
              software.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-text-main">Who Is It For?</h2>
            <p>
              ClickThumb is designed for YouTube creators who need thumbnails
              fast, gaming channels that want neon and high-contrast templates
              ready to customize, and social media managers who produce covers
              and posts across multiple platforms every week. It is also useful
              for small business owners who need a professional LinkedIn banner
              or Facebook cover without paying for a design tool they will only
              use occasionally.
            </p>
            <p>
              Each tool includes pre-built templates matched to the content type
              — a YouTube thumbnail maker includes bold text overlays and
              high-contrast backgrounds designed for click-through rate, while a
              LinkedIn banner maker includes clean, professional layouts suited
              for personal branding and job seeking.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-text-main">
              How to Use ClickThumb
            </h2>
            <p>
              Choose a tool from the list above — for example, the{" "}
              <a
                href="/youtube-thumbnail-maker"
                className="text-primary hover:underline font-medium"
              >
                YouTube Thumbnail Maker
              </a>{" "}
              or the{" "}
              <a
                href="/gaming-thumbnail-maker"
                className="text-primary hover:underline font-medium"
              >
                Gaming Thumbnail Maker
              </a>
              . Select a template, type your title and subtitle, and optionally
              upload a background image. Download the result as a JPG in one
              click. The entire process from opening the tool to downloading the
              finished image takes under 60 seconds for most use cases.
            </p>
            <p>
              If you need to reduce the file size of your finished image before
              uploading to YouTube or a social platform, use{" "}
              <a
                href="https://compressimg.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                CompressImg.pro
              </a>{" "}
              — a companion tool that compresses JPG, PNG, and WebP files
              entirely in your browser, with no uploads required.
            </p>
          </div>
        </div>

        {/* Cross-promo */}
        <div className="rounded-2xl border border-border bg-surface p-5 text-center space-y-2">
          <p className="text-sm font-semibold text-text-main">
            Need to compress your image?
          </p>
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
  );
}
