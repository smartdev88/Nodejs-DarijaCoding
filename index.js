
var http = require('http');
var fs = require('fs');

http.createServer( (req, res) => {
    if(req.url === '/'){
        fs.readFile('index.html', 'UTF-8', (err, data) =>
            {
                res.writeHead(200, {'content-Type':'text/html'});
                res.write(data);
                res.end();
            });
    } else if (req.url === '/about'){
        fs.readFile('about.html', 'UTF-8', (err, data) =>
            {
                res.writeHead(200, {'content-Type':'text/html'});
                res.write(data);
                res.end();
            });
    }
}).listen(2000);

console.log('Server started at port 2000');