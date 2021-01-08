module.exports = {
    plugins: [
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/pages`,
            name: "pagesData",
        },
        },
        { resolve: `gatsby-remark-source-name` },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                enableIdentityWidget: true,
            },
        },
        `gatsby-transformer-remark`,
    ]
}