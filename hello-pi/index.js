const http = require('http');
const os = require('os');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>Hello, Pi! I'm ${os.hostname()}</h1>`);
}).listen(8000);