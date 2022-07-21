
// 1. 引入http模块
const http = require('http');

// 2. 创建服务
const server = http.createServer(function(req, res) {
  console.log('有人来访问了')
  res.setHeader("Content-Type", "text/html;application/json;charset=UTF-8");
  // 向客户端发送内容，并结束本次响应
  let url = req.url
  console.log(url)
  let fnName = url.split('?')[1].split('&').filter(item=>{
    if(item.indexOf("callback")!==-1){
        return true
    }
  })[0].split('=')[1]
  if(url.split('?')[0] == '/test'){
    res.end(`${fnName}({"messgae": '8084 访问成功'})`)
    return
  }
  res.end('恭喜访问8084后端接口的首页');
});
// 3. 启动服务
server.listen(8084, function() {
  console.log('服务器启动成功，请在http://localhost:8084中访问....');
});
