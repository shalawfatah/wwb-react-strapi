// import Layout from '../components/layout'
// import beePic from '../images/bee-pic.jpg'
// import AuthorProfile from '../components/news/AuthorProfile'
// import RelatedStories from '../components/news/RelatedStoriesComponent'
// import Header from '../components/utilities/Header'
// import {FiChevronLeft} from 'react-icons/fi'
// import Link from 'gatsby-link'


// import React from 'react'

// const newsArticle = ({data}) => {
//     const {title, report_photo, content, minutes_read} = data.getSingleIndustry.nodes
//     return (
//                     <Layout>
//                 <section className="text-gray-700 body-font py-5">
//                 <Link fade to="/news/" >
//                 <FiChevronLeft className="bg-orange-600 text-white text-4xl rounded-full hover:bg-orange-500 cursor-pointer transition duration-500 ease-in-out" />
//                 </Link>
//                 <div className="container px-5 py-0 mx-auto flex flex-col">
//                     <div className="lg:w-5/6 mx-auto">
//                     <div className="rounded-lg h-64 overflow-hidden">
//                         <img alt="content" class="object-cover object-center h-full w-full" src={report_photo.childImageSharp.fluid.src} />
//                     </div>
//                     <div className="py-8">
//                     <Header text={title}/>
//                     </div>
//                     <div className="flex flex-col sm:flex-row">
//                         <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
//                         <div className="flex flex-col items-center text-center justify-center">
//                             <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Article Author</h2>
//                             <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
//                             <p className="text-sm text-gray-500 ">12 April 2021</p>
//                             <p className="text-sm text-gray-900 py-2">♣ {minutes_read} min read</p>
//                             <h2 className="text-2xl text-gray-900 italic">{article.quote}</h2>
//                         </div>
//                         </div>
//                         <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
//                         <p className="leading-relaxed text-lg mb-4">{content}</p>
//                         </div>
//                     </div>
//                     <div><AuthorProfile /></div>
//                     <p className="text-gray-400">-- Put article icon before Related Stories Text</p>
//                     <div className="text-3xl"> Related Stories</div>
//                    <RelatedStories />
//                     </div>
//                 </div>
//                 </section>
//                 </Layout>
//     )
// }

// export default newsArticle

// export const query = graphql`
//   {
//     getSingleIndustry(id: {eq: $id}) {
//       nodes {
//         quote
//         content
//         title
//         minutes_read
//         date(formatString: "MM")
//         report_photo {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `