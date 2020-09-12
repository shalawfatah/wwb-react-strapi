import React from 'react'
import Layout from '../components/layout'
import MainEvent from '../components/events/MainEvent'
import MarginalEvent from '../components/events/MarginalEvent'

const Events = ({data}) => {
    const {allStrapiEvents:{nodes:events}} = data
    return (
        <Layout>
          <div className="py-5">
              <MainEvent title={events[0].title} image={events[0].photo.childImageSharp.fluid.src} slug={events[0].slug} />
              <div className="flex flex-wrap">
                  {events.map((event)=> {
                      return <MarginalEvent title={event.title} summary={event.summary} date={event.date} location={event.location} image={event.photo.childImageSharp.fluid.src} slug={event.slug} />
                  })}
              </div>
              </div>
        </Layout>
    )
}

export default Events

export const query = graphql`
  {
    allStrapiEvents (sort: {order: ASC, fields: date}) {
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