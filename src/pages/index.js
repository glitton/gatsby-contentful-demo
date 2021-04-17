import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          {/* Photo by Zoran Borojevic on Unsplash */}
          <StaticImage
            src="../assets/images/main.jpg"
            alt="flour and eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>World of Shapes</h1>
              <h4>pasta shapes and recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
