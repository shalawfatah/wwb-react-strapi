import React from 'react'
import './ApiCard.css';
import Img from 'gatsby-image'
import Link from 'gatsby-link'


 const ApiCard = ({title, image, slug}) => {
    return (
        <div className="mx-auto text-center all-card text-center">
            <div className="api-card mx-auto my-6 bg-cover bg-center" >
                <img src={image} className="h-full overflow-hidden object-cover" />
            </div>
            <div className="w-3/4 text-center mx-auto">
            <Link fade to={slug}>
            <h1 className="text-xl text-center font-extrabold headline-api">{title}</h1>
            </Link>
            </div>
            </div>
                )
}


export default ApiCard;