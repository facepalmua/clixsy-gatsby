import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import AboutUsTemplate from "../components/page-templates/AboutUsTemplate"
import ServiceTemplate from "../components/page-templates/ServiceTemplate"
import SmarterAdsTemplate from "../components/page-templates/SmarterAdsTemplate"
import LawFirmTemplate from "../components/page-templates/LawFirmTemplate"
import ContactUsTemplate from "../components/page-templates/ContactUsTemplate"
import BlogTemplate from "../components/page-templates/BlogTemplate"
export default function BlogPost({ data }) {
  const post = data.allWpPage.edges[0].node
  const selectCurrentPageTemplate = parameter => {
    switch (parameter) {
      case "About Us":
        return <AboutUsTemplate post={post} />
      case "Service Page":
        return <ServiceTemplate post={post} />
      case "Smarter Ads":
        return <SmarterAdsTemplate post={post} />
      case "Law Firm":
        return <LawFirmTemplate post={post} />
      case "Contact Us":
        return <ContactUsTemplate post={post} />
      case "Blog":
        return <BlogTemplate post={post} />
      default:
        return parameter + " - here is template"
    }
  }

  return (
    <Layout>
      <Seo title={post.title} />
      <>
        {selectCurrentPageTemplate(post.template.templateName)}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              gatsbyImage(width: 600, layout: FIXED)
            }
          }
          template {
            templateName
          }
        }
      }
    }
  }
`
