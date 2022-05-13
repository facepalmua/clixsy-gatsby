import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const DominanteSearch = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto grid grid-cols-2 pb-28">
          <div className="lg:col-span-full">
            <h2 className="text-5xl text-black leading-tight font-oswald  pb-6">
              Dominate Search Results With Clixsy’s{" "}
              <span className="text-green">
                Full Coverage SEO{" "}
                <sup className="text-xs -inset-x-2 -inset-y-8">TM</sup>
              </span>
            </h2>
            <h3 className="font-oswald text-4xl italic pb-8">
              Stay top of mind with your target audience with more impressions
              per keyword than your competitors
            </h3>
            <StaticImage
              alt="Dominante search"
              src={"../../../content/assets/dominate_search_img.jpg"}
              className="mx-auto !hidden lg:!block pt-12 pb-12 lozad"
              formats={["auto", "svg", "webp", "avif"]}
            />
            <div className="default-text">
              <p>
                Our results speak for themselves. Clixsy’s clients consistently
                win even in the toughest local and national markets. And that’s
                not enough to satisfy us.
              </p>

              <p>
                When you hire Clixsy you won’t get an agency that pats
                themselves on the back after merely achieving a top ranking on
                page 1.
              </p>

              <p>
                <b>
                  We pioneered a concept no one else offers called Full Coverage
                  SEO™.
                </b>
              </p>

              <p>
                A Clixsy client will see consistent growth in their website’s
                visibility until the point that their name is on page one
                numerous times for the same search. It’s common for us to
                display 3-5 different impressions for our client’s brand, on the
                same search result.
              </p>

              <p> Let me be clear, so there’s no confusion.</p>

              <p>
                <b>
                  Imagine what it would mean for your business if a person who’s
                  ready to do business now saw your brandname not once, but
                  numerous times on page one.
                </b>
                What would happen if every time a prospect searched they thought
                “Man! They (you) are everywhere”?
              </p>

              <p> Now you’re separating from the pack in a way they can’t.</p>

              <p>
                If being at the top of the page is valuable, what’s it worth to
                be at the top, the middle, the side and the bottom?
              </p>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-center pl-16">
            <StaticImage
              alt="decoration"
              src={"../../../content/assets/dominate_search_img.jpg"}
              className="block mx-auto lozad"
              formats={["auto", "svg", "webp", "avif"]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default DominanteSearch
