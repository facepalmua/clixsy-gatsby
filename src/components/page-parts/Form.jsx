import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Form = ({ title }) => {
  return (
    <>
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          alt="decoration"
          src={"../../../content/assets/section__contact-us--bg.jpg"}
          formats={["auto", "svg", "webp", "avif"]}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
          }}
        >
          <span className="gap-6 text-white bg-green w-48 h-12 items-center justify-center rounded-sm mt-6 hidden"></span>
          <section className="bg-left-top bg-no-repeat bg-cover relative">
            <div className="container mx-auto relative z-20">
              <h2
                className="text-5xl text-white leading-tight font-oswald pt-20 pb-16 lg:pb-8 lg:pt-16"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <div className="main-form lg:w-7/12 lg:mx-auto sm:w-full">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/JlOcLrtgThyfLGTSAF75"
                  className="border-0 w-full"
                  style={{ height: "393px" }}
                  scrolling="no"
                  title="form block"
                  id="JlOcLrtgThyfLGTSAF75"
                ></iframe>
                <script src="https://api.leadconnectorhq.com/js/form_embed.js"></script>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Form
