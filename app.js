

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

//import handlebars
var exphbs  = require('express-handlebars');

//set template engine to handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
 
// etablir la connexion
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "contacts"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connecté");
});

//page index
/*app.get('/', function (req, res) {
    res.render('home');
});*/
app.get('/', function (req, res) {
  var query = "SELECT * FROM contacts";
  con.query(query,function(error,contacts){
      if(error)throw error;
      //res.render('home', {contacts:contacts}); 
      res.render('home', {contacts});          
  });
});

//page add contact
app.get('/add', function (req, res) {
  res.render('add');
});

//get form data 
/*app.post('/add', function (req, res) {
  res.send('Nom & Prénom : ' + req.body.name + '<br/><br/> ' + 'Téléphone : ' + req.body.tel);
});*/

//get form data 
app.post('/add', function (req, res) {
  //add data to database and redirection
  var query = "INSERT INTO contacts(name,tel) VALUES('"+req.body.name+"','"+req.body.tel+"')";
    con.query(query,function(error){
        if(error) throw error;
        res.redirect('/');   
    });
});

//show edit form with data 
app.get('/contact/edit/:id', function (req, res) {
  //get  contact from database
  var query = "SELECT * FROM contacts WHERE id = '"+req.params.id+"'";
  con.query(query,function(error,contact){
      if(error) throw error;
      res.render('update', {contact:contact[0]});            
  });
});

//update contact
app.post('/contact/edit/:id', function (req, res) {
  var sql = "UPDATE contacts SET name = '"+req.body.name+"',tel = '"+req.body.tel+"' where id = '"+req.params.id+"' ";
  con.query(sql, function (err) {
      if (err) throw err;
      res.redirect('/');   
  });
});

//delete contact
app.get('/contact/delete/:id', function (req, res) {
  var sql = "DELETE from contacts where id = '"+req.params.id+"' ";
  con.query(sql, function (err) {
      if (err) throw err;
      res.redirect('/');   
  });
});
 
//create server
app.listen(3000, function () {
  console.log('server started at port 3000')
});

