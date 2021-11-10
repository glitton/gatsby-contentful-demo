import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <article className="page">
      <h2>{data.mdx.frontmatter.title}</h2>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer localImage={data.mdx.frontmatter.hero_image}>
        {data.mdx.body}
      </MDXRenderer>
    </article>
  );
};

export const query = graphql`
  query BlogQuery($id: String) {
    mdx(id: { ne: null, eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        title
        hero_image
      }
      id
      body
    }
  }
`;

export default BlogPost;
