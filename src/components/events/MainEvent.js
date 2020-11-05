import React from 'react'
import ButtonMiddle from '../utilities/ButtonMiddle'

const MainEvent = ({title, date, image, slug, setDays, setHours, setMinutes, setSeconds}) => {
    
    return (
        <section class="text-gray-700 body-font overflow-hidden py-5">
            <div class="container px-5 py-2 mx-auto">
                <div class="lg:w-full mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-4" id="days">{setDays}</span><span className="text-sm text-gray-600 mr-6">Days</span>
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-4" id="hours">{setHours}</span><span className="text-sm text-gray-600 mr-6">Hours</span>
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-4" id="mins">{setMinutes}</span><span className="text-sm text-gray-600 mr-6">Minutes</span>
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-4" id="secs">{setSeconds}</span><span className="text-sm text-gray-600 mr-6">Seconds</span>
                    <div className="py-10">
                    <h1 className="text-3xl font-extrabold text-center">{title}</h1>
                    </div>
                        <ButtonMiddle text="Register" link={`/events/${slug}`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainEvent