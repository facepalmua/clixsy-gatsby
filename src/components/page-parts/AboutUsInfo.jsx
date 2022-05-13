import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { isBrowser, isMobile } from "react-device-detect"
const AboutUsInfo = () => {
  return (
    <>
      <section className="container mx-auto pt-24 pb-28 lg:pt-8 lg:pb-16">
        <h2 className="text-center text-5xl font-oswald pb-20 lg:pb-12 md:text-left">
          Do you want to take market share from your{" "}
          <br className="md:hidden" /> competitors with{" "}
          <span className="text-green">expert SEO</span> that generates
          qualified <br className="md:hidden" /> leads ready to be closed? 
        </h2>
        <StaticImage
          alt="expert SEO that generates qualified leads"
          src={"../../../content/assets/about-us-img.jpg"}
          layout="fixed"
          className="block mx-auto mb-20 md:mb-8"
          formats={["auto", "svg", "webp", "avif"]}
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-none">
          <div>
            <div className="prose">
              <p>
                {" "}
                The companies we work with appreciate our team’s drive and
                passion to bring measurable value and deliver real results.{" "}
              </p>

              <p>
                {" "}
                <b>Clixsy puts its clients’ results first.</b> We act as an
                integrated partner and are never satisfied with merely “doing
                our job”.{" "}
              </p>

              <p>
                {" "}
                As part of our high-touch approach, we are in regular contact
                with our clients – consulting them on their needs and working to
                solve problems for them that other agencies would dismiss as
                “out of scope”.
              </p>
            </div>
          </div>
          <div className="prose">
            <p>
              {" "}
              Given our high level of dedication and investment in our clients’
              success, we are selective with whom we take on as a new client.{" "}
              <b>
                So, if you have aggressive growth goals and are prepared to
                invest in market domination for the long-term, let’s talk and
                see if we are a good fit.
              </b>{" "}
            </p>

            <p>
              {" "}
              You risk nothing to have us take a look and see what might be
              holding your company back online. At the end of the day, you’ll
              have to decide if it makes sense for us to work together, but
              you’ll find that we’re fair in our analysis. If an incumbent is
              doing a good job we’ll tell you that. If there’s ways to improve
              either by you instructing them, or hiring us, we’re happy to be of
              service.{" "}
            </p>
          </div>
        </div>
        <a className="form_btn" href="<?php echo get_page_link(45) ?>">
          Get an Assessment
        </a>
      </section>
      
      <section
        className="bg-smoke pt-24 pb-12 lg:pt-8  relative overflow-hidden bg-no-repeat bg-cover about-us__lines-bg"
      >
        <div className="container mx-auto grid grid-cols-2 gap-8 lg:grid-cols-none">
          <div>
            <h3 className="text-5xl font-oswald pb-6 lg:pb-12">
              We Are Your Leading-Edge, <br className="md:hidden" />{" "}
              <span className="text-green">Results-Driven</span> Agency
            </h3>
            {isMobile && (
              <StaticImage
                alt="laptop"
                layout="fixed"
                src={"../../../content/assets/about-us-laptop.svg"}
                className="mx-auto mb-12 w-3/4"
                formats={["auto", "svg", "webp", "avif"]}
              />
            )}
            <div className="prose">
              <p>
                Clixsy is a results-driven agency with a specialized knowledge
                of the legal, ecommerce and reputation management sectors. Our
                only care in the world is figuring out how to consistently
                produce meaningful, quantifiable results.
              </p>
            </div>
          </div>

          {isBrowser && (
            <div>
              <StaticImage
                alt="laptop"
                src={"../../../content/assets/about-us-laptop.svg"}
                className=" block mx-auto"
                layout="fixed"
                formats={["auto", "svg", "webp", "avif"]}
              />
            </div>
          )}
        </div>
        <div className="tab-white"></div>
      </section>
    </>
  )
}

export default AboutUsInfo
