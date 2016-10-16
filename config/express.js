var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function(){
  var app = express();
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }else {
    app.use(compression);
  }
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(validator());

  app.set('view engine','ejs');
  app.set('views','./app/views');

  require('../app/routes/index.routes')(app);

  app.use(express.static('./public'));

  return app;
};
