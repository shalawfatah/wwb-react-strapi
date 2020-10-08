import React from 'react'
import Layout from '../components/layout'
import FirstNews from '../components/news/FirstNews'
import OtherNews from '../components/news/OtherNews'
import Header from '../components/utilities/Header'
import Pager from '../components/utilities/Pager'
import Link from 'gatsby-link'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import NewsSearch from '../components/search/NewsSearch'


const NewsCatArchive = ({data, pageContext}) => {
    const {allStrapiIndustries: {nodes:articles}} = data
    return (
        <Layout>
          <SEO title="News Categories" />
          <div className="lg:w-full md:w-1/3 sm:w-full mx-auto">
            <ul className="py-5 px-5 flex flex-wrap justify-center">
            <NewsSearch />
            <li className="hover:text-orange-500 cursor-pointer list-none my-2 mx-5 p-2 rounded-full"><Link fade to='/news' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >All</Link></li>
            <li className="hover:text-orange-500 cursor-pointer list-none my-2 mx-5 p-2 rounded-full"><Link fade to='/news/economy' activeStyle={{ backgroundColor: '#F08C00', color: 'white', padding: '.75rem', borderRadius: '9999px'}} >Economy</Link></li>
            <li className="hover:text-orange-500 cursor-pointer list-none my-2 mx-5 p-2 rounded-full"><Link fade to='/news/endangerment' activeStyle={{ backgroundColor: '#F08C00', color: 'white',  padding: '.75rem', borderRadius: '9999px'}} >Endangerment</Link></li>
            <li className="hover:text-orange-500 cursor-pointer list-none my-2 mx-5 p-2 rounded-full"><Link fade to='/news/innovations' activeStyle={{ backgroundColor: '#F08C00', color: 'white',  padding: '.75rem', borderRadius: '9999px'}} >Innovations</Link></li>
            <li className="hover:text--orange-500 cursor-pointer list-none my-2 mx-5 p-2 rounded-full"><Link fade to='/news/medical-science' activeStyle={{ backgroundColor: '#F08C00', color: 'white',  padding: '.75rem', borderRadius: '9999px'}} >Medical Science</Link></li>
            <li className="hover:text-orange-500 cursor-pointer list-none my-2 mx-5 p-2 rounded-full"><Link fade to='/news/opportunity' activeStyle={{ backgroundColor: '#F08C00', color: 'white',  padding: '.75rem', borderRadius: '9999px'}} >Opportunity</Link></li>
            </ul>
            </div>
            <FirstNews title={articles[0].title} quote={articles[0].quote} image={articles[0].report_photo.childImageSharp.fluid.src} slug={`${articles[0].slug}`} />
            <div className="flex flex-wrap justify-center">
            <div className="lg:w-2/3 md:w-2/3 sm:w-2/3">
              <Header text="Latest News" />
            {articles.map((article)=> {
                return <OtherNews title={article.title} quote={article.quote} image={article.report_photo.childImageSharp.fluid.src} slug={`${article.slug}`} />
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
