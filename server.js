var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    res.sendfile('index.html');
});

server.listen(8888, function () {
    console.log('Server started')
});