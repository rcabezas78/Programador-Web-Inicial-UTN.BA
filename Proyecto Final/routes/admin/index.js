var express = require('express');
var router = express.Router();

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


