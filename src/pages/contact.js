import React from "react";
import { graphql } from "gatsby";
import ShapesRecipes from "../components/ShapesRecipes";
import SeoComp from "../components/SeoComp";

const Contact = ({ data }) => {
  const shapesRecipes = data.allContentfulShapesRecipes.nodes;
  return (
    <>
      <SeoComp title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Add heading here.</h3>
            <p>
              Send us a message and we will review your contribution and feature
              it in our shape and recipe of the month!
            </p>
            <header>
              Check our Monthly Bonus Recipes:
              <Link
                to="https://assets.ctfassets.net/o62tirnq6l08/6kkpnqyeMnqM644mQjqJKe/8aa2cffe3ea8f9418821e69e070888f6/GemelliRecipe.pdf"
                target="_blank"
              >
                Gemelli Pasta Recipe
              </Link>
            </header>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xdoykydy"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default Contact;
