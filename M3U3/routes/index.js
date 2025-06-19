var express = require('express');
var router = express.Router();

/*declaramos la libreria nodemailer que vamos a utilizar*/
var nodemailer=require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {

  // res.render('index', { title: 'M3U3 Express' });
  res.render('index');
});

// router.post('/',async(req,res,next)=>{
//   var nombre=req.body.nombre;
//   var apellido=req.body.apellido;
//   var email=req.body.email;
//   var telefono=req.body.telefono;
//   var mensaje=req.body.mensaje;
// }

module.exports = router;
