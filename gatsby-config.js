module.exports = {
  siteMetadata: {
    title: `Worldwide Bee`,
    description: `The Worldwide Bee Organization was founded to connect proactive individuals dedicated to sharing, designing, and constructing valuable solutions that can truly make a difference in the bee and honey industry.`,
    author: `@worldwidebee`,
    url: 'https://www.worldwidebee.org/',
    image: 'src/images/websitescreenshot.png',
    twitterUsername: '@bee_worldwide',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-smoothscroll`,
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
        apiURL: `https://wwb-backend.wl.r.appspot.com/`,
        queryLimit: 10000, // Default to 100
        contentTypes: [
                        `blogs`, 
                        `educations`, 
                        `apitherapies`, 
                        `industries`, 
                        `events`, 
                        `genomes`, 
                        `education-categories`, 
                        `blog-categories`, 
                        `news-categories`, 
                        `article-authors`
                      ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, 
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
  {
    resolve: 'gatsby-plugin-snipcartv3',
    options: {
      apiKey: process.env.SNIPCART_KEY,
      autopop: true
    }
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wordwide Bee`,
        short_name: `WWB`,
        start_url: process.env.API_URL,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}