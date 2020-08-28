import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
    <h1>Shalaw</h1>
    <p>I will build this as my first project.</p>
    {
      data.allStrapiHome.edges.map(titles => {
        return (
          <div> <h1>
          {titles.node.first_title}
        </h1>
        <h2>{titles.node.second_title}</h2>
        <h2>{titles.node.third_title}</h2>
        </div>
      )
      })
    }
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    allStrapiHome {
      edges {
        node {
          first_title
          second_title
          third_title
          id
        }
      }
    }
  }
`