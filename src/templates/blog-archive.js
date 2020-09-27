import React from 'react'
import Layout from '../components/layout'
import BlogCard from '../components/blog/BlogCard'
import Pager from '../components/utilities/Pager'
import Link from 'gatsby-link'
import BlogSearch from '../components/search/BlogSearch'
import SEO from '../components/SEO'


const Blog = ({data, pageContext}) => {
    const {allStrapiBlogs:{nodes:blogs}} = data
    return (
        <Layout>
          <SEO title="Blog" />
            <div className="flex flex-wrap py-5">
            <div className="lg:w-1/3 mx-auto">
            <ul className="py-5">
              <BlogSearch />
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog' activeStyle={{ color: '#F08C00'}} >All</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog/lifestyle' activeStyle={{ color: '#F08C00'}} >Lifestyle</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog/farming' activeStyle={{ color: '#F08C00'}} >Farming</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog/sustainability' activeStyle={{ color: '#F08C00'}} >Sustainability</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog/health-and-wellness' activeStyle={{ color: '#F08C00'}} >Health & Wellness</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog/cooking' activeStyle={{ color: '#F08C00'}} >Cooking</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/blog/education' activeStyle={{ color: '#F08C00'}} >Education</Link></li>
            </ul>
            </div>
            {blogs.map((blog)=> {
                return (
                  <div className="flex items-stretch my-12">
                <BlogCard headline={blog.title} content={blog.quote} slug={blog.slug} image={blog.photo.childImageSharp.fluid} />
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
        mintues_read
        title
        quote
        slug
      }
    }
    allStrapiBlogCategories {
      nodes {
        slug
        name
      }
    }
  }
`