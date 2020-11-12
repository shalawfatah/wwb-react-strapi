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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
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
        apiURL: `http://localhost:1337`,
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
          endpoint: 'https://app.us2.list-manage.com/subscribe/post?u=7eca46a8e74aa50e3ee1e7681&amp;id=474127183f', 
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
  {
    resolve: 'gatsby-plugin-snipcartv3',
    options: {
      apiKey: 'OTlmOGRlNTAtYTZmMS00YmQ0LTk2ZjktNGMwNTJiNzk3NTg0NjM3Mzk2MzQ2MjMxNTMyODAz',
      autopop: true
    }
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wordwide Bee`,
        short_name: `WWB`,
        start_url: `https://www.worldwidebee.org/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}