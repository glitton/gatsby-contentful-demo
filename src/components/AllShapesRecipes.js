import React from "react";
import TagsList from "./TagsList";
import ShapesRecipes from "./ShapesRecipes";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allContentfulShapesRecipes(sort: { title: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            width: 473
          )
        }
      }
    }
  }
`;

const AllShapesRecipes = () => {
  const data = useStaticQuery(query);
  const shapesRecipes = data.allContentfulShapesRecipes.nodes;

  return (
    <section className="recipes-container">
      <TagsList shapesRecipes={shapesRecipes} />
      <ShapesRecipes shapesRecipes={shapesRecipes} />
    </section>
  );
};

export default AllShapesRecipes;
