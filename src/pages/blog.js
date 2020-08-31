import React from 'react'
import Layout from '../components/layout'
import BlogNewsCard from '../components/blog/BlogNewsCard'
import Category from '../components/utilities/Category'

const Blog = () => {
    return (
        <Layout>
            <Category  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <BlogNewsCard />
        </Layout>
    )
}

export default Blog