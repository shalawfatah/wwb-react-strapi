import React from 'react'
import Layout from '../components/layout'
import Header from '../components/utilities/Header'
import {FiChevronLeft} from 'react-icons/fi'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const beeTemplate = ({data}) => {
    const {bee_name, 
            bee_genome, 
            content, 
            bee_photo, 
            bee_icon,
            youtube,
            size,
            geography,
            shape,
            color,
            antenna
          } = data.strapiGenomes
    return (
        <Layout>
          <SEO title={bee_name} description={bee_genome}/>
                <section className="text-gray-700 body-font py-5">
                <AniLink fade to="/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </AniLink>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Img alt="content" className="object-cover object-center h-full w-full" fluid={bee_photo.childImageSharp.fluid} />
                    </div>
                    <div className="py-2">
                    <Header text={bee_name}/>
                    <p className="text-2xl pt-4 text-grey-700 text-center text-gray-600">{bee_genome}</p>
                    </div>



                    <section className="text-gray-700 body-font">
                    <div className="container px-5 py-6 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full justify-center">
                          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">SIZE</h2>
                                  <p className="leading-relaxed">{size}</p>
                              </div>
                            </div>
                            <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">GEOGRAPHY</h2>
                                <p className="leading-relaxed">{geography}</p>
                              </div>
                            </div>
                            <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                  <circle cx="12" cy="5" r="3"></circle>
                                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">SHAPE</h2>
                                <p className="leading-relaxed">{shape}</p>
                              </div>
                            </div>
                            <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">COLOR</h2>
                                <p className="leading-relaxed">{color}</p>
                              </div>
                            </div>
                            <div className="flex relative">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                  <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">ANTENNA</h2>
                                <p className="leading-relaxed">{antenna}</p>
                              </div>
                            </div>
                          </div>
                          <Img className="w-1/2" fluid={bee_icon.childImageSharp.fluid} alt={bee_name} />
                      </div>
                      </div>
                    </section>


                        <div className="lg:w-5/6 sm:w-full sm:pl-8 sm:py-2 sm:border-l border-gray-300 sm:border-t-0 border-t sm:mt-0 text-center sm:text-left mx-auto">
                        {youtube ?  <iframe  title={bee_name} className="responsive-iframe" src={`${youtube}`} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ''}
                          <br />
                        <p className="leading-relaxed text-lg mb-4"><ReactMarkdown source={content} /></p>
                        </div>
                    </div>
                </div>
                </section>
                </Layout>
    )
}

export default beeTemplate

export const query = graphql`
    query getSingleGenome($slug: String) {
        strapiGenomes(slug: { eq: $slug }) {
        bee_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bee_icon {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bee_name
        bee_genome
        content
        youtube
        size
        geography
        shape
        color
        antenna
      }
    }
`
