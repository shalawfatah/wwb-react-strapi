import React from 'react'
import Button from './Button'
import beePic from '../../images/bee-pic.jpg'
import ButtonRight from './ButtonRight'
import Link from 'gatsby-link'


const BeeCard = () => {
    return (
                <section class="text-gray-700 body-font">
                  <div class="container px-1 py-1 mx-auto sm:px-0">
                    <div class="flex flex-wrap -m-4">
                      <div class="p-4 lg:w-1/3 md:w-1/3 sm:w-1/2">
                        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative bg-gray-100">
                          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={beePic} alt="blog" />
                          <div class="p-6">
                            <h1 class="title-font text-md font-medium text-gray-600 mb-3">Bee Name</h1>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Bee Genome</h1>
                            <p class="leading-relaxed mb-3">Bee Info Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                              <li className="list-none font-semibold m-1 flex flex-wrap justify-right">
                              <Link fade to='/bee-article/' className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button">Read More</Link>
                              </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
    )
}

export default BeeCard