const FALLBACK_WEBSITE_URL = 'https://lesmuses.lalique.com'

module.exports = {
  siteUrl: process.env.WEBSITE_URL || FALLBACK_WEBSITE_URL,
  generateRobotsTxt: true, // (optional)
  exclude: ['/404', '/500'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        [process.env.VERCEL_ENV !== 'preview' && process.env.VERCEL_ENV !== 'development' ? 'allow' : 'disallow']: '/',
      },
    ],
  },
}
