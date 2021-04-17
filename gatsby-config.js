/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "World of Shapes",
    description:
      "Site about pasta shapes and example recipes.  Built do show the Gatsby and Contentful integration.",
    originalAuthor: "@johnsmilga",
    secondaryAuthor: "@LittonG",
    inspiration: "https://github.com/john-smilga/gatsby-v3-tutorial-recipes",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7vu1gwh4om5t`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `YYnPIcOPvoXmi4NwNY5vDT-tRTnP9nbqsvLAa8m5thY`,
      },
    },
  ],
};
