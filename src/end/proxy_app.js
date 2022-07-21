// 1. 引入http模块
const http = require('http');
// 2. 创建服务
const server = http.createServer(function(req, res) {
  // 设置代理服务器CORS响应头
  res.writeHead(200,{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': "text/html;application/json;charset=UTF-8"
    // 'Access-Control-Allow-Headers': 'Content-Type'
  })
//   res.setHeader("Content-Type", "text/html;charset=UTF-8");
  const { method, headers } = req
  // 发送请求给无跨域处理的80端口服务器
  const proxy = http.request({ host: '127.0.0.1',port: 80,path: req.url}, response => {
    response.on('data',(c_res)=>{
        res.end(c_res) // 拿到数据后发送给前端服务器
    })
    response.on('end', () => {
        res.end()
    })
    })
    proxy.end()
});
// 3. 启动服务
server.listen(8082, function() {
  console.log('node代理服务器启动成功，请在http://localhost:8083中访问....');
});
