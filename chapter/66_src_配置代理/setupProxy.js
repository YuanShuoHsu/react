const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', { // 遇見 api1 前綴的請求，就會觸發該代理配置
            target: 'http://localhost:5000', // 請求轉發給誰
            changeOrigin: true, // 控制服務器收到的請求頭中 Host 字段的值
            pathRewrite: { '^/api1': '' } // 重寫請求路徑(必須)
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}