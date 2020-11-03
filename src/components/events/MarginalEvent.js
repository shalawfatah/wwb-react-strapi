import React from 'react'
import Button from '../utilities/Button'
import './MarginalEvent.css'
import {FiMapPin} from 'react-icons/fi'
import '../utilities/ButtonFree.css'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const MarginalEvent = ({title, summary, location, date, image, slug}) => {
    return (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 event-card">
                    <AniLink to={`/events/${slug}`} >
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative for-free-btn">
                          <Img className="lg:h-48 md:h-36 w-full object-cover object-center" fluid={image} alt={title} />
                          <div className="button-event">
                          <p className="flex text-gray-600 bg-white py-2 px-6 focus:outline-none text-md button-free">{date}</p>
                          </div>
                          <div className="p-6">
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 headline">{title}</h1>
                            <p className="leading-relaxed mb-3 para">{summary}</p>
                            <p className="text-xs flex flex-wrap"><span className="text-lg text-grey-900 mr-2 text-orange-600"><FiMapPin /></span><span className="text-xs text-gray-600">{location}</span></p>

                      </div>
                    </div>
                    </AniLink>
                  </div>
    )
}

export default MarginalEvent