import React from 'react'
import Layout from '../components/layout'
import FirstNews from '../components/news/FirstNews'
import OtherNews from '../components/news/OtherNews'
import Header from '../components/utilities/Header'

const News = () => {
    return (
        <Layout>
            <Header text="Latest News" />
            <FirstNews />
            <OtherNews />
        </Layout>
    )
}

export default News