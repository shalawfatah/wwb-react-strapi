import React from 'react'

const Header = ({text}) => {
    return (
    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 headline mt-10">{text}</h1>
    )
}
export default Header;