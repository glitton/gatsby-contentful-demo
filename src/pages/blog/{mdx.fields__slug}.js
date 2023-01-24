import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <main className="page">
      <div className="recipe-page">
        <section className="recipe-hero">
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className="about-img"
          />
          <article className="recipe-info">
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>{data.mdx.frontmatter.date}</p>
            <p>
              Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
            {children}
          </article>
        </section>
      </div>
    </main>
  );
};

export const query = graphql`
  query BlogQuery($id: String) {
    mdx(id: { ne: null, eq: $id }) {
      frontmatter {
        hero_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              width: 473
            )
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        title
      }
      fields {
        slug
      }
      id
    }
  }
`;

// DSG Configuration: Set up to defer blogs older than June 25, 2021
export async function config() {
  const { data } = graphql`
    {
      oldPosts: allMdx(
        filter: { frontmatter: { date: { lt: "2021-06-25" } } }
      ) {
        nodes {
          frontmatter {
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `;

  const oldPosts = new Set(data.oldPosts.nodes.map(node => node.fields.slug));

  return ({ params }) => {
    // console.log("oldPosts", oldPosts);
    return {
      defer: oldPosts.has(params.fields__slug),
    };
  };
}

export default BlogPostTemplate;
