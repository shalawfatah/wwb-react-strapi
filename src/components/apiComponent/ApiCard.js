import React from 'react'
import './ApiCard.css';
import Img from 'gatsby-image'


 const ApiCard = ({title, subtitle, image, slug}) => {
    return (
        <div className="mx-auto text-center all-card text-center">
            <div className="api-card mx-auto my-6 bg-cover bg-center"  >
                <img src={image} className="h-full overflow-hidden" />
            </div>
            <div className="w-3/4 text-center mx-auto">
            <p className="text-center">{subtitle} </p>
            <h1 className="text-xl text-center font-extrabold">{title}</h1>
            </div>
            </div>
                )
}


export default ApiCard;