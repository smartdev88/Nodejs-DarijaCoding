
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

    //afficher tous les utilisateurs
    var sql = "SELECT * FROM users";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("utilisateurs : ", data);
    });

    //afficher un utilisateur avec un id donnée
    var sql = "SELECT * FROM users WHERE id=4";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("utilisateur est  : ", data);
    });

    //afficher un utilisateur avec un email donnée
    var sql = "SELECT * FROM users WHERE email='hamza'";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("Résultat est  : ", data);
    });

    //afficher  utilisateurs qui email fini par e
    var sql = "SELECT * FROM users WHERE email LIKE '%e'";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("Résultat  : ", data);
    });

    //afficher  utilisateurs qui email commence par h
    var sql = "SELECT * FROM users WHERE email LIKE 'h%'";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("Résultat  : ", data);
    });
});