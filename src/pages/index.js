import React from "react"
import LayoutNoPadding from "../components/layoutNoPadding"
import { Map, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import {Icon} from 'leaflet'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'
import Img from 'gatsby-image'
import AllSearch from '../components/search/AllSearch'
import {FiArrowUpCircle, FiArrowDownCircle} from 'react-icons/fi'
import scrollTo from 'gatsby-plugin-smoothscroll';


const IndexPage = ({data}) => {
  const {allStrapiGenomes:{nodes:genomes}} = data
  
  return (
  <LayoutNoPadding>
    <SEO title="WWB" />
    <AllSearch />
    <div className="relative">
    <div className="mx-10 px-6 absolute left-0 top-0 home-headline" >
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-white headline home-headline">Worldwide Bee</h1>
    <p class="text-base leading-relaxed xl:w-full lg:w-full para pb-5 text-white">The Free Honey Bee Encyclopedia</p>
    <button onClick={() => scrollTo('#my-cool-header')}><FiArrowUpCircle className="text-3xl cursor-pointer arrow-button-up" /></button>
    <button onClick={() => scrollTo('#my-cool-footer')}><FiArrowDownCircle className="text-3xl cursor-pointer arrow-button-down" /></button>
    </div>
    </div>
    {typeof window !== 'undefined' &&
        <Map center={[0, 0]} 
            zoom={2} maxZoom={5}
            minZoom={2} 
            attributionControl={false} 
            tap={false} 
            scrollWheelZoom={false} 
            dragging={true} 
        >
                <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
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
                        <Img fluid={genome.bee_photo.childImageSharp.fluid} alt={genome.bee_name} />
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
  }
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

// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
// https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
// https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png