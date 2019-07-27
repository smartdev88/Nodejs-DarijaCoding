
var http = require('http');
var fs = require('fs');

http.createServer( (req, res) => {
    fs.readFile('index.html', 'UTF-8', (err, data) =>
    {
        res.writeHead(200, {'content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(3000);

console.log('Server started at port 3000');