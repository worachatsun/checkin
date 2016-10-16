var mysql = require('mysql');

module.exports = function(){
  var connection = mysql.createConnection({
    host: 'db.chakree.me',
    user: 'alchemist',
    password: 'alchemististhebest',
    database: 'alchemist_orientation',
  });

  return connection;
}
