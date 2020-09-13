const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      
      industries: allStrapiIndustries {
        nodes {
          slug
        }
      }
      blogs: allStrapiBlogs {
          nodes {
              slug
          }
      }
      events: allStrapiEvents {
          nodes {
              slug
          }
      }
      apis: allStrapiApitherapies {
          nodes {
              slug
          }
      }
      educations: allStrapiEducations {
          nodes {
              slug
          }
      }
      genomes: allStrapiGenomes {
          nodes {
              slug
          }
      }
    }
  `)

  result.data.industries.nodes.forEach(industry => {
    createPage({
      path: `/news/${industry.slug}`,
      component: path.resolve(`src/templates/industry-template.js`),
      context: {
        slug: industry.slug,
      },
    })
  })
  paginate({
    createPage,
    items: result.data.industries.nodes,
    itemsPerPage: 5,
    pathPrefix: '/news',
    component: path.resolve(`src/templates/industry-archive.js`)
  })

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
  paginate({
    createPage,
    items: result.data.blogs.nodes,
    itemsPerPage: 5,
    pathPrefix: '/blog',
    component: path.resolve(`src/templates/blog-archive.js`)
  })
  
  result.data.events.nodes.forEach(event => {
    createPage({
      path: `/events/${event.slug}`,
      component: path.resolve(`src/templates/event-template.js`),
      context: {
        slug: event.slug,
      },
    })
  })
  result.data.apis.nodes.forEach(api => {
    createPage({
      path: `/apiculture/${api.slug}`,
      component: path.resolve(`src/templates/apiculture-template.js`),
      context: {
        slug: api.slug,
      },
    })
  })
  result.data.educations.nodes.forEach(education => {
    createPage({
      path: `/education/${education.slug}`,
      component: path.resolve(`src/templates/education-template.js`),
      context: {
        slug: education.slug,
      },
    })
  })
  result.data.genomes.nodes.forEach(genome => {
    createPage({
      path: `/genomes/${genome.slug}`,
      component: path.resolve(`src/templates/bee-template.js`),
      context: {
        slug: genome.slug,
      },
    })
  })
}