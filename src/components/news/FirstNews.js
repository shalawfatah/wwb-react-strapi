import React from 'react'
import Button from '../utilities/Button'
import beeImage from '../../images/anotherbee.png'

const FirstNews = () => {
    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-2 mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={beeImage} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-6">The Catcher in the Rye</h1>
                    <p className="leading-8 p-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <span>
                    <Button text="Read More" link='/news-article/' />
                    </span>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default FirstNews