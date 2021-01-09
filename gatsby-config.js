module.exports = {
  plugins: [
    { resolve: `gatsby-remark-source-name` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/pages/home`,
        name: "homePageData",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/products`,
        name: "productsData",
      },
    },

    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
