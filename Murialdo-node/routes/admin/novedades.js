var express = require('express');
var router = express.Router();

/*Diseño*/
router.get('/', async function (req, res, next){

    res.render('admin/novedades',{ //novedades.hbs
        layout: 'admin/layout'
    });
});

module.exports= router;