import React from 'react'
import Layout from '../components/layout'
import ApiCard from '../components/apiComponent/ApiCard'
import Img from 'gatsby-image'

const Apiculture = ({data}) => {
    const {allStrapiApitherapies:{nodes:apis}} = data
    return (
        <Layout>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 headline">Apiculture</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 para">Showcasing the best people in the industry, all things bees and anything related to bee farmers. </p>
            <div className="flex flex-wrap mx-auto">
            {apis.map((api)=> {
                return <ApiCard title={api.title} subtitle={api.subtitle} />
            })}
             <ApiCard></ApiCard> 
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
      }
    }
  }
`