import React from 'react'
import beePic from '../../images/bee-pic.jpg'

const AuthorProfile = () => {
    return (
        <div>
        <div class="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col industry-card p-2">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 poly-news">
                    <img src={beePic} />
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Author Name</h2>
                    <p class="leading-relaxed text-base">Author Profile: Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <p className="text-gray-400 italic">// Put React Icons for Social Media Here</p>
                </div>
                </div>
        </div>
    )
}

export default AuthorProfile