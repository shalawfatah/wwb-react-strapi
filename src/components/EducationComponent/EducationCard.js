import React from 'react'
import './EducationCard.css';
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

 
const EducationCard = ({headline, slug, image, special}) => {
    return (
        <AniLink fade to={`${slug}`}>
            <div className={`max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 education-card ${special}`} >
                <Img fixed={image} alt={headline} className="object-cover education-image" />
                <div className="px-6 py-4 mx-auto">
                <div className={`sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4 headline ${special}`}>{headline}</div>
                </div>
            </div>
        </AniLink>
    )
}

export default EducationCard