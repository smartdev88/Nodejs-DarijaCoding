
var http = require('http');
var fs = require('fs');

http.createServer( (req, res) => {
    let formContent = '';
    if(req.method === 'GET'){
        fs.readFile('index.html', 'UTF-8', (err, data) =>
            {
                if(err) throw err;
                res.writeHead(200, {'content-Type':'text/html'});
                res.write(data);
                res.end();
            });
    } else if (req.method === 'POST'){
                req.on('data', data => {
                    formContent += data;
                });
                req.on('end', () => {
                    res.writeHead(200, {'content-Type':'text/html'});
                    res.write(formContent, () => {
                        res.end();
                    });
                });
        }
}).listen(3000);

console.log('Server started at port 3000');