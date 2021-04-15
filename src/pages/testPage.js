import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../examples/Gallery";
import { MainImage } from "gatsby-plugin-image";

const TestPage = ({ data }) => {
  return (
    <main className="page">
      <Layout>
        <Gallery />
      </Layout>
    </main>
  );
};

export default TestPage;
