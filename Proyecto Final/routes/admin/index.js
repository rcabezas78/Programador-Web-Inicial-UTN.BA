// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // Ahora renderizamos views/index.hbs sin un layout específico si no lo necesitas,
//   // o con 'layout' si tienes un layout general para el frontend.
//   res.render('/admin/index', { 
//     title: 'Página Principal',
//     // Si necesitas pasar alguna variable a tu index.hbs, hazlo aquí
//   });
// });

// module.exports = router;

// routes/admin/index.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/index', { // Esto buscará views/admin/index.hbs
    layout: 'admin/layout', // Si usas un layout específico para el admin
    title: 'Panel de Administración'
  });
});

module.exports = router;