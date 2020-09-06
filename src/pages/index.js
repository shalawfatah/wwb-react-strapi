import React from "react"
import Layout from "../components/layout"
import BeeCard from '../components/utilities/BeeCard'

const IndexPage = () => (
  <Layout>
    <div className="home-content mx-auto lg:h-60">
      <BeeCard />
    </div>
  </Layout>
)

export default IndexPage