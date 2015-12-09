var hostname = require('os').hostname()
var ip = require('ip').address()
console.log(process.env.PORT || 4100)
require('http').createServer(function (req, res) {
  res.write(JSON.stringify({
    ip: ip
  }));
  res.end()
}).listen(process.env.PORT || 4100);
