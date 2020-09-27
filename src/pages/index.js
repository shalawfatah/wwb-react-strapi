import React from "react"
import LayoutNoPadding from "../components/layoutNoPadding"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon} from 'leaflet'
import {graphql} from 'gatsby'
import Link from 'gatsby-link'
import SEO from '../components/SEO'
import Img from 'gatsby-image'


const IndexPage = ({data}) => {
  const {allStrapiGenomes:{nodes:genomes}} = data

  return (
  <LayoutNoPadding>
    <SEO title="WWB" />
        <Map center={[0, 0]} zoom={2} maxZoom={5} minZoom={2} attributionControl={false}>
                <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                 />
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
                    >
                      <Popup>
                        <Img fluid={genome.bee_icon.childImageSharp.fluid} alt={genome.bee_name} />
                        <h1 className="text-xl py-2">{genome.bee_name}</h1>
                        <h1 className="text-lg text-gray-500">{genome.bee_genome}</h1>
                        <p className="text-sm text-gray-700 pb-2">{genome.summary}</p>
                        <Link fade to={`/genomes/${genome.slug}`} className="flex bg-gray-200 py-2 px-4 focus:outline-none text-lg cursor-pointer text-white rounded-full justify-center text-white hover:bg-gray-300 transition-all duration-500 ease-in-out">Read More</Link>
                      </Popup>
                    </Marker>
                </div>
                  )
                })}
        </Map>
  </LayoutNoPadding>
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