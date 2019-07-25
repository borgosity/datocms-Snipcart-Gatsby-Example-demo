module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'OWE4ZWQ5NjUtMGZmNi00NjM0LWEwYjUtZjIwMjVkY2RjOGNmNjM2OTk2NTQ0NzMzMjE1ODc0',
        autopop: true
      }
    },
  ],
}
