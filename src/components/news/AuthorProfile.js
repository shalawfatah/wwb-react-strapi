import React from 'react'

const AuthorProfile = ({name, profile, social, photo, title}) => {
    return (
        <div>
        <div class="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col industry-card p-8 m-8">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 poly-news">
                    <img src={photo} />
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2 headline">{name}</h2>
                    <p className="text-gray-500 text-md italic">{title}</p>
                    <p class="leading-relaxed text-base para">{profile}</p>
                    <p className="text-gray-400 italic para">// Put React Icons for Social Media Here</p>
                </div>
                </div>
        </div>
    )
}

export default AuthorProfile