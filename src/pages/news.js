import React from 'react'
import Layout from '../components/layout'
import FirstNews from '../components/news/FirstNews'
import OtherNews from '../components/news/OtherNews'
import Header from '../components/utilities/Header'
import Sideline from '../components/utilities/Sideline'
import SideWithoutSearch from '../components/utilities/SideWithoutSearch'
import ButtonMiddle from '../components/utilities/ButtonMiddle'


const News = ({data}) => {
    const {allStrapiIndustries: {nodes:articles}} = data
    return (
        <Layout>
            <FirstNews title={articles[0].title} quote={articles[0].quote} image={articles[0].report_photo.childImageSharp.fluid.src} />
            <div className="flex flex-wrap">
            <div className="lg:w-1/3 md:w-1/3 sm:w-full mx-auto">
            <Sideline  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <SideWithoutSearch headline="Trending" subheadOne="News 1" subheadTwo="News title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            </div>
            <div className="lg:w-2/3 md:w-2/3 sm:w-2/3">
            <Header text="Latest News" />
            {articles.map((article)=> {
                return <OtherNews title={article.title} quote={article.quote} image={article.report_photo.childImageSharp.fluid.src} />
            })}
            <div className="py-16">
                <ButtonMiddle text="View More ..." />
                </div>
            </div>
            </div>
        </Layout>
    )
}

export default News

export const query = graphql`
  {
    allStrapiIndustries {
      nodes {
        quote
        content
        title
        minutes_read
        date(formatString: "MM")
        report_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
