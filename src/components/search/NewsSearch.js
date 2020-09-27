import React, {useState, useMemo} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Fuse from "fuse.js";
import Link from 'gatsby-link'

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
  
const NewsSearch = () => {
    const {allStrapiIndustries:{edges:searchData}} = useStaticQuery(allDataQuery)
    const [results, setResults] = useState([])
    const fuse = useMemo(() => new Fuse(searchData, fuseOptions), [])
    const handleSearch = e => {
        const input = e.target.value
        const found = fuse.search(input)
        setResults(found)
    }
    return (
        <>
            <input
            className="shadow appearnce-none border rounded w-full py-2 px-3"
            id="search"
            type="text"
            placeholder="Search..."
            onChange={handleSearch} 
            />
            <div className="absolute bg-white w-1/3 overflow-auto shadow px-4">
                {results.map((result)=> {
                    return (
                    <div className="mt-6">
                    <div className="text-gray-900 text-xl py-2">{result.item.node.title}</div> 
                    <div className="text-gray-600 text-md py-2">{result.item.node.quote}</div>
                    <Link className="text-white bg-orange-600 rounded-full p-2 my-8 hover:bg-orange-400 transition-all duration-500 ease-in" to={result.item.node.slug}>Read More...</Link>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default NewsSearch