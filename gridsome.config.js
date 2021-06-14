// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Olasunkanmi Portfolio',
  siteDescription: 'Olasunkanmi | A Frontend developer',
  siteUrl: 'olasunkanmi.dev',
  metadata: {
    author: 'Alabi Olasunkanmi',
    twitter: {
      site: 'olasunkanmi.dev',
      creator: '@sun_kanmi'
    }
  },
  templates: {
    Portfolio: '/project/:title'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Portfolio',
        path: 'content/works/**/*.md',
        route:'/works/:slug'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },
  ],

 
}