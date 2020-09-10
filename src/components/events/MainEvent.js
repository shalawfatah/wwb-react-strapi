import React from 'react'
import beePic from '../../images/bee-pic.jpg'
import Header from '../utilities/Header'
import ButtonMiddle from '../utilities/ButtonMiddle'

const MainEvent = ({title, date}) => {
    return (
        <section class="text-gray-700 body-font overflow-hidden">
            <div class="container px-5 py-2 mx-auto">
                <div class="lg:w-full mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={beePic} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-8">12<span className="text-sm text-gray-600 m-1">Days</span></span>
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-8">03<span className="text-sm text-gray-600 m-1">Hours</span></span>
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-8">42<span className="text-sm text-gray-600 m-1">Minutes</span></span>
                    <span class="text-gray-900 text-3xl title-font font-medium mb-1 mx-8">11<span className="text-sm text-gray-600 m-1">Seconds</span></span>
                    <div className="py-10">
                    <h1 className="text-3xl font-extrabold text-center">{title}</h1>
                    </div>
                <ButtonMiddle text="Register" link='/single-event/' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainEvent