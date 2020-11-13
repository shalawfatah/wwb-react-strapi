import React from 'react'
import './ApiCard.css';
import Img from 'gatsby-image'
import {navigate} from 'gatsby-link'


 const ApiCard = ({title, image, slug}) => {
    return (
        <div className="mx-auto text-center all-card text-center outline-none mr-8">
            <button onClick={()=> navigate(`/${slug}`)} className="outline-none">
            <div className="api-card mx-auto my-6 bg-cover bg-center outline-none" >
                <Img className="h-full overflow-hidden object-cover" fluid={image} />
            </div>
            <div className="w-3/4 text-center mx-auto outline-none">
            <h1 className="text-xl text-center font-extrabold headline-api">{title}</h1>
            </div>
            </button>
            </div>
                )
}


export default ApiCard;