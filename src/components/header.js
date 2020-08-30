import React, { Component } from 'react'
import links from '../constants/nav-items'
import {Link} from 'gatsby'
import Image from '../images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div class="flex justify-between items-center px-10 border-b-2 flex-wrap">
                <div>
                <Link to="/">
                <img src={Image} alt="Image" class="w-24 h-24" />
                </Link>
                </div>
                <div>
                {links.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold float-left m-1 hero">
                        <Link fade to={link.url} className={`${link.additional} flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-sm cursor-pointer main-menu`}>{link.text}</Link>
                    </li>
                )
            })}</div>
            
            </div>
        )
    }
}

export default Header
