var WebSocketServer = require('websocket').server;
var http = require('http');
var server = http.createServer();
//创建WebSocket服务器
wsServer = new WebSocketServer({
	//选择刚刚创建的http后台服务器为WebSocket服务器
	httpServer:server
})
wsServer.on('request',function(request){
	//当前的连接
	var connection = request.accept(null,request.origin);
    // 发送数据给前端页面
	connection.sendUTF(JSON.stringify({"messgae": "8086 访问成功"}));
	// //监听有信息来的时候
	// connection.on('message',function(message){
	// 	if(message.type === 'utf8'){
	// 		connection.sendUTF(message.utf8Data);
	// 	}
	// 	else if(message.type === 'binary'){
	// 		connection.sendBytes(message.binaryData);
	// 	}
	// });
	//监听关闭
	connection.on('close',function(reasonCode,description){
		console.log('连接关闭')
	})
})
// 3. 启动服务
server.listen(8086, function() {
    console.log('服务器启动成功，请在http://localhost:8086中访问....');
  });
