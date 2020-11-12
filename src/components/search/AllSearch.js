import React, {useState, useMemo} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Fuse from "fuse.js";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './SearchStyle.css'

const fuseOptions = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    keys: [
      "node.slug",
      "node.title"
    ]
  }

const allDataQuery = graphql`
  query {
    allStrapiApitherapies {
      edges {
        node {
          subtitle
          slug
          title
        }
      }
    }
    allStrapiBlogs {
        edges {
          node {
            quote
            slug
            title
          }
        }
      }
      allStrapiEducations {
        edges {
          node {
            summary
            slug
            title
          }
        }
      }
      allStrapiArticleAuthors {
        edges {
          node {
            author_title
            author_summary
            name
            slug
          }
        }
      }
      allStrapiIndustries {
        edges {
          node {
            quote
            slug
            title
          }
        }
      }
  }
`
  
const AllSearch = () => {
    const {allStrapiApitherapies:{edges:searchData}, allStrapiBlogs:{edges:searchDataTwo}, allStrapiEducations:{edges:searchDataThree}, allStrapiIndustries:{edges: searchDataFour}, allStrapiArticleAuthors:{edges:searchDataFive}} = useStaticQuery(allDataQuery)
    const [results, setResults] = useState([])
    const fuse = useMemo(() => new Fuse(searchData, fuseOptions), [searchData])
    const fuseTwo = useMemo(() => new Fuse(searchDataTwo, fuseOptions), [searchDataTwo])
    const fuseThree = useMemo(() => new Fuse(searchDataThree, fuseOptions), [searchDataThree])
    const fuseFour = useMemo(() => new Fuse(searchDataFour, fuseOptions), [searchDataFour])
    const fuseFive = useMemo(() => new Fuse(searchDataFive, fuseOptions), [searchDataFive])



    const handleSearch = e => {
        const input = e.target.value
        const found = fuse.search(input)
        const foundTwo = fuseTwo.search(input)
        const foundThree = fuseThree.search(input)
        const foundFour = fuseFour.search(input)
        const foundFive = fuseFive.search(input)

        

        const searchCombined = found.concat(foundTwo).concat(foundThree).concat(foundFour).concat(foundFive)
        setResults(searchCombined)
    }
    return (
        <>
        <div className="flex justify-center">
            <input
            className="shadow appearnce-none border rounded-full py-2 my-2 px-3 w-full outline-none mx-20"
            id="search"
            type="text"
            placeholder="Search..."
            onChange={handleSearch} 
            />
        </div>
            <div className="absolute bg-white sm:w-2/3 overflow-auto shadow px-4 someZee mx-20 search-box">
                {results.map((result)=> {
                    return (
                    <div className="pb-10">
                    <div className="mt-6" key={result.item.node.id}>
                    <div className="text-gray-900 text-xl py-2">{result.item.node.title}</div> 
                    <div className="text-gray-600 text-md py-2">{result.item.node.summary}</div>
                    <AniLink fade className="text-white bg-orange-600 rounded-full p-2 my-8 hover:bg-orange-400 transition-all duration-500 ease-in" to={result.item.node.slug}>Read More...</AniLink>
                    </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default AllSearch