import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image'

const AboutUs = ({data}) => {
  const {allStrapiOurPeople: {nodes: people}} = data
    return (
        <Layout> 
          <SEO title="About" description="About WWB Team" />
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-10 flex flex-wrap">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest headline">About Us</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base para">WWB Team: Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                {people.map((person)=> {
                        return (
                          <div className="mx-auto">
                              <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 mx-10">
                                  <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" alt={person.position} />
                                  <div className="flex justify-center -mt-8">
                                      <Img fluid={person.photo.childImageSharp.fluid} className="rounded-full border-solid border-white border-2 -mt-3 h-48 w-48" alt={person.name} />		
                                  </div>
                                <div className="text-center px-3 pb-6 pt-2">
                                  <h3 className="text-black text-xl bold font-sans">{person.name}</h3>
                                                      <p className="mt-2 font-sans font-bold text-grey-light">{person.position}</p>
                                                      <p className="mb-4 p-4">{person.profile}</p>
                                </div>
                              </div>
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
    allStrapiOurPeople {
      nodes {
        profile
        name
        id
        position
        photo {
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