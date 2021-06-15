import React from "react";
import TagsList from "./TagsList";
import Blogs from "./Blogs";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allContentfulShapesRecipes(sort: { fields: title }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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

export default AllBlogs;
