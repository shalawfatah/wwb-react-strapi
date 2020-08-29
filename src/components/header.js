import React, { Component } from 'react'
import links from '../constants/nav-items'
import {Link} from 'gatsby'
import Image from '../images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div class="flex justify-between items-center px-10 border-b-2">
                <div>
                <img src={Image} alt="Image" class="w-24 h-24" />
                </div>
                <div>
                {links.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold float-left m-1 hero">
                        <Link fade to={link.path} className="flex text-grey-700 bg-white py-2 px-8 focus:outline-none hover:border-gray-700 rounded-full text-md border-solid border-2 border-gray-400">{link.text}</Link>
                    </li>
                )
            })}</div>
            </div>
        )
    }
}

export default Header
