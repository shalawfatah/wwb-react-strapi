import React from 'react'
import Button from '../utilities/Button'
import beePic from '../../images/wwb-team.jpeg'
import ButtonFree from '../utilities/ButtonFree'
import './MarginalEvent.css'


const MarginalEvent = () => {
    return (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 ">
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative for-free-btn">
                          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={beePic} alt="blog" />
                          <div className="button-event">
                          <ButtonFree text="May 30 2021" />
                          </div>
                          <div className="p-6">
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 headline">The Catalyzer</h1>
                            <p className="leading-relaxed mb-3 para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <p className="text-xs"><span className="text-sm text-grey-900 mr-2">⚓</span><span className="text-xs text-gray-500">123 Street Name, Vancouver, A1B 2C3</span></p>
                            <div className="flex items-center flex-wrap ">
                            <Button text="Read More" link='/single-event/' />
                            </div>
                      </div>
                    </div>
                  </div>
    )
}

export default MarginalEvent