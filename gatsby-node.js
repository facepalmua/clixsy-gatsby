const createPosts = require('./gatsby/createPosts.jsx')
const createPages = require('./gatsby/createPages.jsx')

exports.createPages = async({ graphql, actions }) => {
  await createPosts({actions, graphql})
  await createPages({actions, graphql})
}
