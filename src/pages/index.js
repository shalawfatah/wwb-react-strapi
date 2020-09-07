import React, {useState} from "react"
import Layout from "../components/layout"
import BeeCard from '../components/utilities/BeeCard'
import Slider from '../components/carousel/Slider'
import {GiBee} from 'react-icons/gi'

const IndexPage = () => {
  const [hideBee, setHideBee] = useState(false)
  return (
  <Layout>
    <div className="home-content mx-auto lg:h-60">
    {hideBee && <BeeCard />}
      <GiBee className="text-yellow-500 text-5xl bee-icon hover:text-yellow-300 hover:text-6xl" onClick={()=> setHideBee(hideBee => !hideBee)} />
    </div>
    <Slider />
  </Layout>
  )
}
export default IndexPage