import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const IMBAGE_BY_DATABASE_ID = graphql`
  query GET_IMBAGE_BY_DATABASE_ID {
    allWpContentNode {
      nodes {
        databaseId
        ... on WpMediaItem {
          id
          localFile {
            childImageSharp {
              gatsbyImageData
            }
            extension
            publicURL
          }
        }
      }
    }
  }
`

const ImageById = ({ id, classes, width, height, alt }) => {
  const returnNeededIndex = data => {
    let correctId = ""
    data.map((key, index) => {
      if (key.databaseId === id) {
        correctId = index
      }
    })
    if (
      !data[correctId]?.localFile?.childImageSharp &&
      data[correctId]?.localFile?.extension === "svg"
    ) {
      return <img className={classes} src={data[correctId].localFile.publicURL} alt={alt.replace( /(<([^>]+)>)/ig, '')  || 'image'} />
    } else {
      return (
        <>
          <GatsbyImage
            width={width}
            height={height}
            className={classes}
            alt={alt ? alt.replace( /(<([^>]+)>)/ig, '') : 'image'}
            image={data[correctId]?.localFile?.childImageSharp?.gatsbyImageData}
            formats={["auto", "webp", "avif"]}
          />
        </>
      )
    }
  }
  return (
    <StaticQuery
      query={IMBAGE_BY_DATABASE_ID}
      render={({ allWpContentNode: { nodes } }) => {
        return returnNeededIndex(nodes)
      }}
    />
  )
}

export default ImageById
