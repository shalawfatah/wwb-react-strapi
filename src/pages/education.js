import React from 'react'
import Layout from '../components/layout'
import EducationCard from '../components/EducationComponent/EducationCard'
import Category from '../components/utilities/Category'

const Education = () => {
    return (
        <Layout>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Beekeeping Programs</h1>
            <div className="flex flex-wrap mx-auto">
            <Category  headline="Categories" subheadOne="Bee Programs" subheadTwo="Another title" subheadThree="Another Program" subheadFour="Final Title" subheadFive="Another Program" />
            <EducationCard headline="Api Card"></EducationCard>
            <EducationCard headline="Api Card"></EducationCard>
            <EducationCard headline="Api Card"></EducationCard>
            <EducationCard headline="Api Card"></EducationCard>
            <EducationCard headline="Api Card"></EducationCard>
            <EducationCard headline="Api Card"></EducationCard>

            </div>
        </Layout>
    )
}

export default Education