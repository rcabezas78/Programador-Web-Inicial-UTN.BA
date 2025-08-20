var express = require('express');
var router = express.Router();
var isLoggedIn = require('../../middleware/auth');

// Importa los routers secundarios
var loginRouter = require('./login');
var principalRouter = require('./principal');
var contenidoRouter = require('./contenido');
var categoriasRouter = require('./categorias');
var contactoRouter = require('./contacto');
var galeriaRouter = require('./galeria');
var ABMContenidoRouter = require('./ABMContenido');

// El orden es crucial. Las rutas que no requieren login van primero.
router.use('/login', loginRouter);

//router.use('/', isLoggedIn, principalRouter);
router.use(isLoggedIn);

// El resto de los routers ya se deben encargar de su propia protección
// si el usuario navega directamente a esas URLs.
router.use('/', principalRouter);
router.use('/contenido', contenidoRouter);
router.use('/categorias', categoriasRouter);
router.use('/contacto', contactoRouter);
router.use('/galeria', galeriaRouter);
router.use('/ABMContenido', ABMContenidoRouter);

// // /routes/galeria.js
// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//     // En un proyecto real, aquí obtendrías las fotos de una base de datos
//     res.render('galeria', { title: 'Galería' });
// });

module.exports = router;
