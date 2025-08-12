var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

// Rutas individuales para el área de administración
var loginRouter = require('./login');
var principalRouter = require('./principal');
var novedadesRouter = require('./novedades');
var categoriasRouter = require('./categorias');

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usa cada sub-router dentro del router de admin
router.use('/', principalRouter); // La ruta principal de admin
router.use('/login', loginRouter);
router.use('/novedades', novedadesRouter);
router.use('/categorias', categoriasRouter);




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/principal', { 
        layout: 'admin/layout' 
    });
});

router.get('/categorias', function(req, res, next) {
    res.render('admin/categorias', { 
        layout: 'admin/layout' 
    });
});

router.get('/novedades', function(req, res, next) {
    res.render('admin/novedades', { 
        layout: 'admin/layout' 
    });
});

module.exports = router;


