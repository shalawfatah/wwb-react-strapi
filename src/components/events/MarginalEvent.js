import React from 'react'
import Button from '../utilities/Button'
import beePic from '../../images/bee-pic.jpg'
import ButtonFree from '../utilities/ButtonFree'
import './MarginalEvent.css'


const MarginalEvent = () => {
    return (
                <section className="text-gray-700 body-font">
                  <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-4">
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative lg:w-1/3 for-free-btn">
                          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={beePic} alt="blog" />
                          <div className="button-event">
                          <ButtonFree text="May 30" />
                          </div>
                          <div className="p-6">
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <p className="text-xs"><span className="text-sm text-grey-900 mr-2">⚓</span><span className="text-xs text-gray-500">123 Street Name, Vancouver, A1B 2C3</span></p>
                            <div className="flex items-center flex-wrap ">
                            <Button text="Read More" link='/single-event/' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
    )
}

export default MarginalEvent