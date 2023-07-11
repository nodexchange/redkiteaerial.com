const sitemapConfig = { 
    siteUrl: 'https://redkiteaerial.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/gallery/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}

module.exports = sitemapConfig;
