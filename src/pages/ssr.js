import * as React from "react";

const SSRPage = ({ serverData }) => (
  <main>
    <h1>Tasty Pasta Images!</h1>
    <img alt="Pasta Images" src={serverData.message} />
  </main>
);

export default SSRPage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

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
