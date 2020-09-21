import React from 'react'
import Link from 'gatsby-link'
import '../utilities/Button.css'

 
const EducationCard = ({headline, content, image, slug}) => {
    return (
        <div>
            <div className="max-w-sm h-full rounded overflow-hidden shadow-lg mx-2 bg-white">
                <img className="object-cover h-40 w-full" src={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4 mx-auto">
                <div className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 headline">{headline}</div>
                <p class="leading-relaxed mb-3 para">{content}</p>
                <Link to={`/blog/${slug}`} className="flex justify-center text-grey-700 bg-white py-2 px-4 mx-16 my-8 focus:outline-none text-md cursor-pointer button font-semibold">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default EducationCard