var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/*manejador de rutas*/

var contactoRouter=require('./routes/contacto') /*contacto.js*/


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/contacto', contactoRouter); /*cuando recibe contacto me va a llamar contactoRouter*/

/*ruta 1*/

app.get('/prueba', function(req, res){
  res.send('Página de prueba')
})

/*ruta 2*/

app.get('/destacados', function(req, res){
  res.send('Página de destacados')
})

/*ruta 3*/

app.get('/nosotros', function(req, res){
  res.send('Página de nosotros')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
