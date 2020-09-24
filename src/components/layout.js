import React from 'react'
import "./layout.css";
import Header from './header'
import Footer from './Footer'
import { Helmet } from "react-helmet"


const Layout = ({children}) => {
  return (
      <div>
        <Helmet>
        <link href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" rel="stylesheet" type="text/css" />
        </Helmet>
          <Header />
            <section class="text-gray-700 body-font relative">
              <div class="container px-5 py-0 mx-auto">
                {children}
              </div>
            </section>
          <Footer />
      </div>
  )
}

export default Layout


