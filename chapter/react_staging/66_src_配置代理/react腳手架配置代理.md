# react腳手架配置代理總結



## 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

說明：

1. 優點：配置簡單，前端請求資源時可以不加任何前綴。
2. 缺點：不能配置多個代理。
3. 工作方式：上述方式配置代理，當請求了3000不存在的資源時，那麼該請求會轉發給5000 （優先匹配前端資源）



## 方法二

1. 第一步：創建代理配置文件

   ```
   在src下創建配置文件：src/setupProxy.js
   ```

2. 編寫setupProxy.js配置具體代理規則：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  // api1 是需要轉發的請求(所有帶有 /api1 前綴的請求都會轉發給 5000)
         target: 'http://localhost:5000', //配置轉發目標地址(能返回數據的服務器地址)
         changeOrigin: true, //控制服務器接收到的請求頭中 host 字段的值
         /*
         	changeOrigin 設置為 true 時，服務器收到的請求頭中的 host 為：localhost:5000
         	changeOrigin 設置為 false 時，服務器收到的請求頭中的 host為：localhost:3000
         	changeOrigin 默認值為 false，但我們一般將 changeOrigin 值設為 true
         */
         pathRewrite: {'^/api1': ''} //去除請求前綴，保證交給後台服務器的是正常請求地址(必須配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

說明：

1. 優點：可以配置多個代理，可以靈活的控制請求是否走代理。
2. 缺點：配置繁瑣，前端請求資源時必須加前綴。