
// 1. 引入http模块
const http = require('http');
// 2. 创建服务
const server = http.createServer(function(req, res) {
  res.setHeader("Content-Type", "text/html;application/json;charset=UTF-8");
  // 向客户端发送内容，并结束本次响应
  let url = req.url
  console.log(url)
  // 获取url参数中回调函数名
  let fnName = url.split('?')[1].split('&').filter(item=>{
    if(item.indexOf("callback")!==-1){
        return true
    }
  })[0].split('=')[1]
  if(url.split('?')[0] == '/test'){
    // 将数据作为回调函数实参传给前端页面
    res.end(`${fnName}({"messgae": '8084 访问成功'})`)
    return
  }
  res.end('恭喜访问8084后端接口的首页');
});
// 3. 启动服务
server.listen(8084, function() {
  console.log('服务器启动成功，请在http://localhost:8084中访问....');
});
