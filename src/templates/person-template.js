import Layout from '../components/layout'
import Header from '../components/utilities/Header'
import {FiChevronLeft} from 'react-icons/fi'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import React from 'react'

const ArticleAuthor = ({data}) => {
    const {author_profile, author_photo, author_summary, author_title, name} = data.strapiArticleAuthors
        
    return (
            <Layout>
              <SEO title={name} description={author_title} />
                <section className="text-gray-700 body-font py-5">
                <Link fade to="/blog/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </Link>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden bg-gray-300">
                        <Img alt={name} class="object-top-center mx-auto" fluid={author_photo.childImageSharp.fluid} />
                    </div>
                    <div className="py-8">
                    <Header text={name}/>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{author_title}</h2>
                            <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                        </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4"><ReactMarkdown source={author_profile} /></p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                </Layout>
    )
}

export default ArticleAuthor

export const query = graphql`
query getSingleArticleAuthor($slug: String) {
    strapiArticleAuthors(slug: { eq: $slug }) {
        author_profile
        author_summary
        author_title
        slug
        name
        author_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
}
`
