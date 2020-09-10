import React from 'react'
import './ApiCard.css';
import Header from '../utilities/Header'
import Img from 'gatsby-image'


 const ApiCard = ({title, subtitle, image, slug}) => {
    return (
        <div className="mx-auto text-center all-card">
            <div className="api-card mx-auto my-6 bg-cover bg-center" style={{backgroundColor: `orange`}} >
            </div>
            <div className="w-3/4 text-center">
            <p className="text-center">{subtitle} </p>
            <Header text={title} />
            </div>
            </div>
                )
}


export default ApiCard;