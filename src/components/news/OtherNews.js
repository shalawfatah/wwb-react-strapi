import React from 'react'
import Button from '../Button'
import {Link} from 'gatsby'
import ButtonMiddle from '../utilities/ButtonMiddle'

const OtherNews = () => {
    return (
        <div>
            <section class="text-gray-700 body-font">
            <div class="container px-2 py-10 mx-auto">
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <Button text="Read More" />
                </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <Button text="Read More" />
                </div>
                <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <Button text="Read More" />
                </div>
                </div>
                <div className="py-5">
                <ButtonMiddle text="View More ..." />
                </div>
            </div>
            </section>
        </div>
    )
}

export default OtherNews