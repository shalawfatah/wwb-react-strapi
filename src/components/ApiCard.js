import React from 'react'
import './ApiCard.css';

 const ApiCard = ({children}) => {
    return (
            <div className="api-card mx-5 my-6">
                {children}
            </div>
                )
}


export default ApiCard;