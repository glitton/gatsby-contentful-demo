import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  return (
    <div>
      {data.allFile.nodes.map(node => {
        return (
          <article key={node.id}>
            <h2>{node.name}</h2>
          </article>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        id
      }
    }
  }
`;

export default BlogPage;
