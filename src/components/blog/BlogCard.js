import React from 'react'
import mapImage from '../../images/bee-pic.jpg'

 
const EducationCard = ({headline, content, button}) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 bg-white">
                <img className="w-full" src={mapImage} alt="Sunset in the mountains" />
                <div className="px-6 py-4 mx-auto">
                <div className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 headline">{headline}</div>
                <p class="leading-relaxed mb-3 para">{content}</p>
                <div>{button}</div>
                </div>
            </div>
        </div>
    )
}

export default EducationCard