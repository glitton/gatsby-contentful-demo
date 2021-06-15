import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Blogs from "../components/Blogs";

const query = graphql`
  {
    allContentfulBlogs(sort: { fields: blogDateTime }) {
      nodes {
        blogTitle
        blogContent {
          raw
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
      }
    }
  }
`;

const AllBlogs = () => {
  const data = useStaticQuery(query);
  const blogs = data.allContentfulBlogs.nodes;

  return (
    <section className="recipes-container">
      <Blogs blogs={blogs} />
    </section>
  );
};

export default AllBlogs;
