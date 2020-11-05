import React from 'react'
import Layout from '../components/layout'
import MainEvent from '../components/events/MainEvent'
import MarginalEvent from '../components/events/MarginalEvent'
import Pager from '../components/utilities/Pager'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import {navigate} from 'gatsby-link'
import Header from '../components/utilities/Header'
import {FiChevronLeft} from 'react-icons/fi'
import DayJS from 'react-dayjs'


const Events = ({data, pageContext}) => {
    const {allStrapiEvents:{nodes:events}} = data

    return (
        <Layout>
          <SEO title="Events" />
          <div className="py-5">
          <button fade onClick={()=> navigate(-1)}>
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
        </button>
            <Header text="Past Events" />
              <div className="flex flex-wrap">
                  {events.map((event)=> {
                      return ( 
                      <>
                      {new Date(event.date) < new Date() ?
                      <MarginalEvent title={event.title} summary={event.summary} date={<DayJS format="dddd, DD MMM YYYY">{event.date}</DayJS>} location={event.location} image={event.photo.childImageSharp.fluid} slug={event.slug} />
                      :
                      ''
                    }
                      </> )
                  })}
              </div>
              <div className="py-16 flex justify-center items-end">
              <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-700 rounded-full outline-none transition-all duration-500 ease" fade onClick={()=> navigate(`/events`)}>
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