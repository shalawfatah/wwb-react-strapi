import React from 'react'
import Button from './Button'
import beePic from '../../images/bee-pic.jpg'
import ButtonRight from './ButtonRight'


const BeeCard = () => {
    return (
            <div>
                <section class="text-gray-700 body-font">
                  <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative bg-gray-100">
                          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={beePic} alt="blog" />
                          <div class="p-6">
                            <h1 class="title-font text-md font-medium text-gray-600 mb-3">Bee Name</h1>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Bee Genome</h1>
                            <p class="leading-relaxed mb-3">Bee Info Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <div class="flex items-center flex-wrap ">
                            <ButtonRight text="Read More" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
    )
}

export default BeeCard