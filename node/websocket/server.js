const express = require('express');
const http = require('http');
const path = require('path');
const url = require('url');
const WebSocket = require('ws');

const app = express();

//指定静态资源目录
app.use(express.static(path.join(__dirname, 'src')));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
	ws.send('something');
  	ws.addListener('message',function (msg){
  		console.log(msg);
  	});
});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
