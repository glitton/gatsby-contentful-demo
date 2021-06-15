import React from "react";
import AllBlogs from "../components/AllBlogs";
import SEO from "../components/SEO";

const Blogs = () => {
  return (
    <>
      <SEO title="Blogs" />
      <main className="page">
        <AllBlogs />
      </main>
    </>
  );
};

export default Blogs;
