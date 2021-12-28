import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import ShapesRecipes from "../components/ShapesRecipes";
import SEO from "../components/SEO";

const AboutTest = ({
  data: {
    allContentfulShapesRecipes: { nodes: shapesRecipes },
  },
}) => {
  return (
    <>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>We Are All About Pasta Shapes!</h2>
            <p>
              Pastas come in all kinds of shapes. Long, short, curly, bowties
              and even those that look like little ears! Learn about them here
              and understand the differences between a rotini and a tortellini
              or a farfelle and a talatielle.
            </p>
            <p>Check out what sauce works best and some simple recipes.</p>
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
            placeholder="blurred"
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
      sort: { fields: title }
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

export default AboutTest;
