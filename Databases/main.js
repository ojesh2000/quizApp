var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : "root",
  password : "password",
  database: "mydb"
});

connection.connect();

exports.con = connection;