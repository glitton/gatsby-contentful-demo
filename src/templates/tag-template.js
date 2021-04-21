import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ShapesRecipes from "../components/ShapesRecipes";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulShapesRecipes.nodes;
  console.log(recipes);
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
  query getRecipeByTag($tag: String) {
    allContentfulShapesRecipes(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        content {
          id
        }
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;

// created with gatsby node api
