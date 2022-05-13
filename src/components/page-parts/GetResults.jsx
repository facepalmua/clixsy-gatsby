import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
const GetResults = () => {
  return (
    <>
      <div className="get_results_wrapper relative">
        <div className="tab-white-left"></div>
        <div className="get_results flex relative items-center justify-between container mx-auto px-4">
          <div className="section_content">
            <h2>Finally Get Results That Grow Revenue</h2>
            <p className="subtitle">
              Get qualified <span>leads that convert into revenue</span>, not
              vanity metrics and leads that waste your team’s time.
            </p>
            <StaticImage
              alt="decoration"
              layout="fixed"
              placeholder="None"
              src={"../../../content/assets/new_ill.svg"}
              className="get_res_mobile"
              formats={["auto", "svg", "webp", "avif"]}
            />
            <p>
              <b>
                You can pay for one of two things when you hire a Digital
                Marketing Agency: Activities or Results.
              </b>{" "}
              We live and die by our client's results. No client ever told us
              they want rankings or leads for the sake of having them. They want
              the revenue and growth to their business, obviously.
            </p>
            <p>
              I can promise you, you’ll never ever hear us hang our hat on
              meaningless vanity metrics or filler activities to justify our
              existence.
            </p>
            <p>
              <b>
                When you hire Clixsy, you’ll get 100% singular focus on getting
                real results that generate revenue for your business. Period.
              </b>
            </p>
            <p>
              Our promise to you is to get to a place where everything we do
              generates a measurable ROI so you can sleep soundly knowing Clixsy
              isn’t a cost to you. We pay for ourselves and then some.
            </p>
            <p>
              Hiring us is the moment you tell the world you’re done being 2nd
              place. If you want to outperform everyone else in your market,
              you’ve come to the right place.
            </p>
            <Link to="/contact-us" className="btn_green">
              Schedule My Assessment
            </Link>
          </div>
          <StaticImage
            alt="decoration"
            placeholder="blurred"
            src={"../../../content/assets/new_ill.svg"}
            formats={["auto", "svg", "webp", "avif"]}
          />
        </div>
      </div>
    </>
  )
}

export default GetResults
