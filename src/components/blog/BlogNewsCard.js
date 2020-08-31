import React from 'react'
import Button from '../Button'
import beePic from '../../images/bee-pic.jpg'

const BlogNewsCard = () => {
    return (
            <div>
                <section class="text-gray-700 body-font">
                  <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                      <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={beePic} alt="blog" />
                          <div class="p-6">
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <div class="flex items-center flex-wrap ">
                            <Button text="Read More" />
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

export default BlogNewsCard