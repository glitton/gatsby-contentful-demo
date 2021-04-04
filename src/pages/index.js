import React from "react";
import Layout from "../components/Layout";
import { page, text } from "../examples/home.module.css";

export default function Home() {
  return (
    <div className={page}>
      <Layout>
        <h1>Hello Peeps!</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          soluta voluptas ratione. Voluptatibus dicta, nam soluta totam,
          distinctio repellat perferendis veniam quod modi consequuntur velit
          sunt, vitae neque eum reiciendis?
        </p>
      </Layout>
    </div>
  );
}
