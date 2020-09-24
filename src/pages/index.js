import React, {useState} from "react"
import Layout from "../components/layout"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon} from 'leaflet'
import BeeCard from '../components/utilities/BeeCard'
import {graphql} from 'gatsby'
import Link from 'gatsby-link'


const IndexPage = ({data}) => {
  const {allStrapiGenomes:{nodes:genomes}} = data
  const [hideBee, setHideBee] = useState(false)

  return (
  <Layout>
    {/* {hideBee && genomes.map((genome)=> {
        return (
          <BeeCard name={genome.bee_name} genome={genome.bee_genome} summary={genome.summary} image={genome.bee_photo.childImageSharp.fluid.src} slug={`/genomes/${genome.slug}`} />
        )
      })} */}
        <Map center={[0, 0]} zoom={2} maxZoom={5} minZoom={2}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
                contributors' />
                {genomes.map((genome)=> {
                  return (
                    <div className="bee-icons">
                    <Marker 
                      position={[`${genome.coordinate_x}`,`${genome.coordinate_y}`]}
                      icon = {new Icon({
                        iconUrl: genome.bee_icon.childImageSharp.fluid.src,
                        iconSize: [60],
                        iconAnchor: [20, 40],
                      })}
                      // onClick={()=> setHideBee(hideBee => !hideBee)}
                    >
                      <Popup>
                        <img src={genome.bee_icon.childImageSharp.fluid.src} alt={genome.bee_name} />
                        <h1 className="text-xl">{genome.bee_name}</h1>
                        <h1 className="text-md text-gray-500">{genome.bee_genome}</h1>
                        <p className="text-sm text-gray-700 py-2">{genome.summary}</p>
                        <Link fade to={`/genomes/${genome.slug}`} className="flex bg-gray-200 py-2 px-4 focus:outline-none text-lg cursor-pointer text-white rounded-full justify-center text-white hover:bg-gray-300 transition-all duration-500 ease-in-out">Read More</Link>
                      </Popup>
                    </Marker>
                </div>
                  )
                })}
        </Map>
  </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allStrapiGenomes {
      nodes {
        bee_icon {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bee_genome
        coordinate_x
        coordinate_y
        summary
        strapiId
        bee_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bee_name
        content
        slug
        }
      }
    }
`