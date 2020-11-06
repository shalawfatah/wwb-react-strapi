import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TextHeader from '../components/utilities/TextHeader'
import {FiChevronLeft} from 'react-icons/fi'
import {navigate} from 'gatsby-link'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import AuthorProfile from '../components/news/AuthorProfile'



const educationTemplate = ({data}) => {
    const {title, content, picture, article_author, youtube, date} = data.strapiEducations
    return (
        <Layout>
          <SEO title={title} />
                <section className="text-gray-700 body-font py-5">
                <button onClick={()=> navigate(-1)}>
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </button>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-76 overflow-hidden">
                        <Img alt="content" class="object-cover object-center h-full w-full" fluid={picture.childImageSharp.fluid} />
                    </div>
                    <div className="py-8">
                    <TextHeader text={title}/>
                    </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left mx-auto">
                        <p className="flex justify-start bg-white py-2 focus:outline-none text-lg text-orange-600">{article_author.name}</p>
                        <p className="flex justify-start bg-white py-2 focus:outline-none text-sm text-gray-400">{date}</p>
                        {youtube ?  <iframe  title={title} className="responsive-iframe" src={`${youtube}`} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : ''}
                          <br />
                        <div className="leading-relaxed text-lg mb-4"><ReactMarkdown source={content} /></div>
                        <div className="flex justify-center">
                        <AuthorProfile name={article_author.name} profile={article_author.author_summary} photo={article_author.author_photo.childImageSharp.fluid.src} title={article_author.author_title} slug={article_author.slug} />
                        </div>
                        </div>
                    </div>
                </div>
                </section>
                </Layout>
    )
}

export default educationTemplate

export const query = graphql`
    query getSingleEducation($slug: String) {
        strapiEducations(slug: { eq: $slug }) {
        content
        title
        date(formatString: "DD MMMM YYYY")
        youtube
        article_author {
          name
          author_title
          slug
          author_summary
          author_photo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        picture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
`