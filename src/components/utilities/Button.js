import React from 'react'
import './Button.css';
import Link from 'gatsby-link'

const Button = ({text, link}) => {
    return (
        <li className="list-none font-semibold float-left m-4">
                        <Link fade to={link} className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer button">{text}</Link>
        </li>
    )
}

export default Button