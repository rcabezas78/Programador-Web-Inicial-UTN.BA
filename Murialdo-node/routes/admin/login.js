var express = require('express');
var router = express.Router();
var usuarioModel = require('../../models/usuariosModel');


/*Diseño*/
router.get('/', async function (req, res, next){

    res.render('admin/login',{ //login.hbs
        layout: 'admin/layout'
    });
});

router.post('/', async function (req, res, next){
try{
    var usuario = req.body.usuario;
    var password =req.body.password;

    console.log(req.body);

    var data = await usuarioModel.getUserAndPassword(usuario,password);

    if(data != undefine){
        req.session.id_usuario=data.id; //1
        req.session.nombre=data.usuario; //Rodrigo

        res.redirect('admin/novedades');
    } else{
           
        res.render('admin/login',{ //login.hbs
        layout: 'admin/layout',
        error:true
        })
    }
 } catch (error){
        console.log(error)
    }    
});

module.exports = router;