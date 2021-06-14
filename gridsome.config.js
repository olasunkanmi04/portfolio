// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Olasunkanmi',
  templates: {
    Portfolio: '/project/:title'
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
  ],
  transformers: {
    remark: {
    }
  },
 
}