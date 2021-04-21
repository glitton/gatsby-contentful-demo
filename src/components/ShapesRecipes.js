import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ShapesRecipes = ({ shapesRecipes = [] }) => {
  return (
    <div className="recipes-list">
      {shapesRecipes.map(shapeRecipe => {
        const { id, title, image, prepTime, cookTime } = shapeRecipe;
        const pathToImage = getImage(image);

        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} min. | Cook: {cookTime} min.
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ShapesRecipes;
