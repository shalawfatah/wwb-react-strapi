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
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 headline submit-text">Apiculture</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 para pb-5 submit-text">The most entertaining page for beekeepers ever created.</p>
            <ApiSearch />
            <div className="outline-none flex flex-wrap justify-center gap-8 my-5">
            {apis.map((api)=> {
                return (
                  <div key={api.id}>
                <ApiCard title={api.title} image={api.photo.childImageSharp.fluid.src} slug={`${api.slug}`} />
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
    allStrapiApitherapies(
      sort: {fields: published_at, order: ASC}
    ) {
      nodes {
        title
        slug
        id
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