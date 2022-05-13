import React from "react"
import BecomeTop from "../page-parts/BecomeTop"
import Form from "../page-parts/Form"
import TestimonialDesign1 from "../page-parts/TestimonialDesign1"
import TextImageSection from "../page-parts/TextImageSection"
import Welcome from "../page-parts/Welcome"

const LawFirmTemplate = post => {
  return (
    <>
      <Welcome
        subtitle={"Law Firm Online Marketing"}
        title='Bring In More Cases And <span class="text-green block md:inline">Grow Your Law Firm</span>'
        containerClasses="pt-40 pb-40 sm:pt-24 sm:pb-2"
        bgimage={post}
      />
      <BecomeTop />
      <div class="bg-smoke ">
        <TestimonialDesign1
          title='We can help you <span class="text-green">dominate your market</span> too…by taking the market share in your area! '
          imageId={22}
          content="<p style='text-align: left;'>Corey & Will have been an asset to our team. They've worked with our staff to leverage the resources we already have, in addition to increasing our visibility in our market. They follow through, respond to our requests promptly, and follow up without having to be chased down. As COO the team at Clixsy has been a valuable support to our marketing team and we look forward to continuing to work closely with them.</p>"
          author="Melissa Graham"
          authorInfo="COO, Richard Harris Law"
          removeBorder={true}
        />
        <TextImageSection
          title={`Work with a team that knows the legal industry and has <span class="text-green">countless success</span> stories with major law firms'`}
          content={`Due to our consistently high success rate, attorney clients stay with us for years. Our first personal injury law firm client was Richard Harris from Las Vegas; he has been with us since 2012. Other notable firms include Hughes & Coleman and Lister Frost that have been with us since 2013 and 2014, respectively. Compare that to the dismal one-year retention rate that most other agencies can muster.`}
          imageId={24}
          bgcolor="bg-white"
          reverse={true}
          decor={true}
        />
        <TextImageSection
          title={`We will feel like your <br class="md:hidden"> <span class="text-green">in-house expert team</span>`}
          content={`<p>Not only do we get results, we are easy to work with. <b>We take a proactive role with your in-house staff and act as an integrated extension of your team. </b> We earn high levels of client satisfaction and loyalty through our uncompromising commitment to their success and for persistently going above and beyond to provide tangible solutions to their opportunities and challenges. </p>`}
          imageId={26}
          bgcolor="bg-smoke"
          decor={true}
        />
        <TextImageSection
          title={`How much does it cost? When will we <span class="text-green">see results? </span>`}
          content={`<p> Markets vary in competitiveness, but most of our clients see signed cases from Organic SEO for between $300-$1,000 per case. And although we can’t guarantee you’ll see those same numbers, once we know a few particulars about your specific market, we can give you a range of both the investment and the results you could expect.</p><p> How long it takes to see results depends on if you’ve already got a solid foundation, or if we’re starting from scratch. Generally, we tell clients that it is likely to be anywhere from 90 days to 6 months. The fact is, if you don’t currently rank in Google Maps for your primary keywords and if you aren’t consistently expanding where you show up online, then you have nothing to lose to see how we can improve your results. You’ll find that we’re fair in our analysis.</p>`}
          imageId={276}
          bgcolor="bg-white"
          decor={true}
          reverse={true}
          btnLink="/contact-us"
          btnText={"I want to improve my results"}
        />
        <TextImageSection
          title={`<span class="text-green">Get More Cases </span>from Your Online Marketing`}
          content={`p> If your law firm doesn’t have coverage in multiple places in the search engine, you’re not capturing as many cases as you could. <b>When it comes to dominating your market and getting more cases online, coverage is the name of the game…and it’s what we’re best at.</b> We’ve gotten our clients faster start-to-finish rankings in Maps, increases in click-through rates to their website from Google, and even people coming to their site after searching for their competitor. </p><p> Search marketing is one of the least understood areas by most agencies that do SEO. They know the basic concepts but don’t understand the advanced nuances. We’re pioneers in this aspect. And it is one of our distinct advantages over the competition and why <b>we can consistently rank clients faster, more predictably, and push through algorithm updates quicker than most agencies</b></p><p> What’s more, <b>we track and measure everything.</b> Our team will track every marketing source that brings you leads…not just the last source that touched it, but also the entire journey from search to contacting you. </p>`}
          imageId={33}
          bgcolor="bg-smoke"
          decor={true}
        />
        <Form title='Are you ready to get your law firm more <br class="md:hidden"> <span class="text-green">qualified leads</span> and <span class="text-green">take market share</span> from <br class="md:hidden"> competition?' />
      </div>
    </>
  )
}

export default LawFirmTemplate
