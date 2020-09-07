import React from 'react'
import Layout from '../components/layout'
import MainEvent from '../components/events/MainEvent'
import MarginalEvent from '../components/events/MarginalEvent'

const Events = () => {
    return (
        <Layout>
              <MainEvent />
              <div className="flex flex-wrap">
              <MarginalEvent />
              <MarginalEvent />
              <MarginalEvent />
              <MarginalEvent />
              <MarginalEvent />
              <MarginalEvent />
              </div>
        </Layout>
    )
}

export default Events