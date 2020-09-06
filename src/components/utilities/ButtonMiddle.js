import React from 'react'
import './ButtonMiddle.css';
import Link from 'gatsby-link'

const ButtonMiddle = ({text, link}) => {
    return (
        <li className="list-none font-semibold m-1 hero flex flex-wrap justify-center">
            <Link fade to={link} className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button">{text}</Link>
        </li>
    )
}

export default ButtonMiddle