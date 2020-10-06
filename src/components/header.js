import React, { useState } from 'react'
import links from '../constants/nav-items'
import Link from "gatsby-link"
import Image from '../images/logo.png'
import * as FaIcons from 'react-icons/fa';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
        return (
            <div class="flex justify-between items-center px-10 border-b-2 flex-wrap">
                <div className="logo flex items-center justify-center">
                <Link to="/">
                <img src={Image} alt="WWB Logo" class="w-16 py-4 mr-4" />
                </Link>
                <div className="text-sm -leading-3">
                <p>Worldwide Bee</p>
                <p>The Free Honey Bee Encyclopedia</p>
                </div>
                </div>
                <div>
                {links.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold float-left m-1 hero">
                        <Link fade to={link.url} activeStyle={{ color: '#F08C00'}}  className={`${link.additional} flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer main-menu`}>{link.text}</Link>
                    </li>
                )
            })}
                <Link fade to='/subscribe/' activeStyle={{backgroundColor: '#F08C00', color: '#FFF'}} className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer main-menu special-menu">Subscribe</Link>
            </div>
            <FaIcons.FaBars className="text-3xl text-orange-500 cursor-pointer hamburger transition-all duration-500 ease-in-out" onClick={showSidebar} />
            <div className={sidebar ? 'slider-menu transition-all duration-500 ease-in-out' : 'slider transition-all duration-500 ease-in-out'}>
            {links.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold m-3 transition-all duration-500 ease-in-out">
                        <Link fade to={link.url} activeStyle={{ color: '#F08C00'}}  className={`${link.additional} flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer second-menu transition-all duration-500 ease-in-out`}>{link.text}</Link>
                    </li>
                )
            })}
            </div>
            </div>
            
        )
}

export default Header
