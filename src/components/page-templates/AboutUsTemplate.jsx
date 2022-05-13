import React from "react"
import AboutUsInfo from "../page-parts/AboutUsInfo"
import TextImageSection from "../page-parts/TextImageSection"
import Welcome from "../page-parts/Welcome"
import Form from "../page-parts/Form"

const AboutUsTemplate = post => {
  return (
    <>
      <Welcome
        title='Your Online <span class="text-green">Market Domination</span> <br class="md:hidden"> Experts'
        containerClasses="pt-36 pb-0 sm:pt-24 sm:pb-0 mx-auto"
        h1Classes="text-center w-full"
        bgimage={post}
      />
      <AboutUsInfo />
      <TextImageSection
        title='What Sets Us Apart As <br class="md:hidden"> <span class="text-green">Industry Leaders</span>'
        content="<p> We’ve been in the business since 2009 and in that time have seen many changes that have required the industry as a whole to evolve. From the beginning, we’ve been at the forefront of that evolution and remain committed to staying ahead of the pack through continual testing and innovation. <b>Clixsy co-founders William Pettet and Corey Vandenberg are regarded as some of the foremost experts in online search.</b> William pioneered the ability to influence Google’s Autosuggest, which led to doing the same on Amazon. </p>
      <p> This put Clixsy at the forefront of understanding how human interaction with search is a portion of what ranks a website. <b>Clixsy is frequently consulted by other SEO companies</b> and regularly presents at industry conferences and in exclusive groups to share insights about the state of search. Given our track record of revenue-driving results for clients, we have been entrusted to oversee campaigns for companies in some of the most challenging markets in the country. </p>"
        imageId={253}
        bgcolor="bg-white"
      />
      <Form
        title='Yes, I am ready to <span class="text-green">get more qualified leads</span> and <br class="lg:hidden"> take market share from competition'
      />
    </>
  )
}

export default AboutUsTemplate
