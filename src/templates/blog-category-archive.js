import React from 'react'
import Layout from '../components/layout'
import BlogCard from '../components/blog/BlogCard'
import Pager from '../components/utilities/Pager'
import Link from 'gatsby-link'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import BlogSearch from '../components/search/BlogSearch'


const Blog = ({data, pageContext}) => {
    const {allStrapiBlogs:{nodes:blogs}} = data
    return (
        <Layout>
          <SEO title="Blog Categories" />
          <div className="lg:w-full mx-auto">
          <div className="my-4">
            <BlogSearch />
            </div>
            <ul className="py-5 px-5 flex flex-wrap justify-center">
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >All</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog/lifestyle' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Lifestyle</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog/farming' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Farming</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog/sustainability' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Sustainability</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog/health-and-wellness' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Health & Wellness</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog/cooking' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Cooking</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><Link fade to='/blog/education' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Education</Link></li>
            </ul>
            </div>
            <div className="flex flex-wrap py-5">
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
query getSingleBlogCategory($slug: String!)
  {
    strapiBlogCategories(slug: { eq: $slug }) {
      name
      }
      allStrapiBlogs(
        filter: {blog_category: {slug: {eq: $slug}}}
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
            article_author {
            name
          }
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