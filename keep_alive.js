var http = require('http');

http.createServer(function (req, res) {
  res.write("KipBot");
  res.end();
}).listen(8080);