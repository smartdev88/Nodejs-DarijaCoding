
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

    //les requetes sql

    var sql = "UPDATE users SET email = 'achraf', passe = 'achraf' WHERE id = 5";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("modifié");
    });

    var sql = "SELECT * FROM users LIMIT 3";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("résultat: ", data);
    });

    var sql = "DELETE FROM users WHERE id = 6";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("supprimé");
    });
});