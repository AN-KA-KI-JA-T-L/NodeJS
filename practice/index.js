var http = require('http');
var mydate = require('../customModule/showDate.js');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('current data is ' + mydate.showDate());
  })
  .listen(8080);
