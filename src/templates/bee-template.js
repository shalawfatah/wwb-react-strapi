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
    const {bee_name, bee_genome, content, bee_photo, youtube} = data.strapiGenomes
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
                        <Img alt="content" class="object-cover object-center h-full w-full" fluid={bee_photo.childImageSharp.fluid} />
                    </div>
                    <div className="py-2">
                    <Header text={bee_name}/>
                    <p className="text-2xl pt-4 text-grey-700 text-center text-gray-600">{bee_genome}</p>
                    </div>
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
        bee_name
        bee_genome
        content
        youtube
      }
    }
`

        