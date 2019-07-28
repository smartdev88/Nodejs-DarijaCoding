
var express = require('express');

var app = express();


//page index
app.get('/',function(req,res){
  res.send('Hello world');
});

//contact page
app.get('/contact',function(req,res){
  res.send('Contact page');
});

//create server
app.listen(3000, function () {
  console.log('server started at port 3000')
});