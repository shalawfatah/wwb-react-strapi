import React from 'react'
import Link from 'gatsby-link'

const AuthorProfile = ({name, profile, photo, title, slug}) => {
    return (
        <div>
        <div class="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col industry-card p-8 m-8">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 poly-news">
                    <img src={photo} alt={name}/>
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2 headline">{name}</h2>
                    <p className="text-gray-500 text-md italic">{title}</p>
                    <p class="leading-relaxed text-base para">{profile}</p>
                    <Link fade to={slug}>
                                    <button type="text" className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button justify-right my-6">Read More</button>
                    </Link>
                </div>
                </div>
        </div>
    )
}

export default AuthorProfile