import React from 'react'
import Layout from '../components/layout'
import ApiCard from '../components/ApiCard'

const Apiculture = () => {
    return (
        <Layout>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Apiculture</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4">Showcasing the best people in the industry, all things bees and anything related to bee farmers. </p>
            <div className="flex flex-wrap mx-auto">
             <ApiCard><p>Hello</p></ApiCard> 
             <ApiCard><p>Hello</p></ApiCard> 
             <ApiCard><p>Hello</p></ApiCard> 
             <ApiCard><p>Hello</p></ApiCard> 
             <ApiCard><p>Hello</p></ApiCard> 
             <ApiCard><p>Hello</p></ApiCard> 
             <ApiCard><p>Hello</p></ApiCard> 

             </div>
        </Layout>
    )
}

export default Apiculture