import React from "react";
import Layout from "../components/Layout";
import { page, text } from "../examples/about.module.css";

const about = () => {
  return (
    <Layout className={page}>
      <h5>This is the about page</h5>
      <p className={text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui amet
        fugiat veritatis consequuntur molestias tenetur ullam asperiores,
        corrupti eveniet temporibus ratione, minima ducimus reiciendis quos,
        cumque pariatur id. Minus, dignissimos? Quis, et eius possimus
        consequuntur laboriosam inventore voluptatum sunt ipsa ad quibusdam,
        magni laborum molestiae, illo voluptatibus beatae accusamus dicta veniam
        commodi! Earum rerum facere ab nemo cupiditate odit aspernatur?
      </p>
    </Layout>
  );
};

export default about;
