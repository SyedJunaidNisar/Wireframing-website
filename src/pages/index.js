import React from "react"
import BodySection from "../components/layout/bodySection/BodySection"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <BodySection />
    </Layout>
  )
}

export default IndexPage
