import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
const MaximizeOnline = () => {
  return (
    <>
      <div className="maximize_online bg-smoke pt-10 pb-20">
        <div className=" flex items-start justify-between container mx-auto">
          <StaticImage
            layout="fixed"
            alt="Laptop"
            height={843}
            className="felix_img"
            src={"../../../content/assets/laptop.svg"}
            formats={["auto", "webp", "avif"]}
          />
          <div className="section_content">
            <h2 className="font-oswald text-black text-5xl mb-5 leading-tight font-semibold">
              Maximize Your Online Visibility With{" "}
              <span>Full Coverage SEO™</span> in Your Market
            </h2>
            <StaticImage
              layout="fixed"
              alt="Laptop"
              className="felix_img_mobile"
              src={"../../../content/assets/laptop.svg"}
              formats={["auto", "webp", "avif"]}
            />
            <p>
              Clixsy’s SEO goes beyond just optimizing for a single placement on
              the search page.{" "}
              <b>
                We maximize your online visibility and coverage to ensure you
                dominate the search results for your market,
              </b>{" "}
              so you appear even when someone searches for your competitors.
            </p>
            <p>
              What’s more is that this routinely leads to our clients being
              found as many as 2-5 times on a single search page. That’s a
              single client who sees you at the very top, the middle, the bottom
              and the side of the Google search page.{" "}
              <b>
                If being at the top once is valuable, imagine the worth when a
                prospect thinks “Geez! They are everywhere!”.
              </b>{" "}
              Each impression gives you another opportunity to attract a new
              client.
            </p>
            <p>
              In addition, we give our clients an unmatched competitive
              advantage with our proprietary traffic signals technology proven
              to boost online visibility, coverage, and rankings. We guarantee
              that we are the only agency in the world that knows how to do this
              correctly. That’s because{" "}
              <b>
                we pioneered the ability to influence Google’s RankBrainTM
                algorithm
              </b>{" "}
              (Google’s machine-learning artificial intelligence system), which
              now makes up about a third of ranking factors. No other agency
              (unless they partner with us) has the same method to influence
              search results.
            </p>
            <p className="subtitle font-oswald text-dark italic text-4xl mb-7">
              Make The Smartest Choice{" "}
            </p>
            <Link className="btn_green" to="/contact-us/">
              I’m Ready
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaximizeOnline
