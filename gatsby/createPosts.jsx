const path = require("path")
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}
