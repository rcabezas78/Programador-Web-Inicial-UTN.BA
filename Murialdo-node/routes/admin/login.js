var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next){

    res.render('admin/login',{ //login.hbs
        layout: 'admin/layout'
    });
});

module.exports = router;