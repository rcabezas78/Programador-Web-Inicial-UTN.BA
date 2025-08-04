var express = require('express');
var router = express.Router();

/* GET home page (root of the website). */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Bienvenido' 
  });
});

module.exports = router;