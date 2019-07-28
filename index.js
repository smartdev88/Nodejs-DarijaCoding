
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

    //securité
    var email = "hamza"
    var sql = "SELECT * FROM users WHERE email = "+ mysql.escape(email);
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("Résultat  : ", data);
    });
});