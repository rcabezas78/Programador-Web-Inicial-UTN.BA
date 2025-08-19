var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Asegúrate de que la vista exista en views/admin/index.hbs
  res.render('admin/galeria', { 
    layout: 'admin/layout', 
    title: 'Panel de Administración'
  });
});

module.exports = router;