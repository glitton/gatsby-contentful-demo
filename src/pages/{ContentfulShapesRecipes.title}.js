import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";

const ShapesRecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    description: { description },
    prepTime,
    servings,
    image,
  } = data.contentfulShapesRecipes;
  const pathToImage = getImage(image);
  const { ingredients, instructions, tags, tools } = content;
  return (
    <main className="page">
      <div className="recipe-page">
        <h2>{title}</h2>
      </div>
    </main>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulShapesRecipes(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default ShapesRecipeTemplate;
