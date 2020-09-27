import React from "react"
import Layout from "../components/layout"
import SEO from '../components/SEO'


const NotFoundPage = () => (
  <Layout>
    <SEO title="Error" />
    <div className="py-5">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
