
import Layout from '../components/layout'
import ButtonMiddle from '../components/utilities/ButtonMiddle'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {FiChevronLeft} from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import React from 'react'
import DayJS from 'react-dayjs'


const eventsTemplate = ({data}) => {
    const {summary, title, date, duration, location, photo, website, content, price, slug} = data.strapiEvents
    const currently = `https://thirsty-poitras-635a61.netlify.app/events/${slug}`

    return (
        <Layout>
            <SEO title={title} description={summary} />
            <section className="text-gray-700 body-font py-5">
                <AniLink fade to="/events/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </AniLink>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-80 overflow-hidden">
                        <Img alt={title} className="object-cover object-center h-full w-full" fluid={photo.childImageSharp.fluid} />
                    </div>
                    <div className="container px-5 py-10 mx-auto">
                        <div className="lg:w-5/6 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-10">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 font-bold">{title} <br /> <span className="text-lg font-thin ">{summary}</span></h1>
                        <div>
                        <li className="list-none font-semibold m-1 flex flex-wrap justify-center">
                            <button className="snipcart-add-item flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button"
                            data-item-id={title}
                            data-item-price={price}
                            data-item-url={currently}
                            data-item-description={summary}
                            data-item-name={title}
                            >Tickets</button>
                        </li>
                        <ButtonMiddle text="Website" link={website} />
                        </div>
                        </div>
                        <div className="lg:w-5/6 flex flex-col sm:flex-row items-start mx-auto">
                        <h1 className="flex-grow  text-2xl font-medium title-font text-gray-900 font-bold lg:w-2/3">About this Event <br /> <span className="text-lg font-thin para">{content}</span></h1>
                        <div className="event-shadow w-1/3 mx-6">
                        <h1 className="flex-grow text-2xl font-medium title-font text-gray-900 font-bold lg:w-full">Date and Duration<br /><span className="text-sm font-thin para">Date: <DayJS format="dddd, DD MMM YYYY">{date}</DayJS></span> <br /> <span className="text-sm font-thin para bg-gray-600 text-white p-2 rounded">Time: <DayJS format="HH:mm">{date}</DayJS></span> <br /> <span className="text-sm font-thin para">Duration: {duration}</span></h1>
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
            date
            duration
            location
            slug
            price
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