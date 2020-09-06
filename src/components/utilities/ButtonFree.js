import React from 'react'
import './ButtonFree.css';
import {Link} from 'gatsby'

const ButtonFree = ({text}) => {
    return (
        <li className="list-none font-semibold m-1">
                        <Link fade to='#' className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button-free">{text}</Link>
        </li>
    )
}

export default ButtonFree