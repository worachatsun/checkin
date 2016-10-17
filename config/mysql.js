var mysql = require('mysql');

module.exports = function(){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hjklbnm,',
    database: 'seminar',
  });

  return connection;
}
