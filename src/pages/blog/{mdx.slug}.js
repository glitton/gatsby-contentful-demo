import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <article className="page">
      <h2>{data.mdx.frontmatter.title}</h2>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </article>
  );
};

export const query = graphql`
  query BlogQuery($id: String) {
    mdx(id: { ne: null, eq: $id }) {
      frontmatter {
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        title
      }
      body
      id
    }
  }
`;

export default BlogPost;
