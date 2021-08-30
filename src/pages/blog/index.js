import * as React from "react";
import { Link, graphql } from "gatsby";
//WHY DOES THIS RENDER OTHER STUFF THAT ISN'T IN THE MDX FORMAT???
const BlogPage = ({ data }) => {
  let blogArray = data.allMdx.nodes.filter(
    item => item.frontmatter.date !== null
  );
  return (
    <>
      {blogArray.map(node => (
        <article key={node.id}>
          <Link to={node.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
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
