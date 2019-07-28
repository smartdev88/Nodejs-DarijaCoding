
var mysql = require('mysql');

// etablir la connexion
var connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
   
connexion.connect(function(err) {
    if (err) throw err;
    console.log("Connecté");
});