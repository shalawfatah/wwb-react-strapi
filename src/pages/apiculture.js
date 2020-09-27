import React from 'react'
import Layout from '../components/layout'
import ApiCard from '../components/apiComponent/ApiCard'
import ApiSearch from '../components/search/ApiSearch'
import SEO from '../components/SEO'


const Apiculture = ({data}) => {
    const {allStrapiApitherapies:{nodes:apis}} = data
    return (
        <Layout>
          <SEO title="Apiculture" />
          <div className="py-5">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 headline">Apiculture</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 para">Showcasing the best people in the industry, all things bees and anything related to bee farmers. </p>
            <ApiSearch />
            <div className="flex flex-wrap mx-auto">
            {apis.map((api)=> {
                return <ApiCard title={api.title} image={api.photo.childImageSharp.fluid.src} slug={`/apiculture/${api.slug}`} />
            })}
             <ApiCard></ApiCard> 
            </div>
            </div>
        </Layout>
    )
}

export default Apiculture

export const query = graphql`
  {
    allStrapiApitherapies {
      nodes {
        title
        slug
        subtitle
        photo {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`