const path = require("path")
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPage(sort: { fields: [date] }) {
        edges {
          node {
            title
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWpPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/wp-page.js`),
        context: {
          // This is the $slug variable
          // passed to wp-page.js
          slug: node.slug,
        },
      })
    })
  })
}
