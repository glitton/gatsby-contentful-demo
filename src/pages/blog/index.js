import React from "react";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <div className="page">
      {data.allMdx.nodes.map(node => {
        return (
          <article key={node.id}>
            <h4>
              {/* Note: Gatsby adds a trailing slash after blog */}
              <Link to={`/blog${node.fields.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h4>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        fields {
          slug
        }
        id
        # body
      }
    }
  }
`;

export default BlogPage;
