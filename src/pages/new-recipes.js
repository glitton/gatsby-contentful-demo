import * as React from "react";
import { Link } from "gatsby";

const NewRecipes = ({ serverData }) => {
  // Get 15 random pasta recipes from the spoonacular API
  let pastaIndex = Math.floor(Math.random() * 16);
  const newRecipe = serverData.results[pastaIndex];
  const recipeImageUrl = `https://spoonacular.com/recipeImages/${newRecipe.id}-556x370.jpg`;
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>New Recipe for the Day!</h2>
          <p>
            <Link to={newRecipe.sourceUrl} target="_blank">
              <h4>{newRecipe.title}</h4>
            </Link>
            <br />
            Ready in {newRecipe.readyInMinutes} minutes and serves{" "}
            {newRecipe.servings}.
            <br />
            Click{" "}
            <Link to={newRecipe.sourceUrl} target="_blank">
              here
            </Link>{" "}
            to learn more.
          </p>
        </article>
        <img src={recipeImageUrl} alt="pasta" className="about-img" />
      </section>
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
