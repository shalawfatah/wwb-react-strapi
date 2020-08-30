import React, { Component } from 'react'
import SecondNav from '../constants/second-nav'
import {Link} from 'gatsby'
import SocialLinks from '../constants/icons'
import Image from '../images/logo.png'


class Footer extends Component {
    render() {
        return (
            <div className="py-10 bg-gray-400 items-center">
                <div className="flex justify-center items-center">
                {SecondNav.map((link)=> {
                return (
                    <li key={link.id} className="list-none font-semibold float-left m-1">
                        <Link fade to={link.url} className="flex text-grey-700 hover:text-gray-400 bg-none px-4 focus:outline-none text-sm cursor-pointer menu-border">{link.text}</Link>
                    </li>
                )
            })}</div>
            <div class="flex items-center justify-center">
            <div className="flex justify-center">
                <div className="flex justify-center mx-10">
            {SocialLinks.map((social)=> {
                return (
                    <li key={social.id} className="list-none p-2 text-2xl hover:text-indigo-400">
                        <Link to={social.url}>{social.icon}</Link>
                    </li>
                )
            })}
            </div>
            <Link to="/">
                <img src={Image} alt="Image" class="w-12 h-12 mx-10 bg-none" />
            </Link>
            <div className="text-sm mx-10">
                <p>1234 Street Avenue</p>
                <p>Vancouver British Columbia</p>
                <p>Canada, V1X 2X3</p>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Footer
