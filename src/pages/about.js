import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import ShapesRecipes from "../components/ShapesRecipes";
import SeoComp from "../components/SeoComp";

const About = ({
  data: {
    allContentfulShapesRecipes: { nodes: shapesRecipes },
  },
}) => {
  return (
    <>
      <SeoComp title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Headline Goes Here!</h2>
            <p>
              Cream cheese the big cheese feta. Smelly cheese roquefort stinking
              bishop monterey jack dolcelatte babybel cut the cheese paneer. Red
              leicester bavarian bergkase dolcelatte hard cheese feta
              cheeseburger queso pecorino. Feta port-salut cheese on toast gouda
              cheese and biscuits cheese on toast.
            </p>
            <p>
              Come back often and checkout new shapes as well as new tasty
              recipes.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          {/* Image by Klaus Nielsen
          https://www.pexels.com/photo/heap-of-pasta-and-wooden-spoon-6287388/ */}
          <StaticImage
            src="../assets/images/about.jpg"
            alt="pasta on a wooden spoon"
            className="about-img"
            placeholder="dominantColor"
          />
        </section>
        <section className="featured-recipes">
          <h5>Buon appetito!</h5>
          <ShapesRecipes shapesRecipes={shapesRecipes} />
        </section>
      </main>
    </>
  );
};

export const query = graphql`
  {
    allContentfulShapesRecipes(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
