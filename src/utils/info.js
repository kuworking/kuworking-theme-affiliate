const site = 'kuworking'
const basePath = '/'

module.exports = {
  standalone: true,
  website: {
    basePath: basePath,
  },
  metaData: {
    site: site,
    title: 'Gatsby Theme kuworking affiliate',
    description: 'Gatsby Theme kuworking affiliate',
    siteUrl: 'https://www.kuworking.com',
  },
  tagManager: '',
  siteMapExclude: ['/dummy'],
  folders_to_check: ['content/json'],
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
