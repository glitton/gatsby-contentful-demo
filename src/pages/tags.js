import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulShapesRecipes.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, { lower: true });
            return (
              <Link to={`/${tagSlug}`} key={index} className="tag">
                <h5>{text}</h5>
                {/* {{ value } === 1 && <p>{value} recipe</p>} */}
                <p>recipes: {value} </p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulShapesRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
