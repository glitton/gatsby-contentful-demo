import React from "react";
import Layout from "../components/Layout";
import AllShapesRecipes from "../components/AllShapesRecipes";
import SEO from "../components/SEO";

const Shapes = () => {
  return (
    <Layout>
      <SEO title="Shapes" />
      <main className="page">
        <AllShapesRecipes />
      </main>
    </Layout>
  );
};

export default Shapes;
