# cross_domain
常用跨域方式的实例项目

项目目录结构：
|-- cross_domain
    |-- node_modules
    |-- src 
        |-- end
            |-- app.js
            |-- cors_app.js
            |-- jsonp_app.js
            |-- proxy_app.js
            |-- websocket_app.js
            |-- postmessage_app.js
            |-- postmessage.html
        |-- front
            |-- app.html
        |-- nginx-1.22.0
    |-- readme.md
    |-- package.json
    |-- package-lock.json

项目src目录中，end目录为后端服务器代码，其中包括各种跨域请求方式的服务器代码；front目录为前端页面代码；nginx-1.22.0为nginx服务代码。
