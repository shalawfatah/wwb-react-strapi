import React from 'react'
import {navigate} from 'gatsby-link'

const AuthorProfile = ({name, profile, photo, title, slug}) => {
    return (
        <div>
        <button onClick={()=> navigate(`/${slug}`)}>
        <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col industry-card p-8 m-8 hover:bg-gray-100 transition-all duration-500 ease">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 poly-news">
                    <img src={photo} alt={name}/>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2 headline">{name}</h2>
                    <p className="text-gray-500 text-md italic">{title}</p>
                    <p className="leading-relaxed text-base para">{profile}</p>
                </div>
                </div>
                </button>
        </div>
    )
}

export default AuthorProfile