import React from "react"
import Header from "./Header"
import HeroSection from "./heroSection/HeroSection"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <main>{children}</main>
    </>
  )
}

export default Layout
