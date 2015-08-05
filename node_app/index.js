var express = require('express');
var app = express();

app.get('/bluegreen', function (req, res) {
  res.send('Hello world to test blue green deployment!! Server: '+server.address().address+', Port: '+server.address().port);
});

var args = process.argv;

var port = parseInt(args[2]);

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
