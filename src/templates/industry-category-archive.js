import React from 'react'
import Layout from '../components/layout'
import FirstNews from '../components/news/FirstNews'
import OtherNews from '../components/news/OtherNews'
import TextHeader from '../components/utilities/TextHeader'
import Pager from '../components/utilities/Pager'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import NewsSearch from '../components/search/NewsSearch'


const NewsCatArchive = ({data, pageContext}) => {
    const {allStrapiIndustries: {nodes:articles}} = data
    return (
        <Layout>
          <SEO title="News Categories" />
          <div className="lg:w-full md:w-1/3 sm:w-full mx-auto">
          <div className="my-4">
          <NewsSearch />
          </div>
            <ul className="py-5 px-5 flex flex-wrap justify-center">
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat rounded menu-all text-center"><AniLink fade to='/news' activeStyle={{color: 'white', fontWeight: '800', borderBottom: '2px solid white'}} >All News</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat rounded menu-economy text-center"><AniLink fade to='/news/economy' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Economy</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat rounded menu-endangerment text-center"><AniLink fade to='/news/endangerment' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Endangerment</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-innovations text-center"><AniLink fade to='/news/innovations' activeStyle={{color: 'white', fontWeight: '800', borderBottom: '2px solid white'}} >Innovations</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat rounded menu-medical text-center"><AniLink fade to='/news/medical-science' activeStyle={{ color: 'black', fontWeight: '800', borderBottom: '2px solid black'}} >Medical Science</AniLink></li>
            <li className="hover:font-extrabold cursor-pointer list-none my-2 mx-5 p-2 blog-archive-cat text-gray-200 rounded menu-opportunity text-center"><AniLink fade to='/news/opportunity' activeStyle={{color: 'white', fontWeight: '800', borderBottom: '2px solid white'}} >Opportunity</AniLink></li>
            </ul>
            </div>
            {articles[0] && <FirstNews title={articles[0].title} quote={articles[0].quote} image={articles[0].report_photo.childImageSharp.fluid.src} slug={`${articles[0].slug}`} />}
            <div className="flex flex-wrap justify-center">
            <div className="lg:w-2/3 md:w-2/3 sm:w-2/3">
              <TextHeader text="Latest News" />
            {articles.map((article)=> {
                return (
                  <div key={article.id}>
                  <OtherNews title={article.title} quote={article.quote} image={article.report_photo.childImageSharp.fluid.src} slug={`${article.slug}`} />
                  </div>
                )
            })}
            <div className="py-16">
                <Pager pageContext={pageContext} />
                </div>
            </div>
            </div>
        </Layout>
    )
}

export default NewsCatArchive

export const query = graphql`
query getSingleNewsCategory($slug: String!)
  {
    strapiNewsCategories(slug: { eq: $slug }) {
      name
      }
      allStrapiIndustries(
        filter: {news_category: {slug: {eq: $slug}}}
        sort: {fields: published_at, order: DESC}
        ) {
        nodes {
          report_photo {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          quote
          content
          title
          slug
          id
          minutes_read
          date(formatString: "MM")
            article_author {
            name
          }
        }
    }
    allStrapiNewsCategories {
      nodes {
        slug
        name
      }
    }
  }
`
