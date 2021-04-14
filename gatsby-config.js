/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Recipe site",
    originalAuthor: "@johnsmilga",
    secondaryAuthor: "@LittonG",
    person: { name: "John", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "John", age: 32 },
      { name: "Susan", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
