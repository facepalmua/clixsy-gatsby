import React from "react"
import Welcome from "../page-parts/Welcome"
import GetResults from "../page-parts/GetResults"
import TestimonialDesign2 from "../page-parts/TestimonialDesign2"
import InHouseTeam from "../page-parts/InHouseTeam"
import DominanteSearch from "../page-parts/DominanteSearch"
import Form from "../page-parts/Form"

const HomeTemplate = (post) => {
  return (
    <>
      
      <Welcome
        subtitle="WE DO ONE THING"
        title="Take <span>Market Share</span> From<br> Your Competitors and<br> Give It to You"
        button_text="YES! I Want More Market Share!"
        button_url="/contact-us"
        decor="true"
        containerClasses='pt-40 pb-40 sm:pt-20 sm:pb-20'
        bgimage={post}
      />
      <GetResults />
      <TestimonialDesign2 
        title="Testimonial"
        content={`I can confidently say Corey & Will of Clixsy are 'my guys' for innovative and effective web strategy. They've stood the test of time, working with us since 2013. As they've come through for us and gained my trust, we've increased our projects with Clixsy which now include all of our brands in Personal Injury, Criminal Defense and Disability practice areas.`}
        author="Richard Harris"
        authorInfo="Richard Harris Law Firm"
        remove_border="true"
        imageId={241}
       />      
       <InHouseTeam />
       <TestimonialDesign2 
        title="Testimonial"
        content={`Clixsy’s process and their strategy is very impressive.  We saw a significant and dramatic change in our visibility once the first content revamping was done. We’re now on page one under the margin between number one and number two, where we’re number one at visibility, its huge! Watching how Clixsy has kept up with the changes in this fast moving industry, it’s comforting to know that you’ve got somebody to pick up the phone and say, “Hey I hear about this, how’s that going to impact us?”  They’ll get back to us with either an answer or a suggestion or some recommendation of what they’re going to try and see what works.`}
        author="Richard Harris"
        authorInfo="Hughes and Coleman"
        remove_border="true"
       />    
       <DominanteSearch/>
       <Form title='OK Now I Really Want To See <br class="lg:hidden">
        How <span class="text-green">Clixsy Can Help</span> Me' />
    </>
  )
}

export default HomeTemplate
