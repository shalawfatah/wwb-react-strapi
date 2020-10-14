import React from 'react'
import "./layout.css";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet"


const LayoutNoPadding = ({children}) => {
  return (
      <div>
        <Helmet>
        <link href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" rel="stylesheet" type="text/css" />
        </Helmet>
        <div id="my-cool-header"></div>
          <Header />
            <section className="text-gray-700 body-font relative">
              <div className="px-0 py-0 mx-auto">
                {children}
              </div>
            </section>
          <Footer />
      </div>
  )
}

export default LayoutNoPadding