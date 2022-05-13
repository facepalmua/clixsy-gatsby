import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Welcome from "../page-parts/Welcome"
const ContactUsTemplate = post => {
  return (
    <>
      <Welcome
        subtitle={"Clixsy – the Smarter Choice"}
        title='<span className="text-green">Contact us</span>'
        containerClasses="pt-40 pb-20 sm:pt-24 sm:pb-8"
        bgimage={post}
        h1Classes="mb-2"
        decor={true}
      />
      <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src={"../../../content/assets/section__contact-us--bg.jpg"}
          formats={["auto", "webp", "avif"]}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            display: "grid",
          }}
        >
          {/* Any content here will be centered in the component */}
          <section>
            <div className="container mx-auto grid grid-cols-2 gap-8 pb-12 md:grid-cols-none">
              <div>
                <h2 className="text-5xl text-white leading-tight font-oswald pt-20 pb-16 lg:pb-8 lg:pt-16">
                  Want to Have a Chat? Get in touch here.
                </h2>
                <div className="main-form contact-us-form">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/JlOcLrtgThyfLGTSAF75"
                    className="border-0 w-full"
                    style={{ height: "393px" }}
                    scrolling="no"
                    title="form contact page"
                    id="JlOcLrtgThyfLGTSAF75"
                  ></iframe>
                  <script src="https://api.leadconnectorhq.com/js/form_embed.js"></script>
                </div>
              </div>
              <div className="text-white pt-20 mb-20 md:pt-2 md:flex md:flex-col-reverse">
                <ul className="md:pt-8">
                  <li>
                    <a
                      href="tel:(801) 701-2030"
                      className="flex items-center mb-7  text-4xl font-oswald  md:w-3/4 mx-auto sm:text-2xl"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-phone-alt fa-w-16 fa-2x w-8 mr-4 "
                      >
                        <path
                          fill="#25DD7E"
                          d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                        ></path>
                      </svg>
                      (801) 701-2030
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@clixsy.com"
                      className="flex  items-center mb-7 text-4xl font-oswald  md:w-3/4 mx-auto sm:text-2xl"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-envelope fa-w-16 fa-2x w-8 mr-4"
                      >
                        <path
                          fill="#25DD7E"
                          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                        ></path>
                      </svg>
                      info@clixsy.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/fHUcqagT2eZMqU7u5"
                      className="flex  items-center mb-7 text-2xl font-oswald  md:w-3/4 mx-auto"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x w-8 md:w-16 mr-4"
                      >
                        <path
                          fill="#25DD7E"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        ></path>
                      </svg>
                      1246 Flint Meadow Dr Ste 102 <br className="md:hidden" />{" "}
                      Kaysville, UT 84037
                    </a>
                  </li>
                </ul>
                <iframe
                  className="w-full h-96 border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.080018761609!2d-111.96659268458477!3d41.045379179297086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530231dd7946f9%3A0x7bbad57d8371a8ff!2sClixsy!5e0!3m2!1sen!2sus!4v1630361223273!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ContactUsTemplate
