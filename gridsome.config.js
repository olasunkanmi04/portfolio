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
        path: 'content/projects/**/*.md',
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['Portfolio'],
        coverField: 'cover_image'
      }
    }
  ],
  transformers: {
    remark: {
    }
  },
 
}