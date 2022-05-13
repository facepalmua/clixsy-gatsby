import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const DefineResults = () => {
  return (
    <>
      <div className="define_results pt-24 pb-20 relative">
        <div className=" flex items-start justify-between container mx-auto">
          <div className="section_content relative">
            <h2 className="font-oswald text-black text-5xl mb-9 leading-tight font-semibold">
              How We Define <span>Results</span>
            </h2>
            <StaticImage
              layout="fixed"
              alt="Define results"
              className="felix_img_mobile"
              src={"../../../content/assets/define.png"}
              formats={["auto", "webp", "avif"]}
            />
            <p>
              <b>
                Clixsy Search Engine Optimization (SEO) centers on rank-driving,
                conversion-increasing, revenue-generating strategies.
              </b>{" "}
              Our results speak for themselves quickly. On the majority of our
              campaigns, our clients experience notable gains in 90 days or
              less. Within 6 months, most of our clients are enjoying top
              percentile of market share.
            </p>
            <p>
              Even in the hardest markets, our innovative and aggressive SEO
              strategies give our clients an edge.{" "}
              <b>
                We’ve competed and won in difficult local and national markets.
              </b>{" "}
              Our campaigns routinely see costs upwards of $200 per-click in
              Google Pay Per Click. When you see competition levels that high,
              you can be absolutely sure that gaining top organic rankings will
              be especially difficult. And yet, again and again, we rank our
              clients at the top of those markets
            </p>
            <p>
              <b>
                As one of the foremost experts in how Google is affected by
                online search behavior (humans), our team can rank you faster
                and more predictably.
              </b>{" "}
              We also know how to push the envelope without being penalized by
              Google and we can adjust to algorithm updates quicker than most
              agencies.
            </p>
          </div>

          <StaticImage
            layout="fixed"
            alt="Define results"
            className="felix_img"
            src={"../../../content/assets/define.png"}
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </>
  )
}

export default DefineResults
