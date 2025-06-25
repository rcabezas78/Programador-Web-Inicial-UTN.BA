var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { title } = require('process');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*esto tiene que aparecer despues de la linea anterior que dice 'public'*/
app.use(session({
  secret: 'asasasdd',
  resave: false,
  saveUninitialized: true
}));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', function (req, res) {

  var conocido = Boolean(req.session.nombre);


  res.render('index', {
    title: 'Ejercicio M3U4',
    conocido: conocido,
    nombre: req.session.nombre,
    edad:req.session.edad
  });
});

app.post('/Ingresar', function (req, res) {

  /*var conoc=req.body.nombre;*/
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre,
    req.session.edad=req.body.edad
  }
  res.redirect('/');
});


app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
