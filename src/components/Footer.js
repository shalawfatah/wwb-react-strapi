import React, { Component } from 'react'
import SecondNav from '../constants/second-nav'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SocialLinks from '../constants/icons'
import Image from '../images/logo.png'


class Footer extends Component {
    render() {
        return (
            <div className="py-10 items-center footer">
                <footer className="text-gray-700 body-font">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                        <AniLink href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <AniLink to="/">
                        <img src={Image} alt="WWB Logo" className="w-12 bg-none" />
                        </AniLink>
                        <span className="text-xl">Worldwide Bee</span>
                        </AniLink>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 WWB —
                    <a href="https://twitter.com/shalawfatah" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@DevArt</a>
                    </p>
                    <div className="mx-auto">
                    {SecondNav.map((link)=> {
                    return (
                    <li key={link.id} className="list-none font-semibold m-1 my-5 float-left">
                        <AniLink fade to={link.url} activeStyle={{ color: '#F08C00'}} className={`${link.somelink} flex text-grey-700 hover:text-gray-400 bg-none px-4 focus:outline-none text-xs cursor-pointer second-nav flex-wrap`}>{link.text}</AniLink>
                    </li>
                    )
                    })}</div>
                    <div>
                    {SocialLinks.map((link)=> {
                    return (
                    <li key={link.id} className="list-none font-semibold m-1 my-5 float-left">
                        <AniLink fade to={link.url} activeStyle={{ color: '#F08C00'}} className="flex text-gray-600 hover:text-orange-500 bg-none focus:outline-none text-2xl cursor-pointer transition-all duration-500 ease-in-out" target="_blank">{link.icon}</AniLink>
                    </li>
                    )
                    })}
                    </div>
                    </div>
</footer>
            </div>
        )
    }
}

export default Footer
