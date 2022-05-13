import React from "react"
import Form from "../page-parts/Form"
import StrategicallyStayTop from "../page-parts/StrategicallyStayTop"
import TextImageSection from "../page-parts/TextImageSection"
import Welcome from "../page-parts/Welcome"
const SmarterAdsTemplate = post => {
  return (
    <>
      <Welcome
        subtitle="Clixsy Smarter Ads ™"
        title={`<span class="text-green">Get In Front</span>  Of People <br class="md:hidden"> Who Are Ready To Buy'`}
        containerClasses="pt-40 pb-20 sm:pt-24 sm:pb-8"
        h1Classes="mb-8"
        subtitleBottom="Smarter approach to retargeting potential <br> buyers who leave your site"
        bgimage={post}
        decor="true"
      />
      <StrategicallyStayTop />
      <TextImageSection
        title={`Drive Down Your <span class="text-green">Cost <br class="lg:hidden"> Per Lead</span> </span>`}
        content={`<p>We don’t have a “set it and forget it” mindset or take a “spray and pray” approach when it comes to PPC / Adwords. <b>We are fully driven to find every opportunity to drive your ad costs down.</b> Winning in PPC means a cost per lead average lower than you could get anywhere else. That’s what Clixsy can do for you. Not just beat your competition but beat the cost of other providers while doing a better job.</p><p>Instead of guessing at audiences, <b>we can target specific individuals with ads using our proprietary Smarter Ads technology.</b> In contrast, most marketers can only guess at general demographics and broad online behavior when they decide who to spend their money advertising to. As a consequence, they have only a vague idea of who will actually see the ads, so they have to make up for the lack of precision with massive volume. Given an unlimited budget, this can work. But we’ve never worked with clients who had unlimited budgets or who wanted to spend their advertising money so haphazardly.</p>`}
        imageId={261}
        bgcolor="bg-smoke"
      />
      <TextImageSection
        title={`<span class="text-green">“Steal”</span> Leads from Your Competition`}
        content={`<p><p>As an added competitive edge, our proven Smarter Ads get you in front of people that have seen your competitors. <b>Imagine being able to retarget your competition’s site visitors and secure the lead before they do.</b> <br><br>For example, John does a search for the type of service/product you offer. He takes a look at one or two results on Google. (If you don’t currently rank well in Google, then those results are probably your competitors.) But our Smarter Ads system notices John and adds him to a fresh real audience of prospects that we then target on ad platforms. Quickly John starts seeing compelling advertisements on Facebook and many other sites that he visits prompting him to call YOUR company or visit YOUR website. Your ads become so ubiquitous that your brand has taken over in his mind and pushed out the competitors. Think of what we just did: You literally got business that would have been your competitors’.  </p>`}
        imageId={270}
        bgcolor="bg-white"
        reverse={true}
      />
      <Form
        title='Yes, I am ready to <span class="text-green">get more qualified leads</span> and <br class="lg:hidden"> take market share from competition'
      />
    </>
  )
}

export default SmarterAdsTemplate
