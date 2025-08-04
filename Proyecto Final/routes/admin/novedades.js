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

 /*Agregar novedad*/
 router.get('/agregar', (req, res, next)=>{//admin/novedades/agregar
    res.render('admin/agregar',{
    layout: 'admin/layout'     //agregar.hbs
     });
    })

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" &&
            req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        });
    }
});

 module.exports= router;