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
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-all text-center"><AniLink fade to='/blog' activeStyle={{ color: 'white', fontWeight: '800', borderBottom: '2px solid white'}} >All Topics</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-economy text-center"><AniLink fade to='/blog/lifestyle' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Lifestyle</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-endangerment text-center"><AniLink fade to='/blog/farming' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Farming</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-innovations text-center"><AniLink fade to='/blog/sustainability' activeStyle={{ color: 'white', fontWeight: '800', borderBottom: '2px solid white'}} >Sustainability</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat rounded menu-medical text-center"><AniLink fade to='/blog/health-and-wellness' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Health & Wellness</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-opportunity text-center"><AniLink fade to='/blog/cooking' activeStyle={{ color: 'white', fontWeight: '800', borderBottom: '2px solid white'}} >Cooking</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat rounded menu-education text-center"><AniLink fade to='/blog/education' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Education</AniLink></li>
            </ul>
            </div>
            <div className="flex flex-wrap py-5 justify-center">
           
            {blogs.map((blog)=> {
                return (
                <div className="flex my-12" key={blog.id}>
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
        sort: {fields: published_at, order: DESC}
      ) {
      nodes {
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
        mintues_read
        title
        id
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