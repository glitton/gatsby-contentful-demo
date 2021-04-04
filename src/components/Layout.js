import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./layout.css";

const Layout = ({ children }) => {
  console.log("object", children);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
