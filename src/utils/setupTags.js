const setupTags = shapesRecipes => {
  const allTags = {};
  shapesRecipes.forEach(shapeRecipe => {
    shapeRecipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newTags = Object.entries(allTags);
  console.log(newTags);
  return shapesRecipes;
};

export default setupTags;
