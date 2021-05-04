import React from "react";
// import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <main className="error-page">
      <SEO title="Error" />
      <section>
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </section>
    </main>
  );
};

export default Error;
