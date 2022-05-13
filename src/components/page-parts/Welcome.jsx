import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const Welcome = ({
  subtitle,
  title,
  subtitleBottom,
  button_text,
  button_url,
  decor,
  bgimage,
  containerClasses,
  h1Classes,
  wrapperClasses
}) => {
  return (
    
    <div className={`welcome_section relative md:overflow-hidden ${wrapperClasses ? wrapperClasses : ''}`}>
      <div style={{ display: "grid" }}>
        {bgimage ? (
          <GatsbyImage
            style={{
              gridArea: "1/1",
              width: "100%",
              height: "100%"
            }}
            placeholder="none"
            layout="fullWidth"
            aspectratio={3 / 1}
            alt="Welcome image"
            image={bgimage.post?.featuredImage?.node?.gatsbyImage || bgimage?.featuredImage?.node?.gatsbyImage}
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <StaticImage
            style={{
              gridArea: "1/1",
            }}
            placeholder="none"
            layout="fullWidth"
            aspectratio={3 / 1}
            alt="Welcom image"
            src={"../../../content/assets/gatsby-icon.png"}
            formats={["auto", "webp", "avif"]}
          />
        )}
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          {/* Any content here will be centered in the component */}
          <div
            style={{ height: `Inherit` }}
            className="flex items-center justify-between items-center container mx-auto"
          >
            <div className={`section_content z-20 ${containerClasses || ''}`}>
              {subtitle && (
                <p className="font-libre text-white uppercase italic text-2xl mb-9">
                  {subtitle}
                </p>
              )}
              {title && (
                <h1
                  className={`font-oswald text-white font-semibold mb-16 ${h1Classes ? h1Classes : ''}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
              )}
              {subtitleBottom && (
                <h3 className="text-4xl text-white italic font-oswald" dangerouslySetInnerHTML={{ __html: subtitleBottom}}>
                </h3>
              )}
              {button_text && button_url && (
                <Link className="btn_green" to="{button_url}">
                  {button_text}
                </Link>
              )}
            </div>
          </div>
          {decor && (
            <StaticImage
              style={{
                transform: "translateY(-50%)",
              }}
              placeholder="blurred"
              alt="decoration"
              src={"../../../content/assets/new_lines.svg"}
              className="!absolute right-0 top-2/4"
              formats={["auto", "webp", "avif"]}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Welcome
