import React, { useState } from 'react'
import links from '../constants/nav-items'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from '../images/logo.png'
import * as FaIcons from 'react-icons/fa';

const NavHeader = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
        return (
            <div className="flex justify-between items-center px-10 border-b-2 flex-wrap">
                <AniLink to="/">
                <img src={Image} alt="WWB Logo" className="w-16 py-4" />
                </AniLink>

                <div>
                {links.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold float-left m-1 hero">
                        <AniLink fade to={link.url} activeStyle={{ color: '#F08C00'}}  className={`${link.additional} flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer main-menu`}>{link.text}</AniLink>
                    </li>
                )
            })}
                <AniLink fade to='/subscribe/' activeStyle={{backgroundColor: '#F08C00', color: '#FFF'}} className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer main-menu special-menu">Subscribe</AniLink>
            </div>
            <FaIcons.FaBars className="text-5xl ml-2 text-orange-500 cursor-pointer hamburger transition-all duration-500 ease-in-out" onClick={showSidebar} />
            <div className={sidebar ? 'slider-menu transition-all duration-500 ease-in-out' : 'slider transition-all duration-500 ease-in-out'}>
            {links.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold m-3 transition-all duration-500 ease-in-out">
                        <AniLink fade to={link.url} activeStyle={{ color: '#F08C00'}}  className={`${link.additional} flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer second-menu transition-all duration-500 ease-in-out`}>{link.text}</AniLink>
                    </li>
                )
            })}
            </div>
            </div>
            
        )
}

export default NavHeader
