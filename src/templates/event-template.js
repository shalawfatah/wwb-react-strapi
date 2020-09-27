
import Layout from '../components/layout'
import ButtonMiddle from '../components/utilities/ButtonMiddle'
import Link from 'gatsby-link'
import {FiChevronLeft} from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import Img from 'gatsby-image'


import React from 'react'

const eventsTemplate = ({data}) => {
    const {summary, title, date, time, location, photo, website, content, ticket} = data.strapiEvents
    return (
        <Layout>
            <SEO title={title} description={summary} />
            <section className="text-gray-700 body-font py-5">
                <Link fade to="/events/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </Link>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Img alt="content" className="object-cover object-center h-full w-full" fluid={photo.childImageSharp.fluid.src} />
                    </div>
                    <div className="container px-5 py-10 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-10">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 font-bold">{title} <br /> <span className="text-lg font-thin ">{summary}</span></h1>
                        <div>
                            <Link to={ticket}>
                            <ButtonMiddle text="Tickets"/>
                            </Link>
                        <ButtonMiddle text="Website" link={website} />
                        </div>
                        </div>
                        <div className="lg:w-2/3 flex flex-col sm:flex-row items-start mx-auto">
                        <h1 className="flex-grow  text-2xl font-medium title-font text-gray-900 font-bold lg:w-2/3">About this Event <br /> <span className="text-lg font-thin para">{content}</span></h1>
                        <div className="event-shadow w-1/3 mx-6">
                        <h1 className="flex-grow text-2xl font-medium title-font text-gray-900 font-bold lg:w-full">Date and Time <br /><span className="text-sm font-thin para">{date}</span> <br /> <span className="text-sm font-thin para">{time}</span></h1>
                        <h1 className="flex-grow text-2xl font-medium title-font text-gray-900 font-bold">Location<br /> <span className="text-sm font-thin para"><ReactMarkdown source={location} /></span></h1>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </section>
                
            </Layout>
    )
}

export default eventsTemplate

export const query = graphql`
    query getSingleEvent($slug: String) {
        strapiEvents(slug: { eq: $slug }) {
            summary
            title
            website
            content
            date(formatString: "DD MMMM YYYY")
            time
            location
            ticket
            photo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
    }
`