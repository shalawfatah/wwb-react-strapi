import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import {navigate} from 'gatsby-link'

const AboutUs = ({data}) => {
  const {allStrapiArticleAuthors: {nodes: people}} = data
    return (
        <Layout> 
          <SEO title="About" description="About WWB Team" />
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-10 flex flex-wrap">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest headline">About Us</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base para">Our mission is to educate beekeepers, activists, hobbyists, and bee lovers on the craft of commercial apiculture. Here are the people who continue to innovate the beekeeping industry.</p>
                </div>
                {people.map((person)=> {
                        return (
                          <div className="mx-auto person-card flex items-stretch" key={person.id}>
                             <button onClick={()=> navigate(`/${person.slug}`)}>
                              <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 mx-5 hover:bg-gray-100 transition-all duration-500 ease">
                                  <div className="flex justify-center">
                                      <Img fluid={person.author_photo.childImageSharp.fluid} className="rounded-full border-solid border-white border-2 mt-4 h-48 w-48" alt={person.name} />		
                                  </div>
                                <div className="text-center px-3 pb-6 pt-2">
                                  <h3 className="text-black text-xl">{person.name}</h3>
                                    <p className="mt-2 font-sans font-bold text-grey-400 text-md">{person.author_title}</p>
                                    <p className="mb-4 p-4">{person.author_summary}</p>
                                </div>
                              </div>
                              </button>
                            </div>
                        )
                      })}
                  </div>
            </section>   
        </Layout>
    )
}

export default AboutUs

export const query = graphql`
  {
    allStrapiArticleAuthors {
      nodes {
        author_profile
        author_summary
        author_title
        slug
        id
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
  }
`