import React from 'react'
import Layout from '../components/layout'
import BlogNewsCard from '../components/blog/BlogNewsCard'
import Sideline from '../components/utilities/Sideline'
import SideWithoutSearch from '../components/utilities/SideWithoutSearch'
import EducationCard from '../components/EducationComponent/EducationCard'
import BlogCard from '../components/blog/BlogCard'
import Button from '../components/utilities/Button'


const Blog = () => {
    return (
        <Layout>
            <div className="flex flex-wrap">
            <div className="lg:w-1/3 mx-auto">
            <Sideline  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <SideWithoutSearch headline="Top Posts" subheadOne="Blog Title 1" subheadTwo="Blog title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>
            <BlogCard headline="Bee title" content="lorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsdlorem ipusm someone hi badsdsd lorem ipusm someone hi badsdsd" button={<Button text="Read More" link='/bee-article/' />}></BlogCard>

            </div>
        </Layout>
    )
}

export default Blog