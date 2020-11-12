import React, {useState, useMemo} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Fuse from "fuse.js";
import {navigate} from 'gatsby-link'
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
    allStrapiEducations {
      edges {
        node {
          summary
          slug
          title
        }
      }
    }
  }
`
  
const EducationSearch = () => {
    const {allStrapiEducations:{edges:searchData}} = useStaticQuery(allDataQuery)
    const [results, setResults] = useState([])
    const fuse = useMemo(() => new Fuse(searchData, fuseOptions), [searchData])
    const handleSearch = e => {
        const input = e.target.value
        const found = fuse.search(input)
        setResults(found)
    }
    return (
        <>
            <input
            className="shadow appearnce-none border rounded-full w-full py-2 px-3 outline-none "
            id="search"
            type="text"
            placeholder="Search..."
            onChange={handleSearch} 
            />
            <div className="absolute bg-white sm:w-2/3 overflow-auto shadow px-4 someZee search-box">
                {results.map((result)=> {
                    return (
                    <div className="mt-6" key={result.item.node.id}>
                    <div className="text-gray-900 text-xl py-2">{result.item.node.title}</div> 
                    <div className="text-gray-600 text-md py-2">{result.item.node.summary}</div>
                    <button fade onClick={()=> navigate(`/${result.item.node.slug}`)}>
                    <p className="text-white bg-orange-600 rounded-full p-2 my-8 hover:bg-orange-400 transition-all duration-500 ease-in">Read More...</p>
                    </button>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default EducationSearch