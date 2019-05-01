const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
        title
        date
        categories {
          id
          name
        }
        content
        excerpt
        jetpack_featured_media_url
      }
    }
  }
}
`


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {

    graphql(postsQuery)
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const postTemplate = path.resolve("./src/templates/post.js");
        const postsTemplate = path.resolve("./src/templates/posts.js");

        // Create Posts
        createPage({
          path: `/posts/`,
          component: slash(postsTemplate)
        });

        // Paginate Posts
        createPaginatedPages({
          edges: result.data.allWordpressPost.edges,
          createPage: createPage,
          pageTemplate: 'src/templates/posts.js',
          pageLength: 6,
          pathPrefix: 'posts',
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
        })

        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: `/post/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });
        resolve();
      });
  });
  // ==== END POSTS ====
}