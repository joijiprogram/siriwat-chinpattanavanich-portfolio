const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Siriwat Chinpattanavanich Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Siriwat', // Alternative Site title for SEO
  siteTitleShort: 'Siriwat', // short_name for manifest
  siteHeadline: 'Siriwat Chinpattanavanich Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://siriwat-portfolio.firebaseapp.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Siriwat Chinpattanavanich Portfolio',
  author: 'Siriwat', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '', // Twitter Username
  ogSiteName: 'chinjoiji', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
