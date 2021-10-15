import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  const { date, title } = data.mdx.frontmatter;
  return (
    <article className="page">
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </article>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
      body
    }
  }
`;

export default BlogPost;
