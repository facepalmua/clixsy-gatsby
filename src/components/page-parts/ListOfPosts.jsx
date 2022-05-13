import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
const ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allWpPost {
      edges {
        node {
          title
          uri
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              gatsbyImage(height: 288, width: 523)
            }
          }
        }
      }
    }
  }
`
const allPosts = data => {
  return (
    <>
      {Object.keys(data.edges).map((keys, i) => (
        <Link
          className="blog_post_item relative h-72 flex flex-wrap items-end"
          to={data.edges[keys].node.slug}
          key={keys}
        >
          <GatsbyImage
            className={`!absolute z-0 w-full h-full object-cover`}
            alt={data.edges[keys].node.title}
            image={data.edges[keys].node.featuredImage.node.gatsbyImage}
            formats={["auto", "webp", "avif"]}
          />
          <div className="blog_bg_overlay absolute z-1 w-full h-full"></div>
          <div className="blog_bg_overlay_second absolute z-1 w-full h-full"></div>
          <div className="relative mx-4 w-full">
            <div className="blog_post_item_title font-oswald text-green text-3xl leading-none mb-3 ">
              {data.edges[keys].node.title}
            </div>

            <div
              className="font-libre text-white text-base mb-2 mr-9"
              dangerouslySetInnerHTML={{
                __html:
                  data.edges[keys].node.excerpt.length > 150
                    ? `${data.edges[keys].node.excerpt.substring(0, 150)}...`
                    : data.edges[keys].node.excerpt,
              }}
            ></div>
            <div className="font-libre text-sm mb-2.5">
              {data.edges[keys].node.date}
            </div>
            <div className="chevron_link absolute right-0.5 bottom-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
              >
                <path
                  id="Icon_ionic-ios-arrow-dropright-circle"
                  data-name="Icon ionic-ios-arrow-dropright-circle"
                  d="M3.375,21.875a18.5,18.5,0,1,0,18.5-18.5A18.5,18.5,0,0,0,3.375,21.875Zm21.746,0-7.284-7.213a1.717,1.717,0,0,1,2.428-2.428l8.485,8.512a1.715,1.715,0,0,1,.053,2.366L20.443,31.5a1.714,1.714,0,1,1-2.428-2.419Z"
                  transform="translate(-3.375 -3.375)"
                  fill="#25dd7e"
                />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
const ListOfPosts = data => {
  return (
    <StaticQuery
      query={ALL_POSTS}
      render={({ allWpPost }) => {
        return allPosts(allWpPost)
      }}
    />
  )
}

export default ListOfPosts
