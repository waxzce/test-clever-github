var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World ! and this is version 3 \n PLOP');
}).listen(8080, '0.0.0.0');

console.log('Server running at http://127.0.0.1:1337/');
