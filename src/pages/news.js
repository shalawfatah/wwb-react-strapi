import React from 'react'
import Layout from '../components/layout'
import FirstNews from '../components/news/FirstNews'
import OtherNews from '../components/news/OtherNews'
import Header from '../components/utilities/Header'
import Sideline from '../components/utilities/Sideline'

const News = () => {
    return (
        <Layout>
            <FirstNews />
            <div className="flex flex-wrap">
            <div className="w-1/3">
            <Sideline  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            <div className="w-2/3">
            <Header text="Latest News" />
            <OtherNews />
            </div>
            <div className="w-1/3">
            <Sideline  headline="Trending" subheadOne="News 1" subheadTwo="News title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            </div>
        </Layout>
    )
}

export default News