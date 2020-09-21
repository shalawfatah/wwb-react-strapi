import React from 'react'
import Search from './Search'
import Link from 'gatsby-link'

 
const Sideline = ({headline, subheadOne, subheadTwo, subheadThree, subheadFour, subheadFive}) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4">
                <div className="px-6 py-4">
                    <Search />
                    <div className="font-bold text-xl mb-2 py-5">{headline}</div>
                    <p className="text-gray-700 text-base cursor-pointer hover:text-orange-600 hover:font-bold transition-all duration-500 ease-in-out">
                    {subheadOne}
                    </p>
                    <p className="text-gray-700 text-base cursor-pointer hover:text-orange-600 hover:font-bold transition-all duration-500 ease-in-out">
                    {subheadTwo}
                    </p>
                    <p className="text-gray-700 text-base cursor-pointer hover:text-orange-600 hover:font-bold transition-all duration-500 ease-in-out">
                    {subheadThree}
                    </p>
                    <p className="text-gray-700 text-base cursor-pointer hover:text-orange-600 hover:font-bold transition-all duration-500 ease-in-out">
                    {subheadFour}
                    </p>
                    <p className="text-gray-700 text-base cursor-pointer hover:text-orange-600 hover:font-bold transition-all duration-500 ease-in-out">
                    {subheadFive}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sideline