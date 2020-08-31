import React from 'react'
import Layout from '../components/layout'
import EducationCard from '../components/EducationCard'

const Education = () => {
    return (
        <Layout>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Beekeeping Programs</h1>
            <div className="flex flex-wrap">
            <EducationCard />
            <EducationCard />
            <EducationCard />
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