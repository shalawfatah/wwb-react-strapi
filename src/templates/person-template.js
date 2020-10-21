import Layout from '../components/layout'
import {FiChevronLeft} from 'react-icons/fi'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {BiCaretRight} from 'react-icons/bi'
import {navigate} from 'gatsby-link'



import React from 'react'

const ArticleAuthor = ({data}) => {
    const {author_profile, author_photo, author_title, name, email, phone, blogs, industries, educations} = data.strapiArticleAuthors
        
    return (
            <Layout>
              <SEO title={name} description={author_title} />
              <section class="text-gray-700 body-font">
              <button fade onClick={()=> navigate(-1)}>
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out mt-3" />
                </button>
                      <div class="container px-5 py-2 mx-auto flex flex-col">
                        <div class="lg:w-5/6 mx-auto">
                          <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                              <Img className="w-48 h-48 rounded-full inline-flex items-center justify-center" alt={name} fluid={author_photo.childImageSharp.fluid} />
                              <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 mb-4 text-gray-900 text-xl">{name}</h2>
                                <div class="w-12 h-1 bg-orange-600 rounded mt-2 mb-4"></div>
                        <p class="text-base text-gray-600">{author_title}</p>
                        <p class="text-base text-gray-600">{email}</p>
                        <p class="text-base text-gray-600">{phone}</p>

                              </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4"><ReactMarkdown source={author_profile} /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mx-10">
                      <div className="text-3xl flex items-center "> <span className="mx-4"><AiOutlineUnorderedList></AiOutlineUnorderedList> </span>Stories by {name}</div>
                      {blogs.map((blog)=> {
                        return (
                        <div>
                        <button fade onClick={()=> navigate(`/${blog.slug}`)} className="outline-none">
                        <p className="hover:text-orange-500 cursor-pointer transition-all duration-500 ease outline-none flex items-center"><span className="mx-4"><BiCaretRight></BiCaretRight></span>{blog.title}</p>
                        </button>
                        </div>
                        )
                      })}
                      {industries.map((industry)=> {
                        return (
                        <div>
                        <button fade onClick={()=> navigate(`/${industry.slug}`)} className="outline-none">
                        <p className="hover:text-orange-500 cursor-pointer transition-all duration-500 ease outline-none flex items-center"><span className="mx-4"><BiCaretRight></BiCaretRight></span>{industry.title}</p>
                        </button>
                        </div>
                        )
                      })}
                      {educations.map((education)=> {
                        return (
                        <div>
                        <button fade onClick={()=> navigate(`/${education.slug}`)} className="outline-none">
                        <p className="hover:text-orange-500 cursor-pointer transition-all duration-500 ease outline-none flex items-center"><span className="mx-4"><BiCaretRight></BiCaretRight></span>{education.title}</p>
                        </button>
                        </div>
                        )
                      })}
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
        author_title
        slug
        name
        email
        phone
        blogs {
          title
          slug
        }
        industries {
          title
          slug
        }
        educations {
          title
          slug
        }
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
