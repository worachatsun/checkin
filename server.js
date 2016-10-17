process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var express = require('./config/express');
var app = express();
var mysql = require('./config/mysql');
var sql = mysql();
var http = require('http').Server(app);
var io = require('./config/socket')(http,sql);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

module.exports = app;
