import React from 'react'
import Button from '../utilities/Button'

const FirstNews = ({title, quote, image, slug}) => {
    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-2 mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-6 headline">{title}</h1>
                    <p className="leading-8 p-4 para">{quote}</p>
                    <span>
                    <Button text="Read More" link={slug} />
                    </span>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default FirstNews