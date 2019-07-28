var express = require('express')
var app = express()

//import handlebars
var exphbs  = require('express-handlebars');

//set template engine to handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
//page index
app.get('/', function (req, res) {
    res.render('home');
});
 
//create server
app.listen(3000, function () {
  console.log('server started at port 3000')
});