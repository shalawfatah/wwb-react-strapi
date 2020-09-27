import React from 'react'
import Layout from '../components/layout'
import {FiChevronLeft} from 'react-icons/fi'
import Link from 'gatsby-link'
import Button from '../components/utilities/Button'
import SEO from '../components/SEO'



const EduCatTemp = ({data}) => {
    const {strapiEducationCategories:{name, picture}, allStrapiEducations:{nodes:educations}} = data
    return (
        <Layout>
          <SEO title="Education Categories" />
          <section className="text-gray-700 body-font overflow-hidden py-5">
          <Link fade to="/education/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </Link>
          <div className="container px-5 mx-auto flex flex-col">
                    <div>
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={picture.childImageSharp.fluid.src} />
                    </div>
                    </div>
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 rounded transformed-headline">{name}</h1>
          {educations.map((education)=> {
            return (
                  <div className="container px-5 mx-auto py-5">
                      <div className="-my-8">
                      <div className="py-8 flex flex-wrap md:flex-no-wrap">
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="tracking-widest font-medium title-font text-gray-900">{education.article_author.name}</span>
                          <span className="mt-1 text-gray-500 text-sm">{education.created_at}</span>
                          </div>
                          <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{education.title}</h2>
                          <p className="leading-relaxed">{education.summary}</p>
                          <Button text="Read More" link={`/education/${education.slug}`} />
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
      picture {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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