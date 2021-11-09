import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  const image = getImage(data.imageSharp.gatsbyImageData);
  return (
    <article>
      <h2>{data.mdx.frontmatter.title}</h2>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </article>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { ne: null, eq: $id }) {
      id
      frontmatter {
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        date(formatString: "MMMM DD, YYYY")
        hero_image
      }
      body
    }
    imageSharp {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
`;

export default BlogPost;
