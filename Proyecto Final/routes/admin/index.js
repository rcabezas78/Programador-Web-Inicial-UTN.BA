var express = require('express');
var router = express.Router();
var isLoggedIn = require('../../middleware/auth');

// Importa los routers secundarios
var loginRouter = require('./login');
var principalRouter = require('./principal');
var novedadesRouter = require('./novedades');
var categoriasRouter = require('./categorias');
var contactoRouter = require('./contacto');

// El orden es crucial. Las rutas que no requieren login van primero.
router.use('/login', loginRouter);

// ✅ CORREGIDO: Aplica el middleware directamente a la ruta principal
// La ruta '/' de este router (es decir, /admin/) ahora está protegida
//router.use('/', isLoggedIn, principalRouter);
router.use(isLoggedIn);

// El resto de los routers ya se deben encargar de su propia protección
// si el usuario navega directamente a esas URLs.
router.use('/', principalRouter);
router.use('/novedades', novedadesRouter);
router.use('/categorias', categoriasRouter);
router.use('/contacto', contactoRouter);


module.exports = router;