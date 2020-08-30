
import React from 'react'
import "./layout.css";
import Header from './header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
  )
}

export default Layout


