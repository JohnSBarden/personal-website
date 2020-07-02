exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const path = require("path")
  const blogPostTemplate = path.resolve(`./src/components/blog/Blog.jsx`)
  const result = await graphql(`
    {
      allMdx(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }


  result.data.allMdx.edges.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: "personal/" + node.frontmatter.slug,
      // This component will wrap our MDX content
      component: blogPostTemplate,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}