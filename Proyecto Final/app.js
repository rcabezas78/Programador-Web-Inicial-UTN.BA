var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); // Asegúrate de tenerlo instalado
var hbs = require('hbs');

require('dotenv').config();

// --- Importar tus archivos de ruta ---
var indexRouter = require('./routes/admin/principal'); // El index principal ahora es el del admin
var adminLoginRouter = require('./routes/admin/login'); // Para /admin/login
//var indexRouter = require('./routes/admin/index'); // El index principal ahora es el del admin
//var adminLoginRouter = require('./routes/admin/login'); // Para /admin/login
var adminNovedadesRouter = require('./routes/admin/novedades'); // Para /admin/novedades
var adminPrincipalRouter=require('./routes/admin/principal');
var adminCategoriasRouter=require('./routes/admin/categorias');
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
