import React from "react";
import { graphql } from "gatsby";
<<<<<<< HEAD
import Layout from "../components/Layout";
import ShapesRecipes from "../components/ShapesRecipes";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulShapesRecipes.nodes;
  console.log(recipes);
=======
import ShapesRecipes from "../components/ShapesRecipes";
import Layout from "../components/Layout";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulShapesRecipes.nodes;
>>>>>>> tag-pages
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <ShapesRecipes shapesRecipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
<<<<<<< HEAD
  query getRecipeByTag($tag: String) {
=======
  query GetRecipeByTag($tag: String) {
>>>>>>> tag-pages
    allContentfulShapesRecipes(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
<<<<<<< HEAD
        content {
          id
        }
=======
        title
        id
>>>>>>> tag-pages
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
<<<<<<< HEAD

export default TagTemplate;

// created with gatsby node api
=======
export default TagTemplate;
>>>>>>> tag-pages
