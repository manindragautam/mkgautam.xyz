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
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Manindra Gautam",
                short_name: "MKGautam",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icons: [
                    {
                        "src": `/favicons/icons-192.png`,
                        "type": "image/png",
                        "sizes": "192x192"
                    },
                    {
                        "src": `/favicons/icons-512.png`,
                        "type": "image/png",
                        "sizes": "512x512"
                    }
                ]
            },
        },
    ]
}