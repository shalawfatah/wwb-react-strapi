import React from "react"
import Layout from "../components/layout"
import beePic from '../images/anotherbee.png'
import ButtonRight from '../components/utilities/ButtonRight'

const Subscribe = () => (
  <Layout>
    <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-0 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={beePic} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium py-10 headline">Subscribe</h1>
                <p className="leading-10 text-xl text-grey-900">We are here to help and provide educational knowledge about bees. Subscribe to learn more about The WorldWide Bee Organization.</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    </div>
                <div className="flex py-10">
                <input type="text" className="border-solid border-2 border-gray-300 mx-2 w-full rounded-md px-4" placeholder="Enter your email here"/>
                <ButtonRight text="Subscribe" />
                </div>
            </div>
            </div>
        </div>
        </section>
  </Layout>
)

export default Subscribe