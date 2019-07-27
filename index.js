//Lecture de fichier data.txt
/*
var http = require('http');
var fs = require('fs');

http.createServer( function(req, res) {
    fs.readFile('data.txt', function(err, data){
        if(err) throw err;
        res.writeHead(200, {'content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000);


console.log("server started at port 3000");
*/

//ajouter dans le fichier

var http = require('http');
var fs = require('fs');

http.createServer( function(req, res) {
    fs.appendFile('data.txt', 'ca va ', function(err){
        if(err) throw err;
        console.log('Saved');
    });
}).listen(3000);


console.log("server started at port 3000");