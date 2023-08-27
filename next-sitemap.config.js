const sitemapConfig = { 
    siteUrl: 'https://www.redkiteaerial.co.uk',
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
