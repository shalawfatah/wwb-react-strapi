import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Pager = ({pageContext}) => {
    const {previousPagePath, nextPagePath} = pageContext
    return (
            <div className="flex justify-between py-10">
            {previousPagePath && (
                <p className="text-white bg-orange-500 rounded-full pl-6 pr-6 font-bold text-lg hover:bg-orange-300 transition-all duration-500 ease-in-out"><AniLink to={previousPagePath}>Previous</AniLink></p>
            )}
            {nextPagePath && (
                <p className="text-white bg-orange-500 rounded-full pl-6 pr-6 font-bold text-lg hover:bg-orange-300 transition-all duration-500 ease-in-out"><AniLink to={nextPagePath}>Next</AniLink></p>
            )}
            </div>
    )
}

export default Pager
