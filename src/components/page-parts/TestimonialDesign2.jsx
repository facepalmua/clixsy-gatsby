import React from "react"
import ImageById from "../page-parts/ImageById"

const TestimonialDesign2 = ({
  title,
  imageId,
  content,
  author,
  authorInfo,
  removeBorder,
}) => {
  return (
    <>
      <section className="relative pt-10">
        <div className="container mx-auto">
          {title && (
            <h2
              className="text-5xl text-black leading-tight font-oswald  pb-0 lg:flex lg:justify-between lg:items-center"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          )}
        </div>
        <div className="container mx-auto grid grid-cols-testimonials-design-2 pt-10 pb-20 lg:pb-12 lg:pt-12 sm:grid-cols-none">
          <div className="relative">
            {imageId && (
              <ImageById
                id={imageId}
                width="100"
                height="100"
                classes="block w-max mx-auto sm:mx-0 sm:mb-5 rounded-full"
              />
            )}
            <div className="testimonial_decor bg-green sm:hidden"></div>
          </div>
          <div className="pl-28 sm:pl-0">
            {content && <p className="pb-8 pr-8 lg:pr-0">{content}</p>}
            {author && (
              <p className="font-bold font-oswald text-lg">{author}</p>
            )}
            {authorInfo && <p>{authorInfo}</p>}
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialDesign2
