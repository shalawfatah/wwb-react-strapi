import Layout from '../components/layout'
import AuthorProfile from '../components/news/AuthorProfile'
import TextHeader from '../components/utilities/TextHeader'
import {FiChevronLeft} from 'react-icons/fi'
import {navigate} from 'gatsby-link'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import React from 'react'

const blogArticle = ({data}) => {
    const { 
            title, 
            photo, 
            content, 
            youtube, 
            mintues_read, 
            quote, 
            article_date, 
            article_author
          } = data.strapiBlogs
          return (
            <Layout>
              <SEO title={title} description={quote} />
                <section className="text-gray-700 body-font py-5">
                <button onClick={()=> navigate(-1)}>
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </button>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-76 overflow-hidden">
                        <img alt={title} className="object-cover object-center w-full" src={photo.childImageSharp.fluid.src} />
                    </div>
                    <div className="py-8">
                    <TextHeader text={title}/>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{article_author.name}</h2>
                            <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                            <p className="text-sm text-gray-500 ">{article_date}</p>
                            <p className="text-sm text-gray-900 py-2">♣ {mintues_read} min read</p>
                            <h2 className="text-2xl text-gray-900 italic">{quote}</h2>
                        </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                          {youtube ?  <iframe  title={title} className="responsive-iframe" src={`${youtube}`} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : ''}
                          <br />
                        <div className="leading-relaxed text-lg mb-4"><ReactMarkdown source={content} /></div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                          <AuthorProfile name={article_author.name} profile={article_author.author_summary} photo={article_author.author_photo.childImageSharp.fluid.src} title={article_author.author_title} slug={article_author.slug} />
                          </div>
                          </div>
                </div>
                </section>
                </Layout>
    )
}

export default blogArticle

export const query = graphql`
    query getSingleBlog($slug: String) {
        strapiBlogs(slug: { eq: $slug }) {
            article_author {
                name
                slug
                author_title
                author_profile
                author_summary
                author_photo {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            photo {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              content
              mintues_read
              title
              youtube
              quote
              article_date(formatString: "DD MMMM YYYY")
              slug
      }
    }
`