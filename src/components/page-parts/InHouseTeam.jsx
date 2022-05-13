import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { isBrowser, isMobile } from "react-device-detect"

const InHouseTeam = () => {
  return (
    <div>
      <div className="in_house_team">
        <div className=" flex items-start justify-between container pt-20 mx-auto px-4">
          <div className="section_content">
            <h2 className="font-oswald text-black text-5xl mb-5">
              You’ll feel like we are your in-house team of industry experts
            </h2>
            <p className="subtitle font-oswald text-dark text-4xl mb-7">
              Work with a team that fully understands your business and{" "}
              <span>gives 100% all the time</span>
            </p>
            {isMobile && (
              <div className="relative">
                <button className="iframe absolute top-1/2 left-1/2 block transform -translate-x-5 -translate-y-9">
                  <svg
                    className=" w-14 block"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="play"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#FFF"
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                      className=""
                    ></path>
                  </svg>
                </button>
                <StaticImage
                  alt="decoration"
                  src={"../../../content/assets/MikeMorse-video.webp"}
                  className="in_house_mobile"
                  formats={["auto", "svg", "webp", "avif"]}
                />
              </div>
            )}
            <p>
              If you ask any of our clients (yes, we’ll gladly get you
              references) each will mention how hands on we are, that we push
              the envelope and constantly work to innovate competitive
              advantages.
            </p>
            <p>
              They’ll tell you that we’re much more than merely an “SEO” or
              “PPC” company to them. We’re an extension of their team. We have
              years of knowledge working with every aspect of growing a business
              and generously give of our time and resources to our clients to
              ensure success.
            </p>
            <p>
              Many agencies try emulating us and are consistently 12-24 months
              behind the curve. We’re leaders in our industry and have the
              results, data and client testimonials to back it up.
            </p>
            <a className="btn_green" href="/contact-us/">
              Get Clixsy on My Team
            </a>
          </div>
          {isBrowser && (
            <div className="relative">
              <button className="iframe absolute z-10 top-1/2 left-1/2 block transform -translate-x-5 -translate-y-9 animate-pulse ">
                <svg
                  className=" w-14 block"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#FFF"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    className=""
                  ></path>
                </svg>
              </button>
              <StaticImage
                  alt="decoration"
                  src={"../../../content/assets/MikeMorse-video.webp"}
                  className="felix_img"
                  formats={["auto", "svg", "webp", "avif"]}
                />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InHouseTeam
