import React from 'react'
import './EducationCard.css';
import Img from 'gatsby-image'
import Link from 'gatsby-link'

 
const EducationCard = ({headline, slug, image}) => {
    return (
        <Link fade to={`${slug}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 education-card" >
                <Img fixed={image} alt="Sunset in the mountains" className="object-cover education-image" />
                <div className="px-6 py-4 mx-auto">
                <div className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4 headline">{headline}</div>
                </div>
            </div>
        </Link>
    )
}

export default EducationCard