var express = require('express');
var http = require('http');
var app = express();
var server;

app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res, next) {
    res.sendfile('index.html');
});

server = http.createServer(app);

server.listen(8888, function() {
    console.log('Server started!!!');
});