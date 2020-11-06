import React from 'react'
import Layout from '../components/layout'
import ApiCard from '../components/apiComponent/ApiCard'
import ApiSearch from '../components/search/ApiSearch'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'


const Apiculture = ({data}) => {
    const {allStrapiApitherapies:{nodes:apis}} = data
    return (
        <Layout>
          <SEO title="Apiculture" />
          <div className="py-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 headline">Apiculture</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 para pb-5">The most entertaining page for beekeepers ever created.</p>
            <ApiSearch />
            <div className="flex flex-wrap outline-none justify-center">
            {apis.map((api)=> {
                return (
                  <div key={api.id}>
                <ApiCard title={api.title} image={api.photo.childImageSharp.fluid} slug={`${api.slug}`} />
                </div>
                )
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
        id
        subtitle
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