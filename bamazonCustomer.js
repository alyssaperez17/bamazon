var mysql = require ('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection9{
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Dakota2!,
    database; bamazon_db,
};

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();

});

function afterConnection() {
connection.query("SELECT * FROM products"), function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
});

}