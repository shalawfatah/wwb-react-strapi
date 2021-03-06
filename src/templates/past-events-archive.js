import React from 'react'
import Layout from '../components/layout'
import MarginalEvent from '../components/events/MarginalEvent'
import Pager from '../components/utilities/Pager'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import {navigate} from 'gatsby-link'
import TextHeader from '../components/utilities/TextHeader'
import {FiChevronLeft} from 'react-icons/fi'
import { format } from 'date-fns'

const Events = ({data, pageContext}) => {
    const {allStrapiEvents:{nodes:events}} = data

    return (
        <Layout>
          <SEO title="Events" />
          <div className="py-5">
          <button onClick={()=> navigate(-1)}>
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
        </button>
            <TextHeader text="Past Events" />
              <div className="flex flex-wrap justify-center">
                  {events.map((event)=> {
                      return ( 
                      <div key={event.id}>
                      {new Date(event.date) < new Date() ?
                      <MarginalEvent title={event.title} summary={event.summary} date={format(new Date(event.date), 'dd MMMM, yyyy')} location={event.location} image={event.photo.childImageSharp.fluid} slug={event.slug} />
                      :
                      ''
                    }
                      </div> )
                  })}
              </div>
              <div className="py-16 flex justify-center items-end">
              <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-700 rounded-full outline-none transition-all duration-500 ease" onClick={()=> navigate(`/events`)}>
                        Upcoming Events
                    </button>
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
        id
        slug
        date
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