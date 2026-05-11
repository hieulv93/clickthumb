import Link from 'next/link'

const posts = [
  {
    slug: 'how-to-make-thumbnail-without-canva',
    title: 'How to Make a Thumbnail Without Canva (Free, 2026)',
    description:
      'Make YouTube and social media thumbnails without Canva — no subscription, no watermark, no account. Free browser-based tool with platform-correct sizes built in.',
    date: '2026-05-11',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'linkedin-banner-size-guide',
    title: 'LinkedIn Banner Size Guide 2026 — Dimensions, Design Tips & Examples',
    description:
      'The exact LinkedIn banner size for 2026 — 1584×396px, safe zones, what gets cropped on mobile, and how to design a banner that converts profile visitors.',
    date: '2026-05-07',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'twitter-header-size-guide',
    title: 'Twitter / X Header Size Guide 2026 — Exact Dimensions & Safe Zones',
    description:
      'The exact Twitter (X) header size for 2026 — 1500×500px, what gets hidden by the profile picture, and how to design a header that looks great on all devices.',
    date: '2026-05-06',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'instagram-post-size-guide',
    title: 'Instagram Post Size Guide 2026 — All Formats & Dimensions',
    description:
      'Exact Instagram post sizes for 2026 — square, portrait, landscape, Stories, Reels, and carousel. The right dimensions for every format so your images never get cropped.',
    date: '2026-05-06',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-make-fortnite-thumbnail',
    title: 'How to Make a Fortnite Thumbnail (Free, 2026 Guide)',
    description:
      'Step-by-step guide to making a Fortnite thumbnail that gets more clicks — correct size, color strategy, text rules, character placement, and common mistakes to avoid.',
    date: '2026-05-05',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'tiktok-cover-size-guide',
    title: 'TikTok Cover Size Guide 2026 — Exact Dimensions & Design Tips',
    description:
      'The exact TikTok cover size for 2026 — 1080×1920px explained, what gets cropped in the grid view, and how to design a cover that looks great everywhere.',
    date: '2026-05-05',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-make-youtube-thumbnail-without-photoshop',
    title: 'How to Make a YouTube Thumbnail Without Photoshop (Free, 2026)',
    description:
      'Make professional YouTube thumbnails for free without Photoshop — step-by-step guide covering the right size, templates, design tips, and common mistakes to avoid.',
    date: '2026-05-04',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-increase-youtube-ctr',
    title: 'How to Increase YouTube CTR: 8 Thumbnail Tips That Work',
    description:
      'Improve your YouTube click-through rate with proven thumbnail design strategies. Contrast, faces, bold text, A/B testing — practical tips backed by creator data.',
    date: '2026-04-29',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'how-to-make-gaming-thumbnail',
    title: 'How to Make a Gaming Thumbnail That Gets More Clicks',
    description:
      'Step-by-step guide to creating gaming thumbnails that increase CTR — correct size, layout, face reactions, bold text rules, color strategy, and the most common mistakes.',
    date: '2026-04-28',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'social-media-image-sizes',
    title: 'Social Media Image Sizes 2026: The Complete Guide',
    description:
      'Exact image dimensions for every social media platform in 2026. Instagram, YouTube, Twitter, LinkedIn, Facebook, TikTok — posts, covers, stories, banners.',
    date: '2026-04-28',
    readTime: '9 min read',
    category: 'Guide',
  },
  {
    slug: 'youtube-thumbnail-size-guide',
    title: 'YouTube Thumbnail Size: The Complete 2026 Guide',
    description:
      'The exact dimensions, file size limits, and format requirements for YouTube thumbnails — plus design tips to improve click-through rate.',
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'Guide',
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-main mb-2">Blog</h1>
      <p className="text-text-muted mb-10">
        Thumbnail design tips, social media image guides, and creator resources.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-border rounded-xl p-6 hover:border-primary transition-colors duration-150"
          >
            <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
              <span className="bg-surface px-2 py-0.5 rounded font-medium">{post.category}</span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-text-main mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-primary transition-colors duration-150"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary font-medium text-sm hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
