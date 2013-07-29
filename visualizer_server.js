var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(4000);

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/visualizer.html');
});

app.post('/replace_grid', function(req, res) {
  io.sockets.emit('replace grid', req.body);
  res.send(200);
});
