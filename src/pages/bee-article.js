import Layout from '../components/layout'
import beePic from '../images/bee-pic.jpg'
import Header from '../components/utilities/Header'
import {FiChevronLeft} from 'react-icons/fi'
import Link from 'gatsby-link'


import React from 'react'

const beeArticle = () => {
    return (
        <Layout>
            <section className="text-gray-700 body-font">
                <Link fade to="/blog/" >
                <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
                </Link>
                <div className="container px-5 py-0 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" class="object-cover object-center h-full w-full" src={beePic} />
                    </div>
                    <div className="py-8">
                    <Header text="Article Title" />
                    </div>
                    <div className="flex flex-col sm:flex-row ">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Article Author</h2>
                            <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                            <p className="text-sm text-gray-500 ">12 April 2021</p>
                            <p className="text-sm text-gray-900 py-2">♣ 1min read</p>
                            <h2 className="text-2xl text-gray-900 italic ">“ Quote: lorem lorem ipusm some bipsum latin mimi”</h2>

                        </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-loose text-lg mb-4 para">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn. Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
        
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </Layout>
    )
}

export default beeArticle