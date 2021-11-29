import * as React from "react";
import { Link } from "gatsby";

const NewRecipes = ({ serverData }) => {
  // Get 50 pasta recipes
  let pastaIndex = Math.floor(Math.random() * 19);
  const newRecipe = serverData.results[pastaIndex];
  const recipeImageUrl = `https://spoonacular.com/recipeImages/${newRecipe.id}-556x370.jpg`;
  console.log();
  return (
    <main className="page">
      <h1>New Recipe for the Day!</h1>
      <p>
        <Link to={newRecipe.sourceUrl} target="_blank">
          {newRecipe.title}
        </Link>
        {/* {recipeImageUrl} */}
        <img src={recipeImageUrl} alt="pasta" className="about-img" />
      </p>
    </main>
  );
};

export default NewRecipes;

export async function getServerData() {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${process.env.GATSBY_SPOONACULAR_API_KEY}&number=10&query=pasta`
    );

    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

// Query in Postman
// https://api.spoonacular.com/recipes/search?apiKey=0118958c772140398f2ad45ecdb7d68c&number=10&query=pasta
