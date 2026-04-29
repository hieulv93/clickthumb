/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://click-thumb.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/icon.svg'],
  transform: async (config, path) => {
    const priorities = {
      '/': 0.9,
      '/blog': 0.8,
      '/blog/how-to-increase-youtube-ctr': 0.8,
      '/blog/how-to-make-gaming-thumbnail': 0.8,
      '/blog/social-media-image-sizes': 0.8,
      '/blog/youtube-thumbnail-size-guide': 0.8,
      '/youtube-thumbnail-maker': 1.0,
      '/gaming-thumbnail-maker': 0.85,
      '/instagram-post-maker': 0.85,
      '/tiktok-thumbnail-maker': 0.8,
      '/roblox-thumbnail-maker': 0.8,
      '/call-of-duty-thumbnail-maker': 0.8,
      '/minecraft-thumbnail-maker': 0.75,
      '/gta-thumbnail-maker': 0.75,
      '/apex-legends-thumbnail-maker': 0.75,
      '/fortnite-thumbnail-maker': 0.75,
      '/among-us-thumbnail-maker': 0.75,
      '/cs2-thumbnail-maker': 0.75,
      '/youtube-banner-maker': 0.75,
      '/twitter-header-maker': 0.7,
      '/valorant-thumbnail-maker': 0.7,
      '/pubg-thumbnail-maker': 0.7,
      '/linkedin-banner-maker': 0.7,
      '/facebook-cover-maker': 0.7,
      '/og-image-generator': 0.6,
      '/twitch-banner-maker': 0.85,
    }
    return {
      loc: path,
      priority: priorities[path] ?? 0.7,
      changefreq: 'weekly',
      lastmod: new Date().toISOString(),
    }
  },
}
