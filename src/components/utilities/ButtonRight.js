import React from 'react'
import './ButtonRight.css';
import {Link} from 'gatsby'

const ButtonRight = ({text}) => {
    return (
        <li className="list-none font-semibold m-1 flex flex-wrap justify-right">
                        <Link fade to='/' className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button">{text}</Link>
        </li>
    )
}

export default ButtonRight