module.exports = {
  siteMetadata: {
    title: `Worldwide Bee`,
    description: `The Worldwide Bee Organization was founded to connect proactive individuals dedicated to sharing, designing, and constructing valuable solutions that can truly make a difference in the bee and honey industry.`,
    author: `@shalawfatah`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blogs`, `educations`, `apitherapies`, `industries`, `events`, `genomes`, `education-categories`, `blog-categories`, `news-categories`, `our-people`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://app.us2.list-manage.com/subscribe/post?u=7eca46a8e74aa50e3ee1e7681&amp;id=474127183f', 
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wwb-template`,
        short_name: `WWB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
