/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://webdevshubhanshu.netlify.app', // replace with your site URL
  generateRobotsTxt: true, // (optional) generate robots.txt
  generateIndexSitemap: false,  // 👈 this forces a single sitemap.xml but if we have mutiple page so we can remove this line
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
};
