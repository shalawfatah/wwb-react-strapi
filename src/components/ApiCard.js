import React from 'react'
import './ApiCard.css';

 const ApiCard = ({children}) => {
    return (
        <div>
            <div className="api-card mx-4 my-6">
                {children}
            </div>
            
        </div>
    )
}


export default ApiCard;