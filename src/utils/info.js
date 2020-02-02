const standalone = true
const basePath = '/'
const jsonPath = 'content/json'
const site = 'kuworking'

module.exports = {
  standalone: standalone,
  basePath: basePath,
  jsonPath: jsonPath,
  metaData: {
    site: site,
    title: 'Gatsby Theme kuworking affiliate',
    description: 'Gatsby Theme kuworking affiliate',
    siteUrl: 'https://www.kuworking.com',
  },
  tagManager: '',
  siteMapExclude: ['/dummy'],
  manifest: {
    name: site,
    short_name: site,
    start_url: basePath || '/',
    background_color: '#ffffff',
    theme_color: '#000000',
    display: `minimal-ui`,
    icon: `content/icons/favicon.png`,
    include_favicon: true,
  },
}
