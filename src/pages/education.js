import React from 'react'
import Layout from '../components/layout'
import EducationCard from '../components/EducationComponent/EducationCard'
import EducationSearch from '../components/search/EducationSearch'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'


const Education = ({data}) => {
    const {allStrapiEducationCategories:{nodes:educations}} = data
    return (
        <Layout>
          <SEO title="Education" />
          <div className="p-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 headline py-10">Free Online Educational Portal</h1>
            <EducationSearch />
            <div className="flex flex-wrap justify-center">
            {educations.map((education)=> {
                    return (
                      <div key={education.id}>
                    <EducationCard headline={education.name} image={education.picture.childImageSharp.fixed} special={education.special_color} slug={`/education/${education.slug}`} />
                    </div>
                    )
                })}
            </div>
            </div>
        </Layout>
    )
}

export default Education

export const query = graphql`
  {
    allStrapiEducationCategories {
      nodes {
        slug
        id
        picture {
          childImageSharp {
            fixed(width: 400
              height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        name
        special_color
      }
    }
  }
`