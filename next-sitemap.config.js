/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clickthumb.pro',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/youtube-thumbnail-maker': 1.0,
      '/': 0.9,
    }
    return {
      loc: path,
      priority: priorities[path] ?? 0.7,
      changefreq: 'weekly',
      lastmod: new Date().toISOString(),
    }
  },
}
