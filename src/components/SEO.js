import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'


const SEO = ({title, description}) => {
    const {site:{siteMetadata:{url, twitterUsername, siteTitle, image, siteDescription, author}}} = useStaticQuery(query)
    return (
        <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDescription} />
            <meta name="image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={`${url}${image}`} />

        </Helmet>
    )
}

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        url
        twitterUsername
        siteTitle: title
        image
        siteDescription: description
        author
      }
    }
  }
`