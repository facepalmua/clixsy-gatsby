import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const ConversionPoints = () => {
  return (
    <>
      <div className="conversion_points py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-oswald text-black text-5xl mb-5 leading-tight font-semibold mx-auto text-center">
            Two Conversion Points To Increase Your Ranking & Bottom Line
          </h2>
          <p className="subtitle font-oswald text-dark italic text-4xl mb-20 mx-auto text-center">
            We optimize two essential conversion points proven to{" "}
            <span>increase qualified lead flow</span>
          </p>
          <div className="cards_container flex justify-between items-center mx-auto">
            <div className="card_item">
              <div className="card_title">Click Conversion</div>
              <StaticImage
                layout="fixed"
                alt="Conversional point"
                src={"../../../content/assets/point1.svg"}
                className="m-auto -mb-7"
                formats={["auto", "webp", "avif"]}
              />
              <div className="card_content h-52 md:h-auto">
                When a potential client searches in Google, we work hard to earn
                the (1st) conversion, so they click you.
              </div>
            </div>

            <div className="cards_separator">+</div>

            <div className="card_item">
              <div className="card_title">Lead Conversion</div>
              <StaticImage
                layout="fixed"
                alt="Conversional point"
                className="m-auto -mb-7"
                src={"../../../content/assets/point2.svg"}
                formats={["auto", "webp", "avif"]}
              />
              <div className="card_content h-52 md:h-auto">
                Once a potential client has opened your site, we gear them
                towards contacting you. (2nd conversion)
              </div>
            </div>

            <div className="cards_separator">=</div>

            <div className="card_item">
              <div className="card_title">Qualified Leads</div>
              <StaticImage
                layout="fixed"
                alt="Conversional point"
                className="m-auto -mb-7"
                src={"../../../content/assets/point3.svg"}
                formats={["auto", "webp", "avif"]}
              />
              <div className="card_content h-52 md:h-auto">
                Finally, your potential clients convert into actual clients,
                raising your bottom line AND improving your ranking with Google.
              </div>
            </div>
          </div>
          <div className="conversion_footer font-libre leading-normal text-black">
            <p className="conversion_footer_part font-libre leading-normal text-black">
              Deliverables only have value if they help drive revenue. So, we
              want to assure you that we place a very high value on two
              essential conversion points:
            </p>
            <div className="numbered_list">
              <div className="nl_item">
                <span>01</span> <b>Click Conversion</b>
              </div>
              <div className="nl_item">
                <span>02</span> <b>Lead Conversion</b>
              </div>
            </div>
            Many SEO companies today don’t understand that BOTH of these
            conversion points matter not only to your bottom line, but to your
            rankings as well. Meaning Google is paying attention to whether your
            site satisfies the searcher, and if it doesn’t it can mean a
            demotion of your site.
          </div>
        </div>
      </div>
    </>
  )
}

export default ConversionPoints
