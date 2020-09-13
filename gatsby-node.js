const path = require("path")
// const {paginate} = require('gatsby-awesome-pagination')

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
    }
  `)

//   paginate({
//     createPage,
//     items: result.data.sports.nodes,
//     itemsPerPage: 3,
//     pathPrefix: '/sport-list',
//     component: path.resolve(`src/templates/paginator.js`),
//   })

//   result.data.educations.nodes.forEach(education => {
//     createPage({
//       path: `/educations/${education.slug}`,
//       component: path.resolve(`src/templates/education-template.js`),
//       context: {
//         slug: education.slug,
//       },
//     })
//   })
  result.data.industries.nodes.forEach(industry => {
    createPage({
      path: `/industry-news/${industry.slug}`,
      component: path.resolve(`src/templates/industry-template.js`),
      context: {
        slug: industry.slug,
      },
    })
  })
//   result.data.blogs.nodes.forEach(blog => {
//     createPage({
//       path: `/blog/${blog.slug}`,
//       component: path.resolve(`src/templates/blog-template.js`),
//       context: {
//         slug: blog.slug,
//       },
//     })
//   })
//   result.data.genomes.nodes.forEach(genome => {
//     createPage({
//       path: `/genome/${genome.slug}`,
//       component: path.resolve(`src/templates/genome-template.js`),
//       context: {
//         slug: genome.slug,
//       },
//     })
//   })
}