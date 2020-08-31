import React from 'react'
import './Button.css';
import {Link} from 'gatsby'

const Button = ({text}) => {
    return (
        <li className="list-none font-semibold float-left m-1 hero">
                        <Link fade to='/' className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer button">{text}</Link>
        </li>
    )
}

export default Button