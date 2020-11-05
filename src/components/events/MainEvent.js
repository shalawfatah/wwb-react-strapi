import React from 'react'
import ButtonMiddle from '../utilities/ButtonMiddle'

const MainEvent = ({title, date, image, slug, setDays, setHours, setMinutes, setSeconds}) => {
    
    return (
        <section className="text-gray-700 body-font overflow-hidden py-5">
            <div className="container px-5 py-2 mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                <img alt={title} className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 mx-auto">
                    <div className="flex flex-wrap items-center justify-center">
                    <span className="text-gray-900 text-3xl title-font font-medium mb-1 mx-6" id="days">{setDays}</span><span className="text-sm text-gray-600 mr-6">Days</span>
                    <span className="text-gray-900 text-3xl title-font font-medium mb-1 mx-6" id="hours">{setHours}</span><span className="text-sm text-gray-600 mr-6">Hours</span>
                    <span className="text-gray-900 text-3xl title-font font-medium mb-1 mx-6" id="mins">{setMinutes}</span><span className="text-sm text-gray-600 mr-6">Minutes</span>
                    <span className="text-gray-900 text-3xl title-font font-medium mb-1 mx-6" id="secs">{setSeconds}</span><span className="text-sm text-gray-600 mr-6">Seconds</span>
                    </div>
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