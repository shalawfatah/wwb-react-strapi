import React from 'react'
import Button from '../utilities/Button'
import {Link} from 'gatsby'
import ButtonMiddle from '../utilities/ButtonMiddle'
import './OtherNews.css'
import beePic from '../../images/bee-pic.jpg'

const OtherNews = () => {
    return (
        <div>
            <section class="text-gray-700 body-font m-10">
            <div class="container px-2 py-10 mx-auto ">
                <div class="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col industry-card p-2">
                <div class="sm:w-40 sm:h-40 h-48 w-48 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 poly-news">
                    <img src={beePic} />
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2 p-4">Shooting Stars</h2>
                    <p class="leading-relaxed text-base p-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <Button text="Read More" />
                </div>
                </div>
                <div class="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col industry-card p-2">
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2 p-4">The Catalyzer</h2>
                    <p class="leading-relaxed text-base p-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <Button text="Read More" link="/news-article" />
                </div>
                <div class="sm:w-40 sm:order-none order-first sm:h-40 h-48 w-48 sm:ml-10 inline-flex items-center justify-center poly-news text-indigo-500 flex-shrink-0">
                <img src={beePic} />
                </div>
                </div>
                <div class="flex items-center lg:w-full mx-auto sm:flex-row flex-col industry-card p-2">
                <div class="sm:w-40 sm:h-40 h-48 w-48 sm:mr-10 inline-flex items-center justify-center poly-news text-indigo-500 flex-shrink-0">
                <img src={beePic} />
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2 p-4">The 400 Blows</h2>
                    <p class="leading-relaxed text-base p-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <Button text="Read More" link="/news-article" />
                </div>
                </div>
                <div className="py-16">
                <ButtonMiddle text="View More ..." />
                </div>
            </div>
            </section>
        </div>
    )
}

export default OtherNews