import React from "react";
import Layout from "../components/Layout";
import AllShapesRecipes from "../components/AllShapesRecipes";

const Shapes = () => {
  return (
    <Layout>
      <main className="page">
        <AllShapesRecipes />
      </main>
    </Layout>
  );
};

export default Shapes;
