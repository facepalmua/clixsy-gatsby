import React from "react"
import ImageById from "./ImageById"
const TestimonialDesign1 = ({
  title,
  imageId,
  content,
  author,
  authorInfo,
  leftContent,
  removeBorder,
}) => {
  return (
    <>
      <section className="relative">
        <div className={`container mx-auto grid grid-cols-testimonials pt-20 pb-20 lg:pb-12 lg:pt-12  lg:grid-cols-none  ${removeBorder ? '' : 'border-b-2 mb-28' }`}>
          <div className="relative">
            {title && (
              <h2
                className="text-5xl text-black leading-tight font-oswald  pb-12"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            )}
            <div className="hidden lg:block mb-3 ">
              {leftContent ? (
                <ImageById
                  id={imageId}
                  width="100"
                  height="100"
                  classes="!block rounded-full"
                />
              ) : (
                <ImageById
                  id={imageId}
                  width="100"
                  height="100"
                  classes="!block rounded-full mx-auto lg:mb-10"
                />
              )}
              {leftContent && (
                <div className="testimonial_decor bg-green mob"></div>
              )}
            </div>
          </div>
          <div className="relative lg:hidden">
            {imageId && (
              <ImageById
                id={imageId}
                width="100"
                height="100"
                classes="!block mx-auto rounded-full"
              />
            )}
            <div className="testimonial_decor bg-green"></div>
          </div>
          <div className="pl-28 lg:pl-0">
            {content && (
              <p
                className="pb-8 pr-8 lg:pr-0 <?php echo (empty($left_content) ? 'text-center' : '') ?>"
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>
            )}
            {author && (
              <p className="font-bold font-oswald text-lg <?php echo (empty($left_content) ? 'text-center' : '') ?>">
                {author}
              </p>
            )}
            {author && (
              <p className="<?php echo (empty($left_content) ? 'text-center' : '') ?>">
                {authorInfo}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialDesign1
