const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200);
    res.write("Hello, this is dog.");
    res.end();
}).listen(8080);

console.log('listening on 8080');