module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/static/mock'
          // 只要有寫api就會自動去抓
        },
        logLevel: 'debug'
        // ws: true,
      }
    }
  }
}
