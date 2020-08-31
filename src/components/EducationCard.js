import React from 'react'
import mapImage from '../images/bee-pic.jpg'
import './EducationCard.css';

 
const EducationCard = () => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 education-card">
                <img className="w-full" src={mapImage} alt="Sunset in the mountains" />
                <div className="px-6 py-4 mx-auto">
                    <div className="font-bold text-2xl mb-2 p-10">The Coldest Sunset</div>
                </div>
            </div>
        </div>
    )
}

export default EducationCard