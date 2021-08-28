import * as React from "react";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <main>
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
