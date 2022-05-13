import React from "react"
import Welcome from "../page-parts/Welcome"
import ListOfPosts from "../page-parts/ListOfPosts"
import Form from "../page-parts/Form"
const BlogTemplate = post => {
  return (
    <>
      <Welcome
        containerClasses="h-20 "
        bgimage={post}
        h1Classes="mb-2"
        decor={true}
        wrapperClasses="h-20 overflow-hidden"
      />
      <section className="">
        <div className="container mx-auto pt-16 pb-24 md:grid-cols-none">
          <h1 className="font-oswald text-black font-semibold text-6xl mb-12">
            <span className="text-green">BLOG</span>
          </h1>
          <div className="grid grid-cols-3 gap-10 xl:grid-cols-2 sm:grid-cols-1">
            <ListOfPosts />
          </div>
        </div>
      </section>
      <Form
        title='OK Now I Really Want To See <br class="lg:hidden"> How <span class="text-green">Clixsy Can Help</span> Me'
      />
    </>
  )
}

export default BlogTemplate
