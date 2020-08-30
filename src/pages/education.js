import React from 'react'
import Layout from '../components/layout'
import EducationCard from '../components/EducationCard'

const Education = () => {
    return (
        <Layout>
            <div className="flex flex-wrap">
            <EducationCard />
            <EducationCard />
            <EducationCard />
            <EducationCard />
            <EducationCard />
            </div>
        </Layout>
    )
}

export default Education