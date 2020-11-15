import React from 'react'
import './ApiCard.css';
import {navigate} from 'gatsby-link'


 const ApiCard = ({title, image, slug}) => {
    return (
        <div className="outline-none mx-auto">
            <button onClick={()=> navigate(`/${slug}`)} className="outline-none">
            <div className="api-card bg-cover bg-center outline-none my-4" >
                <img className="h-full overflow-hidden object-cover" src={image} alt={title} />
            </div>
            <div className="w-3/4 text-center mx-auto outline-none">
            <h1 className="text-lg text-center font-bold headline-api overflow-hidden">{title}</h1>
            </div>
            </button>
            </div>
                )
}


export default ApiCard;