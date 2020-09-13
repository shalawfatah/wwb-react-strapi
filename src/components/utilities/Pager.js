import React from 'react'
import Link from 'gatsby-link'

const Pager = ({pageContext}) => {
    const {previousPagePath, nextPagePath} = pageContext
    return (
            <div className="flex justify-between py-10">
            {previousPagePath && (
                <p className="text-white bg-orange-500 rounded-full pl-6 pr-6 font-bold text-lg hover:bg-orange-300 transition-all duration-500 ease-in-out"><Link to={previousPagePath}>Previous</Link></p>
            )}
            {nextPagePath && (
                <p className="text-white bg-orange-500 rounded-full pl-6 pr-6 font-bold text-lg hover:bg-orange-300 transition-all duration-500 ease-in-out"><Link to={nextPagePath}>Next</Link></p>
            )}
            </div>
    )
}

export default Pager
