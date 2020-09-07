import React from 'react'
import './ButtonFree.css';
import {Link} from 'gatsby'

const ButtonFree = ({text}) => {
    return (
        <li className="list-none font-semibold m-1">
                        <Link className="flex text-gray-600 bg-white py-2 px-6 focus:outline-none text-md button-free">{text}</Link>
        </li>
    )
}

export default ButtonFree