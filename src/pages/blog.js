import React from 'react'
import Layout from '../components/layout'
import Sideline from '../components/utilities/Sideline'
import SideWithoutSearch from '../components/utilities/SideWithoutSearch'
import BlogCard from '../components/blog/BlogCard'
import Button from '../components/utilities/Button'


const Blog = ({data}) => {
    const {allStrapiBlogs:{nodes:blogs}} = data
    return (
        <Layout>
            <div className="flex flex-wrap">
            <div className="lg:w-1/3 mx-auto">
            <Sideline  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <SideWithoutSearch headline="Top Posts" subheadOne="Blog Title 1" subheadTwo="Blog title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            {blogs.map((blog)=> {
                return <BlogCard headline={blog.title} content={blog.quote} button={<Button text="Read More" link='/{blog.strapiId}/' />} image={blog.photo.childImageSharp.fluid.src} />
            })}
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        photo {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        content
        category
        mintues_read
        title
        quote
      }
    }
  }
`