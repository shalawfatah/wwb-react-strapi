import React from 'react'
import Layout from '../components/layout'
import BlogCard from '../components/blog/BlogCard'
import Pager from '../components/utilities/Pager'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogSearch from '../components/search/BlogSearch'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'


const Blog = ({data, pageContext}) => {
    const {allStrapiBlogs:{nodes:blogs}} = data
    return (
        <Layout>
          <SEO title="Blog" />
          <div className="lg:w-full mx-auto">
            <div className="my-4">
            <BlogSearch />
            </div>
            <ul className="py-5 px-5 flex flex-wrap justify-center">
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >All</AniLink></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog/lifestyle' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Lifestyle</AniLink></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog/farming' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Farming</AniLink></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog/sustainability' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Sustainability</AniLink></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog/health-and-wellness' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Health & Wellness</AniLink></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog/cooking' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Cooking</AniLink></li>
            <li className="hover:text-orange-600 cursor-pointer list-none  my-2 mx-5 p-2 rounded-full"><AniLink fade to='/blog/education' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Education</AniLink></li>
            </ul>
            </div>
            <div className="flex flex-wrap py-5">
           
            {blogs.map((blog)=> {
                return (
                  <div className="flex my-12">
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