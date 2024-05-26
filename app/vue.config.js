module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://apis.roblox.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
};