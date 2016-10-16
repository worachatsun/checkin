
module.exports = function(http,sql){

  var io = require('socket.io')(http);
  var connection = sql;
  var allTeacher;

  io.on('connection', function(socket){

    socket.on('input', function(msg){
      io.emit('dashboard', msg);
      var update = 'UPDATE sitdb SET check_in = ? Where id = ?';
      connection.query(update,[1,msg]);

      connection.query('SELECT * FROM sitdb where id = '+msg,function(err,rows){
        io.emit('detail', rows);
        io.emit('input', rows);
      });

    });
  });
}
