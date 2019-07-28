
var mysql = require('mysql');

// etablir la connexion
var connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "appnodejs"
});
   
connexion.connect(function(err) {
    if (err) throw err;
    console.log("Connecté");

    //suppression de la table users
    var sql = "DROP TABLE IF EXISTS users";
    connexion.query(sql, (err) => {
        if(err) throw err;
        console.log("supprimé");
    });

    /*npm install nodemon */
});