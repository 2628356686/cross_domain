
// 1. 引入http模块
const http = require('http');

// 2. 创建服务
const server = http.createServer(function(req, res) {
  res.writeHead(200,{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': "text/html;application/json;charset=UTF-8"
    // 'Access-Control-Allow-Headers': 'Content-Type'
  })
//   res.setHeader("Content-Type", "text/html;charset=UTF-8");
  const { method, headers } = req

  const proxy = http.request({ host: '127.0.0.1',port: 80,path: req.url}, response => {

    response.on('data',(c_res)=>{
        console.log("拿到数据了")
        console.log(c_res)
        res.end(c_res)
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
