import React from "react"
import Layout from "../components/layout"
import BeeCard from '../components/utilities/BeeCard'
import Slider from '../components/carousel/Slider'

const IndexPage = () => (
  <Layout>
    <div className="home-content mx-auto lg:h-60">
      <BeeCard />
    </div>
    <Slider />
  </Layout>
)

export default IndexPage