import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/utilities/Header'
import {FiChevronLeft} from 'react-icons/fi'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import Img from 'gatsby-image'

const apicultureTemplate = ({data}) => {
    const {title, photo, content, subtitle} = data.strapiApitherapies
    return (
        <Layout>
            <SEO title={title} description={subtitle} />
                <section className="text-gray-700 body-font py-5">
                <Link fade to="/apiculture/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </Link>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Img alt="content" class="object-cover object-center h-full w-full" fluid={photo.childImageSharp.fluid} />
                    </div>
                    <div className="py-8">
                    <Header text={title}/>
                    <p className="text-2xl py-4 text-grey-700">{subtitle}</p>
                    </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4"><ReactMarkdown source={content} /></p>
                        </div>
                    </div>
                </div>
                </section>
                </Layout>
    )
}

export default apicultureTemplate

export const query = graphql`
    query getSingleApitherapy($slug: String) {
        strapiApitherapies(slug: { eq: $slug }) {
            title
            subtitle
            content
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