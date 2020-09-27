import React from 'react'
import Layout from '../components/layout'
import FirstNews from '../components/news/FirstNews'
import OtherNews from '../components/news/OtherNews'
import Header from '../components/utilities/Header'
import Pager from '../components/utilities/Pager'
import Link from 'gatsby-link'
import SEO from '../components/SEO'



const NewsCatArchive = ({data, pageContext}) => {
    const {allStrapiIndustries: {nodes:articles}} = data
    return (
        <Layout>
          <SEO title="News Categories" />
            <FirstNews title={articles[0].title} quote={articles[0].quote} image={articles[0].report_photo.childImageSharp.fluid.src} slug={`/news/${articles[0].slug}`} />
            <div className="flex flex-wrap">
            <div className="lg:w-1/3 md:w-1/3 sm:w-full mx-auto">
            <input type="search" id="gsearch" placeholder="Search..." name="gsearch" className="my-5 py-2 search-button mx-2" />
            <ul className="py-5">
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/news' activeStyle={{ color: '#F08C00'}} >All</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/news/economy' activeStyle={{ color: '#F08C00'}} >Economy</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/news/endangerment' activeStyle={{ color: '#F08C00'}} >Endangerment</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/news/innovations' activeStyle={{ color: '#F08C00'}} >Innovations</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/news/medical-science' activeStyle={{ color: '#F08C00'}} >Medical Science</Link></li>
            <li className="hover:text-orange-600 cursor-pointer list-none my-5"><Link fade to='/news/opportunity' activeStyle={{ color: '#F08C00'}} >Opportunity</Link></li>
            </ul>
            </div>
            <div className="lg:w-2/3 md:w-2/3 sm:w-2/3">
            <Header text="Latest News" />
            {articles.map((article)=> {
                return <OtherNews title={article.title} quote={article.quote} image={article.report_photo.childImageSharp.fluid.src} slug={`/news/${article.slug}`} />
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