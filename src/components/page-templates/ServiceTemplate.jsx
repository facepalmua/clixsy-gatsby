import React from "react"
import ConversionPoints from "../page-parts/ConversionPoints"
import DefineResults from "../page-parts/DefineResults"
import Form from "../page-parts/Form"
import FullCoverage from "../page-parts/FullCoverage"
import MaximizeOnline from "../page-parts/MaximizeOnline"
import Welcome from "../page-parts/Welcome"
const ServiceTemplate = post => {
  return (
    <div>
      <Welcome
        subtitle='Full Coverage SEO ™'
        title='Increase Authority & <br> Conversion Rate With<br> <span>Full Coverage SEO ™</span>'
        containerClasses="pt-36 pb-6"
        bgimage={post}
      />
      <FullCoverage />
      <MaximizeOnline />
      <ConversionPoints />
      <DefineResults />
      <Form
        title='OK Now I Really Want To See <br class="lg:hidden"> How <span class="text-green">Clixsy Can Help</span> Me'
      />
    </div>
  )
}

export default ServiceTemplate
