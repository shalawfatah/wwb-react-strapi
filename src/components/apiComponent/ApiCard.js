import React from 'react'
import './ApiCard.css';
import {navigate} from 'gatsby-link'


 const ApiCard = ({title, image, slug}) => {
    return (
        <div className="outline-none all-card">
            <button onClick={()=> navigate(`/${slug}`)} className="outline-none">
            <div className="api-card mx-auto my-6 bg-cover bg-center outline-none" >
                <img className="h-full overflow-hidden object-cover" src={image} alt={title} />
            </div>
            <div className="w-3/4 text-center mx-auto outline-none">
            <h1 className="text-xl text-center font-extrabold headline-api">{title}</h1>
            </div>
            </button>
            </div>
                )
}


export default ApiCard;