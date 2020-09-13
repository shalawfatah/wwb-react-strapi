import React from 'react'
import Layout from '../components/layout'
import Sideline from '../components/utilities/Sideline'
import SideWithoutSearch from '../components/utilities/SideWithoutSearch'
import BlogCard from '../components/blog/BlogCard'
import Pager from '../components/utilities/Pager'


const Blog = ({data, pageContext}) => {
    const {allStrapiBlogs:{nodes:blogs}} = data
    return (
        <Layout>
            <div className="flex flex-wrap py-5">
            <div className="lg:w-1/3 mx-auto">
            <Sideline  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <SideWithoutSearch headline="Top Posts" subheadOne="Blog Title 1" subheadTwo="Blog title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            {blogs.map((blog)=> {
                return (
                  <div className="flex items-stretch my-12">
                <BlogCard headline={blog.title} content={blog.quote} slug={blog.slug} image={blog.photo.childImageSharp.fluid.src} />
                  </div>
                )
            })}
            </div>
                <div className="py-16">
                <Pager pageContext={pageContext} />
                </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
query($skip: Int!, $limit: Int!)
  {
    allStrapiBlogs(
        skip: $skip
        limit: $limit
      ) {
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
        slug
      }
    }
  }
`