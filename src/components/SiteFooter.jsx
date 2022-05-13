import React from "react"

const SiteFooter = () => {
  return (
    <>
      <footer className="bg-black pt-28 relative md:pt-16">
        <div className="tab-black"></div>
        <div className="container mx-auto grid grid-cols-4 gap-4 md:grid-cols-2 ">
          <div className="md:col-span-full md:block md:mx-auto md:pb-16">
            <a href="<?php echo home_url('/') ?>">
              {/* <img className="lozad mb-7" data-src="<?= get_stylesheet_directory_uri() ?>/_assets/public/images/logo.svg"> */}
            </a>
            <ul className="text-white space-y-2 text-base">
              <li>
                <a href="/media-room/">Media Room</a>
              </li>
              <li>
                <a href="/social-wall/">Social Wall</a>
              </li>
              <li>
                <a href="/blog/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="md:pl-8">
            <h6 className="text-2xl text-white font-oswald mb-7 uppercase">
              Contact
            </h6>
            <ul className="text-white space-y-2 text-base">
              <li>Clixsy</li>
              <li>
                <a href="tel:(801)701-2030"> (801) 701-2030</a>
              </li>
              <li>
                <a href="mailto:info@clixsy.com"> info@clixsy.com</a>
              </li>
            </ul>
          </div>
          <div className="md:pl-8">
            <h6 className="text-2xl text-white font-oswald mb-7 uppercase">
              Learn more
            </h6>
            <ul
              id="menu-footer-menu"
              className="text-white space-y-2 text-base"
            >
              <li
                id="menu-item-49"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"
              >
                <a href="https://www.clixsy.com/seo/">SEO</a>
              </li>
              <li
                id="menu-item-82"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"
              >
                <a href="https://www.clixsy.com/law-firm/">Legal Marketing</a>
              </li>
              <li
                id="menu-item-51"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"
              >
                <a href="https://www.clixsy.com/about-us/">About Us</a>
              </li>
              <li
                id="menu-item-52"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"
              >
                <a href="https://www.clixsy.com/smart-ads/">Smart Ads</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 mt-8 md:pt-6 md:mt-16 border-t-2 border-grey ">
          <p className="text-white text-tiny text-center uppercase">
            <span className="hidden md:block"></span>
            <a href="<?php echo get_page_link(60); ?>">Terms & Conditions</a> |
            <a href="<?php echo get_page_link(55); ?>">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
