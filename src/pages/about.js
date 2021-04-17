import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>We Are All About Pasta Shapes!</h2>
            <p>
              Pastas come in all kinds of shapes. Long, short, curly bowties and
              those that look like little ears! Learn about them here and
              understand the differences between a rotini and a tortellini or a
              farfelle and a talatielle.
            </p>
            <p>Check out what sauce works best and some simple recipes.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="pasta on a wooden spoon"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
