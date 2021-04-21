<<<<<<< HEAD
=======
//Create tag pages programatically
>>>>>>> tag-pages
const path = require("path");
const slugify = require("slugify");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulShapesRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);
<<<<<<< HEAD
  result.data.allContentfulShapesRecipes.nodes.forEach(shapeRecipe => {
    shapeRecipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/tags/${tagSlug}`,
=======

  result.data.allContentfulShapesRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slug = slugify(tag, { lower: true });
      createPage({
        path: `/${slug}`,
>>>>>>> tag-pages
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
