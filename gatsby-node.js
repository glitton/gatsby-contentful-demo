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
  result.data.allContentfulShapesRecipes.nodes.forEach(shapeRecipe => {
    shapeRecipe.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
      });
    });
  });
};
