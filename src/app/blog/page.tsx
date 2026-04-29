import Link from 'next/link'

const posts = [
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
