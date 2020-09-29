import React from 'react'
import Layout from '../components/layout'
import MainEvent from '../components/events/MainEvent'
import MarginalEvent from '../components/events/MarginalEvent'
import Pager from '../components/utilities/Pager'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

const Events = ({data, pageContext}) => {
    const {allStrapiEvents:{nodes:events}} = data
    return (
        <Layout>
          <SEO title="Events" />
          <div className="py-5">
              <MainEvent title={events[0].title} image={events[0].photo.childImageSharp.fluid.src} slug={events[0].slug} />
              <div className="flex flex-wrap">
                  {events.map((event)=> {
                      return <MarginalEvent title={event.title} summary={event.summary} date={event.date} location={event.location} image={event.photo.childImageSharp.fluid} slug={event.slug} />
                  })}
              </div>
              <div className="py-16">
                <Pager pageContext={pageContext} />
                </div>
              </div>
        </Layout>
    )
}

export default Events

export const query = graphql`
query($skip: Int!, $limit: Int!)
  {
    allStrapiEvents (
        sort: {order: ASC, fields: date}
        skip: $skip
        limit: $limit
        ) {
      nodes {
        summary
        title
        slug
        date(formatString: "DD MMMM YYYY")
        location
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`