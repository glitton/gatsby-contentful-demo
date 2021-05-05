import React from "react";
import AllShapesRecipes from "../components/AllShapesRecipes";
import SEO from "../components/SEO";

const Shapes = () => {
  return (
    <>
      <SEO title="Shapes" />
      <main className="page">
        <AllShapesRecipes />
      </main>
    </>
  );
};

export default Shapes;
