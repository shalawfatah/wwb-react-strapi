import React from 'react'
import Layout from '../components/layout'
import Header from '../components/utilities/Header'
import {FiChevronLeft} from 'react-icons/fi'
import {BiCurrentLocation} from 'react-icons/ai'
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M8 14h-8v-2h8.672l-.672 2zm-8 10v-8h24v8h-24zm2-2h20v-4h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v4zm9.398-12.26l-1.398 4.26 4.227-1.432-2.829-2.828zm9.774-9.74l2.828 2.828-8.587 8.554-2.828-2.828 8.587-8.554z"/>
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-5 h-6" viewBox="0 0 24 24">
                                <path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z"/>
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-5 h-6" viewBox="0 0 24 24">
                                  <path d="M10.499.471c.893-.628 2.108-.628 3.002 0 2.142 1.506 1.682 1.362 4.335 1.354 1.108-.004 2.091.682 2.429 1.696.813 2.427.527 2.052 2.679 3.544.899.623 1.275 1.733.928 2.744-.826 2.417-.83 1.953 0 4.381.347 1.011-.029 2.121-.928 2.744-2.151 1.492-1.866 1.117-2.679 3.544-.338 1.014-1.321 1.7-2.429 1.697-2.654-.009-2.193-.153-4.335 1.353-.894.629-2.109.629-3.002 0-2.143-1.505-1.682-1.363-4.335-1.353-1.108.003-2.091-.683-2.429-1.697-.812-2.43-.533-2.054-2.68-3.544-.898-.623-1.274-1.733-.927-2.744.827-2.418.83-1.953 0-4.381-.347-1.011.029-2.121.927-2.744 2.146-1.489 1.867-1.112 2.68-3.544.338-1.014 1.321-1.7 2.429-1.696 2.646.008 2.18.161 4.335-1.354" />
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-5 h-6" viewBox="0 0 24 24">
                                <path d="M12.031 0c-5.064 0-9.031 3.075-9.031 7v13.25c0 1.994 3 3.75 9.029 3.75 5.94 0 8.971-1.748 8.971-3.75v-13.25c0-3.925-3.939-7-8.969-7zm0 1c4.295 0 7.685 2.437 7.943 5.612-1.502-.958-4.506-1.612-7.974-1.612-3.467 0-6.472.654-7.975 1.612.261-3.175 3.679-5.612 8.006-5.612zm5.969 19.938c-.402.29-1.504.64-2 .635v-10.047c.659-.04 1.373-.177 2-.385v9.797zm-5.922-11.157c-2.052 0-6.489-.39-6.489-1.391 0-1.01 3.986-1.39 6.489-1.39 2.569 0 6.511.39 6.511 1.391 0 1.01-4.41 1.39-6.511 1.39z"/>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">COLOR</h2>
                                <p className="leading-relaxed">{color}</p>
                              </div>
                            </div>
                            <div className="flex relative">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-6 h-5" viewBox="0 0 24 24">
                                <path d="M6.043 16.496l-1.482 1.505c-2.791-2.201-4.561-5.413-4.561-9.001s1.77-6.8 4.561-9l1.482 1.504c-2.326 1.835-3.804 4.512-3.804 7.496s1.478 5.661 3.804 7.496zm8.957-7.496c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816v12.184h2v-12.184c1.162-.413 2-1.512 2-2.816zm-8.282 0c0-1.791.887-3.397 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.101-2.282-2.707-2.282-4.498zm12.721-9l-1.482 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.482 1.505c2.791-2.201 4.561-5.413 4.561-9.001s-1.77-6.8-4.561-9zm-2.958 3l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.397-2.282 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z"/>
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
