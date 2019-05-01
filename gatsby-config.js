module.exports = {
    siteMetadata: {
        title: 'RADAR - Control en movimiento',
    },
    plugins: ['gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                // your wordpress source
                baseUrl: `radar5920673.wordpress.com`,
                protocol: `https`,
                // is it hosted on wordpress.com, or self-hosted?
                hostingWPCOM: true,
                // does your site use the Advanced Custom Fields Plugin?
                useACF: false,
                auth: {
                    // If hostingWPCOM is true then you will need to communicate with wordpress.com API
                    // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
                    // then add your clientId, clientSecret, username, and password here
                    // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
                    // If two-factor authentication is enabled then you need to create an Application-Specific Password,
                    // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
                    wpcom_app_clientSecret: process.env.WP_CLIENT_SECRET,
                    wpcom_app_clientId: "65506",
                    // wpcom_user: "gatsbyjswpexample@gmail.com",
                    // wpcom_pass: process.env.WORDPRESS_PASSWORD,
                },
                includedRoutes: ["**/posts", "**/categories"],
                // excludedRoutes: ["**/media", "**/blocks", "**/feedback", "**/jp_pay_order", "**/jp_pay_product",
                //     "**/types", "**/statuses", "**/taxonomies", "**/categories", "**/tags", "**/users", "**/comments",
                //     "**/search", , "**/block-renderer", "**/themes"],
                verboseOutput: true
            }
        }
    ],
}
