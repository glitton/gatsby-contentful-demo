import React from "react";
import { graphql } from "gatsby";

const TestPage = ({ data }) => {
  console.log("this props", data);
  const { secondaryAuthor, title } = data.site.info;
  return (
    <div>
      <h2>Testing 123</h2>
      <h5>Title: {title}</h5>
      <h5>Author: {secondaryAuthor}</h5>
    </div>
  );
};

export const data = graphql`
  {
    site {
      info: siteMetadata {
        secondaryAuthor
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;
export default TestPage;
