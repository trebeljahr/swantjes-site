const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const filmTemplate = path.resolve(`./src/templates/film-template.js`)
  const textTemplate = path.resolve(`./src/templates/text-template.js`)

  const result = await graphql(`
    query {
      films: allGhostPost(
        filter: { tags: { elemMatch: { name: { eq: "films" } } } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
      texts: allGhostPost(
        filter: { tags: { elemMatch: { name: { eq: "texts" } } } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (result.data.films) {
    const items = result.data.films.edges
    items.forEach(({ node }) => {
      node.url = `/films/${node.slug}/`
      actions.createPage({
        path: node.url,
        component: filmTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  }
  if (result.data.texts) {
    const items = result.data.texts.edges
    items.forEach(({ node }) => {
      node.url = `/texts/${node.slug}/`
      actions.createPage({
        path: node.url,
        component: textTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  }
}
