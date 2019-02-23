module.exports = {
    siteMetadata: {
        title: `Manindra Gautam`,
    },
    plugins: [
        `gatsby-transformer-json`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`,
            },
        }
    ]
}