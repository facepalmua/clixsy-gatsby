import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeTemplate from "../components/page-templates/HomeTemplate"

export default function Home({ data }) {
  const post = data.allWpPage.edges[0].node

  return (
    <Layout>
      
      <Seo title="home" />
     <HomeTemplate post={post} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      edges {
        node {
          title
          featuredImage {
            node {
              gatsbyImage(width: 600, layout: FIXED)
            }
          }
        }
      }
    }
  }
`
