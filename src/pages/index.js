import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllShapesRecipes from "../components/AllShapesRecipes";

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
              <h1>Pasta Geometry</h1>
              <h4>A guide to pasta shapes' delicious purpose</h4>
            </div>
          </div>
        </header>
        <AllShapesRecipes />
      </main>
    </Layout>
  );
}
