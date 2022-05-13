import { Link } from "gatsby"
import React from "react"
import { isBrowser, isMobile } from "react-device-detect"
import ImageById from "./ImageById"

const TextImageSection = ({
  title,
  imageId,
  content,
  btnText,
  btnLink,
  reverse,
  bgcolor,
}) => {
  return (
    <>
      <section
        className={`relative pt-20 pb-24 md:pt-10 md:pb-10 ${bgcolor || ""}`}
      >
        <div
          className={`relative z-10 container mx-auto flex gap-12  ${ reverse ? 'flex-row-reverse' : ""}`}
        >
          <div className="w-1/2 lg:w-full">
            {title && (
              <h2 className="text-5xl text-black leading-tight font-oswald  pb-6"  dangerouslySetInnerHTML={{ __html: title }}>
              </h2>
            )}
            {isMobile && imageId && (
              <ImageById
                id={imageId}
                classes="mx-auto block  mt-4 mb-16 w-3/4"
                width={200}
                height={400}
              />
            )}
            <div className="">
              <div className="prose" dangerouslySetInnerHTML={{ __html: content}}></div>

              {btnText && (
                <Link className="form_btn" to={btnLink}>
                  {btnText}
                </Link>
              )}
            </div>
          </div>

          {isBrowser && imageId && (
            <div className="flex justify-center items-center w-1/2 lg:hidden">
              <ImageById
                id={imageId}
                classes="mx-auto block"
                width={485}
                height={700}
                alt={title}
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default TextImageSection
