// 1. 引入http模块
const http = require('http');
// 2. 创建服务
const server = http.createServer(function(req, res) {
  console.log('有人来访问了')
  res.setHeader("Content-Type", "text/html;application/json;charset=UTF-8");
  // 向客户端发送内容，并结束本次响应
  let url = req.url
  if(url === '/test'){
    res.end(JSON.stringify({"messgae": '80 访问成功'}))
    return
  }
  res.end('恭喜访问8082后端接口的首页');
});
// 3. 启动服务
server.listen(80, function() {
  console.log('服务器启动成功，请在http://localhost:80中访问....');
});
