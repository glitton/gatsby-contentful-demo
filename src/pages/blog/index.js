import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
//WHY DOES THIS RENDER OTHER STUFF THAT ISN'T IN THE MDX FORMAT???
//Why does the MDX slug not capture the items in the metadata?  It captures the mdx file title instead.
const BlogPage = ({ data }) => {
  let blogArray = data.allMdx.nodes.filter(
    item => item.frontmatter.date !== null
  );
  return (
    <>
      {blogArray.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/{node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </>
  );
};

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
