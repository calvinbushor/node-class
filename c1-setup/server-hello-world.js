// The HTTP object is included inside Node core
var http = require('http'); // This is how you require a module for your Node apps.

// Here, we create a server and once the serve is up, the callback executes
//   and we can do all sorts of stuff. Here we set some headers and send down a message
//   with our 200 response.
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

// Open http://127.0.0.1:1337/ in a browser and you will see magic happen
console.log('Server running at http://127.0.0.1:1337/');