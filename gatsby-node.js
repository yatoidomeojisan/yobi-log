const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === "Mdx") {
        const relativeFilePath = createFilePath({ 
            node, 
            getNode,
            basePath: "content/blog"
        }).split('/')[1]
  
        createNodeField({
            node,
            name: "slug",
            value: relativeFilePath,
        })
    }
}


/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMdx(sort: {frontmatter: {date: ASC}}, limit: 1000) {
        edges {
          next {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const blogTamplate = path.resolve(`./src/templates/blog-template.js`)

  result.data.allMdx.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: `${blogTamplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      context: {
        id: edge.node.id,
        slug: edge.node.fields.slug,
        next: edge.next ? edge.next : null,
        previous: edge.previous ? edge.previous : null,
      },
    })
  })

}