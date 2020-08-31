import React from 'react'
import Search from './Search'

 
const Sideline = ({headline, subheadOne, subheadTwo, subheadThree, subheadFour, subheadFive}) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4">
                <div className="px-6 py-4">
                    <Search />
                    <div className="font-bold text-xl mb-2 py-5">{headline}</div>
                    <p className="text-gray-700 text-base py-2 border-b-2">
                    {subheadOne}
                    </p>
                    <p className="text-gray-700 text-base py-2 border-b-2">
                    {subheadTwo}
                    </p>
                    <p className="text-gray-700 text-base py-2 border-b-2">
                    {subheadThree}
                    </p>
                    <p className="text-gray-700 text-base py-2 border-b-2">
                    {subheadFour}
                    </p>
                    <p className="text-gray-700 text-base py-2 border-b-2">
                    {subheadFive}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sideline