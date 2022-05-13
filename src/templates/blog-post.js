import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Form from "../components/page-parts/Form"
import Welcome from "../components/page-parts/Welcome"
import PageDefaultContent from "../components/page-parts/pageDefaultContent"  
import Seo from "../components/seo"
export default function BlogPost({ data }) {
  const post = data.allWpPost.edges[0].node
  return (
    <Layout>
       <Seo title={post.title} />
      <Welcome
        title={post.title}
        bgimage={post}
        containerClasses="pt-48 pb-10 sm:pt-24 sm:pb-0 mx-0"
        h1Classes="text-left w-full"
      />
      <PageDefaultContent
        subtitle={`Some subtitle`}
        tldrTitle={post.post.tldr.title}
        tldr={post.post.tldr.items}
        content={post.content}
      />
      <Form title='Yes, I am ready to <span class="text-green">get more qualified leads</span> and <br class="lg:hidden"> take market share from competition' />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          post {
            tldr {
              fieldGroupName
              items
              title
            }
          }
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
