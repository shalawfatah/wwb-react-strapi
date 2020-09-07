
import Layout from '../components/layout'
import beePic from '../images/bee-pic.jpg'
import ButtonMiddle from '../components/utilities/ButtonMiddle'

// Remember to add React Icon "IoIosArrowBack" for Homepage link on this article"

import React from 'react'

const singleEvent = () => {
    return (
        <Layout>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={beePic} />
                    </div>
                    <div className="container px-5 py-16 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-10">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 font-bold">Name of the Event <br /> <span className="text-lg font-thin ">Great style is easy. Article offers stylish modern, mid century, and scandinavian furniture from world renowned designers at accessible prices. Shop now.</span></h1>
                        <div><ButtonMiddle text="Tickets"/>
                        <ButtonMiddle text="Website"/>
                        </div>
                        </div>
                        <div className="lg:w-2/3 flex flex-col sm:flex-row items-start mx-auto">
                        <h1 className="flex-grow  text-2xl font-medium title-font text-gray-900 font-bold">About this Event <br /> <span className="text-lg font-thin para">Great style is easy. Article offers stylish modern, mid century, and scandinavian furniture from world renowned designers at accessible prices. Shop now.</span></h1>
                        <div className="event-shadow">
                        <h1 className="flex-grow text-2xl font-medium title-font text-gray-900 font-bold lg:w-full">Date and Time <br /> <span className="text-sm font-thin para">13 May 2021</span></h1>
                        <h1 className="flex-grow text-2xl font-medium title-font text-gray-900 font-bold">Location<br /> <span className="text-sm font-thin para">2134 Address Street, Vancouver, B.C V1Y 1A1</span></h1>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </section>
                
            </Layout>
    )
}

export default singleEvent