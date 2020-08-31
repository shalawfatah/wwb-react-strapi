import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Search = () => {
    return (
        <div>
            <form class="w-full max-w-sm mx-2 px-2">
                <div class="flex items-center border-b border-teal-500 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
                <BsSearch className="text-xl" />
            </div>
        </form>
        </div>
    )
}

export default Search