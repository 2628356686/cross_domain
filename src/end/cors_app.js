
// 1. 引入http模块
const http = require('http');

// 2. 创建服务
const server = http.createServer(function(req, res) {
  console.log('有人来访问了')
  res.setHeader("Access-Control-Allow-Origin",'*');
  res.setHeader("Access-Control-Allow-Methods",'*')
  res.setHeader("Content-Type", "text/html;application/json;charset=UTF-8");
  // 向客户端发送内容，并结束本次响应
  let url = req.url
  if(url === '/test'){
    res.end(JSON.stringify({"messgae": '8083 访问成功'}))
    return
  }
  res.end('恭喜访问8084后端接口的首页');
});
// 3. 启动服务
server.listen(8083, function() {
  console.log('服务器启动成功，请在http://localhost:8083中访问....');
});
