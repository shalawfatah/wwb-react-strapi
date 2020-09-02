import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BeeCard from '../components/utilities/BeeCard'

const IndexPage = () => (
  <Layout>
    <div className="home-content mx-auto">
      <BeeCard />
    </div>
  </Layout>
)

export default IndexPage