import React, {useState} from "react"
import Layout from "../components/layout"
import BeeCard from '../components/utilities/BeeCard'
import {GiBee} from 'react-icons/gi'
import MapImage from '../images/map-full-gray.png'
import {graphql} from 'gatsby'


const IndexPage = ({data}) => {
  const [hideBee, setHideBee] = useState(false)
  const {allStrapiGenomes:{nodes:genomes}} = data
  return (
  <Layout>
    <div className="home-content mx-auto">
    <img src={MapImage} alt="map iamge" />
    <GiBee className="text-yellow-500 text-5xl bee-icon hover:text-yellow-300 hover:text-6xl" onClick={()=> setHideBee(hideBee => !hideBee)} />
    <div className="bee-card-place">
    {hideBee && genomes.map((genome)=> {
        return (
          <BeeCard name={genome.bee_name} genome={genome.bee_genome} summary={genome.summary} image={genome.bee_photo.childImageSharp.fluid.src} slug={`/genomes/${genome.slug}`} />
        )
      })}
    </div>
    </div>
  </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allStrapiGenomes {
      nodes {
        slug
        summary
        bee_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bee_name
        bee_genome
      }
    }
  }
`