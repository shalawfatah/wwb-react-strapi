import React from 'react'
import '../utilities/Button.css'
import Img from 'gatsby-image'
import './BlogCard.css'
import {navigate} from 'gatsby-link'

 
const EducationCard = ({headline, content, image, slug}) => {
    return (
        <div>
            <button fade onClick={()=> navigate(`/${slug}`)}>
            <div className="max-w-sm h-full rounded overflow-hidden shadow-lg mx-2 bg-white blog-card">
                <Img className="object-cover h-40 w-full" fluid={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4 mx-auto">
                <div className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 headline">{headline}</div>
                <p class="leading-relaxed mb-3 para p-4">{content}</p>
                </div>
            </div>
            </button>
        </div>
    )
}

export default EducationCard