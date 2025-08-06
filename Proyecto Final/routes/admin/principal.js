// routes/admin/index.js
var express = require('express');
var router = express.Router();

/* GET admin dashboard page (now the home page). */
router.get('/', function(req, res, next) {
  // Asegúrate de que la vista exista en views/admin/index.hbs
  res.render('admin/principal', { 
    layout: 'admin/layout', 
    title: 'Panel de Administración'
  });
});

module.exports = router;