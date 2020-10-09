import React from 'react'
import './OtherNews.css'
import {navigate} from 'gatsby-link'

const OtherNews = ({title, quote, image, slug}) => {
    return (
        <div>
            <section class="text-gray-700 body-font">
            <div class="container px-2 py-6 mx-auto ">
            <button fade onClick={()=> navigate(`/${slug}`)}>
                <div class="flex items-center lg:w-full mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col industry-card p-2">
                <div class="sm:w-40 sm:h-40 h-48 w-48 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 poly-news">
                    <img src={image} alt={slug} />
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-2xl title-font font-extrabold mb-2 p-4">{title}</h2>
                <p class="leading-relaxed text-base p-4">{quote}</p>
                </div>
                </div>
                </button>
            </div>
            </section>
        </div>
    )
}

export default OtherNews