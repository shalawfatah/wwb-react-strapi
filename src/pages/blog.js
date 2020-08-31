import React from 'react'
import Layout from '../components/layout'
import BlogNewsCard from '../components/blog/BlogNewsCard'
import Category from '../components/utilities/Category'
import Sideline from '../components/utilities/Sideline'
import SideWithoutSearch from '../components/utilities/SideWithoutSearch'


const Blog = () => {
    return (
        <Layout>
            <div className="flex flex-wrap">
            <div className="w-1/3">
            <Sideline  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <SideWithoutSearch headline="Top Posts" subheadOne="Blog Title 1" subheadTwo="Blog title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            <div className="w-full flex flex-wrap">
            <BlogNewsCard />

            </div>
            </div>
        </Layout>
    )
}

export default Blog