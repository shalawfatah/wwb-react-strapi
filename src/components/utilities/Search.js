import React from 'react'

const Search = () => {
    return (
        <div>
            <form class="w-full max-w-sm mx-2 px-2">
                <div class="flex items-center border-b border-teal-500 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
                <button class="text-xl flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-full" type="button">
                ©
                </button>
            </div>
        </form>
        </div>
    )
}

export default Search