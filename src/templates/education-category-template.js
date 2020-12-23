import React from 'react'
import Layout from '../components/layout'
import {FiChevronLeft} from 'react-icons/fi'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {navigate} from 'gatsby-link'
import EducationSearch from '../components/search/EducationSearch'


const EduCatTemp = ({data}) => {
    const {strapiEducationCategories:{name, picture, special_color, id}, allStrapiEducations:{nodes:educations}} = data
    return (
        <Layout>
          <SEO title="Education Categories" />
          <section className="text-gray-700 body-font overflow-hidden py-5">
          <AniLink fade to="/education/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </AniLink>
          <div className="container px-5 mx-auto flex flex-col">
                    <div>
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Img alt="content" className="object-cover object-center h-full w-full" fluid={picture.childImageSharp.src} />
                    </div>
                    </div>
                    <h1 className={`sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 rounded transformed-headline mb-3 ${special_color}`}>{name}</h1>
            <EducationSearch />
          {educations.map((education)=> {
            return (
                  <div className="container px-5 mx-auto py-5" key={id}>
                      <div className="-my-8">
                      <div className="py-8 flex flex-wrap md:flex-no-wrap">
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="tracking-widest font-medium title-font text-gray-900">{education.article_author.name}</span>
                          <span className="mt-1 text-gray-500 text-sm">{education.created_at}</span>
                          </div>
                          <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{education.title}</h2>
                          <p className="leading-relaxed mb-3">{education.summary}</p>
                          <button className="flex justify-center text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer button" onClick={()=> navigate(`/${education.slug}`)}>Read More</button>
                          </div>
                      </div>
                      </div>
                      </div>
            )
                })}
                </div>
                </div>
          </section>
        </Layout>
    )
}


export default EduCatTemp

export const query = graphql`
query getSingleEducationCategory($slug: String!)
  {
    strapiEducationCategories(slug: { eq: $slug }) {
      name
      id
      special_color
      picture {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      }
      allStrapiEducations(
        filter: {education_category: {slug: {eq: $slug}}}
        ) {
        nodes {
          title
          summary
          slug
          created_at(formatString: "DD-MM-YYYY")
          article_author {
            name
          }
        }
    }
  }
`