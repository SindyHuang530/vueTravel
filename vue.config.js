module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/static/mock'
                },
                logLevel: 'debug'
                // ws: true,
            },
        }
    }
}
