import React from "react"

const PageDefaultContent = ({ subtitle, tldrTitle, tldr, content }) => {
  return (
    <div>
      <article className="blog_post_single">
        {subtitle && (
          <div className="container prose mx-auto mt-12 mb-0 font-semibold text-xl leading-6">
            {subtitle}
          </div>
        )}

        <div className="container mx-auto grid">
          <div className="flex flex-wrap">
            <div className="blog_content_wrapper">
              <div className="tldp">
                {tldrTitle && (
                  <h2 className="mt-8 mb-5 text-4xl text-green font-semibold font-oswald">
                    {tldrTitle}
                  </h2>
                )}
                <div className=" border-green border-2 border-solid p-7 mb-14">
                  {tldr ? (
                    <div dangerouslySetInnerHTML={{ __html: tldr }}></div>
                  ) : (
                    <ul className="m-0 p-0 prose">
                      <li>
                        To the question of where SEO & PPC are headed, I think
                        they are already in the process of merging in a way that
                        will eventually make “doing” them synonymous or at the
                        very least tightly linked.{" "}
                      </li>
                      <li>
                        I also do believe in the 1+1=3 concept. In fact I think
                        it’s greater than just PPC/SEO. I think that if there’s
                        a spot on google available you should take it so you
                        fully cover the page as much as possible. Full Coverage
                        SEO we should trademark that…{" "}
                      </li>
                      <li>Full Coverage SEO™….done!</li>`
                    </ul>
                  )}
                </div>
              </div>

              <div
                className="prose mb-32"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div className="sidebar">
              <div
                className="pt-6 px-7 pb-0 mb-11"
                style={{ backgroundColor: "#828181" }}
              >
                <h3 className="text-white text-3xl font-semibold font-oswald mb-5">
                  Have a Question About This?
                  <br />
                  <span className="text-green">Ask Us About it Here.</span>
                </h3>
                <div className="main-form">FORM PLACEHOLDER</div>
              </div>

              <div className="read_more_section pt-6 pb-8 mb-11 border-green border-2 border-solid">
                <h3 className="text-black text-3xl font-semibold font-oswald mb-5 px-7">
                  Read More…
                </h3>
                <div className="related_posts mx-3.5">
                  <a
                    className="related_post_item pt-2 pb-2.5 px-3.5 block white relative"
                    href="#"
                  >
                    <div className="title font-oswald text-black text-2xl leading-none pt-1 pb-2">
                      Recent posts
                    </div>
                    <div
                      className="excerpt pb-2 mb-2"
                      style={{
                        height: `48px`,
                        overflow: `hidden`,
                        color: `#191919`,
                      }}
                    >
                      excerpt
                    </div>
                    <div className="date text-xs">date</div>
                    <svg
                      className="z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                    >
                      <path
                        id="Icon_ionic-ios-arrow-dropright-circle"
                        data-name="Icon ionic-ios-arrow-dropright-circle"
                        d="M3.375,16.375a13,13,0,1,0,13-13A13,13,0,0,0,3.375,16.375Zm15.281,0-5.119-5.069A1.207,1.207,0,1,1,15.244,9.6l5.963,5.981a1.2,1.2,0,0,1,.038,1.662l-5.875,5.894a1.2,1.2,0,1,1-1.706-1.7Z"
                        transform="translate(-3.375 -3.375)"
                        fill="#25dd7e"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="subscribe_form">
                <h3 className="text-black text-3xl font-semibold font-oswald mb-5 px-7">
                  Get it in Your Inbox
                </h3>
                <div className="main-form px-7 white_background">
                  FORM BLOG SUBSCRIBE PLACEHOLDER
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PageDefaultContent
