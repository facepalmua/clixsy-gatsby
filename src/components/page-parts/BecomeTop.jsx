import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { isBrowser, isMobile } from "react-device-detect"
const BecomeTop = () => {
  return (
    <>
      <section className="pt-20 pb-24 md:pt-6 md:pb-12">
        <div className="container mx-auto grid grid-cols-2 gap-12 mb-20 md:grid-cols-none">
          <div>
            <h2 className="text-5xl text-black leading-tight font-oswald  pb-6">
              Become the top attorney in your area with{" "}
              <span className="text-green block">best-in-industry SEO</span>
            </h2>
            {isMobile && (
              <StaticImage
                layout="fixed"
                className="mb-8"
                alt="Become Top Attorney"
                src={"../../../content/assets/law-firm_1.png"}
                formats={["auto", "svg", "webp", "avif"]}
              />
            )}
            <div className="prose">
              <p>
                {" "}
                Looking to grow your law firm? Want more ideal clients and
                cases? <br className="md:hidden" />
                Want to be the top attorney in your area? Not sure if your
                current online marketing is as good as it can be?
              </p>

              <p>
                {" "}
                Again and again, we’ve proven that we know how to rank our
                clients at the top of the most competitive markets.
              </p>
            </div>
          </div>
          {isBrowser && (
            <div className="relative">
              <StaticImage
                layout="fixed"
                className="mb-8"
                width="491"
                height="401"
                alt="Become Top Attorney"
                src={"../../../content/assets/law-firm_1.png"}
                formats={["auto", "svg", "webp", "avif"]}
              />
            </div>
          )}
        </div>
        <div className="container mx-auto flex md:flex-wrap">
          <div className="w-4/12 md:w-full">
            <h6 className="font-oswald text-2xl mb-6">
              We’ve consistently ranked clients in the{" "}
              <span className="text-green">
                toughest markets across the country,
              </span>{" "}
              including:{" "}
            </h6>
            <p className="prose">
              Las Vegas, Nashville, Dallas, Philadelphia, Louisville, Boston,
              Birmingham, Rhode Island, Scranton, Boise{" "}
            </p>
          </div>

          <div className="w-4/12 md:w-full pl-20 ml-20  border-l-2 border-grey md:pl-0 md:ml-0 md:pt-12 md:mt-12 md:border-l-0 md:border-t-2">
            <h6 className="font-oswald text-2xl mb-6">
              And we’ve <span className="text-green">ranked</span> our clients{" "}
              <span className="text-green">nationally</span> as well in areas
              like:{" "}
            </h6>
            <p className="prose">
              Trucking Auto Liability, Hernia Mesh, Burn Injury, Mesothelioma,
              Jones Act
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <Link className="form_btn sm:mx-auto" to="/contact-us/">
            Get a Ranking Assessment
          </Link>
        </div>
      </section>
    </>
  )
}

export default BecomeTop
