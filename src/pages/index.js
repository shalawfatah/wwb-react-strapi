import React from "react"
import LayoutNoPadding from "../components/layoutNoPadding"
import { Map, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import {Icon} from 'leaflet'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import AllSearch from '../components/search/AllSearch'


const IndexPage = ({data}) => {
  const {allStrapiGenomes:{nodes:genomes}} = data
  
  return (
  <LayoutNoPadding>
    <SEO title="WWB" />
    <AllSearch />
    <div className="relative">
    <div className="mx-10 px-6 absolute left-0 top-0 home-headline my-1">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 headline home-headline">Worldwide Bee</h1>
    <p class="text-base leading-relaxed xl:w-full lg:w-full para pb-5 text-black">The Free Honey Bee Encyclopedia</p>
    </div>
    </div>
        <Map center={[0, 0]} zoom={2} maxZoom={5} minZoom={2} attributionControl={false} tap={false} scrollWheelZoom={false} >
                <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                 />
                {genomes.map((genome)=> {
                  return (
                    <div className="bee-icons">
                    <Marker
                      position={[`${genome.coordinate_x}`,`${genome.coordinate_y}`]}
                      icon = { new Icon({
                        iconUrl: genome.bee_icon.childImageSharp.fluid.src,
                        iconSize: [60],
                        iconAnchor: [20, 40]
                      })}
                    >
                      <Tooltip>{genome.bee_name}</Tooltip>
                      <Popup>
                        <Img fluid={genome.bee_icon.childImageSharp.fluid} alt={genome.bee_name} />
                        <h1 className="text-xl py-2">{genome.bee_name}</h1>
                        <h1 className="text-lg text-gray-500">{genome.bee_genome}</h1>
                        <p className="text-sm text-gray-700 pb-2">{genome.summary}</p>
                        <AniLink fade to={`/genomes/${genome.slug}`} className="flex bg-gray-200 py-2 px-4 focus:outline-none text-lg cursor-pointer text-white rounded-full justify-center text-white hover:bg-gray-300 transition-all duration-500 ease-in-out">Read More</AniLink>
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

//     {typeof window !== 'undefined' &&
// }

// light map 
// https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png

// dark map
// https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png