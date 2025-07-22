var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//llamo dotenv
require('dotenv').config();
var pool = require('./models/bd.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

//Consultas
//select
pool.query('select nombre,edad from empleados').then(function (resultados){
  console.log(resultados)
});

//Insertar

var obj ={
  nombre: 'Rodrigo',
  apellido: 'Cabezas',
  trabajo: 'docente',
  edad: '47',
  salario: '500.000',
  mail: 'rcabezas@umaza.edu.ar'  
}

pool.query('insert into empleados set ?', [obj]).then(function (resultados) {
  console.log(resultados)  
});

//Modificar por id

var id=23;
var obj = {
  trabajo: 'Doc',
}

pool.query('update empleados set ? where idEmp=?', [obj, id]).then(function(resultados){
console.log(resultados);
});

//Borrar
var id=23;
pool.query('delete from empleados where idEmp=?', [obj, id]).then(function(resultados){
console.log(resultados);
});

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
