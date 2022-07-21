
// 1. 引入http模块
const http = require('http');

// 2. 创建服务
const server = http.createServer(function(req, res) {
  console.log('有人来访问了')
  res.setHeader("Content-Type", "text/html;application/json;charset=UTF-8");
  // 向客户端发送内容，并结束本次响应
  let url = req.url
  if(url === '/test'){
    res.end(JSON.stringify({"messgae": '80 访问成功',"q":"nh","p":false,"g":[{"type":"sug","sa":"s_1","q":"nh3"},{"type":"sug","sa":"s_2","q":"nh4"},{"type":"sug","sa":"s_3","q":"nhl"},{"type":"sug","sa":"s_4","q":"nhk"},{"type":"sug","sa":"s_5","q":"nh是什么意思"},{"type":"sug","sa":"s_6","q":"nh3化学名称叫什么"},{"type":"sug","sa":"s_7","q":"南华大学"},{"type":"sug","sa":"s_8","q":"n号房"},{"type":"sug","sa":"s_9","q":"nhkラジオニュース"},{"type":"sug","sa":"s_10","q":"难哄"}],"slid":"124405780751066","queryid":"0xa71257a5ea2da"}))
    return
  }
  res.end('恭喜访问8082后端接口的首页');
});
// 3. 启动服务
server.listen(80, function() {
  console.log('服务器启动成功，请在http://localhost:80中访问....');
});
