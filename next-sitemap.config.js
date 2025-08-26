/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://webdevshubhanshu.netlify.app', // replace with your site URL
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
};
