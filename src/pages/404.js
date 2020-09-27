import React from "react"
import Layout from "../components/layout"
import SEO from '../components/SEO'
import logo from '../images/logo.png'
import Link from 'gatsby-link'


const NotFoundPage = () => (
  <Layout>
    <SEO title="Error" />
    <div className="py-5 flex justify-center items-center flex-col py-32">
    <h1 className="text-5xl text-orange-600">Seems like a col-de-sac for you</h1>
    <img src={logo} alt="logo" className="py-4" />
    <p className="text-xl text-gray-900">You just hit a route that doesn&#39;t exist... the sadness of it, ouch! May be we should return <Link className="text-orange-400 hover:text-orange-600 transition-all duration-500 ease" fade to='/'>Home</Link> instead?!</p>
    </div>
  </Layout>
)

export default NotFoundPage
