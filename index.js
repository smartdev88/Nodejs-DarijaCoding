
var mysql = require('mysql');

// etablir la connexion
var connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    //ajouté la nom de la base lorsqu'on veut créer la table.
    database: "appnodejs"
});
   
connexion.connect(function(err) {
    if (err) throw err;
    console.log("Connecté");
//création base donnée
    /*connexion.query("CREATE DATABASE appNodejs", (err) => {
        if(err) throw err;
        console.log("base de donnée ajoutée");
    });*/
//creation de la table users
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), passe VARCHAR(255))";
    connexion.query(sql, (err) => {
        if(err) throw err;
        console.log("table ajoutée");
    });
});