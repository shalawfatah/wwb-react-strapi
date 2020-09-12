import React from 'react'
import Layout from '../components/layout'
import EducationCard from '../components/EducationComponent/EducationCard'
import Category from '../components/utilities/Category'

const Education = ({data}) => {
    const {allStrapiEducations:{nodes:educations}} = data
    return (
        <Layout>
          <div className="p-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 headline">Beekeeping Programs</h1>
            <div className="flex flex-wrap mx-auto">
            <Category  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            {educations.map((education)=> {
                    return <EducationCard headline={education.title} image={education.picture.childImageSharp.fixed} slug={education.slug} />
                })}
            </div>
            </div>
        </Layout>
    )
}

export default Education

export const query = graphql`
  {
    allStrapiEducations {
      nodes {
        content
        title
        slug
        picture {
          childImageSharp {
            fixed(width: 400
              height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`