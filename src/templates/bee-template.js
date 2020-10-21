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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-5 h-5" viewBox="0 0 24 24">
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-5 h-6" viewBox="0 0 24 24">
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-6 h-5" viewBox="0 0 24 24">
                                <path d="M7.092 5.099l1.439-.205-.439-3.083-1.44.204.44 3.084zm-2.211 3.445l.205-1.44-3.084-.44-.205 1.441 3.084.439zm-.494-5.163l-1.03 1.03 2.203 2.204 1.029-1.03-2.202-2.204zm12.541 15.565l-1.439.205.438 3.083 1.441-.204-.44-3.084zm2.21-3.446l-.206 1.441 3.085.439.205-1.44-3.084-.44zm.495 5.163l1.028-1.029-2.204-2.204-1.027 1.03 2.203 2.203zm2.64-18.904c2.344 2.346 2.344 6.149.001 8.494l-3.896 3.896-1.417-1.417 3.895-3.895c1.562-1.562 1.562-4.101 0-5.662-1.562-1.562-4.101-1.562-5.662 0l-3.894 3.895-1.416-1.416 3.895-3.895c2.344-2.345 6.147-2.345 8.494 0zm-8.138 16.631l-3.852 3.851c-2.344 2.347-6.146 2.345-8.494.001-2.344-2.346-2.345-6.149 0-8.494l3.854-3.851 1.414 1.415-3.851 3.851c-1.562 1.562-1.562 4.102-.001 5.663 1.563 1.561 4.102 1.561 5.664-.001l3.85-3.851 1.416 1.416z"/>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">APPEARANCE</h2>
                                <p className="leading-relaxed">{shape}</p>
                              </div>
                            </div>
                            <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-5 h-6" viewBox="0 0 24 24">
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
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="w-6 h-5" viewBox="0 0 24 24">
                                <path d="M3.732 13h1.504s2.32-8.403 2.799-10.263c.156-.605.646-.738.965-.737.319.001.826.224.947.74.581 2.466 3.11 13.908 3.11 13.908s1.597-6.441 1.943-7.891c.101-.425.536-.757 1-.757.464 0 .865.343 1 .707.312.841 1.675 4.287 1.677 4.293h1.591c.346-.598.992-1 1.732-1 1.104 0 2 .896 2 2s-.896 2-2 2c-.741 0-1.388-.404-1.734-1.003-.939-.001-1.856 0-2.266.003-.503.004-.774-.289-.928-.629l-.852-2.128s-1.828 7.367-2.25 8.999c-.153.595-.646.762-.97.758-.324-.004-.847-.198-.976-.783-.549-2.487-2.081-9.369-3.123-14.053 0 0-1.555 5.764-1.936 7.099-.13.454-.431.731-.965.737h-2.268c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1z"/>
                                </svg>
                              </div>
                              <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">TRAITS</h2>
                                <p className="leading-relaxed">{antenna}</p>
                              </div>
                            </div>
                          </div>
                          <Img className="w-1/2" fluid={bee_icon.childImageSharp.fluid} alt={bee_name} />
                      </div>
                      </div>
                    </section>


                        <div className="lg:w-5/6 sm:w-full sm:pl-8 sm:py-2 sm:mt-0 text-center sm:text-left mx-auto">
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
