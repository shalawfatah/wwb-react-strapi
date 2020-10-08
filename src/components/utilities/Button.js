import React from 'react'
import './Button.css';

const Button = ({text, link}) => {
    return (
        <li className="list-none font-semibold lg:float-left lg:text-center m-4">
                        <button fade to={link} className="flex justify-center text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer button">{text}</button>
        </li>
    )
}

export default Button