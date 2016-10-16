var mysql = require('mysql');

module.exports = function(){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'seminar',
    charset  : 'utf8',
    port: 8889,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });

  return connection;
}
