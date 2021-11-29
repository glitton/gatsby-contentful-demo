import * as React from "react";

const NewRecipes = ({ serverData }) => {
  // Get 50 pasta recipes
  let pastaIndex = Math.floor(Math.random() * 19);
  const newRecipe = serverData.results[pastaIndex];
  console.log(newRecipe.title);
  return (
    <main className="page">
      <h1>Tasty New Recipes!</h1>
      <p>
        Check out this new pasta recipe for the day:{" "}
        <a href={newRecipe.sourceUrl} target="_blank">
          {newRecipe.title}
        </a>
      </p>
    </main>
  );
};

export default NewRecipes;

export async function getServerData() {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=0118958c772140398f2ad45ecdb7d68c&number=10&query=pasta`
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
