module.exports = {
  siteMetadata: {
    title: `Static-pie-example`,
    description: `Static site example.`,
    author: `pie`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./static/navigation.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./static/posts.json`,
      },
    },
  ],
}
