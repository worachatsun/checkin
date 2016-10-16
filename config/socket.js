
module.exports = function(http,sql){

  var io = require('socket.io')(http);

  // connection.query('select count(*) as allTeacher from teacher',function(err,rows){
  //   allTeacher = rows[0].allTeacher;
  // })

  io.on('connection', function(socket){

    socket.on('input', function(msg){
      console.log('message: ' + msg);
      io.emit('dashboard', msg);
    });
  });
}
