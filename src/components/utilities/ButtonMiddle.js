import React from 'react'
import './ButtonMiddle.css';
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ButtonMiddle = ({text, link}) => {
    return (
        <li className="list-none font-semibold m-1 flex flex-wrap justify-center">
            <AniLink fade to={link} className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button">{text}</AniLink>
        </li>
    )
}

export default ButtonMiddle