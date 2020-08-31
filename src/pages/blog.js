import React from 'react'
import Layout from '../components/layout'
import BlogNewsCard from '../components/blog/BlogNewsCard'

const Blog = () => {
    return (
        <Layout>
            <div className="flex flex-wrap">
            <BlogNewsCard />
            </div>
        </Layout>
    )
}

export default Blog