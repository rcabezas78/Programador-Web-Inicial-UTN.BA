 var express = require('express');
 var router = express.Router();

var novedadesModel = require('../../models/novedadesModel');


 /*Diseño*/
 router.get('/', async function (req, res, next){

    var novedades= await novedadesModel.getNovedades();

     res.render('admin/novedades',{ //novedades.hbs
         layout: 'admin/layout',
         usuario: req.session.nombre,
         novedades 
     });
 });

 /*Eliminar novedad*/
 router.get('/eliminar/:id', async function (req, res, next){
    const id= req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
     });

 module.exports= router;