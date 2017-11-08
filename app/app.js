var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world!')
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
    res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});