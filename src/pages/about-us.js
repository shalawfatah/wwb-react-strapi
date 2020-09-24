import React from 'react'
import Layout from '../components/layout'

const AboutUs = ({data}) => {
  const {allStrapiOurPeople: {nodes: people}} = data
    return (
        <Layout> 
            <section class="text-gray-700 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest headline">About Us</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base para">WWB Team: Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                {people.map((person)=> {
                        return (
                          <div class="flex flex-wrap -m-4 ">
                            <div class="p-4 lg:w-1/2 p-5 m-5 py-10">
                              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <div className="poly-news">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-64 h-48 object-cover object-center sm:mb-0 mb-4" src={person.photo.childImageSharp.fluid.src} />
                                </div>
                                <div class="flex-grow sm:pl-8 ">
                                  <h2 class="title-font font-medium text-lg text-gray-900 headline">{person.name}</h2>
                                  <h4 class="text-gray-500 mb-3">{person.position}</h4>
                                  <p class="mb-4">{person.profile}</p>
                                </div>
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