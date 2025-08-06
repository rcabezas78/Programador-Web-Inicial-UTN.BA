// // routes/admin/index.js
// var express = require('express');
// var router = express.Router();

// const app = express();

// /* GET admin dashboard page (now the home page). */
// router.get('/', function(req, res, next) {
//   // Asegúrate de que la vista exista en views/admin/index.hbs
//   res.render('admin/index', { 
//     layout: 'admin/layout', 
//     title: 'Panel de Administración'
//   });
// });

// module.exports = router;


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

module.exports = router;