var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// --- Importar tus archivos de ruta ---
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// Importa tus rutas de administración
var adminRouter = require('./routes/admin/index'); // Para /admin
var adminLoginRouter = require('./routes/admin/login'); // Para /admin/login
var adminNovedadesRouter = require('./routes/admin/novedades'); // Para /admin/novedades

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// --- Definición de Rutas (¡ESTO ES CLAVE!) ---
app.use('/', indexRouter); // Monta routes/index.js para la ruta raíz '/'
app.use('/users', usersRouter); // Monta routes/users.js para '/users'

// Monta tus rutas de administración
app.use('/admin', adminRouter); // Monta routes/admin/index.js para '/admin'
app.use('/admin/login', adminLoginRouter); // Monta routes/admin/login.js para '/admin/login'
app.use('/admin/novedades', adminNovedadesRouter); // Monta routes/admin/novedades.js para '/admin/novedades'


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