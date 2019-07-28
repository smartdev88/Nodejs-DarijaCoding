
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

    //l'ajout d'un utilisateur
    /*var sql = "INSERT INTO users (email, passe) VALUES ('lagyassine88@gmail.com', 'yassyassine')";
    connexion.query(sql, (err) => {
        if(err) throw err;
        console.log("utilisateur ajouté");
    });*/

    //l'ajout de plusieurs utilisateurs
    /*var users = [
        ['hamza', '789hamza'],
        ['soufiane', '789soufiane'],
        ['anas', '789anas']
    ];
    var sql = "INSERT INTO users (email, passe) VALUES ?";
    connexion.query(sql, [users], (err) => {
        if(err) throw err;
        console.log("utilisateurs ajoutés");
    });*/
     //l'ajout d'un utilisateur, et afficher son id
    var sql = "INSERT INTO users (email, passe) VALUES ('issa','issa')";
    connexion.query(sql, (err, data) => {
        if(err) throw err;
        console.log("utilisateur ajouté avec id : ", data.insertId);
    });
});