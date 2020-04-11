module.exports = {
  siteMetadata: {
    title: 'Generic Website',
    description: 'A very generic website',
    keywords: 'generic website',
    siteUrl: 'https://www.danielbass.dev',
    author: {
      name: 'Daniel Bass',
      url: 'https://www.danielbass.dev',
      email: 'daniel.bass@mandg.com'
    },
    links: [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'About',
        url: '/about/'
      },
      {
        title: 'Contact us',
        url: '/contact-us/'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet'
  ]
}
