var http = require('http');
var user = require('./moduleUser');

http.createServer( function(req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('le nom est '+ user.name);
    res.end();
}).listen(3000);


console.log("server started at port 3000");
